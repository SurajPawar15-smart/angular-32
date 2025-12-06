import { Component } from '@angular/core';

@Component({
  selector: 'app-data-types',
  imports: [],
  templateUrl: './data-types.html',
  styleUrl: './data-types.css',
})
export class DataTypes {
  // String | undefined | number | array | boolean | date | null | Object | NaN | any

  // 1) Declaration + initialization (explicit type)
  courseName: string = 'Angular b 32';

  // 2) Declaration + initialization (type inference)
  courseDuration = '4 Months';

  // 3) Declaration only (implicit any — not recommended but allowed)
  courseCapacity;

  // 4) Declaration only (explicit type)
  courseStartDate: string;

  // Number type
  rollNo: number = 100;
  // rollNo: number = 'suraj'; ❌ (Type 'string' is not assignable to type 'number')

  // Float number
  productPrice = 1200.9;

  // Boolean type
  isActive: boolean = false;
  isPresent = true; // Type inferred automatically

  // Date type
  currentDate: Date = new Date();

  // Any type (stores any data)
  student: any;

  // Object using 'any'
  employeeObject: any = {
    name: 'Suraj',
    address: 'Pune',
    contact: '787827363',
    email: 'pawarsuraj614@gmail.com',
  };

  // Object with nested properties
  productObj: any = {
    id: 1,
    name: 'Laptop',
    brand: 'Dell',
    price: 55000,
    inStock: true,
    category: 'Electronics',
    rating: 4.5,
    description: 'High-performance laptop for work and gaming',
    quantity: 10,
  };

  // Array of strings
  cityList: string[] = ['Pune', 'Mumbai', 'Delhi', 'Bangalore'];

  // Array of numbers
  rollNoList: number[] = [100, 101, 102, 103, 104, 105];

  // Optional + undefined type
  courseInstructor?: string; // optional property
  courseDueFees: string | undefined; // union type

  // Non-null assertion operator — value will be assigned later
  studentName!: string;

  // null example
  schoolObj: any | null;

  // NaN example
  num1 = 40;
  num2: any = 'ABC';

  constructor() {
    this.studentName = 'Rama';
    this.courseInstructor = 'Suraj Pawar';

    // NaN Example — 'ABC' cannot be converted to number
    const result = this.num1 - this.num2;
    console.log(result); // NaN

    debugger;
    console.log('This is a constructor');

    // Updating values
    this.courseName = 'Angular';
    this.isActive = true;

    // 'any' can accept different types one after another
    this.student = 'Rahul';
    this.student = 123;
    this.student = true;

    // implicit any
    this.courseCapacity = 'ABC';

    // Explicit value assignment
    this.courseStartDate = 'Started from December onwards...!!!';

    // Date update
    this.currentDate = new Date('12-12-2025');

    console.log(this.courseDuration);
    console.log(this.isActive);
  }
}
