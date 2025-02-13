import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/Signup.Form.main.styles";
import { Button, Label, Input, Dropdown } from "../../../components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
// import axios from 'axios';

export default function Form() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <items.Container>
      {/* 타입 내부에 있는 이미지는 배경이미지로 한 후에 좌표를 써보자 */}
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
            onChange={(e) => setId(e.target.value)}
            width="313px"
          />
        </items.InputContainer>

        <items.InputContainer>
          <Label text="비밀번호" star />
          <Input
            type="text"
            placeholder="비밀번호를 입력해주새요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            onClick={() => console.log("")}
            width="127px"
          />
          <Button
            text="다음"
            primary
            onClick={() => console.log("")}
            width="228px"
          />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
