import { useSetData } from "./hooks/useSetData";
import { useControlTranslate } from "./hooks/useControlTranslate";
import { SectionTranslate } from "./components/SectionTranslate";
import { usePrefix } from "./hooks/usePrefix";
import { TopBar } from "./components/TopBar";


function App() {

    useSetData();

    const { control, onClickGenerateTranslate } = useControlTranslate();

    const { getPrefix, registerPrefix, watchPrefix,  } = usePrefix();


    return (
        <div className="pb-6">
            <TopBar 
                getPrefix={ getPrefix }
                onClickGenerateTranslate={ onClickGenerateTranslate }
                registerPrefix={ registerPrefix }
                watchPrefix={ watchPrefix }
            />

            <div className="mx-4 pt-14">
                <SectionTranslate control={control} type="defInjected" />

                <SectionTranslate control={control} type="keyed" />
            </div>
        </div>
    );
}

export default App;
