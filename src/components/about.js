import { about } from '../data/portfolio.js';
import { img } from '../utils/assets.js';
import { html } from '../utils/html.js';
import { revealClasses, sectionLabel } from '../utils/ui.js';

export const renderAbout = () => html`
  <section id="about" aria-labelledby="about-title" class="bg-paper">
    <div class="mx-auto max-w-page border-ink lg:border-x">
      <div class="grid lg:grid-cols-2">
        <div data-reveal class="${revealClasses} flex flex-col justify-center gap-6 px-6 py-16 lg:px-14">
          <div>${sectionLabel(about.heading, { id: 'about-title' })}</div>
          <p class="font-display text-3xl uppercase tracking-label text-navy-800">${about.subtitle}</p>
          ${about.summary.map((paragraph) => html`<p class="leading-relaxed">${paragraph}</p>`)}
        </div>
        <div class="border-ink lg:border-l">
          <img
            src="${img(about.photo.src)}"
            alt="${about.photo.alt}"
            width="${about.photo.width}"
            height="${about.photo.height}"
            loading="lazy"
            decoding="async"
            class="aspect-square h-full w-full object-cover object-[50%_35%]"
          />
        </div>
      </div>

      <ul class="grid grid-cols-2 border-t border-ink sm:grid-cols-3 lg:grid-cols-5">
        ${about.highlights.map(
          ({ value, label }) => html`
            <li class="border-b border-r border-ink/30 px-6 py-8 text-center last:border-r-0">
              <p class="font-display text-5xl text-navy-800">${value}</p>
              <p class="mt-1 text-base leading-snug text-muted">${label}</p>
            </li>
          `,
        )}
      </ul>
    </div>
  </section>
`;
