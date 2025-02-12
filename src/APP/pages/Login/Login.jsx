import React, { useState, useEffect, useContext  } from 'react';
import { useNavigate } from 'react-router-dom';
import * as items from "./Styled/Login.styles"
// import { ACCESS_TOKEN } from '../../Api/request';
// import axios from 'axios';

export default function Login() {

  const [id, setId] = useState('');
	const [password, setPassword] = useState('');

  // const navigate = useNavigate();

  // // const { confirm } = useContext(ConfirmContext);
  // const { alert } = useContext(AlertContext);
  // const [isAlertOpen, setIsAlertOpen] = useState(false);  // Alert 창 열림 여부

	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === 'Enter' && !isAlertOpen) { // Alert 창이 열려있지 않을 때만 실행
  //       event.preventDefault();
  //       handleSubmit();
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [email, password, isAlertOpen]);

  // // 로그인 버튼
  // const handleSubmit = async () => {
   
  //   const requestData = {
  //     email: email,
  //     password: password,
  //   };
  //   try {
  //     const response = await axios.post(`${process.env.REACT_APP_API_URL}/member/login`, requestData);
  //     console.log("response",response);
  //     localStorage.setItem(ACCESS_TOKEN, response.data.result.accessToken);
  //     if (response.data["isSuccess"]) {
  //       console.log("로그인 성공!");
  //       // navigate("/");
  //       // window.location.reload('/');
  //       window.location.replace('/');
  //     } else {
  //       // console.error("로그인 실패:", response.data);
  //       setIsAlertOpen(true);
  //       alert(response.data.message || "로그인 실패")
  //       .then(() => {
  //         setIsAlertOpen(false);
  //       }); // 실패 메시지가 없으면 기본 메시지 표시
  //     }
  //   } catch (error) {
  //     setIsAlertOpen(true);
  //     const errorMessage = error.response?.data?.result?.message || error.response?.data?.result?.email || error.response?.data?.result?.password || error.response?.data?.result || error.response?.data?.message || "로그인 오류 발생"; // 객체를 문자열로 변환하거나 기본 메시지 사용
  //     alert(String(errorMessage))  // 문자열로 변환 보장
  //     .then(() => {
  //       setIsAlertOpen(false);
  //     }); // 실패 메시지가 없으면 기본 메시지 표시
  //     console.error("로그인 오류:", error);
  //   }
  // };
  return (
      <items.Container>
        {/* <items.InnerContainer> */}
        <items.Logo>
        </items.Logo>

        <items.InputWrapper>
          <items.InputContainer>
            <items.Label>아이디</items.Label>
            <items.LabelInput
              type="text"
              placeholder="아이디를 입력해주세요."
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </items.InputContainer>

          <items.InputContainer>
            <items.Label>비밀번호</items.Label>
            <items.LabelInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </items.InputContainer>
        </items.InputWrapper>

        <items.Button>
          로그인하기
        </items.Button>

        <items.Navi>
          회원가입하기
        </items.Navi>
        {/* </items.InnerContainer> */}
      </items.Container>
  )
}
