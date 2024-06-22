import { controlLocalStorage } from "../../helpers";
import { useAppSelector } from "../../store";
import { FrameDialog } from "../components/FrameDialog"
import { InputDialog } from "../components/InputDialog";
import { useForm } from "react-hook-form";

interface props {
    onExit: () => void;}

export const MenuSettingProject = ({ 
    onExit, 
}: props) => {


    const dataTranslate = useAppSelector( state => state.dataTranslate )
    const { register, getValues } = useForm({ defaultValues: { name: dataTranslate.name } });

    const handleChangesConfig = () => {
        const newName = getValues().name;
        controlLocalStorage("set", "current-translate", {...dataTranslate, name: newName,} );
        onExit();
    }

    return (
        <FrameDialog
            onExit={onExit}
            title="Configuración del Proyecto"
            btnBottoms={[
                { label: "Cerrar", func: onExit },
                { label: "Aceptar", func: handleChangesConfig },
            ]}
        >
            <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                    <label>Nombre del proyecto :</label>
                    <InputDialog placeholder="Nombre del proyecto" registerReturn={ register("name") } />
                </div>
            </div>
        </FrameDialog>
    )
}