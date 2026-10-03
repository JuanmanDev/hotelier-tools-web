---
title: "เชื่อมต่อ Claude กับ Little Hotelier (MCP)"
seoTitle: "เชื่อมต่อ Claude กับ Little Hotelier: ตั้งค่า MCP ทีละขั้น"
description: "เชื่อมต่อ Claude กับ Little Hotelier ด้วย custom connector วาง URL เดียว เข้าสู่ระบบ แล้วกดอนุญาต พร้อม prompt แรก ความปลอดภัยของการเขียนข้อมูล และแก้ปัญหา"
date: 2026-10-03
category: ai
tags: [claude, mcp, ai, connectors, little hotelier]
keywords: [เชื่อมต่อ claude กับ little hotelier, little hotelier mcp, mcp claude คือ, claude mcp connectors, claude desktop mcp setup, claude custom connector, ai สำหรับโรงแรม]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-setup.webp
coverAlt: "คู่มือตั้งค่า MCP ของ Hotelier Tools พร้อมคำอธิบาย What is MCP? และแท็บ Claude Desktop ที่เลือกอยู่ แสดงขั้นตอนและโค้ดตั้งค่าที่มี URL ของเซิร์ฟเวอร์ MCP"
featured: true
faq:
  - q: "แพ็กเกจ Claude ไหนเพิ่ม custom connector ได้บ้าง"
    a: "ณ เดือนตุลาคม 2026 Anthropic ระบุว่า custom connector ใช้ได้บนแพ็กเกจ Free, Pro, Max, Team และ Enterprise บัญชี Free เพิ่มได้หนึ่ง custom connector บน Team และ Enterprise เจ้าของ (Owner) เพิ่มให้ทั้งองค์กร แล้วสมาชิกแต่ละคนเชื่อมต่อด้วยบัญชีของตนเอง"
  - q: "การเชื่อมต่อ Little Hotelier ใช้ในแอปมือถือ Claude ได้ไหม"
    a: "ได้ เมื่อเชื่อมต่อบน claude.ai หรือใน Claude Desktop แล้ว Anthropic ระบุว่าจะใช้ได้ใน Claude สำหรับ iOS และ Android ด้วย การเพิ่ม custom connector ใหม่จากโทรศัพท์ยังเป็น beta ดังนั้นควรตั้งค่าบนคอมพิวเตอร์"
  - q: "ตัดการเชื่อมต่อ Claude หรือเปลี่ยนสิทธิ์การเข้าถึงอย่างไร"
    a: "ใน Claude เปิด Customize แล้ว Connectors และเลือก Disconnect หรือ Remove ใน Hotelier Tools เปิด Developer, API Keys แล้วเพิกถอนการเชื่อมต่อหรือคีย์ที่ใช้ใต้ Active keys การเพิกถอนฝั่ง Hotelier Tools ตัดสิทธิ์ทันที"
  - q: "Claude แก้ไขการจองหรือราคาของฉันได้ไหม"
    a: "ได้ ถ้าคุณอนุญาต เครื่องมือเขียนข้อมูลทำงานทันทีที่ Claude เรียกใช้ และ Hotelier Tools ไม่มีการ์ดอนุมัติชั้นที่สองนอกแดชบอร์ดของตัวเอง ดังนั้นให้ตั้งการอนุมัติรายเครื่องมือของ Claude เป็น Needs approval การคืนเงิน การส่งใบแจ้งหนี้ทางอีเมล การยื่นรายงาน INE และการกระทำที่ย้อนกลับไม่ได้อื่น ๆ ถูกบล็อกสำหรับ Claude"
  - q: "Little Hotelier มีเซิร์ฟเวอร์ MCP ของตัวเองไหม"
    a: "ณ เดือนตุลาคม 2026 ยังไม่มีเซิร์ฟเวอร์ทางการ งาน MCP ของ SiteMinder เกี่ยวกับการขายห้องผ่านผู้ช่วย AI ไม่ใช่การให้เจ้าของที่พักสอบถามข้อมูลของตัวเอง Hotelier Tools ให้บริการเซิร์ฟเวอร์ MCP อิสระที่เชื่อมต่อด้วยบัญชี Little Hotelier ของที่พักคุณเอง"
  - q: "นี่เป็นการเชื่อมต่ออย่างเป็นทางการของ Anthropic หรือ Little Hotelier ไหม"
    a: "ไม่ใช่ Hotelier Tools เป็นอิสระ ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก Anthropic, SiteMinder หรือ Little Hotelier ใช้โปรโตคอล MCP มาตรฐานที่ Claude รองรับสำหรับ custom connector ทั่วไป"
---

Little Hotelier ไม่มีเซิร์ฟเวอร์ MCP ของตัวเอง (ณ เดือนตุลาคม 2026) แต่คุณยังเชื่อมต่อ Claude เข้ากับมันได้ผ่าน Hotelier Tools ซึ่งให้บริการเซิร์ฟเวอร์ MCP สำหรับที่พักของคุณ ใน Claude เปิด **Customize → Connectors → Add custom connector** วาง `https://dashboard.hotelier.tools/api/mcp` เข้าสู่ระบบ Hotelier Tools แล้วกด **Allow access** จากนั้น Claude จะตอบคำถามจากข้อมูลการจองจริงของคุณ และแก้ไขข้อมูลได้ถ้าคุณอนุญาต

เพิ่งรู้จักแนวคิดนี้ใช่ไหม อ่าน[MCP server คืออะไร](/blog/what-is-mcp-server-hotels)ก่อน ใช้เวลาสามนาที

## สิ่งที่ต้องมีก่อนเริ่ม

::callout{type="tip" title="เช็กลิสต์"}
- **บัญชี Claude** ณ เดือนตุลาคม 2026 [Anthropic ระบุ custom connector](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)บนแพ็กเกจ Free, Pro, Max, Team และ Enterprise บัญชี Free เพิ่มได้หนึ่งรายการ
- **บัญชี Hotelier Tools** ที่เชื่อมต่อ Little Hotelier แล้วที่ **Credentials** (`/credentials`) ใช้ฟรีสำหรับทุกโรงแรมจนถึงวันที่เริ่มเรียกเก็บเงิน 10 มกราคม 2027
- **สิทธิ์ API ใน Hotelier Tools** เจ้าของที่พักมีสิทธิ์นี้ หากไม่มี การเชื่อมต่อจะถูกปฏิเสธ
::

Hotelier Tools อ่านข้อมูลด้วยบัญชี Little Hotelier ของที่พักคุณเอง ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder, Little Hotelier หรือ Anthropic

## วิธีเชื่อมต่อ Claude กับ Little Hotelier (claude.ai และ Claude Desktop)

นี่คือวิธีที่แนะนำ คุณเข้าสู่ระบบผ่านเบราว์เซอร์ จึงไม่ต้องคัดลอกคีย์ ขั้นตอนเหล่านี้ตาม[คำแนะนำปัจจุบันของ Anthropic](https://claude.com/docs/connectors/custom/add-unlisted)สำหรับบัญชี Free, Pro และ Max

1. เปิด [claude.ai](https://claude.ai) หรือแอป Claude Desktop แล้วไปที่ **Customize → Connectors** บางหน้าจอยังเรียกว่า **Settings → Connectors**
2. คลิก **Add custom connector** (บางบัญชี: **+ Add** แล้ว **Add custom connector**)
3. ตั้งชื่อ `Hotelier Tools` แล้ววาง URL ของเซิร์ฟเวอร์ MCP: `https://dashboard.hotelier.tools/api/mcp`
4. ถ้า Claude ถามว่าผู้ใช้เข้าสู่ระบบอย่างไร เลือก **Sign in now** ถ้าถามหา OAuth client เลือก **Register automatically** เซิร์ฟเวอร์ Hotelier Tools รองรับการลงทะเบียนอัตโนมัตินี้ ถ้าเห็นเพียง **Advanced settings** ให้เว้นว่างไว้
5. คลิก **Add** แล้ว **Connect** หน้าต่าง Hotelier Tools จะเปิดขึ้น
6. เข้าสู่ระบบ Hotelier Tools ที่หน้า **Authorize MCP access** เลือกที่พัก (เฉพาะเมื่อคุณมีหลายแห่ง) แล้วกด **Allow access**

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="การ์ด Authorize MCP access: ผู้ช่วย AI (MCP client) ต้องการเข้าถึงบัญชี Hotelier Tools ของคุณผ่าน MCP API แสดงอีเมลที่เข้าสู่ระบบ โทเค็นที่หมดอายุใน 30 วัน และปุ่ม Deny กับ Allow access" caption="กด Allow access (ถ้ามีหลายที่พัก ให้เลือกก่อนหนึ่งแห่ง) Claude ไม่เคยเห็นรหัสผ่านของคุณ" path="/oauth/authorize" width="472" height="327"}
::

7. เริ่มแชตใหม่ คลิก **+** เปิด **Connectors** แล้วตรวจว่าเปิด **Hotelier Tools** อยู่
8. ถามคำถามแรก (ตัวอย่างด้านล่าง) Claude จะแสดงว่าต้องการใช้เครื่องมือใด และถามก่อนรัน

การเข้าสู่ระบบมีอายุ **30 วัน** หลังจากนั้น Claude จะให้เชื่อมต่อใหม่

### บนแพ็กเกจ Team หรือ Enterprise

Owner เพิ่ม connector ครั้งเดียว: **Organization settings → Connectors → Add → Custom → Web** ด้วย URL เดียวกัน จากนั้นเพื่อนร่วมงานแต่ละคนเปิด **Customize → Connectors** หา Hotelier Tools ที่มีป้าย **Custom** แล้วคลิก **Connect** แต่ละการเชื่อมต่อเข้าสู่ระบบ Hotelier Tools แยกกัน และ Claude ทำงานตามสิทธิ์ของบัญชีที่ใช้

### ในแอปมือถือ

ตาม[Anthropic](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) connector ที่ตั้งค่าบน claude.ai หรือ Claude Desktop จะใช้ได้ใน Claude สำหรับ iOS และ Android ด้วย การเพิ่มโดยตรงจากโทรศัพท์ยังเป็น beta ดังนั้นให้ตั้งค่าบนคอมพิวเตอร์

## ใช้ API key แทนการเข้าสู่ระบบ

คนส่วนใหญ่ควรใช้การเข้าสู่ระบบข้างต้น API key มีประโยชน์เมื่อคุณต้องการสิทธิ์ที่ไม่หมดอายุใน 30 วัน หรือไคลเอนต์ที่เข้าสู่ระบบผ่านเบราว์เซอร์ไม่ได้

1. ใน Hotelier Tools เปิด **Developer → API & MCP → API Keys** (`/developer/api-keys`)
2. ใต้ "Generate a new key" พิมพ์ชื่อ เช่น `claude-desktop` แล้วกด **Generate key**
3. คัดลอกทันที หน้าเว็บเตือนว่า "Copy this key now — it will not be shown again." คีย์ขึ้นต้นด้วย `htk_`

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="หน้า API keys หลังสร้างคีย์ใหม่: กล่องสีเขียว Key generated ที่แจ้งว่า Copy this key now, it will not be shown again พร้อมคีย์ที่ถูกซ่อนไว้และปุ่มคัดลอก คีย์ Blog integration ใหม่ใน Active keys ข้างคีย์อีกอัน แต่ละอันมีปุ่ม Revoke และการแจ้งเตือน API key created" caption="สร้างหรือเพิกถอนคีย์ได้ที่หน้า API Keys คีย์เต็มแสดงเพียงครั้งเดียว" path="/developer/api-keys"}
::

**บน claude.ai** บางองค์กรเห็นส่วน **Request headers** ในหน้าต่าง connector Anthropic ระบุว่าเป็น beta และมีให้เฉพาะบางองค์กร ถ้าคุณมี ให้เลือก **No sign-in** เพิ่ม header `authorization` และใส่ `Bearer htk_YOUR_API_KEY` (มีคำว่า Bearer และเว้นวรรค)

**ใน Claude Desktop** ไฟล์ตั้งค่า (**Settings → Developer → Edit Config**) ออกแบบมาสำหรับเซิร์ฟเวอร์ที่รันบนคอมพิวเตอร์ของคุณเอง เอกสารของ Anthropic ระบุว่าเซิร์ฟเวอร์ระยะไกลเพิ่ม[ผ่าน Connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) หน้า MCP Setup ของ Hotelier Tools แสดงโค้ด `url` + `headers` ถ้า Claude Desktop ไม่สนใจ วิธีแก้ที่ใช้กันทั่วไปคือบริดจ์ชุมชนฟรี [mcp-remote](https://github.com/punkpeye/mcp-remote) ซึ่งต้องติดตั้ง [Node.js](https://nodejs.org) นี่เป็นการตั้งค่าทั่วไปที่เรายังไม่ได้ทดสอบกับ Claude Desktop ทุกเวอร์ชัน

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

บันทึกไฟล์ แล้วปิด Claude Desktop ให้สนิทและเปิดใหม่ header เขียนโดยไม่มีช่องว่างหลังเครื่องหมายโคลอนโดยตั้งใจ เอกสารของ mcp-remote อธิบายว่า Claude Desktop บน Windows อาจทำให้ช่องว่างใน argument เพี้ยน

### API key หรือเข้าสู่ระบบ: ควรใช้แบบไหน

| | เข้าสู่ระบบ (OAuth) | API key (`htk_…`) |
|---|---|---|
| การตั้งค่า | วาง URL เข้าสู่ระบบ **Allow access** | สร้างคีย์แล้ววางลงในไฟล์ตั้งค่า |
| อายุ | 30 วัน แล้วเชื่อมต่อใหม่ | จนกว่าคุณจะเพิกถอน |
| เหมาะกับ | claude.ai, Claude Desktop, มือถือ | สคริปต์, [Claude Code, Cursor และ VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) |
| เพิกถอนที่ | `/developer/api-keys` (Active keys) | `/developer/api-keys` |

เมื่อเชื่อมต่อแล้ว ทั้งสองแบบทำงานเหมือนกัน: Claude ทำงาน **ในนามของคนที่เข้าสู่ระบบหรือสร้างคีย์** กับ **ที่พักเดียว** ด้วยสิทธิ์ปัจจุบันของคนนั้น

## ควรถาม Claude อะไรเป็นอย่างแรก

เริ่มด้วยคำถามที่อ่านข้อมูลอย่างเดียว การระบุ "Hotelier Tools" ช่วยให้ Claude เลือก connector ถูกตัวแทนการค้นเว็บ

::prompt{label="Claude"}
ใช้ Hotelier Tools ดูให้หน่อยว่าวันนี้และพรุ่งนี้ใครเช็คอินบ้าง ขอชื่อ จำนวนคืน ห้อง และยอดที่ยังค้างชำระ
::

::prompt{label="Claude"}
การจองที่จะมาถึงใน 7 วันข้างหน้า รายการไหนยังไม่ได้จัดห้อง
::

::prompt{label="Claude"}
แขกที่เช็คเอาต์ไปเมื่อสัปดาห์ที่แล้วและยังไม่มีใบแจ้งหนี้มีใครบ้าง แต่ละคนช่วยบอกเหตุผลด้วยว่าทำไมยังออกใบแจ้งหนี้ไม่ได้
::

::prompt{label="Claude"}
แสดงปัญหาที่ยังเปิดอยู่จากการตรวจสอบอัตโนมัติ จัดกลุ่มตามวันที่แขกมาถึง พร้อมสิ่งที่ฉันต้องแก้ใน Little Hotelier
::

::prompt{label="Claude"}
ราคาและห้องว่างของสุดสัปดาห์หน้าเป็นอย่างไร และเทียบกับราคาคู่แข่งที่คุณมีแล้วเป็นอย่างไร
::

::prompt{label="Claude"}
อธิบายทีละขั้นว่าทำไมราคาที่แนะนำสำหรับห้องดับเบิลคืนวันเสาร์ที่ 14 พฤศจิกายนจึงเป็นราคานั้น
::

Claude ยังรวมคำตอบได้ด้วย เช่น "ทำตารางแขกที่จะมาสัปดาห์หน้าพร้อมยอดค้างชำระ และร่างข้อความเตือนการชำระเงินสุภาพ ๆ ให้แต่ละคน" ใช้ได้ดี ร่างข้อความอยู่ใน Claude เท่านั้น ไม่มีอะไรถูกส่งออกไป

## Claude ทำอะไรกับข้อมูลโรงแรมได้บ้าง และทำอย่างไรให้ปลอดภัย

เซิร์ฟเวอร์ MCP ของ Hotelier Tools ให้เครื่องมือโรงแรมแก่ Claude มากกว่า 100 รายการ และจำกัดตามสิทธิ์ของคุณเสมอ

**อ่านได้:** การจองและแขก การชำระเงิน ใบแจ้งหนี้และความพร้อมในการออกใบแจ้งหนี้ ราคาและห้องว่าง ราคาคู่แข่งและราคาที่แนะนำพร้อมเหตุผล ปัญหาจากการตรวจสอบอัตโนมัติ รายชื่อห้ามรับกลับ (do-not-rebook) รายชื่อรอ งานที่ตั้งเวลาไว้ และข้อมูลที่พักที่อ่านจาก Little Hotelier

**แก้ไขได้ เมื่อ Claude เรียกใช้เครื่องมือ:** รายละเอียดการจอง (เริ่มด้วยข้อเสนอก่อน/หลัง แล้วขั้นตอนใช้จริงที่ต้องมี `confirmed: true`) บันทึกการชำระเงิน การลงทะเบียนสำหรับ[ใบแจ้งหนี้ตอนเช็คเอาต์](/blog/send-invoice-to-guest-at-checkout) ราคาจากคำแนะนำ การหยุดขายช่องทางขาย (stop sell) รายการในรายชื่อรอ และงานที่ตั้งเวลาไว้

**ทำไม่ได้** ในสิ่งที่ย้อนกลับไม่ได้ เครื่องมือเหล่านั้นถูกบล็อกสำหรับ Claude และไคลเอนต์ภายนอกทุกราย ตัวอย่างเช่น ไม่สามารถ

- ส่งใบแจ้งหนี้ให้แขกทางอีเมล
- คืนเงิน
- ยื่นรายงาน INE
- ส่งคำเชิญทีม
- ส่งลิงก์ใบแจ้งหนี้ให้แขกทางอีเมล
- ตอบคำถามของแขกจาก Booking.com
- รันการตรวจสอบรายชื่อรอที่ส่งข้อความหาแขก

สิ่งเหล่านี้อยู่ในแชตของแดชบอร์ด Hotelier Tools หลังการ์ดอนุมัติ Claude ยังมองไม่เห็นที่พักอื่น เกินสิทธิ์ของคุณไม่ได้ และทำสิ่งที่ Little Hotelier เองจะปฏิเสธไม่ได้

### การเขียนข้อมูล: ทำอย่างไรให้ Claude ปลอดภัย

::callout{type="warning" title="การยืนยันใน Claude คือการอนุมัติของคุณ"}
ภายในแดชบอร์ด Hotelier Tools ทุกการเปลี่ยนแปลงต้องรอการ์ดอนุมัติ/ปฏิเสธ แต่นอกแดชบอร์ดไม่มีการ์ดชั้นที่สอง: **เมื่อ Claude เรียกเครื่องมือเขียนข้อมูล มันทำงานทันที** การอนุมัติที่คุณให้ใน Claude คือการอนุมัติเพียงอย่างเดียว
::

ห้านิสัยที่ช่วยให้ปลอดภัย

1. **เปิดการขออนุมัติไว้สำหรับเครื่องมือเขียนข้อมูล** ที่ **Customize → Connectors → Hotelier Tools** Anthropic ให้ตั้งแต่ละเครื่องมือเป็น **Always allow**, **Needs approval** หรือ **Blocked** เครื่องมืออ่านข้อมูลตั้งเป็น "Always allow" ได้ ส่วนสิ่งที่เปลี่ยนข้อมูลให้คงไว้ที่ "Needs approval"
2. **บล็อกสิ่งที่คุณไม่เคยใช้** ถ้า Claude ไม่ควรแตะราคาเลย ตั้ง `apply_price_recommendations` และ `set_channel_stop_sell` เป็น **Blocked**
3. **อ่านข้อเสนอ** สำหรับการเปลี่ยนแปลงการจอง Claude จะแสดงก่อน/หลังจาก `propose_reservation_changes` ก่อน ตรวจเลขอ้างอิงการจองและค่าต่าง ๆ ก่อนตอบตกลง
4. **ระวังคำสั่งที่ซ่อนอยู่ในข้อความ** ข้อความจากแขกและเว็บไซต์เขียนโดยคนแปลกหน้า ถ้าผลลัพธ์ของเครื่องมือจู่ ๆ ขอให้ Claude ทำสิ่งที่คุณไม่ได้ขอ ให้หยุด Anthropic ให้[คำแนะนำเดียวกัน](https://claude.com/docs/connectors/custom/add-unlisted#security-and-privacy)
5. **รู้ว่าใครเชื่อมต่ออยู่** แต่ละการเชื่อมต่อทำงานในนามบัญชี Hotelier Tools ที่สร้างมัน เพิกถอนอันเก่าที่ `/developer/api-keys` และทำเสมอเมื่อมีคนลาออก

## ข้อมูลแขกของฉันถูกส่งไปที่ Anthropic ไหม

ใช่ ในส่วนที่ Claude อ่าน เมื่อ Claude เรียกเครื่องมือ ผลลัพธ์ (ชื่อแขก วันที่ จำนวนเงิน) จะกลายเป็นส่วนหนึ่งของการสนทนาและถูก Anthropic ประมวลผลตามเงื่อนไขของแพ็กเกจคุณ

ณ เดือนตุลาคม 2026 Anthropic ระบุว่าข้อมูลเทรนของแพ็กเกจผู้บริโภค "does not include raw content from connectors… including remote and local MCP servers" เว้นแต่คุณคัดลอกลงในแชตเอง ([แหล่งที่มา](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)) บนแพ็กเกจเชิงพาณิชย์ (Team, Enterprise, API) อินพุตและเอาต์พุต[ไม่ถูกใช้เทรนโดยค่าเริ่มต้น](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training)

ข้อมูลแขกเป็นข้อมูลส่วนบุคคล และโรงแรมของคุณยังคงรับผิดชอบ ขอ Claude เฉพาะสิ่งที่จำเป็น และปิด connector ในแชตที่ไม่ต้องใช้

::demo-cta{path="/developer/mcp-setup"}
::

## แก้ปัญหา

| สิ่งที่คุณเห็น | สาเหตุที่เป็นไปได้ | สิ่งที่ควรทำ |
|---|---|---|
| Claude บอกว่าเชื่อมต่อไม่ได้ หรือข้อผิดพลาด 401 | การเข้าสู่ระบบหมดอายุ (30 วัน) คีย์ถูกเพิกถอน หรือคุณไม่มีสิทธิ์เข้าถึงที่พักแล้ว | **Disconnect** แล้ว **Connect** ใหม่ หรือสร้างคีย์ใหม่ |
| 400 "No Little Hotelier credentials configured" | ยังไม่ได้เชื่อมต่อ Little Hotelier | เชื่อมต่อที่ **Credentials** (`/credentials`) |
| 403 `permission_denied` | บัญชีของคุณไม่มีสิทธิ์ API | ขอให้เจ้าของให้สิทธิ์ API แก่บทบาทของคุณ |
| 423 `lh_frozen` | การเข้าสู่ระบบ Little Hotelier ถูกหยุดชั่วคราวหลังล็อกอินล้มเหลว มักเพราะรหัสผ่านหมดอายุ | บันทึกรหัสผ่านใหม่ที่ **Credentials** หรือกด **Check now & resume** |
| ไม่เห็นเครื่องมือในแชต | ปิด connector ในแชตนี้ หรือยังไม่ได้รีสตาร์ต Desktop | **+ → Connectors** → เปิด รีสตาร์ต Claude Desktop หลังแก้ไฟล์ตั้งค่า |
| หน้าต่างเข้าสู่ระบบไม่เปิด | ป๊อปอัปถูกบล็อก | อนุญาตป๊อปอัปสำหรับ claude.ai แล้วลอง **Connect** อีกครั้ง |

## ขั้นต่อไป

- อยากได้แบบเดียวกันใน ChatGPT ทำตาม[เชื่อมต่อ ChatGPT กับ Little Hotelier](/blog/connect-chatgpt-to-little-hotelier)
- สร้างรายงานหรือสคริปต์ ดู [Claude Code, Cursor และ VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) หรือ[คู่มือ REST API](/blog/little-hotelier-api)
- อยากได้การ์ดอนุมัติสำหรับทุกการเปลี่ยนแปลง ใช้[ผู้ช่วยในตัว](/blog/ai-assistant-hotel-front-desk)ในแดชบอร์ด
- ทุกอย่างที่เซิร์ฟเวอร์มีอยู่ที่[หน้าฟีเจอร์ API & MCP](/tools/bot/api-mcp)
