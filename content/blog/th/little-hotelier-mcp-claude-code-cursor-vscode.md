---
title: "Claude Code วิธีใช้กับข้อมูล Little Hotelier (MCP)"
seoTitle: "Claude Code วิธีใช้กับข้อมูล Little Hotelier (MCP)"
description: "เพิ่ม Hotelier Tools MCP server ใน Claude Code, Cursor, VS Code, Windsurf หรือ Gemini CLI แล้วสร้างรายงานอัตราเข้าพัก ซิงก์ Sheets หรือแดชบอร์ด"
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
    a: "รัน: claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header \"Authorization: Bearer htk_YOUR_API_KEY\" แล้วเปลี่ยนคีย์เป็นคีย์จาก Developer, API Keys ใน Hotelier Tools จากนั้นตรวจสอบด้วย /mcp ภายใน Claude Code"
  - q: "ไฟล์ mcp.json อยู่ที่ไหนใน Cursor และ VS Code?"
    a: "Cursor อ่าน ~/.cursor/mcp.json สำหรับทุกโปรเจกต์ และ .cursor/mcp.json ภายในโปรเจกต์ VS Code อ่าน .vscode/mcp.json ใน workspace และไฟล์ระดับผู้ใช้ที่เปิดด้วยคำสั่ง MCP: Open User Configuration โดย VS Code ใช้คีย์ servers ไม่ใช่ mcpServers"
  - q: "ต้องเป็นนักพัฒนาถึงจะใช้ Claude Code กับข้อมูลโรงแรมได้หรือไม่?"
    a: "ไม่จำเป็น คุณติดตั้ง Claude Code วางคำสั่งหนึ่งบรรทัด แล้วถามเป็นภาษาธรรมดา การรู้ว่าไฟล์ไปอยู่ที่ไหนและรันสคริปต์อย่างไรช่วยได้ แต่ Claude Code อธิบายแต่ละขั้นตอนให้ได้ขณะทำงาน"
  - q: "ลงชื่อเข้าใช้แทนการใช้ API key ได้ไหม?"
    a: "ได้ ในไคลเอนต์ที่รองรับ OAuth เพิ่ม URL ของเซิร์ฟเวอร์โดยไม่ใส่ header แล้วลงชื่อเข้าใช้เมื่อไคลเอนต์ถาม: ใน Claude Code รัน /mcp แล้วเลือกยืนยันตัวตน การลงชื่อเข้าใช้อยู่ได้ 30 วัน คีย์เหมาะกว่าสำหรับสคริปต์ที่รันโดยไม่มีคนดูแล"
  - q: "นี่เป็น API อย่างเป็นทางการของ Little Hotelier หรือ SiteMinder หรือไม่?"
    a: "ไม่ Hotelier Tools เป็นระบบอิสระ ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder หรือ Little Hotelier เชื่อมต่อด้วยบัญชี Little Hotelier ของที่พักคุณเอง และมี REST API กับ MCP server ของตัวเอง"
---

เพิ่ม remote MCP server หนึ่งตัวคือ `https://dashboard.hotelier.tools/api/mcp` พร้อม API key ของ Hotelier Tools แล้ว Claude Code, Cursor, VS Code (โหมด agent ของ Copilot), Windsurf หรือ Gemini CLI จะอ่านรายการจอง ราคา และใบแจ้งหนี้ใน Little Hotelier ของคุณได้ขณะเขียนโค้ดให้ ใน Claude Code ใช้คำสั่งเดียว: `claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"`

ด้านล่างคือการตั้งค่าที่ถูกต้องของแต่ละเครื่องมือ (ตรวจกับเอกสารของแต่ละผู้ให้บริการเมื่อเดือนตุลาคม 2026) สามสิ่งที่น่าสร้าง และเมื่อไรควรเรียก REST API โดยตรงแทน

## ก่อนเริ่ม: สร้าง API key

Little Hotelier ไม่มี MCP server และเอกสาร API สำหรับพันธมิตรของ SiteMinder เองก็ระบุว่าข้อมูลห้องว่างและราคา[ดึงจาก Little Hotelier ไม่ได้](https://developer.siteminder.com/smx-api/reference/availability-and-rates/publishers) Hotelier Tools มีทั้ง MCP server และ REST API โดยใช้บัญชี Little Hotelier ของที่พักคุณเอง และไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder หรือ Little Hotelier ภูมิหลัง: [Little Hotelier มี API ไหม?](/blog/little-hotelier-api)

1. ใน Hotelier Tools เชื่อมต่อ Little Hotelier ที่หน้า **Credentials** (`/credentials`) หากยังไม่ได้ทำ
2. เปิด **Developer → API & MCP → API Keys** (`/developer/api-keys`)
3. พิมพ์ชื่อที่บอกว่าคีย์จะอยู่ที่ไหน เช่น `cursor-laptop` แล้วกด **Generate key**
4. คัดลอกทันที: "Copy this key now — it will not be shown again." คีย์ขึ้นต้นด้วย `htk_`

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="หน้า API keys ใน Hotelier Tools: ฟอร์ม Generate a new key พร้อมช่องชื่อและปุ่ม Generate key คีย์ที่ใช้งานอยู่หนึ่งตัว (MCP internal (chat) แบบปิดบัง) พร้อมปุ่ม Revoke และหมายเหตุ Good security practice" caption="หนึ่งคีย์ต่อหนึ่งเครื่องมือ ทำให้เพิกถอนเฉพาะตัวที่เลิกใช้ได้ง่าย" path="/developer/api-keys"}
::

คีย์มีสิทธิ์เท่ากับบัญชี Hotelier Tools ของคุณ ในที่พักเดียวที่คุณสร้างคีย์ไว้ มีคีย์ได้สูงสุด 10 ตัว

**อย่าเก็บคีย์ไว้ในไฟล์** เก็บไว้ในตัวแปรสภาพแวดล้อมชื่อ `HT_API_KEY` แล้วอ้างถึงจากไฟล์ตั้งค่า

```bash [macOS / Linux]
echo 'export HT_API_KEY="htk_YOUR_API_KEY"' >> ~/.zshrc   # or ~/.bashrc
```

```powershell [Windows PowerShell]
setx HT_API_KEY "htk_YOUR_API_KEY"
```

เปิดเทอร์มินัลใหม่ (และรีสตาร์ตโปรแกรมแก้ไขโค้ด) เพื่อให้รับตัวแปรนี้

## วิธีเพิ่ม MCP server ใน Claude Code, Cursor, VS Code, Windsurf และ Gemini CLI

แต่ละเครื่องมือเก็บข้อมูลสามอย่างเดียวกัน (ที่อยู่ transport คีย์) ในไฟล์ที่ต่างกันเล็กน้อย เลือกเครื่องมือของคุณ

### Claude Code

Claude Code มีคำสั่งในตัวสำหรับเซิร์ฟเวอร์ระยะไกล ([เอกสารของ Anthropic](https://code.claude.com/docs/en/mcp))

```bash [Terminal]
claude mcp add --transport http hotelier-tools https://dashboard.hotelier.tools/api/mcp --header "Authorization: Bearer htk_YOUR_API_KEY"
```

จากนั้นเริ่ม `claude` แล้วพิมพ์ `/mcp` Hotelier Tools ควรแสดงเป็น **connected** ถ้าสถานะ `failed` พร้อม 401 แปลว่าคีย์ผิด

- **ขอบเขต (scope)** โดยค่าเริ่มต้นเซิร์ฟเวอร์ถูกบันทึกไว้สำหรับโฟลเดอร์ปัจจุบันเท่านั้น เพิ่ม `--scope user` หลังชื่อเพื่อใช้ในทุกโปรเจกต์ หรือ `--scope project` เพื่อเขียนไฟล์ `.mcp.json` ที่แชร์ร่วมกัน
- **ลงชื่อเข้าใช้แทนคีย์** รันคำสั่งโดยไม่ใส่ `--header` แล้วใน Claude Code พิมพ์ `/mcp` และยืนยันตัวตนในเบราว์เซอร์ หากคุณเชื่อม Hotelier Tools เป็น connector บน claude.ai ไว้แล้ว Claude Code จะรับต่อได้เมื่อลงชื่อเข้าใช้ด้วยบัญชี Claude เดียวกัน

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

บรรทัด `"type": "http"` จำเป็น: Claude Code ถือว่ารายการที่มี `url` แต่ไม่มี `type` เป็นข้อผิดพลาดของการตั้งค่า

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

บันทึก แล้วตรวจว่าเซิร์ฟเวอร์เปิดใช้งานในการตั้งค่า MCP ของ Cursor (เวอร์ชันล่าสุดแสดงรายการเซิร์ฟเวอร์ใต้ **Customize** ในแถบด้านข้าง) ถามในแชต **Agent** ตามค่าเริ่มต้น Cursor จะขออนุมัติก่อนรันเครื่องมือ ควรคงไว้แบบนั้นสำหรับเซิร์ฟเวอร์นี้ หากไม่ใส่ `headers` Cursor จะเสนอให้ลงชื่อเข้าใช้ผ่านเบราว์เซอร์แทน

### VS Code กับ GitHub Copilot

VS Code ใช้ `.vscode/mcp.json` โดยมี `servers` เป็นคีย์บนสุดและต้องมี `"type": "http"` ([เอกสาร VS Code](https://code.visualstudio.com/docs/agents/reference/mcp-configuration)) ฟีเจอร์ `inputs` ของ VS Code จะถามคีย์ครั้งเดียวและเก็บในที่เก็บข้อมูลปลอดภัยของ VS Code คีย์จึงไม่อยู่ในไฟล์

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

เปิด Copilot Chat สลับเป็นโหมด **Agent** และใช้ **Configure Tools** เพื่อดูเครื่องมือของ Hotelier Tools VS Code อาจขอให้คุณเชื่อถือเซิร์ฟเวอร์เมื่อเริ่มทำงานครั้งแรก สำหรับทุก workspace ให้รัน **MCP: Open User Configuration** แล้ววางบล็อกเดียวกันที่นั่น VS Code รองรับการลงชื่อเข้าใช้ผ่านเบราว์เซอร์ด้วยหากไม่ใส่ `headers`

::screenshot{src="/images/blog/demo/en/mcp-config-vscode-copilot.webp" alt="แท็บ VS Code / GitHub Copilot ของหน้าตั้งค่า MCP ของ Hotelier Tools: ตัวอย่าง .vscode/mcp.json ที่มี servers, hotelier-tools, type http, URL /api/mcp ของเดโม และ header Authorization พร้อมตัวแทนคีย์ htk_YOUR_API_KEY แล้วต่อด้วย Turn on Agent mode in Copilot Chat" caption="หน้า MCP Setup มีตัวอย่างพร้อมใช้สำหรับแต่ละไคลเอนต์ เดโมแสดงที่อยู่ของตัวเอง ส่วนของคุณคือ dashboard.hotelier.tools" path="/developer/mcp-setup" width="1036" height="446"}
::

### Windsurf และ Gemini CLI

**Windsurf** (ซึ่งเอกสารตอนนี้อยู่ใต้ Devin) อ่าน `~/.codeium/windsurf/mcp_config.json` และใช้ `serverUrl` สำหรับเซิร์ฟเวอร์ระยะไกล ([เอกสาร](https://docs.devin.ai/windsurf/plugins/cascade/mcp))

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

**Gemini CLI** อ่าน `~/.gemini/settings.json` (หรือ `.gemini/settings.json` ในโปรเจกต์) และใช้ `httpUrl` สำหรับเซิร์ฟเวอร์ชนิดนี้ ส่วน `url` จะหมายถึง transport SSE รุ่นเก่า ซึ่ง Hotelier Tools ไม่ให้บริการ ([เอกสาร](https://geminicli.com/docs/tools/mcp-server/))

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

## สามสิ่งที่น่าสร้าง

เคล็ดลับคือให้เอเจนต์ใช้ MCP *ดู* ข้อมูลจริงของคุณ แล้วเขียนโค้ดที่เรียก [REST API](/tools/bot/api-mcp) เพื่อให้ผลลัพธ์รันทุกเดือนโดยไม่ต้องใช้ AI

### รายงานอัตราเข้าพักรายเดือน

ถาม Claude Code (หรือเอเจนต์ของ Cursor) ในโฟลเดอร์ว่าง

::prompt{label="Claude Code"}
ใช้ MCP server hotelier-tools ดูประเภทห้องของฉันและรายการจองของเดือนที่แล้ว จากนั้นเขียนสคริปต์ Node.js ที่เรียก REST API ของ Hotelier Tools (spec: https://dashboard.hotelier.tools/api/v1/openapi.json) โดยใช้คีย์ใน HT_API_KEY และสำหรับเดือนที่ฉันระบุ ให้พิมพ์อัตราการเข้าพักและราคาห้องเฉลี่ยต่อวัน (ADR) แยกตามประเภทห้อง แล้วบันทึกเป็นไฟล์ CSV
::

สคริปต์ที่ดีเริ่มประมาณนี้ ดึงประเภทห้องและทุกการจองที่ทับซ้อนกับเดือนนั้น และบันทึกคำตอบดิบไว้ เพื่อให้คุณตรวจฟิลด์ก่อนคำนวณ

```js [fetch-month.mjs]
// Usage: node fetch-month.mjs 2026-09   (needs HT_API_KEY in your environment)
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

spec ของ API ระบุว่าออบเจ็กต์การจองมาจาก Little Hotelier และ "shape may vary" ดังนั้นให้เอเจนต์อ่านไฟล์ที่บันทึกไว้ก่อนคำนวณอะไร `/room-types` ให้ `totalRooms` ต่อประเภท ซึ่งเป็นอีกครึ่งหนึ่งของสูตรอัตราการเข้าพัก

### ซิงก์ Google Sheets

สำหรับชีตที่แสดงแขกที่จะมาถึงใน 30 วันข้างหน้าและรีเฟรชทุกเช้า เปิดสเปรดชีตของคุณ ไปที่ **Extensions → Apps Script** แล้ววาง

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

เก็บคีย์ไว้ที่ **Project Settings → Script properties** ชื่อ `HT_API_KEY` รันครั้งหนึ่งเพื่ออนุญาตการเข้าถึง แล้วเพิ่ม trigger ตามเวลารายวันที่ **Triggers** `/reservations` คืนได้สูงสุด 100 การเข้าพักต่อครั้ง กรองตามวันเช็คอิน จึงควรแบ่งเดือนที่ยุ่งเป็นรายสัปดาห์ และอย่าลืมว่าชีตนี้มีชื่อแขกอยู่ ควรแชร์อย่างระมัดระวัง

### แดชบอร์ดขนาดเล็กที่สร้างเอง

::prompt{label="Cursor"}
สร้างเว็บแอป Node.js ขนาดเล็กที่แสดงอัตราการเข้าพักของคืนนี้ แขกที่มาถึงและออกวันนี้ และการเข้าพักที่ยังมียอดค้างชำระ โดยใช้ REST API ของ Hotelier Tools เก็บ HT_API_KEY ไว้ฝั่งเซิร์ฟเวอร์เท่านั้น เบราว์เซอร์ต้องเรียกเซิร์ฟเวอร์ของฉัน ห้ามเรียก API โดยตรง และแคชคำตอบไว้ 5 นาที
::

สองกฎที่ทำให้ปลอดภัย: คีย์อยู่ที่เซิร์ฟเวอร์เท่านั้น (ใครเปิดหน้าเว็บก็อ่านคีย์ในโค้ดฝั่งเบราว์เซอร์ได้) และต้องแคช เพราะ API อนุญาต 100 คำขอต่อนาทีต่อหนึ่งที่อยู่ IP

## MCP หรือ REST API: ควรใช้อะไร

| | MCP server | REST API |
|---|---|---|
| เหมาะกับ | ถามคำถาม ให้เอเจนต์สำรวจขณะเขียนโค้ด | สคริปต์ Sheets แดชบอร์ดที่รันตามเวลา |
| ที่อยู่ | `https://dashboard.hotelier.tools/api/mcp` | `https://dashboard.hotelier.tools/api/v1` |
| การยืนยันตัวตน | API key หรือลงชื่อเข้าใช้ผ่านเบราว์เซอร์ | API key (`Authorization: Bearer htk_…`) |
| เอกสาร | หน้า MCP Setup (`/developer/mcp-setup`) | ตัวสำรวจ Swagger (`/developer/rest-api`) |

ทั้งสองใช้คีย์เดียวกันและสิทธิ์เดียวกัน คู่มือ REST อยู่ใน [API ของ Little Hotelier](/blog/little-hotelier-api)

## เครื่องมืออ่านกับเขียน: คุมเอเจนต์ให้อยู่

เอเจนต์เขียนโค้ดเก่งเรื่องรันเครื่องมืออย่างรวดเร็ว ซึ่งเป็นเหตุผลที่คุณควรชะลอมันตรงนี้

- **การเขียนข้อมูลทำงานทันทีที่เอเจนต์เรียก** นอกแดชบอร์ด Hotelier Tools ไม่มีการ์ดขออนุมัติ การแก้การจอง บันทึกการชำระเงิน ใช้ราคา หรือตั้ง stop sell เกิดขึ้นทันทีที่เครื่องมือรัน ให้เปิดการตั้งค่า "ask before running tools" ของโปรแกรมแก้ไขโค้ดไว้ และอย่าใช้โหมดรันอัตโนมัติกับเซิร์ฟเวอร์นี้
- **การกระทำที่ย้อนกลับไม่ได้ถูกบล็อกอยู่แล้ว** เครื่องมือ 8 รายการ (ส่งอีเมลใบแจ้งหนี้ให้แขก คืนเงิน ยื่นแบบสำรวจ INE เชิญสมาชิกทีม ส่งอีเมลลิงก์ให้แขก ตอบคำถามบน Booking.com และการตรวจรายการรอที่ส่งข้อความถึงแขก) ใช้ได้เฉพาะในแดชบอร์ด
- **การแก้การจองมีสองขั้น** `propose_reservation_changes` แสดงก่อนและหลัง `apply_reservation_changes` ต้องมี `confirmed: true` อ่านข้อเสนอก่อน
- **ห้าม commit คีย์** ใช้การอ้างอิงแบบ `${HT_API_KEY}` เพิ่มไฟล์ตั้งค่าในเครื่องลงใน `.gitignore` และเพิกถอนคีย์ที่รั่วไหลที่ `/developer/api-keys`

## แก้ปัญหา "ไม่เห็นเซิร์ฟเวอร์"

- **ไม่มีอะไรปรากฏหลังแก้ไฟล์ตั้งค่า:** รีสตาร์ตโปรแกรมแก้ไขโค้ดหรือ CLI เครื่องมือส่วนใหญ่อ่านไฟล์ MCP ตอนเริ่มทำงาน
- **Claude Code หรือ VS Code ไม่สนใจเซิร์ฟเวอร์:** ตรวจว่ามี `"type": "http"`
- **Gemini CLI เชื่อมต่อได้แต่ล้มเหลว:** ใช้ `httpUrl` ไม่ใช่ `url`
- **401:** คีย์ผิดหรือถูกเพิกถอน หรือยังไม่ได้ตั้งตัวแปรสภาพแวดล้อมในเทอร์มินัลนั้น
- **400 "No Little Hotelier credentials configured":** เชื่อมต่อ Little Hotelier ที่ `/credentials`
- **423 `lh_frozen`:** การลงชื่อเข้าใช้ Little Hotelier ถูกพักหลังล็อกอินล้มเหลว (มักเพราะรหัสผ่านหมดอายุ) บันทึกรหัสผ่านใหม่ที่ **Credentials** หรือกด **Check now & resume**
- **429:** คำขอมากเกินไป รอตามเวลาใน `Retry-After`
- **การขึ้นบรรทัดใหม่ด้วย backslash ใช้ไม่ได้บน Windows:** PowerShell ไม่ใช้ `\` ต่อบรรทัด ให้วางคำสั่งในบรรทัดเดียวตามที่แสดงด้านบน

::demo-cta{path="/developer/mcp-setup"}
::

## ขั้นตอนถัดไป

- ไม่ใช่นักพัฒนา? [เชื่อมต่อ Claude](/blog/connect-claude-to-little-hotelier) หรือ [ChatGPT](/blog/connect-chatgpt-to-little-hotelier) ในเบราว์เซอร์แทน
- เพิ่งรู้จักแนวคิดนี้? อ่าน [MCP server คืออะไร](/blog/what-is-mcp-server-hotels)
- อยากได้สเปรดชีตโดยไม่ต้องเขียนโค้ด? ดู[ส่งออกรายการจองไป Excel](/blog/export-little-hotelier-reservations-excel)
