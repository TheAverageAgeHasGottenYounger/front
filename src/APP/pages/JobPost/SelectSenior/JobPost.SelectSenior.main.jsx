import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/JobPost.SelectSenior.main.styles";
import { PageHeader, Button, Label, Input, Dropdown, SelectButton } from "../../../components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
// import axios from 'axios';


export default function SelectSenior() {
  const navigate = useNavigate();

  const [selectedSenior, setSelectedSenior] = useState(null);

  const seniors = [
    { id: 1, name: "박영철", gender: "남", birth: "66.10.18", address: "서울시 강서구 화곡동", image: "/img/senior.png" },
    { id: 2, name: "이혜자", gender: "여", birth: "66.10.18", address: "서울시 강서구 화곡동", image: "/img/senior.png" },
    { id: 3, name: "김재호", gender: "남", birth: "66.10.18", address: "서울시 강서구 화곡동", image: "/img/senior.png" },
    { id: 4, name: "이영식", gender: "남", birth: "66.10.18", address: "서울시 강서구 화곡동", image: "/img/senior.png" },
    { id: 5, name: "박영철", gender: "남", birth: "66.10.18", address: "서울시 강서구 화곡동", image: "/img/senior.png" },
    { id: 6, name: "박영철", gender: "남", birth: "66.10.18", address: "서울시 강서구 화곡동", image: "/img/senior.png" },
  ];

    // 선택된 어르신 변경
    const handleSelectSenior = (id) => {
      setSelectedSenior(id);
    };

  return (
    <items.Container>
      <PageHeader title="어르신 선택" />

      <items.InnerContainer>
       

      {seniors.map((senior) => (
          <items.SeniorItem key={senior.id}>
            <items.ProfileContainer>
              <items.ProfileImage src={senior.image} alt={senior.name} />
              {selectedSenior === senior.id && <items.SelectedIcon src="/img/check_circle.svg" alt="선택됨" />}
            </items.ProfileContainer>

            <items.InfoContainer>
              <items.Name>{senior.name}</items.Name>
              <items.GenderBirth>
                <items.Gender color={senior.gender === "남" ? "blue" : "red"}>{senior.gender}</items.Gender>
                {senior.birth}
              </items.GenderBirth>
              <items.Address>{senior.address}</items.Address>
            </items.InfoContainer>

            <SelectButton
              text="선택"
              selected={selectedSenior === senior.id}
              onClick={() => handleSelectSenior(senior.id)}
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
