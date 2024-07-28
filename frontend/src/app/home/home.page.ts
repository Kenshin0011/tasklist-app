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

  ionViewWillEnter() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  addTask(): void {
    this.tasks.push({
      name: this.task,
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.task = '';
  }
}
