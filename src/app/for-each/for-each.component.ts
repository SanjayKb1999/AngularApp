import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';
import { Products } from '../Products';

@Component({
  selector: 'app-for-each',
  templateUrl: './for-each.component.html',
  styleUrls: ['./for-each.component.css']
})
export class ForEachComponent implements OnInit {
heroes = ['Sanjay','Mohanlal','Dileep','tovino'];
data = [new hero(1,'Tom'),
new hero(2,'Brad')];
prod = [new Products(1,'shoe'),new Products(2,'shirt'),new Products(5,'cap')];
  constructor() { }

  ngOnInit(): void {
  }

}
