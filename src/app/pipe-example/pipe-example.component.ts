import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
name = " SONATA";
day =  new Date();
array =[10,30,50,60];
price= 500;
alpha=['a','b','c'];
  constructor() { }

  ngOnInit(): void {
  }

}
