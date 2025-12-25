import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-get-apiex',
  imports: [],
  templateUrl: './get-apiex.html',
  styleUrl: './get-apiex.css',
})
export class GetAPIEx {
  //photosList: any[] = [];

  //HttpClient
  //http2 = inject(HttpClient); //angular 16
  photosList = signal<any[]>([]);
  userDataList = signal<any[]>([]);
  vendorList = signal<any[]>([]);
  clientList = signal<any[]>([]);
  userList = ['suraj', 'ram', 'rahul', 'radha'];

  constructor(private http: HttpClient) {}
  getPhotosData() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((data: any) => {
      debugger;
      //this.photosList = data;
      this.photosList.set(data);
    });
  }

  getUserData() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any) => {
      this.userDataList.set(result);
    });
  }
  getBusVendor() {
    this.http
      .get('https://api.freeprojectapi.com/api/BusBooking/GetBusVendors')
      .subscribe((res: any) => {
        this.vendorList.set(res);
      });
  }
  getAllClients() {
    this.http.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients').subscribe({
      next: (res: any) => {
        this.clientList.set(res.data);
      },
      error: (err: any) => {},
    });
  }
}
