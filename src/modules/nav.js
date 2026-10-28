import { qs, qsa } from './dom.js';

/** Mobile menu: toggle button, Escape to close, close on link click or when leaving the mobile breakpoint. */
export function initMobileNav() {
  const header = qs('[data-header]');
  const toggle = qs('[data-nav-toggle]');
  const panel = qs('[data-nav-panel]');
  if (!header || !toggle || !panel) return;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    panel.toggleAttribute('data-open', open);
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));

  panel.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  header.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}

/** Highlights the nav link of the section currently in view (aria-current + styling). */
export function initScrollSpy() {
  const links = qsa('[data-nav-link]');
  const sections = links.map((link) => qs(link.hash)).filter(Boolean);
  if (!sections.length || !('IntersectionObserver' in window)) return;

  const setCurrent = (id) => {
    links.forEach((link) => {
      if (link.hash === `#${id}`) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  // A section is "current" while it crosses a thin band around 40% down the viewport.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry) => setCurrent(entry.target.id));
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  sections.forEach((section) => observer.observe(section));
}

/**
 * The page is rendered by JavaScript, so the browser's native "scroll to #hash on load"
 * runs too early. Do it once the sections exist (CSS scroll-padding handles the header offset).
 */
export function scrollToInitialHash() {
  if (!window.location.hash) return;
  const target = qs(decodeURIComponent(window.location.hash));
  target?.scrollIntoView();
}
