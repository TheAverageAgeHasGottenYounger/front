import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/Login.styles";
import { Button, Label, Input } from "../../../APP/components/Components";
import { ACCESS_TOKEN } from "../../Api/request";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 버튼
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api.ondue.store/member/login/v2",
        null, // 요청 본문 없이 params만 전달할 경우 null 사용
        {
          params: {
            id: id,
            password: password,
          },
          headers: {
            "Content-Type": "application/json", // 필요에 따라 설정
          },
        }
      );

      const accessToken = response.data.result; // 응답에서 Access Token 추출
      console.log(accessToken);
      if (accessToken) {
        console.log("z");
        localStorage.setItem(ACCESS_TOKEN, accessToken);
      }

      if (response.data["isSuccess"]) {
        console.log("로그인 성공!");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
    }
  };

  return (
    <items.Container>
      <items.Logo src="/img/logo.svg" alt="로고이미지" />

      <items.InputWrapper>
        <items.InputContainer>
          <Label text="아이디" />
          <Input
            type="text"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
            width="313px"
          />
        </items.InputContainer>

        <items.InputContainer>
          <Label text="비밀번호" />
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            width="313px"
          />
        </items.InputContainer>
      </items.InputWrapper>

      <Button text="로그인하기" primary onClick={handleSubmit} />

      <items.SignupLink onClick={() => navigate("/signup/type")}>
        <items.SignupLinkText>회원가입하기</items.SignupLinkText>
        <items.Arrow src="/img/arrow-right.svg" alt="화살표" />
      </items.SignupLink>
    </items.Container>
  );
}
