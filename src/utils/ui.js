import { html, raw } from './html.js';

/**
 * Shared class strings / snippets. Kept as complete literals so Tailwind can detect them.
 */

// Scroll-reveal: toggled by src/modules/reveal.js via the data-visible attribute.
export const revealClasses =
  'opacity-0 translate-y-6 transition duration-700 ease-out data-visible:translate-y-0 data-visible:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none';

// Keyboard focus colour for dark surfaces (the default, for light surfaces, lives in style.css).
export const darkFocus = '[--focus:#aab8ff]';

// Boxed section label from the reference design (e.g. the "ABOUT" / "EDUCATION" boxes).
export const sectionLabel = (text, { dark = false, id = '', level = 2 } = {}) => {
  const heading = raw(`h${level}`);
  return html`
    <${heading}
      id="${id}"
      class="inline-block border px-6 py-2 font-display text-4xl uppercase tracking-label sm:text-5xl ${dark
        ? 'border-white/70 text-white'
        : 'border-ink text-ink'}"
    >
      ${text}
    </${heading}>
  `;
};

export const tag = (text, { dark = false } = {}) => html`
  <li class="border px-3 py-1 text-base leading-snug ${dark ? 'border-white/40 text-mist' : 'border-ink/40 text-ink'}">
    ${text}
  </li>
`;

export const buttonClasses = {
  solid:
    'inline-flex items-center gap-2 border border-white bg-white px-5 py-3 font-display text-xl uppercase tracking-label text-navy-950 transition hover:bg-mist focus-visible:bg-mist',
  outline:
    'inline-flex items-center gap-2 border border-white/70 px-5 py-3 font-display text-xl uppercase tracking-label text-white transition hover:bg-white hover:text-navy-950 focus-visible:bg-white focus-visible:text-navy-950',
};

// Opens in a new tab; the hidden text tells screen-reader users.
export const externalAttrs = raw('target="_blank" rel="noopener noreferrer"');
export const newTabHint = html`<span class="sr-only">(opens in a new tab)</span>`;
