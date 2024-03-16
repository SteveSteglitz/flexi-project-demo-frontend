import {Component, inject, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Customer, CustomerService} from "@flexi-project-demo/customer-domain";
import {MatColumnDef, MatTable, MatTableDataSource, MatTableModule} from "@angular/material/table";
import {DynamicInformationBlockComponent} from "@flexi-project-demo/ui-common";
import {SIGNAL} from "@angular/core/primitives/signals";
import {BaseDynamicInfo} from "@flexi-project-demo/shared-domain";

@Component({
  selector: 'flexi-project-demo-customer-feature-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, DynamicInformationBlockComponent],
  templateUrl: './customer-feature-list.component.html',
  styleUrl: './customer-feature-list.component.scss',
})
export class CustomerFeatureListComponent implements OnInit{

  private customerService = inject(CustomerService);
  datasource= new MatTableDataSource<Customer>([]);

  infos = signal<BaseDynamicInfo[]>([]);

  displayedColumns: string[] = ['customerId', 'forename', 'surname'];

  ngOnInit(): void {
    this.customerService.loadAllCustomers().subscribe(customers => {
      console.log('customers: ', customers)
      this.datasource = new MatTableDataSource<Customer>(customers);
    })
  }

  selectInfo(row: Customer) {
    this.infos.set(row.customerInfos as BaseDynamicInfo[])
  }
}
