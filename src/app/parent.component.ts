import { Component } from "@angular/core";
@Component({
  selector: 'app-parent',
  template: `
    <h3>{{ value }}</h3>
    <app-child (myClick)="changeValue($event)"></app-child>
  `
})

export class parentComponent {
  value = 0;
  changeValue(isAdd: boolean){
    if(isAdd){
      this.value++;
    }else{
      this.value--;
    }
  }
}
