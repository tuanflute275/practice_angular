import { Component, EventEmitter, Output } from "@angular/core";
@Component({
  selector: 'app-child',
  template: `
  <button (click)="addForParent()">ADD</button>
  <button (click)="subForParent()">SUB</button>
  `
})

export class childComponent {
  @Output() myClick = new EventEmitter<boolean>();
  addForParent(){
    this.myClick.emit(true);
  }
  subForParent(){
    this.myClick.emit(false);
  }
}
