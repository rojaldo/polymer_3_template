import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `my-sample`
 * this is the first sample of a polymer element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MySample extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'my-sample',
      },
    };
  }
}

window.customElements.define('my-sample', MySample);
