import { useAppSelector } from "../store";
import { GroupedVirtuoso } from "react-virtuoso";
import { useMemo } from "react";
import { TypeDef, dataToDefInjectedScreen } from "./helpers/dataToDefInjectedScreen";
import { TextMain } from "./components/TextsForTranslate";
import { DefinjectedData } from "../../types/DefInjectedData";
import { KeyedData } from "../../types/KeyedData";
import { DefInjectedRow, KeyedRow } from "./components/RowTranslate";
import { useControlTranslate } from "../hooks";



export const SectionTranslateVirtuoso = () => {
    const { defInjected, keyed } = useAppSelector( state => state.dataTranslate.data );
    const defInjectedShow = useMemo(()=> dataToDefInjectedScreen(defInjected), [defInjected] )

    const { control, getValues } = useControlTranslate();

    return (
        <div className="bg-[#1f1f1f] grow text-[#ddd]">
            {
                ( defInjected.length || keyed.length) && (
                    <GroupedVirtuoso 
                        style={{height: "100%"}} 
                        // @ts-ignore
                        data={[{isNull: true} as DefinjectedData,...defInjectedShow,{isNull: true} as KeyedData, ...keyed]} 
                        groupCounts={[defInjectedShow.length, keyed.length]} 


                        groupContent={(index) => <div className="bg-[#1f1f1f] border-b border-[#161616] pb-1 px-4"><TextMain text={ index ? "Keyed" : "DefInjected"} /></div>}


                        itemContent={(index, groupIndex, data) => <div className="px-4">{ 
                            // @ts-ignore
                            !groupIndex && !data.isNull ? <DefInjectedRow getValues={getValues} control={control} data={(data as TypeDef)} /> :
                            // @ts-ignore
                            groupIndex && !data.isNull ? <KeyedRow getValues={getValues} control={control} data={(data as KeyedData)} /> :
                            null }
                        </div>}

                        
                        components={{Footer: ()=><div className="pb-6"></div>}}
                 />)
            }
        </div>
    )
}