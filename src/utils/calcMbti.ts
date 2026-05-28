import type { MBTI } from "../types/QuestionType";

export const calcMbti = (state: Record<MBTI, number>) => {
  let result = "";
  result += state.E > state.I ? "E" : "I";
  result += state.N > state.S ? "N" : "S";
  result += state.F > state.T ? "F" : "T";
  result += state.P > state.J ? "P" : "J";
  return result;
};
