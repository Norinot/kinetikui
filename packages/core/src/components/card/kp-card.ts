import { customElement } from "lit/decorators.js";
import { CardBase } from "./card-base.js";
import { styles } from "./card.styles.js";

@customElement("kp-card")
export class KpCard extends CardBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-card": KpCard;
  }
}