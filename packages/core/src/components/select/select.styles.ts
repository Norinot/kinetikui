import { css } from "lit";

export const styles = css`
  :host {
    display: inline-block;
    width: 100%;
    max-width: 300px;
  }

  kp-popover {
    width: 100%;
  }

  [part="trigger"] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-sm, 8px);
    padding: var(--spacing-sm, 12px) var(--spacing-md, 16px);
    font-family: var(--font-family-body);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-main);
    background: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-container);
    cursor: pointer;
    box-shadow: 4px 4px 0px var(--color-border);
    transition: all var(--motion-fast) var(--motion-spring);
    user-select: none;
    box-sizing: border-box;
    width: 100%;
  }

  :host(:not([disabled])) [part="trigger"]:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--accent-shift-1);
  }

  :host(:not([disabled])) [part="trigger"]:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px var(--color-border);
  }

  :host([disabled]) [part="trigger"] {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: 2px 2px 0px var(--color-border);
    transform: translate(2px, 2px);
  }

  [part="icon"] {
    font-size: 0.8em;
    transition: transform var(--motion-fast) var(--motion-spring);
  }

  [part="trigger"][data-open="true"] [part="icon"] {
    transform: rotate(180deg);
  }

  [part="listbox"] {
    display: flex;
    flex-direction: column;
    max-height: 250px;
    gap: 4px;
    overflow-y: auto;
    margin: calc(var(--spacing-md, 16px) * -1); 
    padding: var(--spacing-xs);
  }
`;