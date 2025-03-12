import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 344px;
  margin-bottom: 23px;
`;

export const Logo = styled.img`
  margin-bottom: 13px;
`;

export const LogoText = styled.img`
  margin-bottom: 11px;
`;

export const LogoPicture = styled.img``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 202px;
  margin-bottom: 38px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignupLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

export const SignupLinkText = styled.div`
  ${tokens.typography.label_Sb_16};
  color: #678ee0;
`;

export const Arrow = styled.img`
  margin-left: 9.5px;
`;
