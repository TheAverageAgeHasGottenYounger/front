import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/Signup.TypeChoice.main.styles";
import { Button, Label, Input } from "../../../../APP/components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
// import axios from 'axios';

export default function TypeChoice() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

  const handleNextClick = () => {
    if (selectedType === "caregiver") {
      navigate("/signup/info");
    } else if (selectedType === "admin") {
      navigate("/admin/signup/info");
    }
  };

  return (
    <items.Container>
      {/* 타입 내부에 있는 이미지는 배경이미지로 한 후에 좌표를 써보자 */}
      <items.Head>
        요양보호사인가요?
        <br />
        관리자인가요?
      </items.Head>
      <items.TypeChoiceContainer>
        <items.TypeContainer
          onClick={() => setSelectedType("caregiver")}
          isSelected={selectedType === "caregiver"}
          imgPath="img/type-user.svg"
        >
          <items.TypeTextBox>
            <items.TypeName>요양보호사에요</items.TypeName>
            <items.TypeExplanation>
              나에게 딱 맞는
              <br />
              구직 정보를 찾고 있어요
            </items.TypeExplanation>
              <items.CardImg
              src="/img/signup_card_img2.png"
              alt="요양보호사"
              />
            </items.TypeTextBox>
          {/* <items.Graphic src="/img/profile-default.svg" alt="그래픽이미지"/> */}
        </items.TypeContainer>

        <items.TypeContainer
          onClick={() => setSelectedType("admin")}
          isSelected={selectedType === "admin"}
          imgPath="img/type-admin.svg"
        >
          <items.TypeTextBox>
            <items.TypeName>관리자/사회복지사에요</items.TypeName>
            <items.TypeExplanation>
              어르신을 위한
              <br />
              요양보호사를 찾고 있어요
            </items.TypeExplanation>
              <items.CardImg
                src="/img/signup_card_img1.png"
                alt="관리자"
                />
          </items.TypeTextBox>
          {/* <items.Graphic src="/img/profile-default.svg" alt="그래픽이미지" /> */}
        </items.TypeContainer>
      </items.TypeChoiceContainer>

      <items.ButtonContainer>
        <items.ButtoninnerContainer>
          <Button
            text="이전"
            outline
            onClick={() => navigate("/")}
            width="127px"
          />
          <Button
            text="다음"
            primary
            onClick={handleNextClick}
            width="228px"
            disabled={!selectedType} // 선택하지 않으면 버튼 비활성화
          />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
