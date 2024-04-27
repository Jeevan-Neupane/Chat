import { useForm } from "react-hook-form";
import {
  LoginFormContainer,
  LoginButton,
  ErrorMessage,
  InputWrapper,
} from "./style";
import Input from "../../reusablecomponents/inputField/Input";
import ButtonLoading from "../alert/Loading.tsx";
import { useLoginUserMutation } from "../../store/api/userApi.ts";
import { useEffect } from "react";
import SuccessAlert from "../alert/SuccessAlert.tsx";
import ErrorAlert from "../alert/ErrorAlert.tsx";
import { useNavigate } from "react-router-dom";
type Inputs = {
  password: string;
  email: string;
};
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../store/store.ts";
type Props = {};

const Login = ({}: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useDispatch();

  const [loginUser, status] = useLoginUserMutation();

  const { data, error, isLoading } = status;

  const onFormSubmit = (data: Inputs) => {
    loginUser(data);
  };
  useEffect(() => {
    if (data) {
      SuccessAlert({
        title: "Success",
        message: data?.message,
      });
      dispatch(setToken(data?.token));
      dispatch(setUser(data?.data));
      navigate("/");
    }

    if (error) {
      ErrorAlert({
        title: "Error",
        // @ts-ignore
        message: error?.data?.message.message,
      });
    }
  }, [data, error]);

  return (
    <LoginFormContainer onSubmit={handleSubmit(onFormSubmit)}>
      <InputWrapper>
        <Input
          type='text'
          label='Email'
          placeholder='Enter a email'
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid Email",
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <Input
          type='password'
          label='Password'
          placeholder='Enter Your Password'
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 8,
              message: "Password should be atleast 8 characters",
            },
          })}
        />
      </InputWrapper>

      <LoginButton
        disabled={isLoading}
        cursor={isLoading ? "not-allowed" : "pointer"}
      >
        {isLoading ? <ButtonLoading /> : "Sign Up"}
      </LoginButton>
    </LoginFormContainer>
  );
};

export default Login;
