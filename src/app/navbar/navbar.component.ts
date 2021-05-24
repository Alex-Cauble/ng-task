import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar is-primary is-light">
      <div class="navbar-start">
        <a (click)="showAddTask()" class="navbar-end navbar-item">
          <span>Add Tasks</span>
          <i class="fas fa-plus"></i>
        </a>

        <a (click)="showSearchTask()" class="navbar-end navbar-item">
          <span>Search Tasks</span>
          <i class="fas fa-search"></i>
        </a>
      </div>

      <div class="navbar-end">
        <a (click)="logout()" class="navbar-end navbar-item">
          <span>Sign Out</span>
          <i class="fas fa-sign-out-alt"></i>
        </a>
      </div>
    </nav>
  `,
  styles: [
    `
      a {
        color: white;
      }

      i {
        padding: 10px;
      }
    `,
  ],
})
export class NavbarComponent {
  @Output() showAddTaskEvent = new EventEmitter();
  @Output() showSearchTaskEvent = new EventEmitter();

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logOut();
  }

  showAddTask() {
    this.showAddTaskEvent.emit('addTask');
  }

  showSearchTask() {
    this.showSearchTaskEvent.emit('searchTask');
  }
}
