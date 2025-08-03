import React from "react";
import { InputWrapper, StyledInput, Label,IconWrapper } from "./FormInput.styles";

const FormInput = ({ label, icon,...props }) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <IconWrapper>{icon}</IconWrapper>
      <StyledInput {...props} />
    </InputWrapper>
  );
};

export default FormInput;
