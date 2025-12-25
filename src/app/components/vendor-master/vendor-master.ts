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
    vendorName: '',
    contactNo: '',
    emailId: '',
  };

  ngOnInit(): void {
    //debugger;
    this.getAllVendors();
  }

  getAllVendors() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusVendors').subscribe({
      next: (result: any) => {
        this.vendorList.set(result);
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
        next: (result: any) => {
          //debugger;
          alert('Vendor added successfully');
          this.getAllVendors();
        },
        error: (error: any) => {
          //debugger;
          alert('Error adding vendor');
        },
      });
  }
  onEdit(data: any) {
    this.newVendorObj = data;
  }
  updateVendor() {
    this.http
      .put(
        'https://api.freeprojectapi.com/api/BusBooking/PutBusVendors?id=' +
          this.newVendorObj.vendorId,
        this.newVendorObj
      )
      .subscribe({
        next: (result: any) => {
          alert('Vendor updated successfully');
          this.getAllVendors();
        },
        error: (error: any) => {
          alert('Error updating vendor');
        },
      });
  }
  onDelete(id: any) {
    const isDelete = confirm('Are you sure to delete this vendor?');
    if (isDelete) {
      this.http
        .delete('https://api.freeprojectapi.com/api/BusBooking/DeleteBusVendor?id=' + id)
        .subscribe({
          next: (result: any) => {
            alert('Vendor deleted successfully');
          },
          error: (error: any) => {
            alert('Error deleting vendor');
          },
        });
    }
  }
}
