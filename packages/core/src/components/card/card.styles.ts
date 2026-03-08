import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  [part="base"] {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    text-decoration: none;
    
    padding: var(--spacing-lg, 1.5rem);
    gap: var(--spacing-md, 1rem);
    
    background: var(--color-surface, #ffffff);
    color: var(--color-text-main, #111111);
    border: var(--border-width, 3px) solid var(--color-border, #111111);
    border-radius: var(--border-radius-container, 24px 8px 24px 8px);
    box-shadow: 4px 4px 0px var(--color-border, #111111);
    
    transition: all var(--motion-fast, 0.15s) 
      var(--motion-spring, cubic-bezier(0.34, 1.56, 0.64, 1));
  }


  :host([interactive]) [part="base"] {
    cursor: pointer;
  }

  :host([interactive]) [part="base"]:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--accent-shift-1, #ff4785);
  }

  :host([interactive]) [part="base"]:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px var(--color-border, #111111);
  }

  :host([interactive]) [part="base"]:focus-visible {
    outline: 2px solid var(--accent-main, #4f46e5);
    outline-offset: 4px;
  }
`;