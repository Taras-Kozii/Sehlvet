'use strict';

import { initNavigation } from './menu.js';
import { initHeader } from './header.js';
import { watcherToggle } from './effects/animation.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeader();
  watcherToggle('.hero', 0.5);
  watcherToggle('.trending', 0.5);
  watcherToggle('.summer', 0.4);
  watcherToggle('.winter', 0.5);
  watcherToggle('.reviews', 0.7);
  watcherToggle('.section-header', 0.5);
  watcherToggle('.footer', 0.5);
});
