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
  const [fixCertificateCode, setFixCertificateCode] = useState("");
  const [optionCertificateCode, setOptionCertificateCode] = useState("");

  // 주소
  const [selectedCity, setSelectedCity] = useState(""); // 시
  const [selectedDistrict, setSelectedDistrict] = useState(""); // 구
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(""); // 동

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

  // 시, 구, 동 각각의 드롭다운 핸들러
  const handleCityChange = (value) => {
    setSelectedCity(value);
    setSignupData((prev) => ({ ...prev, city: value }));
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
    setSignupData((prev) => ({ ...prev, gu: value }));
  };

  const handleNeighborhoodChange = (value) => {
    setSelectedNeighborhood(value);
    setSignupData((prev) => ({ ...prev, dong: value }));
  };

  // 자격증 추가 버튼 클릭 시 실행되는 함수
  const handleAddCertificate = () => {
    setSignupData((prev) => ({
      ...prev,
      certificate: [
        ...prev.certificate,
        { id: prev.certificate.length + 1, selectedValue: "", code: "" },
      ],
    }));
  };

  const handleFixCertificateCodeChange = (value) => {
    setFixCertificateCode(value);
    setSignupData((prev) => ({
      ...prev,
      certificate: [
        ...prev.certificate,
        { type: "요양보호사", number: value, grade: "1급" },
      ],
    }));
  };

  // 특정 자격증 데이터 변경
  const handleCertificateChange = (id, field, value) => {
    setSignupData((prev) => {
      const updatedCertificates = prev.certificate.map((cert) => {
        if (cert.id === id) {
          if (field === "code") {
            return { ...cert, code: value }; // Update only the code for the specific certificate
          } else if (field === "selectedValue") {
            let type = "";
            let grade = null;

            if (value === "사회복지사 1급") {
              type = "사회복지사";
              grade = "1급";
            } else if (value === "사회복지사 2급") {
              type = "사회복지사";
              grade = "2급";
            } else if (value === "간호조무사") {
              type = "간호조무사";
              grade = null;
            }

            return { ...cert, selectedValue: value, type, grade };
          }
        }
        return cert;
      });

      // If "요양보호사" certificate does not exist, add it as a fixed certificate
      if (!prev.certificate.some((cert) => cert.type === "요양보호사")) {
        updatedCertificates.unshift({
          id: 1,
          type: "요양보호사",
          grade: "1급",
          selectedValue: "요양보호사 1급", // Automatically set for the fixed certificate
          code: "", // Initially blank
        });
      }

      return { ...prev, certificate: updatedCertificates };
    });
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
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              value={selectedCity}
              placeholder={"OO시"}
              onChange={(e) => handleCityChange(e.target.value)}
              width="115px"
            />
            <Dropdown
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              value={selectedDistrict}
              placeholder={"OO구"}
              onChange={(e) => handleDistrictChange(e.target.value)}
              width="115px"
            />
            <Dropdown
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              value={selectedNeighborhood}
              placeholder={"OO동"}
              onChange={(e) => handleNeighborhoodChange(e.target.value)}
              width="115px"
            />
          </items.DropdownContainer>
        </items.InputContainer>

        <items.DropInputContainer>
          <Label text="보유 자격증" star />
          <items.DropdownContainer>
            <items.FixCertificateText>요양보호사 1급</items.FixCertificateText>
            <Input
              type="text"
              placeholder="자격증 번호 입력"
              value={fixCertificateCode}
              onChange={(e) => handleFixCertificateCodeChange(e.target.value)} // Using fixed certificate id = 1
              width="140px"
            />
          </items.DropdownContainer>

          {/* <items.DropdownContainer>
            <Dropdown
              options={[
                { value: "사회복지사 1급", label: "사회복지사 1급" },
                { value: "사회복지사 2급", label: "사회복지사 2급" },
                { value: "간호조무사", label: "간호조무사" },
              ]}
              placeholder={"자격증 선택"}
              // value={selectedValue}
              // onChange={(e) =>
              //   handleCertificateChange(
              //     id,
              //     "selectedValue",
              //     e.target.value
              //   )
              // }
              width="165px"
            />
            <Input
              type="text"
              placeholder="자격증 번호 입력"
              // value={cert.code}
              // onChange={(e) =>
              //   handleCertificateChange(cert.id, "code", e.target.value)
              // }
              width="140px"
            />
          </items.DropdownContainer> */}

          {/* 자격증 추가 버튼 */}
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
          <Button
            text="다음"
            primary
            onClick={() => {
              console.log("회원가입 데이터:", signupData); // 현재 상태 확인
              navigate("/signup/form");
            }}
            width="228px"
          />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
