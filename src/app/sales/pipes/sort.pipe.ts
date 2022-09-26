import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/interfaces';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(hero: Hero[], orderBy: string, order:number): Hero[] {

    switch (orderBy) {
      case 'name':
        return hero.sort((a, b) => a.name > b.name ? (order) : (-1 * order))
      case 'color':
        return hero.sort((a, b) => a.fly > b.fly ? (order) : (-1 * order))
      case 'fly':
        return hero.sort((a, b) => a.color > b.color ? (-1 * order) : (order))
      default:
        return hero
    }

  }
}