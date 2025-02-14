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

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 361px;
  margin-bottom: 111px;
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 58px;
  background-color: ${tokens.colors.gray[600]};
  color: white;
  border: none;
  border-radius: 12px;
`;

export const Head3 = styled.div`
  width: 361px;
  ${tokens.typography.h3};
  color: ${tokens.colors.gray[900]};
  margin-bottom: 18px;
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 361px;
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
