import React from "react";
import { InputWrapper, StyledInput, Label } from "./FormInput.styles";

const FormInput = ({ label, ...props }) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} />
    </InputWrapper>
  );
};

export default FormInput;
