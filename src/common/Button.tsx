import { useNavigate } from "react-router-dom"

type Props = {
    text: string
    navigate?: string
}

function Button ({text,navigate}:Props) {
    const nav = useNavigate()
    return (
                <button
          className="
          w-full
          h-16
          mt-8
          bg-lime-400
          border-4
          border-black
          rounded-3xl
          text-black
          text-xl
          font-black
          shadow-[5px_5px_0px_#000]
          active:translate-y-[4px]
          active:shadow-none
          transition-all
          hover:rotate-1
          "
          onClick={()=>nav(navigate?? '')}
        >
          {text}
        </button>
    )
}
export default Button