# Angular-Multi-Loader-Demo

This project is a demonstration of how to bootstrap multiple Angular apps on the same page.
Actually, it is one angular app, but with muliple 'roots' on the same page.

Work in progress! Please comment and contribute to improve this!

The intention is to be able to define which Angular components are loaded onto the page at runtime
based on meta-information in the page. The intended use case is for CMS - to allow a CMS author to
choose which Angular components should be on the page.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.

## Usage

See `src/index.html` for the page that would typically be generated by the server with the CMS.

* Every element must have a unique ID.
* Every element to be loaded into angular must have the attribute `data-component` with the value being the name of the Angular component to load.
* Each component must have the matching selector setup. ie in `src/app/comp1/comp1.component.ts`: `selector: '[data-component]="comp1"',`


The `COMPONENT_NAME_TO_CLASS_MAPPING` must be setup to map between the String names for the components specified in the index.html html elements, and the actual TS classes for the Angular components to load.

Additionally, the component classes must be imported in `src/app/multi-loader.ts`, `src/app/app/module.ts`

Example CMS component file (based on Magnolia CMS ):
```
<div
  id="id-${content.@uuid}"
  data-component="comp1"

  title="${content.title!}"
  description="${cmsfn.decode(content).desc!}"
  price="${content.price!}"
  >
  Loading Comp1 ...
</div>
```

## Notes

(This whole endeavor is complicated by the fact we want to support multiple instances of the same component on the same page. Otherwise you can just do this: http://plnkr.co/edit/aZqdJe3OZ8K2odHioWkB?p=preview See `main.ts`)


The interesting stuff is in `src/app/multi-loader.ts`.

* It searches the page for elements with `data-attribute`.
* It uses `COMPONENT_NAME_TO_CLASS_MAPPING` to get the Class of the component.
* It uses the `ComponentFactory` to build the component.
* It uses an `ApplicationReference` to bootstrap that component.

## Angular CLI notes

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## License

MIT

## Contributors

Magnolia, https://magnolia-cms.com

Christopher Zimmermann, @topherzee
