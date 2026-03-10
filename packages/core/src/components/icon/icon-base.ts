import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export class IconBase extends LitElement {
  @property({ type: String, reflect: true }) size: "sm" | "md" | "lg" | "xl" = "md";

  @property({ type: String, reflect: true }) label?: string;

  protected render() {
    return html`
      <span
        part="base"
        role=${this.label ? "img" : "presentation"}
        aria-label=${this.label || ""}
        aria-hidden=${this.label ? "false" : "true"}
      >
        <slot></slot>
      </span>
    `;
  }
}