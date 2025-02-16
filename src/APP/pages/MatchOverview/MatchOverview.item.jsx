import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/MatchOverview.item.styles";
import {
  Button,
  Label,
  Input,
  Dropdown,
  Card,
  BigCard
} from "../../../APP/components/Components";
import { dummyItems, dummyItems2 } from "./dummy";

export default function MatchOverviewItem() {
  const navigate = useNavigate();

  const [total, setTotal] = useState(10); // 전체 매칭
  const [request, setRequest] = useState(3); // 조율 요청
  const [accept, setAccept] = useState(4); // 수락
  const [reject, setReject] = useState(3); // 거절

  const [selectedValue, setSelectedValue] = useState(3); // 거절

  const [isAccepted, setIsAccepted] = useState(false);  // 수락 여부 상태


  return (
    <items.Container>
      <items.Prev src="/img/prev.svg" alt="이전" />
      <items.BigCardContainer>
        <items.BigCardProfile src={dummyItems2.profileUrl} alt="프로필" />
        <items.BigCardName>{dummyItems2.name} 어르신</items.BigCardName>
        <items.BigCardStyleBox>
          <items.BigCardStyleBar>
            <items.BigCardStyleIcon src="/img/temp.svg" alt="온도아이콘" />
            <items.BigCardStyleText>온기 스타일</items.BigCardStyleText>
          </items.BigCardStyleBar>
          <items.BigCardStyleContent>{dummyItems2.content}</items.BigCardStyleContent>
        </items.BigCardStyleBox>
        <items.Hr />
        <items.BigCardRequestBox>
          <items.BigCardRequestBar>
            <items.BigCardRequestIL>
              <items.BigCardRequestIcon src="/img/location.svg" alt="위치아이콘" />
              <items.BigCardRequestLabel>근무지역</items.BigCardRequestLabel>
            </items.BigCardRequestIL>
            <items.BigCardRequestText>{dummyItems2.address}</items.BigCardRequestText>
          </items.BigCardRequestBar>
          <items.BigCardRequestBar>
            <items.BigCardRequestIL>
              <items.BigCardRequestIcon src="/img/callender.svg" alt="달력아이콘" />
              <items.BigCardRequestLabel>근무일</items.BigCardRequestLabel>
            </items.BigCardRequestIL>
            <items.BigCardRequestText>{dummyItems2.date}</items.BigCardRequestText>
          </items.BigCardRequestBar>
          <items.BigCardRequestBar>
            <items.BigCardRequestIL>
              <items.BigCardRequestIcon src="/img/clock.svg" alt="시계아이콘" />
              <items.BigCardRequestLabel>가능시간</items.BigCardRequestLabel>
            </items.BigCardRequestIL>
            <items.BigCardRequestText>{dummyItems2.time}</items.BigCardRequestText>
          </items.BigCardRequestBar>
        </items.BigCardRequestBox>
        <items.Hr />
        <items.BigCardConditionBox>
          <items.BigCardRequestBar>
            <items.BigCardRequestIL>
              <items.BigCardRequestIcon src="/img/salary.svg" alt="급여아이콘" />
              <items.BigCardRequestLabel>희망급여</items.BigCardRequestLabel>
            </items.BigCardRequestIL>
            <items.BigCardRequestText>{dummyItems2.salary}</items.BigCardRequestText>
          </items.BigCardRequestBar>
          <items.Blank />
          <items.BigCardRequestBar>
            <items.BigCardRequestIL>
              <items.BigCardRequestIcon src="/img/care.svg" alt="케어아이콘" />
              <items.BigCardRequestLabel>케어항목</items.BigCardRequestLabel>
            </items.BigCardRequestIL>
            <items.BigCardRequestCareList>
              {dummyItems2.careList.map((item, index) => (
                <items.BigCardRequestCareListItem key={index}>{item}</items.BigCardRequestCareListItem>
              ))}
            </items.BigCardRequestCareList>
          </items.BigCardRequestBar>
        </items.BigCardConditionBox>
        <items.Hr />
        <items.BigCardInfoBox>
          <items.BigCardRequestBar>
            <items.BigCardRequestLabel>연락처</items.BigCardRequestLabel>
            <items.BigCardRequestText>{dummyItems2.phoneNumber}</items.BigCardRequestText>
          </items.BigCardRequestBar>
          <items.Blank />
          <items.BigCardRequestBar>
            <items.BigCardRequestLabel>상세 주소</items.BigCardRequestLabel>
            <items.BigCardRequestText>{dummyItems2.addressDetail}</items.BigCardRequestText>
          </items.BigCardRequestBar>
          {/* 자물쇠 */}
          <items.LockBox style={{ display: isAccepted ? "none" : "flex" }}>
            <items.LockIcon src="/img/lock.svg" alt="자물쇠"/>
            <items.LockText>매칭 요청 후 확인 가능해요!</items.LockText>
          </items.LockBox>
        </items.BigCardInfoBox>
      </items.BigCardContainer>
      <items.ButtonContainer>
          <items.ButtoninnerContainer>
            <items.Button bgColor="#3DC558" onClick={() => setIsAccepted(true)}>수락</items.Button>  
            <items.Button bgColor="#C1C1C1">거절</items.Button>
            <items.Button bgColor="#FF8D3C">조율요청</items.Button>
          </items.ButtoninnerContainer>
        </items.ButtonContainer>
    </items.Container>
  );
}