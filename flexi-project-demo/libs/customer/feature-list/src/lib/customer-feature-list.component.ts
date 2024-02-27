import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerService} from "@flexi-project-demo/customer-domain";

@Component({
  selector: 'flexi-project-demo-customer-feature-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-feature-list.component.html',
  styleUrl: './customer-feature-list.component.css',
})
export class CustomerFeatureListComponent implements OnInit{

  private customerService = inject(CustomerService);

  ngOnInit(): void {
    this.customerService.loadAllCustomers().subscribe(customers => {
      console.log('customers: ', customers)
    })
  }
}
