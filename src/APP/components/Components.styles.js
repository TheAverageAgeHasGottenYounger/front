import styled from "styled-components";
import * as tokens from "../../tokens";

export const Button = styled.button`
  width: 100%;
  max-width: 361px;
  height: 58px;
  ${tokens.typography.button_Sb_18};
  color: ${(props) => (props.primary ? "white" : tokens.colors.gray[700])};
  background-color: ${(props) =>
    props.primary
      ? tokens.colors.primary[0]
      : props.outline
      ? "transparent"
      : tokens.colors.gray[200]};
  border: ${(props) =>
    props.outline ? `1px solid ${tokens.colors.gray[300]}` : "none"};
  border-radius: 40px;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &:hover {
    background-color: ${(props) =>
      props.primary
        ? tokens.colors.primary.darken[100]
        : props.outline
        ? tokens.colors.gray[100]
        : tokens.colors.gray[100]};
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
  color: #d32f2f;
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

export const SelectButton = styled.button`
  padding: 12px 16px;
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  border: 1px solid
    ${({ selected }) =>
      selected ? tokens.colors.primary[0] : tokens.colors.gray[300]};
  background-color: ${({ selected }) =>
    selected ? tokens.colors.primary.lighten[400] : "transparent"};
  color: ${tokens.colors.gray[700]};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

// 카드
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  width: 337px;
  border: none;
  border-radius: 22px;
  padding: 12px;
  margin-bottom: 24px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardProfile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: 12px;
`;

export const CardInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardName = styled.div`
  ${tokens.typography.label_Sb_16};
  color: ${tokens.colors.gray[900]};
  margin: 9px 0 8px 0;
`;

export const CardInfoBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
`;

export const CardInfoIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 4px;
`;

export const CardInfoText = styled.div`
  ${tokens.typography.label_Sb_14};
  color: ${tokens.colors.gray[600]};
`;

export const CardRequestBar = styled.div`
  ${tokens.typography.label_Sb_14};
  color: #18181b;
  width: 84px; // 초과시 줄바꿈
`;

export const CardCheckButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const CardCheckButton = styled.button`
  background-color: #ff8d3c;
  ${tokens.typography.label_Sb_14};
  color: white;
  width: 120px;
  height: 38px;
  border: none;
  border-radius: 23.5px;
`;

export const BigCardRequestBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const BigCardRequestBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
`;

export const CardRequestIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 4px;
`;

export const CardRequestText = styled.div`
  ${tokens.typography.label_Sb_14};
  color: ${tokens.colors.gray[600]};
`;
