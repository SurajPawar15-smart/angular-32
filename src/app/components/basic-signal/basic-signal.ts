import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-signal',
  imports: [],
  templateUrl: './basic-signal.html',
  styleUrl: './basic-signal.css',
})
export class BasicSignal {
  //productName: string = 'Mobile Name';
  //prroductPrice: number = 234000;
  pName: string = 'Mobile';
  pPrice: number = 127393;
  productName = signal<string>('Laptop');
  prroductPrice = signal<number>(123000);

  studentObj = signal<any>({ name: 'chetan', city: 'Pune' });
  cityList = signal<string[]>(['nagpur', 'pune', 'mumbai', 'delhi']);

  constructor() {
    setTimeout(() => {
      this.pName = 'Camera';
    }, 5000);
    const signalval = this.productName();
  }
  changePName() {
    this.pName = 'Fruits';
  }
}
