import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
  color: #555;
`;

export const StyledInput = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;
