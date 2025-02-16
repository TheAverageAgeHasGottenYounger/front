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

export const SignupLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 65px;
`;

export const SignupLinkText = styled.div`
  ${tokens.typography.label_Sb_16};
  color: #678EE0;
`;

export const Arrow = styled.img`
  margin-left: 9.5px;
`;
