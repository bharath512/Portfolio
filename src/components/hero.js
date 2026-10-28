import { links, profile } from '../data/portfolio.js';
import { img } from '../utils/assets.js';
import { html } from '../utils/html.js';
import { icon } from '../utils/icons.js';
import { buttonClasses, darkFocus, externalAttrs, newTabHint } from '../utils/ui.js';

const contactLink = ({ href, iconName, label, external = false }) => html`
  <li>
    <a
      href="${href}"
      ${external ? externalAttrs : ''}
      class="flex items-center gap-4 text-xl uppercase tracking-wide text-white transition hover:text-mist hover:underline"
    >
      ${icon(iconName, 'size-7 shrink-0')}<span class="break-all">${label}</span>${external ? newTabHint : ''}
    </a>
  </li>
`;

export const renderHero = () => html`
  <section
    id="home"
    aria-labelledby="hero-title"
    class="relative overflow-hidden bg-linear-to-b from-black to-navy-900 text-white ${darkFocus}"
  >
    <div class="mx-auto max-w-page px-6 pb-section pt-6">
      <h1 id="hero-title" class="select-none whitespace-nowrap font-display text-display uppercase">${profile.name}</h1>

      <div class="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <p class="flex items-center gap-3 text-2xl uppercase tracking-wide text-white">
          ${icon('pin', 'size-6 shrink-0')}${profile.location}
        </p>
        <p class="min-h-[1.2em] font-display text-3xl uppercase tracking-label text-mist sm:text-4xl">
          <span class="sr-only">${profile.headline.join(', ')}</span>
          <span aria-hidden="true"><span data-typed></span><span class="animate-caret">|</span></span>
        </p>
      </div>

      <div class="mt-12 grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr]">
        <div class="border border-white/60 bg-navy-950">
          <img
            src="${img(profile.photo.src)}"
            alt="${profile.photo.alt}"
            width="${profile.photo.width}"
            height="${profile.photo.height}"
            fetchpriority="high"
            class="aspect-4/5 w-full object-cover object-[50%_20%]"
          />
        </div>

        <div class="flex flex-col gap-10">
          <ul class="space-y-6">
            ${contactLink({ href: `mailto:${profile.email}`, iconName: 'mail', label: profile.email })}
            ${contactLink({ href: profile.phoneHref, iconName: 'phone', label: profile.phone })}
          </ul>

          <div class="flex flex-wrap gap-4">
            <a href="#projects" class="${buttonClasses.solid}">View projects ${icon('arrowRight', 'size-5')}</a>
            <a href="${links.resume}" ${externalAttrs} class="${buttonClasses.outline}">
              ${icon('download', 'size-5')} Resume ${newTabHint}
            </a>
          </div>

          <ul class="space-y-6 lg:mt-auto">
            ${contactLink({ href: links.linkedin, iconName: 'linkedin', label: 'LinkedIn', external: true })}
            ${contactLink({ href: links.github, iconName: 'github', label: 'GitHub', external: true })}
          </ul>
        </div>
      </div>

      <a href="#about" class="mt-12 inline-block text-lg uppercase tracking-wide text-mist hover:text-white hover:underline">
        Scroll for more <span aria-hidden="true">↓</span>
      </a>
    </div>
  </section>
`;
