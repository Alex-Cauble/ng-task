import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import TaskFilterDTO from '../types/task-filter.dto';
import Task from 'src/app/class/task.class';
import { TaskStatus } from '../types/task-status.enum';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  readonly API_BASE = `${environment.API_URL}/task`;

  // prettier-ignore
  private taskSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([
    {
      id: 1,
      title: 'Test Title',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam error nesciunt incidunt voluptatibus aperiam expedita `,
      status: TaskStatus.OPEN,
    },
    {
      id: 2,
      title: 'Testier Title',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam error nesciunt incidunt voluptatibus aperiam expedita `,
      status: TaskStatus.OPEN,
    },
  ]);
  public tasks$ = this.taskSubject.asObservable();

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_BASE}`);
  }

  searchTasks(dto: TaskFilterDTO = {}): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_BASE}`, { params: { ...dto } });
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API_BASE, task);
  }

  changeTaskStatus(id: number, status: TaskStatus): Observable<Task> {
    return this.http.post<Task>(`${this.API_BASE}/${id}/status`, { status });
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE}/${id}`);
  }
}
