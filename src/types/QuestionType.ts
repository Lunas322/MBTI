export type MBTI = "E" | "I" | "S" | "N" | "F" | "T" | "P" | "J";

export type Questions = {
  id: number;
  type: string;
  question: string;
  options: Option[];
};

export type Option = {
  text: string;
  value: MBTI;
};
