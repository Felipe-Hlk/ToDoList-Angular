import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  ngDoCheck() {
    this.setLocalStorage();
  }

  /*recebeu tasklist inserido na interface da pasta model, método para ser aplicado
  toda vez q for necessário a utilização desse código.*/
  taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]' );



  deleteButton(event: number) {
    this.taskList.splice(event, 1);
  }

  deleteAll() {
    // const confirm = window.confirm("Você realmente deseja Deletar tudo?");

    if (this.taskList) {
      this.taskList = [];
    }
  }

  setEmitTaskList(event: string) {

    this.taskList.push({ task: event, checked: false });

  }

  validationInput(event: string, index: number) {

    if (!event.length) {
      const confirm = window.confirm("Há uma tarefa vazia, deseja deletar?");

      if (confirm) {
        this.deleteButton(index);
      }
    }

  }

  setLocalStorage() {

    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }


}
