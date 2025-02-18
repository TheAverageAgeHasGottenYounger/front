import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/Signup.Info.main.styles";
import { Button, Label, Input, Dropdown } from "../../../components/Components";
import axios from "axios";
import { useSignup } from "../../../common/SignupContext";

export default function Info() {
  const { signupData, setSignupData } = useSignup();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // 자격증 리스트 상태
  const [certificateList, setCertificateList] = useState([
    { id: 1, type: "요양보호사", number: "", grade: "1급" }, // 기본 자격증
  ]);

  // 주소 관련 상태
  const [cityOptions, setCityOptions] = useState([]); // 시 리스트
  const [guOptions, setGuOptions] = useState([]); // 구 리스트
  const [dongOptions, setDongOptions] = useState([]); // 동 리스트

  // 프로필 이미지
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [profileUrl, setProfileUrl] = useState("/img/profile-default.svg"); // 렌더링용
  const [profile, setProfile] = useState(null); // api용
  const [previousProfileUrl, setPreviousProfileUrl] = useState(null);

  // 프로필 이미지 파일 업로드
  const handleFileChange = async (event) => {
    // console.log('previousProfileUrl',previousProfileUrl);
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      if (previousProfileUrl) {
        await handleFileDelete(profileUrl);
      }
      await handleFileUpload(selectedFile);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("https://api.ondue.store/s3", formData);
      console.log(response);
      if (response.data.isSuccess) {
        const newProfileUrl = response.data.result.fileUrl;
        console.log("파일 업로드 성공:", newProfileUrl);
        // console.log('이전:', profileUrl);
        setPreviousProfileUrl(profileUrl);
        setProfileUrl(newProfileUrl);
        setProfile(newProfileUrl);
        setSignupData((prev) => ({ ...prev, profileImageFile: newProfileUrl }));
      } else {
        console.error("파일 업로드 실패:", response.data);
      }
    } catch (error) {
      console.error("파일 업로드 에러:", error);
    }
  };
  const handleFileDelete = async (fileUrl) => {
    try {
      const url = `https://api.ondue.store/s3`;

      const response = await axios.delete(url, {
        params: { fileUrl }, // ✅ params는 설정 객체 안에 직접 넣기
        headers: {
          "Content-Type": "application/json", // 서버에서 필요하면 유지
        },
      });

      if (response.data.isSuccess) {
        console.log("파일 삭제 성공:", fileUrl);
      } else {
        console.error("파일 삭제 실패:", response.data);
      }
    } catch (error) {
      console.error("파일 삭제 에러:", error);
    }
  };

  // 이름 change event
  const handleName = (value) => {
    setName(value);
    setSignupData((prev) => ({ ...prev, name: value }));
  };

  // 연락처 change event
  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
    setSignupData((prev) => ({ ...prev, phoneNumber: value }));
  };

  // '시' 목록 불러오기 (화면 렌더링 시)
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("https://api.ondue.store/map/city");
        console.log("시 response", response);
        setCityOptions(
          response.data.result.map((city) => ({ value: city, label: city }))
        );
      } catch (error) {
        console.error("시 목록 불러오기 실패:", error);
      }
    };

    fetchCities();
  }, []);

  // '시' 선택 핸들러 -> '구' 목록 요청
  const handleCityChange = async (value) => {
    // setSignupData((prev) => ({ ...prev, city: value, gu: "", dong: "" }));
    setSignupData((prev) => ({ ...prev, city: value, gu: "", dong: "" }));
    setGuOptions([]); // 기존 '구' 리스트 초기화
    setDongOptions([]); // 기존 '동' 리스트 초기화

    try {
      const response = await axios.get(
        `https://api.ondue.store/map/gu-gun?city=${encodeURIComponent(value)}`
      );
      console.log("구 response", response);
      setGuOptions(
        response.data.result.map((gu) => ({ value: gu, label: gu }))
      );
    } catch (error) {
      console.error("구 목록 불러오기 실패:", error);
    }
  };

  // '구' 선택 핸들러 -> '동' 목록 요청
  const handleGuChange = async (value) => {
    // setSignupData((prev) => ({ ...prev, gu: value, dong: "" }));
    setSignupData((prev) => ({ ...prev, gu: value, dong: "" }));
    setDongOptions([]); // 기존 '동' 리스트 초기화

    try {
      const response = await axios.get(
        `https://api.ondue.store/map/dong?guGun=${encodeURIComponent(value)}`
      );
      console.log("동 response", response);
      setDongOptions(
        response.data.result.map((dong) => ({ value: dong, label: dong }))
      );
    } catch (error) {
      console.error("동 목록 불러오기 실패:", error);
    }
  };

  // '동' 선택 핸들러
  const handleDongChange = (value) => {
    // setSignupData((prev) => ({ ...prev, dong: value }));
    setSignupData((prev) => ({ ...prev, dong: value }));
  };

  // 자격증 추가 버튼 클릭 핸들러
  const handleAddCertificate = () => {
    setCertificateList((prev) => [
      ...prev,
      { id: prev.length + 1, type: "", number: "", grade: "" },
    ]);
  };

  // 특정 자격증 데이터 변경
  const handleCertificateChange = (id, field, value) => {
    setCertificateList((prev) =>
      prev.map((cert) => (cert.id === id ? { ...cert, [field]: value } : cert))
    );
  };

  // 다음 버튼 클릭 시 signupData에 저장 (id 제거 후 저장)
  const handleNext = () => {
    // console.log("certificateList", certificateList);
    const filteredCertificates = certificateList.map(({ id, ...rest }) => rest);
    // console.log("filteredCertificates", filteredCertificates);
    setSignupData((prev) => ({ ...prev, certificate: filteredCertificates }));
    console.log("회원가입 데이터:", signupData);
    navigate("/signup/form");
  };

  return (
    <items.Container>
      <items.StepContainer>
        <items.StepImg src="/img/first-step.svg" alt="first-step" />
      </items.StepContainer>
      <items.Head>
        회원가입을 시작할게요!
        <br />
        기본 정보를 입력해주세요
      </items.Head>

      {/*   프로필 */}
      <items.ProfileContainer>
        <items.ProfileBox>
          <items.Profile src={profileUrl} alt="프로필이미지" />
          <items.Upload onClick={handleClick}>사진 등록하기</items.Upload>
        </items.ProfileBox>

        <items.HiddenFileInput
          type="file"
          accept=".gif, .jpg, .png, .jpeg, .svg"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </items.ProfileContainer>

      <items.InputWrapper>
        <items.InputContainer>
          <Label text="이름" star />
          <Input
            type="text"
            placeholder="이름를 입력해주세요."
            value={name}
            onChange={(e) => handleName(e.target.value)}
            width="313px"
          />
        </items.InputContainer>

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
              value={signupData.city}
              placeholder={"OO시"}
              onChange={(e) => handleCityChange(e.target.value)}
              width="115px"
            />
            <Dropdown
              options={guOptions}
              value={signupData.gu}
              placeholder={"OO구"}
              onChange={(e) => handleGuChange(e.target.value)}
              width="115px"
              disabled={!signupData.city} // '시' 선택 전 비활성화
            />
            <Dropdown
              options={dongOptions}
              value={signupData.dong}
              placeholder={"OO동"}
              onChange={(e) => handleDongChange(e.target.value)}
              width="115px"
              disabled={!signupData.gu} // '구' 선택 전 비활성화
            />
          </items.DropdownContainer>
        </items.InputContainer>

        <items.DropInputContainer>
          <Label text="보유 자격증" star />
          {certificateList.map((cert) => (
            <items.DropdownContainer key={cert.id}>
              {cert.type === "요양보호사" ? (
                <items.FixCertificateText>
                  요양보호사 1급
                </items.FixCertificateText>
              ) : (
                <Dropdown
                  options={[
                    { value: "사회복지사 1급", label: "사회복지사 1급" },
                    { value: "사회복지사 2급", label: "사회복지사 2급" },
                    { value: "간호조무사", label: "간호조무사" },
                  ]}
                  width="165px"
                  value={cert.type + (cert.grade ? " " + cert.grade : "")}
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    let type = "",
                      grade = "";
                    if (selectedValue === "사회복지사 1급") {
                      type = "사회복지사";
                      grade = "1급";
                    } else if (selectedValue === "사회복지사 2급") {
                      type = "사회복지사";
                      grade = "2급";
                    } else if (selectedValue === "간호조무사") {
                      type = "간호조무사";
                      grade = null;
                    }
                    handleCertificateChange(cert.id, "type", type);
                    handleCertificateChange(cert.id, "grade", grade);
                  }}
                />
              )}
              <Input
                type="text"
                placeholder="자격증 번호 입력"
                value={cert.number}
                onChange={(e) =>
                  handleCertificateChange(cert.id, "number", e.target.value)
                }
                width="140px"
              />
            </items.DropdownContainer>
          ))}
          <items.AddButton onClick={handleAddCertificate}>
            <items.AddImg src="/img/add.svg" alt="추가하기" />
            <items.AddText>자격증 추가</items.AddText>
          </items.AddButton>
        </items.DropInputContainer>
      </items.InputWrapper>

      <items.ButtonContainer>
        <items.ButtoninnerContainer>
          <Button
            text="이전"
            outline
            onClick={() => navigate("/signup/type")}
            width="127px"
          />
          <Button text="다음" primary onClick={handleNext} width="228px" />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
