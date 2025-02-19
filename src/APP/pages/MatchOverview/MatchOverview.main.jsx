import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/MatchOverview.main.styles";
import { Card, NavigationBar } from "../../../APP/components/Components";
import { dummyItems } from "./dummy";
import request from "../../Api/request";

export default function MatchOverview() {
  const navigate = useNavigate();

  const [matchRequests, setMatchRequests] = useState([]);

  // const [total, setTotal] = useState(10); // 전체 매칭
  // const [request, setRequest] = useState(3); // 조율 요청
  // const [accept, setAccept] = useState(4); // 수락
  // const [reject, setReject] = useState(3); // 거절

  // const [selectedValue, setSelectedValue] = useState(3); // 거절

  useEffect(() => {
    const fetchMatchRequests = async () => {
      try {
        const response = await request.get("/matching/request/senior/list");
        console.log(response);
        if (response.isSuccess) {
          setMatchRequests(response.result);
        } else {
          console.error(
            "데이터를 가져오는 데 실패했습니다:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("매칭 요청 목록을 가져오는 중 오류 발생:", error);
      }
    };
    fetchMatchRequests();
  }, []);

  const onHandle = (id) => {
    navigate(`/matchoverview/${id}`);
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
          {matchRequests.map((item, index) => (
            <Card
              key={index}
              contents={item}
              onClick={() => onHandle(item.seniorId)}
            />
          ))}
        </items.MatchRequestList>
      </items.MatchRequestListContainer>
      <NavigationBar dashboard={false} />
    </items.Container>
  );
}
