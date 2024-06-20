interface props {
    value: string;
    original: string;
    name: string;
}

export const ContainerTranslate = ({ original, value, name }: props) => {
    return (
        <div>
            <div className="flex pl-9 gap-3">
                <h4>{name}:</h4>
                <textarea className="outline-none w-[100%] rounded px-1.5 py-.5 bg-[#363636]" value={value} />
            </div>
        </div>
    )
}