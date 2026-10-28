import { experience } from '../data/portfolio.js';
import { html } from '../utils/html.js';
import { darkFocus, revealClasses, sectionLabel } from '../utils/ui.js';

export const renderExperience = () => html`
  <section
    id="experience"
    aria-labelledby="experience-title"
    class="bg-linear-to-b from-navy-900 to-navy-950 text-white ${darkFocus}"
  >
    <div class="mx-auto max-w-page px-6 py-section">
      ${sectionLabel(experience.heading, { dark: true, id: 'experience-title' })}

      <p class="mt-8 font-display text-3xl uppercase tracking-label sm:text-4xl">${experience.company}</p>
      <p class="mt-1 text-mist">Client: ${experience.client} · ${experience.location} · ${experience.period}</p>

      <ol class="ml-3 mt-12 border-l border-white/40">
        ${experience.roles.map(
          (role) => html`
            <li data-reveal class="${revealClasses} relative pb-14 pl-8 last:pb-0 sm:pl-12">
              <span
                aria-hidden="true"
                class="absolute -left-[7px] top-2.5 size-3 rounded-full bg-white ring-4 ring-navy-900"
              ></span>
              <h3 class="font-display text-3xl uppercase tracking-label sm:text-4xl">${role.title}</h3>
              <p class="text-mist">${role.period}</p>
              <ul class="mt-5 list-disc space-y-3 pl-5 leading-relaxed marker:text-mist">
                ${role.bullets.map((bullet) => html`<li>${bullet}</li>`)}
              </ul>
            </li>
          `,
        )}
      </ol>
    </div>
  </section>
`;
