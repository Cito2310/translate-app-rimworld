interface props {
    onClick: () => void;
    label: string;
    className?: string;
}

export const ButtonDialog = ({ onClick, label, className }: props) => (
    <button 
        className={`
            ${className}
            bg-[#363636] rounded py-1 px-2 
            transition-base hover:brightness-105 active:brightness-[1.20]
        "`}
        onClick={ onClick }
    >
        { label }
    </button>
)