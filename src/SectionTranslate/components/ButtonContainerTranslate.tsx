interface props {
    onClick: () => void;
    children: JSX.Element | JSX.Element[] | string
}

export const ButtonContainerTranslate = ({ children, onClick }: props) => {
  return (
    <button 
        onClick={ onClick }
        className="
            h-[24px] aspect-square rounded flex items-center justify-center text-[#878787]
            transition-base bg-[#1f1f1f] hover:brightness-125 hover:text-[#ddd] active:brightness-150
        "
    >
        {children}
    </button>
  )
}