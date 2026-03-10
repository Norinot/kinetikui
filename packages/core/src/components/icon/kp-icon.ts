import { customElement } from "lit/decorators.js";
import { IconBase } from "./icon-base.js";
import { styles } from "./icon.styles.js";

@customElement("kp-icon")
export class KpIcon extends IconBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-icon": KpIcon;
  }
}