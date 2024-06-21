import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { dataTranslateSlice } from './product';
import { searchSlice } from './search';
import { dialogSlice } from './dialog';


export const store = configureStore({
    reducer: {
        dataTranslate: dataTranslateSlice.reducer,
        search: searchSlice.reducer,
        dialog: dialogSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;