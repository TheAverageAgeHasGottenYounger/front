import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/SignupAdmin.AddInfo.main.styles";
import {
  Button,
  Label,
  Dropdown,
  TextArea,
} from "../../../components/Components";
import { useAdminSignup } from "../../../common/SignupContext";

export default function AddInfoAdmin() {
  const { adminSignupData, setAdminSignupData } = useAdminSignup();
  const navigate = useNavigate();

  const [selectedCenterGrade, setSelectedCenterGrade] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");

  const [bathCarYn, setBathCarYn] = useState(
    adminSignupData.center.bathCarYn || false
  );
  const [carClicked, setCarClicked] = useState(bathCarYn);

  const [introduction, setIntroduction] = useState(
    adminSignupData.center.introduction || ""
  );

  // 차량 보유 여부 설정
  const handleBathCarYn = (value: boolean) => {
    setCarClicked(value);
    setBathCarYn(value);
    setAdminSignupData((prev) => ({
      ...prev,
      center: { ...prev.center, bathCarYn: value },
    }));
  };

  // 한줄 소개 입력
  const handleIntroductionChange = (value: string) => {
    setIntroduction(value);
    setAdminSignupData((prev) => ({
      ...prev,
      center: { ...prev.center, introduction: value },
    }));
  };

  const handleCenterGrade = (value: string) => {
    setSelectedCenterGrade(value);
    setAdminSignupData((prev) => ({
      ...prev,
      center: { ...prev.center, grade: value },
    }));
  };

  const handlePeriod = (value: string) => {
    setSelectedPeriod(value);
    setAdminSignupData((prev) => ({
      ...prev,
      center: { ...prev.center, operationPeriod: value },
    }));
  };

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
            primary={carClicked === true}
            onClick={() => handleBathCarYn(true)}
            disabled={carClicked === true}
            width="174px"
          />
          <Button
            text="아니오"
            primary={carClicked === false}
            onClick={() => handleBathCarYn(false)}
            disabled={carClicked === false}
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
              { value: "1 등급", label: "1 등급" },
              { value: "2 등급", label: "2 등급" },
              { value: "3 등급", label: "3 등급" },
            ]}
            value={selectedCenterGrade}
            placeholder={"등급 선택"}
            onChange={(e) => handleCenterGrade(e.target.value)}
            width="171px"
          />
        </items.LabelUtilWrapper>

        <items.LabelUtilWrapper>
          <Label text="운영 기간 (선택)" />
          <Dropdown
            options={[
              { value: "1년 이내", label: "1년 이내" },
              { value: "1년 ~ 3년", label: "1년 ~ 3년" },
              { value: "5년 이상", label: "5년 이상" },
            ]}
            value={selectedPeriod}
            placeholder={"운영 기간 선택"}
            onChange={(e) => handlePeriod(e.target.value)}
            width="171px"
          />
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

      <items.ButtonContainer>
        <items.ButtoninnerContainer>
          <Button
            text="이전"
            outline
            onClick={() => navigate("/admin/signup/info")}
            width="127px"
          />
          <Button
            text="다음"
            primary
            // onClick={() => navigate("/admin/signup/form")}
            onClick={() => {
              console.log("회원가입 데이터2:", adminSignupData); // 현재 상태 확인
              navigate("/admin/signup/form");
            }}
            width="228px"
          />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
