import { AppDispatch, RootState } from "../store";
import { controlLocalStorage } from "../../helpers";
import { setBase, setExclude } from "./";

export const startTranslateFile = ( type: "exclude" | "base" ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {

        const data = await window.electronAPI.readFileTranslate();
        if ( data === null ) return;
        
        controlLocalStorage("remove", "current-translate");
        

        if ( type === "base" ) {
            controlLocalStorage("set", "data-base", data);
            dispatch(setBase( data ));
        }

        if ( type === "exclude" ) {
            controlLocalStorage("set", "data-exclude", data);
            dispatch(setExclude( data ));
        }

    };
};