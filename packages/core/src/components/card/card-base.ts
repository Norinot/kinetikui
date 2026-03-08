import { LitElement, html, nothing } from "lit";
import { property } from "lit/decorators.js";

export class CardBase extends LitElement {
  @property({ type: Boolean, reflect: true }) interactive = false;
  @property({ type: String }) href?: string;
  @property({ type: String }) target?: string;

  protected render() {
    if (this.interactive && this.href) {
      return html`
        <a
          part="base"
          href=${this.href}
          target=${this.target || nothing}
        >
          <slot></slot>
        </a>
      `;
    }

    return html`
      <div
        part="base"
        role=${this.interactive ? "button" : "region"}
        tabindex=${this.interactive ? "0" : nothing}
      >
        <slot></slot>
      </div>
    `;
  }
}