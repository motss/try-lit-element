/** Import project dependencies */
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
      isAdmin: Boolean,
    };
  }

  constructor() {
    super();

    this.firstName = this.firstName == null
      ? 'John'
      : this.firstName;
    this.lastName = this.lastName == null
      ? 'Doe'
      : this.lastName;
    this.isAdmin = this.isAdmin == null
      ? false
      : this.isAdmin;
  }

  // _propertiesChanged(props, changed, oldProps) {
  //   super._propertiesChanged(props, changed, oldProps);

  //   // console.log('🚧 _propertiesChanged', props, changed, oldProps);
  // }

  // didRender() {
  //   console.log('🚧 didRender', this);
  // }

  _shouldPropertiesChange(props, changedProps) {
    console.log('🚧 _shouldPropertiesChange', props, changedProps);

    Object.keys(changedProps)
      .filter(propKey => !/^_+/i.test(propKey))
      .map((propKey) => {
        // TODO: Do more stuffs here!!!
        switch (propKey) {
          /** NOTE: no op for other prop keys */
          default: {
            return;
          }
        }
      });

    return true;
  }

  render({
    firstName,
    lastName,
    isAdmin,
  }) {
    const fullName = this._computeFullName(firstName, lastName);

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

      <h1>${
        isAdmin
          ? html`Hi admin, ${fullName}`
          : html`Welcome back, ${fullName}`
      }</h1>

      <div class="button-container">
        <paper-button on-tap="${ev => this._dismissAction(ev)}">cancel</paper-button>
        <paper-button on-tap="${ev => this._confirmAction(ev)}">ok</paper-button>
      </div>
    `;
  }

  _computeFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  _dismissAction(ev) {
    console.info('🚧 dismissAction', ev.target);
  }

  _confirmAction(ev) {
    console.info('🚧 confirmAction', ev.target);
  }
}

window.customElements.define(HelloWorld.is, HelloWorld);
