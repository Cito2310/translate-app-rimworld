import { useSetData, useControlTranslate } from "./hooks";
import { SectionTranslate, TopBar } from "./components";


function App() {

    useSetData();

    const { control, onClickGenerateTranslate } = useControlTranslate();

    return (
        <div className="pb-6">
            <TopBar 
                onClickGenerateTranslate={ onClickGenerateTranslate }
            />

            <div className="mx-4 pt-14">
                <SectionTranslate control={control} type="defInjected" />

                <SectionTranslate control={control} type="keyed" />
            </div>
        </div>
    );
}

export default App;
