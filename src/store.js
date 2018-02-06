const map = new Map();
let subscriber = null;

export const store = {
  subscribe(fn) {
    subscriber = fn;
  },

  getAll() {
    return [...map.entries()].reduce((p, [key, val]) => {
      return {
        ...p,
        [key]: val,
      };
    }, {});
  },

  set(key, value) {
    map.set(key, value);

    subscriber();
  }
};

export default store;
