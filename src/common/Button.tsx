

type ButtonProps = {
    text: string
    onclick: ()=> void
}

function Button ({text, onclick}:ButtonProps) {
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
          active:translate-y-1
          active:shadow-none
          transition-all
          hover:rotate-1
          "
          onClick={onclick}
        >
          {text}
        </button>
    )
}
export default Button