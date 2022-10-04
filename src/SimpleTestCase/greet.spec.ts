import { greet } from "./greet";
fdescribe("greet",()=>{
    it('should include the name in the message',()=>{
        const name= 'Hari';
        const name1='shy';
        expect(greet(name)).toContain(name);
    });
});