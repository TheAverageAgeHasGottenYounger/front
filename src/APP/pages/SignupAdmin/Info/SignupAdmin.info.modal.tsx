import React from "react";
import * as items from "./Styled/SignupAdmin.info.modal.styles";
import { Button, Label, Input, Dropdown } from "../../../components/Components";

// Props 타입 정의
interface ModalProps {
  onClose: () => void;
  onClick: () => void;
  centerName: string;
}

export default function Modal({ onClose, onClick, centerName }: ModalProps) {
  return (
    <items.ModalOverlay>
      <items.ModalContainer>
        <items.Head3>해당 센터를 등록할까요?</items.Head3>
        <items.CenterName>{centerName}</items.CenterName>
        <items.ButtonContainer>
          <Button text="취소" outline onClick={onClick} width="129px" />
          <Button text="등록하기" primary onClick={onClose} width="188px" />
        </items.ButtonContainer>
      </items.ModalContainer>
    </items.ModalOverlay>
  );
}
