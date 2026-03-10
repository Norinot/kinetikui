import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export class OptionBase extends LitElement {
  @property({ type: String, reflect: true }) value = "";
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  protected render() {
    return html`
      <div
        part="base"
        role="option"
        aria-selected=${this.selected ? "true" : "false"}
        aria-disabled=${this.disabled ? "true" : "false"}
        @click=${this._handleSelect}
      >
        <slot></slot>
      </div>
    `;
  }

  private _handleSelect(e: Event) {
    if (this.disabled) {
      e.stopPropagation();
      return;
    }
    this.dispatchEvent(
      new CustomEvent("kp-option-select", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }
}