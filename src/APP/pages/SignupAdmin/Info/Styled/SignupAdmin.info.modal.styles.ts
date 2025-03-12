import styled from "styled-components";
import * as tokens from "../../../../../tokens";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // 배경 흐리게
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 46px 16px 24px 16px;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.14);
`;

export const Head3 = styled.div`
  ${tokens.typography.h3};
  color: ${tokens.colors.gray[900]};
  margin-bottom: 46px;
`;

export const CenterName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${tokens.colors.gray[100]};
  width: 329px;
  height: 65px;
  ${tokens.typography.h3};
  color: ${tokens.colors.gray[900]};
  border: none;
  border-radius: 12px;
  margin-bottom: 65px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 329px;
`;
