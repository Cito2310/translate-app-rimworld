import { ButtonDialog } from "../components/ButtonDialog"
import { FrameDialog } from "../components/FrameDialog"
import { InputDialog } from "../components/InputDialog"
import { useMenuNewProject } from "../hooks/useMenuNewProject";

interface props {
    onExit: () => void;}

export const MenuNewProject = ({ 
    onExit, 
}: props) => {
    const { handleCreate, handleSelectFileExclude, handleSelectFileTranslate, registerNameProject, availableCreate } = useMenuNewProject(onExit);

    return (
        <FrameDialog
            onExit={onExit}
            title="Nuevo Proyecto"
            btnBottoms={[
                { label: "Cerrar", func: onExit },
                { label: "Crear", func: handleCreate, disabled: !availableCreate },
            ]}
        >
            <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                    <label>Nombre del proyecto :</label>
                    <InputDialog placeholder="Nombre del proyecto" registerReturn={ registerNameProject("value") } />
                </div>

                <div className="flex gap-1 items-center">
                    <p>Añadir archivo a excluir :</p>
                    <ButtonDialog className="w-[200px]" onClick={ handleSelectFileExclude } label="Archivo a excluir" />
                </div>

                <div className="flex gap-1 items-center">
                    <p>Añadir archivo a traducir :</p>
                    <ButtonDialog className="w-[200px]" onClick={ handleSelectFileTranslate } label="Archivo a traducir" />
                </div>
            </div>
        </FrameDialog>
    )
}