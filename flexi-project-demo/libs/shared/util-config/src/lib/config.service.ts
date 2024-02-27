import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Config, initConfig} from "./config";
import {BehaviorSubject, filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private http = inject(HttpClient);
  private _config = initConfig;

  private loadedSubject = new BehaviorSubject(false);
  readonly loaded$ = this.loadedSubject
    .asObservable()
    .pipe(filter((value) => value));

  get config(): Config {
    return { ...this._config };
  }

  loadConfig() {
    this.http.get<Config>('./assets/config.json').subscribe((config) => {
      console.log('loadConfig', config)
      this._config = config;
      this.loadedSubject.next(true);
    });
  }
}
