import React from "react";
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
import { FaUser, FaEnvelope, FaLock, FaEye, FaChevronDown, FaCopy } from "react-icons/fa";

const LoginPage = () => {
  return (
    <Container>
      <LeftSection>
        <Navbar />
        <FormWrapper>
          <Subtitle>START FOR FREE</Subtitle>
          <Title>Create new account.</Title>

          <BottomText>
            Already A Member? <a href="/login">Log In</a>
          </BottomText>
          
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
            <Button>Create account</Button>
          </ButtonContainer>
        </FormWrapper>
      </LeftSection>
      <RightSection />
    </Container>
  );
};

export default LoginPage;
