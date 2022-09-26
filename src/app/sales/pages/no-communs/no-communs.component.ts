import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-communs',
  templateUrl: './no-communs.component.html',
  styles: [
    `.pl-3 {
      padding-left: 1rem;
  }	`
  ]
})
export class NoCommunsComponent  {

  name  : string = 'Veronica'
  gender: string = 'female'

  inviteMap: any = {
    'male'   : 'invitarlo',
    'female' : 'invitarla'
  }

  person:{[key: string]: string} = {
    fullname: "Angel Barrios",
    age: "36",
    address:"Venezuela"
  }
  
  clients: string[] = ['Maria','']
  clientsSlice: string[] = ['Maria','Jose', 'Helena', 'Veronica', 'Angel']

  pluralMap : {[k: string]: string} = {
    '=0':'no temenos clientes' ,'=1':' un cliente esperando', '=2':' 2 clientes', 'other':'# clientes esperando'
  }

  myObservable = interval(1000)

  changeClient(): void {
    this.name === 'Veronica' ? this.name = 'Angel' : this.name = 'Veronica'
    this.gender === 'female' ? this.gender = 'male' : this.gender = 'female'
  }

  addClient(): void {
    this.clients.push('')
  }

  delClient(): void {
    this.clients.pop()
  }

  myPromise = new Promise((resolve,reject) => {
    setTimeout(()=>{
      resolve('Respuesta de la promesa')
    },5000)
  })

}
