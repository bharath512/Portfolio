import './style.css';
import { renderCertificates } from './components/certificates.js';
import { renderFooter } from './components/footer.js';
import { renderHeader } from './components/header.js';
import { initCertificateFilter } from './modules/certificateFilter.js';
import { qs } from './modules/dom.js';
import { initPage } from './modules/page.js';
import { html } from './utils/html.js';

qs('#app').innerHTML = String(html`
  ${renderHeader({ home: false })}
  <main id="main" tabindex="-1" class="outline-none">${renderCertificates()}</main>
  ${renderFooter()}
`);

initCertificateFilter();
initPage();
