import { useSetData } from "./hooks/useSetData";
import { SectionDefInjected } from "./components/SectionDefInjected";
import { SectionKeyed } from "./components/SectionKeyed";
import { useControlTranslate } from "./hooks/useControlTranslate";


function App() {

    const { 
        onClickSetBaseTranslate, 
        onClickSetExcludeTranslate,

        existBaseData,
        existExcludeData,

        defInjected,
        keyed,
    } = useSetData();

    const { control, watch, onClickGenerateTranslate } = useControlTranslate();


    return (
        <div className="App">
            <button onClick={onClickSetExcludeTranslate}>set exclude translate</button>
            { existExcludeData() && <p style={{ color: "green" }} >CARGADO</p> }

            <button onClick={onClickSetBaseTranslate}>set base translate</button>
            { existBaseData() && <p style={{ color: "green" }} >CARGADO</p> }

            <button onClick={onClickGenerateTranslate}>generate translate</button>


            <SectionDefInjected control={control} defInjected={defInjected} />

            <SectionKeyed control={control} keyed={keyed} />

            <code>{ JSON.stringify(watch()) }</code>
        </div>
    );
}

export default App;
