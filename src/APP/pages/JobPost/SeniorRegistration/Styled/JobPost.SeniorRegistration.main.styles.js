import styled from "styled-components";
import * as tokens from "../../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
`;

export const Head = styled.div`
  ${tokens.typography.h2};
  color: ${tokens.colors.gray[900]};
  width: 361px;
  // margin-top: 76px;
  margin-bottom: 38px;
`;

export const Logo = styled.div`
  background-color: black;
  width: 138px;
  height: 164px;
  border-radius: 30px;
  margin-bottom: 28px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  margin-bottom: 38px;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  margin-bottom: 18px;
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 361px;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 361px;
`;

export const AddressSearchButton = styled.button`
  width: 100px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${tokens.colors.gray[600]};
  ${tokens.typography.body_M_16};
  color: white;
  border: none;
  border-radius: 12px;
`;

export const AddButton = styled.button`
  display: flex;
  background-color: white;
  width: 361px;
  height: 58px;
  ${tokens.typography.label_Sb_16};
  border: 1.5px solid ${tokens.colors.gray[300]};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 60px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: white;
  z-index: 100;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`;

export const ButtoninnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 361px;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tokens.typography.h3};
  color: ${tokens.colors.gray[900]};
  padding: 4px;
`;

export const ExtraLabel = styled.div`
  ${tokens.typography.Body_M_18};
  color: ${tokens.colors.gray[600]};
  padding: 4px;
`;

export const SelectGenderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6.5px;
  margin-bottom: 18px;
`;

export const SelectGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

export const SelectColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.5px;
  margin-bottom: 18px;
`;