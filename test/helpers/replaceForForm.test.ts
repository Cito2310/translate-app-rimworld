import { replaceForForm } from './../../src/helpers/replaceForForm';

const str1 = "Hello-world"
const str2 = "Hello--world"
const str3 = "Hello.world"

describe("test: src/helpers/replaceForForm.ts",()=>{
    test("expect Hello-world", ()=>{
        expect(replaceForForm(str1)).toBe(str1);
    })

    test("expect Hello--world", ()=>{
        expect(replaceForForm(str2)).toBe(str2);
    })

    test("expect Hello--world", ()=>{
        expect(replaceForForm(str3)).toBe(str2);
    })
})
