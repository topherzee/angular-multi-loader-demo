import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//main entry point
import {BOOTSTRAP_COMPONENTS_TOKEN} from './app/app.module';

import {MultiLoader} from './app/multi-loader';

if (environment.production) {
  enableProdMode();
}

Promise.resolve(platformBrowserDynamic().bootstrapModule(AppModule))
.then(appModule => {
        let loader = new MultiLoader(appModule);
        loader.initialize();
    });
