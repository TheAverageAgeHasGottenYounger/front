import styled from 'styled-components';
// import * as tokens from "../../../../tokens"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  // background-image: url('/img/login.png');
`;

// export const InnerContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center; 
//   // background-color: ${tokens.colors.White};
//   // border: 0.042rem solid ${tokens.colors.Grey_4};
//   border-radius: 0.83rem;
//   padding: 5.29rem 16.96rem;
//   width: 50rem;
//   margin: 5rem 0;
// `;

export const Logo = styled.div`
  background-color: black;
  width: 361px;
  height: 271px;
  border-radius: 30px;
  margin-top: 51px;
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

export const Label = styled.div`
  margin-bottom: 8px;
`;

export const LabelInput = styled.input`
  background-color: green;
  width: 337px;
  height: 58px;
  border: none;
  border-radius: 12px;
  padding-left: 24px;
`;

export const Button = styled.button`
  background-color: orange;
  color: white;
  width: 361px;
  height: 58px;
  border: none;
  border-radius: 40px;
  margin-bottom: 65px;
`;

export const Navi = styled.div`
  
`;