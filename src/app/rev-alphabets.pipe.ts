import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revAlphabets'
})
export class RevAlphabetsPipe implements PipeTransform {

  transform(value:any[],args:string):any{
    if(args==='reverse'){
      return value.reverse();
    
  }
}
}

