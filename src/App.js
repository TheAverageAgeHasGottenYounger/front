import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh; /* Root가 화면의 전체 높이를 차지하도록 설정 */
`;

function App() {
  return (
    <Root>
      <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="*" element={<Navigate to="/" />} /> 모든 다른 경로는 홈으로 리다이렉트 */}
        </Routes>
    </Root>
  );
}

export default App;
