import {CustomerInfo} from "./customer-info";

export interface Customer{
  customerId: string,
  forename: string,
  surname: string,
  customerInfos: CustomerInfo[]
}
