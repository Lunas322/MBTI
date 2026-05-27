import type { Questions } from "../types/QuestionType";

export const questions: Questions[] = [
  // E / I
  {
    id: 1,
    type: "EI",
    question: "편의점 갔는데 알바가 갑자기 춤추면서 계산해줌",
    options: [
      {
        text: "박수치면서 리듬 탐",
        value: "E",
      },
      {
        text: "다신 그 편의점 안 감",
        value: "I",
      },
    ],
  },

  {
    id: 2,
    type: "EI",
    question: "길 가는데 어떤 사람이 갑자기 “야!!!” 하고 뜀",
    options: [
      {
        text: "같이 뜀",
        value: "E",
      },
      {
        text: "모르는 척 전봇대 됨",
        value: "I",
      },
    ],
  },

  {
    id: 3,
    type: "EI",
    question: "노래방에서 마이크 넘어옴",
    options: [
      {
        text: "탬버린까지 장착",
        value: "E",
      },
      {
        text: "기침하는 척 넘김",
        value: "I",
      },
    ],
  },

  // S / N
  {
    id: 4,
    type: "SN",
    question: "냉장고 불이 꺼지는 순간을 본 적 있나?",
    options: [
      {
        text: "그걸 왜 봄?",
        value: "S",
      },
      {
        text: "사실 냉장고 안에 요정 있음",
        value: "N",
      },
    ],
  },

  {
    id: 5,
    type: "SN",
    question: "길에서 나뭇잎 하나 떨어짐",
    options: [
      {
        text: "가을이네",
        value: "S",
      },
      {
        text: "세계 멸망의 신호일 수도",
        value: "N",
      },
    ],
  },

  {
    id: 6,
    type: "SN",
    question: "치킨 먹다가 닭다리 두 개 나옴",
    options: [
      {
        text: "오 개이득",
        value: "S",
      },
      {
        text: "오늘 운명 바뀌는 날인가?",
        value: "N",
      },
    ],
  },

  // T / F
  {
    id: 7,
    type: "TF",
    question: "친구가 우울하다고 새벽 4시에 전화함",
    options: [
      {
        text: "원인 분석 들어감",
        value: "T",
      },
      {
        text: "일단 같이 울어줌",
        value: "F",
      },
    ],
  },

  {
    id: 8,
    type: "TF",
    question: "친구가 이상한 머리 하고 와서 만족해함",
    options: [
      {
        text: "솔직히 말하면 망함",
        value: "T",
      },
      {
        text: "…귀엽네!ㅎㅎ",
        value: "F",
      },
    ],
  },

  {
    id: 9,
    type: "TF",
    question: "팀플 발표 망했는데 다들 해맑음",
    options: [
      {
        text: "현실 파악 시켜줌",
        value: "T",
      },
      {
        text: "추억이었다고 함",
        value: "F",
      },
    ],
  },

  // J / P
  {
    id: 10,
    type: "JP",
    question: "여행 출발 30분 전 상태는?",
    options: [
      {
        text: "짐, 계획, 맛집 정리 끝",
        value: "J",
      },
      {
        text: "속옷 어디있냐고 찾는 중",
        value: "P",
      },
    ],
  },

  {
    id: 11,
    type: "JP",
    question: "시험 하루 전날",
    options: [
      {
        text: "이미 3회독 끝남",
        value: "J",
      },
      {
        text: "책 펼치고 기절함",
        value: "P",
      },
    ],
  },

  {
    id: 12,
    type: "JP",
    question: "배달 시킬 때 메뉴 고르는 방식",
    options: [
      {
        text: "후보 정리 후 리뷰 분석",
        value: "J",
      },
      {
        text: "눈 감고 누름",
        value: "P",
      },
    ],
  },
];
