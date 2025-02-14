import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding: 90px 0;
`;

export const Logo = styled.img`
  background-color: black;
  width: 361px;
  height: 271px;
  border-radius: 30px;
  // margin-top: 51px;
  margin-bottom: 35px;
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

export const Navi = styled.div`
  margin-top: 65px;
`;
