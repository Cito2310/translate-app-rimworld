interface props {
    placeholder?: string;
    className?: string;
}

export const InputDialog = ({ placeholder, className }: props) => (
    <input 
        className={`bg-[#363636] rounded outline-none py-1 px-2 placeholder:text-[#878787] ${className}`}
        placeholder={ placeholder }
    />
)