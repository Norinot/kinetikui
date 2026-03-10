import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  [part="base"] {
    display: flex;
    align-items: center;
    padding: var(--spacing-sm, 8px) var(--spacing-md, 16px);
    font-family: var(--font-family-body);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-main);
    border-radius: var(--radius-container);
    cursor: pointer;
    transition: background var(--motion-fast) var(--motion-spring);
  }

  :host(:not([disabled])) [part="base"]:hover {
    background: var(--accent-shift-2); 
  }

  :host([selected]) [part="base"] {
    background: var(--accent-hover);
    color: var(--color-surface);
  }

  :host([disabled]) [part="base"] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;