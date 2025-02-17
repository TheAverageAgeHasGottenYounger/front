import styled from "styled-components";
import * as tokens from "../../tokens";

export const Button = styled.button`
  width: 100%;
  max-width: 361px;
  height: 58px;
  ${tokens.typography.button_Sb_18};
  color: ${(props) => (props.primary ? "white" : tokens.colors.gray[700])};
  background-color: ${(props) =>
    props.primary
      ? tokens.colors.primary[0]
      : props.outline
      ? "transparent"
      : tokens.colors.gray[200]};
  border: ${(props) =>
    props.outline ? `1px solid ${tokens.colors.gray[300]}` : "none"};
  border-radius: 40px;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &:hover {
    background-color: ${(props) =>
      props.primary
        ? tokens.colors.primary.darken[100]
        : props.outline
        ? tokens.colors.gray[100]
        : tokens.colors.gray[100]};
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;

export const Label = styled.div`
  ${tokens.typography.button_Sb_18};
  color: ${tokens.colors.gray[700]};
  padding: 4px;
`;

export const Star = styled.span`
  ${tokens.typography.button_Sb_18};
  color: #d32f2f;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 361px;
  height: 58px;
  padding: 0 24px;
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[700]};
  background-color: ${tokens.colors.gray[100]};
  border: none;
  border-radius: 12px;
  &:focus {
    outline: none;
    border: none;
  }
  &::placeholder {
    color: ${tokens.colors.gray[400]};
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 361px;
  height: 58px;
  background-color: ${tokens.colors.gray[100]};
  border-radius: 12px;
  position: relative;
  padding: 0 24px;
`;

export const Dropdown = styled.select`
  width: 100%;
  max-width: 361px;
  height: 58px;
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[700]};
  background: url("/img/dropdown_triangle.svg") no-repeat right 16px center;
  background-size: 16px;
  background-color: ${tokens.colors.gray[100]};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  appearance: none;
  padding: 0 48px 0 24px;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 361px;
`;

export const TextAreaField = styled.textarea`
  max-height: 78px;
  ${tokens.typography.body_M_16};
  color: ${tokens.colors.gray[700]};
  background-color: transparent;
  border: 1px solid ${tokens.colors.gray[300]};
  border-radius: 12px;
  padding: 21px;
  resize: none;
  word-break: break-all;
  &:focus {
    outline: none;
    border-color: ${tokens.colors.gray[400]};
  }
  &::placeholder {
    color: ${tokens.colors.gray[400]};
  }
`;

export const TextAreaCounter = styled.div`
  align-self: flex-end;
  font-size: 14px;
  color: ${tokens.colors.gray[300]};
  margin-top: 4px;
`;

export const SelectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  border: 1px solid
    ${({ selected }) =>
      selected ? tokens.colors.primary[0] : tokens.colors.gray[300]};
  background-color: ${({ selected }) =>
    selected ? tokens.colors.primary.lighten[400] : "transparent"};
  color: ${tokens.colors.gray[700]};
  ${tokens.typography.body_M_16};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 59px;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  z-index: 100;
`;

export const BackButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Title = styled.div`
  ${tokens.typography.button_Sb_18};
  color: ${tokens.colors.gray[900]};
`;

// 카드
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  width: 337px;
  border: none;
  border-radius: 22px;
  padding: 12px;
  margin-bottom: 24px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardProfile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: 12px;
`;

export const CardInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardName = styled.div`
  ${tokens.typography.label_Sb_16};
  color: ${tokens.colors.gray[900]};
  margin: 9px 0 8px 0;
`;

export const CardInfoBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
`;

export const CardInfoIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 4px;
`;

export const CardInfoText = styled.div`
  ${tokens.typography.label_Sb_14};
  color: ${tokens.colors.gray[600]};
`;

export const CardRequestBar = styled.div`
  ${tokens.typography.label_Sb_14};
  color: #18181b;
  width: 84px; // 초과시 줄바꿈
`;

export const CardCheckButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const CardCheckButton = styled.button`
  background-color: #ff8d3c;
  ${tokens.typography.label_Sb_14};
  color: white;
  width: 120px;
  height: 38px;
  border: none;
  border-radius: 23.5px;
`;

// 대시보드 카드
export const DashBoardCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  width: 361px;
  border: none;
  border-radius: 22px;
  padding: 21px 14px;
  margin-bottom: 24px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
`;

export const DashBoardCardInfoBox = styled.div`
  width: 223px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export const DashBoardCardInfoHeader = styled.div`
  width: 223px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DashBoardCardInfoBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DashBoardCardInfoIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

export const DashBoardCardInfoText = styled.div`
  ${tokens.typography.label_Sb_16};
  color: ${tokens.colors.gray[600]};
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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
  display: inline-block;  padding: 5.5px 16px;
  ${tokens.typography.label_Sb_16};
  color: ${({ label }) => getTagColor(label)};
  background-color: ${({ label }) => `${getTagColor(label)}20`};
  border: 1px solid ${({ label }) => getTagColor(label)};
  border-radius: 10px;
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
  height: 708px;
  padding-left: 16px; 
  margin-top: 141px;
  overflow-y: auto; /* 세로 스크롤 가능 */
  -ms-overflow-style: none;  /* IE, Edge에서 스크롤바 숨기기 */
  scrollbar-width: none;  /* Firefox에서 스크롤바 숨기기 */

  &::-webkit-scrollbar {
    display: none;  /* Chrome, Safari에서 스크롤바 숨기기 */
  }
  position: relative;  
`;

export const BigCardProfile = styled.img`
  position: absolute;
  z-index: 100;
  top: -82px;
  left: 132px;
  width: 130px;
  height: 130px;
  border: none;
  border-radius: 107.5px;
`;

export const BigCardName = styled.div`
  ${tokens.typography.h2};
  color: ${tokens.colors.gray[900]};
  width: 361px;
  margin-top: 66px;
  margin-bottom: 8px;
`;

export const BigCardStyleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 361px;
`;

export const BigCardStyleBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
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
`;

export const BigCardRequestBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 103px;
`;

export const BigCardRequestBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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
`;

export const BigCardRequestText = styled.div`
  ${tokens.typography.body_M_18};
  color: ${tokens.colors.gray[900]};
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

export const LockIcon = styled.img`
  
`;

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

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 103px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
`;

export const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  width: 25%;
`;

export const NavIcon = styled.img`
  width: 32px;
  height: 32px;
  filter: ${(props) => (props.active ? "invert(38%) sepia(76%) saturate(683%) hue-rotate(340deg)" : "none")};
`;

export const NavLabel = styled.div`
  ${tokens.typography.body_M_18};
  color: ${(props) => (props.active ? tokens.colors.primary[0] : tokens.colors.gray[500])};
  margin-top: 6px;
`;