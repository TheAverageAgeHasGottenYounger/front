import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/JobPost.SeniorCheck.main.styles";
import {
  PageHeader,
  Button,
  Label,
  Input,
  Dropdown,
  SelectButton,
} from "../../../components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
// import axios from 'axios';

export default function SeniorCheck() {
  const navigate = useNavigate();

  const [profileUrl, setProfileUrl] = useState("/img/profile-default.svg");

  const [name, setName] = useState("");

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const [selectedGender, setSelectedGender] = useState("");

  const [selectedGrade, setSelectedGrade] = useState("");

  const [selectedPayType, setSelectedPayType] = useState("");
  const [selectedPay, setSelectedPay] = useState("");

  const [selectedOptions, setSelectedOptions] = useState([]);
  // const [selectedOptions, setSelectedOptions] = useState([]);
  // const [selectedOptions, setSelectedOptions] = useState([]);
  // const [selectedOptions, setSelectedOptions] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [timeSchedules, setTimeSchedules] = useState([
    { id: 1, selectedDays: [], selectedStartTime: "", selectedEndTime: "" },
  ]);

  const longTermCareGrades = [
    { value: "1", label: "1등급" },
    { value: "2", label: "2등급" },
    { value: "3", label: "3등급" },
    { value: "4", label: "4등급" },
    { value: "5", label: "5등급" },
    { value: "인지지원", label: "인지지원등급" },
  ];

  const payType = [{ value: "시급", label: "시급" }];

  const mealSupportOptions = [
    "스스로 식사 가능",
    "식사 차려드리기",
    "죽, 반찬 등 요리 필요",
    "경관식 보조",
  ];

  const toiletSupportOptions = [
    "스스로 배변 가능",
    "가끔 대소변 실수 시 도움",
    "기저귀 케어 필요",
    "유치도뇨/방광루/장루 관리",
  ];

  const mobilitySupportOptions = [
    "스스로 거동 가능",
    "이동시 부축 도움",
    "휠체어 이동 보조",
    "거동 불가",
  ];

  const dailyLivingSupportOptions = [
    "청소, 빨래 보조",
    "목욕 보조",
    "병원 동행",
    "산책, 간단한 운동",
    "말벗 등 정서지원",
    "인지자극 활동",
  ];

  const CaregiverStyleOptions = [
    "🧊 메뉴얼과 규칙을 중요시하는 꼼꼼형",
    "🟦 조용하고 신뢰있게 돕는 차분형",
    "🟠 필요에 따라 유연하게 조정하는 균형형",
    "🔥 감정에 공감하는 정서 교감형",
    "❤️ 친근 한 가족같이 적극적인 돌봄",
  ];

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 1901; year <= currentYear; year++) {
      years.push({ value: year, label: year.toString() });
    }
    return years;
  };

  const generateMonthOptions = () => {
    return Array.from({ length: 12 }, (_, i) => ({
      value: i + 1,
      label: `${i + 1}월`,
    }));
  };

  const generateDayOptions = () => {
    return Array.from({ length: 31 }, (_, i) => ({
      value: i + 1,
      label: `${i + 1}일`,
    }));
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        times.push({
          value: `${formattedHour}:${formattedMinute}`,
          label: `${formattedHour}:${formattedMinute}`,
        });
      }
    }
    return times;
  };

  const toggleSelectGender = (gender) => {
    setSelectedGender(gender);
  };

  const toggleSelectDay = (id, day) =>
    setTimeSchedules((prev) =>
      prev.map((schedule) =>
        schedule.id === id
          ? {
              ...schedule,
              selectedDays: schedule.selectedDays.includes(day)
                ? schedule.selectedDays.filter((d) => d !== day)
                : [...schedule.selectedDays, day],
            }
          : schedule
      )
    );

  const addSchedule = () => {
    setTimeSchedules((prev) => [
      ...prev,
      {
        id: Date.now(),
        selectedDays: [],
        selectedStartTime: "",
        selectedEndTime: "",
      },
    ]);
  };

  const removeSchedule = (id) =>
    setTimeSchedules((prev) =>
      prev.length > 1 ? prev.filter((schedule) => schedule.id !== id) : prev
    );

  const updateTime = (id, field, value) =>
    setTimeSchedules((prev) =>
      prev.map((schedule) =>
        schedule.id === id ? { ...schedule, [field]: value } : schedule
      )
    );

  const toggleSelectOptions = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <items.Container>
      <PageHeader title="구인 등록" />

      <items.InputWrapper>
        <items.HeadContainer>
          <items.Label>임시 문장 입니다.</items.Label>
          <items.ExtraLabel>
            구인이 필요한 어르신을 선택해주세요
            <br />
            기본에 입력한 정보가 반영돼요
          </items.ExtraLabel>
        </items.HeadContainer>

        <items.ProfileContainer>
          <items.ProfileBox onClick={() => navigate("/jobpost/SelectSenior")}>
            <img
              src="/img/add_user.svg"
              width="96px"
              height="96px"
              alt="추가"
            />
            <items.ProfileLabel>불러오기</items.ProfileLabel>
          </items.ProfileBox>

          <items.ProfileBox
            onClick={() => navigate("/jobpost/seniorregistration")}
          >
            <img
              src="/img/add_user.svg"
              width="96px"
              height="96px"
              alt="추가"
            />
            <items.ProfileLabel>새로 등록</items.ProfileLabel>
          </items.ProfileBox>
        </items.ProfileContainer>

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
              options={generateYearOptions()}
              placeholder="년도"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              width="115px"
            />
            <Dropdown
              options={generateMonthOptions()}
              placeholder="월"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              width="115px"
            />
            <Dropdown
              options={generateDayOptions()}
              placeholder="일"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
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
          <Label text="장기요양등급" star />
          <Dropdown
            options={longTermCareGrades}
            placeholder="등급 선택"
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            width="166px"
          />
        </items.InputContainer>

        <items.InputContainer>
          <Label text="주소" star />
          <items.AddressContainer>
            <Input
              type="text"
              placeholder="주소를 입력해주세요."
              value={name}
              onChange={(e) => setName(e.target.value)}
              width="206px"
            />
            <items.AddressSearchButton>검색</items.AddressSearchButton>
          </items.AddressContainer>
        </items.InputContainer>

        {timeSchedules.map((schedule, index) => (
          <items.TimeContainer key={schedule.id}>
            <items.Label>
              희망 요일•시간 {index > 0 ? `${index + 1}` : ""}
              {index > 0 && (
                <img
                  src="/img/delete.svg"
                  alt="삭제"
                  width="21"
                  height="21"
                  onClick={() => removeSchedule(schedule.id)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </items.Label>
            <items.SelectContainer>
              {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
                <SelectButton
                  key={day}
                  text={day}
                  selected={schedule.selectedDays.includes(day)}
                  onClick={() => toggleSelectDay(schedule.id, day)}
                  width="46px"
                  height="46px"
                />
              ))}
            </items.SelectContainer>
            <items.DropdownContainer>
              <Dropdown
                options={generateTimeOptions()}
                placeholder="시작 시간"
                value={schedule.selectedStartTime}
                onChange={(e) =>
                  updateTime(schedule.id, "selectedStartTime", e.target.value)
                }
                width="166px"
              />
              <Label text="~"></Label>
              <Dropdown
                options={generateTimeOptions()}
                placeholder="종료 시간"
                value={schedule.selectedEndTime}
                onChange={(e) =>
                  updateTime(schedule.id, "selectedEndTime", e.target.value)
                }
                width="166px"
              />
            </items.DropdownContainer>
          </items.TimeContainer>
        ))}
        <items.AddButton onClick={addSchedule}>
          <img src="/img/add.svg" alt="추가" width="21" height="21" /> 일정 추가
        </items.AddButton>

        <items.InputContainer>
          <Label text="희망 급여" star />
          <items.DropdownContainer>
            <Dropdown
              options={payType}
              placeholder="시급"
              value={selectedPay}
              onChange={(e) => setSelectedPayType(e.target.value)}
              width="135px"
            />
            <Input
              type="number"
              placeholder="금액을 입력해주세요."
              value={name}
              onChange={(e) => setSelectedPay(e.target.value)}
              width="170px"
            />
          </items.DropdownContainer>
          <items.ExtraInstructionContainer>
            <items.ExtraInstruction>월급 : 0원</items.ExtraInstruction>
            <items.ExtraInstruction>
              최저 임금 : 10,030원
            </items.ExtraInstruction>
          </items.ExtraInstructionContainer>
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
          이런 온기 스타일을 가진
          <br />
          요양보호사를 원해요!
        </items.Label>
        <items.ExtraLabel>
          선택한 스타일에 따라 맞춤형 요양보호사가 추천돼요
        </items.ExtraLabel>

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
            onClick={() => setIsModalOpen(true)}
            width="361px"
          />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>

      {/* 모달 컴포넌트 */}
      {isModalOpen && (
        <items.ModalOverlay>
          <items.ModalContainer>
            <items.ModalCloseButton
              src="/img/close.svg"
              alt="창닫기"
              onClick={() => setIsModalOpen(false)}
            />
            <items.ModalText>
              구인 등록이 완료되었어요!
              <br />
              매칭을 시작할까요?
            </items.ModalText>
            <Button
              text="매칭 시작하기"
              primary
              onClick={() => setIsModalOpen(true)}
              width="275px"
            />
          </items.ModalContainer>
        </items.ModalOverlay>
      )}
    </items.Container>
  );
}
