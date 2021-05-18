import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
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
          <span
            *ngIf="!username.errors && username.touched"
            class="icon has-text-success is-small is-right"
          >
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left">
          <input
            formControlName="username"
            class="input is-info"
            type="password"
            autocomplete="new-password"
            name="password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
          <span
            *ngIf="!username.errors && username.touched"
            class="icon has-text-success is-small is-right"
          >
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label" for="confirmPassword">Confirm Password</label>
        <div class="control has-icons-left">
          <input
            formControlName="confirmPassword"
            class="input is-info"
            type="password"
            autocomplete="new-password"
            name="confirmPassword"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
          <span
            *ngIf="!username.errors && username.touched"
            class="icon has-text-success is-small is-right"
          >
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <button class="button is-primary" type="submit" [disabled]="!form.valid">
        Register
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

      input {
        margin-bottom: 20px;
        &::placeholder {
          text-transform: capitalize;
        }
      }
    `,
  ],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  errors$!: Observable<string[]>;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
      confirmPassword: '',
    });

    this.errors$ = this.auth.authErrors$;
  }

  submit(): void {
    const cred = this.form.value;
    delete cred.password2;
    this.auth.register(cred);
  }

  get username(): AbstractControl {
    return this.form.controls['username'];
  }

  get password(): AbstractControl {
    return this.form.controls['password'];
  }

  get confirmPassword(): AbstractControl {
    return this.form.controls['confirmPassword'];
  }
}
