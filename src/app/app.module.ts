import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Inject, OpaqueToken } from '@angular/core'

import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, Type } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

export const BOOTSTRAP_COMPONENTS_TOKEN = new OpaqueToken('bootstrap_components');

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [ AppComponent, Comp1Component,  Comp2Component ]
  /*providers: [],
  bootstrap: [AppComponent, Comp1Component, Comp2Component]*/
})
export class AppModule {

  /*constructor(
      private resolver : ComponentFactoryResolver,
      @Inject(BOOTSTRAP_COMPONENTS_TOKEN) private components
  ) {}*/

  constructor(
      private resolver : ComponentFactoryResolver
  ) {}

  ngDoBootstrap(): void {}

/*
  ngDoBootstrap(appRef : ApplicationRef) {
    this.components.forEach((componentDef : {type: Type<any>, selector: string}) => {
      const factory = this.resolver.resolveComponentFactory(componentDef.type);
      factory["factory"].selector = componentDef.selector;
      appRef.bootstrap(factory);
    });
  }
  */

}
