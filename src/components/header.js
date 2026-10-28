import { nav } from '../data/portfolio.js';
import { html } from '../utils/html.js';
import { icon } from '../utils/icons.js';
import { darkFocus } from '../utils/ui.js';

/**
 * @param {{ home?: boolean }} options  home=true links to in-page anchors; otherwise back to the home page.
 */
export const renderHeader = ({ home = true } = {}) => {
  const base = home ? '' : import.meta.env.BASE_URL;

  // #top is a plain, non-sticky anchor: the sticky header itself is always "already at the top".
  return html`
    <div id="top"></div>
    <header
      data-header
      class="sticky top-0 z-50 border-b border-white/15 bg-navy-950/95 text-white backdrop-blur ${darkFocus}"
    >
      <div class="mx-auto flex max-w-page items-center justify-end px-6 py-3">
        <button
          type="button"
          data-nav-toggle
          class="group/toggle -mr-2 p-2 lg:hidden"
          aria-expanded="false"
          aria-controls="primary-nav"
          aria-label="Open menu"
        >
          ${icon('menu', 'size-7 group-aria-expanded/toggle:hidden')}${icon('close', 'hidden size-7 group-aria-expanded/toggle:block')}
        </button>

        <nav
          id="primary-nav"
          data-nav-panel
          aria-label="Primary"
          class="absolute inset-x-0 top-full hidden border-b border-white/15 bg-navy-950 data-open:block lg:static lg:block lg:border-0 lg:bg-transparent"
        >
          <ul class="flex flex-col py-2 lg:flex-row lg:gap-1 lg:py-0">
            ${nav.map(
              ({ id, label }) => html`
                <li>
                  <a
                    href="${base}#${id}"
                    data-nav-link
                    class="block border-b-2 border-transparent px-6 py-3 font-display text-2xl uppercase tracking-label text-mist transition hover:text-white aria-[current=true]:border-white aria-[current=true]:text-white lg:px-3 lg:py-1 lg:text-xl"
                    >${label}</a
                  >
                </li>
              `,
            )}
          </ul>
        </nav>
      </div>
    </header>
  `;
};
