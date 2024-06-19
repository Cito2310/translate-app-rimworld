import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
    currentSearch: string;
    status: {
        isEmpty: boolean;
    }
}

const initialState: SearchState = {
    currentSearch: "",
    status: {
        isEmpty: true,
    }
}


export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {

        setCurrentSearch: ( state, action: { payload: string } ) => {
            state.currentSearch = action.payload;
            if ( action.payload !== "" ) state.status.isEmpty = false;
            if ( action.payload === "" ) state.status.isEmpty = true;
        },

        resetCurrentSearch: ( state ) => {
            state.currentSearch = "";
            state.status.isEmpty = true;
        },
    }
});

export const {
    resetCurrentSearch,
    setCurrentSearch,

} = searchSlice.actions;