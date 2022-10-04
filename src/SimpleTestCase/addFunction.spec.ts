import { addFunction } from "./addFunction";
fdescribe("addFunction",()=>{
    it ('should return addition of input numbers',()=>{
        const result = addFunction(2,4);
        expect(result).toBe(6);
    });
    it ('should return addition of input numbers',()=>{
        const result = addFunction(9,4);
        expect(result).toBe(13);
    });
   
});