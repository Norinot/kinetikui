import { css } from "lit";

export const styles = css`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: currentColor;
  }

  [part="base"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }


  ::slotted(svg) {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }

  :host([size="sm"]) {
    font-size: var(--font-size-sm);
  }

  :host([size="md"]) {
    font-size: var(--font-size-base);
  }

  :host([size="lg"]) {
    font-size: var(--font-size-lg);
  }

  :host([size="xl"]) {
    font-size: var(--font-size-xl);
  }
`;