import { initBackToTop } from './backToTop.js';
import { initMobileNav, initScrollSpy, scrollToInitialHash } from './nav.js';
import { initReveal } from './reveal.js';

/** Behaviour shared by every page. Call once after the markup has been rendered. */
export function initPage() {
  initMobileNav();
  initScrollSpy();
  initReveal();
  initBackToTop();
  scrollToInitialHash();
}
