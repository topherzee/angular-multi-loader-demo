import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Inject, OpaqueToken } from '@angular/core'
import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, Type } from '@angular/core';

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

import {Container} from './container';

export const BOOTSTRAP_COMPONENTS_TOKEN = new OpaqueToken('bootstrap_components');

export class MyContainer {
  container = new Container();

  constructor() {
    // Register our components
    this.container.register('comp1', Comp1Component);
    this.container.register('comp2', Comp2Component);
  }
}


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    Comp1Component,
    Comp2Component
  ],
  entryComponents: [
    Comp1Component,
    Comp2Component
  ]
})
export class AppModule {

  constructor(
      private resolver : ComponentFactoryResolver
  ) {}

  ngDoBootstrap(): void {}
}
