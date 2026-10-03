// /llms.txt: a plain-text map of the site for AI assistants and answer engines (https://llmstxt.org)
import { platformSlides } from '~~/data/platform'

export default defineEventHandler(async (event) => {
  const base = useRuntimeConfig(event).public.baseUrl || 'https://hotelier.tools'
  const posts = await queryCollection(event, 'content')
    .where('path', 'LIKE', '/blog/en/%')
    .select('path', 'title', 'description', 'meta')
    .all()

  const guides = posts
    .filter(p => (p.meta as { date?: string })?.date)
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(p => `- [${p.title}](${base}/blog/${p.path.split('/').pop()}): ${p.description}`)

  const features = platformSlides.map(f => `- [${f.slug}](${base}/tools/bot/${f.slug})`)

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return [
    '# Hotelier Tools',
    '',
    '> Independent dashboard and free browser scripts for hotels, hostels and B&Bs that use Little Hotelier (by SiteMinder): bulk invoices, automated reservation checks, dynamic pricing, a WhatsApp/email/Booking.com inbox, an AI assistant, INE reports for Spain, a REST API and an MCP server for Claude, ChatGPT and other AI assistants. Not affiliated with SiteMinder.',
    '',
    `Dashboard: https://dashboard.hotelier.tools. Public demo with invented data: https://demo.hotelier.tools. Guides are available in English, Spanish, French, German, Italian, Portuguese, Indonesian and Thai under ${base}/<locale>/blog.`,
    '',
    '## Guides',
    '',
    ...guides,
    '',
    '## Features',
    '',
    ...features,
    '',
    '## Free tools',
    '',
    `- [Browser userscripts for Little Hotelier](${base}/tools/ui)`,
    `- [Chrome extensions](${base}/chrome-extensions)`,
    ''
  ].join('\n')
})
