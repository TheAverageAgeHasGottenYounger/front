import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/MatchOverview.main.styles";
import { Card, NavigationBar } from "../../components/Components";
import request from "../../Api/request";

// 매칭 요청 객체의 타입 정의
interface MatchRequestItem {
  seniorId: string; // ID가 숫자라면 number로 변경
  name: string;
  seniorName: string | null; // API 응답에 seniorName 존재
  profileUrl: string; // API 응답에 profileUrl 존재
  address: string; // 주소 필드 추가
  fitness: number;
  careStyle: string;
  startTime: string;
  endTime: string;
  salary: number;
  dayList?: string[]; // dayList가 없을 수도 있으므로 옵셔널 처리
  seniorDay?: string[]; // seniorDay도 존재할 가능성
}

interface MatchResponse {
  isSuccess: boolean;
  result: MatchRequestItem[]; // 또는 result의 정확한 타입을 정의
  message?: string;
}

export default function MatchOverview() {
  const navigate = useNavigate();

  const [matchRequests, setMatchRequests] = useState<MatchRequestItem[]>([]);

  useEffect(() => {
    const fetchMatchRequests = async () => {
      try {
        const response: MatchResponse = await request.get(
          "/matching/request/senior/list"
        );
        console.log(response);
        if (response.isSuccess) {
          setMatchRequests(response.result);
        } else {
          console.error("데이터를 가져오는 데 실패했습니다:", response.message);
        }
      } catch (error) {
        console.error("매칭 요청 목록을 가져오는 중 오류 발생:", error);
      }
    };
    fetchMatchRequests();
  }, []);

  const onHandle = (id: string) => {
    navigate(`/matchoverview/${id}`);
  };

  return (
    <items.Container>
      <items.Head>매칭 관리</items.Head>
      <items.MatchRequestListContainer>
        <items.HeaderContainer>
          <items.Head3>매칭 요청 목록</items.Head3>
        </items.HeaderContainer>
        {matchRequests.length > 0 ? (
          <items.MatchRequestList>
            {matchRequests.map((item, index) => (
              <Card
                key={index}
                contents={item}
                onClick={() => onHandle(item.seniorId)}
              />
            ))}
          </items.MatchRequestList>
        ) : (
          <items.EmptyMessage>아직 요청 온 매칭이 없어요!</items.EmptyMessage>
        )}
      </items.MatchRequestListContainer>
      <NavigationBar dashboard={false} />
    </items.Container>
  );
}
