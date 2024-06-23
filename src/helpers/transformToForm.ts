import { DefinjectedData } from '../../types/DefInjectedData';
import { KeyedData } from '../../types/KeyedData';
import { DefInjectedForm, FormTranslate, KeyedForm } from './../../types/FormTranslate';

export const transformToForm = (data: { defInjected: DefinjectedData[], keyed: KeyedData[] }): FormTranslate => {
    return {
        defInjected: data.defInjected.reduce<DefInjectedForm>((prev, curr)=>{
            let newPrev = structuredClone(prev);

            if ( newPrev[curr.type] === undefined ) { // Si no existe el type en prev hace lo siguiente
                newPrev[curr.type] = {};
                newPrev[curr.type][curr.base.replaceAll(".","--")] = curr.text;
            }
            
            if ( newPrev[curr.type] !== undefined ) {
                newPrev[curr.type][curr.base.replaceAll(".","--")] = curr.text;
            }

            return newPrev;
        }, {}),

        keyed: data.keyed.reduce<KeyedForm>((prev, curr)=>{
            let newPrev = structuredClone(prev);

            newPrev[curr.name.replaceAll(".","--")] = curr.text;

            return newPrev;
        }, {})
    }
}