import { useState } from "react"
import { getKeyedTranslation } from "./helpers/getKeyedTranslation";
import { getDefInjected } from "./helpers/getDefInjected";


function App() {

//   const onClickReadFileTranslate = async() => {
//     console.log(await window.electronAPI.readFileTranslate())
//   }

    const [baseData, setBaseData] = useState<string[][]>([]);
    const [excludeData, setExcludeData] = useState<string[][]>([]);


    const [dataWithException, setDataWithException] = useState<string[][]>([]);

  const onClickSetExcludeTranslate = async() => {
    const data = await window.electronAPI.readFileTranslate();
    setExcludeData( data );
  }
  
  const onClickSetBaseTranslate = async() => {
    const data = await window.electronAPI.readFileTranslate();
    setBaseData( data );
  }

  const onClickSetExcludeData = async() => {
    const data = await window.electronAPI.getDataWithException(baseData, excludeData)
    setDataWithException( data );
  }

  const onClickGenerateTranslate = async() => {
    const keyed = getKeyedTranslation( dataWithException );
    const defInjected = getDefInjected( dataWithException );
    console.log( keyed, defInjected )
    await window.electronAPI.generateFilesTranslate(keyed, defInjected, "Hussar")
  }

  return (
    <div className="App">
        <button onClick={onClickSetExcludeTranslate}>set exclude translate</button>
        {/* <code>{JSON.stringify( excludeData )}</code> */}
        <hr/>

        <button onClick={onClickSetBaseTranslate}>set base translate</button>
        {/* <code>{JSON.stringify( baseData )}</code> */}
        <hr/>

        <button onClick={onClickSetExcludeData}>set data with exclusion</button>
        <code>{JSON.stringify( dataWithException )}</code>
        <hr/>

        <button onClick={onClickGenerateTranslate}>generate translate</button>
    </div>
  );
}

export default App;
