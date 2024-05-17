import { useSetData } from "./hooks/useSetData";
import { SectionDefInjected } from "./components/SectionDefInjected";
import { SectionKeyed } from "./components/SectionKeyed";
import { useControlTranslate } from "./hooks/useControlTranslate";
import { TopButton } from "./components/TopButton";


function App() {

    const {
        onSetTranslateFile, 

        existBaseData,
        existExcludeData,

        defInjected,
        keyed,
    } = useSetData();

    const { control, watch, onClickGenerateTranslate } = useControlTranslate();


    return (
        <div className="App">
            <div className="flex gap-6">
                <TopButton 
                    isLoad={ existExcludeData() } 
                    onClick={ ()=>onSetTranslateFile("exclude") } 
                    label="Establecer translate-exclude" />

                <TopButton 
                    isLoad={ existBaseData() } 
                    onClick={ ()=>onSetTranslateFile("base") } 
                    label="Establecer translate-base" />

                <TopButton 
                    onClick={ onClickGenerateTranslate } 
                    label="Generar traducción" />
            </div>


            <SectionDefInjected control={control} defInjected={defInjected} />

            <SectionKeyed control={control} keyed={keyed} />

            <code>{ JSON.stringify(watch()) }</code>
        </div>
    );
}

export default App;
