import { customElement } from "lit/decorators.js";
import { PopoverBase } from "./popover-base.js";
import { styles } from "./popover.styles.js";

@customElement("kp-popover")
export class KpPopover extends PopoverBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-popover": KpPopover;
  }
}