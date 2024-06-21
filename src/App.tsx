import { useSetData, useControlTranslate } from "./hooks";
import { SectionTranslate, TopBar } from "./components";
import { TitleBar } from "./TitleBar/TitleBar";
import { SectTranslate } from "./SectionTranslate/SectionTranslate";
import { Dialogs } from "./Dialogs/Dialogs";


function App() {

    useSetData();

    const { control, onClickGenerateTranslate } = useControlTranslate();

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
