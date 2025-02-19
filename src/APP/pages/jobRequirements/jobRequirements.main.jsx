import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/jobRequirements.main.styles";
import {
  PageHeader,
  Button,
  Label,
  Input,
  Dropdown,
  SelectButton,
} from "../../components/Components";
import axios from "axios";
import request from "../../Api/request";

export default function JobRequirements() {
  const navigate = useNavigate();

  // 근무 가능 지역 상태
  const [cityOptions, setCityOptions] = useState([]); // 시 리스트
  const [guOptions, setGuOptions] = useState([]); // 구 리스트
  const [dongOptions, setDongOptions] = useState([]); // 동 리스트
  const [city, setCity] = useState(""); // 선택된 시
  const [gu, setGu] = useState(""); // 선택된 구
  const [dong, setDong] = useState(""); // 선택된 동
  const [locateList, setLocateList] = useState([]); // 근무 가능 지역 리스트
  const locateCount = locateList.length; // 근무 가능 지역 개수

  const [selectedPayType, setSelectedPayType] = useState("");
  const [selectedPay, setSelectedPay] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [timeSchedules, setTimeSchedules] = useState([
    { id: 1, selectedDays: [], selectedStartTime: "", selectedEndTime: "" },
  ]);

  const payType = [{ value: "시급", label: "시급" }];

  const [memberId, setMemberId] = useState(null);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await request.get("/member/current");
        if (response.isSuccess) {
          const id = response.result.memberId;
          setMemberId(id);
        } else {
          console.error("회원 정보 가져오기 실패:", response.message);
        }
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };

    fetchMemberData();
  }, []);

  const handleSaveJobSearch = async () => {
    if (!memberId) {
      alert("회원 정보를 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    try {
      const requestBody = {
        memberId,
        startTime: timeSchedules[0].selectedStartTime,
        endTime: timeSchedules[0].selectedEndTime,
        salary: Number(selectedPay),
        jobSearchAreas: locateList.map(({ city, gu, dong }) => ({
          address: { city, district: gu, dong, detail: "" },
        })),
        dayList: timeSchedules[0].selectedDays,
      };

      console.log("requestBody", requestBody);

      const response = await axios.post(
        "https://api.ondue.store/job-search",
        requestBody
      );

      if (response.data.isSuccess) {
        setIsModalOpen(true);
      } else {
        console.error("요청 실패:", response.data.message);
        alert("저장 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
      alert("서버와의 통신 중 오류가 발생했습니다.");
    }
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

  // '시' 목록 불러오기 (화면 렌더링 시)
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("https://api.ondue.store/map/city");
        setCityOptions(
          response.data.result.map((city) => ({ value: city, label: city }))
        );
      } catch (error) {
        console.error("시 목록 불러오기 실패:", error);
      }
    };

    fetchCities();
  }, []);

  // '시' 선택 핸들러 -> '구' 목록 요청
  const handleCityChange = async (value) => {
    setCity(value); // '시' 이름을 두 글자로 제한
    setGu(""); // '구' 초기화
    setDong(""); // '동' 초기화

    try {
      const response = await axios.get(
        `https://api.ondue.store/map/gu-gun?city=${encodeURIComponent(value)}`
      );
      setGuOptions(
        response.data.result.map((gu) => ({ value: gu, label: gu }))
      );
    } catch (error) {
      console.error("구 목록 불러오기 실패:", error);
    }
  };

  // '구' 선택 핸들러 -> '동' 목록 요청
  const handleGuChange = async (value) => {
    setGu(value);
    setDong(""); // '동' 초기화

    try {
      const response = await axios.get(
        `https://api.ondue.store/map/dong?guGun=${encodeURIComponent(value)}`
      );
      setDongOptions(
        response.data.result.map((dong) => ({ value: dong, label: dong }))
      );
    } catch (error) {
      console.error("동 목록 불러오기 실패:", error);
    }
  };

  // '동' 선택 핸들러
  const handleDongChange = (value) => {
    setDong(value);
  };

  // 근무 지역 추가
  const addLocate = () => {
    if (locateCount >= 5) {
      alert("최대 5개까지 추가할 수 있습니다.");
      return;
    }

    if (!city || !gu || !dong) {
      alert("모든 항목을 선택해주세요.");
      return;
    }

    const newLocation = { city, gu, dong };
    setLocateList((prev) => [...prev, newLocation]);
  };

  // 근무 지역 삭제
  const removeLocate = (index) => {
    setLocateList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <items.Container>
      <PageHeader title="근무 조건 설정" />

      <items.InputWrapper>
        <items.InputContainer>
          <items.Label>근무 가능 지역</items.Label>
          <items.LocateCount>{locateCount}/5개</items.LocateCount>
          <items.LocateList>
            {locateList.map((locate, index) => (
              <items.LocateItem key={index}>
                <items.LocateItemText>{`${locate.city} ${locate.gu} ${locate.dong}`}</items.LocateItemText>
                <items.DeleteIcon
                  src="/img/delete-locate.svg"
                  alt="삭제"
                  onClick={() => removeLocate(index)}
                />
              </items.LocateItem>
            ))}
          </items.LocateList>
          <items.DropdownContainer>
            <Dropdown
              options={cityOptions}
              value={city}
              placeholder={"OO시"}
              onChange={(e) => handleCityChange(e.target.value)}
              width="115px"
            />
            <Dropdown
              options={guOptions}
              value={gu}
              placeholder={"OO구"}
              onChange={(e) => handleGuChange(e.target.value)}
              width="115px"
              disabled={!city} // '시' 선택 전 비활성화
            />
            <Dropdown
              options={dongOptions}
              value={dong}
              placeholder={"OO동"}
              onChange={(e) => handleDongChange(e.target.value)}
              width="115px"
              disabled={!gu} // '구' 선택 전 비활성화
            />
          </items.DropdownContainer>
          <items.AddButton onClick={addLocate}>
            <img src="/img/add.svg" alt="추가" width="21" height="21" />{" "}
            추가하기
          </items.AddButton>
        </items.InputContainer>

        {timeSchedules.map((schedule, index) => (
          <items.TimeContainer key={schedule.id}>
            <items.Label>
              근무 가능 시간 {index > 0 ? `${index + 1}` : ""}
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
        {/* <items.AddButton onClick={addSchedule}>
          <img src="/img/add.svg" alt="추가" width="21" height="21" /> 일정 추가
        </items.AddButton> */}

        <items.InputContainer>
          <items.Label>희망 급여</items.Label>
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
          <items.ExtraInstructionContainer>
            {/* <items.ExtraInstruction>월급 : 0원</items.ExtraInstruction> */}
            <items.ExtraInstruction>
              최저 임금 : 10,030원
            </items.ExtraInstruction>
          </items.ExtraInstructionContainer>
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
              근무조건 설정이 완료되었어요!
              <br />
              매칭을 시작할까요?
            </items.ModalText>
            <Button
              text="확인"
              primary
              onClick={handleSaveJobSearch}
              width="275px"
            />
          </items.ModalContainer>
        </items.ModalOverlay>
      )}
    </items.Container>
  );
}
