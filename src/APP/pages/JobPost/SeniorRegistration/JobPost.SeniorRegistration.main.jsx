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
  const navigate = useNavigate();
  const { signupData, setSignupData } = useSignup();

  const [profileUrl, setProfileUrl] = useState("/img/profile-default.svg");

  const [name, setName] = useState("");

  const [selectedBirthYear, setSelectedBirthYear] = useState("");
  const [selectedBirthMonth, setSelectedBirthMonth] = useState("");
  const [selectedBirthDay, setSelectedBirthDay] = useState("");

  const [selectedGender, setSelectedGender] = useState("");

  const [address, setAddress] = useState("");

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");


  // 장기요양등급
  const [careGradeList, setCareGradeList] = useState([]);
  const [selectedCareGrade, setSelectedCareGrade] = useState("");

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

  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [poiResults, setPoiResults] = useState([]);

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
    if (!selectedBirthYear || !selectedBirthMonth || !selectedBirthDay) return ""; // 값이 없을 때 빈 문자열 반환
    const month = selectedBirthMonth.toString().padStart(2, "0"); // 1~9월을 01~09 형식으로 변환
    const day = selectedBirthDay.toString().padStart(2, "0"); // 1~9일을 01~09 형식으로 변환
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
  const toggleSelectGender = (gender) => {
    setSelectedGender(gender);
  };

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
  const handleCareGradeChange = (option) => {
    setSelectedCareGrade(option);
  };


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
      "birthday": getFormattedBirthday(),
      "sex": selectedGender === "남자" ? "남" : "여",
      "address": address,
      "startTime": startTime || "00:00:00", 
      "endTime": endTime || "00:00:00", 
      "dayList": selectedDay,
      "foodAssistList": selectedFood,
      "toiletAssistList": selectedToilet,
      "moveAssistList": selectedMove,
      "lifeAssistList": selectedLife,
      "careStyle": selectedCareStyle,
      "careGrade": selectedCareGrade,
    }

    console.log(requestBody);

    try {
      const response = await request.post("/senior",requestBody);

      if (response.isSuccess) {
        console.log("어르신 등록 성공!");
        alert("어르신이 성공적으로 등록되었습니다.");
        navigate(-1); 
      }
    } catch (error) {
      console.error("어르신 등록 오류:", error);
      alert("어르신 등록을 실패하였습니다.");
    }
  };


  // 주소 입력 시 POI 검색 요청
  useEffect(() => {
    const fetchPOIResults = async () => {
      if (isAddressModalOpen && address.trim()) {
        try {
          const response = await request.get(`/map/search`, {
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
            options={careGradeList.map(({ code, value }) => ({ value: code, label: value }))}
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
            />
            <items.AddressSearchButton onClick={() => setIsAddressModalOpen(true)}>검색</items.AddressSearchButton>
          </items.AddressContainer>
        </items.InputContainer>

          <items.TimeContainer>
            <items.Label>
              희망 요일•시간
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
            <items.searchBoxIcon
              src="/img/search.svg"
              alt="검색"
            />
            <items.searchBoxInput
              type="text"
              placeholder="주소를 입력해주세요."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              width="206px"
              style={{ background: "transparent", border: "none", outline: "none" }}
            />
            </items.searchBoxContainer>

            <items.POIList>
              {poiResults.length > 0 ? (
                poiResults.map((poi) => (
                  <items.POIItem
                    key={poi.id}
                    onClick={() => {
                      setAddress(`${poi.upperAddrName} ${poi.middleAddrName} ${poi.lowerAddrName} ${poi.name}`);
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
                <items.AddressText style={{ textAlign: "center", padding: "10px"}}>
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
