import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/Signup.Info.main.styles";
import { Button, Label, Input, Dropdown } from "../../../components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
// import axios from 'axios';

export default function Info() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedValue, setSelectedValue] = useState(""); // 주소
  const [code, setCode] = useState("");

  return (
    <items.Container>
      {/* 타입 내부에 있는 이미지는 배경이미지로 한 후에 좌표를 써보자 */}
      <items.Head>
        회원가입을 시작할게요!
        <br />
        기본 정보를 입력해주세요
      </items.Head>

      {/*   프로필 */}
      <items.Logo></items.Logo>

      <items.InputWrapper>
        <items.InputContainer>
          <Label text="이름" star />
          <Input
            type="text"
            placeholder="이름를 입력해주세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
            width="313px"
          />
        </items.InputContainer>

        <items.InputContainer>
          <Label text="연락처" star />
          <Input
            type="text"
            placeholder="예) 010-3121-2311"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            width="313px"
          />
        </items.InputContainer>

        <items.InputContainer>
          <Label text="주소" star />
          <items.DropdownContainer>
            <Dropdown
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              width="115px"
            />
            <Dropdown
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              width="115px"
            />
            <Dropdown
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              width="115px"
            />
          </items.DropdownContainer>
        </items.InputContainer>

        <items.InputContainer>
          <Label text="보유 자격증" star />
          <items.DropdownContainer>
            <Dropdown
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              width="165px"
            />
            <Input
              type="text"
              placeholder="자격증 번호 압력"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              width="140px"
            />
          </items.DropdownContainer>
          <items.AddButton>+ 자격증 추가</items.AddButton>
        </items.InputContainer>
        {/* 자격증 추기 */}
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
