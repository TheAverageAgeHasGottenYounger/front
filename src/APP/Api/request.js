import axios from 'axios';

export const ACCESS_TOKEN = 'accessToken';

// Axios 인스턴스 생성
const request = axios.create({
  baseURL: 'https://user-dev.kau-koala.com', // 환경 변수로 API 주소 설정
  headers: {
    withCredentials: true,
    Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`,
  },
});

// 요청 인터셉터
request.interceptors.request.use(
  (config) => {
    // 요청 시작 시 로딩 상태 표시 (로딩 관련 제거)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
request.interceptors.response.use(
  (response) => {
    return response.data; // 응답 데이터만 반환
  },
  async (error) => {
    // 에러 발생 시 로딩 상태 숨김 (로딩 관련 제거)
    
    // 알림 함수 가져오기
    const alert = getAlertFunction();
    
    if (error.response && error.response.data) {
      const { data } = error.response;
      const { code, message } = data;

      switch (code) {
        case 'NOTICE':
          await alert(message); // 알림 메시지 처리
          break;
        case 'TOKEN_EXPIRED':
          window.localStorage.clear();
          window.location.href = '/login';
          break;
        default:
          console.error(`Unexpected error: ${message}`, error);
          if (message === '만료된 토큰입니다.') {
            window.localStorage.clear();
            window.location.href = '/login';
          }
          break;
      }
    }

    return Promise.reject(error);
  }
);

export default request;
