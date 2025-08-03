import React from "react";
import {
  Container,
  LeftSection,
  RightSection,
  FormWrapper,
  Subtitle,
  Title,
  BottomText,
  ChangeMethod
} from "./LoginPage.styles";
import Navbar from "../../components/Navbar/Navbar";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";


const LoginPage = () => {
  return (
    <Container>
            <LeftSection>
        <Navbar />
K
      <FormWrapper>
        <Subtitle>Start for free</Subtitle>
        <Title>Create new account</Title>

        <BottomText>
            Already a member? <a href="/login">Log In</a>
          </BottomText>
          
        <FormInput label="First Name" placeholder="Enter your first name" icon={<FaUser />}/>
        <FormInput label="Last Name" placeholder="Enter your last name" icon={<FaUser />}/>
        <FormInput label="Email" placeholder="Enter your email" icon={<FaEnvelope />} />
        <FormInput label="Password" type="password" placeholder="Enter password" icon={<FaLock />} />
        <Button>Create account</Button>
                  <ChangeMethod>Change method</ChangeMethod>

      </FormWrapper>
         </LeftSection>
      <RightSection />
    </Container>
  );
};

export default LoginPage;
