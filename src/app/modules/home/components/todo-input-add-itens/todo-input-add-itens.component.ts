import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.css']
})
export class TodoInputAddItensComponent {

  @Output() public newTask = new EventEmitter();

  public inputTask:string = "";

  public enviarTask(){
    if(this.inputTask != "") {
      this.newTask.emit(this.inputTask);
      this.inputTask = "";
    }
  }

}
