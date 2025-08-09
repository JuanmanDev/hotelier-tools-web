#!/usr/bin/env node

/**
 * Build-time script to generate static search data for all locales
 * This eliminates the need for API calls at runtime
 */

import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'
import { SUPPORTED_LOCALES, generateSearchDataForLocale } from '../utils/search-data-generator.js'

async function main() {
  console.log('🔍 Generating static search data for all locales...')
  
  // Ensure output directory exists
  const outputDir = join(process.cwd(), 'public', 'data', 'search')
  if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true })
  }
  
  // Generate search data for each locale
  const allData = {}
  
  for (const locale of SUPPORTED_LOCALES) {
    console.log(`📝 Processing locale: ${locale}`)
    const searchData = await generateSearchDataForLocale(locale)
    allData[locale] = searchData
    
    // Write individual locale file
    const localeFile = join(outputDir, `${locale}.json`)
    await writeFile(localeFile, JSON.stringify(searchData, null, 2), 'utf-8')
    
    console.log(`✅ Generated ${Object.keys(searchData).length} search items for ${locale}`)
  }
  
  // Write combined file
  const combinedFile = join(outputDir, 'all.json')
  await writeFile(combinedFile, JSON.stringify(allData, null, 2), 'utf-8')
  
  console.log(`🎉 Successfully generated search data for ${SUPPORTED_LOCALES.length} locales!`)
  console.log(`📁 Files saved to: ${outputDir}`)
}

// Run the script
main().catch(console.error)
