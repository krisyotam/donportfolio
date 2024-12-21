import { initSmoothScroll } from './utils/smoothScroll.js';
import { initHoverEffects } from './utils/hoverEffects.js';

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initHoverEffects();
});