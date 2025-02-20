import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as items from "./Styled/MatchOverviewAdmin.item.styles";
import request from "../../Api/request";

export default function MatchOverviewItemAdmin() {
  const navigate = useNavigate();
  const location = useLocation();

  // URL에서 id 가져오기
  const pathSegments = location.pathname.split("/");
  const workerId = pathSegments[pathSegments.length - 1]; // WORKER001

  // `state`에서 seniorId 가져오기
  const seniorId = location.state?.seniorId || 1; // 기본값 1 설정

  const [jobSearchData, setJobSearchData] = useState(null);
  const [isAccepted, setIsAccepted] = useState(false); // 수락 여부 상태

  useEffect(() => {
    const fetchJobSearchData = async () => {
      try {
        const response = await request.get(
          `/job-search/${workerId}/${seniorId}`
        );
        if (response.isSuccess) {
          setJobSearchData(response.result);
        } else {
          console.error("데이터를 가져오는 데 실패했습니다:", response.message);
        }
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };

    fetchJobSearchData();
  }, [workerId, seniorId]);

  const handleMatchRequest = async () => {
    try {
      const response = await request.post(
        `/matching/request/${workerId}/${seniorId}`
      );

      if (response.isSuccess) {
        setIsAccepted(true);
        alert("매칭 요청이 완료되었습니다.");
      } else {
        console.error("매칭 요청 실패:", response.message);
      }
    } catch (error) {
      console.error("매칭 요청 중 오류 발생:", error);
    }
  };

  return (
    <items.Container>
      <items.Prev src="/img/prev.svg" alt="이전" onClick={() => navigate(-1)} />
      <items.BigCardContainer>
        {jobSearchData ? (
          <>
            <items.BigCardProfile src="/img/profile-default.svg" alt="프로필" />
            <items.BigCardName>
              {jobSearchData.name} 요양보호사
            </items.BigCardName>

            <items.BigCardStyleBox>
              <items.BigCardStyleBar>
                <items.BigCardStyleIcon src="/img/fire.svg" alt="온도아이콘" />
                <items.BigCardStyleText>온기 스타일</items.BigCardStyleText>
              </items.BigCardStyleBar>
              <items.BigCardStyleContent>
                {jobSearchData.careStyle}
              </items.BigCardStyleContent>
            </items.BigCardStyleBox>
            <items.FitnessBox>
              <items.Fitness>
                매칭 적합도 {jobSearchData.fitness}%
              </items.Fitness>
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
                  <items.BigCardRequestLabel>
                    근무지역
                  </items.BigCardRequestLabel>
                </items.BigCardRequestIL>
                <items.BigCardRequestText>
                  {jobSearchData.jobSearchAreas
                    .map(
                      (area) =>
                        `${area.address.city} ${area.address.district} ${area.address.dong}`
                    )
                    .join(", ")}
                </items.BigCardRequestText>
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
                  주 {jobSearchData.dayList.length}일 (
                  {jobSearchData.dayList.join(", ")})
                </items.BigCardRequestText>
              </items.BigCardRequestBar>
              <items.BigCardRequestBar>
                <items.BigCardRequestIL>
                  <items.BigCardRequestIcon
                    src="/img/clock.svg"
                    alt="시계아이콘"
                  />
                  <items.BigCardRequestLabel>
                    가능시간
                  </items.BigCardRequestLabel>
                </items.BigCardRequestIL>
                <items.BigCardRequestText>
                  {jobSearchData.startTime}~{jobSearchData.endTime}
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
                  <items.BigCardRequestLabel>
                    희망급여
                  </items.BigCardRequestLabel>
                </items.BigCardRequestIL>
                <items.BigCardRequestText>
                  {jobSearchData.salary}원
                </items.BigCardRequestText>
              </items.BigCardRequestBar>
              <items.Blank />
              <items.BigCardRequestBar>
                <items.BigCardRequestIL>
                  <items.BigCardRequestIcon
                    src="/img/care.svg"
                    alt="케어아이콘"
                  />
                  <items.BigCardRequestLabel>
                    보유 자격증
                  </items.BigCardRequestLabel>
                </items.BigCardRequestIL>
                <items.BigCardRequestCareList>
                  {jobSearchData.certificateList.map((cert, index) => (
                    <items.BigCardRequestCareListItem key={index}>
                      {cert.type} {cert.grade ? `(${cert.grade})` : ""}
                    </items.BigCardRequestCareListItem>
                  ))}
                </items.BigCardRequestCareList>
              </items.BigCardRequestBar>
            </items.BigCardConditionBox>

            <items.Hr />
            <items.BigCardInfoBox>
              <items.BigCardRequestBar>
                <items.BigCardRequestLabel>경력 기간</items.BigCardRequestLabel>
                <items.BigCardRequestText>
                  {isAccepted ? jobSearchData.careerPeriod : "비공개"}
                </items.BigCardRequestText>
              </items.BigCardRequestBar>
              <items.Blank />
              <items.BigCardRequestBar>
                <items.BigCardRequestLabel>주요 경력</items.BigCardRequestLabel>
                <items.BigCardRequestText>
                  {isAccepted ? jobSearchData.career : "비공개"}
                </items.BigCardRequestText>
              </items.BigCardRequestBar>
              <items.Blank />
              <items.BigCardRequestBar>
                <items.BigCardRequestLabel>한줄 소개</items.BigCardRequestLabel>
                <items.BigCardRequestText>
                  {isAccepted ? jobSearchData.introduction : "비공개"}
                </items.BigCardRequestText>
              </items.BigCardRequestBar>

              {/* 자물쇠 */}
              {!isAccepted && (
                <items.LockBox>
                  <items.LockIcon src="/img/lock.svg" alt="자물쇠" />
                  <items.LockText>매칭 요청 후 확인 가능해요!</items.LockText>
                </items.LockBox>
              )}
            </items.BigCardInfoBox>

            <items.ButtonContainer>
              <items.ButtoninnerContainer>
                <items.Button onClick={handleMatchRequest}>
                  매칭 요청하기
                </items.Button>
              </items.ButtoninnerContainer>
            </items.ButtonContainer>
          </>
        ) : (
          <p>데이터를 불러오는 중...</p>
        )}
      </items.BigCardContainer>
    </items.Container>
  );
}
