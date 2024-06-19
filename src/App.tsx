import { useSetData, useControlTranslate } from "./hooks";
import { SectionTranslate, TopBar } from "./components";
import { TitleBar } from "./TitleBar/TitleBar";


function App() {

    useSetData();

    const { control, onClickGenerateTranslate } = useControlTranslate();

    return (
        <div>
            <TitleBar />
            <TopBar 
                onClickGenerateTranslate={ onClickGenerateTranslate }
            />
            <div className="pb-6 h-screen overflow-auto">

                <div className="mx-4 pt-14">
                    <SectionTranslate control={control} type="defInjected" />

                    <SectionTranslate control={control} type="keyed" />
                </div>
            </div>
        </div>
    );
}

export default App;
