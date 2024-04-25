import { useForm } from "react-hook-form";
import {
  ErrorMessage,
  InputWrapper,
  Label,
  OptionsDropDown,
  SelectDropDown,
  SignUpButton,
  SignUpFormContainer,
} from "./style";
import { useState, ChangeEvent, useRef, useEffect } from "react";
import {
  Avatar,
  AvatarImage,
  AvatarPlaceholder,
  Container,
} from "./avatarstyle";
import ButtonLoading from "../alert/Loading.tsx";
import Input from "../../reusablecomponents/inputField/Input";
import { gender } from "../../data/gender.ts";
import { useRegisterUserMutation } from "../../store/api/userApi.ts";
import ErrorAlert from "../alert/ErrorAlert.tsx";
import SuccessAlert from "../alert/SuccessAlert.tsx";
type Props = {};
type Inputs = {
  fullName: string;
  username: string;
  password: string;
  email: string;
  gender: string;
};

type ProfileImage = File | null;

const Signup = ({}: Props) => {
  const [profileImage, setProfileImage] = useState<ProfileImage>(null);
  // @ts-ignore
  const [registerUser, status] = useRegisterUserMutation();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();

  const onFormSubmit = (data: Inputs) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("avatar", profileImage as File);
    formData.append("gender", data.gender);
    console.log(formData);
    registerUser(formData);
  };
  const { data, isLoading, error } = status;

  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  console.log(data);
  console.log(error);

  useEffect(() => {
    if (data) {
      SuccessAlert({
        title: "Success",
        message: data?.data?.message,
      });
    }

    if (error) {
      ErrorAlert({
        title: "Error",
        // @ts-ignore
        message: error?.data?.message.message,
      });
    }
  }, [data, error]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickAvatar = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <SignUpFormContainer onSubmit={handleSubmit(onFormSubmit)}>
      <InputWrapper>
        <Container>
          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <Avatar onClick={handleClickAvatar}>
            {image ? (
              <AvatarImage
                src={image}
                alt='Avatar Preview'
              />
            ) : (
              <AvatarPlaceholder>+</AvatarPlaceholder>
            )}
          </Avatar>
          <Label htmlFor='avatarInput'>Choose Photo</Label>
        </Container>
      </InputWrapper>
      <InputWrapper>
        <Input
          type='text'
          label='Full Name'
          placeholder='Enter Your Full Name '
          {...register("fullName", {
            required: {
              value: true,
              message: "Full Name is required",
            },
          })}
        />
        {errors.fullName && (
          <ErrorMessage>{errors.fullName.message}</ErrorMessage>
        )}
      </InputWrapper>

      <InputWrapper>
        <Input
          type='text'
          label='Username'
          placeholder='Enter Your Username'
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Username contains a-z and A-Z only",
            },
          })}
        />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}
      </InputWrapper>
      <InputWrapper>
        <Input
          type='email'
          label='Email'
          placeholder='Enter Your Email'
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
        <Label>Gender</Label>
        <SelectDropDown {...register("gender")}>
          {gender.map((item, index) => {
            return (
              <OptionsDropDown
                key={index}
                value={item}
              >
                {item}
              </OptionsDropDown>
            );
          })}
        </SelectDropDown>
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

      <SignUpButton
        disabled={isLoading}
        cursor={isLoading ? "not-allowed" : "pointer"}
      >
        {isLoading ? <ButtonLoading /> : "Sign Up"}
      </SignUpButton>
    </SignUpFormContainer>
  );
};

export default Signup;
