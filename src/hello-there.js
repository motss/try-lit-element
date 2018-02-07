/** Import project dependencies */
import {
  html,
  LitElement,
} from '../node_modules/@polymer/lit-element/lit-element.js';
import '../node_modules/@polymer/paper-button/paper-button.js';

class HelloThere extends LitElement {
  static get is() {
    return 'hello-there';
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
  }

  _propertiesChanged(props, changed, oldProps) {
    super._propertiesChanged(props, changed, oldProps);

    this._fullName = `${props.firstName} ${props.lastName}`;

    // console.log('🚧 _propertiesChanged', props, changed, oldProps);
  }

  render({
    _fullName,
  }) {
    console.log('🚧 HelloThere:render');

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
        <paper-button on-tap="${ev => this.dismissAction(ev)}">cancel</paper-button>
        <paper-button on-tap="${ev => this.confirmAction(ev)}">ok</paper-button>
      </div>
    `;
  }

  dismissAction(ev) {
    console.info('🚧 dismissAction', ev.target);
  }

  confirmAction(ev) {
    console.info('🚧 confirmAction', ev.target);
  }
}

window.customElements.define(HelloThere.is, HelloThere);
