import fs from 'node:fs/promises';
import path from 'node:path';
import handler from './.output/server/index.mjs';

const routes = [
  '/',
  '/about',
  '/contact',
  '/investor-relations',
  '/project',
  '/team',
  '/vision',
];

const rewriteAssetUrls = (input) => input.replaceAll('/assets/', '/assets/protected-site/');

const outputDirectory = path.resolve('./static');
const assetSource = path.resolve('./.output/public/assets');
const assetDirectory = path.resolve('../public/assets/protected-site');
await fs.rm(outputDirectory, { recursive: true, force: true });
await fs.rm(assetDirectory, { recursive: true, force: true });
await fs.mkdir(outputDirectory, { recursive: true });
await fs.cp(assetSource, assetDirectory, { recursive: true });

const assetFiles = await fs.readdir(assetDirectory, { recursive: true, withFileTypes: true });
for (const assetFile of assetFiles) {
  if (!assetFile.isFile()) continue;

  const assetPath = path.join(assetFile.parentPath, assetFile.name);
  const source = await fs.readFile(assetPath, 'utf8');

  if (assetFile.name.endsWith('.js') || assetFile.name.endsWith('.css') || assetFile.name.endsWith('.html')) {
    await fs.writeFile(assetPath, rewriteAssetUrls(source), 'utf8');
  }
}

for (const route of routes) {
  const response = await handler.fetch(
    new Request(`http://localhost${route}`),
    {},
    { waitUntil: () => {} },
  );

  if (!response.ok) {
    throw new Error(`Could not render ${route}: ${response.status}`);
  }

  let html = await response.text();
  html = rewriteAssetUrls(html);

  const filename = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  await fs.writeFile(path.join(outputDirectory, filename), html, 'utf8');
  console.log(`Exported ${route} -> static/${filename}`);
}
