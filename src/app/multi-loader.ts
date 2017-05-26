import {
    enableProdMode,
    Injector,
    ApplicationRef,
    NgModuleRef,
    NgZone,
    NgModuleFactory,
    ReflectiveInjector,
    ApplicationInitStatus,
    SystemJsNgModuleLoader
} from '@angular/core';

import { Comp2Component } from './comp2/comp2.component';
import { Comp1Component } from './comp1/comp1.component';

export class MultiLoader {

  /*
  Ideally this would not be necessary.
  But I could not find a way to instantiate the class based on the
  data-component attribute.
  I tried eval() - but somehow the imports were not loaded yet or something.
  */
  COMPONENT_NAME_TO_CLASS_MAPPING = {
    "comp1":Comp1Component,
    "comp2":Comp2Component
  }

  constructor(public appModule: NgModuleRef<any>) {
  }

  public initialize(): void {
    let componentsWrapper = 'body';
    let content = document.querySelector(componentsWrapper);

    if (content) {
      let componentElements: NodeListOf<Element> = document.querySelectorAll('[data-component]');
      this.bootstrapComponents(componentElements);
    }
  }

  public bootstrapComponents(els: NodeListOf<Element>): void {
    console.log("checkElements l=" + els.length);

    for (var i = 0; i < els.length; ++i) {
      console.log("el i:" + i);

      let el: Element= els[i];
      let elID = el.getAttribute("id");
      let elCompName = el.getAttribute("data-component");
      console.log("el comp:" + elCompName + " id:" + elID);

      const appRef = this.appModule.injector.get(ApplicationRef);
      const initStatus = this.appModule.injector.get(ApplicationInitStatus);

      initStatus.donePromise.then(() => {
        // Get the component factory and create it
        const compFactory = this.appModule.componentFactoryResolver
            .resolveComponentFactory(
              this.COMPONENT_NAME_TO_CLASS_MAPPING[elCompName]
            );

        compFactory["factory"].selector = "#" + elID;
        appRef.bootstrap(compFactory);
      });
    }
  }
}
