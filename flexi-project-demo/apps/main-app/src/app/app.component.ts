import {Component, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {ConfigService} from "@flexi-project-demo/util-config";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'flexi-project-demo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'main-app';

  configService = inject(ConfigService);

  constructor() {
    /*eslint no-warning-comments: "error"*/
    // TODO: In a later lab, we will assure that
    //  loading did happen _before_ we use the config!
    this.configService.loadConfig();
  }
}
