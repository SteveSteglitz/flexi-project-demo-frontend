import {CustomerInfo} from "./customer-info";

export interface Customer{
  id: string,
  forename: string,
  surname: string,
  customerInfos: CustomerInfo[]
}
