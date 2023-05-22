import { Component } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent {
  arrPeople = [
    {name:'ti', age:"16"},
    {name:'teo', age:"14"},
    {name:'tun', age:"18"}
  ]

  removePersonByName(name: string){
    const index = this.arrPeople.findIndex(e=>e.name === name)
    this.arrPeople.splice(index, 1)
  }
}
