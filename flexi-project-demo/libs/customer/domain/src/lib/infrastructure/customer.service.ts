import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "@flexi-project-demo/util-config";
import {Customer} from "../entities/customer";

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

    return this.http.get<Customer[]>(url, { headers });
  }
}
