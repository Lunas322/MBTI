import { create } from "zustand";
import type { MBTI } from "../types/QuestionType";

type MbtiState = Record<MBTI, number>;

type MbtiStore = {
  mbtiState: MbtiState;
  addRes: (value: MBTI) => void;
  resetRes: () => void;
};

const initialState: MbtiState = {
  E: 0,
  I: 0,
  S: 0,
  N: 0,
  T: 0,
  F: 0,
  P: 0,
  J: 0,
};

export const useMbtiStore = create<MbtiStore>((set) => ({
  mbtiState: initialState,

  addRes: (value) =>
    set((state) => ({
      mbtiState: {
        ...state.mbtiState,
        [value]: state.mbtiState[value] + 1,
      },
    })),

  resetRes: () =>
    set(() => ({
      mbtiState: initialState,
    })),
}));
