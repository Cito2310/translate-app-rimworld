import { originalOnlyText } from '../../src/helpers/originalOnlyText';

describe("test: src/helpers/originalOnlyText.ts",()=>{
    const testOriginal = "VFE_Animal 'There ´is´ Animal' (English file: Animal.xml:40)";
    
    test("testOriginal expect 'There is Animal'", () => {
        expect( originalOnlyText(testOriginal) ).toBe("'There ´is´ Animal'");
    })

})
