import { qs } from './dom.js';

/** Shows the floating back-to-top link after scrolling 100px (the link itself is a plain #top anchor). */
export function initBackToTop() {
  const button = qs('[data-back-to-top]');
  if (!button) return;

  const update = () => {
    const visible = window.scrollY > 100;
    button.toggleAttribute('data-visible', visible);
    button.tabIndex = visible ? 0 : -1;
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}
