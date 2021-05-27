import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  template: `
    <form class="card p-4">
      <div class="grid-header">
        <div class="spacer-div"></div>
        <h4>Add Task</h4>
        <i (click)="doClose()" class="fas fa-times-circle fa-2x"></i>
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

      .grid-header {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
      }

      h4 {
        align-self: center;
        justify-self: center;
        font-weight: 600;
        font-size: 1.5rem;
      }

      i {
        padding: 10px;
        justify-self: end;
        align-self: start;
        color: red;
      }

      i:hover {
        color: inherit;
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
