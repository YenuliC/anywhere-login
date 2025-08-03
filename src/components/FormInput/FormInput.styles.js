import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
  flex: ${props => props.style?.flex || 'none'};
  margin-right: ${props => props.style?.marginRight || '0'};
  margin-left: ${props => props.style?.marginLeft || '0'};
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
  display: block;
  font-weight: 500;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 70%;
  right: 15px;
  transform: translateY(-50%);
  color: #999;
  cursor: pointer;
  z-index: 2;
  
  &:hover {
    color: #666;
  }
`;

export const StyledInput = styled.input`
  padding: 12px 40px 12px 12px;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  background-color: #fff;
  transition: all 0.2s ease;
  
  &::placeholder {
    color: #999;
  }
`;
