import { customElement } from 'lit/decorators.js';
import { InputBase } from './input-base.js';
import { styles } from './input.styles.js';

/**
 * KinetikUI Text Input Component.
 * @element kp-input
 */
@customElement('kp-input')
export class KpInput extends InputBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'kp-input': KpInput;
  }
}