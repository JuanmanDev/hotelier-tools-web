#!/usr/bin/env node

/**
 * Development watcher for content changes that regenerates search data
 * Run this in parallel with `npm run dev` for automatic search data updates
 */

import { watch } from 'chokidar'
import { execSync } from 'child_process'
import { join } from 'path'

const contentPaths = [
  'content/**/*.md',
  'i18n/locales/*.json',
  'data/tools.ts',
  'data/toolsData.ts'
]

console.log('👀 Watching content files for changes...')
console.log('📁 Watching paths:', contentPaths.join(', '))

const watcher = watch(contentPaths, {
  ignored: /node_modules/,
  persistent: true,
  ignoreInitial: true
})

let timeout
const debounceMs = 1000

function regenerateSearchData() {
  if (timeout) clearTimeout(timeout)
  
  timeout = setTimeout(() => {
    console.log('🔄 Content changed, regenerating search data...')
    try {
      execSync('node scripts/generate-search-data.js', { stdio: 'inherit' })
      console.log('✅ Search data regenerated successfully')
    } catch (error) {
      console.error('❌ Failed to regenerate search data:', error)
    }
  }, debounceMs)
}

watcher
  .on('add', path => {
    console.log(`📄 File added: ${path}`)
    regenerateSearchData()
  })
  .on('change', path => {
    console.log(`📝 File changed: ${path}`)
    regenerateSearchData()
  })
  .on('unlink', path => {
    console.log(`🗑️  File removed: ${path}`)
    regenerateSearchData()
  })

console.log('🚀 Content watcher started! Press Ctrl+C to stop.')

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down content watcher...')
  watcher.close().then(() => process.exit(0))
})
