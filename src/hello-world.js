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
    };
  }

  constructor() {
    super();

    if (this.firstName == null && this.lastName == null) {
      this.firstName = 'John';
      this.lastName = 'Doe';
    }
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
    lastName
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

      <h1>Hello, ${this.computeFullName(firstName, lastName)}</h1>

      <div class="button-container">
        <paper-button on-tap="${ev => this.dismissAction(ev)}">cancel</paper-button>
        <paper-button on-tap="${ev => this.confirmAction(ev)}">ok</paper-button>
      </div>
    `;
  }

  computeFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  dismissAction(ev) {
    console.info('🚧 dismissAction', ev.target);
  }

  confirmAction(ev) {
    console.info('🚧 confirmAction', ev.target);
  }
}

window.customElements.define(HelloWorld.is, HelloWorld);
