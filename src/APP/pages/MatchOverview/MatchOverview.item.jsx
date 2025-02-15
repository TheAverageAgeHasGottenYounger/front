import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/MatchOverview.item.styles";
import {
  Button,
  Label,
  Input,
  Dropdown,
  Card,
} from "../../../APP/components/Components";
import { dummyItems } from "./dummy";

export default function MatchOverviewItem() {
  const navigate = useNavigate();

  const [total, setTotal] = useState(10); // 전체 매칭
  const [request, setRequest] = useState(3); // 조율 요청
  const [accept, setAccept] = useState(4); // 수락
  const [reject, setReject] = useState(3); // 거절

  const [selectedValue, setSelectedValue] = useState(3); // 거절

  return (
    <items.Container>
      <items.Prev src="/img/prev.svg" alt="이전" />
      <items.test></items.test>
    </items.Container>
  );
}

export const BigCard = ({ contents, width = "100%" }) => {
  return (
    <items.BigCardContainer>
      <items.BigCardProfile src={contents.profileUrl} alt="프로필" />
      <items.BigCardName>{contents.name} 어르신</items.BigCardName>
      <items.BigCardStyleBox>
        <items.BigCardStyleBar>
          <items.BigCardStyleIcon src={contents.IconUrl} />
          <items.BigCardStyleText>온기 스타일</items.BigCardStyleText>
        </items.BigCardStyleBar>
        <items.BigCardStyleContent>친근한 !!!</items.BigCardStyleContent>
      </items.BigCardStyleBox>
      <hr />
      <items.BigCardRequestBox>
        <items.BigCardRequestBar>
          <items.BigCardRequestIcon src="/img/location.svg" alt="위치아이콘" />
          <items.BigCardRequestText>
            {contents.address}
          </items.BigCardRequestText>
        </items.BigCardRequestBar>
        <items.BigCardRequestBar>
          <items.BigCardRequestIcon src="/img/callender.svg" alt="달력아이콘" />
          <items.BigCardRequestText>{contents.date}</items.BigCardRequestText>
        </items.BigCardRequestBar>
        <items.BigCardRequestBar>
          <items.BigCardRequestIcon src="/img/clock.svg" alt="시계아이콘" />
          <items.BigCardRequestText>{contents.time}</items.BigCardRequestText>
        </items.BigCardRequestBar>
      </items.BigCardRequestBox>
      <hr />
      <items.BigCardConditionBox>
        <items.BigCardRequestBar>
          <items.BigCardRequestIcon src="/img/salary.svg" alt="급여아이콘" />
          <items.BigCardRequestText>{contents.salary}</items.BigCardRequestText>
        </items.BigCardRequestBar>
        <items.BigCardRequestBar>
          <items.BigCardRequestIcon src="/img/care.svg" alt="케어아이콘" />
          <items.BigCardRequestCareList>
            {contents.careList.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </items.BigCardRequestCareList>
        </items.BigCardRequestBar>
      </items.BigCardConditionBox>
      <hr />
      <items.BigCardInfoBox></items.BigCardInfoBox>
    </items.BigCardContainer>
  );
};
