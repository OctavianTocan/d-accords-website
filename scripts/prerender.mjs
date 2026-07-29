import { readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createServer } from 'vite'

const root = process.cwd()
const outputPath = resolve(root, 'dist/index.html')
const prerenderedRootPattern =
  /<div id="root">\s*<div class="site-shell">/
const externalScriptPattern = /<script\b[^>]*\bsrc\s*=/i

function assertProductionContract(html) {
  if (!prerenderedRootPattern.test(html)) {
    throw new Error('Production HTML does not contain the prerendered app')
  }

  if (externalScriptPattern.test(html)) {
    throw new Error('Production HTML contains an external client script')
  }
}

const vite = await createServer({
  root,
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true },
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
  const template = await readFile(outputPath, 'utf8')
  const placeholder = '<div id="root"></div>'
  const clientScriptPattern =
    /\s*<script type="module" crossorigin src="([^"]+\.js)"><\/script>/
  const clientScript = template.match(clientScriptPattern)
  const rendered = render()
  const imagePreloadPattern = /<link rel="preload" as="image"[^>]*\/>/
  const imagePreload = rendered.match(imagePreloadPattern)?.[0]

  if (!template.includes(placeholder)) {
    throw new Error('Prerender root placeholder was not found')
  }

  if (!clientScript) {
    throw new Error('Prerender client script was not found')
  }

  if (!imagePreload) {
    throw new Error('Prerender image preload was not found')
  }

  const appMarkup = rendered.replace(imagePreloadPattern, '')
  const html = template
    .replace(clientScriptPattern, '')
    .replace('</head>', `    ${imagePreload}\n  </head>`)
    .replace(placeholder, `<div id="root">${appMarkup}</div>`)
    .replaceAll('srcSet=', 'srcset=')
    .replaceAll('fetchPriority=', 'fetchpriority=')
    .replaceAll('imageSrcSet=', 'imagesrcset=')
    .replaceAll('imageSizes=', 'imagesizes=')

  await writeFile(outputPath, html)
  await rm(resolve(root, 'dist', clientScript[1].replace(/^\//, '')))
  assertProductionContract(await readFile(outputPath, 'utf8'))
} finally {
  await vite.close()
}
