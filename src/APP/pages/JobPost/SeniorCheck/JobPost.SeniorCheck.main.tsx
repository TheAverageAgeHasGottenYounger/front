import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as items from "./Styled/JobPost.SeniorCheck.main.styles";
import {
  PageHeader,
  Button,
  Label,
  Input,
  Dropdown,
  SelectButton,
} from "../../../components/Components";
import axios from "axios";
import request from "../../../Api/request";
import { useSignup } from "../../../common/SignupContext";

interface BasicSenior {
  seniorId: string;
  profileUrl?: string;
  name: string;
}

interface Senior extends BasicSenior {
  sex: string;
  careGrade: string;
  address: string;
  salary?: string;
  dayList?: string[];
  foodAssistList?: string[];
  toiletAssistList?: string[];
  moveAssistList?: string[];
  lifeAssistList?: string[];
  startTime: string;
  endTime: string;
  birthday: string;
}

interface POI {
  id: string;
  name: string;
  upperAddrName: string;
  middleAddrName: string;
  lowerAddrName: string;
}

// 🟢 API 응답 타입 정의
interface SeniorResponse {
  isSuccess: boolean;
  result: Senior;
}

interface POIResponse {
  isSuccess: boolean;
  result: {
    searchPoiInfo: {
      pois: {
        poi: POI[]; // POI 목록 (예: ["서울역", "강남역"])
      };
    };
  };
}

export default function SeniorRegistration() {
  const navigate = useNavigate();
  const location = useLocation();

  const [seniors, setSeniors] = useState<BasicSenior[]>(() => {
    const storedSeniors = sessionStorage.getItem("seniors");
    return storedSeniors ? JSON.parse(storedSeniors) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("seniors", JSON.stringify(seniors));
  }, [seniors]);

  const [selectedSenior, setSelectedSenior] = useState<string | null>(
    location.state?.seniorId || null
  );

  console.log("불러온 어르신 :", seniors);
  console.log("선택된 어르신 :", selectedSenior);

  const { signupData, setSignupData } = useSignup();

  const [profileUrl, setProfileUrl] = useState("/img/profile-default.svg");

  const [seniorId, setSeniorId] = useState("");
  const [name, setName] = useState("");

  const [selectedBirthYear, setSelectedBirthYear] = useState<string>("");
  const [selectedBirthMonth, setSelectedBirthMonth] = useState<string>("");
  const [selectedBirthDay, setSelectedBirthDay] = useState<string>("");

  const [selectedGender, setSelectedGender] = useState("");

  const [selectedPayType, setSelectedPayType] = useState("");
  const [selectedPay, setSelectedPay] = useState("");

  const [address, setAddress] = useState("");
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [poiResults, setPoiResults] = useState<POI[]>([]);

  // 장기요양등급
  const [careGradeList, setCareGradeList] = useState<
    { code: string; value: string }[]
  >([]); // Dropdown 옵션 리스트
  const [selectedCareGrade, setSelectedCareGrade] = useState("");

  // 요일
  const [dayList, setDayList] = useState<{ code: string; value: string }[]>([]); // Dropdown 옵션 리스트
  const [selectedDay, setSelectedDay] = useState<string[]>([]);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // 배변 보조
  const [toiletList, setToiletList] = useState<
    { code: string; value: string }[]
  >([]); // Dropdown 옵션 리스트
  const [selectedToilet, setSelectedToilet] = useState<string[]>([]);

  // 이동 보조
  const [moveList, setMoveList] = useState<{ code: string; value: string }[]>(
    []
  ); // Dropdown 옵션 리스트
  const [selectedMove, setSelectedMove] = useState<string[]>([]);

  // 일상 생활 보조
  const [lifeList, setLifeList] = useState<{ code: string; value: string }[]>(
    []
  ); // Dropdown 옵션 리스트
  const [selectedLife, setSelectedLife] = useState<string[]>([]);

  // 식사 보조
  const [foodList, setFoodList] = useState<{ code: string; value: string }[]>(
    []
  ); // Dropdown 옵션 리스트
  const [selectedFood, setSelectedFood] = useState<string[]>([]);

  // 요양 스타일
  const [caregiverStyles, setCaregiverStyles] = useState<
    { code: string; value: string }[]
  >([]); // Dropdown 옵션 리스트
  const [selectedCareStyle, setSelectedCareStyle] = useState(
    signupData.careStyle || ""
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 생년월일 포맷 변환 함수
  const formatBirthday = (
    birthday: string
  ): { year: string; month: string; day: string } => {
    if (!birthday) return { year: "", month: "", day: "" };

    const [year, month, day] = birthday.split("-");
    return {
      year: year || "", // 숫자로 변환, 실패 시 ""
      month: month || "",
      day: day || "",
    };
  };

  // 어르신 정보 불러오기
  const fetchSenior = async (seniorId: string) => {
    try {
      const response: SeniorResponse = await request.get(`/senior/${seniorId}`);
      if (response.isSuccess) {
        const senior = response.result;

        setSeniorId(senior.seniorId);
        setProfileUrl(senior.profileUrl || "/img/profile-default.svg");
        setName(senior.name);
        setSelectedGender(senior.sex === "남" ? "남자" : "여자");
        setSelectedCareGrade(senior.careGrade);
        setAddress(senior.address);
        setSelectedPay(senior.salary || "");
        setSelectedDay(senior.dayList || []);
        setSelectedFood(senior.foodAssistList || []);
        setSelectedToilet(senior.toiletAssistList || []);
        setSelectedMove(senior.moveAssistList || []);
        setSelectedLife(senior.lifeAssistList || []);

        // 시간 변환
        setStartTime(senior.startTime);
        setEndTime(senior.endTime);

        // 생년월일 변환
        const { year, month, day } = formatBirthday(senior.birthday);
        setSelectedBirthYear(year);
        setSelectedBirthMonth(month);
        setSelectedBirthDay(day);

        console.log("선택한 어르신 데이터:", senior);

        // seniors 상태 업데이트
        setSeniors((prevSeniors) => {
          const exists = prevSeniors.some(
            (s) => s.seniorId === senior.seniorId
          );
          if (!exists) {
            return [
              ...prevSeniors,
              {
                seniorId: senior.seniorId,
                profileUrl: senior.profileUrl || "/img/profile-default.svg",
                name: senior.name || "이름 없음",
              },
            ];
          }
          return prevSeniors; // 기존 데이터 유지
        });
      }
    } catch (error) {
      console.error("어르신 불러오기 오류", error);
    }
  };

  // selectedSenior 변경 시 자동 실행
  useEffect(() => {
    if (selectedSenior) {
      fetchSenior(selectedSenior);
    }
  }, [selectedSenior]);

  // 어르신 선택 시 실행
  const handleSelectSenior = (seniorId: string) => {
    setSelectedSenior(seniorId);
    handleSubmitTmp();
  };

  // 생년월일
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

  const getFormattedBirthday = () => {
    if (!selectedBirthYear || !selectedBirthMonth || !selectedBirthDay)
      return ""; // 값이 없을 때 빈 문자열 반환
    const month = selectedBirthMonth.padStart(2, "0"); // 1~9월을 01~09 형식으로 변환
    const day = selectedBirthDay.padStart(2, "0"); // 1~9일을 01~09 형식으로 변환
    return `${selectedBirthYear}-${month}-${day}`;
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

  // 성별
  const toggleSelectGender = (gender: string) => {
    setSelectedGender(gender);
  };

  const payType = [{ value: "시급", label: "시급" }];

  // 장기요양등급 목록 가져오기
  useEffect(() => {
    const fetchCareGradeList = async () => {
      try {
        const response = await axios.get(
          "https://api.ondue.store/enum/care-grade"
        );
        const enumList = response.data.result.enumList;
        console.log("장기요양등급 response", response);
        setCareGradeList(enumList);
      } catch (error) {
        console.error("장기요양등급 목록 불러오기 오류:", error);
      }
    };
    fetchCareGradeList();
  }, []);

  // 장기요양등급 선택
  const handleCareGradeChange = (option: string) => {
    setSelectedCareGrade(option);
  };

  // 요일 목록 가져오기
  useEffect(() => {
    const fetchDayList = async () => {
      try {
        const response = await axios.get("https://api.ondue.store/enum/day");
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
  const handleDayChange = (option: string) => {
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
  const handleFoodChange = (option: string) => {
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
  const handleMoveChange = (option: string) => {
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
  const handleLifeChange = (option: string) => {
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
  const handleToiletChange = (option: string) => {
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
  const handleCareStyleChange = (selectedCode: string) => {
    setSelectedCareStyle(selectedCode);
    setSignupData((prev) => ({
      ...prev,
      careStyle: selectedCode, // signupData에 code 값 저장
    }));
  };

  // 저장 버튼
  const handleSubmit = async () => {
    const requestBody = {
      profileUrl: profileUrl,
      name: name,
      birthday: getFormattedBirthday(),
      sex: selectedGender === "남자" ? "남" : "여",
      address: address,
      startTime: startTime || "00:00:00",
      endTime: endTime || "00:00:00",
      dayList: selectedDay,
      foodAssistList: selectedFood,
      toiletAssistList: selectedToilet,
      moveAssistList: selectedMove,
      lifeAssistList: selectedLife,
      careStyle: selectedCareStyle,
      careGrade: selectedCareGrade,
      salary: parseInt(selectedPay, 10),
    };

    console.log(requestBody);

    try {
      const response: { isSuccess: boolean } = await request.patch(
        `/senior/${seniorId}`,
        requestBody
      );

      if (response.isSuccess) {
        console.log("어르신 등록 성공!");
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("어르신 수정 오류:", error);
      alert("어르신 등록을 실패하였습니다.");
    }
  };

  // 저장 버튼 (어르신 간 이동 시)
  const handleSubmitTmp = async () => {
    const requestBody = {
      profileUrl: profileUrl,
      name: name,
      birthday: getFormattedBirthday(),
      sex: selectedGender === "남자" ? "남" : "여",
      address: address,
      startTime: startTime || "00:00:00",
      endTime: endTime || "00:00:00",
      dayList: selectedDay,
      foodAssistList: selectedFood,
      toiletAssistList: selectedToilet,
      moveAssistList: selectedMove,
      lifeAssistList: selectedLife,
      careStyle: selectedCareStyle,
      careGrade: selectedCareGrade,
      salary: parseInt(selectedPay, 10),
    };

    console.log(requestBody);

    try {
      const response: { isSuccess: boolean } = await request.patch(
        `/senior/${seniorId}`,
        requestBody
      );

      if (response.isSuccess) {
        console.log("어르신 등록 성공!");
        // setIsModalOpen(true);
      }
    } catch (error) {
      console.error("어르신 수정 오류:", error);
      alert("수정 사항이 반영되지 않았습니다.");
    }
  };

  // 주소 입력 시 POI 검색 요청
  useEffect(() => {
    const fetchPOIResults = async () => {
      if (isAddressModalOpen && address.trim()) {
        try {
          const response: POIResponse = await request.get(`/map/search`, {
            params: { address },
          });

          if (response.isSuccess) {
            setPoiResults(response.result.searchPoiInfo.pois.poi);
          } else {
            setPoiResults([]);
          }
        } catch (error) {
          console.error("지도 검색 오류:", error);
          setPoiResults([]);
        }
      }
    };

    fetchPOIResults();
  }, [address, isAddressModalOpen]);

  return (
    <items.Container>
      <PageHeader title="구인 등록" />

      <items.InputWrapper>
        <items.HeadContainer>
          <items.Label>어르신 선택</items.Label>
          <items.ExtraLabel>
            구인이 필요한 어르신을 선택해주세요
            <br />
            기본에 입력한 정보가 반영돼요
          </items.ExtraLabel>
        </items.HeadContainer>

        {/* 어르신 프로필 리스트 */}
        <items.ProfileWrapper>
          <items.ProfileContainer>
            {seniors.map((senior) => (
              <items.ProfileBox
                key={senior.seniorId}
                onClick={() => handleSelectSenior(senior.seniorId)}
              >
                <img
                  src={senior.profileUrl || "/img/profile-default.svg"}
                  alt="프로필"
                  style={{
                    borderRadius: "50%", // 원형으로 만들기
                    objectFit: "cover", // 이미지가 찌그러지지 않도록 유지
                    width: "96px",
                    height: "96px",
                  }}
                />
                {selectedSenior === senior.seniorId && (
                  <items.SelectedIcon
                    src="/img/check_circle.svg"
                    alt="선택됨"
                  />
                )}
                <items.ProfileLabel>{senior.name}</items.ProfileLabel>
              </items.ProfileBox>
            ))}
          </items.ProfileContainer>

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
        </items.ProfileWrapper>

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
              value={selectedBirthYear}
              onChange={(e) => setSelectedBirthYear(e.target.value)}
              width="115px"
            />
            <Dropdown
              options={generateMonthOptions()}
              placeholder="월"
              value={selectedBirthMonth}
              onChange={(e) => setSelectedBirthMonth(e.target.value)}
              width="115px"
            />
            <Dropdown
              options={generateDayOptions()}
              placeholder="일"
              value={selectedBirthDay}
              onChange={(e) => setSelectedBirthDay(e.target.value)}
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
            options={careGradeList.map(({ code, value }) => ({
              value: code,
              label: value,
            }))}
            placeholder="등급 선택"
            value={selectedCareGrade}
            onChange={(e) => handleCareGradeChange(e.target.value)}
            width="166px"
          />
        </items.InputContainer>

        <items.InputContainer>
          <Label text="주소" star />
          <items.AddressContainer>
            <Input
              type="text"
              placeholder="주소를 입력해주세요."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              width="206px"
            />
            <items.AddressSearchButton
              onClick={() => setIsAddressModalOpen(true)}
            >
              검색
            </items.AddressSearchButton>
          </items.AddressContainer>
        </items.InputContainer>

        <items.TimeContainer>
          <items.Label>희망 요일•시간</items.Label>
          <items.SelectContainer>
            {dayList.map(({ code, value }) => (
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
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              width="166px"
            />
            <Label text="~"></Label>
            <Dropdown
              options={generateTimeOptions()}
              placeholder="종료 시간"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              width="166px"
            />
          </items.DropdownContainer>
        </items.TimeContainer>
        {/*
        <items.AddButton onClick={addSchedule}>
          <img src="/img/add.svg" alt="추가" width="21" height="21" /> 일정 추가
        </items.AddButton>
        */}

        <items.InputContainer>
          <Label text="희망 급여" star />
          <items.DropdownContainer>
            <Dropdown
              options={payType}
              placeholder="시급"
              value={selectedPayType}
              onChange={(e) => setSelectedPayType(e.target.value)}
              width="135px"
            />
            <Input
              type="number"
              placeholder="금액을 입력해주세요."
              value={selectedPay}
              onChange={(e) => setSelectedPay(e.target.value)}
              width="170px"
            />
          </items.DropdownContainer>
        </items.InputContainer>

        <items.Label>케어 필요 항목</items.Label>

        <items.InputContainer>
          <items.LabelContainer>
            <Label text="식사보조"></Label>
            <items.ExtraLabel>(복수 선택 가능)</items.ExtraLabel>
          </items.LabelContainer>

          <items.SelectGridContainer>
            {foodList.map(({ code, value }) => (
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
            {toiletList.map(({ code, value }) => (
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
            {moveList.map(({ code, value }) => (
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
            {lifeList.map(({ code, value }) => (
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
            text="등록하기"
            primary
            onClick={() => handleSubmit()}
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
              onClick={() =>
                navigate("/jobpost/MatchLoading", { state: { seniors } })
              }
              width="275px"
            />
          </items.ModalContainer>
        </items.ModalOverlay>
      )}

      {/* 주소 모달 컴포넌트 */}
      {isAddressModalOpen && (
        <items.AddressModalOverlay>
          <items.AddressModalContainer>
            <items.ModalCloseButton
              src="/img/close.svg"
              alt="창닫기"
              onClick={() => setIsAddressModalOpen(false)}
            />
            <items.AddressLabel>주소를 검색해 주세요</items.AddressLabel>

            <items.searchBoxContainer>
              <items.searchBoxIcon src="/img/search.svg" alt="검색" />
              <items.searchBoxInput
                type="text"
                placeholder="주소를 입력해주세요."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                width="206px"
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                }}
              />
            </items.searchBoxContainer>

            <items.POIList>
              {poiResults.length > 0 ? (
                poiResults.map((poi) => (
                  <items.POIItem
                    key={poi.id}
                    onClick={() => {
                      setAddress(
                        `${poi.upperAddrName} ${poi.middleAddrName} ${poi.lowerAddrName} ${poi.name}`
                      );
                      setIsAddressModalOpen(false);
                    }}
                  >
                    <items.searchBoxIcon src="/img/location.svg" alt="위치" />
                    <items.searchResultBox>
                      <items.AddressText>{poi.name}</items.AddressText>
                      <items.SubAddressText>{`${poi.upperAddrName} ${poi.middleAddrName} ${poi.lowerAddrName}`}</items.SubAddressText>
                    </items.searchResultBox>
                  </items.POIItem>
                ))
              ) : (
                <items.AddressText
                  style={{ textAlign: "center", padding: "10px" }}
                >
                  검색 결과가 없습니다.
                </items.AddressText>
              )}
            </items.POIList>
          </items.AddressModalContainer>
        </items.AddressModalOverlay>
      )}
    </items.Container>
  );
}
