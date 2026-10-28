import { footer } from '../data/portfolio.js';
import { html } from '../utils/html.js';
import { icon } from '../utils/icons.js';
import { darkFocus } from '../utils/ui.js';

export const renderFooter = () => html`
  <footer class="bg-black py-8 text-center text-mist ${darkFocus}">
    <p>&copy; ${new Date().getFullYear()} <strong class="font-normal text-white">${footer.text}</strong></p>
  </footer>

  <a
    href="#top"
    data-back-to-top
    tabindex="-1"
    aria-label="Back to top"
    class="pointer-events-none fixed bottom-4 right-4 z-40 grid size-12 place-items-center border border-white bg-navy-800 text-white opacity-0 transition hover:bg-navy-600 data-visible:pointer-events-auto data-visible:opacity-100 motion-reduce:transition-none ${darkFocus}"
  >
    ${icon('arrowUp', 'size-6')}
  </a>
`;
