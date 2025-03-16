import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/HomeAdmin.main.styles";
import { NavigationBar } from "../../components/Components";
import { dummyItems3 } from "./dummy";
import request from "../../Api/request";

interface MemberResponse {
  isSuccess: boolean;
  result: {
    memberId: number;
  };
  message?: string;
}

interface CurrentMemberResponse {
  isSuccess: boolean;
  result: {
    center: {
      name: string;
    };
  };
  message?: string;
}

export default function Home() {
  const navigate = useNavigate();

  const [centerName, setCenterName] = useState(""); // 센터 이름 상태 추가
  const [total, setTotal] = useState(10);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response: MemberResponse = await request.get("/member/current");

        if (response.isSuccess) {
          const memberId = response.result.memberId;
          const centerResponse: CurrentMemberResponse = await request.get(
            `/member/${memberId}`
          );

          if (centerResponse.isSuccess) {
            setCenterName(centerResponse.result.center.name);
          } else {
            console.error("센터 정보 가져오기 실패:", centerResponse.message);
          }
        } else {
          console.error("회원 정보 가져오기 실패:", response.message);
        }
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };

    fetchMemberData();
  }, [centerName]);

  return (
    <items.Container>
      <items.OrangeContainer>
        <items.NotificationBox>
          <img src="/img/logo.png" width="59px" alt="로고" />
          <img src="/img/notification.svg" alt="알림" />
        </items.NotificationBox>
        <items.ProfileBox>
          <items.WhiteHead>{centerName || "센터"}</items.WhiteHead>
          <items.WhiteLabel>등록된 어르신 : {total}명</items.WhiteLabel>
          <items.WhiteLabel>
            센터 정보 수정하기
            <img
              src="/img/right_arrow_white.svg"
              alt="더보기"
              style={{
                width: "22px",
                height: "22px",
              }}
            />
          </items.WhiteLabel>
        </items.ProfileBox>
      </items.OrangeContainer>

      <items.MatchOverviewContainer>
        <items.SettingAndGuideBox
          style={{
            marginTop: "-48px",
          }}
        >
          <items.MatchOverviewBox
            style={{
              width: "175px",
              height: "170px",
            }}
          >
            <items.BottomCardHeader
              onClick={() => navigate("/jobpost/seniorRegistration")}
            >
              <items.Head3>
                어르신 정보
                <br />
                등록하기
              </items.Head3>
              <items.BottomSubLabel color="gray500">
                기본정보 및 스타일 설정
              </items.BottomSubLabel>
              <items.BottomCardImgBox>
                <img src="/img/home_admin_card1.svg" width="45.61px" />
              </items.BottomCardImgBox>
            </items.BottomCardHeader>
          </items.MatchOverviewBox>

          <items.MatchOverviewBox
            style={{
              width: "175px",
              height: "170px",
            }}
          >
            <items.BottomCardHeader
              onClick={() => navigate("/jobpost/seniorCheck")}
            >
              <items.Head3>
                구인 공고
                <br />
                등록하기
              </items.Head3>
              <items.BottomSubLabel color="gray500">
                원하는 조건 설정
              </items.BottomSubLabel>
              <items.BottomCardImgBox>
                <img src="/img/home_admin_card2.svg" width="70.67px" />
              </items.BottomCardImgBox>
            </items.BottomCardHeader>
          </items.MatchOverviewBox>
        </items.SettingAndGuideBox>

        <items.MatchOverviewBox
          style={{
            width: "361px",
            height: "auto",
          }}
        >
          <items.MyCalendarHeader>
            <items.Head3>최근 매칭 정보</items.Head3>
          </items.MyCalendarHeader>
          <items.MatchOverviewItem>
            {/* 조율요청 그룹 */}
            {dummyItems3.some((item) => item.progress === "조율요청") && (
              <items.ScheduleAndSenior>
                <items.Tag label="조율요청">조율요청</items.Tag>
                <items.Label color="gray500">
                  {dummyItems3
                    .filter((item) => item.progress === "조율요청")
                    .map((item) => `${item.name} 어르신`)
                    .join(", ")}
                </items.Label>
              </items.ScheduleAndSenior>
            )}

            {/* 수락 그룹 */}
            {dummyItems3.some((item) => item.progress === "수락") && (
              <items.ScheduleAndSenior>
                <items.Tag label="수락">수락</items.Tag>
                <items.Label color="gray500">
                  {dummyItems3
                    .filter((item) => item.progress === "수락")
                    .map((item) => `${item.name} 어르신`)
                    .join(", ")}
                </items.Label>
              </items.ScheduleAndSenior>
            )}

            {/* 거절 그룹 */}
            {dummyItems3.some((item) => item.progress === "거절") && (
              <items.ScheduleAndSenior>
                <items.Tag label="거절">거절</items.Tag>
                <items.Label color="gray500">
                  {dummyItems3
                    .filter((item) => item.progress === "거절")
                    .map((item) => `${item.name} 어르신`)
                    .join(", ")}
                </items.Label>
              </items.ScheduleAndSenior>
            )}
          </items.MatchOverviewItem>
        </items.MatchOverviewBox>
      </items.MatchOverviewContainer>

      <NavigationBar dashboard={true} />
    </items.Container>
  );
}
