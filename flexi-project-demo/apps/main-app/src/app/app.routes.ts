import { Route } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {inject} from "@angular/core";
import {ConfigService} from "@flexi-project-demo/util-config";

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    resolve: {
      config: () => inject(ConfigService).loaded$,
    },
    children: [
      {
        path: 'customer',
        loadChildren: () =>
          import('@flexi-project-demo/customer-feature-list').then(
            (m) => m.CUSTOMER_LIST_ROUTES
          ),
      }
    ],
  },
];
