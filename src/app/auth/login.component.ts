import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input
        formControlName="username"
        type="text"
        placeholder="username"
        autocomplete="username"
      />
      <input
        type="password"
        formControlName="password"
        placeholder="password"
        autocomplete="current-password"
      />
      <button type="submit">Login</button>
    </form>
  `,
  styles: [
    `
      :host {
        display: grid;
        place-items: center;

        form {
          display: flex;
          flex-direction: column;

          input {
            margin-bottom: 20px;
          }
        }
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  form: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }

  submit(): void {
    console.log(this.form.value);
  }
}
