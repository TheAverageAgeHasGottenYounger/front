import styled, { keyframes } from "styled-components";
import * as tokens from "../../../../../tokens";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
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

export const ProgressText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 123px;
  text-align: center;
  ${tokens.typography.h2};
  color: ${tokens.colors.gray[900]};
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${tokens.colors.gray[100]};
  border-top: 5px solid ${tokens.colors.primary[0]};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 70px auto;
`;