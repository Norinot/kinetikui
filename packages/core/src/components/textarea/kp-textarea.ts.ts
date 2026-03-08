import { customElement } from 'lit/decorators.js';
import { TextareaBase } from './textarea-base';
import { textareaStyles } from './textarea.styles';

@customElement('kp-textarea')
export class KpTextarea extends TextareaBase {
  static styles = [textareaStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    'kp-textarea': KpTextarea;
  }
}