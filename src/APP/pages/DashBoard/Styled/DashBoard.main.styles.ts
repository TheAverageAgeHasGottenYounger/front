import styled from "styled-components";
import * as tokens from "../../../../tokens";

// 태그 관련
interface TagProps {
  label?: string;
}

export const Container = styled.div`
  background-color: ${tokens.colors.gray[50]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
`;

export const MatchOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 361px;
  height: 121px;
  border: none;
  border-radius: 22px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const MatchOverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 67px;
  height: 57px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 92px;
  background-color: ${tokens.colors.gray[200]};
  margin: 0 55px;
`;

export const Label = styled.div`
  ${tokens.typography.body_M_18};
  color: ${tokens.colors.gray[900]};
`;

export const Value = styled.div<TagProps>`
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
  ${tokens.typography.h3};
  color: ${tokens.colors.gray[900]};
`;

export const MatchRequestList = styled.div`
  display: flex;
  flex-direction: column;
`;
