import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 86px;
  padding-bottom: 135px;
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

export const LocateCount = styled.div`
  display: flex;
  justify-content: flex-end;
  ${tokens.typography.label_Sb_14};
  color: ${tokens.colors.primary[0]};
  width: 361px;
`;

export const LocateList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 내용이 넘치면 자동 줄바꿈 */
  gap: 10px; /* 아이템 간 간격 */
  width: 361px;
  margin-bottom: 14px;
`;

export const LocateItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${tokens.colors.primary.lighten[400]};

  width: 155px;
  height: 44px;
  border: none;
  border-radius: 8px;

  padding: 0 10px;
`;

export const LocateItemText = styled.div`
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.primary.darken[100]};
  width: 119px;
  overflow: hidden; /* 넘치는 내용 감추기 */
  white-space: nowrap; /* 줄바꿈 방지 */
  text-overflow: ellipsis; /* 넘치는 텍스트 '...' 표시 */
`;

export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 6px;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  /* margin-bottom: 18px; */
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 361px;
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
  margin-top: 18px;
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
  justify-content: flex-end;
  padding: 8px;
`;

export const SelectContainer = styled.div`
  display: flex;
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
