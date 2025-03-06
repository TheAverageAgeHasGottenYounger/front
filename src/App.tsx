import styled from "styled-components";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./APP/pages/Login/Login";
import TypeChoice from "./APP/pages/Signup/TypeChoice/Signup.TypeChoice.main";
import Info from "./APP/pages/Signup/Info/Signup.Info.main";
import Form from "./APP/pages/Signup/Form/Signup.Form.main";
import AddInfo from "./APP/pages/Signup/AddInfo/Signup.AddInfo.main";
import InfoAdmin from "./APP/pages/SignupAdmin/Info/SignupAdmin.Info.main";
import FormAdmin from "./APP/pages/SignupAdmin/Form/SignupAdmin.Form.main";
import AddInfoAdmin from "./APP/pages/SignupAdmin/AddInfo/SignupAdmin.AddInfo.main";
import SelectSenior from "./APP/pages/JobPost/SelectSenior/JobPost.SelectSenior.main";
import SeniorCheck from "./APP/pages/JobPost/SeniorCheck/JobPost.SeniorCheck.main";
import SeniorRegistration from "./APP/pages/JobPost/SeniorRegistration/JobPost.SeniorRegistration.main";
import MatchOverview from "./APP/pages/MatchOverview/MatchOverview.main";
import MatchOverviewItem from "./APP/pages/MatchOverview/MatchOverview.item";
import MatchOverviewAdmin from "./APP/pages/MatchOverviewAdmin/MatchOverviewAdmin.main";
import MatchOverviewItemAdmin from "./APP/pages/MatchOverviewAdmin/MatchOverviewAdmin.item";
import DashBoard from "./APP/pages/DashBoard/DashBoard.main";
import Home from "./APP/pages/Home/Home.main";
import HomeAdmin from "./APP/pages/HomeAdmin/HomeAdmin.main";
import JobRequirements from "./APP/pages/jobRequirements/jobRequirements.main";
import MatchLoading from "./APP/pages/JobPost/MatchLoading/JobPost.MatchLoading.main";

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh; /* Root가 화면의 전체 높이를 차지하도록 설정 */
`;

const Container = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

function App() {
  return (
    <Root>
      <Routes>
        {/* 로그인 */}
        <Route path="/" element={<Login />} />

        {/* 회원가입 과정 */}
        <Route path="/signup/type" element={<TypeChoice />} />
        <Route path="/signup/info" element={<Info />} />
        <Route path="/signup/form" element={<Form />} />
        <Route path="/signup/add-info" element={<AddInfo />} />

        {/* 관리자 회원가입 과정 */}
        {/* <Route path="/admin/signup/info" element={<InfoAdmin />} /> */}
        <Route path="/admin/signup/info" element={<InfoAdmin />} />
        <Route path="/admin/signup/form" element={<FormAdmin />} />
        <Route path="/admin/signup/add-info" element={<AddInfoAdmin />} />

        {/* 매칭 현황 */}
        <Route path="/matchoverview" element={<MatchOverview />} />
        <Route path="/matchoverview/:id" element={<MatchOverviewItem />} />

        {/* 관리자 매칭 현황 */}
        <Route path="/admin/matchoverview" element={<MatchOverviewAdmin />} />
        <Route
          path="/admin/matchoverview/:id"
          element={<MatchOverviewItemAdmin />}
        />

        {/* 잘못된 경로는 로그인 페이지로 리다이렉트 */}
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}

        {/* 구인 과정 */}
        <Route path="/jobpost/selectsenior" element={<SelectSenior />} />
        <Route path="/jobpost/seniorcheck" element={<SeniorCheck />} />
        <Route
          path="/jobpost/seniorregistration"
          element={<SeniorRegistration />}
        />
        <Route path="/jobpost/matchloading" element={<MatchLoading />} />

        {/* 대시보드 */}
        <Route path="/dashboard" element={<DashBoard />} />

        {/* 홈 */}
        <Route path="/home" element={<Home />} />
        <Route path="/homeadmin" element={<HomeAdmin />} />

        {/* 근무 조건 */}
        <Route path="/jobrequirement" element={<JobRequirements />} />
      </Routes>
    </Root>
  );
}

export default App;
