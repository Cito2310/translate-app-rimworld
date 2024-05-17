interface props {
    isLoad?: boolean;
    onClick: () => void;
    label: string;
}

export const TopButton = ({ isLoad, onClick, label }: props) => (

    <button 
        className="p-1 border border-black rounded bg-white hover:brightness-[.98] active:brightness-[.95] transition-base" 
        onClick={onClick}
    >

        <p>{ label }</p>
        { isLoad && <p className="text-green-600">Cargado</p> }

    </button>

)