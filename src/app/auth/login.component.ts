import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="form" class="card p-6" (ngSubmit)="submit()">
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input
            formControlName="username"
            class="input is-info"
            type="text"
            autocomplete="username"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left has-icons-right">
          <input
            formControlName="password"
            class="input is-info"
            type="password"
            autocomplete="current-password"
          />
          <span class="is-primary icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </div>
      </div>
      <div *ngIf="!!(errors$ | async)?.length" class="notification is-warning">
        <button class="delete" (click)="clearErrors($event)"></button>
        <ul>
          <li *ngFor="let error of errors$ | async">
            {{ error }}
          </li>
        </ul>
      </div>
      <button
        type="submit"
        class="button mg-medium is-primary"
        [disabled]="!form.valid"
      >
        Login
      </button>
    </form>
  `,
  styles: [
    `
      :host {
        display: grid;
        place-items: center;
        height: 100vh;
      }

      form {
        display: flex;
        flex-direction: column;
      }

      .card {
        margin-bottom: 20vh;
      }

      li {
        text-transform: capitalize;
      }

      input {
        margin-bottom: 20px;
        &::placeholder {
          text-transform: capitalize;
        }
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  errors$!: Observable<string[]>;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
    });

    this.errors$ = this.auth.authErrors$;
  }

  clearErrors($event: MouseEvent) {
    // Prevent form submit on close errors action
    $event.preventDefault();
    this.auth.clearErrors();
  }

  submit(): void {
    this.auth.login(this.form.value);
  }

  get username(): AbstractControl {
    return this.form.controls['username'];
  }

  get password(): AbstractControl {
    return this.form.controls['password'];
  }
}
