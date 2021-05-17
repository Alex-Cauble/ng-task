import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="form" class="card p-6" (ngSubmit)="submit()">
      <input
        formControlName="username"
        type="text"
        class="input is-info"
        placeholder="username"
        autocomplete="username"
      />
      <input
        type="password"
        formControlName="password"
        class="input is-info"
        placeholder="password"
        autocomplete="current-password"
      />
      <button class="button is-primary" type="submit">Login</button>
    </form>
  `,
  styles: [
    `
      :host {
        display: grid;
        place-items: center;

        form {
          display: grid;
          flex-direction: column;

          input {
            margin-bottom: 20px;
          }
        }
      }
    `,
  ],
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    username: '',
    password: '',
  });

  constructor(private fb: FormBuilder) {}

  submit(): void {
    console.log(this.form.value);
  }
}
