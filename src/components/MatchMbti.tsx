type matchMbtiProps = {
    match: string[]
    matchDesc: string

}

function MatchMbti ({match,matchDesc}:matchMbtiProps) {
    return (
                 <div className="mt-6 bg-pink-200 border-4 border-black rounded-3xl p-5 rotate-1">
            <h2 className="text-xl font-black mb-2">잘 맞는 타입</h2>

            <div className="text-2xl font-black">
              {match.slice(0, 3) + " " + match.slice(4, 7)}
            </div>

            <p className="text-sm mt-2 text-gray-700">{matchDesc}</p>
          </div>
    )
}
export default MatchMbti