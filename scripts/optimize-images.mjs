// One-off helper: converts the original (legacy) images into web-sized WebP files in src/assets/img.
// Run with: npm run images
import { readdir, mkdir } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const SRC = 'iPortfolio/assets/img';
const OUT = 'src/assets/img';

// [source file (relative to SRC), output name (relative to OUT, no extension), max width]
const jobs = [
  ['Photo2.jpg', 'profile-portrait', 900],
  ['Photo4.jpg', 'profile-landscape', 1200],
];

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
for (const file of await readdir(join(SRC, 'portfolio'))) {
  const { name } = parse(file);
  jobs.push([`portfolio/${file}`, `certificates/${slug(name.replace(/_page-0001$/, ''))}`, 900]);
}

await mkdir(join(OUT, 'certificates'), { recursive: true });
for (const [file, out, width] of jobs) {
  const dest = join(OUT, `${out}.webp`);
  const info = await sharp(join(SRC, file))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(dest);
  console.log(`${dest}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}

// 1200x630 social-share image (Open Graph / Twitter), served from /public so the URL is stable.
await sharp(join(SRC, 'Photo4.jpg'))
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile('public/og-image.jpg');
console.log('public/og-image.jpg  1200x630');
