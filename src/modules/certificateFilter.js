import { qs, qsa } from './dom.js';

/** Category filter for the certificate gallery (replaces Isotope). Buttons are toggle buttons (aria-pressed). */
export function initCertificateFilter() {
  const buttons = qsa('[data-filter]');
  const items = qsa('[data-category]');
  const status = qs('[data-filter-status]');
  if (!buttons.length) return;

  const apply = (filter) => {
    let visible = 0;
    items.forEach((item) => {
      const show = filter === '*' || item.dataset.category === filter;
      item.hidden = !show;
      if (show) visible += 1;
    });
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    if (status) status.textContent = `Showing ${visible} of ${items.length} certificates`;
  };

  buttons.forEach((button) => button.addEventListener('click', () => apply(button.dataset.filter)));
}
