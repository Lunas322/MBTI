import { create } from "zustand";

type QuestionStore = {
  questionNumber: number;

  increaseQuestion: () => void;
  decreaseQuestion: () => void;
  resetQuestion: () => void;
};

export const useQuestionStore = create<QuestionStore>((set) => ({
  questionNumber: 0,
  increaseQuestion: () =>
    set((state) => ({
      questionNumber: state.questionNumber + 1,
    })),
  decreaseQuestion: () =>
    set((state) => ({
      questionNumber: state.questionNumber - 1,
    })),
  resetQuestion: () => set({ questionNumber: 0 }),
}));
