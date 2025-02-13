import styled from 'styled-components';
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
  margin-bottom: 45px;
`;

export const TypeChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 478px;
`;

export const TypeContainer = styled.div`
  width: 361px;
  height: 229px;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.14);
`;

export const TypeTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28px 0 0 28px;
`;

export const TypeName = styled.div`
  ${tokens.typography.h2};
  color: ${tokens.colors.gray[900]};
  margin-bottom: 8px;
`;

export const TypeExplanation = styled.div`
  color: ${tokens.colors.gray[600]};
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
