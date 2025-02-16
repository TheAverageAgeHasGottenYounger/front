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


export const Head3 = styled.div`
  ${tokens.typography.h3};
  color: ${tokens.colors.gray[900]};
  width: 361px;
  margin-bottom: 8px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  margin-bottom: 97px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 349px;
  margin-bottom: 127px;
`;

export const LabelButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 101px;
`;

export const LabelUtilWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 361px;
  height: 91px;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;

export const Label = styled.div`
  ${tokens.typography.h3};
  color: ${tokens.colors.gray[900]};
  padding: 4px;
`;

export const Star = styled.span`
  ${tokens.typography.button_Sb_18};
  color: #d32f2f;
`;

export const Explanation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${tokens.colors.primary.lighten[400]};
  width: 361px;
  height: 56px;
  border: none;
  border-radius: 10px;
  margin-bottom: 44px;
`;

export const MainText = styled.span`
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.primary[0]};
`;

export const SubText = styled.span`
  ${tokens.typography.body_M_16};
  color: #686868;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 361px;
  height: 58px;
  border: 1.5px dashed ${tokens.colors.gray[300]};
  border-radius: 12px;
  margin-top: 12px;
`;

export const AddImg = styled.img`
  margin-right: 8px;
`;

export const AddText = styled.div`
  ${tokens.typography.label_Sb_16};
  color: ${tokens.colors.gray[900]};
`;

export const Body = styled.span`
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[500]};
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
