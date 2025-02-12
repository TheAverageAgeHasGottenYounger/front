import styled from 'styled-components';
import * as tokens from "../../tokens";

export const Button = styled.button`
  width: 100%;
  max-width: 361px;
  height: 58px;
  ${tokens.typography.button_Sb_18};
  color: ${(props) => (props.primary ? "white" : tokens.colors.gray[700])};
  background-color: ${(props) =>
    props.primary ? tokens.colors.primary[0] : props.outline ? "transparent" : tokens.colors.gray[200]};
  border: ${(props) => (props.outline ? `1px solid ${tokens.colors.gray[300]}` : "none")};
  border-radius: 40px;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &:hover {
    background-color: ${(props) =>
      props.primary ? tokens.colors.primary.darken[100] : props.outline ? tokens.colors.gray[100] : tokens.colors.gray[100]};
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;

export const Label = styled.div`
  ${tokens.typography.button_Sb_18};
  color: ${tokens.colors.gray[700]};
  padding: 4px;
`;

export const Star = styled.span`
  ${tokens.typography.button_Sb_18};
  color: #D32F2F;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 361px;
  height: 58px;
  padding: 0 24px;
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[700]};
  background-color: ${tokens.colors.gray[100]};
  border: none;
  border-radius: 12px;
  &:focus {
    outline: none;
    border: none;
  }
  &::placeholder {
    color: ${tokens.colors.gray[400]};
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 361px;
  height: 58px;
  background-color: ${tokens.colors.gray[100]};
  border-radius: 12px;
  position: relative;
  padding: 0 24px;
`;

export const Dropdown = styled.select`
  width: 100%;
  max-width: 361px;
  height: 58px;
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[700]};
  background: url("/img/dropdown_triangle.svg") no-repeat right 16px center;
  background-size: 16px;
  background-color: ${tokens.colors.gray[100]};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  appearance: none;
  padding: 0 48px 0 24px;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 361px;
`;

export const TextAreaField = styled.textarea`
  max-height: 78px;
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[700]};
  background-color: transparent;
  border: 1px solid ${tokens.colors.gray[300]};
  border-radius: 12px;
  padding: 21px;
  resize: none;
  word-break: break-all;
  &:focus {
    outline: none;
    border-color: ${tokens.colors.gray[400]};
  }
  &::placeholder {
    color: ${tokens.colors.gray[400]};
  }
`;

export const TextAreaCounter = styled.div`
  align-self: flex-end;
  font-size: 14px;
  color: ${tokens.colors.gray[300]};
  margin-top: 4px;
`;
