import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="form" class="card p-6" (ngSubmit)="submit()">
      <!-- <span style="font-size: 3em"><i class="fas fa-user"></i></span> -->
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

  submit(): void {
    this.auth.login(this.form.value);
  }
}
