import styled from "styled-components";
import backgroundImage from "../../assets/background.png"; // Optional if you have an image

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftSection = styled.div`
  flex: 1;
  background-color: #f7f9fc;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
`;

export const FormWrapper = styled.div`
  max-width: 400px;
  margin: auto;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 8px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
`;

export const BottomText = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  color: #555;
  a {
    color: #007bff;
    text-decoration: none;
  }
`;

export const ChangeMethod = styled.button`
  margin-top: 16px;
  background: none;
  border: none;
  color: #007bff;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
