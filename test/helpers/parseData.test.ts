import { parseData } from './../../src/helpers/parseData';

import { mockDefInjectedForm, mockKeyedForm } from "../mocks/mockFormKeyedAndDefInjected"
import { mockDefInjected, mockKeyed } from "../mocks/mockKeyedAndDefInjected"
import { mockParsedData } from '../mocks/mockParsedData';


describe("test: src/helpers/parseData.ts",()=>{

    const dataParsed = parseData({
        DefInjected: mockDefInjected,
        DefInjectedForm: mockDefInjectedForm,
        Keyed: mockKeyed,
        KeyedForm: mockKeyedForm,
    })

    test("dataParsed is same to specific object", ()=>{
        expect(dataParsed).toEqual( mockParsedData )
    })
})
