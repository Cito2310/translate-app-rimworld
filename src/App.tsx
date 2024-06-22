import { useControlTranslate } from "./hooks";
import { TitleBar } from "./TitleBar/TitleBar";
import { Dialogs } from "./Dialogs/Dialogs";
import { useStartTranslate } from "./hooks/useStartTranslate";
import { SectionTranslate } from "./SectionTranslate/SectionTranslate";


function App() {

    const { control, onClickGenerateTranslate, getValues } = useControlTranslate();
    useStartTranslate();


    return (
        <div className="h-screen flex flex-col">
            <TitleBar />

            <SectionTranslate control={control} getValues={getValues} />

            <Dialogs />

        </div>
    );
}

export default App;
