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
  
  // 프로필 이미지
  // const fileInputRef = useRef(null);
  // const [file, setFile] = useState(null);
  const [profileUrl, setProfileUrl] = useState("/img/profile-default.svg"); // 렌더링용
  // const [profile, setProfile] = useState(null); // api용
  // const [previousProfileUrl, setPreviousProfileUrl] = useState(null);

  // // 프로필 이미지 파일 업로드
  // const handleFileChange = async (event) => {
  //   // console.log('previousProfileUrl',previousProfileUrl);
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile) {
  //     setFile(selectedFile);

  //     if (previousProfileUrl) {
  //       console.log("1");
  //       await handleFileDelete(profileUrl);
  //     }
  //     console.log("12");
  //     await handleFileUpload(selectedFile);
  //   }
  // };

  // const handleClick = () => {
  //   fileInputRef.current.click();
  // };

  // const handleFileUpload = async (file) => {
  //   const formData = new FormData();
  //   formData.append("multipartFileList", file);

  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_URL}/s3`,
  //       formData
  //     );
  //     if (response.data.isSuccess) {
  //       const newProfileUrl = response.data.result[0];
  //       console.log("파일 업로드 성공:", newProfileUrl);
  //       // console.log('이전:', profileUrl);
  //       setPreviousProfileUrl(profileUrl);
  //       setProfileUrl(newProfileUrl);
  //       setProfile(newProfileUrl);
  //     } else {
  //       console.error("파일 업로드 실패:", response.data);
  //     }
  //   } catch (error) {
  //     console.error("파일 업로드 에러:", error);
  //   }
  // };

  // const handleFileDelete = async (profileUrl) => {
  //   try {
  //     // URL에 profileUrl을 포함시킴
  //     const url = `${
  //       process.env.REACT_APP_API_URL
  //     }/s3?fileUrl=${encodeURIComponent(profileUrl)}`;

  //     // console.log('삭제 URL:', url);

  //     const response = await axios.delete(url);

  //     if (response.data.isSuccess) {
  //       console.log("파일 삭제 성공:", profileUrl);
  //     } else {
  //       console.error("파일 삭제 실패:", response.data);
  //     }
  //   } catch (error) {
  //     console.error("파일 삭제 에러:", error);
  //   }
  // };

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
          <items.Upload>사진 등록하기</items.Upload>
        </items.ProfileBox>

        <items.HiddenFileInput
          type="file"
          accept=".gif, .jpg, .png, .jpeg, .svg"
          // ref={fileInputRef}
          // onChange={handleFileChange}
        />
      </items.ProfileContainer>

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
