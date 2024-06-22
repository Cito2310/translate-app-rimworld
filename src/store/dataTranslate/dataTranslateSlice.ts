import { createSlice } from '@reduxjs/toolkit';
import { KeyedData } from '../../../types/KeyedData';
import { DefinjectedData } from '../../../types/DefInjectedData';

export interface DataTranslateState {
    name: string;
    data: {
        keyed: KeyedData[];
        defInjected: DefinjectedData[];
    },
}

const initialState: DataTranslateState = {
    name: "",
    data: {
        keyed: [],
        defInjected: [],
    },
}


export const dataTranslateSlice = createSlice({
    name: 'dataTranslate',
    initialState,
    reducers: {

        setDataTranslate: ( state, action: { payload: { data: { keyed: KeyedData[]; defInjected: DefinjectedData[] }, name: string } } ) => {
            state.name = action.payload.name;
            state.data = action.payload.data;
        },

    }
});

export const { 
    setDataTranslate,

} = dataTranslateSlice.actions;