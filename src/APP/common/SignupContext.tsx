import React, { createContext, useContext, useState, ReactNode } from "react";

// 일반 회원 Signup 데이터 타입
interface SignupData {
  profileImageFile: string;
  name: string;
  phoneNumber: string;
  city: string;
  gu: string;
  dong: string;
  id: string;
  password: string;
  dementiaEducationYn: boolean;
  carYn: boolean;
  certificate: { type: string; number: string; grade: string | null }[];
  introduction: string;
  career: string;
  careerPeriod: string;
  careStyle: string;
}

// 센터 정보 타입
interface CenterData {
  name: string;
  bathCarYn: boolean;
  grade: string;
  operationPeriod: string;
  city: string;
  gu: string;
  dong: string;
  introduction: string;
}

// 관리자 회원 Signup 데이터 타입
interface AdminSignupData {
  profileImageFile: string;
  phoneNumber: string;
  carYn: boolean;
  id: string;
  password: string;
  center: CenterData;
}

// 컨텍스트 타입 정의
interface SignupContextType {
  signupData: SignupData;
  setSignupData: React.Dispatch<React.SetStateAction<SignupData>>;
}

interface AdminSignupContextType {
  adminSignupData: AdminSignupData;
  setAdminSignupData: React.Dispatch<React.SetStateAction<AdminSignupData>>;
}

// 기본값 설정
const defaultSignupData: SignupData = {
  profileImageFile: "",
  name: "",
  phoneNumber: "",
  city: "",
  gu: "",
  dong: "",
  id: "",
  password: "",
  dementiaEducationYn: false,
  carYn: false,
  certificate: [],
  introduction: "",
  career: "",
  careerPeriod: "",
  careStyle: "",
};

const defaultAdminSignupData: AdminSignupData = {
  profileImageFile: "",
  phoneNumber: "",
  carYn: true,
  id: "",
  password: "",
  center: {
    name: "",
    bathCarYn: true,
    grade: "",
    operationPeriod: "",
    city: "",
    gu: "",
    dong: "",
    introduction: "",
  },
};

// 컨텍스트 생성
const SignupContext = createContext<SignupContextType | null>(null);
const AdminSignupContext = createContext<AdminSignupContextType | null>(null);

export const SignupProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [signupData, setSignupData] = useState<SignupData>(defaultSignupData);

  return (
    <SignupContext.Provider value={{ signupData, setSignupData }}>
      {children}
    </SignupContext.Provider>
  );
};

export const AdminSignupProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [adminSignupData, setAdminSignupData] = useState<AdminSignupData>(
    defaultAdminSignupData
  );

  return (
    <AdminSignupContext.Provider
      value={{ adminSignupData, setAdminSignupData }}
    >
      {children}
    </AdminSignupContext.Provider>
  );
};

export const useSignup = (): SignupContextType => {
  const context = useContext(SignupContext);
  if (!context)
    throw new Error("useSignup must be used within a SignupProvider");
  return context;
};

export const useAdminSignup = (): AdminSignupContextType => {
  const context = useContext(AdminSignupContext);
  if (!context)
    throw new Error(
      "useAdminSignup must be used within an AdminSignupProvider"
    );
  return context;
};
