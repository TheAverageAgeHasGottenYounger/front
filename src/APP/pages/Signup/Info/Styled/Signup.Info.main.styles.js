import styled from "styled-components";
import * as tokens from "../../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;

  position: fixed;
  top: 0;
  left: 0;

  background-color: white;
  z-index: 100;
`;

export const StepImg = styled.img`
  /* width: 361px;
  height: 15px; */
`;

export const Head = styled.div`
  ${tokens.typography.h2};
  color: ${tokens.colors.gray[900]};
  width: 361px;
  // margin-top: 76px;
  margin-bottom: 38px;
`;

// 프로필 /////////////////////////////////
export const ProfileContainer = styled.div``;

export const ProfileBox = styled.div`
  position: relative;
  width: 138px;
  height: 138px;
  border-radius: 30px;
  margin-bottom: 44px;
`;

export const Profile = styled.img`
  width: 138px;
  height: 164px;
  border-radius: 30px;
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
///////////////////////////////////////////

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 38px;
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 361px;
`;

export const AddButton = styled.button`
  background-color: white;
  width: 361px;
  height: 58px;
  border: 1.5px dotted ${tokens.colors.gray[300]};
  border-radius: 12px;
  margin-top: 12px;
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
