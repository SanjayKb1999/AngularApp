import { numberTest } from "./numberTest";
fdescribe("numberTest",()=>{
    it ('should return 0 if input is negative',()=>{
        const result = numberTest(-1);
        expect(result).toBe(0);
    });
    it('should incremnet if value is positive',()=>{
        const result=numberTest(2);
        expect(result).toBe(3);
        
    });
});