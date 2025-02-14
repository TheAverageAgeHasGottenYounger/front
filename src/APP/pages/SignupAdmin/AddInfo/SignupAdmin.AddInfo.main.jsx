import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/SignupAdmin.AddInfo.main.styles";
import {
  Button,
  Label,
  Input,
  Dropdown,
  TextArea,
} from "../../../components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
// import axios from 'axios';

export default function AddInfoAdmin() {
  const [selectedValue, setSelectedValue] = useState("");
  const [text, setText] = useState("");

  return (
    <items.Container>
      <items.StepContainer>
        <items.StepImg src="/img/second-step.svg" alt="second-step" />
      </items.StepContainer>
      <items.Head>
        센터에 대해 더 자세히
        <br />
        알려주세요!
      </items.Head>

      <items.LabelButtonWrapper>
        <items.LabelContainer>
          <items.Label>현재 센터 내 차량을 가지고 있나요?</items.Label>
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

      <items.Explanation>
        <items.MainText>추가 정보</items.MainText>
        <items.SubText>를 입력하면 신뢰도를 높일 수 있어요!</items.SubText>
      </items.Explanation>

      <items.BottomWrapper>
        <items.LabelUtilWrapper>
          <Label text="센터 등급 (선택)" />
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
          <Label text="운영 기간 (선택)" />
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

      <items.ButtonContainer>
        <items.ButtoninnerContainer>
          <Button
            text="이전"
            outline
            onClick={() => console.log("")}
            width="127px"
          />
          <Button
            text="회원가입 완료"
            primary
            onClick={() => console.log("")}
            width="228px"
          />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
