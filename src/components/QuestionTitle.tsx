type QuestionTitleProps = {
    question: string

}


function QuestionTitle ({question}:QuestionTitleProps) {
return (
        <div className="bg-white border-4 border-black rounded-[35px] p-6 shadow-[8px_8px_0px_#000] relative">

          <div className="absolute -top-3 right-3 bg-pink-400 border-2 border-black rounded-full px-3 py-1 text-sm rotate-12">
            🔥 집중해
          </div>

          <div className="w-full h-5 bg-gray-200 border-2 border-black rounded-full overflow-hidden">
            <div className="w-[60%] h-full bg-lime-400"></div>
          </div>

          <div className="mt-10 text-center">

            <div className="text-6xl mb-4 animate-bounce">
              🤔
            </div>

            <h1 className="text-3xl leading-relaxed break-keep">
            {question}
            </h1>

            <p className="mt-5 text-lg text-gray-700">
              당신의 반응은?
            </p>
          </div>
        </div>
)
}
export default QuestionTitle