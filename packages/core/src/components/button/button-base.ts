import { LitElement, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Headless Base Class for all Button-like elements.
 * Handles DOM rendering (button vs anchor), a11y, and standard properties.
 * Contains ZERO styling.
 */
export class ButtonBase extends LitElement {
  // Common interactive properties
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String, reflect: true }) variant: 'primary' | 'secondary' | 'ghost' = 'primary';

  // HTML <button> specific properties
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';

  // HTML <a> specific properties (if href is provided, it becomes a link)
  @property({ type: String }) href?: string;
  @property({ type: String }) target?: string;

  protected render() {
    // If an href is provided, render a native anchor tag for proper SEO and routing
    if (this.href) {
      return html`
        <a
          part="base"
          href=${this.href}
          target=${this.target || nothing}
          ?disabled=${this.disabled}
          aria-disabled=${this.disabled ? 'true' : 'false'}
          tabindex=${this.disabled ? '-1' : '0'}
        >
          <slot></slot>
        </a>
      `;
    }

    // Otherwise, render a native button
    return html`
      <button
        part="base"
        type=${this.type}
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled ? 'true' : 'false'}
      >
        <slot></slot>
      </button>
    `;
  }
}