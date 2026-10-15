---
title: "วิธีใช้ Claude Code กับข้อมูล Little Hotelier (MCP)"
seoTitle: "Little Hotelier MCP ใน Claude Code, Cursor และ VS Code"
description: "เพิ่ม MCP server ของ Hotelier Tools ใน Claude Code, Cursor, VS Code, Windsurf หรือ Gemini CLI แล้วสร้างรายงานอัตราการเข้าพัก ซิงก์ Sheets หรือแดชบอร์ด"
date: 2026-10-03
category: ai
tags: [mcp, claude code, cursor, vs code, api]
keywords: [claude code วิธีใช้, claude code คือ, claude code mcp setup, cursor mcp.json, vscode mcp.json, little hotelier mcp, gemini cli mcp, windsurf mcp config]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "คู่มือตั้งค่า MCP ใน Hotelier Tools: คำอธิบาย What is MCP? และแท็บ Client configuration สำหรับ Claude Desktop, VS Code, Cursor และ Custom / SDK โดยเลือก Claude Desktop และแสดงโค้ด claude_desktop_config.json"
faq:
  - q: "คำสั่ง claude mcp add สำหรับ Little Hotelier คืออะไร?"
    a: "รันคำสั่ง claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header \"Authorization: Bearer htk_YOUR_API_KEY\" โดยเปลี่ยนคีย์เป็นคีย์ที่สร้างจาก Developer > API Keys ใน Hotelier Tools แล้วตรวจสอบด้วย /mcp ใน Claude Code"
  - q: "ไฟล์ mcp.json อยู่ที่ไหนใน Cursor และ VS Code?"
    a: "Cursor อ่าน ~/.cursor/mcp.json สำหรับทุกโปรเจกต์ และ .cursor/mcp.json ภายในโปรเจกต์ ส่วน VS Code อ่าน .vscode/mcp.json ใน workspace และไฟล์ระดับผู้ใช้ที่เปิดด้วยคำสั่ง MCP: Open User Configuration โดย VS Code ใช้คีย์ servers ไม่ใช่ mcpServers"
  - q: "ต้องเป็นนักพัฒนาถึงจะใช้ Claude Code กับข้อมูลโรงแรมได้หรือไม่?"
    a: "ไม่จำเป็น แค่ติดตั้ง Claude Code วางคำสั่งหนึ่งบรรทัด แล้วถามเป็นภาษาพูดธรรมดา ถ้ารู้ว่าไฟล์ถูกบันทึกไว้ที่ไหนและรันสคริปต์อย่างไรจะช่วยได้มาก แต่ Claude Code ก็อธิบายแต่ละขั้นตอนให้ได้ระหว่างทำงาน"
  - q: "เข้าสู่ระบบแทนการใช้ API key ได้ไหม?"
    a: "ได้ ถ้าไคลเอนต์รองรับ OAuth ให้เพิ่ม URL ของเซิร์ฟเวอร์โดยไม่ใส่ header แล้วเข้าสู่ระบบเมื่อไคลเอนต์ถาม เช่น ใน Claude Code ให้รัน /mcp แล้วเลือกยืนยันตัวตน การเข้าสู่ระบบมีอายุ 30 วัน ส่วนคีย์เหมาะกว่าสำหรับสคริปต์ที่รันเองโดยไม่มีคนเฝ้า"
  - q: "นี่เป็น API อย่างเป็นทางการของ Little Hotelier หรือ SiteMinder หรือไม่?"
    a: "ไม่ใช่ Hotelier Tools เป็นเครื่องมืออิสระ ไม่ได้มีส่วนเกี่ยวข้องกับ SiteMinder หรือ Little Hotelier และไม่ได้รับการรับรองจากทั้งสองบริษัท โดยเชื่อมต่อผ่านบัญชี Little Hotelier ของที่พักคุณเอง และมี REST API กับ MCP server ของตัวเอง"
---

เพิ่ม MCP server ระยะไกลหนึ่งตัว คือ `https://dashboard.hotelier.tools/api/mcp` พร้อม API key ของ Hotelier Tools แล้ว Claude Code, Cursor, VS Code (โหมด agent ของ Copilot), Windsurf หรือ Gemini CLI จะอ่านข้อมูลการจอง ราคา และใบแจ้งหนี้ใน Little Hotelier ของคุณได้ระหว่างเขียนโค้ดให้คุณ ใน Claude Code ใช้แค่คำสั่งเดียว: `claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"`

ด้านล่างคือการตั้งค่าแบบตรงตัวของแต่ละเครื่องมือ (ตรวจเทียบกับเอกสารของผู้ให้บริการแต่ละรายเมื่อเดือนตุลาคม 2026) ไอเดียสามอย่างที่น่าสร้าง และกรณีที่ควรเรียก REST API โดยตรงแทน

## ก่อนเริ่ม: สร้าง API key

Little Hotelier ไม่มี MCP server และเอกสาร API สำหรับพันธมิตรของ SiteMinder เองก็ระบุว่าข้อมูลห้องว่างและราคา[ดึงจาก Little Hotelier ไม่ได้](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers) Hotelier Tools มีทั้ง MCP server และ REST API โดยเชื่อมต่อผ่านบัญชี Little Hotelier ของที่พักคุณเอง Hotelier Tools ไม่ได้มีส่วนเกี่ยวข้องกับ SiteMinder หรือ Little Hotelier และไม่ได้รับการรับรองจากทั้งสองบริษัท อ่านพื้นฐานเพิ่มเติม: [Little Hotelier มี API ไหม?](/blog/little-hotelier-api)

1. ใน Hotelier Tools เชื่อมต่อ Little Hotelier ที่หน้า **Credentials** (`/credentials`) หากยังไม่ได้ทำ
2. เปิด **Developer → API & MCP → API Keys** (`/developer/api-keys`)
3. พิมพ์ชื่อที่บอกว่าจะใช้คีย์นี้ที่ไหน เช่น `cursor-laptop` แล้วกด **Generate key**
4. คัดลอกคีย์ทันที เพราะระบบเตือนว่า "Copy this key now — it will not be shown again." (คีย์จะไม่แสดงอีก) คีย์จะขึ้นต้นด้วย `htk_`

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="หน้า API keys ใน Hotelier Tools: ฟอร์ม Generate a new key พร้อมช่องชื่อและปุ่ม Generate key คีย์ที่ใช้งานอยู่หนึ่งตัว (MCP internal (chat) แบบปิดบัง) พร้อมปุ่ม Revoke และหมายเหตุ Good security practice" caption="ใช้หนึ่งคีย์ต่อหนึ่งเครื่องมือ จะได้เพิกถอนเฉพาะคีย์ที่เลิกใช้ได้ง่าย" path="/developer/api-keys"}
::

คีย์มีสิทธิ์เท่ากับบัญชี Hotelier Tools ของคุณ และใช้ได้กับที่พักที่คุณสร้างคีย์ไว้เท่านั้น สร้างคีย์ได้สูงสุด 10 ตัว

**อย่าใส่คีย์ไว้ในไฟล์** ให้เก็บไว้ในตัวแปรสภาพแวดล้อม (environment variable) ชื่อ `HT_API_KEY` แล้วอ้างถึงตัวแปรนี้ในไฟล์ตั้งค่า

```bash [macOS / Linux]
echo 'export HT_API_KEY="htk_YOUR_API_KEY"' >> ~/.zshrc   # หรือ ~/.bashrc
```

```powershell [Windows PowerShell]
setx HT_API_KEY "htk_YOUR_API_KEY"
```

เปิดเทอร์มินัลใหม่ (และรีสตาร์ตโปรแกรมแก้ไขโค้ด) เพื่อให้โปรแกรมรู้จักตัวแปรนี้

## วิธีเพิ่ม MCP server ใน Claude Code, Cursor, VS Code, Windsurf และ Gemini CLI

ทุกเครื่องมือเก็บข้อมูลสามอย่างเหมือนกัน (ที่อยู่ transport และคีย์) แต่รูปแบบไฟล์ต่างกันเล็กน้อย เลือกดูเครื่องมือที่คุณใช้

### Claude Code

Claude Code มีคำสั่งในตัวสำหรับเซิร์ฟเวอร์ระยะไกล ([เอกสารของ Anthropic](https://code.claude.com/docs/en/mcp))

```bash [Terminal]
claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"
```

จากนั้นเปิด `claude` แล้วพิมพ์ `/mcp` ควรเห็น Hotelier Tools ขึ้นสถานะ **connected** ถ้าขึ้น `failed` พร้อม 401 แปลว่าคีย์ผิด

- **ขอบเขต (scope)** โดยค่าเริ่มต้น เซิร์ฟเวอร์จะถูกบันทึกไว้ใช้เฉพาะโฟลเดอร์ปัจจุบัน เพิ่ม `--scope user` หลังชื่อเพื่อใช้ในทุกโปรเจกต์ หรือ `--scope project` เพื่อเขียนไฟล์ `.mcp.json` ที่แชร์ร่วมกัน
- **เข้าสู่ระบบแทนคีย์** รันคำสั่งโดยไม่ใส่ `--header` แล้วใน Claude Code พิมพ์ `/mcp` และยืนยันตัวตนในเบราว์เซอร์ ถ้าคุณเชื่อมต่อ Hotelier Tools เป็น connector บน claude.ai ไว้แล้ว Claude Code จะดึงมาใช้ได้เมื่อเข้าสู่ระบบด้วยบัญชี Claude เดียวกัน

สำหรับโปรเจกต์ที่แชร์กับเพื่อนร่วมงานหรือเก็บใน Git ให้ใส่เซิร์ฟเวอร์ใน `.mcp.json` และให้แต่ละคนใส่คีย์ของตัวเอง

```json [.mcp.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "type": "http",
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${HT_API_KEY}" }
    }
  }
}
```

ต้องมีบรรทัด `"type": "http"` เพราะ Claude Code ถือว่ารายการที่มี `url` แต่ไม่มี `type` เป็นการตั้งค่าที่ผิด

### Cursor

Cursor อ่าน `~/.cursor/mcp.json` สำหรับทุกโปรเจกต์ หรือ `.cursor/mcp.json` ภายในหนึ่งโปรเจกต์ ([เอกสาร Cursor](https://cursor.com/docs/context/mcp))

```json [~/.cursor/mcp.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${env:HT_API_KEY}" }
    }
  }
}
```

บันทึกไฟล์ แล้วตรวจว่าเปิดใช้งานเซิร์ฟเวอร์ในการตั้งค่า MCP ของ Cursor แล้ว (เวอร์ชันล่าสุดแสดงรายการเซิร์ฟเวอร์ใต้ **Customize** ในแถบด้านข้าง) จากนั้นถามในแชต **Agent** โดยค่าเริ่มต้น Cursor จะขออนุมัติก่อนรันเครื่องมือ ควรคงไว้แบบนั้นสำหรับเซิร์ฟเวอร์นี้ ถ้าไม่ใส่ `headers` Cursor จะเสนอให้เข้าสู่ระบบผ่านเบราว์เซอร์แทน

### VS Code กับ GitHub Copilot

VS Code ใช้ `.vscode/mcp.json` โดยมี `servers` เป็นคีย์บนสุดและต้องมี `"type": "http"` ([เอกสาร VS Code](https://code.visualstudio.com/docs/agents/reference/mcp-configuration)) ฟีเจอร์ `inputs` ของ VS Code จะถามคีย์ครั้งเดียวแล้วเก็บไว้ในพื้นที่จัดเก็บที่ปลอดภัยของ VS Code คีย์จึงไม่ปรากฏในไฟล์เลย

```json [.vscode/mcp.json]
{
  "inputs": [
    {
      "type": "promptString",
      "id": "ht-api-key",
      "description": "Hotelier Tools API key (htk_…)",
      "password": true
    }
  ],
  "servers": {
    "hotelier-tools": {
      "type": "http",
      "url": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${input:ht-api-key}" }
    }
  }
}
```

เปิด Copilot Chat สลับเป็นโหมด **Agent** และใช้ **Configure Tools** เพื่อดูเครื่องมือของ Hotelier Tools VS Code อาจขอให้คุณยืนยันว่าเชื่อถือเซิร์ฟเวอร์นี้ตอนเริ่มทำงานครั้งแรก ถ้าต้องการใช้กับทุก workspace ให้รัน **MCP: Open User Configuration** แล้ววางบล็อกเดียวกันที่นั่น VS Code ยังรองรับการเข้าสู่ระบบผ่านเบราว์เซอร์ถ้าไม่ใส่ `headers`

::screenshot{src="/images/blog/demo/en/mcp-config-vscode-copilot.webp" alt="แท็บ VS Code / GitHub Copilot ของหน้าตั้งค่า MCP ของ Hotelier Tools: ตัวอย่าง .vscode/mcp.json ที่มี servers, hotelier-tools, type http, URL /api/mcp ของเดโม และ header Authorization พร้อมตัวแทนคีย์ htk_YOUR_API_KEY แล้วต่อด้วย Turn on Agent mode in Copilot Chat" caption="หน้า MCP Setup มีตัวอย่างพร้อมใช้สำหรับแต่ละไคลเอนต์ เดโมจะแสดงที่อยู่ของเดโมเอง ส่วนของคุณคือ dashboard.hotelier.tools" path="/developer/mcp-setup" width="1036" height="446"}
::

### Windsurf และ Gemini CLI

**Windsurf** (ปัจจุบันเอกสารย้ายไปอยู่กับ Devin) อ่าน `~/.codeium/windsurf/mcp_config.json` และใช้ `serverUrl` สำหรับเซิร์ฟเวอร์ระยะไกล ([เอกสาร](https://docs.devin.ai/windsurf/plugins/cascade/mcp))

```json [~/.codeium/windsurf/mcp_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "serverUrl": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer ${env:HT_API_KEY}" }
    }
  }
}
```

Windsurf จำกัด Cascade ไว้ที่เครื่องมือรวม 100 รายการ และ Hotelier Tools มีเครื่องมือมากกว่า 100 รายการ คุณจึงอาจต้องปิดเครื่องมือที่ไม่ได้ใช้ในแผง MCP

**Gemini CLI** อ่าน `~/.gemini/settings.json` (หรือ `.gemini/settings.json` ในโปรเจกต์) และใช้ `httpUrl` สำหรับเซิร์ฟเวอร์ชนิดนี้ ส่วน `url` จะหมายถึง transport SSE รุ่นเก่า ซึ่ง Hotelier Tools ไม่รองรับ ([เอกสาร](https://geminicli.com/docs/tools/mcp-server/))

```json [~/.gemini/settings.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "httpUrl": "https://dashboard.hotelier.tools/api/mcp",
      "headers": { "Authorization": "Bearer $HT_API_KEY" }
    }
  }
}
```

หรือจากเทอร์มินัล: `gemini mcp add --transport http --header "Authorization: Bearer htk_YOUR_API_KEY" hotelier-tools https://dashboard.hotelier.tools/api/mcp` พิมพ์ `/mcp` ภายใน Gemini CLI เพื่อตรวจสอบ

การตั้งค่าสองแบบนี้ทำตามเอกสารของแต่ละผู้ให้บริการ เรายังไม่ได้ทดสอบในทุกเวอร์ชัน

| เครื่องมือ | ไฟล์ตั้งค่า | คีย์บนสุด | คีย์ URL |
|---|---|---|---|
| Claude Code | `.mcp.json` | `mcpServers` | `url` + `"type": "http"` |
| Cursor | `.cursor/mcp.json` | `mcpServers` | `url` |
| VS Code | `.vscode/mcp.json` | `servers` | `url` + `"type": "http"` |
| Windsurf | `mcp_config.json` | `mcpServers` | `serverUrl` |
| Gemini CLI | `settings.json` | `mcpServers` | `httpUrl` |

## สามอย่างที่น่าลองสร้าง

เคล็ดลับคือให้เอเจนต์ใช้ MCP *ดู* ข้อมูลจริงของคุณ แล้วเขียนโค้ดที่เรียก [REST API](/tools/bot/api-mcp) เพื่อให้รันได้เองทุกเดือนโดยไม่ต้องใช้ AI

### รายงานอัตราการเข้าพักรายเดือน

ถาม Claude Code (หรือเอเจนต์ของ Cursor) ในโฟลเดอร์ว่าง

::prompt{label="Claude Code"}
ใช้ MCP server hotelier-tools ดูประเภทห้องของฉันและรายการจองของเดือนที่แล้ว จากนั้นเขียนสคริปต์ Node.js ที่เรียก REST API ของ Hotelier Tools (spec: https://dashboard.hotelier.tools/api/v1/openapi.json) โดยใช้คีย์ใน HT_API_KEY และสำหรับเดือนที่ฉันระบุ ให้พิมพ์อัตราการเข้าพักและราคาห้องเฉลี่ยต่อวัน (ADR) แยกตามประเภทห้อง แล้วบันทึกเป็นไฟล์ CSV
::

สคริปต์ที่ดีจะเริ่มประมาณนี้ คือดึงประเภทห้องและทุกการจองที่คาบเกี่ยวกับเดือนนั้น แล้วบันทึกข้อมูลดิบไว้ เพื่อให้คุณตรวจฟิลด์ก่อนเริ่มคำนวณ

```js [fetch-month.mjs]
// วิธีใช้: node fetch-month.mjs 2026-09   (ต้องตั้ง HT_API_KEY ไว้ในสภาพแวดล้อม)
import { writeFile } from "node:fs/promises";

const API = "https://dashboard.hotelier.tools/api/v1";
const headers = {
  Authorization: `Bearer ${process.env.HT_API_KEY}`,
  "Content-Type": "application/json",
};

async function call(path, options = {}) {
  const res = await fetch(`${API}${path}`, { ...options, headers });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

const month = process.argv[2];
const [year, mon] = month.split("-").map(Number);
const startDate = `${month}-01`;
const endDate = new Date(Date.UTC(year, mon, 0)).toISOString().slice(0, 10);

const roomTypes = await call("/room-types");
const reservations = await call("/methods/getReservationsByDateRange", {
  method: "POST",
  body: JSON.stringify({ params: { startDate, endDate } }),
});

await writeFile(
  `raw-${month}.json`,
  JSON.stringify({ roomTypes: roomTypes.data, reservations: reservations.result }, null, 2)
);
console.log(`Saved raw-${month}.json`);
```

spec ของ API ระบุว่าออบเจ็กต์การจองมาจาก Little Hotelier และ "shape may vary" (โครงสร้างอาจต่างกัน) จึงควรให้เอเจนต์อ่านไฟล์ที่บันทึกไว้ก่อนคำนวณอะไรก็ตาม ส่วน `/room-types` ให้ค่า `totalRooms` ของแต่ละประเภทห้อง ซึ่งเป็นอีกครึ่งหนึ่งของสูตรคำนวณอัตราการเข้าพัก

### ซิงก์ Google Sheets

ถ้าต้องการชีตที่แสดงแขกที่จะมาถึงใน 30 วันข้างหน้าและอัปเดตทุกเช้า ให้เปิดสเปรดชีตของคุณ ไปที่ **Extensions → Apps Script** แล้ววางโค้ดนี้

```js [Code.gs]
function syncArrivals() {
  const key = PropertiesService.getScriptProperties().getProperty('HT_API_KEY');
  const fmt = d => Utilities.formatDate(d, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  const today = new Date();
  const in30 = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const url = 'https://dashboard.hotelier.tools/api/v1/reservations'
    + '?startDate=' + fmt(today) + '&endDate=' + fmt(in30) + '&limit=100';

  const res = UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Bearer ' + key },
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 200) throw new Error(res.getContentText());

  const rows = JSON.parse(res.getContentText()).data.map(r => [
    r.id, r.guestName, r.status, r.checkIn, r.checkOut, r.roomType, r.totalAmount,
  ]);
  const book = SpreadsheetApp.getActive();
  const sheet = book.getSheetByName('Arrivals') || book.insertSheet('Arrivals');
  sheet.clearContents();
  sheet.appendRow(['ID', 'Guest', 'Status', 'Check-in', 'Check-out', 'Room type', 'Total']);
  if (rows.length) sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
}
```

เก็บคีย์ไว้ที่ **Project Settings → Script properties** ในชื่อ `HT_API_KEY` รันสคริปต์หนึ่งครั้งเพื่ออนุญาตการเข้าถึง แล้วเพิ่ม trigger แบบตั้งเวลารายวันที่ **Triggers** ทั้งนี้ `/reservations` ส่งข้อมูลได้สูงสุด 100 การเข้าพักต่อครั้ง โดยกรองตามวันเช็คอิน เดือนที่มีการจองเยอะจึงควรแบ่งดึงเป็นรายสัปดาห์ และอย่าลืมว่าตอนนี้ชีตมีชื่อแขกอยู่ ควรแชร์อย่างระมัดระวัง

### แดชบอร์ดขนาดเล็กที่สร้างเอง

::prompt{label="Cursor"}
สร้างเว็บแอป Node.js ขนาดเล็กที่แสดงอัตราการเข้าพักของคืนนี้ แขกที่มาถึงและออกวันนี้ และการเข้าพักที่ยังมียอดค้างชำระ โดยใช้ REST API ของ Hotelier Tools เก็บ HT_API_KEY ไว้ฝั่งเซิร์ฟเวอร์เท่านั้น เบราว์เซอร์ต้องเรียกเซิร์ฟเวอร์ของฉัน ห้ามเรียก API โดยตรง และแคชคำตอบไว้ 5 นาที
::

กฎสองข้อที่ทำให้ปลอดภัย คือเก็บคีย์ไว้ที่เซิร์ฟเวอร์เท่านั้น (เพราะใครที่เปิดหน้าเว็บก็อ่านคีย์ในโค้ดฝั่งเบราว์เซอร์ได้) และต้องแคชไว้ เพราะ API รับได้ 100 คำขอต่อนาทีต่อหนึ่ง IP

## MCP หรือ REST API: ควรใช้แบบไหน

| | MCP server | REST API |
|---|---|---|
| เหมาะกับ | ถามคำถาม และให้เอเจนต์สำรวจข้อมูลระหว่างเขียนโค้ด | สคริปต์ Sheets และแดชบอร์ดที่รันตามกำหนดเวลา |
| ที่อยู่ | `https://dashboard.hotelier.tools/api/mcp` | `https://dashboard.hotelier.tools/api/v1` |
| การยืนยันตัวตน | API key หรือเข้าสู่ระบบผ่านเบราว์เซอร์ | API key (`Authorization: Bearer htk_…`) |
| เอกสาร | หน้า MCP Setup (`/developer/mcp-setup`) | ตัวสำรวจ Swagger (`/developer/rest-api`) |

ทั้งสองแบบใช้คีย์และสิทธิ์ชุดเดียวกัน คู่มือ REST API อยู่ใน [API ของ Little Hotelier](/blog/little-hotelier-api)

## เครื่องมืออ่านกับแก้ไขข้อมูล: คุมเอเจนต์ให้อยู่

เอเจนต์เขียนโค้ดรันเครื่องมือได้เร็วมาก และนั่นคือเหตุผลที่คุณควรให้มันช้าลงในจุดนี้

- **การแก้ไขข้อมูลเกิดขึ้นทันทีที่เอเจนต์เรียกเครื่องมือ** นอกแดชบอร์ด Hotelier Tools ไม่มีการ์ดขออนุมัติ การแก้การจอง การบันทึกการชำระเงิน การปรับใช้ราคา หรือการตั้ง stop sell (ปิดการขาย) จะเกิดขึ้นทันทีที่เครื่องมือทำงาน ให้เปิดตัวเลือก "ask before running tools" (ถามก่อนรันเครื่องมือ) ในโปรแกรมแก้ไขโค้ดไว้ และอย่าใช้โหมดรันอัตโนมัติกับเซิร์ฟเวอร์นี้
- **การกระทำที่ย้อนกลับไม่ได้ถูกบล็อกอยู่แล้ว** เครื่องมือ 8 รายการ (ส่งอีเมลใบแจ้งหนี้ให้แขก คืนเงิน ยื่นแบบสำรวจ INE เชิญสมาชิกทีม ส่งอีเมลลิงก์ให้แขก ตอบคำถามบน Booking.com และการตรวจรายชื่อรอห้องที่ส่งข้อความถึงแขก) ใช้ได้เฉพาะในแดชบอร์ด
- **การแก้การจองมีสองขั้น** `propose_reservation_changes` แสดงค่าก่อน/หลัง ส่วน `apply_reservation_changes` ต้องมี `confirmed: true` อ่านข้อเสนอให้ดีก่อน
- **ห้าม commit คีย์** ใช้การอ้างอิงแบบ `${HT_API_KEY}` เพิ่มไฟล์ตั้งค่าในเครื่องลงใน `.gitignore` และเพิกถอนคีย์ที่รั่วไหลที่ `/developer/api-keys`

## แก้ปัญหา "ไม่เห็นเซิร์ฟเวอร์"

- **ไม่มีอะไรปรากฏหลังแก้ไฟล์ตั้งค่า:** รีสตาร์ตโปรแกรมแก้ไขโค้ดหรือ CLI เครื่องมือส่วนใหญ่อ่านไฟล์ MCP ตอนเริ่มทำงาน
- **Claude Code หรือ VS Code ไม่โหลดเซิร์ฟเวอร์:** ตรวจว่ามี `"type": "http"`
- **Gemini CLI เชื่อมต่อได้แต่ล้มเหลว:** ใช้ `httpUrl` ไม่ใช่ `url`
- **401:** คีย์ผิดหรือถูกเพิกถอน หรือยังไม่ได้ตั้งตัวแปรสภาพแวดล้อมในเทอร์มินัลนั้น
- **400 "No Little Hotelier credentials configured":** เชื่อมต่อ Little Hotelier ที่ `/credentials`
- **423 `lh_frozen`:** การเข้าสู่ระบบ Little Hotelier ถูกหยุดชั่วคราวหลังล็อกอินล้มเหลว (มักเพราะรหัสผ่านหมดอายุ) บันทึกรหัสผ่านใหม่ที่ **Credentials** หรือกด **Check now & resume**
- **429:** คำขอมากเกินไป ให้รอตามเวลาที่ระบุใน `Retry-After`
- **การขึ้นบรรทัดใหม่ด้วย backslash ใช้ไม่ได้บน Windows:** PowerShell ไม่ใช้ `\` ต่อบรรทัด ให้วางคำสั่งในบรรทัดเดียวตามที่แสดงด้านบน

::demo-cta{path="/developer/mcp-setup"}
::

อ่านเพิ่มเติม: [ผู้ช่วย AI สำหรับแผนกต้อนรับ](/blog/ai-assistant-hotel-front-desk)

## ขั้นตอนถัดไป

- ไม่ใช่นักพัฒนา? [เชื่อมต่อ Claude](/blog/connect-claude-to-little-hotelier) หรือ [ChatGPT](/blog/connect-chatgpt-to-little-hotelier) ในเบราว์เซอร์แทน
- เพิ่งรู้จักแนวคิดนี้? อ่าน [MCP server คืออะไร](/blog/what-is-mcp-server-hotels)
- อยากได้สเปรดชีตโดยไม่ต้องเขียนโค้ด? ดู[วิธีส่งออกการจองเป็น Excel](/blog/export-little-hotelier-reservations-excel)
