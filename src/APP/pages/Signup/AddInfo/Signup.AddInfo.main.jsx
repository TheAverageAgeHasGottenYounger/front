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
import { useSignup } from "../../../common/SignupContext";

export default function AddInfo() {
  const { signupData, setSignupData } = useSignup();
  const navigate = useNavigate();

  const [selectedCareerPeriod, setSelectedCareerPeriod] = useState(
    signupData.careerPeriod || ""
  );
  const [introduction, setIntroduction] = useState(
    signupData.introduction || ""
  );

  // 차량 보유 여부 및 치매 교육 여부 상태
  const [carYn, setCarYn] = useState(signupData.carYn || false);
  const [dementiaEducationYn, setDementiaEducationYn] = useState(
    signupData.dementiaEducationYn || false
  );

  // 차량 보유 여부 설정
  const handleCarYn = (value) => {
    setCarYn(value);
    setSignupData((prev) => ({ ...prev, carYn: value }));
  };

  // 치매 교육 이수 여부 설정
  const handleDementiaEducationYn = (value) => {
    setDementiaEducationYn(value);
    setSignupData((prev) => ({ ...prev, dementiaEducationYn: value }));
  };

  // 경력 기간 선택
  const handleCareerPeriodChange = (value) => {
    setSelectedCareerPeriod(value);
    setSignupData((prev) => ({ ...prev, careerPeriod: value }));
  };

  // 한줄 소개 입력
  const handleIntroductionChange = (value) => {
    setIntroduction(value);
    setSignupData((prev) => ({ ...prev, introduction: value }));
  };

  // 회원가입 버튼
  const handleSubmit = async () => {
    const requestBody = {
      profileImageFile: signupData.profileImageFile,
      memberRequest: {
        name: signupData.name,
        phoneNumber: signupData.phoneNumber,
        city: signupData.city,
        gu: signupData.gu,
        dong: signupData.dong,
        id: signupData.id,
        password: signupData.password,
        dementiaEducationYn: signupData.dementiaEducationYn,
        carYn: signupData.carYn,
        certificate: signupData.certificate,
        introduction: signupData.introduction,
        career: signupData.career,
        careerPeriod: signupData.careerPeriod,
      },
    };

    try {
      const response = await axios.post(
        "https://api.ondue.store/member/worker-join",
        requestBody,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.isSuccess) {
        console.log("요양보호사 회원가입 성공!");
        window.location.replace("/login");
      }
    } catch (error) {
      console.error("요양보호사 회원가입 오류:", error);
    }
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
              onClick={() => handleCarYn(true)}
              width="174px"
            />
            <Button
              text="아니오"
              disabled
              onClick={() => handleCarYn(false)}
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
              onClick={() => handleDementiaEducationYn(true)}
              width="174px"
            />
            <Button
              text="아니오"
              disabled
              onClick={() => handleDementiaEducationYn(false)}
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
              { value: "1년 이하", label: "1년 이하" },
              { value: "1~3년", label: "1~3년" },
              { value: "3~5년", label: "3~5년" },
              { value: "5년 이상", label: "5년 이상" },
            ]}
            value={selectedCareerPeriod}
            onChange={(e) => handleCareerPeriodChange(e.target.value)}
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
            value={introduction}
            onChange={(e) => {
              handleIntroductionChange(e.target.value);
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
