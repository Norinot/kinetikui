import { customElement } from 'lit/decorators.js';
import { ButtonBase } from './button-base.js';
import { styles } from './button.styles.js';

/**
 * KinetikUI Primary Button Component.
 * * @element kp-button
 * @slot - The default slot for button content (text, icons).
 */
@customElement('kp-button')
export class KpButton extends ButtonBase {
  // Inject the Kinetic Pop styles into the headless base
  static styles = [styles];
}

// Global typing for TypeScript so it recognizes <kp-button> in HTML/JSX
declare global {
  interface HTMLElementTagNameMap {
    'kp-button': KpButton;
  }
}