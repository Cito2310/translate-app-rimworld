import { UseFormRegisterReturn } from "react-hook-form";

interface props {
    placeholder?: string;
    className?: string;
    registerReturn: UseFormRegisterReturn<string>;
}

export const InputDialog = ({ placeholder, className, registerReturn }: props) => (
    <input 
        {...registerReturn}
        className={`bg-[#363636] rounded outline-none py-1 px-2 placeholder:text-[#878787] ${className}`}
        placeholder={ placeholder }
    />
)