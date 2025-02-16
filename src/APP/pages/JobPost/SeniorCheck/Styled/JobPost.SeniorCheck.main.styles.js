import styled from "styled-components";
import * as tokens from "../../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 86px;
  padding-bottom: 135px;
`;

export const HeadContainer = styled.div`
  margin-bottom: 25px;
`;

export const Logo = styled.div`
  background-color: black;
  width: 138px;
  height: 164px;
  border-radius: 30px;
  margin-bottom: 28px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 70px;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 127px;
  gap: 6px;
`;

export const Profile = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  margin-bottom: 28px;
`;

export const ProfileLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${tokens.typography.Body_M_18};
  color: ${tokens.colors.gray[900]};

`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const Upload = styled.button`
  background-color: white;
  color: ${tokens.colors.gray[700]};
  position: absolute;
  width: 114px;
  height: 42px;
  border: 1.5px solid ${tokens.colors.gray[500]};
  border-radius: 40px;
  z-index: 100;
  bottom: -26px;
  right: 12px;
  /* cursor: pointer; */
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

export const ExtraInstruction = styled.div`
  ${tokens.typography.Body_M_16};
  color: ${tokens.colors.gray[700]};
`;

export const ExtraInstructionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
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