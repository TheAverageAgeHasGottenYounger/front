import React from "react";
import * as styled from "./Components.styles";
import { useNavigate, useLocation } from "react-router-dom";

// Button Props 타입 정의
interface ButtonProps {
  text: string;
  primary?: boolean;
  outline?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  width?: string;
}

// Label Props 타입 정의
interface LabelProps {
  text: string;
  star?: boolean;
}

// Input Props 타입 정의
interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  width?: string;
}

// Dropdown Props 타입 정의
interface DropdownOption {
  value: string | number;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  width?: string;
  disabled?: boolean;
}

// TextArea Props 타입 정의
interface TextAreaProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength: number;
}

// SelectButton Props 타입 정의
interface SelectButtonProps {
  text?: string;
  selected?: boolean;
  onClick: () => void;
  placeholder?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
}

// Card Props 타입 정의
interface CardProps {
  contents: {
    fitness: number;
    profileUrl: string;
    seniorName: string | null;
    name: string;
    address: string;
    seniorDay?: string[];
    dayList?: string[];
    startTime: string;
    endTime: string;
    careStyle: string;
  };
  onClick: () => void;
  width?: string; // 기본값이 "100%"로 설정되므로 선택적 속성
}

// BigCard Props 타입 정의
interface BigCardProps {
  contents: {
    profileUrl: string;
    name: string;
    content: string;
    address: string;
    date: string;
    time: string;
    salary: string;
    careList: string[];
    phoneNumber: string;
    addressDetail: string;
  };
  width?: string;
}

// DashBoardCard Props 타입 정의
interface DashBoardCardProps {
  contents: {
    profileImageUrl: string;
    seniorName: string;
    seniorDay: string[];
    startTime: string;
    atmosphere: number;
    refusal: number;
    tuning: number;
    acceptance: number;
  };
  onClick: () => void;
  width?: string;
}

// Header Props 타입 정의
interface PageHeaderProps {
  title: string;
}

// Navi Menu 타입 정의
interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route: string;
}

// Navigation Props 타입 정의
interface NavigationBarProps {
  dashboard: boolean;
}

export const Button: React.FC<ButtonProps> = ({
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

export const Label: React.FC<LabelProps> = ({ text, star }) => {
  return (
    <styled.LabelContainer>
      <styled.Label>{text}</styled.Label>
      {star && <styled.Star>*</styled.Star>}
    </styled.LabelContainer>
  );
};

export const Input: React.FC<InputProps> = ({
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

export const Dropdown: React.FC<DropdownProps> = ({
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

export const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  value,
  onChange,
  maxLength,
}) => {
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

export const SelectButton: React.FC<SelectButtonProps> = ({
  text,
  selected,
  onClick,
  placeholder,
  borderRadius = "8px",
  width = "100%",
  height = "100%",
}) => {
  return (
    <styled.SelectButton
      selected={selected}
      onClick={onClick}
      borderRadius={borderRadius}
      style={{ width, height }}
    >
      {text || placeholder}
    </styled.SelectButton>
  );
};

export const Card: React.FC<CardProps> = ({
  contents,
  onClick,
  width = "100%",
}) => {
  return (
    <styled.CardContainer>
      <styled.Fitness>적합도 {contents.fitness}%</styled.Fitness>
      <styled.CardInfoContainer>
        <styled.CardProfile
          src={
            contents.profileUrl === ""
              ? "/img/profile-default.svg"
              : contents.profileUrl
          }
          alt="프로필"
        />
        <styled.CardInfoBox>
          <styled.CardName>
            {contents.seniorName || contents.name}
          </styled.CardName>
          <styled.CardInfoBar>
            <styled.CardInfoIcon src="/img/location.svg" alt="위치아이콘" />
            <styled.CardInfoText>{contents.address}</styled.CardInfoText>
          </styled.CardInfoBar>
          <styled.CardInfoBar>
            <styled.CardInfoIcon src="/img/callender.svg" alt="달력아이콘" />
            <styled.CardInfoText>
              주 {contents.seniorDay?.length || contents.dayList?.length || 0}일
              ({(contents.seniorDay || contents.dayList || []).join(", ")})
            </styled.CardInfoText>
          </styled.CardInfoBar>
          <styled.CardInfoBar>
            <styled.CardInfoIcon src="/img/clock.svg" alt="시계아이콘" />
            <styled.CardInfoText>
              {contents.startTime}~{contents.endTime}
            </styled.CardInfoText>
          </styled.CardInfoBar>
          <styled.CardInfoBar>
            <styled.CardInfoIcon src="/img/fire.svg" alt="불" />
            <styled.CardRequestBar>{contents.careStyle}</styled.CardRequestBar>
          </styled.CardInfoBar>
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

export const BigCard: React.FC<BigCardProps> = ({
  contents,
  width = "100%",
}) => {
  return (
    <styled.BigCardContainer>
      <styled.BigCardProfile src={contents.profileUrl} alt="프로필" />
      <styled.BigCardName>{contents.name} 어르신</styled.BigCardName>
      <styled.BigCardStyleBox>
        <styled.BigCardStyleBar>
          <styled.BigCardStyleIcon src="/img/temp.svg" alt="온도아이콘" />
          <styled.BigCardStyleText>온기 스타일</styled.BigCardStyleText>
        </styled.BigCardStyleBar>
        <styled.BigCardStyleContent>
          {contents.content}
        </styled.BigCardStyleContent>
      </styled.BigCardStyleBox>
      <styled.Hr />
      <styled.BigCardRequestBox>
        <styled.BigCardRequestBar>
          <styled.BigCardRequestIL>
            <styled.BigCardRequestIcon
              src="/img/location.svg"
              alt="위치아이콘"
            />
            <styled.BigCardRequestLabel>근무지역</styled.BigCardRequestLabel>
          </styled.BigCardRequestIL>
          <styled.BigCardRequestText>
            {contents.address}
          </styled.BigCardRequestText>
        </styled.BigCardRequestBar>
        <styled.BigCardRequestBar>
          <styled.BigCardRequestIL>
            <styled.BigCardRequestIcon
              src="/img/callender.svg"
              alt="달력아이콘"
            />
            <styled.BigCardRequestLabel>근무일</styled.BigCardRequestLabel>
          </styled.BigCardRequestIL>
          <styled.BigCardRequestText>{contents.date}</styled.BigCardRequestText>
        </styled.BigCardRequestBar>
        <styled.BigCardRequestBar>
          <styled.BigCardRequestIL>
            <styled.BigCardRequestIcon src="/img/clock.svg" alt="시계아이콘" />
            <styled.BigCardRequestLabel>가능시간</styled.BigCardRequestLabel>
          </styled.BigCardRequestIL>
          <styled.BigCardRequestText>{contents.time}</styled.BigCardRequestText>
        </styled.BigCardRequestBar>
      </styled.BigCardRequestBox>
      <styled.Hr />
      <styled.BigCardConditionBox>
        <styled.BigCardRequestBar>
          <styled.BigCardRequestIL>
            <styled.BigCardRequestIcon src="/img/salary.svg" alt="급여아이콘" />
            <styled.BigCardRequestLabel>희망급여</styled.BigCardRequestLabel>
          </styled.BigCardRequestIL>
          <styled.BigCardRequestText>
            {contents.salary}
          </styled.BigCardRequestText>
        </styled.BigCardRequestBar>
        <styled.Blank />
        <styled.BigCardRequestBar>
          <styled.BigCardRequestIL>
            <styled.BigCardRequestIcon src="/img/care.svg" alt="케어아이콘" />
            <styled.BigCardRequestLabel>케어항목</styled.BigCardRequestLabel>
          </styled.BigCardRequestIL>
          <styled.BigCardRequestCareList>
            {contents.careList.map((item, index) => (
              <styled.BigCardRequestCareListItem key={index}>
                {item}
              </styled.BigCardRequestCareListItem>
            ))}
          </styled.BigCardRequestCareList>
        </styled.BigCardRequestBar>
      </styled.BigCardConditionBox>
      <styled.Hr />
      <styled.BigCardInfoBox>
        <styled.BigCardRequestBar>
          <styled.BigCardRequestLabel>연락처</styled.BigCardRequestLabel>
          <styled.BigCardRequestText>
            {contents.phoneNumber}
          </styled.BigCardRequestText>
        </styled.BigCardRequestBar>
        <styled.Blank />
        <styled.BigCardRequestBar>
          <styled.BigCardRequestLabel>상세 주소</styled.BigCardRequestLabel>
          <styled.BigCardRequestText>
            {contents.addressDetail}
          </styled.BigCardRequestText>
        </styled.BigCardRequestBar>
        {/* 자물쇠 */}
        <styled.LockBox>
          <styled.LockIcon src="/img/lock.svg" alt="자물쇠" />
          <styled.LockText>매칭 요청 후 확인 가능해요!</styled.LockText>
        </styled.LockBox>
      </styled.BigCardInfoBox>
    </styled.BigCardContainer>
  );
};

export const DashBoardCard: React.FC<DashBoardCardProps> = ({
  contents,
  onClick,
  width = "100%",
}) => {
  return (
    <styled.DashBoardCardContainer style={{ width }}>
      <styled.CardInfoContainer>
        <styled.CardProfile src={contents.profileImageUrl} alt="프로필" />

        <styled.DashBoardCardInfoBox>
          <styled.DashBoardCardInfoHeader>
            <styled.CardName>{contents.seniorName} 어르신</styled.CardName>
            <styled.DashBoardCardInfoBar>
              <styled.DashBoardCardInfoIcon
                src="/img/callender.svg"
                alt="달력아이콘"
              />
              <styled.DashBoardCardInfoText>
                {contents.seniorDay.join(", ")} {contents.startTime}
              </styled.DashBoardCardInfoText>
            </styled.DashBoardCardInfoBar>
          </styled.DashBoardCardInfoHeader>

          <styled.TagContainer>
            <styled.Tag label="대기">대기 {contents.atmosphere}건</styled.Tag>
            <styled.Tag label="거절">거절 {contents.refusal}건</styled.Tag>
            <styled.Tag label="조율요청">
              조율요청 {contents.tuning}건
            </styled.Tag>
            <styled.Tag label="수락">수락 {contents.acceptance}건</styled.Tag>
          </styled.TagContainer>
        </styled.DashBoardCardInfoBox>
      </styled.CardInfoContainer>
    </styled.DashBoardCardContainer>
  );
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <styled.HeaderContainer>
      <styled.BackButton>
        <img
          src="/img/left_arrow.svg"
          alt="이전"
          onClick={() => navigate(-1)}
        />
      </styled.BackButton>
      <styled.Title>{title}</styled.Title>
    </styled.HeaderContainer>
  );
};

export const NavigationBar: React.FC<NavigationBarProps> = ({ dashboard }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      id: "home",
      label: "홈",
      icon: "/img/navigation_home.svg",
      route: dashboard ? "/homeadmin" : "/home",
    },
    {
      id: "match",
      label: "매칭관리",
      icon: "/img/navigation_matching.svg",
      route: dashboard ? "/admin/matchoverview" : "/matchoverview",
    },
    ...(dashboard
      ? [
          {
            id: "dashboard",
            label: "대시보드",
            icon: "/img/navigation_dashboard.svg",
            route: "/dashboard",
          },
        ]
      : []),
    {
      id: "profile",
      label: "내 정보",
      icon: "/img/navigation_profile.svg",
      route: dashboard ? "/admin/profile" : "/profile",
    },
  ];
  return (
    <styled.NavContainer>
      {menuItems.map((item) => {
        const isActive = location.pathname === item.route;
        return (
          <styled.NavItem key={item.id} onClick={() => navigate(item.route)}>
            <styled.NavIcon
              src={item.icon}
              alt={item.label}
              active={isActive}
            />
            <styled.NavLabel active={isActive}>{item.label}</styled.NavLabel>
          </styled.NavItem>
        );
      })}
    </styled.NavContainer>
  );
};
export default NavigationBar;
