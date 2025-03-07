import styled from "styled-components";
import * as tokens from "../../../../../tokens";

interface TypeContainerProps {
  onClick: () => void;
  isSelected: boolean;
  imgPath: string;
  children?: React.ReactNode; // ✅ children 속성 추가
}

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

export const TypeContainer: React.FC<TypeContainerProps> = styled.div`
  width: 361px;
  height: 229px;
  border: ${({ isSelected }) =>
    isSelected
      ? `2px solid ${tokens.colors.primary.lighten[100]}`
      : "none"}; // 선택된 항목에 테두리 추가
  border-radius: 30px;
  box-shadow: ${({ isSelected }) =>
    isSelected
      ? "0px 0px 0px 0px rgba(0, 0, 0, 0)"
      : "0px 0px 10px 0px rgba(0, 0, 0, 0.14)"};
  background-color: ${({ isSelected }) =>
    isSelected ? `${tokens.colors.primary.lighten[400]}` : "white"};
  cursor: pointer; // 클릭 가능한 스타일로 변경
  background-image: ${({ imgPath }) => (imgPath ? `url(${imgPath})` : "none")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* position: relative; */
`;

export const TypeTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28px 0 0 28px;
  position: relative;
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

export const CardImg = styled.img`
  position: absolute;
  bottom: -120px;
  right: 20px;
  height: 160px;
`;
