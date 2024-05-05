import React, { useId, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Container, Icon, IconAndInput, InputField, Label } from "./style";
type InputFieldProps = {
  label?: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const PasswordInput = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, onChange, placeholder, ...props }, ref) => {
    const [show, setShow] = useState(false);
    const id = useId();
    return (
      <Container>
        {label && <Label htmlFor={id}>{label}</Label>}
        <IconAndInput>
          <InputField
            type={show ? "text" : "password"}
            ref={ref}
            {...props}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
          />
          <Icon
            onClick={() => {
              setShow(!show);
            }}
            title={show ? "Hide Password" : "Show Password"}
          >
            {show ? <FaRegEyeSlash /> : <FaRegEye />}
          </Icon>
        </IconAndInput>
      </Container>
    );
  }
);

export default PasswordInput;
