import { getDefInjected } from './../../src/helpers/getDefInjected';

import { mockBaseData } from "../mocks/mockNormalData"
import { DefinjectedData } from '../../types/DefInjectedData';

describe("test: src/helpers/getDefInjected.ts",()=>{

    test('defInjectedParse expect array with 4 objects', () => {
        const defInjectedParse = getDefInjected(mockBaseData);

        expect( Array.isArray(defInjectedParse) ).toBe(true);
        expect( defInjectedParse.length ).toBe(4);
    })

    test('defInjectedParse expect objects with "type", "base", "text" and "original"', () => {
        const defInjectedParse = getDefInjected(mockBaseData);

        const containValidObjects = (arr: DefinjectedData[]) => arr.every( e => !!e.base && !!e.original && !!e.text && !!e.type );

        expect( containValidObjects( defInjectedParse ) ).toBe(true);
    })

})
