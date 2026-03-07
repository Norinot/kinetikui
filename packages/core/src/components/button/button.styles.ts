import { css } from 'lit';

/**
 * The Kinetic Pop aesthetic applied to the ButtonBase HTML structure.
 * Uses fallback values in case the global CSS variables aren't loaded yet.
 */
export const styles = css`
  :host {
    display: inline-block;
  }

  /* The "part" selector allows us to style the internal <button> or <a> tag */
  [part="base"] {
    appearance: none;
    border: none;
    background: none;
    margin: 0;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    /* Kinetic Pop Geometry & Typography */
    font-family: var(--font-heading, 'Bricolage Grotesque', sans-serif);
    padding: 0.9rem 1.8rem;
    border: var(--border-width, 3px) solid var(--color-border, #111111);
    border-radius: var(--border-radius-interactive, 16px 4px 16px 4px);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;

    /* Kinetic Pop Physics */
    transition: all var(--motion-fast, 0.15s) var(--motion-spring, cubic-bezier(0.34, 1.56, 0.64, 1));
  }

  /* =========================================
     VARIANT: PRIMARY
     ========================================= */
  :host([variant="primary"]) [part="base"] {
    background: var(--accent-main, #4f46e5);
    color: #ffffff;
    box-shadow: 4px 4px 0px var(--color-border, #111111);
    text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
  }

  :host([variant="primary"]:not([disabled])) [part="base"]:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--accent-shift-1, #ff4785);
    background: var(--accent-hover, #4338ca);
  }

  :host([variant="primary"]:not([disabled])) [part="base"]:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px var(--color-border, #111111);
  }

  /* =========================================
     VARIANT: SECONDARY
     ========================================= */
  :host([variant="secondary"]) [part="base"] {
    background: var(--color-surface, #ffffff);
    color: var(--color-text-main, #111111);
    box-shadow: 4px 4px 0px var(--color-border, #111111);
  }

  :host([variant="secondary"]:not([disabled])) [part="base"]:hover {
    background: var(--color-bg, #f4f0eb);
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--color-border, #111111);
  }

  :host([variant="secondary"]:not([disabled])) [part="base"]:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px var(--color-border, #111111);
  }

  /* =========================================
     STATE: DISABLED
     ========================================= */
  :host([disabled]) {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  :host([disabled]) [part="base"] {
    box-shadow: 2px 2px 0px var(--color-border, #111111);
    transform: translate(2px, 2px);
  }
`;