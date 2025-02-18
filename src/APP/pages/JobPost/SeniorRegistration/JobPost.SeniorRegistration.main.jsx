import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/JobPost.SeniorRegistration.main.styles";
import {
  PageHeader,
  Button,
  Label,
  Input,
  Dropdown,
  SelectButton,
} from "../../../components/Components";
import { ACCESS_TOKEN } from '../../../Api/request';
import axios from 'axios';
import request from '../../../Api/request';
import { useSignup } from "../../../common/SignupContext";


export default function SeniorRegistration() {
  const { signupData, setSignupData } = useSignup();

  const [profileUrl, setProfileUrl] = useState("/img/profile-default.svg");

  const [name, setName] = useState("");

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const [selectedGender, setSelectedGender] = useState("");

  const [selectedGrade, setSelectedGrade] = useState("");

  const [selectedPayType, setSelectedPayType] = useState("");
  const [selectedPay, setSelectedPay] = useState("");


  // 요일
  const [dayList, setDayList] = useState([]);
  const [selectedDay, setSelectedDay] = useState(
    signupData.day || []
  );

  // 배변 보조
  const [toiletList, setToiletList] = useState([]);
  const [selectedToilet, setSelectedToilet] = useState(
    signupData.toilet || []
  );

  // 이동 보조
  const [moveList, setMoveList] = useState([]);
  const [selectedMove, setSelectedMove] = useState(
    signupData.move || []
  );

  // 일상 생활 보조
  const [lifeList, setLifeList] = useState([]);
  const [selectedLife, setSelectedLife] = useState(
    signupData.life || []
  );

  // 식사 보조
  const [foodList, setFoodList] = useState([]);
  const [selectedFood, setSelectedFood] = useState(
    signupData.food || []
  );

  // 요양 스타일
  const [caregiverStyles, setCaregiverStyles] = useState([]);
  const [selectedCareStyle, setSelectedCareStyle] = useState(
    signupData.careStyle || ""
  );
  
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


  // 요일 목록 가져오기
  useEffect(() => {
    const fetchDayList = async () => {
      try {
        const response = await axios.get(
          "https://api.ondue.store/enum/day"
        );
        const enumList = response.data.result.enumList;
        console.log("요일 목록 response", response);
        setDayList(enumList);
      } catch (error) {
        console.error("요일 목록 불러오기 오류:", error);
      }
    };
    fetchDayList();
  }, []);

  // 요일 선택
  const handleDayChange = (option) => {
    setSelectedDay((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
    console.log(selectedDay);
  };


  // 식사 보조 목록 가져오기
  useEffect(() => {
    const fetchFoodList = async () => {
      try {
        const response = await axios.get(
          "https://api.ondue.store/enum/food-assist"
        );
        const enumList = response.data.result.enumList;
        console.log("식사 보조 등급 response", response);
        setFoodList(enumList);
      } catch (error) {
        console.error("식사 보조 등급 목록 불러오기 오류:", error);
      }
    };
    fetchFoodList();
  }, []);

  // 식사 보조 선택
  const handleFoodChange = (option) => {
    setSelectedFood((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
    console.log(selectedFood);
  };


  // 이동 보조 목록 가져오기
  useEffect(() => {
    const fetchMoveList = async () => {
      try {
        const response = await axios.get(
          "https://api.ondue.store/enum/move-assist"
        );
        const enumList = response.data.result.enumList;
        console.log("이동 보조 등급 response", response);
        setMoveList(enumList);
      } catch (error) {
        console.error("이동 보조 등급 목록 불러오기 오류:", error);
      }
    };
    fetchMoveList();
  }, []);

  // 이동 보조 선택
  const handleMoveChange = (option) => {
    setSelectedMove((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
    console.log(selectedMove);
  };


  // 일상 생활 보조 목록 가져오기
  useEffect(() => {
    const fetchLifeList = async () => {
      try {
        const response = await axios.get(
          "https://api.ondue.store/enum/life-assist"
        );
        const enumList = response.data.result.enumList;
        console.log("일상 생활 보조 등급 response", response);
        setLifeList(enumList);
      } catch (error) {
        console.error("일상 생활 보조 등급 목록 불러오기 오류:", error);
      }
    };
    fetchLifeList();
  }, []);

  // 일상 생활 보조 선택
  const handleLifeChange = (option) => {
    setSelectedLife((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
    console.log(selectedLife);
  };


  // 배변 보조 목록 가져오기
  useEffect(() => {
    const fetchToiletList = async () => {
      try {
        const response = await axios.get(
          "https://api.ondue.store/enum/toilet-assist"
        );
        const enumList = response.data.result.enumList;
        console.log("배변 보조 등급 response", response);
        setToiletList(enumList);
      } catch (error) {
        console.error("배변 보조 등급 목록 불러오기 오류:", error);
      }
    };
    fetchToiletList();
  }, []);

  // 배변 보조 선택
  const handleToiletChange = (option) => {
    setSelectedToilet((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
    console.log(selectedToilet);
  };


  // 온기 스타일 목록 가져오기
  useEffect(() => {
    const fetchCaregiverStyles = async () => {
      try {
        const response = await axios.get(
          "https://api.ondue.store/enum/care-style"
        );
        const enumList = response.data.result.enumList;
        console.log("온기 스타일 response", response);
        setCaregiverStyles(enumList);
      } catch (error) {
        console.error("온기 스타일 목록 불러오기 오류:", error);
      }
    };
    fetchCaregiverStyles();
  }, []);

  // 온기 스타일 선택
  const handleCareStyleChange = (selectedCode) => {
    setSelectedCareStyle(selectedCode);
    setSignupData((prev) => ({
      ...prev,
      careStyle: selectedCode, // signupData에 code 값 저장
    }));
  };


  // 저장 버튼
  const handleSubmit = async () => {
    const requestBody = {
      "profileUrl": profileUrl,
      "name": name,
      "birthday": "2025-02-18",
      "sex": selectedGender === "남자" ? "남" : "여",
      "address": "string",
      "startTime": "12:00:00",
      "endTime": "12:00:00",
      "dayList": selectedDay,
      "foodAssistList": selectedFood,
      "toiletAssistList": selectedToilet,
      "moveAssistList": selectedMove,
      "lifeAssistList": selectedLife,
      "careStyle": selectedCareStyle,
    }

    try {
      const response = await request.post("/senior",requestBody);

      if (response.isSuccess) {
        console.log("어르신 등록 성공!");
        // window.location.replace("/homeadmin");
      }
    } catch (error) {
      console.error("어르신 등록 오류:", error);
    }
  };


  return (
    <items.Container>
      <PageHeader title="어르신 정보 등록" />

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
              {dayList.map(({code, value}) => (
                <SelectButton
                  key={code}
                  text={value}
                  selected={selectedDay.includes(code)}
                  onClick={() => handleDayChange(code)}
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

        <items.Label>케어 필요 항목</items.Label>

        <items.InputContainer>
          <items.LabelContainer>
            <Label text="식사보조"></Label>
            <items.ExtraLabel>(복수 선택 가능)</items.ExtraLabel>
          </items.LabelContainer>

          <items.SelectGridContainer>
            {foodList.map(({code, value}) => (
              <SelectButton
                key={code}
                text={value}
                selected={selectedFood.includes(code)}
                onClick={() => handleFoodChange(code)}
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
            {toiletList.map(({code, value}) => (
              <SelectButton
                key={code}
                text={value}
                selected={selectedToilet.includes(code)}
                onClick={() => handleToiletChange(code)}
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
            {moveList.map(({code, value}) => (
              <SelectButton
                key={code}
                text={value}
                selected={selectedMove.includes(code)}
                onClick={() => handleMoveChange(code)}
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
            {lifeList.map(({code, value}) => (
              <SelectButton
                key={code}
                text={value}
                selected={selectedLife.includes(code)}
                onClick={() => handleLifeChange(code)}
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
            {caregiverStyles.map(({ code, value }) => (
              <SelectButton
                key={code}
                text={value} 
                selected={selectedCareStyle === code} 
                onClick={() => handleCareStyleChange(code)}
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
            onClick={() => handleSubmit()}
            width="361px"
          />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
