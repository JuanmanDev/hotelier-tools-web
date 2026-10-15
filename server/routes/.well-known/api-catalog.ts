// /.well-known/api-catalog (RFC 9727): where the Hotelier Tools REST API and MCP server live and are documented
export default defineEventHandler((event) => {
  const base = useRuntimeConfig(event).public.baseUrl || 'https://hotelier.tools'
  setHeader(event, 'content-type', 'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"')
  return {
    linkset: [
      {
        anchor: 'https://dashboard.hotelier.tools/api/v1',
        'service-desc': [{ href: 'https://dashboard.hotelier.tools/api/v1/openapi.json', type: 'application/json' }],
        'service-doc': [
          { href: `${base}/tools/bot/api-mcp`, type: 'text/html' },
          { href: `${base}/blog/little-hotelier-api`, type: 'text/html' }
        ],
        status: [{ href: 'https://dashboard.hotelier.tools/api/v1/health' }]
      },
      {
        anchor: 'https://dashboard.hotelier.tools/api/mcp',
        'service-doc': [
          { href: `${base}/tools/bot/api-mcp`, type: 'text/html' },
          { href: `${base}/blog/little-hotelier-mcp-claude-code-cursor-vscode`, type: 'text/html' }
        ]
      }
    ]
  }
})
