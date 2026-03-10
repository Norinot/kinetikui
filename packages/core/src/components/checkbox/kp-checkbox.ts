import { customElement } from "lit/decorators.js";
import { CheckboxBase } from "./checkbox-base.js";
import { styles } from "./checkbox.styles.js";

@customElement("kp-checkbox")
export class KpCheckbox extends CheckboxBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-checkbox": KpCheckbox;
  }
}