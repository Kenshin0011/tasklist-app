import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from "@ionic/angular";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage {
  title = "タスク一覧";
  tasks: {name: string}[] = [
    { name: 'タスク1' },
    { name: 'タスク2' },
  ];
  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
  ) { }

  ionViewWillEnter() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  async changeTask(index: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'タスクの変更',
      buttons: [
        {
          text: '削除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
          }
        }, {
          text: '変更',
          icon: 'create',
          handler: () => {
            this._renameTask(index);
          }
        }, {
          text: '閉じる',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
        },
      ]
    });
    await actionSheet.present();
  }

  async _renameTask(index: number) {
    const prompt = await this.alertController.create({
      header: '変更後のタスク',
      inputs: [
        {
          name: 'task',
          placeholder: 'タスク',
          value: this.tasks[index].name,
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.tasks[index] = { name: data.task };
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
          }
        }
      ]
    });
    await prompt.present();
  }
}
