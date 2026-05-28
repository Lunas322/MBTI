import QuestionTitle from "../components/QuestionTitle";
import SelecteButton from "../components/SelecteButton";
import { questions } from "../mock/questionData";
import { useQuestionStore } from "../stores/useQuestionStore";
import type { Questions } from "../types/QuestionType";


function Question() {
  const questionNumber = useQuestionStore((state) => state.questionNumber);
  const question: Questions = questions[questionNumber];

  return (
    <div className="min-h-screen bg-yellow-200 flex justify-center px-4 py-6 overflow-hidden">
      <div className="w-full max-w-107.5">
        <div className="flex items-center justify-between mb-5">
          <div className="bg-white border-4 border-black rounded-full px-5 py-2 shadow-[4px_4px_0px_#000]">
            <span className="text-lg">
              {questionNumber + 1} / {questions.length}
            </span>
          </div>
        </div>

        <QuestionTitle question={question.question} />
        <SelecteButton options={question.options}  />

        <div className="mt-8 text-center text-sm text-gray-700">
          ※ 이 선택 하나로 친구들이 널 판단함
        </div>
      </div> 
    </div>
  );
}

export default Question;
