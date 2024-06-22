import { createSlice } from '@reduxjs/toolkit';

interface DialogState {
    currentDialog: DialogTypes;
    noneDialog: boolean;
}

type DialogTypes = "" | "newProject" | "preferences" | "settingProject"

const initialState: DialogState = {
    currentDialog: "",
    noneDialog: true,
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