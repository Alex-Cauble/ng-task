import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import User from '../class/user';
import CredentialsDTO from './dto/Credentials.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_AUTH_BASE = `${environment.API_AUTH_BASE}`;

  private userSubject: BehaviorSubject<User | null>;

  public user$: Observable<User | null>;

  private authErrors: BehaviorSubject<string[]>;
  public authErrors$: Observable<string[]>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User | null>(null);

    this.user$ = this.userSubject.asObservable();

    this.authErrors = new BehaviorSubject<string[]>([]);
    this.authErrors$ = this.authErrors.asObservable();
  }

  login(credentials: CredentialsDTO): void {
    this.http
      .post<{ accessToken: string }>(`${this.API_AUTH_BASE}/login`, credentials)
      .pipe(tap(({ accessToken }) => this.storeToken(accessToken)))
      .subscribe({
        next: ({ accessToken }) => this.storeToken,
        error: (err: Error) => console.log(err),
      });
  }

  register(credentials: CredentialsDTO): void {
    this.http
      .post<{ accessToken: string }>(
        `${this.API_AUTH_BASE}/sign-up`,
        credentials
      )
      .pipe(tap(({ accessToken }) => this.storeToken(accessToken)))
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: (err: Error) => console.log(err),
      });
  }

  public get user(): User | null {
    return this.userSubject.value;
  }

  storeToken(token: string) {
    localStorage.setItem('access_token', token);
  }
}
