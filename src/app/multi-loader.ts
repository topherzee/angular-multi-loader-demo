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

import {Container} from './container';


export class MultiLoader {

  private DEFAULT_HABITAT_SELECTOR = 'data-component';

  private componentSelector: string;

  constructor(public appModule: NgModuleRef<any>,
              public container: Container) {
                // Set dom component selector

            this.componentSelector = this.DEFAULT_HABITAT_SELECTOR;

  }


  public initialize(): void {
    let componentsWrapper = 'body';
    let content = document.querySelector(componentsWrapper);

    if (content) {
      let componentElements: NodeListOf<Element> =
        document.querySelectorAll(`[${this.componentSelector}]`);

      this.bootstrapComponents(componentElements);
    }
  }


  public bootstrapComponents(elements: NodeListOf<Element>): void {

    for (var i = 0; i < elements.length; ++i) {
      console.log("el i:" + i);

      const el: Element= elements[i];
      const id = el.getAttribute("id");
      const elCompName = el.getAttribute(this.componentSelector);
      console.log("el comp:" + elCompName + " id:" + id);
      const component = this.container.resolve(elCompName);

      const appRef = this.appModule.injector.get(ApplicationRef);
      const initStatus = this.appModule.injector.get(ApplicationInitStatus);

      initStatus.donePromise.then(() => {
        // Get the component factory and create it
        const compFactory = this.appModule.componentFactoryResolver
            .resolveComponentFactory(component);

        compFactory["factory"].selector = "#" + id;
        appRef.bootstrap(compFactory);
      });
    }
  }
}
