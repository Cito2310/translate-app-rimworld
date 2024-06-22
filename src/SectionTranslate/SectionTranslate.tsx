import { Control, FieldValues, UseFormGetValues } from "react-hook-form";
import { RootState, useAppSelector } from "../store";
import { useMemo } from "react";
import { dataToDefInjectedScreen } from "./helpers/dataToDefInjectedScreen";
import { DefInjectedRow, KeyedRow } from "./components/RowTranslate";
import { TextMain } from "./components/TextsForTranslate";
import { createSelector } from "@reduxjs/toolkit";

interface props {
    control: Control<FieldValues, any>;
    getValues: UseFormGetValues<FieldValues>;
}


export const SectionTranslate = ({ control, getValues }: props) => {
    const { defInjected, keyed } = useAppSelector(state => state.dataTranslate.data);
    const defInjectedShow = useMemo(()=> dataToDefInjectedScreen(defInjected), [defInjected] );


    return (
        <div className="bg-[#1f1f1f] grow text-[#ddd] px-4 overflow-auto pb-10">
            {
                defInjectedShow.length && <>
                    <TextMain text="DefInjected" />
                    {defInjectedShow.map( data => <DefInjectedRow key={data.name} getValues={getValues} control={control} data={data} /> )}
                </>
            }

            {
                keyed.length && <>
                    <TextMain text="Keyed" />
                    {keyed.map( data => <KeyedRow key={data.name}  getValues={getValues} control={control} data={data} /> )}
                </>
            }
        </div>
    )
}