import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  background-color: transparent;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`;

export const LogoCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #007bff;
  margin-right: 8px;
`;

export const NavLinks = styled.div`
  a {
    margin-left: 24px;
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #007bff;
    }
  }
`;
