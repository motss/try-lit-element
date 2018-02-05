import {
  html,
  LitElement,
} from '../node_modules/@polymer/lit-element/lit-element.js';
import '../node_modules/@polymer/paper-button/paper-button.js';

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

        paper-button {
          color: #0070fb;
          font-size: 14px;

          --paper-button-ink-color: #848484;
        }
      </style>

      <h1>Hello, ${_fullName}</h1>

      <div class="button-container">
        <paper-button>cancel</paper-button>
        <paper-button>ok</paper-button>
      </div>
    `;
  }
}

window.customElements.define(HelloWorld.is, HelloWorld);
