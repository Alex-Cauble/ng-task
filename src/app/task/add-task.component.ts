import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  template: `
    <form class="card p-2">
      <div class="row">
        <span class="grow"></span>
        <i (click)="doClose()" class="fas fa-window-close fa-lg"></i>
      </div>
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
      .row {
        display: flex;
      }

      i {
        padding: 10px;
        color: red;
      }

      i:hover {
        color: inherit;
      }

      .grow {
        flex: 1;
      }
    `,
  ],
})
export class AddTaskComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor() {}

  doClose(): void {
    this.close.emit('close');
  }

  ngOnInit(): void {}
}
