import { ArrayOnly } from '../utils/utils';
import { readFileTranslate } from './../../electron/helpers/readFileTranslate';

describe("test: electron/readFileTranslate.ts",()=>{

    test("test_base: keyed expect 480 strings", ()=>{
        const baseTest = readFileTranslate("./test/testFiles/test_base.txt");

        expect(ArrayOnly("string", baseTest[2])).toBe(true)
        expect(baseTest[2].length).toBe(480)
    })

    test("test_base: defInjected expect 843 strings", ()=>{
        const baseTest = readFileTranslate("./test/testFiles/test_base.txt");

        expect(ArrayOnly("string", baseTest[3])).toBe(true)
        expect(baseTest[3].length).toBe(843)
    })


    test("test_exclude: keyed expect 445 strings", ()=>{
        const excludeTest = readFileTranslate("./test/testFiles/test_exclude.txt");

        expect(ArrayOnly("string", excludeTest[2])).toBe(true)
        expect(excludeTest[2].length).toBe(445)
    })

    test("test_exclude: defInjected expect 292 strings", ()=>{
        const excludeTest = readFileTranslate("./test/testFiles/test_exclude.txt");

        expect(ArrayOnly("string", excludeTest[2])).toBe(true)
        expect(excludeTest[3].length).toBe(292)
    })

})
