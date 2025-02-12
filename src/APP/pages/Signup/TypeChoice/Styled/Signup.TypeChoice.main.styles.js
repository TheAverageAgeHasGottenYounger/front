import styled from 'styled-components';
// import * as tokens from "../../../../tokens"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
`;

export const Head = styled.div`
  width: 361px;
  margin-top: 76px;
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
  margin-bottom: 8px;
`;

export const TypeExplanation = styled.div`
  
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

export const BackButton = styled.button`
  color: black;
  width: 124px;
  height: 55px;
  border: 1.5px solid rgba(0, 0, 0);
  border-radius: 40px;
`;

export const ContinueButton = styled.button`
  background-color: orange;
  color: white;
  width: 228px;
  height: 58px;
  border: none;
  border-radius: 40px;
`;
