import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Comp2Component } from './app/comp2/comp2.component';

//main entry point
import {BOOTSTRAP_COMPONENTS_TOKEN} from './app/app.module';

// import the WindowRef provider
import {WindowRef} from './app/WindowRef';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule);
let components = [
  { type: Comp2Component, selector: "app-comp2#c2" },
  { type: Comp2Component, selector: "app-comp2#c2-b" }
];


const platform = platformBrowserDynamic([
  {provide: BOOTSTRAP_COMPONENTS_TOKEN, useValue: components}
]);
/*
const platform = platformBrowserDynamic([
  {provide: BOOTSTRAP_COMPONENTS_TOKEN, useValue: window["components"]}
]);*/
platform.bootstrapModule(AppModule);
