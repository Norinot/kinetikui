import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';

/**
 * Headless Base Class for all text elements.
 * Handles semantic tag rendering (polymorphism).
 */
export class TextBase extends LitElement {
  // The visual style variant
  @property({ type: String, reflect: true })
  variant: 'heading-1' | 'heading-2' | 'heading-3' | 'body' | 'body-sm' = 'body';

  // The semantic HTML tag to render (defaults to 'p')
  @property({ type: String })
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' = 'p';

  // Maps to text colors
  @property({ type: String, reflect: true })
  color: 'main' | 'muted' | 'accent' = 'main';

  protected render() {
    // unsafeStatic allows us to render a dynamic HTML tag dynamically
    const tag = unsafeStatic(this.as);

    return staticHtml`
      <${tag} part="base">
        <slot></slot>
      </${tag}>
    `;
  }
}