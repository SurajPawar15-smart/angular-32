import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { Admin } from './components/admin/admin';
// import { User } from './components/user/user';
//import { DataTypes } from './components/data-types/data-types';
// import { DataBinding } from './components/data-binding/data-binding';
// import { NgIfEx } from './components/ng-if-ex/ng-if-ex';
// import { NgForEx } from './components/ng-for-ex/ng-for-ex';
import { NgClassEx } from './components/ng-class-ex/ng-class-ex';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClassEx, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-32');
}
