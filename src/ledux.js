export const ledux = (store) => baseElement => class extends baseElement {
  constructor() {
    super();

    store.subscribe(() => this.update(store.getAll()));
    this.update(store.getAll());
  }

  update() {
    throw new Error('update() not implemented!', this);
  }
};

export default ledux;
