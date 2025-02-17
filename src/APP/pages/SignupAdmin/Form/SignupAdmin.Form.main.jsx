import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/SignupAdmin.Form.main.styles";
import { Button, Label, Input, Dropdown } from "../../../components/Components";
import axios from "axios";
import { useAdminSignup } from "../../../common/SignupContext";

export default function FormAdmin() {
  const { adminSignupData, setAdminSignupData } = useAdminSignup();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

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
        setAdminSignupData((prev) => ({
          ...prev,
          profileImageFile: newProfileUrl,
        }));
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

  // 회원가입 버튼
  const handleSubmit = async () => {
    console.log("Sss", adminSignupData);
    const requestBody = {
      profileImageFile: adminSignupData.profileImageFile,
      memberRequest: {
        phoneNumber: adminSignupData.phoneNumber,
        city: adminSignupData.city,
        gu: adminSignupData.gu,
        dong: adminSignupData.dong,
        carYn: adminSignupData.carYn,
        id: adminSignupData.id,
        password: adminSignupData.password,
        center: {
          name: adminSignupData.center.name,
          bathCarYn: adminSignupData.center.bathCarYn,
          grade: adminSignupData.center.grade,
          operationPeriod: adminSignupData.center.operationPeriod,
          city: adminSignupData.center.city,
          gu: adminSignupData.center.gu,
          dong: adminSignupData.center.dong,
          introduction: adminSignupData.center.introduction,
        },
      },
    };

    try {
      const response = await axios.post(
        "https://api.ondue.store/member/admin-join",
        requestBody,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.isSuccess) {
        console.log("관리자 회원가입 성공!");
        // window.location.replace("/login");
      }
    } catch (error) {
      console.error("관리자 회원가입 오류:", error);
    }
  };

  // 아이디 change event
  const handleId = (value) => {
    setId(value);
    setAdminSignupData((prev) => ({ ...prev, id: value }));
  };

  // 비밀번호 change event
  const handlePassword = (value) => {
    setPassword(value);
    setAdminSignupData((prev) => ({ ...prev, password: value }));
  };

  return (
    <items.Container>
      <items.StepContainer>
        <items.StepImg src="/img/final-step.svg" alt="final-step" />
      </items.StepContainer>
      <items.Head>
        사용할 아이디와
        <br />
        비밀번호를 입력해주세요
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
          <Label text="아이디" star />
          <Input
            type="text"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(e) => handleId(e.target.value)}
            width="313px"
          />
        </items.InputContainer>

        <items.InputContainer>
          <Label text="비밀번호" star />
          <Input
            type="text"
            placeholder="비밀번호를 입력해주새요"
            value={password}
            onChange={(e) => handlePassword(e.target.value)}
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
            onClick={() => navigate("/admin/signup/add-info")}
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
