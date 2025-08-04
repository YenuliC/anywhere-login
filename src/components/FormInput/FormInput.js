import React from "react";
import { InputWrapper, StyledInput, Label, IconWrapper } from "./FormInput.styles";

const FormInput = ({ label, icon, style, ...props }) => {
  return (
    <InputWrapper style={style}>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} />
      {icon && <IconWrapper>{icon}</IconWrapper>}
    </InputWrapper>
  );
};

export default FormInput;
