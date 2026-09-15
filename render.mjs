import handler from './.output/server/index.mjs';

const path = process.argv[2] || '/';
const response = await handler.fetch(
  new Request(`http://localhost${path}`),
  {},
  { waitUntil: () => {} },
);

process.stdout.write(await response.text());
