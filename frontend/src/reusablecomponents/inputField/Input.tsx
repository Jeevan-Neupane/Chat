import React, { useId } from "react";

import { Container, InputField, Label } from "./style";
type InputFieldProps = {
  label?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, type = "text", onChange, placeholder, ...props }, ref) => {
    const id = useId();
    return (
      <Container>
        {label && <Label htmlFor={id}>{label}</Label>}
        <InputField
          type={type}
          ref={ref}
          {...props}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Container>
    );
  }
);

export default Input;
