import { qsa } from './dom.js';

/**
 * Scroll-reveal (replaces AOS) and skill-bar fill (replaces Waypoints).
 * Elements marked [data-reveal] get [data-visible] once, when ~15% is in view;
 * the CSS transitions (see revealClasses in src/utils/ui.js) do the rest.
 */
export function initReveal() {
  const targets = qsa('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.setAttribute('data-visible', ''));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute('data-visible', '');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );
  targets.forEach((el) => observer.observe(el));
}
