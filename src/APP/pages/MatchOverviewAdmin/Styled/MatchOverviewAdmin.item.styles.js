import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh; /* 화면 높이만큼 설정 */
  overflow: hidden; /* 내부에서만 스크롤 */
`;

export const Prev = styled.img`
  position: absolute;
  top: 21.25px;
  left: 27.25px;
`;

// BIG 카드
export const BigCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 30px 30px 0 0;
  width: 377px;
  // max-height: 80vh;
  /* padding-left: 16px; */
  margin-top: 141px;
  overflow-y: auto;
  margin-bottom: 107px;
`;

export const FitnessBox = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  background-color: ${tokens.colors.primary.lighten[400]};
  width: 361px;
  padding: 14px 0;
  border: none;
  border-radius: 14px;
`;

export const Fitness = styled.div`
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.primary[0]};
`;

export const FitnessText = styled.div`
  ${tokens.typography.body_M_16};
  color: #414141;
`;

export const BigCardProfile = styled.img`
  position: absolute;
  top: 82px;
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  height: 130px;
  border-radius: 50%;
  z-index: 100; /* 맨 위로 올라오도록 설정 */
`;

export const BigCardName = styled.div`
  ${tokens.typography.h2};
  color: ${tokens.colors.gray[900]};
  width: 361px;
  margin-top: 100px;
  margin-bottom: 8px;
`;

export const BigCardStyleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 361px;
  word-wrap: break-word; /* 길이가 넘칠 경우 단어를 잘라서 줄 바꿈 */
  overflow-wrap: break-word; /* 같은 효과를 주지만 더 보편적으로 사용됨 */
  white-space: normal;
  margin-bottom: 32px;
`;

export const BigCardStyleBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
  flex-shrink: 0; /* 크기 줄어들지 않도록 설정 */
`;

export const BigCardStyleIcon = styled.img`
  margin-left: 6px;
  margin-right: 14px;
`;

export const BigCardStyleText = styled.div`
  ${tokens.typography.body_M_18};
  color: ${tokens.colors.primary[0]};
`;

export const BigCardStyleContent = styled.div`
  ${tokens.typography.body_M_18};
  color: #181818;
  width: 211px;
  word-wrap: break-word; /* 긴 단어 줄바꿈 */
  overflow-wrap: break-word; /* 줄바꿈 처리 */
  white-space: normal; /* 자동 줄바꿈 허용 */
`;

export const BigCardRequestBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 103px;
`;

export const BigCardRequestBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start; /* 상단 정렬 */
  width: 361px;
  word-wrap: break-word; /* 길이가 넘칠 경우 단어를 잘라서 줄 바꿈 */
  overflow-wrap: break-word; /* 같은 효과를 주지만 더 보편적으로 사용됨 */
  white-space: normal;
`;

export const BigCardRequestIL = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
`;

export const BigCardRequestIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 11px;
`;

export const BigCardRequestLabel = styled.div`
  ${tokens.typography.body_M_18};
  color: ${tokens.colors.gray[600]};
  width: 150px;
`;

export const BigCardRequestText = styled.div`
  ${tokens.typography.body_M_18};
  color: ${tokens.colors.gray[900]};
  width: 213px;
`;

export const BigCardConditionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Blank = styled.div`
  width: 361px;
  height: 16px;
`;

export const BigCardRequestCareList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  margin-top: 4px;
`;

export const BigCardRequestCareListItem = styled.div`
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[500]};
`;

export const BigCardInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 108px;
  margin-bottom: 40px;
  position: relative;
`;

export const LockBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 268px;
  height: 108px;
  border: 1.5px solid ${tokens.colors.gray[200]};
  border-radius: 12px;
  position: absolute;
  z-index: 100px;
  top: 0px;
  right: 0px;
`;

export const LockIcon = styled.img``;

export const LockText = styled.div`
  ${tokens.typography.body_M_18};
  color: ${tokens.colors.gray[400]};
`;

export const Hr = styled.div`
  width: 361px;
  height: 0px;
  border: 1px solid ${tokens.colors.gray[200]};
  margin: 40px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 107px;

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

export const Button = styled.button`
  ${tokens.typography.button_Sb_18};
  color: white;
  width: 361px;
  height: 58px;
  border: none;
  border-radius: 34px;
  background-color: ${tokens.colors.primary[0]};
`;
