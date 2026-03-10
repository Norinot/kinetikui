import { LitElement, html, nothing } from "lit";
import { property } from "lit/decorators.js";

export class CheckboxBase extends LitElement {
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) name?: string;
  @property({ type: String }) value = "on";

  private _handleChange(e: Event) {
    if (this.disabled) return;

    const target = e.target as HTMLInputElement;
    this.checked = target.checked;

    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: { checked: this.checked },
      })
    );
  }

  protected render() {
    return html`
      <label part="base" ?aria-disabled=${this.disabled}>
        <input
          type="checkbox"
          part="input"
          .name=${this.name}
          .value=${this.value}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
        />
        
        <div part="control">
          ${this.checked
        ? html`
                <kp-icon size="sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </kp-icon>
              `
        : nothing}
        </div>
        
        <div part="label-container">
          <slot></slot>
        </div>
      </label>
    `;
  }
}