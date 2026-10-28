// Resolves "folder/file.webp" (as written in src/data/portfolio.js) to the hashed URL Vite emits.
const images = import.meta.glob('../assets/img/**/*.{webp,jpg,jpeg,png,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const img = (path) => {
  const url = images[`../assets/img/${path}`];
  if (!url) console.warn(`[assets] Missing image: src/assets/img/${path}`);
  return url ?? '';
};
