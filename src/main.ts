import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import {MultiLoader} from './app/multi-loader';
import {Container} from './app/container';

//main entry point
import { AppModule } from './app/app.module';
import { MyContainer } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

Promise.resolve(
  platformBrowserDynamic().bootstrapModule(AppModule)
)
.then(

  appModule => {
    let myContainer = new MyContainer().container;
    let loader = new MultiLoader(appModule, myContainer);
    loader.initialize();
  }
);
