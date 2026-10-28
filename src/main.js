import './style.css';
import { renderAbout } from './components/about.js';
import { renderContact } from './components/contact.js';
import { renderEducation } from './components/education.js';
import { renderExperience } from './components/experience.js';
import { renderFooter } from './components/footer.js';
import { renderHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderProjects } from './components/projects.js';
import { renderSkills } from './components/skills.js';
import { profile } from './data/portfolio.js';
import { qs } from './modules/dom.js';
import { initPage } from './modules/page.js';
import { initTyping } from './modules/typing.js';
import { html } from './utils/html.js';

qs('#app').innerHTML = String(html`
  ${renderHeader({ home: true })}
  <main id="main" tabindex="-1" class="outline-none">
    ${renderHero()}${renderAbout()}${renderSkills()}${renderExperience()}${renderProjects()}${renderEducation()}${renderContact()}
  </main>
  ${renderFooter()}
`);

initTyping(qs('[data-typed]'), profile.headline);
initPage();
