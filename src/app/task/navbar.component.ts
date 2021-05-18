import { Component, OnInit } from '@angular/core';

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
      i {
        padding: 10px;
      }

      a {
        display: inline-block;
        /* border-bottom: 3px solid white; */
      }

      a > span {
        opacity: 0;
      }

      a:hover > span {
        transition: opacity 300 ease-in-out;
        opacity: 1;

        transition: transform 300 ease-in-out;
        transform: scaleX(0);
      }

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  constructor() {}

  logout() {}

  showAddTask() {}

  showSearchTask() {}
}
