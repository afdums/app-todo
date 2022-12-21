import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck, OnInit{
  public taskList: Array<TaskList> = [
    /*{task: "Nova Linha", checked: false},
    {task: "Nova Linha 2", checked: true},
    {task: "Nova Linha 3", checked: false},*/
  ];

  ngOnInit(): void {
    this.taskList = JSON.parse(localStorage.getItem("list") || '[]');
  }
  
  public deleteItemTaskList(i: number){
    if(i == -1){
      const confirm = window.confirm("Você realmente deseja eliminar tudo?");
      if(confirm)
        this.taskList = [];
    }else{
      this.taskList.splice(i,1);
    }
  }

  public saveTask(taskAux:string){
    this.taskList.push({task: taskAux, checked: false})
  }


  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public validateInput(inputTask: string, i: number) {
    if(!inputTask.length){
      const confirm = window.confirm("Task em branco, deseja eliminar?");
      if(confirm){
        this.deleteItemTaskList(i);
      }
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

}
