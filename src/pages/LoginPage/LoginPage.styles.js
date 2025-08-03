import styled from "styled-components";
import backgroundImage from "../../assets/background.png"; // Optional if you have an image

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftSection = styled.div`
  flex: 1;
  background-color: #ffffff;
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
  padding: 40px 0;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #000;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #007bff;
    border-radius: 50%;
    top: 8px;
    right: -12px;
  }
`;

export const BottomText = styled.p`
  margin-bottom: 32px;
  font-size: 14px;
  color: #555;
  a {
    color: #28a745;
    text-decoration: none;
    font-weight: 500;
  }
`;

export const NameFieldsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  
  > div {
    flex: 1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const ChangeMethod = styled.button`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  color: #6c757d;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e9ecef;
    border-color: #dee2e6;
  }
`;
