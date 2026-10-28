/**
 * Tiny tagged-template helper: interpolated values are HTML-escaped,
 * nested html`` results and arrays of them are inserted as-is.
 */
class Safe {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return this.value;
  }
}

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const escapeHtml = (text) => text.replace(/[&<>"']/g, (char) => ESCAPES[char]);

const toHtml = (value) => {
  if (value instanceof Safe) return value.value;
  if (Array.isArray(value)) return value.map(toHtml).join('');
  if (value == null || value === false) return '';
  return escapeHtml(String(value));
};

export const html = (strings, ...values) =>
  new Safe(strings.reduce((out, str, i) => out + str + (i < values.length ? toHtml(values[i]) : ''), ''));

/** Marks a trusted string (e.g. an SVG) as already-safe HTML. */
export const raw = (value) => new Safe(value);
