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
