import { getKeyedTranslation } from './../../src/helpers/getKeyedTranslation';

import { mockBaseData } from "../mocks/mockNormalData"
import { KeyedData } from '../../types/KeyedData';

describe("test: src/helpers/getKeyedTranslation.ts",()=>{

    test('defInjectedParse expect array with 4 objects', () => {
        const keyedParse = getKeyedTranslation(mockBaseData);

        expect( Array.isArray(keyedParse) ).toBe(true);
        expect( keyedParse.length ).toBe(3);
    })

    test('keyedParse expect objects with "type", "base", "text" and "original"', () => {
        const keyedParse = getKeyedTranslation(mockBaseData);

        const containValidObjects = (arr: KeyedData[]) => arr.every( e => !!e.name && !!e.original && !!e.text );

        expect( containValidObjects( keyedParse ) ).toBe(true);
    })

})
