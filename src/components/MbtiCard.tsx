export type MbtiCardProps = {
  emoji: string;
  mbti: string;
  description: string;
};


function MbtiCard ({emoji, mbti,description}:MbtiCardProps) {
    return(
                  <div className="text-center">
            <div className="text-7xl animate-bounce">{emoji}</div>

            <h1 className="text-3xl font-black mt-4">당신의 MBTI는</h1>

            <div className="mt-3 text-5xl font-black tracking-wide">
              {mbti}
            </div>

            <p className="mt-4 text-gray-700 text-lg">
              {description}
            </p>
          </div>
    )
}
export default MbtiCard