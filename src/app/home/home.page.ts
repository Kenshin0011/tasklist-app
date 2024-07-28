import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})
export class HomePage {
  title = "タスク登録";
  task!: string;
  tasks: {name: string}[] = [
    { name: 'タスク1' },
    { name: 'タスク2' },
  ];
  constructor() {}

  addTask(): void {
    this.tasks.push({
      name: this.task,
    });
    this.task = '';
  }
}
