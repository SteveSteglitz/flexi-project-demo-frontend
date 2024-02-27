import {Routes} from "@angular/router";
import {CustomerFeatureListComponent} from "./customer-feature-list.component";

export const CUSTOMER_LIST_ROUTES: Routes = [
  {
    path: '',
    component: CustomerFeatureListComponent
  }
];

export default CUSTOMER_LIST_ROUTES;
