import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor-master',
  imports: [FormsModule],
  templateUrl: './vendor-master.html',
  styleUrl: './vendor-master.css',
})
export class VendorMaster implements OnInit {
  http = inject(HttpClient);
  vendorList = signal<any[]>([]);

  newVendorObj: any = {
    vendorId: 0,
    vendorName: 'string',
    contactNo: 'string',
    emailId: 'string',
  };

  ngOnInit(): void {
    //debugger;
    this.getAllVendors();
    this.saveNewVendor();
  }

  getAllVendors() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusVendors').subscribe({
      next: (res: any) => {
        this.vendorList.set(res);
      },
      error: (err: any) => {
        alert('Error fetching vendors');
      },
    });
  }

  saveNewVendor() {
    this.http
      .post('https://api.freeprojectapi.com/api/BusBooking/PostBusVendor', this.newVendorObj)
      .subscribe({
        next: (res: any) => {
          //debugger;
          alert('Vendor added successfully');
          this.getAllVendors();
        },
        error: (err: any) => {
          //debugger;
          alert('Error adding vendor');
        },
      });
  }
}
