import { useSetData } from "./hooks/useSetData";
import { useControlTranslate } from "./hooks/useControlTranslate";
import { TopButton } from "./components/TopButton";
import { SectionTranslate } from "./components/SectionTranslate";
import { usePrefix } from "./hooks/usePrefix";
import { TopBar } from "./components/TopBar";


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
            <TopBar 
                existBaseData={ existBaseData }
                existExcludeData={ existExcludeData }
                getPrefix={ getPrefix }
                onClickGenerateTranslate={ onClickGenerateTranslate }
                onSetTranslateFile={ onSetTranslateFile }
                registerPrefix={ registerPrefix }
                watchPrefix={ watchPrefix }
            />

            <div className="mx-4 pt-16">
                <SectionTranslate control={control} defInjected={defInjected} keyed={keyed} type="defInjected" />

                <SectionTranslate control={control} defInjected={defInjected} keyed={keyed} type="keyed" />
            </div>
        </div>
    );
}

export default App;
