import { useNavigate } from "react-router-dom";
import { useMbtiStore } from "../stores/useMbtiStore";
import { useQuestionStore } from "../stores/useQuestionStore";
import type { MBTI, Option } from "../types/QuestionType";



type SelecteButtonProps = {
  options: Option[];
};

function SelecteButton({ options}: SelecteButtonProps) {
    const nav = useNavigate()
    const increaseQuetion = useQuestionStore((state)=>state.increaseQuestion)
    const questionNumber = useQuestionStore((state)=> state.questionNumber)
    const addRes = useMbtiStore((state)=>state.addRes)
    function handleSelect (value:MBTI) {
        increaseQuetion()
        addRes(value)
        questionNumber === 11 ? nav('/result')  : null
    }
  return (
    <div className="mt-10 flex flex-col gap-5">
      <button
        className="
        bg-pink-300
        border-4
        border-black
        rounded-[30px]
        p-6
        text-left
        shadow-[6px_6px_0px_#000]
        hover:-rotate-1
        active:translate-y-[5px]
        active:shadow-none
        transition-all
        "
        onClick={()=>handleSelect(options[0].value)}
      >
        <h2 className="text-2xl">
          {options[0].text}
        </h2>
      </button>
      <button
        className="
        bg-cyan-300
        border-4
        border-black
        rounded-[30px]
        p-6
        text-left
        shadow-[6px_6px_0px_#000]
        hover:rotate-1
        active:translate-y-[5px]
        active:shadow-none
        transition-all
        "
        onClick={()=>handleSelect(options[1].value)}
      >
        <h2 className="text-2xl">
          {options[1].text}
        </h2>
      </button>
    </div>
  );
}

export default SelecteButton;