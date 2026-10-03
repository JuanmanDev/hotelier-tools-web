// Checks every blog article: frontmatter, components, links, images. Usage: npm run validate:blog [-- locale ...]
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const root = path.join(__dirname, '..')
const blogDir = path.join(root, 'content/blog')
const locales = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(blogDir)
const enSlugs = new Set(fs.readdirSync(path.join(blogDir, 'en')).map(f => f.replace(/\.md$/, '')))
const scripts = new Set(fs.readdirSync(path.join(root, 'content/scripts/en')).map(f => f.replace(/\.md$/, '')))
const features = new Set(['dashboard', 'invoicing', 'automated-checks', 'dynamic-pricing', 'guest-inbox', 'ai-assistant', 'ine-reports', 'waitlist', 'automations', 'api-mcp'])
const categories = new Set(['ai', 'api', 'invoicing', 'operations', 'pricing', 'guests', 'compliance', 'tips'])
const staticPages = new Set(['/', '/tools', '/tools/bot', '/tools/ui', '/tools/ui/instructions', '/chrome-extensions', '/faq', '/contact', '/documentation', '/blog', '/marketing'])

let problems = 0
const report = (file, msg) => { problems++; console.log(`${file}: ${msg}`) }

for (const loc of locales) {
  const dir = path.join(blogDir, loc)
  if (!fs.existsSync(dir)) continue
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
    const file = `${loc}/${f}`
    const raw = fs.readFileSync(path.join(dir, f), 'utf8').replace(/\r\n?/g, '\n')
    const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
    if (!m) { report(file, 'no frontmatter'); continue }
    let fm
    try { fm = yaml.load(m[1]) } catch (e) { report(file, 'YAML: ' + e.message.split('\n')[0]); continue }
    const body = m[2]
    for (const k of ['title', 'description', 'date', 'category', 'cover', 'coverAlt']) if (!fm[k]) report(file, `missing ${k}`)
    if (fm.description && fm.description.length > 160) report(file, `description ${fm.description.length} chars`)
    if (fm.seoTitle && fm.seoTitle.length > 65) report(file, `seoTitle ${fm.seoTitle.length} chars`)
    if (fm.category && !categories.has(fm.category)) report(file, `bad category ${fm.category}`)
    if (fm.feature && !features.has(fm.feature)) report(file, `bad feature ${fm.feature}`)
    if (!Array.isArray(fm.faq) || fm.faq.length < 3) report(file, 'faq < 3')
    else fm.faq.forEach((q, i) => { if (!q.q || !q.a) report(file, `faq ${i} incomplete`) })
    if (!enSlugs.has(f.replace(/\.md$/, ''))) report(file, 'slug not in en')
    if (/^# /m.test(body.replace(/```[\s\S]*?```/g, ''))) report(file, 'H1 in body')
    if (/TODO/.test(raw)) report(file, `TODO x${(raw.match(/TODO/g) || []).length}`)
    // Component blocks are opened and closed
    const opens = (body.replace(/```[\s\S]*?```/g, '').match(/^::[a-z-]+/gm) || []).length
    const closes = (body.replace(/```[\s\S]*?```/g, '').match(/^::\s*$/gm) || []).length
    if (opens !== closes) report(file, `components open ${opens} close ${closes}`)
    // Images exist
    const imgs = [fm.cover, ...[...body.matchAll(/src="([^"]+)"/g)].map(x => x[1]), ...[...body.matchAll(/!\[[^\]]*\]\(([^)\s]+)/g)].map(x => x[1])]
    for (const src of imgs) if (src && src.startsWith('/') && !fs.existsSync(path.join(root, 'public', src))) report(file, `missing image ${src}`)
    // Internal links resolve
    for (const [, href] of body.matchAll(/\]\((\/[^)\s#]*)(#[^)]*)?\)/g)) {
      if (href.startsWith('/images/')) continue
      if (href.startsWith('/blog/')) { if (!enSlugs.has(href.slice(6))) report(file, `bad blog link ${href}`); continue }
      if (href.startsWith('/tools/bot/')) { if (!features.has(href.slice(11))) report(file, `bad feature link ${href}`); continue }
      if (href.startsWith('/tools/ui/') && href !== '/tools/ui/instructions') { if (!scripts.has(href.slice(10))) report(file, `bad script link ${href}`); continue }
      if (!staticPages.has(href)) report(file, `unknown internal link ${href}`)
    }
  }
}
console.log(problems ? `\n${problems} problem(s)` : 'all good')
