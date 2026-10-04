---
title: "เชื่อมต่อ ChatGPT กับ Little Hotelier + 18 prompt"
seoTitle: "เชื่อมต่อ ChatGPT กับ Little Hotelier + 18 prompt โรงแรม"
description: "เชื่อมต่อ ChatGPT กับ Little Hotelier ด้วย developer mode และแอป MCP ดูว่าแพ็กเกจของคุณทำอะไรได้ พร้อม 18 prompt เรื่องแขกเข้าพัก การชำระเงิน และราคา"
date: 2026-10-03
category: ai
tags: [chatgpt, mcp, ai, prompts, little hotelier]
keywords: [เชื่อมต่อ chatgpt กับ little hotelier, chatgpt mcp connector, chatgpt connectors mcp, chatgpt prompts สำหรับโรงแรม, ai สำหรับโรงแรม, chatgpt developer mode mcp, mcp คือ อะไร ai]
feature: api-mcp
demoPath: /developer/mcp-setup
cover: /images/blog/demo/en/mcp-oauth-consent.webp
coverAlt: "หน้า Authorize MCP access ของ Hotelier Tools ที่ผู้ช่วย AI เปิดขึ้นตอนเชื่อมต่อ มีข้อความแจ้งโทเค็นอายุ 30 วัน และปุ่ม Deny กับ Allow access"
faq:
  - q: "แพ็กเกจ ChatGPT ไหนเชื่อมต่อกับ Little Hotelier ได้บ้าง"
    a: "ณ เดือนตุลาคม 2026 ศูนย์ช่วยเหลือของ OpenAI ระบุว่า MCP เต็มรูปแบบ รวมถึงการแก้ไขข้อมูล ใช้ได้กับ Business, Enterprise และ Edu บนเว็บ ส่วน Pro เชื่อมต่อแอป MCP ใน developer mode ได้ด้วยสิทธิ์อ่านและดึงข้อมูล เอกสารนักพัฒนาของ OpenAI ระบุ Plus ไว้ด้วย ส่วน Free และ Go ไม่อยู่ในรายการ ควรตรวจดูว่าบัญชีของคุณแสดงอะไร"
  - q: "ใช้ API key แทนการเข้าสู่ระบบได้ไหม"
    a: "ไม่ได้ OpenAI ระบุว่า ChatGPT ไม่สามารถส่ง API key แบบกำหนดเองให้ MCP server ได้ จึงต้องเลือก OAuth แล้วเข้าสู่ระบบ Hotelier Tools ในหน้าต่างเบราว์เซอร์ และกด Allow access"
  - q: "ChatGPT แก้ไขการจองหรือราคาของฉันได้ไหม"
    a: "ได้เฉพาะเมื่อแพ็กเกจของคุณอนุญาตการแก้ไขข้อมูลและคุณกดยืนยัน โดยค่าเริ่มต้น OpenAI จะขอการยืนยันก่อนแก้ไขข้อมูล Hotelier Tools ไม่มีการอนุมัติชั้นที่สองนอกแดชบอร์ด และบล็อกการคืนเงิน การส่งใบแจ้งหนี้ทางอีเมล การยื่นแบบสำรวจ INE และการกระทำอื่นที่ย้อนกลับไม่ได้สำหรับ ChatGPT ทั้งหมด"
  - q: "ใช้ในแอปมือถือ ChatGPT ได้ไหม"
    a: "แอป MCP ที่สร้างเองใช้ในแอปมือถือไม่ได้ ศูนย์ช่วยเหลือของ OpenAI ระบุว่าแอป MCP ใน developer mode ใช้ได้บนเว็บเท่านั้น ให้ใช้ chatgpt.com ในเบราว์เซอร์"
  - q: "ข้อมูลแขกของฉันถูกใช้เทรนโมเดลของ OpenAI ไหม"
    a: "บน Business, Enterprise และ Edu OpenAI ระบุว่าโดยค่าเริ่มต้นจะไม่นำข้อมูลจากแอปที่เชื่อมต่อไปเทรนโมเดล ส่วน Free, Plus, Go และ Pro อาจนำไปใช้ ถ้าเปิด Improve the model for everyone ไว้ใน Data controls ควรปิดตัวเลือกนี้ก่อนเชื่อมต่อข้อมูลโรงแรม"
  - q: "Claude หรือ ChatGPT เหมาะกับงานโรงแรมมากกว่ากัน"
    a: "ใช้ได้ทั้งคู่กับเซิร์ฟเวอร์ Hotelier Tools ตัวเดียวกัน ณ เดือนตุลาคม 2026 Claude อนุญาต custom connector พร้อมเครื่องมือแก้ไขข้อมูลในทุกแพ็กเกจ รวมถึง Free (หนึ่ง connector) ขณะที่ ChatGPT จำกัด MCP แบบอ่านและแก้ไขข้อมูลเต็มรูปแบบไว้ที่ Business, Enterprise และ Edu เลือกผู้ช่วยที่ทีมของคุณใช้อยู่แล้ว"
---

ได้ คุณเชื่อมต่อ ChatGPT กับ Little Hotelier ได้ โดยเปิด **developer mode** ใน ChatGPT สร้างแอปที่ชี้ไปยัง MCP server ของ Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`) ด้วย **OAuth** แล้วเข้าสู่ระบบ Hotelier Tools ส่วน ChatGPT จะทำอะไรได้บ้างขึ้นอยู่กับแพ็กเกจของคุณ ณ เดือนตุลาคม 2026 OpenAI ให้สิทธิ์อ่านและแก้ไขข้อมูลเต็มรูปแบบเฉพาะ Business, Enterprise และ Edu ส่วน Pro (และ Plus ตามเอกสารนักพัฒนาของ OpenAI) เชื่อมต่อได้แบบอ่านอย่างเดียว

ด้านล่างคือขั้นตอนตามที่ OpenAI ระบุไว้ในปัจจุบัน สิ่งที่ควรตรวจสอบในบัญชีของคุณ และ 18 prompt ที่ใช้ได้กับโรงแรมขนาดเล็ก

## สิ่งที่ต้องมีก่อนเริ่ม

- **แพ็กเกจ ChatGPT ที่มี developer mode** [คู่มือ developer mode](https://developers.openai.com/api/docs/guides/developer-mode) ของ OpenAI ระบุว่าใช้ได้กับบัญชี Pro, Plus, Business, Enterprise และ Education บนเว็บ ส่วน[ศูนย์ช่วยเหลือ](https://help.openai.com/en/articles/12584461)เพิ่มเติมว่า **MCP เต็มรูปแบบ รวมถึงการแก้ไขข้อมูล ใช้ได้กับ Business และ Enterprise/Edu** และ Pro เชื่อมต่อได้ด้วยสิทธิ์อ่านและดึงข้อมูลเท่านั้น
- **เบราว์เซอร์บนคอมพิวเตอร์** OpenAI ระบุว่าแอป MCP แบบกำหนดเองใช้ได้บนเว็บเท่านั้น ไม่มีในแอปมือถือ
- **บัญชี Hotelier Tools** ที่เชื่อมต่อ Little Hotelier แล้วที่ **Credentials** (`/credentials`) บัญชีของเจ้าของที่พักมีสิทธิ์ API ที่ต้องใช้อยู่แล้ว Hotelier Tools ใช้ฟรีทุกโรงแรมจนกว่าจะเริ่มเรียกเก็บเงินในวันที่ 10 มกราคม 2027

::callout{type="info" title="สิ่งที่เราตรวจสอบแล้ว และสิ่งที่คุณควรตรวจสอบ"}
เซิร์ฟเวอร์ Hotelier Tools รองรับการเข้าสู่ระบบที่ ChatGPT ใช้ คือ OAuth พร้อม PKCE และการลงทะเบียนไคลเอนต์อัตโนมัติ เมนูและกฎของแพ็กเกจใน ChatGPT เปลี่ยนบ่อย และเรายังไม่ได้ทดสอบครบทุกขั้นตอนในทุกแพ็กเกจ ให้ตรวจสามเรื่องในบัญชีของคุณ คือ มีเมนู **Developer mode** หรือไม่ เครื่องมือของ Hotelier Tools ขึ้นมาหลังเชื่อมต่อหรือไม่ และแพ็กเกจของคุณให้ ChatGPT แก้ไขข้อมูลได้หรือไม่
::

Hotelier Tools เป็นเครื่องมืออิสระ ไม่ได้มีส่วนเกี่ยวข้องกับ OpenAI, SiteMinder หรือ Little Hotelier และไม่ได้รับการรับรองจากบริษัทเหล่านี้ โดยเชื่อมต่อผ่านบัญชี Little Hotelier ของที่พักคุณเอง

## วิธีเชื่อมต่อ ChatGPT กับ Little Hotelier ทีละขั้นตอน

ขั้นตอนด้านล่างอ้างอิง[คู่มือการเชื่อมต่อ](https://developers.openai.com/plugins/deploy/connect-chatgpt)ของ OpenAI ณ เดือนตุลาคม 2026 ถ้าหน้าจอของคุณไม่ตรงกัน แต่ละขั้นตอนมีเมนูแบบเดิมจากศูนย์ช่วยเหลือบอกไว้ในวงเล็บ

1. ไปที่ [chatgpt.com](https://chatgpt.com) ในเบราว์เซอร์ แล้วเข้า **Settings → Security and login** จากนั้นเปิด **Developer mode** (บางบัญชีจะอยู่ที่ **Settings → Apps → Advanced settings**)
2. เปิด **Plugins** ([chatgpt.com/plugins](https://chatgpt.com/plugins)) แล้วกดปุ่ม **+** เพื่อสร้างแอปแบบ developer mode (หน้าจอรุ่นเก่า: **Settings → Apps → Create**)
3. กรอกแบบฟอร์ม
   - **Name:** `Hotelier Tools`
   - **Description:** `Reservations, guests, invoices and prices from my Little Hotelier property`
   - **MCP server URL:** `https://dashboard.hotelier.tools/api/mcp`
   - **Authentication:** **OAuth**
4. สร้างแอป ChatGPT อาจแสดง **Scan Tools** ก่อน แล้วหน้าต่าง Hotelier Tools จะเปิดขึ้น
5. เข้าสู่ระบบ Hotelier Tools ที่หน้า **Authorize MCP access** เลือกที่พักถ้าคุณมีหลายแห่ง แล้วกด **Allow access**

::screenshot{src="/images/blog/demo/en/mcp-oauth-consent-card.webp" alt="การ์ด Authorize MCP access: ผู้ช่วย AI (MCP client) ต้องการเข้าถึงบัญชี Hotelier Tools ของคุณผ่าน MCP API แสดงอีเมลที่เข้าสู่ระบบ โทเค็นที่หมดอายุใน 30 วัน และปุ่ม Deny กับ Allow access" caption="กด Allow access โดย ChatGPT จะไม่เห็นรหัสผ่าน Hotelier Tools หรือ Little Hotelier ของคุณเลย" path="/oauth/authorize" width="472" height="327"}
::

6. ตรวจดูรายการเครื่องมือที่ ChatGPT พบ แอปจะขึ้นพร้อมป้าย **Dev**
7. เริ่มแชตใหม่ เปิดเมนู **+** เลือก **Developer mode** แล้วเลือก **Hotelier Tools** (บัญชีรุ่นใหม่พิมพ์ `@` แล้วเลือกได้ด้วย)

การเข้าสู่ระบบมีอายุ **30 วัน** หลังจากนั้น ChatGPT จะขอให้คุณเชื่อมต่อใหม่ คุณดูและเพิกถอนการเชื่อมต่อได้ใน Hotelier Tools ที่ **Developer → API Keys** (`/developer/api-keys`) ซึ่งมีป้าย **MCP client** กำกับ

::screenshot{src="/images/blog/demo/en/api-keys.webp" alt="หน้า API keys ใน Hotelier Tools มีฟอร์ม Generate a new key รายการ Active keys ที่มีคีย์ที่ถูกซ่อนไว้หนึ่งรายการพร้อมปุ่ม Revoke และคำแนะนำ Good security practice" caption="คีย์และการเชื่อมต่อทั้งหมดอยู่ในส่วน Active keys กด Revoke เพื่อตัดสิทธิ์ได้ทันที" path="/developer/api-keys"}
::

### สำหรับ workspace แบบ Business, Enterprise หรือ Edu

บน **Business** OpenAI ระบุว่ามีเพียงแอดมินและเจ้าของ workspace ที่ใช้ developer mode และเผยแพร่แอปได้ ถ้าต้องการแชร์แอปให้เพื่อนร่วมงาน แอดมินต้องเผยแพร่จาก **Workspace settings → Apps → Drafts → Publish** ส่วน **Enterprise และ Edu** แอดมินให้สิทธิ์ developer mode แก่สมาชิกที่เลือกได้ผ่านการกำหนดสิทธิ์ตามบทบาท ทุกคนยังต้องเข้าสู่ระบบ Hotelier Tools ด้วยบัญชีที่มีสิทธิ์ API

### ทำไมไม่ใช้ API key

[เอกสารการยืนยันตัวตน](https://developers.openai.com/plugins/build/auth)ของ OpenAI ระบุว่า ChatGPT "cannot present custom API keys" (ส่ง API key แบบกำหนดเองไม่ได้) ดังนั้น API key แบบ `htk_` ที่ใช้ได้ใน [Claude Code, Cursor และ VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode) จึงใช้ที่นี่ไม่ได้ วิธีเดียวคือเข้าสู่ระบบผ่านเบราว์เซอร์

## 18 prompt ที่ใช้ได้กับโรงแรมขนาดเล็ก

เริ่มทุกแชตด้วยการเลือก Hotelier Tools ไว้ และการพิมพ์ชื่อ Hotelier Tools ใน prompt ช่วยให้ ChatGPT ใช้ข้อมูลของคุณแทนการค้นเว็บ เลขอ้างอิงการจองด้านล่างเป็นเลขสมมติ

### แขกที่มาถึงและห้อง

::prompt{label="ChatGPT"}
ใช้ Hotelier Tools ดูให้หน่อยว่าวันนี้ใครเช็คอินบ้าง ขอรายชื่อแขก จำนวนคืน ประเภทห้อง และบอกด้วยว่าจัดห้องแล้วหรือยัง
::

::prompt{label="ChatGPT"}
การจองที่แขกจะมาถึงใน 7 วันข้างหน้า รายการไหนยังไม่ได้จัดห้องบ้าง
::

::prompt{label="ChatGPT"}
วันนี้ใครเช็คเอาท์บ้าง และมีใครยังมียอดค้างชำระอยู่ไหม
::

::prompt{label="ChatGPT"}
คืนนี้และคืนพรุ่งนี้ ห้องแต่ละประเภทยังว่างอีกกี่ห้อง
::

### การชำระเงินและใบแจ้งหนี้

::prompt{label="ChatGPT"}
ขอรายการจองที่จะมาถึงใน 14 วันข้างหน้าและยังมียอดค้างชำระ เรียงจากยอดมากไปน้อย
::

::prompt{label="ChatGPT"}
การเข้าพักที่เช็คเอาท์ไปเมื่อสัปดาห์ที่แล้วและยังไม่มีใบแจ้งหนี้มีรายการไหนบ้าง แต่ละรายการช่วยบอกเหตุผลด้วยว่าทำไมยังออกใบแจ้งหนี้ไม่ได้
::

::prompt{label="ChatGPT"}
การจอง BDC-1234567890 พร้อมออกใบแจ้งหนี้แล้วหรือยัง ถ้ายังไม่พร้อม ยังขาดอะไรบ้าง
::

::prompt{label="ChatGPT"}
เขียนข้อความเตือนการชำระเงินสั้นๆ แบบสุภาพและเป็นกันเอง สำหรับแขกแต่ละคนที่จะมาถึงสัปดาห์นี้และยังค้างชำระ ยังไม่ต้องส่งอะไร ขอแค่ข้อความ
::

### ราคาและห้องว่าง

::prompt{label="ChatGPT"}
แสดงราคาและห้องว่างของวันศุกร์และวันเสาร์หน้า แยกตามประเภทห้อง
::

::prompt{label="ChatGPT"}
เปรียบเทียบราคาของฉันในอีก 14 คืนข้างหน้ากับราคาคู่แข่งที่คุณมี คืนไหนฉันถูกที่สุด และคืนไหนแพงที่สุด
::

::prompt{label="ChatGPT"}
อธิบายทีละขั้นว่าทำไมราคาที่แนะนำสำหรับห้องดับเบิลคืนวันเสาร์ที่ 14 พฤศจิกายนจึงเป็นราคานี้
::

::prompt{label="ChatGPT"}
คืนไหนในช่วง 30 วันข้างหน้าที่มีอัตราการเข้าพักต่ำที่สุด แนะนำว่าควรดูคืนไหนก่อน
::

### แขก

::prompt{label="ChatGPT"}
หาแขกที่เบอร์โทรลงท้ายด้วย 4521 แล้วแสดงการเข้าพักที่ผ่านมาและที่กำลังจะมาถึง
::

::prompt{label="ChatGPT"}
แขกที่จะมาถึงใน 7 วันข้างหน้ามีใครตรงกับรายชื่อแขกที่ไม่รับอีก (do-not-rebook) ของฉันไหม
::

::prompt{label="ChatGPT"}
แขกที่จะมาสัปดาห์นี้คนไหนยังขาดเอกสารยืนยันตัวตนหรือที่อยู่
::

### รายงาน

::prompt{label="ChatGPT"}
สรุปเดือนที่แล้ว: แขกที่เข้าพัก จำนวนคืนที่ขายได้แยกตามประเภทห้อง การยกเลิก และ no-show แสดงเป็นตาราง
::

::prompt{label="ChatGPT"}
สัปดาห์นี้งานที่ตั้งเวลาไว้ทำอะไรไปบ้าง มีงานไหนล้มเหลวไหม ถ้ามี อธิบายความผิดพลาดเป็นภาษาง่ายๆ
::

::prompt{label="ChatGPT"}
ใครอยู่ในรายชื่อรอห้อง (waitlist) บ้าง รอวันที่ไหน และมีห้องว่างขึ้นมาให้แล้วหรือยัง
::

คำตอบจะแม่นยำแค่ไหนขึ้นอยู่กับข้อมูลใน Little Hotelier ถ้าตัวเลขดูผิด ให้สั่ง ChatGPT แสดงการจองที่ใช้คำนวณ

## เชื่อมต่อ ChatGPT กับคัดลอกข้อมูลไปวาง ต่างกันอย่างไร

ถ้าไม่เชื่อมต่อ คุณต้องส่งออกรายงานจาก Little Hotelier วางลงใน ChatGPT แล้วถาม วิธีนี้ใช้ได้กับการวิเคราะห์ครั้งเดียว แต่ข้อมูลเป็นแค่ภาพ ณ เวลานั้น ไฟล์ที่ส่งออกอาจขาดบางฟิลด์ และรายชื่อแขกที่วางไว้จะค้างอยู่ในแชต

เมื่อใช้แอป MCP ตัว ChatGPT จะขอจาก Hotelier Tools เฉพาะข้อมูลที่ต้องใช้ในตอนที่ต้องใช้ เช่น แขกที่มาถึงวันนี้ ยอดค้างชำระของแขกคนหนึ่ง หรือราคาสัปดาห์หน้า คุณไม่ต้องส่งออกอะไร และคำตอบตรงกับข้อมูลใน Little Hotelier ณ ขณะนั้น

ถ้ายังอยากได้สเปรดชีต ดู[วิธีส่งออกการจองเป็น Excel](/blog/export-little-hotelier-reservations-excel)

## ChatGPT แก้ไขข้อมูลได้ไหม และอนุมัติอย่างไร

ได้ ถ้าแพ็กเกจของคุณมี MCP เต็มรูปแบบ Hotelier Tools มีเครื่องมือแก้ไขข้อมูล เช่น อัปเดตการจอง (เริ่มจากข้อเสนอที่แสดงค่าก่อน/หลัง แล้วจึงบันทึกจริง) บันทึกการชำระเงิน ลงทะเบียนการเข้าพักสำหรับ[ใบแจ้งหนี้ตอนเช็คเอาท์](/blog/send-invoice-to-guest-at-checkout) และปรับใช้ราคาที่แนะนำ

::callout{type="warning" title="การยืนยันใน ChatGPT คือการอนุมัติด่านเดียว"}
ภายในแดชบอร์ด Hotelier Tools ทุกการเปลี่ยนแปลงต้องรอการ์ดอนุมัติ แต่นอกแดชบอร์ดไม่มีการ์ดนี้ **เครื่องมือที่แก้ไขข้อมูลจะทำงานทันทีที่ ChatGPT เรียกใช้** OpenAI ระบุว่า "write actions by default require confirmation" (การแก้ไขข้อมูลต้องได้รับการยืนยันโดยค่าเริ่มต้น) และเตือนว่าการแก้ไขที่ผิดพลาด "could destroy data" (อาจทำลายข้อมูลได้) อ่านทุกการยืนยันให้ดีก่อนกดยอมรับ
::

หลักปฏิบัติที่ควรทำ

- **ตั้งสิทธิ์แอปไว้ที่ Always ask** [สิทธิ์ของแอป](https://help.openai.com/en/articles/20001495)ของ OpenAI มีตั้งแต่ **Always ask** ไปจนถึง **Allow all actions** ซึ่งแบบหลังจะข้ามการถามทั้งหมดและมี "elevated risk" (ความเสี่ยงสูงขึ้น) ChatGPT ถือว่าเครื่องมือที่ไม่ได้ติดป้ายว่าอ่านอย่างเดียวเป็นการแก้ไขข้อมูล จึงอาจถามยืนยันแม้แต่กับการค้นหาบางอย่าง
- **อย่าให้ ChatGPT จำการอนุมัติสำหรับการแก้ไขข้อมูล** ในการสนทนายาวๆ ตัวเลือกที่จำไว้มีผลแค่ในแชตนั้น แต่แชตเดียวก็ทำอะไรได้มาก
- **ระวังคำสั่งที่ซ่อนอยู่ในข้อความของแขก** OpenAI เตือนเรื่อง prompt injection ถ้า ChatGPT เสนอสิ่งที่คุณไม่ได้ขอ ให้ปฏิเสธ

บางอย่าง ChatGPT ทำไม่ได้เลย ไม่ว่าคุณจะอนุมัติอะไรก็ตาม เครื่องมือที่ย้อนกลับไม่ได้ถูกบล็อกสำหรับไคลเอนต์ภายนอกทุกตัว ได้แก่การส่งใบแจ้งหนี้ให้แขกทางอีเมล การคืนเงิน การยื่นแบบสำรวจ INE การส่งคำเชิญทีม การส่งลิงก์ใบแจ้งหนี้ให้แขกทางอีเมล การตอบคำถามจาก Booking.com และการรันการตรวจรายชื่อรอห้องที่ส่งข้อความหาแขก งานเหล่านี้ทำได้เฉพาะใน[ผู้ช่วยในแดชบอร์ด](/blog/ai-assistant-hotel-front-desk) และต้องผ่านการ์ดอนุมัติ

## ความเป็นส่วนตัว: ข้อมูลไปที่ไหน

เมื่อ ChatGPT เรียกเครื่องมือของ Hotelier Tools ผลลัพธ์ เช่น ชื่อแขก วันที่ และยอดเงิน จะเข้ามาอยู่ในการสนทนา และ OpenAI จะประมวลผลข้อมูลนั้น

ตาม[บทความแอปที่เชื่อมต่อ](https://help.openai.com/en/articles/11487775)ของ OpenAI ณ เดือนตุลาคม 2026

- บน **Business, Enterprise และ Edu** OpenAI "does not use information accessed from connectors to train models by default" (โดยค่าเริ่มต้นจะไม่นำข้อมูลจาก connector ไปเทรนโมเดล)
- บน **Free, Plus, Go และ Pro** OpenAI "may use information accessed from apps to train our models" (อาจนำข้อมูลจากแอปไปเทรนโมเดล) ถ้าเปิด **Improve the model for everyone** ไว้ ให้ปิดตัวเลือกนี้ใน [Data controls](https://help.openai.com/en/articles/7730893) ก่อนเชื่อมต่อข้อมูลโรงแรม
- ความจำ (memory) ของ ChatGPT อาจเก็บรายละเอียดที่อ่านผ่านแอป ตรวจ **Memory** ในการตั้งค่า หากคุณกังวลเรื่องนี้

ข้อมูลแขกเป็นข้อมูลส่วนบุคคล และโรงแรมของคุณยังคงเป็นผู้รับผิดชอบข้อมูลนั้น ถามเฉพาะสิ่งที่จำเป็น

::demo-cta{path="/developer/mcp-setup"}
::

## แก้ปัญหา

- **ไม่มี Developer mode** แพ็กเกจของคุณอาจไม่มีฟีเจอร์นี้ หรือบน Business จะมีเฉพาะแอดมินที่ใช้ได้ ส่วน Enterprise และ Edu ให้ขอสิทธิ์จากแอดมิน
- **ไม่มีเครื่องมือของ Hotelier Tools หรือมีเพียงบางตัว** แพ็กเกจของคุณอาจอนุญาตเฉพาะสิทธิ์อ่านและดึงข้อมูล ตรวจเงื่อนไขของแพ็กเกจคุณในศูนย์ช่วยเหลือของ OpenAI หรือใช้ [Claude](/blog/connect-claude-to-little-hotelier) ซึ่งอนุญาต custom connector พร้อมเครื่องมือแก้ไขข้อมูลในทุกแพ็กเกจ
- **ChatGPT ใช้แอปไม่ได้หลังผ่านไปหนึ่งเดือน** การเข้าสู่ระบบหมดอายุหลัง 30 วัน ให้เชื่อมต่อใหม่จาก **Settings → Plugins** (หรือ **Apps**)
- **ข้อผิดพลาด "No Little Hotelier credentials configured"** เชื่อมต่อ Little Hotelier ที่ **Credentials** ใน Hotelier Tools ก่อน
- **"lh_frozen" หรือคล้ายกัน** การเข้าสู่ระบบ Little Hotelier ถูกหยุดชั่วคราวหลังล็อกอินล้มเหลว มักเป็นเพราะรหัสผ่านหมดอายุ บันทึกรหัสผ่านใหม่ที่ **Credentials** หรือกด **Check now & resume**

## สรุป

- เปิด developer mode สร้างแอปด้วย URL `https://dashboard.hotelier.tools/api/mcp` และ **OAuth** แล้วกด **Allow access**
- ตรวจแพ็กเกจของคุณ: ตามข้อมูลของ OpenAI MCP แบบอ่านและแก้ไขข้อมูลเต็มรูปแบบมีใน Business, Enterprise และ Edu ส่วน Pro และอาจรวมถึง Plus ได้สิทธิ์อ่านอย่างเดียว
- ตั้งสิทธิ์แอปไว้ที่ **Always ask** การคืนเงินและการกระทำอื่นที่ย้อนกลับไม่ได้ถูกบล็อกอยู่แล้ว
- เพิ่งเริ่มรู้จัก MCP? เริ่มจาก[MCP server คืออะไร](/blog/what-is-mcp-server-hotels) และดูเครื่องมือทั้งหมดที่หน้า [API & MCP](/tools/bot/api-mcp)
