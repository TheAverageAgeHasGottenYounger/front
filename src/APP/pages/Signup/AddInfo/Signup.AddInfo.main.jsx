import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/Signup.AddInfo.main.styles";
import {
  Button,
  Label,
  Input,
  Dropdown,
  TextArea,
} from "../../../components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
import axios from "axios";

export default function AddInfo() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");
  const [text, setText] = useState("");

  // 회원가입 버튼
  const handleSubmit = async () => {
    // try {
    //   const response = await axios.post(
    //     "https://api.ondue.store/member/login",
    //     null, // 요청 본문 없이 params만 전달할 경우 null 사용
    //     {
    //       params: {
    //         id: id,
    //         password: password,
    //       },
    //       headers: {
    //         "Content-Type": "application/json", // 필요에 따라 설정
    //       },
    //     }
    //   );
    //   console.log("response headers", response.headers); // 헤더에서 응답 받기
    //   if (response.data["isSuccess"]) {
    //     console.log("회원가입 성공!");
    //     window.location.replace("/login");
    //   }
    // } catch (error) {
    //   console.error("회원가입 오류:", error);
    // }
  };

  return (
    <items.Container>
      <items.StepContainer>
        <items.StepImg src="/img/final-step.svg" alt="final-step" />
      </items.StepContainer>
      <items.Head>
        더 자세한 정보를 알려주세요
        <br />
        알려주세요!
      </items.Head>

      <items.TopWrapper>
        <items.LabelButtonWrapper>
          <items.LabelContainer>
            <items.Label>현재 차량을 가지고 있나요?</items.Label>
            <items.Star>*</items.Star>
          </items.LabelContainer>
          <items.ButtoninnerContainer>
            <Button
              text="네"
              primary
              onClick={() => console.log("")}
              width="174px"
            />
            <Button
              text="아니오"
              disabled
              onClick={() => console.log("")}
              width="174px"
            />
          </items.ButtoninnerContainer>
        </items.LabelButtonWrapper>

        <items.LabelButtonWrapper>
          <items.LabelContainer>
            <items.Label>치매 교육을 이수했나요?</items.Label>
            <items.Star>*</items.Star>
          </items.LabelContainer>
          <items.ButtoninnerContainer>
            <Button
              text="네"
              primary
              onClick={() => console.log("")}
              width="174px"
            />
            <Button
              text="아니오"
              disabled
              onClick={() => console.log("")}
              width="174px"
            />
          </items.ButtoninnerContainer>
        </items.LabelButtonWrapper>
      </items.TopWrapper>

      <items.Explanation>
        <items.MainText>추가 정보</items.MainText>
        <items.SubText>를 입력하면 나를 더 어필할 수 있어요!</items.SubText>
      </items.Explanation>

      <items.BottomWrapper>
        <items.LabelUtilWrapper>
          <Label text="경력 기간 (선택)" />
          <Dropdown
            options={[
              { value: "option1", label: "옵션 1" },
              { value: "option2", label: "옵션 2" },
              { value: "option3", label: "옵션 3" },
            ]}
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            width="171px"
          />
        </items.LabelUtilWrapper>

        <items.LabelUtilWrapper>
          <Label text="주요 경력 (선택)" />
          <items.AddButton>
            <items.AddImg src="/img/add.svg" alt="추가하기" />
            <items.AddText>경력 추가</items.AddText>
          </items.AddButton>
        </items.LabelUtilWrapper>

        <items.LabelUtilWrapper>
          <Label text="한줄 소개 (선택)" />
          <TextArea
            placeholder="한줄 소개를 입력해주세요"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            maxLength={60}
          />
        </items.LabelUtilWrapper>
      </items.BottomWrapper>

      <items.Head3>
        저는 이런 돌봄 스타일을
        <br />
        가졌어요!
      </items.Head3>
      <items.Body>선택한 스타일에 따라 맞춤형 어르신이 추천돼요</items.Body>

      <items.ButtonContainer>
        <items.ButtoninnerContainer>
          <Button
            text="이전"
            outline
            onClick={() => navigate("/signup/form")}
            width="127px"
          />
          <Button
            text="회원가입 완료"
            primary
            onClick={handleSubmit}
            width="228px"
          />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
