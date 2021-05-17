import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  template: `
    <form [formGroup]="form" class="card p-6" (ngSubmit)="submit()">
      <input
        placeholder="username"
        class="input is-info"
        type="text"
        autocomplete="off"
        name="username"
      />
      <input
        class="input is-info"
        type="password"
        placeholder="password"
        autocomplete="new-password"
        name="password"
      />
      <input
        class="input is-info"
        type="password"
        placeholder="confirm password"
        autocomplete="new-password"
        name="password2"
      />
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
      password2: '',
    });

    this.errors$ = this.auth.authErrors$;
  }

  submit(): void {
    const cred = this.form.value;
    delete cred.password2;
    this.auth.register(cred);
  }
}
