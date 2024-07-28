import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})
export class HomePage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  title = "タスク登録";
  tasks: {name: string}[] = [
    { name: 'タスク1' },
    { name: 'タスク2' },
  ];
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
