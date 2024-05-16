import { useState } from "react"
import { getKeyedTranslation } from "./helpers/getKeyedTranslation";
import { getDefInjected } from "./helpers/getDefInjected";
import { useSetData } from "./hooks/useSetData";


function App() {

    const { 
        onClickGenerateTranslate, 
        onClickSetBaseTranslate, 
        onClickSetExcludeTranslate,

        existBaseData,
        existExcludeData,

        defInjected,
        keyed,
        

    } = useSetData();


  return (
    <div className="App">
        <button onClick={onClickSetExcludeTranslate}>set exclude translate</button>
        { existExcludeData() && <p style={{ color: "green" }} >CARGADO</p> }
        <hr/>

        <button onClick={onClickSetBaseTranslate}>set base translate</button>
        { existBaseData() && <p style={{ color: "green" }} >CARGADO</p> }
        <hr/>

        <button onClick={onClickGenerateTranslate}>generate translate</button>
    </div>
  );
}

export default App;
