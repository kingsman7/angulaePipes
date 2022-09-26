import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/interfaces';

@Component({
  selector: 'app-sorts',
  templateUrl: './sorts.component.html',
  styles: [
  ]
})
export class SortsComponent implements OnInit {

  orderBy: string = ''

  hero: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.azul
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.negro
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.rojo
    },
    {
      name: 'DareDevil',
      fly: false,
      color: Color.rojo
    },
    {
      name: 'Green Lantern',
      fly: true,
      color: Color.verde
    },
  ]
  isUp: number = 1;
  isOrder: boolean = false;

  order(value: string) {
    this.orderBy = value
    this.isOrder = !this.isOrder
    this.isUp = this.isOrder ? -1 : 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
