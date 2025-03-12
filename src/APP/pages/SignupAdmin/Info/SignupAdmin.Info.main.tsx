import React, { useState, useEffect } from "react";
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

  // 주소 관련 상태
  const [cityOptions, setCityOptions] = useState([]); // 시 리스트
  const [guOptions, setGuOptions] = useState([]); // 구 리스트
  const [dongOptions, setDongOptions] = useState([]); // 동 리스트

  // 센터명 change event
  const handleCenterNameChange = (value: string) => {
    setAdminSignupData((prev) => ({
      ...prev,
      center: { ...prev.center, name: value },
    }));
  };

  // 연락처 change event
  const handlePhoneNumber = (value: string) => {
    setPhoneNumber(value);
    setAdminSignupData((prev) => ({ ...prev, phoneNumber: value }));
  };

  // '시' 목록 불러오기 (화면 렌더링 시)
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("https://api.ondue.store/map/city");
        console.log("시 response", response);
        setCityOptions(
          response.data.result.map((city: string) => ({
            value: city,
            label: city,
          }))
        );
      } catch (error) {
        console.error("시 목록 불러오기 실패:", error);
      }
    };

    fetchCities();
  }, []);

  // '시' 선택 핸들러 -> '구' 목록 요청
  const handleCityChange = async (value: string) => {
    // setAdminSignupData((prev) => ({ ...prev, city: value, gu: "", dong: "" }));
    setAdminSignupData((prev) => ({
      ...prev,
      center: { ...prev.center, city: value, gu: "", dong: "" },
    }));
    setGuOptions([]); // 기존 '구' 리스트 초기화
    setDongOptions([]); // 기존 '동' 리스트 초기화

    try {
      const response = await axios.get(
        `https://api.ondue.store/map/gu-gun?city=${encodeURIComponent(value)}`
      );
      console.log("구 response", response);
      setGuOptions(
        response.data.result.map((gu: string) => ({ value: gu, label: gu }))
      );
    } catch (error) {
      console.error("구 목록 불러오기 실패:", error);
    }
  };

  // '구' 선택 핸들러 -> '동' 목록 요청
  const handleGuChange = async (value: string) => {
    // setAdminSignupData((prev) => ({ ...prev, gu: value, dong: "" }));
    setAdminSignupData((prev) => ({
      ...prev,
      center: { ...prev.center, gu: value, dong: "" },
    }));
    setDongOptions([]); // 기존 '동' 리스트 초기화

    try {
      const response = await axios.get(
        `https://api.ondue.store/map/dong?guGun=${encodeURIComponent(value)}`
      );
      console.log("동 response", response);
      setDongOptions(
        response.data.result.map((dong: string) => ({
          value: dong,
          label: dong,
        }))
      );
    } catch (error) {
      console.error("동 목록 불러오기 실패:", error);
    }
  };

  // '동' 선택 핸들러
  const handleDongChange = (value: string) => {
    // setAdminSignupData((prev) => ({ ...prev, dong: value }));
    setAdminSignupData((prev) => ({
      ...prev,
      center: { ...prev.center, dong: value },
    }));
  };

  // 검색 함수
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.ondue.store/center/is-registration?centerName=${encodeURIComponent(
          adminSignupData.center.name
        )}`
      );
      console.log("검색 response", response);

      if (response.data.result.result === false) {
        setIsModalOpen(true); // 센터가 등록되지 않은 경우 모달 열기
      } else {
        // 센터가 이미 등록된 경우
        const centerDetailResponse = await axios.get(
          `https://api.ondue.store/center/detail?centerName=${encodeURIComponent(
            adminSignupData.center.name
          )}`
        );
        console.log("센터 상세 정보:", centerDetailResponse);

        const centerData = centerDetailResponse.data.result;

        // 기존 adminSignupData에 response에서 받은 값을 넣음
        setAdminSignupData((prev) => ({
          ...prev,
          center: {
            ...prev.center,
            id: centerData.id,
            name: centerData.name,
            bathCarYn: centerData.bathCarYn,
            grade: centerData.grade,
            operationPeriod: centerData.operationPeriod,
            city: centerData.city,
            gu: centerData.gu,
            dong: centerData.dong,
            introduction: centerData.introduction,
          },
        }));

        // 기본 정보 폼을 보여주고 이동
        setShowBasicInfo(true);
        navigate("/admin/signup/form");
      }
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  // 모달 닫기 & 기본 정보 폼 표시
  const handleResister = async () => {
    try {
      // API 요청 보내기
      const response = await axios.get(
        `https://api.ondue.store/center?centerName=${encodeURIComponent(
          adminSignupData.center.name
        )}`
      );
      console.log("등록response", response);
      if (response.data.isSuccess) {
        setAdminSignupData((prev) => ({
          ...prev,
          center: {
            ...prev.center,
            id: response.data.result.id,
            name: response.data.result.name,
          },
        }));
        setIsModalOpen(false);
        setShowBasicInfo(true); // 모달이 닫힌 후 기본 정보 폼을 보이도록 설정
      }
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
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
                  options={cityOptions}
                  value={adminSignupData.center.city}
                  placeholder={"OO시"}
                  onChange={(e) => handleCityChange(e.target.value)}
                  width="115px"
                />
                <Dropdown
                  options={guOptions}
                  value={adminSignupData.center.gu}
                  placeholder={"OO구"}
                  onChange={(e) => handleGuChange(e.target.value)}
                  width="115px"
                  disabled={!adminSignupData.center.city} // '시' 선택 전 비활성화
                />
                <Dropdown
                  options={dongOptions}
                  value={adminSignupData.center.dong}
                  placeholder={"OO동"}
                  onChange={(e) => handleDongChange(e.target.value)}
                  width="115px"
                  disabled={!adminSignupData.center.gu} // '구' 선택 전 비활성화
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
          onClose={handleResister}
          onClick={() => setIsModalOpen(false)}
          centerName={adminSignupData.center.name}
        />
      )}
    </items.Container>
  );
}
