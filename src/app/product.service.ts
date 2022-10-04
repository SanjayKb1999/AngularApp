import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './prod';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url:string = "http://localhost:8084/product";

  constructor(private http:HttpClient) { }

getProduct(): Observable<IProduct[]>{
  return this.http.get<IProduct[]>(this.url);
}

}
