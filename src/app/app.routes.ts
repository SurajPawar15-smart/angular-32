import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { DataTypes } from './components/data-types/data-types';
import { NgClassEx } from './components/ng-class-ex/ng-class-ex';
import { NgForEx } from './components/ng-for-ex/ng-for-ex';
import { NgIfEx } from './components/ng-if-ex/ng-if-ex';
import { BasicSignal } from './components/basic-signal/basic-signal';
import { GetAPIEx } from './components/get-apiex/get-apiex';

export const routes: Routes = [
  { path: 'databinding', component: DataBinding },
  { path: 'data-types', component: DataTypes },
  { path: 'ng-if-ex', component: NgIfEx },
  { path: 'ng-for-ex', component: NgForEx },
  { path: 'ng-class-ex', component: NgClassEx },
  { path: 'app-basic-signal', component: BasicSignal },
  { path: 'get-api', component: GetAPIEx },
];
