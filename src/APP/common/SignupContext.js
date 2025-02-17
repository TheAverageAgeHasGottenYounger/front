import React, { createContext, useContext, useState } from "react";

const SignupContext = createContext();

const AdminSignupContext = createContext();

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
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
  });

  return (
    <SignupContext.Provider value={{ signupData, setSignupData }}>
      {children}
    </SignupContext.Provider>
  );
};

export const AdminSignupProvider = ({ children }) => {
  const [adminSignupData, setAdminSignupData] = useState({
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
  });

  return (
    <AdminSignupContext.Provider
      value={{ adminSignupData, setAdminSignupData }}
    >
      {children}
    </AdminSignupContext.Provider>
  );
};

export const useSignup = () => useContext(SignupContext);
export const useAdminSignup = () => useContext(AdminSignupContext);
