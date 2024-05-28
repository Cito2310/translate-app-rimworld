import { createSlice } from '@reduxjs/toolkit';
import { KeyedData } from '../../../types/KeyedData';
import { DefinjectedData } from '../../../types/DefInjectedData';

interface DataTranslateState {
    rawData: {
        base: string[][];
        exclude: string[][];
    },
    parsedData: {
        keyed: KeyedData[];
        defInjected: DefinjectedData[];
    },
    status: {
        existBase: boolean;
        existExclude: boolean;
        existKeyed: boolean;
        existdefInjected: boolean;
    }
}

const initialState: DataTranslateState = {
    rawData: {
        base: [],
        exclude: [],
    },
    parsedData: {
        keyed: [],
        defInjected: [],
    },
    status: {
        existBase: false,
        existExclude: false,
        existKeyed: false,
        existdefInjected: false,
    }
}


export const dataTranslateSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        setBase: ( state, action: { payload: string[][] } ) => {
            state.rawData.base = action.payload;
            state.status.existBase = true;
        },

        setExclude: ( state, action: { payload: string[][] } ) => {
            state.rawData.exclude = action.payload;
            state.status.existExclude = true;
        },

        setKeyed: ( state, action: { payload: KeyedData[] } ) => {
            state.parsedData.keyed = action.payload;
            state.status.existKeyed = true;
        },

        setDefInjected: ( state, action: { payload: DefinjectedData[] } ) => {
            state.parsedData.defInjected = action.payload;
            state.status.existdefInjected = true;
        },

        reset: ( state, action: { payload: DefinjectedData[] } ) => {
            state = initialState
        },

    }
});

export const { 
    setBase,
    setDefInjected,
    setExclude,
    setKeyed

} = dataTranslateSlice.actions;