import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  lowerCaseName: string = 'angel'
  upperCaseName: string = 'ANGEL'
  fullName     : string = 'AngEL BaRRrIOS'

  date: Date = new Date()
}
