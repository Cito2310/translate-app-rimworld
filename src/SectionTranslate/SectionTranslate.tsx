import { Control, FieldValues } from "react-hook-form";
import { SectionDefInjected } from "./components/SectionDefInjected";
import { SectionKeyed } from "./components/SectionKeyed";
import { useAppSelector } from "../store";
import { GroupedVirtuoso, Virtuoso } from "react-virtuoso";
import { useMemo } from "react";
import { TypeDef, dataToDefInjectedScreen } from "./helpers/dataToDefInjectedScreen";
import { TextMain } from "./components/TextsForTranslate";
import { DefinjectedData } from "../../types/DefInjectedData";
import { KeyedData } from "../../types/KeyedData";
import { DefInjectedRow, KeyedRow } from "./components/RowTranslate";

interface props {
    control: Control<FieldValues, any>;
}

// const mockKeyed: KeyedData = {
//     name: "NAME-ERROR",
//     original: "ORIGINAL-ERROR"
// }

export const SectTranslate = ({ control }: props) => {
    const { data } = useAppSelector( state => state.dataTranslateNew );
    const { defInjected, keyed } = useAppSelector( state => state.dataTranslateNew.data );
    const defInjectedShow = useMemo(()=> dataToDefInjectedScreen(defInjected), [defInjected] )


    return (
        // <div className="bg-[#1f1f1f] grow overflow-auto text-[#ddd] px-4 pb-6">
        <div className="bg-[#1f1f1f] grow text-[#ddd]">
            {
                ( defInjected.length || keyed.length) && (
                    // @ts-ignore
                    <GroupedVirtuoso style={{height: "100%"}} data={[{isNull: true} as DefinjectedData,...defInjectedShow,{isNull: true} as KeyedData, ...keyed]} groupCounts={[defInjectedShow.length, keyed.length]} 
                        groupContent={(index) => <div className="bg-[#1f1f1f] border-b border-[#161616] pb-1"><TextMain text={ index ? "Keyed" : "DefInjected"} /></div>}
                        itemContent={(index, groupIndex, data) => <div className="px-4">{ 
                            // @ts-ignore
                            !groupIndex && !data.isNull ? <DefInjectedRow control={control} data={(data as TypeDef)} /> :
                            // @ts-ignore
                            groupIndex && !data.isNull ? <KeyedRow control={control} data={(data as KeyedData)} /> :
                            null }
                        </div>
                } />)
            }
            
            {/* <SectionDefInjected control={control} data={data} /> */}

            {/* <SectionKeyed control={control} data={data} /> */}
        </div>
    )
}