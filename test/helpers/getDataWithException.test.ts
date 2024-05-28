import { getDataWithException } from './../../src/helpers/getDataWithException';

import { mockBaseData, mockExcludeData } from "../mocks/mockNormalData"
import { ArrayOnly } from '../utils/utils';

describe("test: src/helpers/getDataWithException.ts",()=>{

    test('dataWithoutException keyed expect 2 strings', () => {
        const dataWithoutException = getDataWithException(mockBaseData, mockExcludeData);

        expect(ArrayOnly("string", dataWithoutException[2])).toBe(true)
        expect( dataWithoutException[2].length ).toBe(2)
    })

    test('dataWithoutException defInjected expect 3 strings', () => {
        const dataWithoutException = getDataWithException(mockBaseData, mockExcludeData);

        expect(ArrayOnly("string", dataWithoutException[3])).toBe(true)
        expect( dataWithoutException[3].length ).toBe(3)
    })

})
