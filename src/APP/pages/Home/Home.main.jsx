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
  NavigationBar
} from "../../components/Components";
import { dummyItems } from "./dummy";

export default function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState("박유선");
  const [certification, setCertification] = useState("요양보호사 1급");

  const [total, setTotal] = useState(10); // 전체 매칭
  const [request, setRequest] = useState(3); // 신규 매칭

  return (
    <items.Container>
      <items.OrangeContainer>
        <items.NotificationBox>
          <img src="/img/logo.png" width="59px" alt="로고"/>
          <img src="/img/notification.svg" alt="알림"/>
        </items.NotificationBox>
        <items.ProfileBox>
          <items.WhiteHead>{name} 요양보호사</items.WhiteHead>
          <items.WhiteLabel>{certification}</items.WhiteLabel>
          <items.WhiteLabel>
            내 정보 수정하기
            <img src="/img/right_arrow_white.svg" alt="더보기" style={{
              width: "22px",
              height: "22px",
            }}/>
          </items.WhiteLabel>
        </items.ProfileBox>
      </items.OrangeContainer>

      <items.MatchOverviewContainer>

        <items.MatchOverviewBox style={{
          width: "361px",
          height: "179px",
          marginTop: "-48px",
        }}>
          <items.Head3>나의 일정</items.Head3>
          <items.MatchOverviewItem>
            <items.Label>전체 매칭</items.Label>
            <items.Value label="전체 매칭">{total}건</items.Value>
          </items.MatchOverviewItem>

          <items.Divider /> 
        </items.MatchOverviewBox>

        <items.SettingAndGuideBox>
          <items.MatchOverviewBox style={{
            width: "175px",
            height: "230px",
          }}>

          </items.MatchOverviewBox>
          
          <items.MatchOverviewBox style={{
            width: "175px",
            height: "230px",
          }}>

          </items.MatchOverviewBox>
        </items.SettingAndGuideBox>


      </items.MatchOverviewContainer>

      <NavigationBar dashboard={true} />

    </items.Container>
  );
}
