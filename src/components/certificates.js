import { certificateCategories, certificates } from '../data/portfolio.js';
import { img } from '../utils/assets.js';
import { html } from '../utils/html.js';
import { externalAttrs, newTabHint, sectionLabel } from '../utils/ui.js';

const filterButton = (filter, label, pressed = false) => html`
  <button
    type="button"
    data-filter="${filter}"
    aria-pressed="${pressed}"
    class="border border-ink px-4 py-2 font-display text-xl uppercase tracking-label transition hover:bg-paper-dim aria-pressed:border-navy-800 aria-pressed:bg-navy-800 aria-pressed:text-white"
  >
    ${label}
  </button>
`;

const certificateCard = ({ name, issuer, date, category, image, href }) => html`
  <li data-category="${category}" class="flex flex-col border border-ink bg-white">
    <a href="${img(image)}" ${externalAttrs} class="block border-b border-ink/30 bg-paper">
      <img
        src="${img(image)}"
        alt="Certificate: ${name}, issued by ${issuer}"
        loading="lazy"
        decoding="async"
        class="aspect-4/3 w-full object-contain p-2"
      />
      <span class="sr-only">View full-size certificate ${newTabHint}</span>
    </a>
    <div class="flex flex-1 flex-col gap-1 p-4">
      <h2 class="text-xl font-bold leading-snug">${name}</h2>
      <p class="text-muted">${[issuer, date].filter(Boolean).join(' · ')}</p>
      ${href
        ? html`<a href="${href}" ${externalAttrs} class="mt-auto pt-2 underline underline-offset-4 hover:text-navy-600">Verify credential ${newTabHint}</a>`
        : ''}
    </div>
  </li>
`;

export const renderCertificates = () => html`
  <section aria-labelledby="certificates-title" class="bg-linear-to-b from-paper-dim to-white">
    <div class="mx-auto max-w-page px-6 py-section">
      ${sectionLabel(certificates.heading, { id: 'certificates-title', level: 1 })}

      <div role="group" aria-label="Filter certificates by issuer" class="mt-10 flex flex-wrap gap-2">
        ${filterButton('*', 'All', true)}
        ${Object.entries(certificateCategories).map(([key, label]) => filterButton(key, label))}
      </div>
      <p data-filter-status role="status" class="mt-4 text-muted">
        Showing ${certificates.items.length} of ${certificates.items.length} certificates
      </p>

      <ul class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        ${certificates.items.map(certificateCard)}
      </ul>
    </div>
  </section>
`;
