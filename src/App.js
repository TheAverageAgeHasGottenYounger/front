import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./APP/pages/Login/Login";
import React, { useState } from "react";
import { Button, Label, Input, Dropdown, TextArea, SelectButton } from "./APP/components/Components";


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
        <Label text = "asldfjalsd"/>
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
        <TextArea placeholder="한줄 소개를 입력해주세요" value={text} onChange={handleChange} maxLength={60} />
      <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> 모든 다른 경로는 홈으로 리다이렉트 */}
        </Routes>
    </Root>
  );
}

export default App;
