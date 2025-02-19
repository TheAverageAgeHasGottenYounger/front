import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/JobPost.MatchLoading.main.styles";
import { PageHeader, Button, Label, Input, Dropdown, SelectButton } from "../../../components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
import axios from 'axios';
import request from '../../../Api/request';


export default function SelectSenior() {
  const navigate = useNavigate();

  const [selectedSenior, setSelectedSenior] = useState(null);
  const [seniors, setSeniors] = useState([]);

  // 어르신 목록 가져오기
  useEffect(() => {
    const fetchSeniors = async () => {
      try {
        const response = await request.get("/senior");

        if (response.isSuccess) {
          setSeniors(response.result.seniorList);
          console.log("어르신 목록 response", response);
        }
      } catch (error) {
        console.error("어르신 목록 불러오기 오류", error);
      }
    };

    fetchSeniors();
  }, []);


  // 선택된 어르신 변경
  const handleSelectSenior = (id) => {
    setSelectedSenior(id);
  };

  const handleConfirm = () => {
    if (!selectedSenior) {
      alert("어르신을 선택해주세요.");
      return;
    }
    navigate("/jobpost/SeniorCheck", { state: { seniorId: selectedSenior } });
  };

  return (
    <items.Container>

      <items.ProgressText>
        매칭 진행 중이에요!<br/>잠시만 기다려주세요
      </items.ProgressText>
        
      <items.ButtonContainer>
        <items.ButtoninnerContainer>
          <Button
              text="추천 리스트 확인하기"
              disabled
              onClick={handleConfirm}
              width="361px"
            />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
