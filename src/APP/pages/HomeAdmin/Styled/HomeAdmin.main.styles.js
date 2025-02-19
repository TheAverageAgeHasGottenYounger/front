import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  background-color: ${tokens.colors.gray[50]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;
`;

export const OrangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 393px;
  height: 278px;
  background-image: url("/img/homelogo-admin.jpeg");
  background-size: cover;

  position: relative;
`;

export const NotificationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 361px;
  margin-top: 26px;
  margin-bottom: 22px;
`;

export const ProfileBox = styled.div`
  width: 361px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WhiteHead = styled.div`
  ${tokens.typography.h2};
  color: white;
  margin-bottom: 4px;
`;

export const WhiteLabel = styled.div`
  ${tokens.typography.body_M_16};
  color: white;
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const MatchOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const SettingAndGuideBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Head = styled.div`
  ${tokens.typography.h2};
  color: ${tokens.colors.gray[900]};
  margin-bottom: 14px;
`;

export const MatchOverviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 361px;
  height: 121px;
  border: none;
  border-radius: 22px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 0px;
  padding: 24px 0;
  position: relative;
`;

export const MatchOverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  margin-top: 14.5px;
`;

export const ScheduleAndSenior = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 324px;
  gap: 16px;
`;

export const Divider = styled.div`
  width: 321px;
  height: 1px;
  background-color: ${tokens.colors.gray[200]};
  margin: 0 55px;
`;

export const Label = styled.div`
  ${tokens.typography.body_M_18};
  color: ${({ color }) => {
    switch (color) {
      case "gray500":
        return tokens.colors.gray[500];
      case "gray900":
        return tokens.colors.primary.darken[900];
      case "primary0":
        return tokens.colors.primary[0];
      default:
        return tokens.colors.gray[700];
    }
  }};
`;

export const Value = styled.div`
  ${tokens.typography.h2};
  /* color: ${tokens.colors
    .gray[700]}; // .primary.darken[100], #3DC558, #FF5E4C */
  color: ${({ label }) => {
    switch (label) {
      case "전체 매칭":
        return tokens.colors.gray[700]; // 기본 색상
      case "신규 매칭":
        return tokens.colors.primary.darken[100]; // 빨강
      case "수락":
        return "#3DC558"; // 초록
      case "거절":
        return "#FF5E4C"; // 원하는 색상
      default:
        return tokens.colors.gray[700]; // 기본값
    }
  }};
`;

export const MatchRequestListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 361px;
  margin-top: 26px;
  margin-bottom: 22px;
`;

export const Head3 = styled.div`
  display: flex;
  align-items: center;
  ${tokens.typography.h3};
  color: ${tokens.colors.gray[900]};
  gap: 6px;
  margin-bottom: 6px;
`;

export const MyCalendarHeader = styled.div`
  width: 324px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tokens.typography.h3};
  color: ${tokens.colors.gray[900]};
`;

export const MyCalendarContents = styled.div`
  width: 324px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8.5px;
`;

export const MatchRequestList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomCardHeader = styled.div`
  width: 137px;
  ${tokens.typography.h3};
  color: ${tokens.colors.gray[900]};
`;

export const BottomSubLabel = styled.div`
  font-size: 14px;
  font-weight: normal;
  line-height: 19.6px;
  color: ${tokens.colors.gray[500]};
`;

export const BottomCardImgBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const getTagColor = (label) => {
  switch (label) {
    case "대기":
      return "#5C5CEF"; // 파랑
    case "거절":
      return "#FF5E4C"; // 빨강
    case "조율요청":
      return tokens.colors.primary.darken[100]; // 주황
    case "수락":
      return "#3DC558"; // 초록
    default:
      return tokens.colors.gray[700]; // 기본값
  }
};

export const Tag = styled.div`
  display: inline-block;
  padding: 5.5px 16px;
  ${tokens.typography.label_Sb_16};
  color: ${({ label }) => getTagColor(label)};
  background-color: ${({ label }) => `${getTagColor(label)}20`};
  border: 1px solid ${({ label }) => getTagColor(label)};
  border-radius: 10px;
`;
