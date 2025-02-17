import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/SignupAdmin.Info.main.styles";
import { Button, Label, Input, Dropdown } from "../../../components/Components";
import Modal from "./SignupAdmin.info.modal";
import axios from "axios";
import { useAdminSignup } from "../../../common/SignupContext";

export default function InfoAdmin() {
  const { adminSignupData, setAdminSignupData } = useAdminSignup();
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [showBasicInfo, setShowBasicInfo] = useState(false);

  // 주소
  const [selectedCity, setSelectedCity] = useState(""); // 시
  const [selectedDistrict, setSelectedDistrict] = useState(""); // 구
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(""); // 동

  // 센터명 change event
  const handleCenterNameChange = (value) => {
    setAdminSignupData((prev) => ({
      ...prev,
      center: { ...prev.center, name: value },
    }));
  };

  // 연락처 change event
  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
    setAdminSignupData((prev) => ({ ...prev, phoneNumber: value }));
  };

  // 시, 구, 동 각각의 드롭다운 핸들러
  const handleCityChange = (value) => {
    setSelectedCity(value);
    setAdminSignupData((prev) => ({ ...prev, city: value }));
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
    setAdminSignupData((prev) => ({ ...prev, gu: value }));
  };

  const handleNeighborhoodChange = (value) => {
    setSelectedNeighborhood(value);
    setAdminSignupData((prev) => ({ ...prev, dong: value }));
  };

  // 검색 함수
  const handleSearch = async () => {
    try {
      // API 요청 보내기
      const response = await axios.get(
        `https://api.ondue.store/center/is-registration?centerName=${encodeURIComponent(
          adminSignupData.center.name
        )}`
      );

      if (response.data.result.result === false) {
        // 모달 열기
        setIsModalOpen(true);
      } else {
        // 이미 등록된 센터명이라면 다른 처리
        console.log("센터가 이미 등록되어 있습니다.");
        setShowBasicInfo(true);
      }
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  // 모달 닫기 & 기본 정보 폼 표시
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowBasicInfo(true); // 모달이 닫힌 후 기본 정보 폼을 보이도록 설정
  };

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
            value={adminSignupData.center.name}
            onChange={(e) => handleCenterNameChange(e.target.value)}
            width="207px"
          />
          <items.SearchButton onClick={() => handleSearch()}>
            검색
          </items.SearchButton>
        </items.SearchContainer>
      </items.InputContainer>

      {/* 기본 정보 폼 (모달이 닫힌 후 보이도록 설정) */}
      {showBasicInfo && (
        <>
          <items.Head3>기본 정보</items.Head3>
          <items.InputWrapper>
            <items.InputContainer>
              <Label text="연락처" star />
              <Input
                type="text"
                placeholder="예) 010-3121-2311"
                value={phoneNumber}
                onChange={(e) => handlePhoneNumber(e.target.value)}
                width="313px"
              />
            </items.InputContainer>

            <items.InputContainer>
              <Label text="주소" star />
              <items.DropdownContainer>
                <Dropdown
                  options={[{ value: "option1", label: "옵션 1" }]}
                  value={adminSignupData.center.city}
                  placeholder={"OO시"}
                  onChange={(e) =>
                    setAdminSignupData((prev) => ({
                      ...prev,
                      // city: e.target.value,
                      center: { ...prev.center, city: e.target.value },
                    }))
                  }
                  width="115px"
                />
                <Dropdown
                  options={[{ value: "option1", label: "옵션 1" }]}
                  value={adminSignupData.center.gu}
                  placeholder={"OO구"}
                  onChange={(e) =>
                    setAdminSignupData((prev) => ({
                      ...prev,
                      // gu: e.target.value,
                      center: { ...prev.center, gu: e.target.value },
                    }))
                  }
                  width="115px"
                />
                <Dropdown
                  options={[{ value: "option1", label: "옵션 1" }]}
                  value={adminSignupData.center.dong}
                  placeholder={"OO동"}
                  onChange={(e) =>
                    setAdminSignupData((prev) => ({
                      ...prev,
                      // dong: e.target.value,
                      center: { ...prev.center, dong: e.target.value },
                    }))
                  }
                  width="115px"
                />
              </items.DropdownContainer>
            </items.InputContainer>
          </items.InputWrapper>
        </>
      )}
      <items.ButtonContainer>
        <items.ButtoninnerContainer>
          <Button
            text="이전"
            outline
            onClick={() => navigate("/signup/type")}
            width="127px"
          />
          <Button
            text="다음"
            primary
            // onClick={() => navigate("/admin/signup/add-info")}
            onClick={() => {
              console.log("회원가입 데이터2:", adminSignupData); // 현재 상태 확인
              navigate("/admin/signup/add-info");
            }}
            width="228px"
          />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>

      {/* 모달 렌더링 */}
      {isModalOpen && (
        <Modal
          onClose={handleCloseModal}
          onClick={() => setIsModalOpen(false)}
          centerName={adminSignupData.center.name}
        />
      )}
    </items.Container>
  );
}
