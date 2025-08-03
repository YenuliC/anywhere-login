import React, { useState } from "react";
import { login } from "../../services/authService";

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

const LoginPage = () => {

  //Form State
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //Error State
  const [errors, setErrors] = useState({});

  //Change handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  //Validation logic
  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //Submit handler
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  try {
    const data = await login(form.email, form.password);
    localStorage.setItem("accessToken", data.accessToken);
    alert("Logged in successfully!");
  } catch (error) {
    alert("Login failed!");
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
