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

export const ProfileWrapper = styled.div`
  margin-bottom: 48px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 22px;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  max-width: 361px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  position: relative;
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

export const SelectedIcon = styled.img`
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  width: 26px;
  height: 26px;
`;

export const ProfileLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${tokens.typography.body_M_18};
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
  ${tokens.typography.body_M_18};
  color: ${tokens.colors.gray[600]};
  padding: 4px;
`;

export const ExtraInstruction = styled.div`
  ${tokens.typography.body_M_16};
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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // 반투명 배경
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 361px;
  height: 234px;
  border-radius: 26px;
`;

export const ModalCloseButton = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const ModalText = styled.div`
  ${tokens.typography.h3};
  color: ${tokens.colors.gray[900]};
  margin-top: 47px;
  margin-bottom: 40px;
  text-align: center;
`;

export const ModalButton = styled.button`
  background: ${tokens.colors.gray[900]};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
`;

export const AddressLabel = styled.div`
  display: flex;
  align-items: center;
  ${tokens.typography.button_Sb_18};
  color: ${tokens.colors.gray[900]};
  margin-top: 27px;
`;

export const searchBoxContainer = styled.div`
  width: 358px;
  height: 48px;
  display: flex;
  align-items: center;
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[400]};
  background-color: #fafafa;
  border-radius: 29px;
  border: 2px solid #d4d4d8;
  margin-top: 18px;
`;

export const searchBoxIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 16px;
`;

export const searchBoxInput = styled.input`
  display: flex;
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[900]};
  width: 100%;
  padding: 16px;
`;

export const POIList = styled.div`
  margin-top: 10px;
  overflow-y: auto;
`;

export const POIItem = styled.div`
  display: flex;
  width: 358px;
  padding: 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const searchResultBox = styled.div`
  display: flex;
  flex-direction: column;
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[900]};
  width: 100%;
  height: auto;
  margin-left: 16px;
`;

export const AddressText = styled.div`
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[900]};
`;

export const SubAddressText = styled.div`
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[400]};
`;

export const AddressModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // 반투명 배경
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 200;
`;

export const AddressModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 390px;
  height: 792px;
  border-radius: 26px 26px 0 0;
`;
