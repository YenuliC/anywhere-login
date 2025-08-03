import React from "react";
import { Container, FormWrapper, Title, Subtitle } from "./LoginPage.styles";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";

const LoginPage = () => {
  return (
    <Container>
      <FormWrapper>
        <Subtitle>Start for free</Subtitle>
        <Title>Create new account</Title>
        <FormInput label="First Name" placeholder="Enter your first name" />
        <FormInput label="Last Name" placeholder="Enter your last name" />
        <FormInput label="Email" placeholder="Enter your email" />
        <FormInput label="Password" type="password" placeholder="Enter password" />
        <Button>Create account</Button>
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;
