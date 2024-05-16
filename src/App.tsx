import { useEffect, useState } from "react"
import { getKeyedTranslation } from "./helpers/getKeyedTranslation";
import { getDefInjected } from "./helpers/getDefInjected";
import { useSetData } from "./hooks/useSetData";
import { useForm, Controller } from "react-hook-form";


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

    const {register, watch, setValue, control} = useForm();

  return (
    <div className="App">
        <button onClick={onClickSetExcludeTranslate}>set exclude translate</button>
        { existExcludeData() && <p style={{ color: "green" }} >CARGADO</p> }

        <button onClick={onClickSetBaseTranslate}>set base translate</button>
        { existBaseData() && <p style={{ color: "green" }} >CARGADO</p> }

        <button onClick={onClickGenerateTranslate}>generate translate</button>




        <h2 className="font-semibold text-2xl">defInjected</h2>
        {
            defInjected.map(({ text, base }) => <Controller 
                name={`Def.${base}`}
                control={ control }
                defaultValue={ text }
                render={({ field }) => <input {...field} />}
            />)
        }



        <h2 className="font-semibold text-2xl">keyed</h2>
        {
            keyed.map(({ text, base }) => <Controller 
                name={`Keyed.${base}`}
                control={ control }
                defaultValue={ text }
                render={({ field }) => <input {...field} />}
            />)
        }

        <code>{ JSON.stringify(watch()) }</code>
    </div>
  );
}

export default App;
