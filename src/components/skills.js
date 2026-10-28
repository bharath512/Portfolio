import { skills } from '../data/portfolio.js';
import { html } from '../utils/html.js';
import { revealClasses, tag } from '../utils/ui.js';

// Only rendered for skills that have a `level` in src/data/portfolio.js.
const skillBar = ({ name, level }) => html`
  <li class="w-full">
    <div class="flex justify-between text-base"><span>${name}</span><span>${level}%</span></div>
    <div role="img" aria-label="${name}: ${level}%" class="mt-1 h-3.5 rounded-full border-2 border-ink bg-white p-0.5">
      <div
        data-reveal
        style="--level: ${level}%"
        class="h-full w-0 rounded-full bg-navy-800 transition-[width] duration-1000 ease-out data-visible:w-(--level) motion-reduce:w-(--level) motion-reduce:transition-none"
      ></div>
    </div>
  </li>
`;

const skillItem = (item) => (typeof item === 'string' ? tag(item) : skillBar(item));

export const renderSkills = () => html`
  <section id="skills" aria-labelledby="skills-title" class="bg-linear-to-br from-paper-dim to-white">
    <div class="mx-auto grid max-w-page gap-10 px-6 py-section lg:grid-cols-[auto_1fr] lg:gap-16">
      <h2
        id="skills-title"
        class="font-display text-6xl uppercase leading-none tracking-label text-navy-800 sm:text-7xl lg:rotate-180 lg:text-8xl lg:[writing-mode:vertical-rl]"
      >
        ${skills.heading}
      </h2>

      <div class="grid gap-6 md:grid-cols-2">
        ${skills.groups.map(
          (group, index) => html`
            <article
              data-reveal
              style="transition-delay: ${(index % 2) * 100}ms"
              class="${revealClasses} border border-ink bg-white/70 p-6"
            >
              <h3 class="inline-block border border-ink px-4 py-1 font-display text-2xl uppercase tracking-label">
                ${group.title}
              </h3>
              <ul class="mt-5 flex flex-wrap gap-2">
                ${group.items.map(skillItem)}
              </ul>
            </article>
          `,
        )}
      </div>
    </div>
  </section>
`;
