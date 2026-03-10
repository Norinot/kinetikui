import { customElement } from "lit/decorators.js";
import { SelectBase } from "./select-base.js";
import { styles } from "./select.styles.js";

@customElement("kp-select")
export class KpSelect extends SelectBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-select": KpSelect;
  }
}