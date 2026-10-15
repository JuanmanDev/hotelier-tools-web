// /llms.txt: a plain-text map of the site for AI assistants and answer engines (https://llmstxt.org)
export default defineEventHandler(async (event) => {
  const base = useRuntimeConfig(event).public.baseUrl || 'https://hotelier.tools'
  const pageList = async (prefix: string) => (await queryCollection(event, 'content')
    .where('path', 'LIKE', `${prefix}%`)
    .select('path', 'title', 'description', 'meta')
    .all())
    .sort((a, b) => a.title.localeCompare(b.title))

  const guides = (await pageList('/blog/en/'))
    .filter(p => (p.meta as { date?: string })?.date)
    .map(p => `- [${p.title}](${base}/blog/${p.path.split('/').pop()}): ${p.description}`)
  const features = (await pageList('/features/en/'))
    .map(p => `- [${p.title}](${base}/tools/bot/${p.path.split('/').pop()})${p.description ? `: ${p.description}` : ''}`)
  const scripts = (await pageList('/scripts/en/'))
    .map(p => `- [${p.title}](${base}/tools/ui/${p.path.split('/').pop()})${p.description ? `: ${p.description}` : ''}`)

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return [
    '# Hotelier Tools',
    '',
    '> Independent dashboard and free browser scripts for hotels, hostels and B&Bs that use Little Hotelier (by SiteMinder): bulk invoices, automated reservation checks, dynamic pricing, a WhatsApp/email/Booking.com inbox, an AI assistant, INE reports for Spain, a REST API and an MCP server for Claude, ChatGPT and other AI assistants. Not affiliated with SiteMinder.',
    '',
    `Dashboard: https://dashboard.hotelier.tools. Public demo with invented data: https://demo.hotelier.tools. Every page is available in English (US and UK), Spanish, French, German, Italian, Portuguese, Indonesian and Thai under ${base}/<locale>/ (en-gb, es, fr, de, it, pt, id, th).`,
    '',
    '## Guides',
    '',
    ...guides,
    '',
    '## Dashboard features',
    '',
    ...features,
    '',
    '## Free browser scripts (Tampermonkey, for Chrome, Edge and Firefox)',
    '',
    `- [All scripts](${base}/tools/ui) and [installation guide](${base}/tools/ui/instructions)`,
    ...scripts,
    '',
    '## For developers and AI assistants',
    '',
    '- REST API base URL: https://dashboard.hotelier.tools/api/v1 (Bearer token from the dashboard)',
    '- OpenAPI spec: https://dashboard.hotelier.tools/api/v1/openapi.json',
    '- MCP server (remote HTTP): https://dashboard.hotelier.tools/api/mcp',
    `- [REST API and MCP overview](${base}/tools/bot/api-mcp), [API catalog](${base}/.well-known/api-catalog)`,
    '',
    '## About',
    '',
    `- [About Hotelier Tools](${base}/about), [Privacy policy](${base}/privacy), [Terms](${base}/terms)`,
    '- Source code: https://github.com/JuanmanDev/hotelier-tools-web and https://github.com/JuanmanDev/TampermonkeyLittleHotelier',
    ''
  ].join('\n')
})
