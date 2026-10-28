import { projects } from '../data/portfolio.js';
import { html } from '../utils/html.js';
import { icon } from '../utils/icons.js';
import { darkFocus, externalAttrs, newTabHint, revealClasses, sectionLabel, tag } from '../utils/ui.js';

const projectCard = (project, index) => html`
  <article
    data-reveal
    style="transition-delay: ${(index % 2) * 100}ms"
    class="${revealClasses} flex flex-col border border-white/30 bg-white/5 p-6"
  >
    <div class="flex flex-wrap items-start justify-between gap-3">
      <h3 class="font-display text-3xl uppercase leading-tight tracking-label">${project.title}</h3>
      ${project.status
        ? html`<p class="border border-white/70 px-2 py-0.5 text-sm uppercase tracking-wide">${project.status}</p>`
        : ''}
    </div>
    <p class="mt-4 leading-relaxed text-mist">${project.description}</p>
    <ul class="mt-5 flex flex-wrap gap-2">
      ${project.tags.map((text) => tag(text, { dark: true }))}
    </ul>
    ${project.links.length
      ? html`
          <ul class="mt-6 flex flex-wrap gap-x-6 gap-y-2 pt-1">
            ${project.links.map(
              ({ label, href }) => html`
                <li>
                  <a
                    href="${href}"
                    ${externalAttrs}
                    class="inline-flex items-center gap-2 underline underline-offset-4 hover:text-mist"
                  >
                    ${label} ${icon('external', 'size-4')}${newTabHint}
                  </a>
                </li>
              `,
            )}
          </ul>
        `
      : ''}
  </article>
`;

export const renderProjects = () => html`
  <section
    id="projects"
    aria-labelledby="projects-title"
    class="relative overflow-hidden bg-linear-to-b from-navy-950 to-black text-white ${darkFocus}"
  >
    <!-- Decorative vertical word from the reference design -->
    <p
      aria-hidden="true"
      class="pointer-events-none absolute bottom-0 left-2 hidden select-none font-display text-[15rem] uppercase leading-none text-white/25 xl:block xl:rotate-180 xl:[writing-mode:vertical-rl]"
    >
      Project
    </p>

    <div class="mx-auto max-w-page px-6 py-section xl:pl-56">
      ${sectionLabel(projects.heading, { dark: true, id: 'projects-title' })}
      <div class="mt-12 grid gap-6 md:grid-cols-2">${projects.items.map(projectCard)}</div>
    </div>
  </section>
`;
