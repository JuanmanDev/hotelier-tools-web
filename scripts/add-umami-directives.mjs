import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const directories = ['pages', 'components', 'layouts'];

function processFile(filePath) {
  if (!filePath.endsWith('.vue')) return;

  let content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath, '.vue');
  const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');

  let modified = false;

  // 1. Add data-umami-view to the root element inside <template>
  const templateMatch = content.match(/<template>\s*<([a-zA-Z0-9-]+)([^>]*?)>/);
  if (templateMatch && !templateMatch[2].includes('data-umami-view')) {
    const originalTag = templateMatch[0];
    const viewData = `{"name":"view_component","file":"${fileName}","path":"${relativePath}"}`;
    const escapedViewData = viewData.replace(/"/g, '&quot;');
    const newTag = `<template>\n  <${templateMatch[1]} data-umami-view="${escapedViewData}"${templateMatch[2]}>`;
    content = content.replace(originalTag, newTag);
    modified = true;
  }

  // 2. Add data-umami-click to all <NuxtLink>, <UButton>, <a> tags
  const regex = /<(NuxtLink|UButton|a|button)(?![^>]*data-umami-click)([^>]*?)>/g;
  content = content.replace(regex, (match, tag, rest) => {
    const isSelfClosing = rest.endsWith('/');
    const cleanRest = isSelfClosing ? rest.slice(0, -1) : rest;
    
    const hrefMatch = match.match(/(?:href|to)="([^"]+)"/);
    const targetUrl = hrefMatch ? hrefMatch[1] : 'unknown';
    
    const clickData = `{"name":"click_${tag.toLowerCase()}","file":"${fileName}","target":"${targetUrl}"}`;
    const escapedClickData = clickData.replace(/"/g, '&quot;');
    const newTag = `<${tag} data-umami-click="${escapedClickData}"${cleanRest}${isSelfClosing ? '/' : ''}>`;
    modified = true;
    return newTag;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${relativePath}`);
  }
}

function traverseDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else {
      processFile(fullPath);
    }
  }
}

directories.forEach(dir => traverseDir(path.join(rootDir, dir)));
console.log('Finished injecting Umami directives.');
