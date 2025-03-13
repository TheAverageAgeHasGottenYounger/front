import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // useParams 추가
import * as items from "./Styled/MatchOverview.item.styles";
import request from "../../Api/request";

interface SeniorData {
  seniorId: number;
  name: string;
  profileUrl: string;
  careStyle: string;
  fitness: number;
  address: string;
  dayList: string[];
  startTime: string;
  endTime: string;
  salary: number;
  careList: string[];
  phoneNumber?: string;
}

interface MatchResponse {
  isSuccess: boolean;
  result: any; // 또는 result의 정확한 타입을 정의
  message?: string;
}

export default function MatchOverviewItem() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // URL에서 id 가져오기

  const [seniorData, setSeniorData] = useState<SeniorData | null>(null);
  const [isAccepted, setIsAccepted] = useState(false);
  const [region, setRegion] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  useEffect(() => {
    const fetchSeniorData = async () => {
      try {
        const response: MatchResponse = await request.get(`/matching/${id}`);
        console.log("매칭 데이터:", response);
        if (response.isSuccess) {
          setSeniorData(response.result);
          const [regionPart, detailPart] = splitAddress(
            response.result.address
          );
          setRegion(regionPart);
          setDetailAddress(detailPart);
        } else {
          console.error("데이터를 가져오는 데 실패했습니다:", response.message);
        }
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };

    fetchSeniorData();
  }, [id]);

  // 주소 분리 로직 추가
  const splitAddress = (fullAddress: string | null) => {
    if (!fullAddress) return ["", ""];

    const parts = fullAddress.split(" ");
    if (parts.length < 3) return [fullAddress, ""];

    const region = parts.slice(0, 2).join(" "); // 서울특별시 동작구
    const detail = parts.slice(2).join(" "); // 흑석로 100 101호
    return [region, detail];
  };

  const handleStatusUpdate = async (status: string | null) => {
    try {
      const response: MatchResponse = await request.patch(
        "/matching/status/update",
        {
          seniorId: id, // URL에서 가져온 id 사용
          status: status,
        }
      );

      if (response.isSuccess) {
        if (status === "ACCEPTED") {
          setIsAccepted(true);
          alert("요청을 수락하였습니다.");
        } else if (status === "REJECTED") {
          alert("요청을 거절하였습니다.");
        } else if (status === "TUNE_REQUESTED") {
          alert("조율 요청하였습니다.");
        }
      } else {
        console.error("상태 변경 실패:", response.message);
      }
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
    }
  };

  if (!seniorData) return <div>Loading...</div>; // 데이터가 없으면 로딩 표시

  return (
    <items.Container>
      <items.Prev src="/img/prev.svg" alt="이전" onClick={() => navigate(-1)} />
      <items.BigCardContainer>
        <items.BigCardProfile
          src={
            seniorData.profileUrl === ""
              ? "/img/profile-default.svg"
              : seniorData.profileUrl
          }
          alt="프로필"
        />
        <items.BigCardName>{seniorData.name} 어르신</items.BigCardName>
        <items.BigCardStyleBox>
          <items.BigCardStyleBar>
            <items.BigCardStyleIcon src="/img/fire.svg" alt="온도아이콘" />
            <items.BigCardStyleText>온기 스타일</items.BigCardStyleText>
          </items.BigCardStyleBar>
          <items.BigCardStyleContent>
            {seniorData.careStyle}
          </items.BigCardStyleContent>
        </items.BigCardStyleBox>
        <items.FitnessBox>
          <items.Fitness>매칭 적합도 {seniorData.fitness}%</items.Fitness>
          <items.FitnessText>
            돌봄스타일과 근무조건이 잘맞아요!
          </items.FitnessText>
        </items.FitnessBox>
        <items.Hr />
        <items.BigCardRequestBox>
          <items.BigCardRequestBar>
            <items.BigCardRequestIL>
              <items.BigCardRequestIcon
                src="/img/location.svg"
                alt="위치아이콘"
              />
              <items.BigCardRequestLabel>근무지역</items.BigCardRequestLabel>
            </items.BigCardRequestIL>
            <items.BigCardRequestText>{region}</items.BigCardRequestText>
          </items.BigCardRequestBar>
          <items.BigCardRequestBar>
            <items.BigCardRequestIL>
              <items.BigCardRequestIcon
                src="/img/callender.svg"
                alt="달력아이콘"
              />
              <items.BigCardRequestLabel>근무일</items.BigCardRequestLabel>
            </items.BigCardRequestIL>
            <items.BigCardRequestText>
              주 {seniorData.dayList.length}일 ({seniorData.dayList.join(", ")})
            </items.BigCardRequestText>
          </items.BigCardRequestBar>
          <items.BigCardRequestBar>
            <items.BigCardRequestIL>
              <items.BigCardRequestIcon src="/img/clock.svg" alt="시계아이콘" />
              <items.BigCardRequestLabel>가능시간</items.BigCardRequestLabel>
            </items.BigCardRequestIL>
            <items.BigCardRequestText>
              {seniorData.startTime} ~ {seniorData.endTime}
            </items.BigCardRequestText>
          </items.BigCardRequestBar>
        </items.BigCardRequestBox>
        <items.Hr />
        <items.BigCardConditionBox>
          <items.BigCardRequestBar>
            <items.BigCardRequestIL>
              <items.BigCardRequestIcon
                src="/img/salary.svg"
                alt="급여아이콘"
              />
              <items.BigCardRequestLabel>희망급여</items.BigCardRequestLabel>
            </items.BigCardRequestIL>
            <items.BigCardRequestText>
              {seniorData.salary.toLocaleString()} 원
            </items.BigCardRequestText>
          </items.BigCardRequestBar>
          <items.Blank />
          <items.BigCardRequestBar>
            <items.BigCardRequestIL>
              <items.BigCardRequestIcon src="/img/care.svg" alt="케어아이콘" />
              <items.BigCardRequestLabel>케어항목</items.BigCardRequestLabel>
            </items.BigCardRequestIL>
            <items.BigCardRequestCareList>
              {seniorData.careList.map((item, index) => (
                <items.BigCardRequestCareListItem key={index}>
                  {item}
                </items.BigCardRequestCareListItem>
              ))}
            </items.BigCardRequestCareList>
          </items.BigCardRequestBar>
        </items.BigCardConditionBox>
        <items.Hr />
        <items.BigCardInfoBox>
          <items.BigCardRequestBar>
            <items.BigCardRequestLabel>연락처</items.BigCardRequestLabel>
            <items.BigCardRequestText>
              {seniorData.phoneNumber ? seniorData.phoneNumber : "비공개"}
            </items.BigCardRequestText>
          </items.BigCardRequestBar>
          <items.Blank />
          <items.BigCardRequestBar>
            <items.BigCardRequestLabel>상세 주소</items.BigCardRequestLabel>
            <items.BigCardRequestText>
              {detailAddress || "비공개"}
            </items.BigCardRequestText>
          </items.BigCardRequestBar>
          {/* 자물쇠 */}
          <items.LockBox style={{ display: isAccepted ? "none" : "flex" }}>
            <items.LockIcon src="/img/lock.svg" alt="자물쇠" />
            <items.LockText>요청 수락 후 확인 가능해요!</items.LockText>
          </items.LockBox>
        </items.BigCardInfoBox>
      </items.BigCardContainer>
      <items.ButtonContainer>
        <items.ButtoninnerContainer>
          <items.Button
            bgColor="#3DC558"
            onClick={() => handleStatusUpdate("ACCEPTED")}
          >
            수락
          </items.Button>
          <items.Button
            bgColor="#C1C1C1"
            onClick={() => handleStatusUpdate("REJECTED")}
          >
            거절
          </items.Button>
          <items.Button
            bgColor="#FF8D3C"
            onClick={() => handleStatusUpdate("TUNE_REQUESTED")}
          >
            조율요청
          </items.Button>
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
