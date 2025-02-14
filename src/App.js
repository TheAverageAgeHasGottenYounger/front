import styled from "styled-components";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./APP/pages/Login/Login";
import TypeChoice from "./APP/pages/Signup/TypeChoice/Signup.TypeChoice.main";
import Info from "./APP/pages/Signup/Info/Signup.Info.main";
import Form from "./APP/pages/Signup/Form/Signup.Form.main";
import AddInfo from "./APP/pages/Signup/AddInfo/Signup.AddInfo.main";
import InfoAdmin from "./APP/pages/SignupAdmin/Info/SignupAdmin.Info.main";
import FormAdmin from "./APP/pages/SignupAdmin/Form/SignupAdmin.Form.main";
import AddInfoAdmin from "./APP/pages/SignupAdmin/AddInfo/SignupAdmin.AddInfo.main";
// import { Button, Label, Input, Dropdown, TextArea, SelectButton } from "./APP/components/Components";

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh; /* Root가 화면의 전체 높이를 차지하도록 설정 */
`;

const Container = styled.div`
  display: flex; 
  gap: 4px; 
  flex-wrap: wrap; 
`;


function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [text, setText] = useState(""); // TextArea 값을 저장할 state 추가
  const [selectedDays, setSelectedDays] = useState([]); // 여러 개 선택 가능

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const toggleSelect = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <Root>
      {/* <Label text = "asldfjalsd"/>
        <Label text = "asldfjalsd" star/>
        <Input 
          placeholder="asdlfja;lsfkd"
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <Button 
          text="확인" 
          primary 
          onClick={() => alert(`입력된 값: ${inputValue}`)} 
        />
        <Button 
          text="취소" 
          outline 
          onClick={() => setInputValue("")} 
        />
        <Button 
          text="확인" 
          disabled 
          onClick={() => setInputValue("")} 
        />
        <Dropdown 
          options={[
            { value: "option1", label: "옵션 1ㅁㄴㅇㄹㅁㄴㄹㄴㅁㄹ ㄹㅁㄴㄹㄴㄹㅁ ㄴㄷㄹ ㅁㄴㄹ ㅁㄴㄹㄷㅁ ㄹㄷㅁㄴㄷㄹ ㅁㄴㅇㄹ ㅁㄴㅇㄹ ㅁㄴㅇㄹ" },
            { value: "option2", label: "옵션 2" },
            { value: "option3", label: "옵션 3" }
          ]}
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        />

        <Container>
              {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
                <SelectButton
                  key={day}
                  text={day}
                  selected={selectedDays.includes(day)}
                  onClick={() => toggleSelect(day)}
                />
            ))}
        </Container>
        <TextArea placeholder="한줄 소개를 입력해주세요" value={text} onChange={handleChange} maxLength={60} /> */}
      <Routes>
        {/* 로그인 */}
        <Route path="/login" element={<Login />} />

        {/* 회원가입 과정 */}
        <Route path="/signup/type" element={<TypeChoice />} />
        <Route path="/signup/info" element={<Info />} />
        <Route path="/signup/form" element={<Form />} />
        <Route path="/signup/add-info" element={<AddInfo />} />

        {/* 관리자 회원가입 과정 */}
        {/* <Route path="/admin/signup/info" element={<InfoAdmin />} /> */}
        <Route path="/admin/signup/info" element={<InfoAdmin />} />
        <Route path="/admin/signup/form" element={<FormAdmin />} />
        <Route path="/admin/signup/add-info" element={<AddInfoAdmin />} />

        {/* 잘못된 경로는 로그인 페이지로 리다이렉트 */}
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>

    </Root>
  );
}

export default App;
