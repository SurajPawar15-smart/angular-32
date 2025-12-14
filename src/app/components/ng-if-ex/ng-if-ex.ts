import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if-ex',
  imports: [NgIf, FormsModule],
  templateUrl: './ng-if-ex.html',
  styleUrl: './ng-if-ex.css',
})
export class NgIfEx {
  isDiv1Visible: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  details: string = '';
  selectedCategory: string = '';
  //enteredMarks: string = '';

  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }
  toggleDiv1() {
    this.isDiv1Visible = !this.isDiv1Visible;
  }
}
