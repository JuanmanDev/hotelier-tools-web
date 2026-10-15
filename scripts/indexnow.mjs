// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver...) which URLs changed after a deploy.
// Usage: node scripts/indexnow.mjs  (reads every URL from the live sitemap)
const SITE = process.env.SITE_URL || 'https://hotelier.tools'
const KEY = 'd2a04cea14c5adbea445bf45a3671f47' // public/d2a04cea14c5adbea445bf45a3671f47.txt holds the same value

const locs = async (url) => {
  const xml = await (await fetch(url)).text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim())
}

// The key file appears once Vercel has published the new build
for (let i = 0; i < 40; i++) {
  const res = await fetch(`${SITE}/${KEY}.txt`, { cache: 'no-store' }).catch(() => null)
  if (res?.ok && (await res.text()).trim() === KEY) break
  if (i === 39) throw new Error('IndexNow key file is not live yet')
  await new Promise(r => setTimeout(r, 15000))
}

const sitemaps = await locs(`${SITE}/sitemap_index.xml`)
const urls = [...new Set((await Promise.all(sitemaps.map(locs))).flat())]
const submit = () => fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls })
})
// A key IndexNow has not verified yet answers 403 for a few minutes; try again before giving up
let res = await submit()
for (let i = 0; res.status === 403 && i < 3; i++) {
  await new Promise(r => setTimeout(r, 60000))
  res = await submit()
}
console.log(`IndexNow: submitted ${urls.length} URLs, HTTP ${res.status}`)
if (!res.ok && res.status !== 202) process.exit(1)
