import { TitleBar } from "./TitleBar/TitleBar";
import { Dialogs } from "./Dialogs/Dialogs";
import { useStartTranslate } from "./hooks/useStartTranslate";
import { useAppSelector } from "./store";
import { SectionTranslateVirtuoso } from "./SectionTranslate/SectionTranslateVirtuoso";


function App() {
    const existData = useAppSelector(state => state.dataTranslate.existData);

    useStartTranslate();


    return (
        <div className="h-screen flex flex-col">
            <TitleBar />

            { existData && <SectionTranslateVirtuoso /> }
            {/* <SectionTranslate control={control} getValues={getValues} /> */}

            <Dialogs />

        </div>
    );
}

export default App;
