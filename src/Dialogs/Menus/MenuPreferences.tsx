import { FrameDialog } from "../components/FrameDialog"

interface props {
    onExit: () => void;}

export const MenuPreferences = ({ 
    onExit, 
}: props) => {

    return (
        <FrameDialog
            onExit={onExit}
            title="Preferencias"
        >
            <div className="flex flex-col gap-3">
                <label>No hay ninguna preferencias que cambiar aún</label>
            </div>
        </FrameDialog>
    )
}