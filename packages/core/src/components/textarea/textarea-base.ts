import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';

export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both' | 'auto';

export class TextareaBase extends LitElement {
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) name = '';
  @property({ type: Number }) rows = 3;

  @property({ type: String, reflect: true }) resize: TextareaResize = 'auto';
  @query('textarea') _textarea!: HTMLTextAreaElement;

  protected handleInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;

    if (this.resize === 'auto') {
      this.autoResize();
    }

    this.dispatchEvent(new CustomEvent('input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    }));
  }

  protected autoResize() {
    if (this._textarea) {
      this._textarea.style.height = 'auto';
      this._textarea.style.height = `${this._textarea.scrollHeight}px`;
    }
  }

  firstUpdated() {
    if (this.resize === 'auto') {
      this.autoResize();
    }
  }

  render() {
    return html`
      <div part="base" class="textarea-wrapper">
        <textarea
          part="input"
          id="textarea"
          name="${this.name}"
          .value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          rows="${this.rows}"
          aria-label="${this.name || 'textarea'}"
          @input="${this.handleInput}"
        ></textarea>
      </div>
    `;
  }
}