---
title: "วิธีเชื่อมต่อ Claude กับ Little Hotelier ผ่าน MCP"
seoTitle: "เชื่อมต่อ Claude กับ Little Hotelier: ตั้งค่า MCP ทีละขั้น"
description: "เชื่อมต่อ Claude กับ Little Hotelier ด้วย custom connector วาง URL เดียว เข้าสู่ระบบ แล้วกดอนุญาต พร้อม prompt แรก วิธีคุมการแก้ไขข้อมูล และการแก้ปัญหา"
date: 2026-10-03
category: ai
tags: [claude, mcp, ai, connectors, little hotelier]
keywords: [เชื่อมต่อ claude กับ little hotelier, little hotelier mcp, mcp claude คือ, claude mcp connectors, claude desktop mcp setup, claude custom connector, ai สำหรับโรงแรม]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "คู่มือตั้งค่า MCP ของ Hotelier Tools พร้อมคำอธิบาย What is MCP? และแท็บ Claude Desktop ที่เลือกอยู่ แสดงขั้นตอนและโค้ดตั้งค่าที่มี URL ของ MCP server"
featured: true
faq:
  - q: "แพ็กเกจ Claude ไหนเพิ่ม custom connector ได้บ้าง"
    a: "ณ เดือนตุลาคม 2026 Anthropic ระบุว่า custom connector ใช้ได้บนแพ็กเกจ Free, Pro, Max, Team และ Enterprise บัญชี Free เพิ่มได้หนึ่งรายการ ส่วน Team และ Enterprise ผู้ที่มีบทบาท Owner จะเพิ่มให้ทั้งองค์กร แล้วสมาชิกแต่ละคนเชื่อมต่อด้วยข้อมูลล็อกอินของตัวเอง"
  - q: "การเชื่อมต่อ Little Hotelier ใช้ในแอปมือถือ Claude ได้ไหม"
    a: "ได้ เมื่อเชื่อมต่อบน claude.ai หรือใน Claude Desktop แล้ว Anthropic ระบุว่าจะใช้ได้ใน Claude สำหรับ iOS และ Android ด้วย ส่วนการเพิ่ม custom connector ใหม่จากโทรศัพท์ยังอยู่ในช่วง beta จึงควรตั้งค่าบนคอมพิวเตอร์"
  - q: "ยกเลิกการเชื่อมต่อ Claude หรือเปลี่ยนคีย์เข้าถึงใหม่ทำอย่างไร"
    a: "ใน Claude เปิด Customize แล้วเข้า Connectors และเลือก Disconnect หรือ Remove ส่วนใน Hotelier Tools เปิด Developer แล้วเข้า API Keys และเพิกถอน (Revoke) การเชื่อมต่อหรือคีย์ที่ใช้ในส่วน Active keys การเพิกถอนฝั่ง Hotelier Tools จะตัดสิทธิ์ทันที"
  - q: "Claude แก้ไขการจองหรือราคาของฉันได้ไหม"
    a: "ได้ ถ้าคุณอนุญาต เครื่องมือที่แก้ไขข้อมูลจะทำงานทันทีที่ Claude เรียกใช้ และ Hotelier Tools ไม่มีการ์ดอนุมัติชั้นที่สองนอกแดชบอร์ดของตัวเอง ดังนั้นให้ตั้งการอนุมัติรายเครื่องมือของ Claude เป็น Needs approval ส่วนการคืนเงิน การส่งใบแจ้งหนี้ทางอีเมล การยื่นแบบสำรวจ INE และการกระทำอื่นที่ย้อนกลับไม่ได้ จะถูกบล็อกไม่ให้ Claude ใช้"
  - q: "Little Hotelier มี MCP server ของตัวเองไหม"
    a: "ณ เดือนตุลาคม 2026 ยังไม่มีเซิร์ฟเวอร์ทางการ งาน MCP ของ SiteMinder เน้นการขายห้องผ่านผู้ช่วย AI ไม่ได้มีไว้ให้เจ้าของที่พักดูข้อมูลของตัวเอง ส่วน Hotelier Tools ให้บริการ MCP server อิสระที่เชื่อมต่อด้วยบัญชี Little Hotelier ของที่พักคุณเอง"
  - q: "นี่เป็นการเชื่อมต่ออย่างเป็นทางการของ Anthropic หรือ Little Hotelier ไหม"
    a: "ไม่ใช่ Hotelier Tools เป็นเครื่องมืออิสระ ไม่ได้มีส่วนเกี่ยวข้องกับ Anthropic, SiteMinder หรือ Little Hotelier และไม่ได้รับการรับรองจากบริษัทเหล่านี้ โดยใช้โปรโตคอล MCP มาตรฐานที่ Claude รองรับสำหรับ custom connector ทุกตัว"
---

Little Hotelier ไม่มี MCP server ของตัวเอง (ณ เดือนตุลาคม 2026) แต่คุณยังเชื่อมต่อ Claude กับ Little Hotelier ได้ผ่าน Hotelier Tools ซึ่งมี MCP server ให้ที่พักของคุณ ใน Claude ให้เปิด **Customize → Connectors → Add custom connector** วาง `https://dashboard.hotelier.tools/api/mcp` เข้าสู่ระบบ Hotelier Tools แล้วกด **Allow access** จากนั้น Claude จะตอบคำถามจากข้อมูลการจองล่าสุดของคุณ และแก้ไขข้อมูลได้ถ้าคุณอนุญาต

ถ้าเพิ่งเคยได้ยินเรื่องนี้ อ่าน[MCP server คืออะไร](/blog/what-is-mcp-server-hotels)ก่อน ใช้เวลาแค่สามนาที

## สิ่งที่ต้องมีก่อนเริ่ม

::callout{type="tip" title="เช็คลิสต์"}
- **บัญชี Claude** ณ เดือนตุลาคม 2026 [Anthropic ระบุว่า custom connector ใช้ได้](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)บนแพ็กเกจ Free, Pro, Max, Team และ Enterprise บัญชี Free เพิ่มได้หนึ่งรายการ
- **บัญชี Hotelier Tools** ที่เชื่อมต่อ Little Hotelier แล้วที่ **Credentials** (`/credentials`) ใช้ฟรีทุกโรงแรมจนกว่าจะเริ่มเรียกเก็บเงินในวันที่ 10 มกราคม 2027
- **สิทธิ์ API ใน Hotelier Tools** เจ้าของที่พักมีสิทธิ์นี้อยู่แล้ว ถ้าไม่มีสิทธิ์ ระบบจะปฏิเสธการเชื่อมต่อ
::

Hotelier Tools อ่านข้อมูลผ่านบัญชี Little Hotelier ของที่พักคุณเอง และไม่ได้มีส่วนเกี่ยวข้องกับ SiteMinder, Little Hotelier หรือ Anthropic รวมทั้งไม่ได้รับการรับรองจากบริษัทเหล่านี้

## วิธีเชื่อมต่อ Claude กับ Little Hotelier (claude.ai และ Claude Desktop)

นี่คือวิธีที่แนะนำ คุณเข้าสู่ระบบผ่านเบราว์เซอร์ จึงไม่ต้องคัดลอกคีย์ ขั้นตอนด้านล่างอ้างอิง[คำแนะนำล่าสุดของ Anthropic](https://claude.com/docs/connectors/custom/add-unlisted)สำหรับบัญชี Free, Pro และ Max

1. เปิด [claude.ai](https://claude.ai) หรือแอป Claude Desktop แล้วไปที่ **Customize → Connectors** บางหน้าจอยังใช้ชื่อเดิมว่า **Settings → Connectors**
2. คลิก **Add custom connector** (บางบัญชี: **+ Add** แล้ว **Add custom connector**)
3. ตั้งชื่อ `Hotelier Tools` แล้ววาง URL ของ MCP server: `https://dashboard.hotelier.tools/api/mcp`
4. ถ้า Claude ถามว่าผู้ใช้เข้าสู่ระบบอย่างไร เลือก **Sign in now** ถ้าถามหา OAuth client เลือก **Register automatically** (เซิร์ฟเวอร์ Hotelier Tools รองรับการลงทะเบียนอัตโนมัติแบบนี้) ถ้าเห็นเพียง **Advanced settings** ให้เว้นว่างไว้
5. คลิก **Add** แล้วคลิก **Connect** จะมีหน้าต่าง Hotelier Tools เปิดขึ้นมา
6. เข้าสู่ระบบ Hotelier Tools ที่หน้า **Authorize MCP access** เลือกที่พัก (เฉพาะเมื่อคุณมีหลายแห่ง) แล้วกด **Allow access**

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="การ์ด Authorize MCP access: ผู้ช่วย AI (MCP client) ต้องการเข้าถึงบัญชี Hotelier Tools ของคุณผ่าน MCP API แสดงอีเมลที่เข้าสู่ระบบ โทเค็นที่หมดอายุใน 30 วัน และปุ่ม Deny กับ Allow access" caption="กด Allow access (ถ้ามีหลายที่พัก ให้เลือกที่พักก่อน) Claude จะไม่เห็นรหัสผ่านของคุณเลย" path="/oauth/authorize" width="472" height="327"}
::

7. เริ่มแชตใหม่ คลิก **+** เปิด **Connectors** แล้วตรวจว่าเปิด **Hotelier Tools** อยู่
8. ถามคำถามแรก (ตัวอย่างด้านล่าง) Claude จะแสดงว่าต้องการใช้เครื่องมือใด และขออนุญาตก่อนใช้งาน

การเข้าสู่ระบบมีอายุ **30 วัน** หลังจากนั้น Claude จะขอให้คุณเชื่อมต่อใหม่

### บนแพ็กเกจ Team หรือ Enterprise

ผู้ที่มีบทบาท Owner เพิ่ม connector เพียงครั้งเดียวที่ **Organization settings → Connectors → Add → Custom → Web** ด้วย URL เดียวกัน จากนั้นเพื่อนร่วมงานแต่ละคนเปิด **Customize → Connectors** หา Hotelier Tools ที่มีป้าย **Custom** แล้วคลิก **Connect** แต่ละคนเข้าสู่ระบบ Hotelier Tools แยกกัน และ Claude จะทำงานตามสิทธิ์ของบัญชีที่ใช้เข้าสู่ระบบ

### ในแอปมือถือ

[Anthropic ระบุว่า](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) connector ที่ตั้งค่าไว้บน claude.ai หรือ Claude Desktop จะใช้ได้ใน Claude บน iOS และ Android ด้วย ส่วนการเพิ่มจากโทรศัพท์โดยตรงยังอยู่ในช่วง beta จึงควรตั้งค่าบนคอมพิวเตอร์

## ใช้ API key แทนการเข้าสู่ระบบ

คนส่วนใหญ่ควรใช้การเข้าสู่ระบบข้างต้น API key เหมาะเมื่อคุณต้องการสิทธิ์เข้าถึงที่ไม่หมดอายุหลัง 30 วัน หรือใช้ไคลเอนต์ที่เข้าสู่ระบบผ่านเบราว์เซอร์ไม่ได้

1. ใน Hotelier Tools เปิด **Developer → API & MCP → API Keys** (`/developer/api-keys`)
2. ในส่วน "Generate a new key" (สร้างคีย์ใหม่) พิมพ์ชื่อ เช่น `claude-desktop` แล้วกด **Generate key**
3. คัดลอกคีย์ทันที เพราะหน้าเว็บเตือนว่า "Copy this key now — it will not be shown again." (คีย์จะไม่แสดงอีก) คีย์จะขึ้นต้นด้วย `htk_`

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="หน้า API keys หลังสร้างคีย์ใหม่: กล่องสีเขียว Key generated ที่แจ้งว่า Copy this key now, it will not be shown again พร้อมคีย์ที่ถูกซ่อนไว้และปุ่มคัดลอก คีย์ Blog integration ใหม่ใน Active keys ข้างคีย์อีกอัน แต่ละอันมีปุ่ม Revoke และการแจ้งเตือน API key created" caption="สร้างหรือเพิกถอนคีย์ได้ที่หน้า API Keys คีย์เต็มแสดงเพียงครั้งเดียว" path="/developer/api-keys"}
::

**บน claude.ai** บางองค์กรจะเห็นส่วน **Request headers** ในหน้าต่างเพิ่ม connector ซึ่ง Anthropic ระบุว่ายังเป็น beta และเปิดให้เฉพาะบางองค์กร ถ้าคุณเห็นส่วนนี้ ให้เลือก **No sign-in** เพิ่ม header ชื่อ `authorization` แล้วใส่ค่า `Bearer htk_YOUR_API_KEY` (มีคำว่า Bearer ตามด้วยเว้นวรรค)

**ใน Claude Desktop** ไฟล์ตั้งค่า (**Settings → Developer → Edit Config**) มีไว้สำหรับเซิร์ฟเวอร์ที่รันบนคอมพิวเตอร์ของคุณเอง ส่วนเซิร์ฟเวอร์ระยะไกล เอกสารของ Anthropic ให้เพิ่ม[ผ่าน Connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) หน้า MCP Setup ของ Hotelier Tools มีตัวอย่างแบบ `url` + `headers` ให้ ถ้า Claude Desktop ไม่อ่านค่านี้ ทางแก้ที่ใช้กันทั่วไปคือ [mcp-remote](https://github.com/punkpeye/mcp-remote) ซึ่งเป็นตัวเชื่อม (bridge) ฟรีจากชุมชน และต้องติดตั้ง [Node.js](https://nodejs.org) ก่อน ด้านล่างเป็นการตั้งค่าทั่วไปที่เรายังไม่ได้ทดสอบกับ Claude Desktop ทุกเวอร์ชัน

```json [claude_desktop_config.json]
{
  "mcpServers": {
    "hotelier-tools": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://dashboard.hotelier.tools/api/mcp",
        "--header",
        "Authorization:${HT_AUTH}"
      ],
      "env": {
        "HT_AUTH": "Bearer htk_YOUR_API_KEY"
      }
    }
  }
}
```

บันทึกไฟล์ แล้วออกจาก Claude Desktop ให้สนิทก่อนเปิดใหม่ ค่า header ตั้งใจเขียนโดยไม่มีช่องว่างหลังเครื่องหมายโคลอน เพราะเอกสารของ mcp-remote อธิบายว่า Claude Desktop บน Windows อาจทำให้ช่องว่างใน argument ผิดเพี้ยน

### API key หรือเข้าสู่ระบบ: ควรใช้แบบไหน

| | เข้าสู่ระบบ (OAuth) | API key (`htk_…`) |
|---|---|---|
| การตั้งค่า | วาง URL เข้าสู่ระบบ แล้วกด **Allow access** | สร้างคีย์แล้ววางลงในไฟล์ตั้งค่า |
| อายุ | 30 วัน แล้วเชื่อมต่อใหม่ | จนกว่าคุณจะเพิกถอน |
| เหมาะกับ | claude.ai, Claude Desktop, มือถือ | สคริปต์, [Claude Code, Cursor และ VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) |
| เพิกถอนที่ | `/developer/api-keys` (Active keys) | `/developer/api-keys` |

เมื่อเชื่อมต่อแล้ว ทั้งสองแบบทำงานเหมือนกัน: Claude ทำงาน **ในนามของคนที่เข้าสู่ระบบหรือสร้างคีย์** เฉพาะ **ที่พักเดียว** และใช้สิทธิ์ปัจจุบันของคนนั้น

## ควรถาม Claude อะไรก่อน

เริ่มจากคำถามที่แค่อ่านข้อมูล การพิมพ์คำว่า "Hotelier Tools" ในคำถามช่วยให้ Claude เลือก connector ที่ถูกต้อง แทนที่จะไปค้นเว็บ

::prompt{label="Claude"}
ใช้ Hotelier Tools ดูให้หน่อยว่าวันนี้และพรุ่งนี้ใครเช็คอินบ้าง ขอชื่อ จำนวนคืน ห้อง และยอดที่ยังค้างชำระ
::

::prompt{label="Claude"}
การจองที่แขกจะมาถึงใน 7 วันข้างหน้า รายการไหนยังไม่ได้จัดห้องบ้าง
::

::prompt{label="Claude"}
แขกที่เช็คเอาท์ไปเมื่อสัปดาห์ที่แล้วและยังไม่มีใบแจ้งหนี้มีใครบ้าง แต่ละคนช่วยบอกเหตุผลด้วยว่าทำไมยังออกใบแจ้งหนี้ไม่ได้
::

::prompt{label="Claude"}
แสดงปัญหาที่ยังเปิดอยู่จากการตรวจสอบอัตโนมัติ จัดกลุ่มตามวันที่แขกมาถึง พร้อมสิ่งที่ฉันต้องแก้ใน Little Hotelier
::

::prompt{label="Claude"}
ราคาและห้องว่างของสุดสัปดาห์หน้าเป็นอย่างไร และถ้าเทียบกับราคาคู่แข่งที่คุณมีข้อมูลอยู่ เป็นอย่างไรบ้าง
::

::prompt{label="Claude"}
อธิบายทีละขั้นว่าทำไมราคาที่แนะนำสำหรับห้องดับเบิลคืนวันเสาร์ที่ 14 พฤศจิกายนจึงเป็นราคานั้น
::

Claude ยังทำหลายอย่างในคำสั่งเดียวได้ เช่น "ทำตารางแขกที่จะมาสัปดาห์หน้าที่มียอดค้างชำระ และร่างข้อความเตือนการชำระเงินอย่างสุภาพให้แต่ละคน" ก็ใช้ได้ดี ข้อความที่ร่างจะอยู่ใน Claude เท่านั้น ไม่มีอะไรถูกส่งออกไป

## Claude ทำอะไรกับข้อมูลโรงแรมได้บ้าง และทำอย่างไรให้ปลอดภัย

MCP server ของ Hotelier Tools มีเครื่องมือด้านโรงแรมให้ Claude ใช้มากกว่า 100 รายการ โดยจำกัดตามสิทธิ์ของคุณเสมอ

**อ่านได้:** การจองและแขก การชำระเงิน ใบแจ้งหนี้และความพร้อมในการออกใบแจ้งหนี้ ราคาและห้องว่าง ราคาคู่แข่งและราคาที่แนะนำพร้อมเหตุผล ปัญหาจากการตรวจสอบอัตโนมัติ รายชื่อแขกที่ไม่รับอีก (do-not-rebook) รายชื่อรอห้อง (waitlist) งานที่ตั้งเวลาไว้ และข้อมูลที่พักที่อ่านจาก Little Hotelier

**แก้ไขได้ เมื่อ Claude เรียกใช้เครื่องมือ:** รายละเอียดการจอง (เริ่มจากข้อเสนอที่แสดงค่าก่อน/หลัง แล้วจึงเป็นขั้นตอนบันทึกจริงที่ต้องมี `confirmed: true`) บันทึกการชำระเงิน การลงทะเบียนสำหรับ[ใบแจ้งหนี้ตอนเช็คเอาท์](/blog/send-invoice-to-guest-at-checkout) ราคาจากคำแนะนำ stop sell (ปิดการขาย) รายช่องทาง รายการในรายชื่อรอห้อง และงานที่ตั้งเวลาไว้

**ทำไม่ได้** คือทุกอย่างที่ย้อนกลับไม่ได้ เครื่องมือกลุ่มนี้ถูกบล็อกสำหรับ Claude และไคลเอนต์ภายนอกทุกตัว ตัวอย่างเช่น Claude ไม่สามารถ

- ส่งใบแจ้งหนี้ให้แขกทางอีเมล
- คืนเงิน
- ยื่นแบบสำรวจ INE
- ส่งคำเชิญทีม
- ส่งลิงก์ใบแจ้งหนี้ให้แขกทางอีเมล
- ตอบคำถามของแขกจาก Booking.com
- รันการตรวจรายชื่อรอห้องที่ส่งข้อความหาแขก

งานเหล่านี้ทำได้เฉพาะในแชตของแดชบอร์ด Hotelier Tools และต้องผ่านการ์ดอนุมัติ นอกจากนี้ Claude มองไม่เห็นที่พักอื่น ทำเกินสิทธิ์ของคุณไม่ได้ และทำสิ่งที่ Little Hotelier เองไม่อนุญาตไม่ได้

### การแก้ไขข้อมูล: ใช้ Claude อย่างไรให้ปลอดภัย

::callout{type="warning" title="การยืนยันใน Claude คือการอนุมัติของคุณ"}
ภายในแดชบอร์ด Hotelier Tools ทุกการเปลี่ยนแปลงต้องรอการ์ดอนุมัติ/ปฏิเสธ แต่นอกแดชบอร์ดไม่มีการ์ดชั้นที่สอง: **เมื่อ Claude เรียกเครื่องมือที่แก้ไขข้อมูล การแก้ไขจะเกิดขึ้นทันที** การกดอนุมัติใน Claude จึงเป็นด่านเดียวที่มี
::

นิสัยห้าข้อที่ช่วยให้ปลอดภัย

1. **เปิดการขออนุมัติไว้สำหรับเครื่องมือที่แก้ไขข้อมูล** ที่ **Customize → Connectors → Hotelier Tools** Anthropic ให้ตั้งแต่ละเครื่องมือเป็น **Always allow**, **Needs approval** หรือ **Blocked** เครื่องมืออ่านข้อมูลตั้งเป็น "Always allow" ได้ ส่วนเครื่องมือที่เปลี่ยนข้อมูลให้ตั้งไว้ที่ "Needs approval"
2. **บล็อกเครื่องมือที่ไม่ได้ใช้** ถ้าไม่อยากให้ Claude แตะราคาเลย ให้ตั้ง `apply_price_recommendations` และ `set_channel_stop_sell` เป็น **Blocked**
3. **อ่านข้อเสนอให้ดี** ถ้าจะแก้การจอง Claude จะแสดงค่าก่อน/หลังจาก `propose_reservation_changes` ให้ดูก่อน ตรวจเลขอ้างอิงการจองและค่าต่างๆ ก่อนตอบตกลง
4. **ระวังคำสั่งที่ซ่อนอยู่ในข้อความ** ข้อความจากแขกและเนื้อหาบนเว็บไซต์เขียนโดยคนที่คุณไม่รู้จัก ถ้าผลลัพธ์ของเครื่องมือจู่ๆ ขอให้ Claude ทำสิ่งที่คุณไม่ได้สั่ง ให้หยุดทันที Anthropic ให้[คำแนะนำเดียวกัน](https://claude.com/docs/connectors/custom/add-unlisted#security-and-privacy)
5. **รู้ว่าใครเชื่อมต่ออยู่** แต่ละการเชื่อมต่อทำงานในนามบัญชี Hotelier Tools ที่สร้างการเชื่อมต่อนั้น เพิกถอนการเชื่อมต่อเก่าที่ `/developer/api-keys` และต้องเพิกถอนทุกครั้งเมื่อมีพนักงานลาออก

## ข้อมูลแขกของฉันถูกส่งไปที่ Anthropic ไหม

ใช่ เฉพาะส่วนที่ Claude อ่าน เมื่อ Claude เรียกเครื่องมือ ผลลัพธ์ (ชื่อแขก วันที่ ยอดเงิน) จะกลายเป็นส่วนหนึ่งของการสนทนา และ Anthropic จะประมวลผลตามเงื่อนไขของแพ็กเกจที่คุณใช้

ณ เดือนตุลาคม 2026 Anthropic ระบุว่าข้อมูลที่ใช้เทรนโมเดลจากแพ็กเกจสำหรับผู้ใช้ทั่วไป "does not include raw content from connectors… including remote and local MCP servers" (ไม่รวมเนื้อหาดิบจาก connector รวมถึง MCP server ทั้งแบบระยะไกลและในเครื่อง) เว้นแต่คุณคัดลอกเนื้อหานั้นลงในแชตเอง ([แหล่งที่มา](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)) บนแพ็กเกจเชิงพาณิชย์ (Team, Enterprise, API) ข้อมูลที่ส่งเข้าและคำตอบที่ได้[จะไม่ถูกนำไปเทรนโดยค่าเริ่มต้น](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training)

ข้อมูลแขกเป็นข้อมูลส่วนบุคคล และโรงแรมของคุณยังคงเป็นผู้รับผิดชอบข้อมูลนั้น ถาม Claude เฉพาะสิ่งที่จำเป็น และปิด connector ในแชตที่ไม่ต้องใช้

::demo-cta{path="/developer/mcp-setup"}
::

## แก้ปัญหา

| สิ่งที่คุณเห็น | สาเหตุที่เป็นไปได้ | สิ่งที่ควรทำ |
|---|---|---|
| Claude บอกว่าเชื่อมต่อไม่ได้ หรือข้อผิดพลาด 401 | การเข้าสู่ระบบหมดอายุ (30 วัน) คีย์ถูกเพิกถอน หรือคุณไม่มีสิทธิ์เข้าถึงที่พักแล้ว | **Disconnect** แล้ว **Connect** ใหม่ หรือสร้างคีย์ใหม่ |
| 400 "No Little Hotelier credentials configured" | ยังไม่ได้เชื่อมต่อ Little Hotelier | เชื่อมต่อที่ **Credentials** (`/credentials`) |
| 403 `permission_denied` | บัญชีของคุณไม่มีสิทธิ์ API | ขอให้เจ้าของให้สิทธิ์ API แก่บทบาทของคุณ |
| 423 `lh_frozen` | การเข้าสู่ระบบ Little Hotelier ถูกหยุดชั่วคราวหลังล็อกอินล้มเหลว มักเพราะรหัสผ่านหมดอายุ | บันทึกรหัสผ่านใหม่ที่ **Credentials** หรือกด **Check now & resume** |
| ไม่เห็นเครื่องมือในแชต | connector ถูกปิดในแชตนี้ หรือยังไม่ได้รีสตาร์ต Claude Desktop | **+ → Connectors** แล้วเปิดใช้งาน และรีสตาร์ต Claude Desktop หลังแก้ไฟล์ตั้งค่า |
| หน้าต่างเข้าสู่ระบบไม่เปิด | ป๊อปอัปถูกบล็อก | อนุญาตป๊อปอัปสำหรับ claude.ai แล้วลอง **Connect** อีกครั้ง |

## ขั้นตอนถัดไป

- อยากใช้แบบเดียวกันใน ChatGPT? ทำตาม[เชื่อมต่อ ChatGPT กับ Little Hotelier](/blog/connect-chatgpt-to-little-hotelier)
- จะสร้างรายงานหรือสคริปต์? ดู [Claude Code, Cursor และ VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) หรือ[คู่มือ REST API](/blog/little-hotelier-api)
- อยากให้ทุกการเปลี่ยนแปลงต้องผ่านการ์ดอนุมัติ? ใช้[ผู้ช่วย AI ในตัว](/blog/ai-assistant-hotel-front-desk)ในแดชบอร์ด
- ดูทุกอย่างที่เซิร์ฟเวอร์มีให้ได้ที่[หน้าฟีเจอร์ API & MCP](/tools/bot/api-mcp)
