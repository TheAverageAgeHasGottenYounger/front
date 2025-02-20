import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as items from "./Styled/JobPost.MatchLoading.main.styles";
import { PageHeader, Button, Label, Input, Dropdown, SelectButton } from "../../../components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
import axios from 'axios';
import request from '../../../Api/request';


export default function SelectSenior() {
  const navigate = useNavigate();
  const location = useLocation();

  const [seniors, setSeniors] = useState( location.state?.seniors || []);
  const [isCompleted, setIsCompleted] = useState(false);


  // 요양 보호사 추천받기
  useEffect(() => {
    const handleRecommend = async () => {
      if (!seniors.length) return;
  
      try {
        // 모든 seniors에 대해 요청 실행
        const responses = await Promise.all(
          seniors.map((senior) =>
            request.get(`/senior/${senior.seniorId}/recommend`)
          )
        );
  
        // 모든 요청이 성공했는지 확인
        const allSuccessful = responses.every((res) => res.isSuccess);
        
        if (allSuccessful) {
          // seniors 상태 업데이트 (추천 결과 반영)
          const updatedSeniors = responses.map((res, index) => ({
            ...seniors[index],
            recommendations: res.result, // 추천된 정보 저장
          }));
  
          setSeniors(updatedSeniors);
          setIsCompleted(true); // 모든 요청이 성공하면 isCompleted를 true로 변경
          console.log("어르신 추천 목록 불러오기 성공");
        }
      } catch (error) {
        console.error("어르신 추천 목록 불러오기 오류", error);
      }
    };
  
    handleRecommend();
  }, [seniors]); // seniors 목록이 변경될 때 실행


  const handleConfirm = () => {
    navigate("/admin/matchoverview", { state: { seniors } });
  };

  return (
    <items.Container>

      <items.ProgressText>
        {isCompleted ? (
          <>
            매칭이 완료되었어요!<br />
            추천 리스트를 확인해보세요
          </>
        ) : (
          <>
            매칭 진행 중이에요!<br />
            잠시만 기다려주세요
          </>
        )}
      </items.ProgressText>

      {!isCompleted && <items.LoadingSpinner />}

      <items.ButtonContainer>
        <items.ButtoninnerContainer>
        <Button
          text="추천 리스트 확인하기"
          width="361px"
          disabled={!isCompleted}
          primary={isCompleted} 
          onClick={isCompleted ? handleConfirm : undefined}
        />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
