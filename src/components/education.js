import { education } from '../data/portfolio.js';
import { html } from '../utils/html.js';
import { icon } from '../utils/icons.js';
import { externalAttrs, newTabHint, revealClasses, sectionLabel } from '../utils/ui.js';

const certification = ({ name, issuer, date, href }) => html`
  <li>
    ${href
      ? html`<a href="${href}" ${externalAttrs} class="font-bold underline underline-offset-4 hover:text-navy-600">${name}${newTabHint}</a>`
      : html`<span class="font-bold">${name}</span>`}
    <span class="block text-muted">${[issuer, date].filter(Boolean).join(' · ')}</span>
  </li>
`;

export const renderEducation = () => html`
  <section id="education" aria-labelledby="education-title" class="bg-linear-to-b from-paper to-white">
    <h2 id="education-title" class="sr-only">${education.heading}</h2>
    <div class="mx-auto max-w-page border-ink lg:border-x">
      <div class="grid border-y border-ink md:grid-cols-2">
        <div data-reveal class="${revealClasses} px-6 py-16 lg:px-14">
          ${sectionLabel('Education', { level: 3 })}
          <ul class="mt-8 space-y-5">
            ${education.degrees.map(
              ({ title, school, period }) => html`
                <li>
                  <span class="font-bold">${title}</span>
                  <span class="block text-muted">${school} · ${period}</span>
                </li>
              `,
            )}
          </ul>
        </div>

        <div data-reveal class="${revealClasses} border-t border-ink px-6 py-16 md:border-l md:border-t-0 lg:px-14">
          ${sectionLabel('Certifications', { level: 3 })}
          <ul class="mt-8 space-y-5">
            ${education.certifications.map(certification)}
          </ul>
          <a
            href="${import.meta.env.BASE_URL}certificates.html"
            class="mt-10 inline-flex items-center gap-2 border border-navy-800 px-5 py-3 font-display text-xl uppercase tracking-label text-navy-800 transition hover:bg-navy-800 hover:text-white focus-visible:bg-navy-800 focus-visible:text-white"
          >
            ${education.galleryLabel} ${icon('arrowRight', 'size-5')}
          </a>
        </div>
      </div>
    </div>
  </section>
`;
