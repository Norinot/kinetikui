import { LitElement, html } from "lit";
import { property, state, query } from "lit/decorators.js";

export class SelectBase extends LitElement {
  @property({ type: String, reflect: true }) value = "";
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) placeholder = "Select an option...";

  @state() private _displayValue = "";
  @state() private _triggerWidth = 0;
  @state() private _isOpen = false;

  @query("kp-popover") popoverEl!: any;
  @query('[part="trigger"]') triggerEl!: HTMLElement;
  @query('slot:not([name])') defaultSlot!: HTMLSlotElement;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("kp-option-select", this._handleOptionSelect as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("kp-option-select", this._handleOptionSelect as EventListener);
  }

  firstUpdated() {
    this._syncOptions();
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has("value")) {
      this._syncOptions();
    }
  }

  private _getOptions() {
    if (!this.defaultSlot) return [];
    return this.defaultSlot.assignedElements({ flatten: true }).filter(
      (el) => el.tagName.toLowerCase() === "kp-option"
    ) as any[];
  }

  private _syncOptions() {
    const options = this._getOptions();
    let found = false;

    options.forEach((opt) => {
      if (opt.value === this.value) {
        opt.selected = true;
        this._displayValue = opt.textContent?.trim() || "";
        found = true;
      } else {
        opt.selected = false;
      }
    });

    if (!found) this._displayValue = "";
  }

  private _handleOptionSelect = (e: CustomEvent) => {
    this.value = e.detail.value;
    if (this.popoverEl) this.popoverEl.open = false;
    this._isOpen = false;
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  };

  private _handleTriggerClick = () => {
    if (this.disabled) return;

    if (this.triggerEl) {
      this._triggerWidth = this.triggerEl.getBoundingClientRect().width;
    }

    this._isOpen = !this._isOpen;
  };

  private _handlePopoverClick = () => {
    requestAnimationFrame(() => {
      this._isOpen = this.popoverEl?.open || false;
    });
  };

  protected render() {
    return html`
      <kp-popover @click=${this._handlePopoverClick}>
        
        <div
          slot="trigger"
          part="trigger"
          role="combobox"
          tabindex=${this.disabled ? "-1" : "0"}
          aria-disabled=${this.disabled ? "true" : "false"}
          @click=${this._handleTriggerClick}
          data-open=${this._isOpen ? "true" : "false"}
        >
          <span part="value">${this._displayValue || this.placeholder}</span>
          <span part="icon">▼</span>
        </div>

        <div
          part="listbox"
          role="listbox"
          style="width: ${this._triggerWidth ? this._triggerWidth + 'px' : 'auto'};"
        >
          <slot></slot>
        </div>

      </kp-popover>
    `;
  }
}