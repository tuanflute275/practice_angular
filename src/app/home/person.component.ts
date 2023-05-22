import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class personComponent {
  @Input() name?: string;
  @Input() age?: string;
  @Output() removePeople = new EventEmitter<string>()

  removeByClick() {
    this.removePeople.emit(this.name)
  }
}
