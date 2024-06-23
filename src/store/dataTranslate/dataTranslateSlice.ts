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
    getValues: any;
}

const initialState: DataTranslateState = {
    name: "",
    data: {
        keyed: [],
        defInjected: [],
    },
    existData: false,
    getValues: null,
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

        setGetValues: ( state, action: { payload: any } ) => {
            state.getValues = action.payload;
        }

    }
});

export const { 
    setDataTranslate,
    changeName,
    setGetValues

} = dataTranslateSlice.actions;