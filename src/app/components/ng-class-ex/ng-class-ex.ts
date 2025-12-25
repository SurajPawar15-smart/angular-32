import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class-ex',
  imports: [NgClass, FormsModule, CommonModule, NgStyle],
  templateUrl: './ng-class-ex.html',
  styleUrl: './ng-class-ex.css',
})
export class NgClassEx {
  div1BackColor: string = 'bg-danger';
  isActive: boolean = false;
  divClassName: string = '';
  colorName: string = '';
  myCss: any = {
    color: 'red',
    'background-color': 'green',
    'font-size': '55px',
  };
  studentList: any[] = [
    { name: 'Suraj ', surname: 'Pawar', grade: 'A', city: 'Pune', isActive: true },
    { name: 'Amit ', surname: 'Kulkarni', grade: 'B', city: 'Nagpur', isActive: false },
    { name: 'Priya ', surname: 'Sharma', grade: 'C', city: 'Mumbai', isActive: true },
    { name: 'Rahul ', surname: 'Patil', grade: 'D', city: 'Kolhapur', isActive: true },
    { name: 'Neha ', surname: 'Verma', grade: 'E', city: 'Nashik', isActive: false },
  ];
}
