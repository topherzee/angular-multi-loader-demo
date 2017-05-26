import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Inject, OpaqueToken } from '@angular/core'
import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, Type } from '@angular/core';

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

export const BOOTSTRAP_COMPONENTS_TOKEN = new OpaqueToken('bootstrap_components');

@NgModule({
  declarations: [
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
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
