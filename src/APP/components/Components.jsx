import React from "react";
import * as styled from "./Components.styles";

export const Button = ({
  text,
  primary,
  outline,
  disabled,
  onClick,
  width = "100%",
}) => {
  return (
    <styled.Button
      primary={primary}
      outline={outline}
      disabled={disabled}
      onClick={onClick}
      style={{ width }}
    >
      {text}
    </styled.Button>
  );
};

export const Label = ({ text, star }) => {
  return (
    <styled.LabelContainer>
      <styled.Label>{text}</styled.Label>
      {star && <styled.Star>*</styled.Star>}
    </styled.LabelContainer>
  );
};

export const Input = ({
  placeholder,
  value,
  onChange,
  type = "text",
  width = "100%",
}) => {
  return (
    <styled.Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ width }}
    />
  );
};

export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder,
  width = "100%",
}) => {
  return (
    <styled.Dropdown value={value} onChange={onChange} style={{ width }}>
      <option value="" hidden>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </styled.Dropdown>
  );
};

export const TextArea = ({ placeholder, value, onChange, maxLength }) => {
  return (
    <styled.TextAreaContainer>
      <styled.TextAreaField
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      <styled.TextAreaCounter>
        {value.length}/{maxLength}
      </styled.TextAreaCounter>
    </styled.TextAreaContainer>
  );
};

export const SelectButton = ({
  text,
  selected,
  onClick,
  placeholder,
  borderRadius = "8px",
}) => {
  return (
    <styled.SelectButton
      selected={selected}
      onClick={onClick}
      borderRadius={borderRadius}
    >
      {text || placeholder}
    </styled.SelectButton>
  );
};

export const Card = ({ contents, onClick, width = "100%" }) => {
  return (
    <styled.CardContainer>
      <styled.CardInfoContainer>
        <styled.CardProfile src={contents.profileUrl} alt="프로필" />
        <styled.CardInfoBox>
          <styled.CardName>{contents.name}</styled.CardName>
          <styled.CardInfoBar>
            <styled.CardInfoIcon src="/img/location.svg" alt="위치아이콘" />
            <styled.CardInfoText>{contents.address}</styled.CardInfoText>
          </styled.CardInfoBar>
          <styled.CardInfoBar>
            <styled.CardInfoIcon src="/img/callender.svg" alt="달력아이콘" />
            <styled.CardInfoText>{contents.date}</styled.CardInfoText>
          </styled.CardInfoBar>
          <styled.CardInfoBar>
            <styled.CardInfoIcon src="/img/clock.svg" alt="시계아이콘" />
            <styled.CardInfoText>{contents.time}</styled.CardInfoText>
          </styled.CardInfoBar>
          <styled.CardRequestBar>{contents.request}</styled.CardRequestBar>
        </styled.CardInfoBox>
      </styled.CardInfoContainer>
      <styled.CardCheckButtonBox>
        <styled.CardCheckButton onClick={onClick}>
          상세정보 조회
        </styled.CardCheckButton>
      </styled.CardCheckButtonBox>
    </styled.CardContainer>
  );
};
