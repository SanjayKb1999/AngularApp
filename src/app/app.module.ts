import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './MyComponent';
import { ForEachComponent } from './for-each/for-each.component';
import { Image } from './Image';
import { Product } from './Product';
import { Products } from './Products';
import { IfExampleComponent } from './if-example/if-example.component';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from './CustomDirective';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SortPipe } from './sort.pipe';
import { MyServiceComponent } from './my-service/my-service.component';
import { RevAlphabetsPipe } from './rev-alphabets.pipe';
import { directive2 } from './directive2';
import { EmployeeComponent } from './employee/employee.component';
import {  HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { PostExampleComponent } from './post-example/post-example.component';

@NgModule({
  declarations: [
    AppComponent ,CustomDirective,directive2, MyComponent, ForEachComponent,Image,Product, IfExampleComponent, PipeExampleComponent, SortPipe, MyServiceComponent, RevAlphabetsPipe, EmployeeComponent, ProductComponent, PostExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
