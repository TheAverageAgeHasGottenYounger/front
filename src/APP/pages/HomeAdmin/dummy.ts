interface DummyItem {
  name: string;
  profileUrl: string;
  address: string;
  date: string;
  time: string;
  request: string;
  content: string;
  salary: string;
  careList: string[];
  phoneNumber: string;
  addressDetail: string;
  progress: "거절" | "수락" | "조율요청"; // progress 상태를 Union Type으로 지정
}

export const dummyItems3: DummyItem[] = [
  {
    name: "김철수",
    profileUrl: "/img/profile-default.svg",
    address: "서울특별시 강남구 강남동",
    date: "주 2일 (월, 목)",
    time: "오후 2시~6시",
    request: "추가 요양 보호 가능 여부 문의",
    content: "친근한 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    salary: "100000 원",
    careList: ["우와우", "와우와", "우와우"],
    phoneNumber: "010-0000-1111",
    addressDetail: "111동 1111호",
    progress: "거절",
  },
  {
    name: "김성수",
    profileUrl: "/img/profile-default.svg",
    address: "서울특별시 강남구 강남동",
    date: "주 2일 (월, 목)",
    time: "오후 21시~24시",
    request: "추가 요양 보호 가능 여부 문의",
    content: "친근한 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    salary: "100000 원",
    careList: ["우와우", "와우와", "우와우"],
    phoneNumber: "010-0000-1111",
    addressDetail: "111동 1111호",
    progress: "수락",
  },
  {
    name: "김밀수",
    profileUrl: "/img/profile-default.svg",
    address: "서울특별시 강남구 강남동",
    date: "주 2일 (월, 목)",
    time: "오후 21시~24시",
    request: "추가 요양 보호 가능 여부 문의",
    content: "친근한 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    salary: "100000 원",
    careList: ["우와우", "와우와", "우와우"],
    phoneNumber: "010-0000-1111",
    addressDetail: "111동 1111호",
    progress: "수락",
  },
  {
    name: "김민수",
    profileUrl: "/img/profile-default.svg",
    address: "서울특별시 강남구 강남동",
    date: "주 2일 (월, 목)",
    time: "오후 2시~6시",
    request: "추가 요양 보호 가능 여부 문의",
    content: "친근한 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    salary: "100000 원",
    careList: ["우와우", "와우와", "우와우"],
    phoneNumber: "010-0000-1111",
    addressDetail: "111동 1111호",
    progress: "조율요청",
  },
];
