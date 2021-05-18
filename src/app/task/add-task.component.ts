import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  template: `
    <form class="card p-4">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Title" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="email" placeholder="Details" />
        </div>
      </div>
      <button class="button is-button is-primary is-fullwidth">Add Task</button>
    </form>
  `,
  styles: [
    `
      form {
        display: block;
        max-width: 800px;
        margin: 25px auto;
      }
    `,
  ],
})
export class AddTaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
