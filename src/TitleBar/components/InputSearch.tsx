import { useInputSearch } from "../hooks/useInputSearch";

export const InputSearch = () => {
    const { register } = useInputSearch();

    return (
        <input {...register("currentSearch")} placeholder="Buscar" className="bg-[#363636] not-draggable outline-none m-[4px] rounded px-2 placeholder:text-[#878787]"/>
    )
} 