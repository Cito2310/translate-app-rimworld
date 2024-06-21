import { useControlTranslate } from "./hooks";
import { TitleBar } from "./TitleBar/TitleBar";
import { SectTranslate } from "./SectionTranslate/SectionTranslate";
import { Dialogs } from "./Dialogs/Dialogs";
import { useStartTranslate } from "./hooks/useStartTranslate";


function App() {

    const { control, onClickGenerateTranslate } = useControlTranslate();
    useStartTranslate();


    return (
        <div className="h-screen flex flex-col">
            <TitleBar />

            <SectTranslate control={control} />

            <Dialogs />

            {/* <TopBar 
                 onClickGenerateTranslate={ onClickGenerateTranslate }
             /> */}

            {/* <div className="pb-6 h-screen overflow-auto">
                <div className="mx-4 pt-14">
                    <SectionTranslate control={control} type="defInjected" />

                    <SectionTranslate control={control} type="keyed" />
                </div>
            </div> */}

        </div>
    );
}

export default App;
