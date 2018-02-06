export function ledux(store) {
  return baseElement => class extends baseElement {
    constructor() {
      super();

      // this.update = this.update.bind(this, store);
    }

    update(fn) {
      // throw new Error('update() not implemented!');
      return fn(store)
        .then(() => {
          console.info('🚗 store', store);
        });
    }
  }
}

export default ledux;
