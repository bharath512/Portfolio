import { contact, links, profile } from '../data/portfolio.js';
import { html } from '../utils/html.js';
import { icon } from '../utils/icons.js';
import { darkFocus, externalAttrs, newTabHint, revealClasses, sectionLabel } from '../utils/ui.js';

const contactRow = ({ iconName, label, value, href, external = false }) => html`
  <li class="flex items-center gap-4 border border-white/30 p-5">
    ${icon(iconName, 'size-7 shrink-0')}
    <div class="min-w-0">
      <p class="text-sm uppercase tracking-wide text-mist">${label}</p>
      ${href
        ? html`<a href="${href}" ${external ? externalAttrs : ''} class="break-words text-xl underline-offset-4 hover:underline">${value}${external ? newTabHint : ''}</a>`
        : html`<p class="text-xl">${value}</p>`}
    </div>
  </li>
`;

export const renderContact = () => html`
  <section
    id="contact"
    aria-labelledby="contact-title"
    class="bg-linear-to-b from-navy-900 to-navy-950 text-white ${darkFocus}"
  >
    <div data-reveal class="${revealClasses} mx-auto max-w-page px-6 py-section">
      ${sectionLabel(contact.heading, { dark: true, id: 'contact-title' })}
      <p class="mt-8 max-w-prose font-display text-3xl uppercase tracking-label sm:text-4xl">${contact.blurb}</p>

      <ul class="mt-10 grid gap-4 md:grid-cols-2">
        ${contactRow({ iconName: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` })}
        ${contactRow({ iconName: 'phone', label: 'Phone', value: profile.phone, href: profile.phoneHref })}
        ${contactRow({ iconName: 'pin', label: 'Location', value: profile.location })}
        ${contactRow({ iconName: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/r-bharath', href: links.linkedin, external: true })}
        ${contactRow({ iconName: 'github', label: 'GitHub', value: 'github.com/bharath512', href: links.github, external: true })}
        ${contactRow({ iconName: 'download', label: 'Resume', value: 'Download my resume', href: links.resume, external: true })}
      </ul>
    </div>
  </section>
`;
