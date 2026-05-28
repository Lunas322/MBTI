type TraitsProps ={
    traits: string[]
}

function MbtiTraits ({traits}:TraitsProps) {
    return (
                  <div className="mt-8 bg-cyan-200 border-4 border-black rounded-3xl p-5 rotate-1">
            <h2 className="text-xl font-black mb-2">특징</h2>

            <ul className="space-y-2 text-sm font-semibold">
              {traits.map((data) => (
                <li>{data}</li>
              ))}
            </ul>
          </div>
    )
}
export default MbtiTraits