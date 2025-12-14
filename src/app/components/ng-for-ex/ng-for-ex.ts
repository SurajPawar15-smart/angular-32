import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-for-ex',
  imports: [NgFor, FormsModule],
  templateUrl: './ng-for-ex.html',
  styleUrl: './ng-for-ex.css',
})
export class NgForEx {
  cityList: string[] = ['pune', 'mumbai', 'chennai', 'nagpur', 'goa'];
  rollNoList: number[] = [100, 110, 120, 130, 140, 150];

  studentList: any[] = [
    { name: 'Suraj Pawar', city: 'Pune', isActive: true },
    { name: 'Amit Kulkarni', city: 'Nagpur', isActive: false },
    { name: 'Priya Sharma', city: 'Mumbai', isActive: true },
    { name: 'Rahul Patil', city: 'Kolhapur', isActive: true },
    { name: 'Neha Verma', city: 'Nashik', isActive: false },
  ];

  employeeDetails: any = {
    empId: 'EMP101',
    name: 'Suraj Pawar',
    designation: 'Angular Developer',
    department: 'IT',
    email: 'suraj.pawar@example.com',
    mobile: '9876543210',
    city: 'Pune',
    isActive: true,
  };
}
