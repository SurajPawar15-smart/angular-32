import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, JsonPipe],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  course = 'angular';
  courseDuration = '3 Months';
  startDate = '21 Dec 2025';
  productName = 'Mobile Moto';
  myPlaceholderText = 'Enter Price';
  inputType = 'date';
  dangerClassName = 'bg-danger';
  courseName: string = 'Java';

  //eventbinding
  isActive: boolean = false;
  selectState: string = 'pun';
  selectGender: string = '';
  studentObj: any = {
    studName: 'suraj',
    mobile: '8792736432',
    email: 'pawarsuraj614@gmail.com',
  };
  cityList: string[] = ['Pune', 'Nagpur', 'Mumbai', 'Chennai'];
  address: string = '';
  constructor() {
    const player = 'Sachine';
    console.log(this.courseDuration);

    setTimeout(() => {
      this.course = 'ReactJS'; // Angular 17/18/19/20 zoneless ready
      debugger;
    }, 3000);
  }

  showWelcome() {
    alert('welcome b-32');
    alert('End Alert');
  }
  changeCourse() {
    this.course = 'Dot Net';
  }
  onCitychange() {
    alert('City got changed...!!!');
  }
  setCourseName(courseName: any) {
    this.course = courseName;
  }
}
