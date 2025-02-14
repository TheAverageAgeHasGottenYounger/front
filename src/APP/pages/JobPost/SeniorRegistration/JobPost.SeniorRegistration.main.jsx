import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/JobPost.SeniorRegistration.main.styles";
import { Button, Label, Input, Dropdown, SelectButton } from "../../../components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
// import axios from 'axios';

export default function SeniorRegistration() {
  const [name, setName] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const mealSupportOptions = [
    "스스로 식사 가능",
    "식사 차려드리기",
    "죽, 반찬 등 요리 필요",
    "경관식 보조"
  ];

  const toiletSupportOptions = [
    "스스로 배변 가능",
    "가끔 대소변 실수 시 도움",
    "기저귀 케어 필요",
    "유치도뇨/방광루/장루 관리"
  ];

  const mobilitySupportOptions = [
    "스스로 거동 가능",
    "이동시 부축 도움",
    "휠체어 이동 보조",
    "거동 불가"
  ];

  const dailyLivingSupportOptions = [
    "청소, 빨래 보조",
    "목욕 보조",
    "병원 동행",
    "산책, 간단한 운동",
    "말벗 등 정서지원",
    "인지자극 활동"
  ];

  const CaregiverStyleOptions = [
    "🧊 34°C 메뉴얼과 규칙을 중요시하는 꼼꼼형",
    "🟦 36°C 조용하고 신뢰있게 돕는 차분형",
    "🟠 37°C 필요에 따라 유연하게 조정하는 균형형",
    "🔥 38°C 감정에 공감하는 정서 교감형",
    "❤️ 40°C 친근 한 가족같이 적극적인 돌봄",
  ];

  const toggleSelectGender = (gender) => {
    setSelectedGender(gender);
  };

  const toggleSelectDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };
  
  const toggleSelectOptions = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  return (
    <items.Container>
      {/*   프로필 */}
      <items.Logo></items.Logo>

      <items.InputWrapper>

        <items.Label>기본 정보</items.Label>

        <items.InputContainer>
          <Label text="이름" star />
          <Input
            type="text"
            placeholder="이름을 입력해주세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
            width="313px"
          />
        </items.InputContainer>

        <items.InputContainer>
          <Label text="생년월일" star />
          <items.DropdownContainer>
            <Dropdown
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              placeholder="년도"
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
              placeholder="월"
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
              placeholder="일"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              width="115px"
            />
          </items.DropdownContainer>
        </items.InputContainer>

        <items.InputContainer>


        <Label text="성별" star />

        <items.SelectGenderContainer>
          <SelectButton
            key="남자"
            text="남자"
            selected={selectedGender === "남자"} 
            onClick={() => toggleSelectGender("남자")}
            width="176.5px"
            height="58px"
          />    
          <SelectButton
            key="여자"
            text="여자"
            selected={selectedGender === "여자"} 
            onClick={() => toggleSelectGender("여자")}
            width="176.5px"
            height="58px"
          />    
        </items.SelectGenderContainer>
        </items.InputContainer>


        <items.InputContainer>
        <items.Label>
          희망 요일•시간
        </items.Label>
        <img src="/img/delete.svg" alt="삭제" width="21" height="21"/>

        <items.SelectContainer>
          {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
            <SelectButton
              key={day}
              text={day}
              selected={selectedDays.includes(day)}
              onClick={() => toggleSelectDay(day)}
              width="46px"
              height="46px"
            />
        ))}
        </items.SelectContainer>
        <items.DropdownContainer>
            <Dropdown
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              placeholder="시작 시간"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              width="166px"
            />
            <Label text="~"></Label>
            <Dropdown
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              placeholder="종료 시간"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              width="166px"
            />
          </items.DropdownContainer>
          <items.AddButton>
            <img src="/img/add.svg" alt="추가" width="21" height="21"/> 일정 추가
          </items.AddButton>
        </items.InputContainer>



        <items.Label>케어 필요 항목</items.Label>

        <items.InputContainer>
          <items.LabelContainer>
            <Label text="식사보조"></Label>
            <items.ExtraLabel>(복수 선택 가능)</items.ExtraLabel>
          </items.LabelContainer>

          <items.SelectGridContainer>
            {mealSupportOptions.map((options) => (
              <SelectButton
                key={options}
                text={options}
                selected={selectedOptions.includes(options)}
                onClick={() => toggleSelectOptions(options)}
                width="175px"
                height="89px"
              />
          ))}
          </items.SelectGridContainer>
        </items.InputContainer>


        <items.InputContainer>
          <items.LabelContainer>
            <Label text="배변보조"></Label>
            <items.ExtraLabel>(복수 선택 가능)</items.ExtraLabel>
          </items.LabelContainer>

          <items.SelectGridContainer>
            {toiletSupportOptions.map((options) => (
              <SelectButton
                key={options}
                text={options}
                selected={selectedOptions.includes(options)}
                onClick={() => toggleSelectOptions(options)}
                width="175px"
                height="89px"
              />
          ))}
          </items.SelectGridContainer>
        </items.InputContainer>        
        
        
        <items.InputContainer>
          <items.LabelContainer>
            <Label text="이동보조"></Label>
            <items.ExtraLabel>(복수 선택 가능)</items.ExtraLabel>
          </items.LabelContainer>

          <items.SelectGridContainer>
            {mobilitySupportOptions.map((options) => (
              <SelectButton
                key={options}
                text={options}
                selected={selectedOptions.includes(options)}
                onClick={() => toggleSelectOptions(options)}
                width="175px"
                height="89px"
              />
          ))}
          </items.SelectGridContainer>
        </items.InputContainer>        
        
        
        <items.InputContainer>
          <items.LabelContainer>
            <Label text="일상생활"></Label>
            <items.ExtraLabel>(복수 선택 가능)</items.ExtraLabel>
          </items.LabelContainer>

          <items.SelectGridContainer>
            {dailyLivingSupportOptions.map((options) => (
              <SelectButton
                key={options}
                text={options}
                selected={selectedOptions.includes(options)}
                onClick={() => toggleSelectOptions(options)}
                width="175px"
                height="89px"
              />
          ))}
          </items.SelectGridContainer>
        </items.InputContainer>


        <items.Label>
          이런 온도 스타일을 가진
          <br/>
          요양보호사를 원해요!
        </items.Label>
        <items.ExtraLabel>선택한 스타일에 따라 맞춤형 요양보호사가 추천돼요</items.ExtraLabel>

        <items.InputContainer>

          <items.SelectColumnContainer>
            {CaregiverStyleOptions.map((options) => (
              <SelectButton
                key={options}
                text={options}
                selected={selectedOptions.includes(options)}
                onClick={() => toggleSelectOptions(options)}
                width="361px"
                height="64px"
              />
          ))}
          </items.SelectColumnContainer>
        </items.InputContainer>


      </items.InputWrapper>

      <items.ButtonContainer>
        <items.ButtoninnerContainer>
          <Button
            text="저장"
            primary
            onClick={() => console.log("")}
            width="361px"
          />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
