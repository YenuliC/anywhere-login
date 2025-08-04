import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  ButtonContainer,
} from "../SignupPage/LoginPage.styles";
import Navbar from "../../components/Navbar/Navbar";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { FaEye, FaChevronDown } from "react-icons/fa";

const LoginPage = () => {
  // Form state
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // clear error when typing
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setError("Username and password are required");
      return;
    }

    try {
      const data = await login(form.username, form.password);
      localStorage.setItem("accessToken", data.token);
      localStorage.setItem("refreshToken", data.refreshToken);
      alert("Logged in successfully!");
      console.log("Login response:", data); // <-- THIS WILL LOG TO CONSOLE
    } catch (error) {
      if (error.response) {
        alert(
          `Login failed: ${
            error.response.data.message || "Invalid credentials"
          }`
        );
        console.error("API Error:", error.response.data);
      } else {
        alert("Login failed: Network or server issue");
        console.error("Unexpected Error:", error);
      }
    }
  };
  return (
    <Container>
      <LeftSection>
        <Navbar />
        <FormWrapper>
          <Subtitle>WELCOME BACK</Subtitle>
          <Title>Log in to your account.</Title>

          <BottomText>
            Not A Member? <Link to="/signup">Sign Up</Link>
          </BottomText>

          <form onSubmit={handleSubmit}>
            <FormInput
              label="Username"
              name="username"
              value={form.username}
              onChange={handleChange}
              icon={<FaChevronDown />}
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              icon={<FaEye />}
            />

            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}

            <ButtonContainer>
              <ChangeMethod>Change method</ChangeMethod>
              <Button type="submit">Log in</Button>
            </ButtonContainer>
          </form>
        </FormWrapper>
      </LeftSection>
      <RightSection />
    </Container>
  );
};

export default LoginPage;
