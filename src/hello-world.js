import {
  html,
  LitElement,
} from '../node_modules/@polymer/lit-element/lit-element.js';

class HelloWorld extends LitElement {
  static get is() {
    return 'hello-world';
  }

  static get properties() {
    return {
      firstName: String,
      lastName: String,

      _fullName: String,
    };
  }

  constructor() {
    super();

    this.firstName = 'John';
    this.lastName = 'Doe';
    this._fullName = `${this.firstName} ${this.lastName}`;
  }

  _propertiesChanged(props, changed, oldProps) {
    super._propertiesChanged(props, changed, oldProps);

    this._fullName = `${props.firstName} ${props.lastName}`;

    console.log('🚧 _propertiesChanged', props, changed, oldProps);
  }

  render({
    _fullName,
  }) {
    return html`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
        }

        * {
          box-sizing: border-box;
        }
      </style>

      <h1>Hello, ${_fullName}</h1>
    `;
  }
}

window.customElements.define(HelloWorld.is, HelloWorld);
