import { createSlice } from '@reduxjs/toolkit';

interface DialogState {
    currentDialog: DialogTypes;
    noneDialog: boolean;
}

type DialogTypes = "" | "newProject"

const initialState: DialogState = {
    currentDialog: "newProject",
    noneDialog: false,
}


export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {

        setNoneDialog: ( state ) => {
            state.noneDialog = true;
            state.currentDialog = "";
        },

        setDialog: ( state, action: { payload: DialogTypes } ) => {
            state.noneDialog = false;
            state.currentDialog = action.payload;
        },
    }
});

export const {
    setDialog,
    setNoneDialog,

} = dialogSlice.actions;