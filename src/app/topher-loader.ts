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

export class TopherLoader {
  public componentIds: string[];

  constructor(public appModule: NgModuleRef<any>) {
    //this.componentIds = Object.keys(components);
    //this.subscribe();
  }

  /**
   * Initialize any components in view on page load.
   */
  public initialize(): void {
    // Get the components wrapper selector to search for components.
    // Defaults to body.
    // let componentsWrapper = drupalSettings.pdb.ng2.components_wrapper;
    let componentsWrapper = 'body';

    let content = document.querySelector(componentsWrapper);

    if (content) {
      let componentElements: NodeListOf<Element> = document.querySelectorAll('[data-component]');
      this.checkElements(componentElements);
    }
  }

  /**
   * Helper function to check if any of the elements are in view. If an element
   * is in view, its corresponding component is loaded and initialized

   */
  public checkElements(els: NodeListOf<Element>): void {
    console.log("checkElements l=" + els.length);

    for (var i = 0; i < els.length; ++i) {
        console.log("el i:" + i);
    //for (var el of els){
        let el: Element= els[i];
        // assuming if innerHTML is empty module has not been loaded
        //if (el.innerHTML.length === 0) {
          // Define ngClassName based on component settings or build default
          // ngClassName based on element value.
          let elID = el.getAttribute("id");
          console.log("el name:" + el.tagName + " id:" + elID);

          /*
          let ngClassName = (typeof this.components[id]["ngClassName"] === 'string') ?
              this.components[id]["ngClassName"] : this.convertToNgClassName(this.components[id]["element"]);
          let selector = '#' + id;
          this.bootstrapComponent(id, ngClassName, selector);
          */
          //this.bootstrapComponent(id, ngClassName, selector);

          //this.components.forEach((componentDef : {type: Type<any>, selector: string}) => {

          //const factory = this.resolver.resolveComponentFactory(componentDef.type);

          //const factory = this.resolver.resolveComponentFactory(Comp2Component);
          //factory["factory"].selector = componentDef.selector;
            //appRef.bootstrap(factory);
          //});


          //const ngModule = moduleFactory.create(parentInjector);

          // Some dependencies from this module
          const appRef = this.appModule.injector.get(ApplicationRef);
          //const inj = ngModule.injector.get(Injector);
          const initStatus = this.appModule.injector.get(ApplicationInitStatus);

          initStatus.donePromise.then(() => {
            // Get the component factory and create it
            const compFactory = this.appModule.componentFactoryResolver
                .resolveComponentFactory(Comp2Component);



            //const compRef = compFactory.create(inj, [], selector);

            // Register the change detector to the app and trigger the first detection
            //compRef.changeDetectorRef.detectChanges();
            //appRef.registerChangeDetector(compRef.changeDetectorRef);

            compFactory["factory"].selector = "app-comp2#" + elID;//componentDef.selector;
              appRef.bootstrap(compFactory);
          });

        //}
      }
  }



}
