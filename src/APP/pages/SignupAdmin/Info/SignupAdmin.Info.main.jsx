import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/SignupAdmin.Info.main.styles";
import { Button, Label, Input, Dropdown } from "../../../components/Components";
import Modal from "./SignupAdmin.info.modal";
// import { ACCESS_TOKEN } from '../../Api/request';
// import axios from 'axios';

export default function InfoAdmin() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedValue, setSelectedValue] = useState(""); // 주소
  const [centerName, setCenterName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  return (
    <items.Container>
      <items.StepContainer>
        <items.StepImg src="/img/first-step.svg" alt="first-step" />
      </items.StepContainer>
      <items.Head>
        회원가입을 시작할게요!
        <br />
        센터를 등록해주세요
      </items.Head>

      <items.InputContainer>
        <Label text="센터명" star />
        <items.SearchContainer>
          <Input
            type="text"
            placeholder="센터를 검색해주세요"
            value={centerName}
            onChange={(e) => setCenterName(e.target.value)}
            width="207px"
          />
          <items.SearchButton onClick={() => setIsModalOpen(true)}>
            검색
          </items.SearchButton>
        </items.SearchContainer>
      </items.InputContainer>

      <items.Head3>기본 정보</items.Head3>
      <items.InputWrapper>
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
      {/* 모달 렌더링 */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </items.Container>
  );
}
