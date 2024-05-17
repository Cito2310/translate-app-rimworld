import { useSetData } from "./hooks/useSetData";
import { useControlTranslate } from "./hooks/useControlTranslate";
import { TopButton } from "./components/TopButton";
import { SectionTranslate } from "./components/SectionTranslate";
import { usePrefix } from "./hooks/usePrefix";
import { TopSection } from "./components/TopSection";


function App() {

    const {
        onSetTranslateFile, 

        existBaseData,
        existExcludeData,

        defInjected,
        keyed,
    } = useSetData();

    const { control, watch, onClickGenerateTranslate } = useControlTranslate({ DefInjected: defInjected, Keyed: keyed });

    const { getPrefix, registerPrefix, watchPrefix,  } = usePrefix();


    return (
        <div className="bg-slate-200 pb-6">
            <TopSection 
                existBaseData={ existBaseData }
                existExcludeData={ existExcludeData }
                getPrefix={ getPrefix }
                onClickGenerateTranslate={ onClickGenerateTranslate }
                onSetTranslateFile={ onSetTranslateFile }
                registerPrefix={ registerPrefix }
                watchPrefix={ watchPrefix }
            />

            <div>
                <SectionTranslate control={control} defInjected={defInjected} keyed={keyed} type="defInjected" />

                <SectionTranslate control={control} defInjected={defInjected} keyed={keyed} type="keyed" />
            </div>
        </div>
    );
}

export default App;
