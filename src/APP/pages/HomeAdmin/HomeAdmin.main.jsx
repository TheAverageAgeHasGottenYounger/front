import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/HomeAdmin.main.styles";
import {
  Button,
  Label,
  Input,
  Dropdown,
  Card,
  DashBoardCard,
  NavigationBar
} from "../../components/Components";
import { dummyItems2, dummyItems3 } from "./dummy";

export default function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [certification, setCertification] = useState("요양보호사 1급");

  const [total, setTotal] = useState(10); // 전체 매칭
  const [request, setRequest] = useState(3); // 신규 매칭
  const [today, setToday] = useState(2); // 전체 매칭


  return (
    <items.Container>
      <items.OrangeContainer>
        <items.NotificationBox>
          <img src="/img/logo.png" width="59px" alt="로고"/>
          <img src="/img/notification.svg" alt="알림"/>
        </items.NotificationBox>
        <items.ProfileBox>
          <items.WhiteHead>{dummyItems2.name}</items.WhiteHead>
          <items.WhiteLabel>등록된 어르신 : {total}명</items.WhiteLabel>
          <items.WhiteLabel>
            센터 정보 수정하기
            <img src="/img/right_arrow_white.svg" alt="더보기" style={{
              width: "22px",
              height: "22px",
            }}/>
          </items.WhiteLabel>
        </items.ProfileBox>
      </items.OrangeContainer>

      <items.MatchOverviewContainer>

        <items.SettingAndGuideBox style={{
          marginTop: "-48px",
          }}>
          
          <items.MatchOverviewBox style={{
            width: "175px",
            height: "170px",
          }}>
            <items.BottomCardHeader>
              <items.Head3>
                어르신 정보
                <br/>
                등록하기
              </items.Head3>
              <items.BottomSubLabel color="gray500">기본정보 및 스타일 설정</items.BottomSubLabel>
              <items.BottomCardImgBox>
                <img src="/img/home_admin_card1.svg" width="45.61px"/>
              </items.BottomCardImgBox>
            </items.BottomCardHeader>
          </items.MatchOverviewBox>
          
          <items.MatchOverviewBox style={{
            width: "175px",
            height: "170px",
          }}>
            <items.BottomCardHeader>
              <items.Head3>
                구인 공고
                <br/>
                등록하기
              </items.Head3>
              <items.BottomSubLabel color="gray500">
                원하는 조건 설정
              </items.BottomSubLabel>
              <items.BottomCardImgBox>
                <img src="/img/home_admin_card2.svg" width="70.67px"/>
              </items.BottomCardImgBox>
            </items.BottomCardHeader>
          </items.MatchOverviewBox>

        </items.SettingAndGuideBox>


        <items.MatchOverviewBox style={{
          width: "361px",
          height: "auto",
        }}>
          <items.MyCalendarHeader>
            <items.Head3>
            최근 매칭 정보
            </items.Head3>
          </items.MyCalendarHeader>
          <items.MatchOverviewItem>
            
            {/* 조율요청 그룹 */}
            {dummyItems3.some(item => item.progress === "조율요청") && (
              <items.ScheduleAndSenior>
                <items.Tag label="조율요청">조율요청</items.Tag>
                <items.Label color="gray500">
                  {dummyItems3
                    .filter(item => item.progress === "조율요청")
                    .map(item => `${item.name} 어르신`)
                    .join(", ")}
                </items.Label>
              </items.ScheduleAndSenior>
            )}

            {/* 수락 그룹 */}
            {dummyItems3.some(item => item.progress === "수락") && (
              <items.ScheduleAndSenior>
                <items.Tag label="수락">수락</items.Tag>
                <items.Label color="gray500">
                  {dummyItems3
                    .filter(item => item.progress === "수락")
                    .map(item => `${item.name} 어르신`)
                    .join(", ")}
                </items.Label>
              </items.ScheduleAndSenior>
            )}

            {/* 거절 그룹 */}
            {dummyItems3.some(item => item.progress === "거절") && (
              <items.ScheduleAndSenior>
                <items.Tag label="거절">거절</items.Tag>
                <items.Label color="gray500">
                  {dummyItems3
                    .filter(item => item.progress === "거절")
                    .map(item => `${item.name} 어르신`)
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
