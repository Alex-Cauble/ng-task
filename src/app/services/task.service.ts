import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  readonly API_BASE = `${environment.API_URL}/api/task`;
  private taskSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(
    []
  );
  tasks$ = this.taskSubject.asObservable();

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_BASE}`);
  }

  searchTasks(filterDto: TaskFilterDTO): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_BASE}`);
  }
}
