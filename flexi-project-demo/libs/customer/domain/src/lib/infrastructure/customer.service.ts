import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "@flexi-project-demo/util-config";
import {Customer} from "../entities/customer";
import {map} from "rxjs";
import {BaseDynamicInfoMapper} from "../../../../../shared/domain/src/lib/infrastructure/base-dynamic-info-mapper";
import {CustomerInfo} from "../entities/customer-info";

@Injectable({
  providedIn: "root"
})
export class CustomerService{
  private http = inject(HttpClient);
  private configService = inject(ConfigService);

  loadAllCustomers(){
    const url = `${this.configService.config.baseUrl}/customer`;

    const headers = {
      Accept: 'application/json',
    };

    return this.http.get<Customer[]>(url, { headers })
      .pipe(
        map(customers =>
          customers.map(customer => ({
            ...customer,
            customerInfos: customer.customerInfos.map(info =>
              BaseDynamicInfoMapper.map(info) as CustomerInfo
            )
          }))
        )
      );
  }
}
