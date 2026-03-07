import { css } from 'lit';

export const styles = css`
  :host {
    display: block; 
  }

  /* Base reset for the internal element */
  [part="base"] {
    margin: 0;
    padding: 0;
    font-family: var(--font-family-body, 'Inter', sans-serif);
    color: var(--color-text-main, #111111);
    line-height: var(--font-leading-normal, 1.5);
  }

  /* =========================================
     COLOR VARIANTS
     ========================================= */
  :host([color="muted"]) [part="base"] {
    color: var(--color-text-muted, #555555);
  }

  :host([color="accent"]) [part="base"] {
    color: var(--accent-main, #4f46e5);
  }

  /* =========================================
     TYPOGRAPHY VARIANTS
     ========================================= */
  
  /* Massive, punchy headings */
  :host([variant="heading-1"]) [part="base"] {
    font-family: var(--font-family-heading, 'Bricolage Grotesque', sans-serif);
    font-size: var(--font-size-3xl, 4rem);
    font-weight: var(--font-weight-black, 900);
    line-height: var(--font-leading-tight, 1.1);
    letter-spacing: -0.02em;
    text-shadow: 2px 2px 0px var(--color-border, #111111);
    color: var(--color-surface, #ffffff); 
    -webkit-text-stroke: 1px var(--color-border, #111111);
  }

  :host([variant="heading-2"]) [part="base"] {
    font-family: var(--font-family-heading, 'Bricolage Grotesque', sans-serif);
    font-size: var(--font-size-2xl, 2.5rem);
    font-weight: var(--font-weight-bold, 700);
    line-height: var(--font-leading-tight, 1.1);
    letter-spacing: -0.01em;
  }

  :host([variant="heading-3"]) [part="base"] {
    font-family: var(--font-family-heading, 'Bricolage Grotesque', sans-serif);
    font-size: var(--font-size-xl, 1.5rem);
    font-weight: var(--font-weight-bold, 700);
    line-height: var(--font-leading-tight, 1.1);
  }

  /* Standard readable text */
  :host([variant="body"]) [part="base"] {
    font-size: var(--font-size-base, 1rem);
    font-weight: var(--font-weight-regular, 400);
  }

  :host([variant="body-sm"]) [part="base"] {
    font-size: var(--font-size-sm, 0.875rem);
    font-weight: var(--font-weight-regular, 400);
  }
`;