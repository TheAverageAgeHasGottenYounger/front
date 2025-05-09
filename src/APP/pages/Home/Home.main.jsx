import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/Home.main.styles";
import {
  Button,
  Label,
  Input,
  Dropdown,
  Card,
  DashBoardCard,
  NavigationBar,
} from "../../components/Components";
import { dummyItems2, dummyItems3 } from "./dummy";
import request from "../../Api/request";

export default function Home() {
  const navigate = useNavigate();

  const [certification, setCertification] = useState("요양보호사 1급");

  const [total, setTotal] = useState(10); // 전체 매칭
  // const [request, setRequest] = useState(3); // 신규 매칭
  const [today, setToday] = useState(2); // 전체 매칭

  const [name, setName] = useState(""); // 요양보호사 이름 상태 추가

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await request.get("/member/current");

        if (response.isSuccess) {
          const memberId = response.result.memberId;
          const centerResponse = await request.get(`/member/${memberId}`);
          if (centerResponse.isSuccess) {
            setName(centerResponse.result.name);
          } else {
            console.error("회원 정보 가져오기 실패:", centerResponse.message);
          }
        } else {
          console.error("회원 정보 가져오기 실패:", response.message);
        }
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };

    fetchMemberData();
  }, [name]);

  return (
    <items.Container>
      <items.OrangeContainer>
        <items.NotificationBox>
          <img src="/img/logo.png" width="59px" alt="로고" />
          <img src="/img/notification.svg" alt="알림" />
        </items.NotificationBox>
        <items.ProfileBox>
          <items.WhiteHead>{name} 요양보호사</items.WhiteHead>
          <items.WhiteLabel>{certification}</items.WhiteLabel>
          <items.WhiteLabel>
            내 정보 수정하기
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
        <items.MatchOverviewBox
          style={{
            width: "361px",
            height: "auto",
            marginTop: "-48px",
          }}
        >
          <items.MyCalendarHeader>
            <items.Head3>
              <img src="/img/callender_orange.svg" width="30px" alt="일정" />
              나의 일정
            </items.Head3>
            <img src="/img/right_arrow.svg" width="30px" alt="더보기" />
          </items.MyCalendarHeader>
          <items.MyCalendarContents>
            <items.Label color="primary0">
              오늘 {today}/{total}
            </items.Label>
          </items.MyCalendarContents>

          <items.Divider />
          <items.MatchOverviewItem>
            {dummyItems3.map((item, index) => (
              <items.ScheduleAndSenior key={index}>
                <items.Label color="gray500">{item.time}</items.Label>
                <items.Label color="gray900">
                  {item.name} 어르신 방문
                </items.Label>
              </items.ScheduleAndSenior>
            ))}
          </items.MatchOverviewItem>
        </items.MatchOverviewBox>

        <items.SettingAndGuideBox>
          <items.MatchOverviewBox
            onClick={() => navigate("/jobrequirement")}
            style={{
              width: "175px",
              height: "170px",
            }}
          >
            <items.BottomCardHeader>
              <items.Head3>
                근무 조건
                <br />
                설정하기
              </items.Head3>
              <items.BottomSubLabel color="gray500">
                원하는 지역 및 시급 설정
              </items.BottomSubLabel>
              <items.BottomCardImgBox>
                <img src="/img/home_card1.svg" width="46px" />
              </items.BottomCardImgBox>
            </items.BottomCardHeader>
          </items.MatchOverviewBox>

          <items.MatchOverviewBox
            style={{
              width: "175px",
              height: "170px",
            }}
          >
            <items.BottomCardHeader>
              <items.Head3>
                요양 필수
                <br />
                가이드
              </items.Head3>
              <items.BottomSubLabel color="gray500">
                요양보호사에게
                <br />
                필요한 정보
              </items.BottomSubLabel>
              <items.BottomCardImgBox>
                <img src="/img/home_card2.svg" width="46px" />
              </items.BottomCardImgBox>
            </items.BottomCardHeader>
          </items.MatchOverviewBox>
        </items.SettingAndGuideBox>
      </items.MatchOverviewContainer>

      <NavigationBar dashboard={false} />
    </items.Container>
  );
}
