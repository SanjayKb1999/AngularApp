import { Injectable } from "@angular/core"
@Injectable({ 
    providedIn:'root'
})
export class MyService{
    getName():string{
        return "WELCOME ANGULAR";
    }
}