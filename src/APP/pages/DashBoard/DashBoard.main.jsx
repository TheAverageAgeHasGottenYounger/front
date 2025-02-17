import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/DashBoard.main.styles";
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

export default function DashBoard() {
  const navigate = useNavigate();

  const [total, setTotal] = useState(10); // 전체 매칭
  const [request, setRequest] = useState(3); // 신규 매칭

  return (
    <items.Container>
      <items.MatchOverviewContainer>
        <items.Head>대시보드</items.Head>

        <items.HeaderContainer>
          <items.Head3>전체 매칭 현황 통계</items.Head3>
        </items.HeaderContainer>

        <items.MatchOverviewBox>
          <items.MatchOverviewItem>
            <items.Label>전체 매칭</items.Label>
            <items.Value label="전체 매칭">{total}건</items.Value>
          </items.MatchOverviewItem>

          <items.Divider /> 

          <items.MatchOverviewItem>
            <items.Label>신규 매칭 </items.Label>
            <items.Value label="신규 매칭">{request}건</items.Value>
          </items.MatchOverviewItem>
        </items.MatchOverviewBox>
      </items.MatchOverviewContainer>

      <items.MatchRequestListContainer>
        <items.HeaderContainer>
          <items.Head3>진행 중인 매칭</items.Head3>
          <img src="/img/right_arrow.svg" alt="더보기"/>
        </items.HeaderContainer>
        <items.MatchRequestList>
          {dummyItems.map((item, index) => (
            <DashBoardCard key={index} contents={item} width="339px"/>
          ))}
        </items.MatchRequestList>
      </items.MatchRequestListContainer>

      <NavigationBar dashboard={true} />

    </items.Container>
  );
}
