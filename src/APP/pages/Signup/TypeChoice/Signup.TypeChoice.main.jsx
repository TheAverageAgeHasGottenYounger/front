import React, { useState, useEffect, useContext  } from 'react';
import { useNavigate } from 'react-router-dom';
import * as items from "./Styled/Signup.TypeChoice.main.styles"
import { Button, Label, Input } from "../../../../APP/components/Components";
// import { ACCESS_TOKEN } from '../../Api/request';
// import axios from 'axios';

export default function TypeChoice() {

  const [id, setId] = useState('');
	const [password, setPassword] = useState('');

  return (
      <items.Container>
        {/* 타입 내부에 있는 이미지는 배경이미지로 한 후에 좌표를 써보자 */}
        <items.Head>
          요양보호사인가요?<br />
          관리자인가요?
        </items.Head>
        <items.TypeChoiceContainer>
          <items.TypeContainer>
            <items.TypeTextBox>  
              <items.TypeName>요양보호사에요</items.TypeName>
              <items.TypeExplanation>
                나에게 딱 맞는<br />
                구직 정보를 찾고 있어요
              </items.TypeExplanation>
            </items.TypeTextBox>
          </items.TypeContainer>

          <items.TypeContainer>
            <items.TypeTextBox>
              <items.TypeName>관리자/사회복지사에요</items.TypeName>
              <items.TypeExplanation>
                어르신을 위한<br />
                요양보호사를 찾고 있어요
              </items.TypeExplanation>
            </items.TypeTextBox>
          </items.TypeContainer>
        </items.TypeChoiceContainer>

        <items.ButtonContainer>
          <items.ButtoninnerContainer>
            <Button 
              text="이전" 
              outline 
              onClick={() => (console.log(""))} 
              width="127px"
            />
            <Button 
              text="다음" 
              primary 
              onClick={() => (console.log(""))} 
              width="228px"
            />
          </items.ButtoninnerContainer>
        </items.ButtonContainer>
      </items.Container>
  )
}
