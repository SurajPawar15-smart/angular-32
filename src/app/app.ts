import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Admin } from './components/admin/admin';
// import { User } from './components/user/user';
import { DataTypes } from './components/data-types/data-types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataTypes],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-32');
}
