interface props {
    onClick: () => void;
    label: string;
    className?: string;
    disabled?: boolean;
}

export const ButtonDialog = ({ onClick, label, className, disabled }: props) => (
    <button 
        disabled={ disabled }
        className={`
            ${className}
            bg-[#363636] rounded py-1 px-2 
            transition-base hover:brightness-105 active:brightness-[1.20] disabled:text-[#878787] disabled:brightness-100
        "`}
        onClick={ onClick }
    >
        { label }
    </button>
)