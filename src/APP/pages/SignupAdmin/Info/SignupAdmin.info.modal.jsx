import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/SignupAdmin.info.modal.styles";
import { Button, Label, Input, Dropdown } from "../../../components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
// import axios from 'axios';
export default function Modal({ onClose }) {
  const [text, setText] = useState("사랑나눔 재가복지센터");
  return (
    <items.ModalOverlay>
      <items.ModalContainer>
        <items.Head3>해당 센터를 등록할까요?</items.Head3>
        <items.CenterName>{text}</items.CenterName>
        <items.ButtonContainer>
          <Button 
            text="취소" 
            outline 
            onClick={onClose} 
            width="129px" 
          />
          <Button 
            text="등록하기" 
            primary 
            onClick={() => console.log("등록 완료")} 
            width="188px" 
          />
        </items.ButtonContainer>
      </items.ModalContainer>
    </items.ModalOverlay>
  );
}
