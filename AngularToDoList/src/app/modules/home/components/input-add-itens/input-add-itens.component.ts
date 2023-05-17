import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.scss']
})
export class InputAddItensComponent {

  @Output() emitTaskList = new EventEmitter();

  addItemTaksList: string = "";

  submitItemTaksList() {

    this.addItemTaksList = this.addItemTaksList.trim();

    if (this.addItemTaksList) {
      this.emitTaskList.emit(this.addItemTaksList);
      this.addItemTaksList = "";
    }
  }

}
