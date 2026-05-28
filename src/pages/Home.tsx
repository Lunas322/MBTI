import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import HeroSection from "../components/HeroSection";
import HomeSuggestion from "../components/WhoShouldTry";

function Home() {
  const nav = useNavigate()
  return (
    <div className="min-h-screen bg-yellow-200 flex justify-center items-center px-4 overflow-hidden">
      <div className="w-full max-w-107.5 bg-white border-4 border-black rounded-[40px] p-7 shadow-[8px_8px_0px_#000] relative">
        <div className="absolute -top-4 -right-3 rotate-12 bg-pink-400 text-white px-4 py-1 rounded-full text-sm font-bold border-2 border-black">
          🔥 100% 정확함 아마도
        </div>

        <HeroSection/>

        <HomeSuggestion />

        <Button text={"🚀 한번 눌러봐~"} onclick={()=>nav('/question')} />

        <div className="mt-6 text-center text-xs font-bold text-gray-500">
          ※ 결과에 책임 안 짐
        </div>
      </div>
    </div>
  );
}

export default Home;
