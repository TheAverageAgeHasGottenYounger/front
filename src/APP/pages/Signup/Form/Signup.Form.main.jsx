import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/Signup.Form.main.styles";
import { Button, Label, Input, Dropdown } from "../../../components/Components";
import { useSignup } from "../../../common/SignupContext";
import axios from "axios";

export default function Form() {
  const { signupData, setSignupData } = useSignup();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 아이디 change event
  const handleId = (value) => {
    setId(value);
    setSignupData((prev) => ({ ...prev, id: value }));
  };

  // 비밀번호 change event
  const handlePassword = (value) => {
    setPassword(value);
    setSignupData((prev) => ({ ...prev, password: value }));
  };

  // '다음' 버튼 클릭 시 아이디 중복 체크
  const handleNext = async () => {
    try {
      const response = await axios.get(
        `https://api.ondue.store/member/duplication-id?memberId=${encodeURIComponent(
          id
        )}`
      );
      if (response.data.isSuccess) {
        // 아이디가 중복되지 않으면 다음 단계로 이동
        console.log("아이디 중복되지 않음", signupData);
        navigate("/signup/add-info");
      } else {
        // 아이디가 중복되면 알림
        alert("아이디가 중복됩니다");
      }
    } catch (error) {
      console.error("아이디 중복 확인 중 오류 발생:", error);
    }
  };

  return (
    <items.Container>
      <items.StepContainer>
        <items.StepImg src="/img/second-step.svg" alt="second-step" />
      </items.StepContainer>
      <items.Head>
        사용할 아이디와
        <br />
        비밀번호를 입력해주세요
      </items.Head>

      <items.InputWrapper>
        <items.InputContainer>
          <Label text="아이디" star />
          <Input
            type="text"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(e) => handleId(e.target.value)}
            width="313px"
          />
        </items.InputContainer>

        <items.InputContainer>
          <Label text="비밀번호" star />
          <Input
            type="password"
            placeholder="비밀번호를 입력해주새요"
            value={password}
            onChange={(e) => handlePassword(e.target.value)}
            width="313px"
          />
        </items.InputContainer>
        <items.ErrorMessage>8자리 이상 입력해주세요</items.ErrorMessage>
      </items.InputWrapper>

      <items.ButtonContainer>
        <items.ButtoninnerContainer>
          <Button
            text="이전"
            outline
            onClick={() => navigate("/signup/info")}
            width="127px"
          />
          <Button text="다음" primary onClick={handleNext} width="228px" />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
