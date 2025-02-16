import styled from "styled-components";
import * as tokens from "../../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SeniorItem = styled.div`
  width: 361px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 86px;
  height: 86px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const SelectedIcon = styled.img`
  background-color: white;
  border-radius: 50%;  
  position: absolute;
  top: 0;
  right: 0;
  width: 26px;
  height: 26px;
`;

export const InfoContainer = styled.div`
  flex-grow: 1;
  margin-left: 22px;
  margin-right: 30px;
`;

export const Name = styled.div`
  ${tokens.typography.Button_Sb_18};
  color: ${tokens.colors.gray[900]};
`;

export const GenderBirth = styled.div`
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[400]};
`;

export const Gender = styled.span`
  ${tokens.typography.body_M_16};
  color: ${(props) => (props.color === "blue" ? "blue" : "red")};
  margin-right: 10px;
`;

export const Address = styled.div`
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[400]};
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
