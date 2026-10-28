import { prefersReducedMotion } from './dom.js';

/**
 * Typing effect for the hero headline (same timings as the previous Typed.js setup).
 * With reduced motion enabled it shows all items statically instead of animating.
 */
export function initTyping(element, items, { typeSpeed = 100, backSpeed = 50, backDelay = 2000 } = {}) {
  if (!element || !items?.length) return;

  if (prefersReducedMotion()) {
    element.textContent = items.join(' | ');
    return;
  }

  let itemIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = items[itemIndex];
    charIndex += deleting ? -1 : 1;
    element.textContent = current.slice(0, charIndex);

    let delay = deleting ? backSpeed : typeSpeed;
    if (!deleting && charIndex === current.length) {
      deleting = true;
      delay = backDelay;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      itemIndex = (itemIndex + 1) % items.length;
      delay = typeSpeed * 3;
    }
    setTimeout(tick, delay);
  };

  tick();
}
