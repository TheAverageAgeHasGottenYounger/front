import React, { createContext, useContext, useState } from "react";

const SignupContext = createContext();

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

export const useSignup = () => useContext(SignupContext);
