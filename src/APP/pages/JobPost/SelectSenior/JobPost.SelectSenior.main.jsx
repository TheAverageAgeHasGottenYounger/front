import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/JobPost.SelectSenior.main.styles";
import { PageHeader, Button, Label, Input, Dropdown, SelectButton } from "../../../components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
import axios from 'axios';
import request from '../../../Api/request';


export default function SelectSenior() {
  const navigate = useNavigate();

  /*
  const seniors = [
    { id: 1, name: "박영철", gender: "남", birth: "66.10.18", address: "서울시 강서구 화곡동", image: "/img/senior.png" },
    { id: 2, name: "이혜자", gender: "여", birth: "66.10.18", address: "서울시 강서구 화곡동", image: "/img/senior.png" },
    { id: 3, name: "김재호", gender: "남", birth: "66.10.18", address: "서울시 강서구 화곡동", image: "/img/senior.png" },
    { id: 4, name: "이영식", gender: "남", birth: "66.10.18", address: "서울시 강서구 화곡동", image: "/img/senior.png" },
    { id: 5, name: "박영철", gender: "남", birth: "66.10.18", address: "서울시 강서구 화곡동", image: "/img/senior.png" },
    { id: 6, name: "박영철", gender: "남", birth: "66.10.18", address: "서울시 강서구 화곡동", image: "/img/senior.png" },
  ];
  */

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

  return (
    <items.Container>
      <PageHeader title="어르신 선택" />

      <items.InnerContainer>

      {seniors.map((senior) => (
          <items.SeniorItem key={senior.seniorId}>
            <items.ProfileContainer>
              <items.ProfileImage src={senior.profileUrl} alt={senior.name} />
              {selectedSenior === senior.seniorId && <items.SelectedIcon src="/img/check_circle.svg" alt="선택됨" />}
            </items.ProfileContainer>

            <items.InfoContainer>
              <items.Name>{senior.name}</items.Name>
              <items.GenderBirth>
                <items.Gender color={senior.sex === "남" ? "blue" : "red"}>{senior.sex}</items.Gender>
                {senior.birthday}
              </items.GenderBirth>
              <items.Address>{senior.address}</items.Address>
            </items.InfoContainer>

            <SelectButton
              text="선택"
              selected={selectedSenior === senior.seniorId}
              onClick={() => handleSelectSenior(senior.seniorId)}
              width="90px"
              height="38px"
              borderRadius="10px"
            />
          </items.SeniorItem>
        ))}

      </items.InnerContainer>

      <items.ButtonContainer>
        <items.ButtoninnerContainer>
          <Button
              text="확인"
              primary
              onClick={() => navigate("/jobpost/SeniorCheck")}
              width="361px"
            />
        </items.ButtoninnerContainer>
      </items.ButtonContainer>
    </items.Container>
  );
}
