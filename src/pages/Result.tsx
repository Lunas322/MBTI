import { useEffect, useState } from "react";
import { useMbtiStore } from "../stores/useMbtiStore";
import { mbtiMock } from "../mock/resultData";
import { calcMbti } from "../utils/calcMbti";
import { useNavigate } from "react-router-dom";
import { useQuestionStore } from "../stores/useQuestionStore";
import Button from "../common/Button";
import MatchMbti from "../components/MatchMbti";
import MbtiCard from "../components/MbtiCard";
import type { MbtiData } from "../types/ResultType";
import MbtiTraits from "../components/MbtiTraits";




function Result() {
  const resultQuestion = useMbtiStore((state) => state.mbtiState);
  const reset = useMbtiStore((state) => state.resetRes);
  const resetNumber = useQuestionStore((state) => state.resetQuestion);
  
  const nav = useNavigate();
  const [mbtiData, setMbtiData] = useState<MbtiData>();

  useEffect(() => {
    const result = calcMbti(resultQuestion);
    if (!result) return;
    setMbtiData(mbtiMock.find((item) => item.mbti === result));
  }, [resultQuestion]);

  function handleReset() {
    nav("/");
    reset();
    resetNumber();
  }

  return (
    <div className="min-h-screen bg-yellow-200 flex justify-center px-4 py-6">
      <div className="w-full max-w-107.5">
        <div className="bg-white border-4 border-black rounded-[40px] p-7 shadow-[8px_8px_0px_#000] relative">
          <div className="absolute -top-4 right-3 bg-pink-400 border-2 border-black rounded-full px-4 py-1 text-sm rotate-12">
            🎉 결과 나옴
          </div>

          <MbtiCard
            emoji={mbtiData?.emoji ?? ""}
            description={mbtiData?.description ?? ""}
            mbti={mbtiData?.mbti ?? ""}
          />

        <MbtiTraits traits={mbtiData?.traits ?? []}/>

          <MatchMbti
            match={mbtiData?.match ?? []}
            matchDesc={mbtiData?.matchDesc ?? ""}
          />
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <Button text="🔄 다시하기" onclick={handleReset} />
        </div>

        <div className="mt-6 text-center text-sm text-gray-700">
          ※ 결과는 재미용입니다 (진짜 아님)
        </div>
      </div>
    </div>
  );
}

export default Result;
