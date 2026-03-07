import { LitElement, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Headless Base Class for standard text inputs.
 * Manages internal labeling for Shadow DOM accessibility.
 */
export class InputBase extends LitElement {
  @property({ type: String }) label?: string;
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) type: 'text' | 'email' | 'password' | 'number' = 'text';
  @property({ type: Boolean, reflect: true }) disabled = false;
  
  // If a string is provided, the input enters an error state and displays the message
  @property({ type: String, reflect: true }) error?: string;

  // Handles syncing the internal input value with the component's state
  protected handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    
    // Dispatch a standard custom event so the parent app can listen to changes
    this.dispatchEvent(new CustomEvent('kp-input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  protected render() {
    const inputId = 'kp-internal-input';
    const errorId = 'kp-internal-error';

    return html`
      <div part="container">
        ${this.label ? html`
          <label part="label" for="${inputId}">${this.label}</label>
        ` : nothing}

        <input
          id="${inputId}"
          part="input"
          type="${this.type}"
          .value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          aria-invalid="${this.error ? 'true' : 'false'}"
          aria-describedby="${ifDefined(this.error ? errorId : undefined)}"
          @input="${this.handleInput}"
        />

        ${this.error ? html`
          <div id="${errorId}" part="error-message" role="alert">
            ${this.error}
          </div>
        ` : nothing}
      </div>
    `;
  }
}