

export class Container {

  _components: {}

  constructor() {
    this._components = {};
  }

  register(name, comp) {
    this._components[name] = comp;
  }

  resolve(name) {
    return this._components[name];
  }
}
