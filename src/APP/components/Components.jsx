import React from "react";
import * as styled from "./Components.styles";

export const Button = ({ text, primary, outline, disabled, onClick }) => {
    return (
      <styled.Button primary={primary} outline={outline} disabled={disabled} onClick={onClick}>
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

export const Input = ({ placeholder, value, onChange, type = "text" }) => {
    return <styled.Input type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export const Dropdown = ({ options, value, onChange, placeholder }) => {
    return (
        <styled.Dropdown value={value} onChange={onChange}>
            <option value="" hidden>{placeholder}</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
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
