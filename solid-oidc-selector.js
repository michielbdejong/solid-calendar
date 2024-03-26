var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { EVENTS } from './constants/EVENTS';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let SolidOidcSelector = class SolidOidcSelector extends LitElement {
    constructor() {
        super(...arguments);
        this.oidcOptions = [new URL("http://localhost:3000"), new URL("https://login.inrupt.com"), new URL("https://solidcommunity.net")];
    }
    _selectHandler(e) {
        const target = e.target;
        const evt = new CustomEvent(EVENTS.UPDATE_OIDC, {
            bubbles: true,
            detail: target.value,
        });
        console.log("evt", evt);
        this.dispatchEvent(evt);
    }
    render() {
        return html `
        <select @change=${this._selectHandler}>
          ${this.oidcOptions.map(option => html `<option value=${option}>${option}</option>`)}
        </select>
    `;
    }
};
__decorate([
    property()
], SolidOidcSelector.prototype, "oidcOptions", void 0);
SolidOidcSelector = __decorate([
    customElement('solid-oidc-selector')
], SolidOidcSelector);
export { SolidOidcSelector };
//# sourceMappingURL=solid-oidc-selector.js.map