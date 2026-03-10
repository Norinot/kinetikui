import { customElement } from "lit/decorators.js";
import { OptionBase } from "./option-base.js";
import { styles } from "./option.styles.js";

@customElement("kp-option")
export class KpOption extends OptionBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-option": KpOption;
  }
}