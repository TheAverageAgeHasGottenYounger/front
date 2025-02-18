import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/MatchOverview.main.styles";
import { Card, NavigationBar } from "../../../APP/components/Components";
import { dummyItems } from "./dummy";

export default function MatchOverview() {
  const navigate = useNavigate();

  const [total, setTotal] = useState(10); // 전체 매칭
  const [request, setRequest] = useState(3); // 조율 요청
  const [accept, setAccept] = useState(4); // 수락
  const [reject, setReject] = useState(3); // 거절

  const [selectedValue, setSelectedValue] = useState(3); // 거절

  const onHandle = () => {
    navigate("/matchoverview/item");
  };

  return (
    <items.Container>
      {/* <items.MatchOverviewContainer> */}
      <items.Head>매칭 관리</items.Head>
      {/* <items.MatchOverviewBox>
          <items.MatchOverviewItem>
            <items.Label>전체 매칭</items.Label>
            <items.Value label="전체 매칭">{total}건</items.Value>
          </items.MatchOverviewItem>

          <items.MatchOverviewItem>
            <items.Label>조율 요청</items.Label>
            <items.Value label="조율 요청">{request}건</items.Value>
          </items.MatchOverviewItem>

          <items.MatchOverviewItem>
            <items.Label>수락</items.Label>
            <items.Value label="수락">{accept}건</items.Value>
          </items.MatchOverviewItem>

          <items.MatchOverviewItem>
            <items.Label>거절</items.Label>
            <items.Value label="거절">{reject}건</items.Value>
          </items.MatchOverviewItem>
        </items.MatchOverviewBox> */}
      {/* </items.MatchOverviewContainer> */}

      <items.MatchRequestListContainer>
        <items.HeaderContainer>
          <items.Head3>매칭 요청 목록</items.Head3>
        </items.HeaderContainer>
        <items.MatchRequestList>
          {dummyItems.map((item, index) => (
            <Card key={index} contents={item} onClick={onHandle} />
          ))}
        </items.MatchRequestList>
      </items.MatchRequestListContainer>
      <NavigationBar dashboard={false} />
    </items.Container>
  );
}
