import { createSlice } from '@reduxjs/toolkit';
import { KeyedData } from '../../../types/KeyedData';
import { DefinjectedData } from '../../../types/DefInjectedData';

export interface DataTranslateState {
    name: string;
    data: {
        keyed: KeyedData[];
        defInjected: DefinjectedData[];
    };
    existData: boolean;
}

const initialState: DataTranslateState = {
    name: "",
    data: {
        keyed: [],
        defInjected: [],
    },
    existData: false,
}


export const dataTranslateSlice = createSlice({
    name: 'dataTranslate',
    initialState,
    reducers: {

        changeName: ( state, action: { payload: string } ) => {
            state.name = action.payload;
        },

        setDataTranslate: ( state, action: { payload: { data: { keyed: KeyedData[]; defInjected: DefinjectedData[] }, name: string } } ) => {
            state.name = action.payload.name;
            state.data = action.payload.data;
            state.existData = true;
        },

    }
});

export const { 
    setDataTranslate,
    changeName,

} = dataTranslateSlice.actions;