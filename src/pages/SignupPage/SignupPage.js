import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../services/authService";

import {
  Container,
  LeftSection,
  RightSection,
  FormWrapper,
  Subtitle,
  Title,
  BottomText,
  ChangeMethod,
  NameFieldsContainer,
  ButtonContainer
} from "./LoginPage.styles";
import Navbar from "../../components/Navbar/Navbar";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { FaEye, FaChevronDown, FaCopy } from "react-icons/fa";

const SignupPage = () => {

  //Submit handler
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await signup("Michał", "Masiak", "michal.masiak@anywhere.co", "password123");
    localStorage.setItem("accessToken", data.accessToken);
    alert("Account created successfully!");
  } catch (error) {
    alert("Signup failed!");
    console.error(error);
  }
  };

  return (
    <Container>
      <LeftSection>
        <Navbar />
        <FormWrapper>
          <Subtitle>START FOR FREE</Subtitle>
          <Title>Create new account.</Title>

          <BottomText>
            Already A Member? <Link to="/login">Log In</Link>
          </BottomText>
          
          <form onSubmit={handleSubmit}>
            <NameFieldsContainer>
              <FormInput 
                label="First name" 
                defaultValue="Michał" 
                icon={<FaCopy />}
              />
              <FormInput 
                label="Last name" 
                defaultValue="Masiak" 
                icon={<FaCopy />}
              />
            </NameFieldsContainer>
            
            <FormInput 
              label="Email" 
              defaultValue="michal.masiak@anywhere.co" 
              icon={<FaChevronDown />}
            />
            <FormInput 
              label="Password" 
              type="password" 
              defaultValue="........" 
              icon={<FaEye />}
            />
            
            <ButtonContainer>
              <ChangeMethod>Change method</ChangeMethod>
              <Button type="submit">Create account</Button>
            </ButtonContainer>
          </form>
        </FormWrapper>
      </LeftSection>
      <RightSection />
    </Container>
  );
};

export default SignupPage;
