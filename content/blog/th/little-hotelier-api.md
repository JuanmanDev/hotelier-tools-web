---
title: "API ของ Little Hotelier มีไหม? คำตอบปี 2026"
seoTitle: "API ของ Little Hotelier มีไหม? คำตอบปี 2026"
description: "ไม่มี API key สำหรับการจองหรือข้อมูลแขก SiteMinder เปิดให้อะไรอย่างเป็นทางการ และวิธีดึงข้อมูล Little Hotelier ผ่าน REST ได้ในไม่กี่นาที"
date: 2026-10-03
category: api
tags: [api, rest, little hotelier, siteminder, developers]
keywords: [little hotelier api, API ของ Little Hotelier, little hotelier api documentation, little hotelier api key, siteminder api, siteminder exchange api, little hotelier rest api]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/rest-api-reference.webp
coverAlt: "หน้าเอกสารอ้างอิง REST API ใน Hotelier Tools แสดง base URL ปุ่มดาวน์โหลด openapi.json กล่อง Quick authorize (ช่อง Bearer token, Authorize Swagger, Use my session) และตัวอย่างโค้ด cURL, JavaScript, Python และ PowerShell"
featured: true
faq:
  - q: "Little Hotelier มี API สาธารณะสำหรับการจองของฉันหรือไม่?"
    a: "ณ เดือนตุลาคม 2026 ยังไม่มี API ที่ที่พักใช้กับการจองของตัวเองได้ API ของ SiteMinder ไว้สำหรับพันธมิตรเทคโนโลยีที่ผ่านการรับรอง และ Direct Booking API key ที่คุณสร้างเองได้ครอบคลุมเฉพาะราคา ห้องว่าง และรายละเอียดที่พักสำหรับเว็บไซต์รับจอง"
  - q: "SiteMinder Exchange (SMX) คืออะไร และรวม Little Hotelier ไหม?"
    a: "SMX คือ API ของ SiteMinder สำหรับแอปพันธมิตร เช่น เช็คอิน ส่งข้อความ และบริหารรายได้ คู่มือนักพัฒนาของ SiteMinder ระบุว่า Little Hotelier เป็นแหล่งข้อมูลการจองสำหรับ SMX แต่ไม่ใช่แหล่งของห้องว่างและราคา และมีเฉพาะพันธมิตรที่ผ่านการรับรองเท่านั้นที่เชื่อมต่อได้"
  - q: "จะเป็นพันธมิตรเชื่อมต่อของ SiteMinder ได้อย่างไร และใช้เวลานานแค่ไหน?"
    a: "คุณส่งแบบฟอร์มสมัครการเชื่อมต่อของ SiteMinder เซ็นสัญญาความร่วมมือ จากนั้นพัฒนา รับรอง และเปิดใช้งานจริง SiteMinder ระบุว่าการเชื่อมต่อส่วนใหญ่ใช้เวลาประมาณ 60 วันนับจากเริ่มจนเปิดใช้งาน เส้นทางนี้ออกแบบมาสำหรับบริษัทซอฟต์แวร์ ไม่ใช่โรงแรมแห่งเดียว"
  - q: "API ที่ไม่เป็นทางการอย่าง Hotelier Tools ปลอดภัยและได้รับอนุญาตหรือไม่?"
    a: "Hotelier Tools ลงชื่อเข้าใช้ด้วยบัญชี Little Hotelier ของคุณเอง เก็บข้อมูลแบบเข้ารหัส (AES-256-GCM) และทำได้เฉพาะสิ่งที่บัญชีนั้นทำได้ในเว็บแอป Little Hotelier ระบบนี้ไม่ใช่การเชื่อมต่ออย่างเป็นทางการของ SiteMinder หากไม่แน่ใจ ให้ตรวจสอบข้อตกลงของคุณกับ SiteMinder เอง และคุณเพิกถอนคีย์ทุกตัวได้ทุกเมื่อ"
  - q: "Little Hotelier มี MCP server สำหรับผู้ช่วย AI หรือไม่?"
    a: "ณ เดือนตุลาคม 2026 ยังไม่มีสำหรับเจ้าของที่พัก งานด้าน AI ของ SiteMinder ใน Demand Plus เน้นที่ให้นักท่องเที่ยวค้นหาและจองห้องของคุณผ่าน ChatGPT และ Claude หากต้องการถาม AI เกี่ยวกับการจองของคุณเอง ต้องใช้ MCP server อิสระ เช่นตัวที่อยู่ใน Hotelier Tools"
  - q: "ทดสอบ API โดยไม่เสี่ยงกับข้อมูลจริงได้ไหม?"
    a: "ไม่มีคีย์ sandbox สาธารณะ ให้เริ่มจากการเรียกแบบอ่านอย่างเดียว (การจอง ราคา ประเภทห้อง) ซึ่งไม่เปลี่ยนแปลงอะไรใน Little Hotelier ส่วนการเรียกที่เขียนข้อมูล เช่น การออกใบแจ้งหนี้ จะสร้างเอกสารจริง"
---

ไม่มี API ที่คุณใช้กับการจองของตัวเองได้ ณ เดือนตุลาคม 2026 ศูนย์ช่วยเหลือของ Little Hotelier ไม่มีเอกสารเรื่อง API key ที่ที่พักใช้กับการจอง ข้อมูลแขก หรือใบแจ้งหนี้ได้ API ของ SiteMinder ไว้สำหรับพันธมิตรเทคโนโลยีที่ผ่านการรับรอง และคีย์เดียวที่คุณสร้างเองได้คือ **Direct Booking API** ซึ่งครอบคลุมราคา ห้องว่าง และรายละเอียดที่พักสำหรับเว็บไซต์รับจอง หากต้องการอ่านข้อมูลของคุณเองจากสคริปต์ สเปรดชีต หรือผู้ช่วย AI คุณใช้ REST API อิสระอย่าง Hotelier Tools ได้ ซึ่งเชื่อมต่อด้วยบัญชี Little Hotelier ของคุณเอง

ด้านล่างนี้คือสิ่งที่ SiteMinder เปิดให้อย่างเป็นทางการ แล้วต่อด้วยการตั้งค่า 5 นาทีพร้อมตัวอย่าง `curl` จริง

## Little Hotelier มี API สาธารณะไหม

มีสี่ช่องทางอย่างเป็นทางการในการนำข้อมูลเข้าหรือออกจาก Little Hotelier แต่ไม่มีช่องทางใดให้ API key สำหรับรายการจองของคุณ

| ช่องทางอย่างเป็นทางการ | ใครใช้ได้ | ครอบคลุมอะไร |
|---|---|---|
| SiteMinder Exchange (SMX) | แอปพันธมิตรที่ผ่านการรับรอง | การจองจาก Little Hotelier ไม่รวมห้องว่างและราคา |
| Direct Booking API | ที่พักที่ใช้ Direct Booking | ราคาและห้องว่างแบบเรียลไทม์ ที่พัก ประเภทห้อง แผนราคา |
| ส่งออก CSV | ผู้ใช้ทุกคน ทำเอง | การจอง รายได้ ใบแจ้งหนี้ บัญชี |
| แอปใน App Store | ที่พักใดก็ได้ ผ่านผู้พัฒนาแอป | ตามที่แอปนั้นซิงก์ |

### SiteMinder Exchange (SMX): สำหรับบริษัทซอฟต์แวร์

[คู่มือนักพัฒนา](https://developer.siteminder.com/get-started/siteminder-apis)ของ SiteMinder ระบุ API 5 ตัว ได้แก่ pmsXchange, SiteConnect, Channels Plus, SMX และ Direct Booking ตัวที่เกี่ยวกับ Little Hotelier คือ SMX ซึ่งเป็น API เบื้องหลังแอปอย่างเช็คอินออนไลน์และการส่งข้อความถึงแขก

ใน[รายชื่อผู้เผยแพร่ข้อมูลของ SMX](https://developer.siteminder.com/smx-api/additional-resources/reference-tables/property-publishers) Little Hotelier ส่ง**การจอง** แต่ไม่ส่งห้องว่างและราคา [SMX quick start](https://developer.siteminder.com/smx-api/guides/quick-start) ก็ระบุตรงกันว่า "you are not able to obtain ARI data" จาก Little Hotelier

การเข้าถึงสงวนไว้สำหรับพันธมิตร [FAQ](https://developer.siteminder.com/get-started/resources/faq) ของ SiteMinder ระบุว่าต้องเซ็นสัญญาความร่วมมือผ่าน[แบบฟอร์มสมัครการเชื่อมต่อ](https://www.siteminder.com/integrations/apply-now/)ก่อน แล้วพัฒนา รับรอง และเปิดใช้งาน ซึ่งพันธมิตร "ส่วนใหญ่" ทำเสร็จภายใน 60 วัน เส้นทางนี้เหมาะกับบริษัทซอฟต์แวร์ โรงแรมแห่งเดียวขอ SMX key ให้ตัวเองไม่ได้

### Direct Booking API: คีย์เดียวที่คุณสร้างเองได้

หากบัญชีของคุณอยู่บนแพลตฟอร์ม Little Hotelier รุ่นใหม่ (สมัครตั้งแต่พฤษภาคม 2025 หรืออัปเกรดแล้ว) [ศูนย์ช่วยเหลือ](https://help-platform.littlehotelier.com/en/articles/15689086-direct-booking-api)มีเอกสารเรื่อง Direct Booking API

1. ไปที่ **Direct booking → Configuration → API integration**
2. คลิก **Generate key**
3. ส่งคีย์และคู่มือนักพัฒนาของ SiteMinder ให้นักพัฒนาเว็บของคุณ

API นี้ให้ราคาและห้องว่างแบบเรียลไทม์ รายละเอียดที่พัก ประเภทห้อง และแผนราคา เพื่อให้นักพัฒนาสร้างหน้าจองหรือแอปแบบกำหนดเองได้ รวมอยู่กับ Direct Booking โดยไม่มีค่าใช้จ่ายเพิ่ม แต่**ไม่**คืนค่าการจอง แขก การชำระเงิน หรือใบแจ้งหนี้ และฝ่ายสนับสนุนของ Little Hotelier ไม่ช่วยสร้างหรือแก้สิ่งที่คุณพัฒนาด้วย API นี้

### ส่งออก CSV และ App Store

อย่างอื่นทั้งหมดเป็นแบบทำเองหรือผ่านผู้พัฒนา หน้า Reservations และรายงานส่วนใหญ่ส่งออกเป็น CSV ได้ (ขั้นตอนอยู่ใน[วิธีส่งออกรายการจองไปยัง Excel](/blog/export-little-hotelier-reservations-excel)) แอปใน [Little Hotelier App Store](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store) เชื่อมต่อเมื่อคุณติดต่อผู้ให้บริการแอป คุณไม่ได้รับข้อมูลเอง ดู[การเชื่อมต่อ Little Hotelier ที่ดีที่สุด](/blog/little-hotelier-integrations)ว่ามีอะไรบ้าง

## วิธีดึงข้อมูล Little Hotelier ของคุณออกมาด้วยโปรแกรม

Hotelier Tools เป็นแดชบอร์ดอิสระสำหรับที่พักที่ใช้ Little Hotelier มี REST API (สถานะ: beta) และ MCP server สำหรับผู้ช่วย AI

หลักการทำงานแบบเข้าใจง่าย

- คุณเชื่อมต่อบัญชี Little Hotelier ของคุณครั้งเดียวที่หน้า **Credentials** (`/credentials`) ข้อมูลถูกเก็บแบบเข้ารหัส (AES-256-GCM)
- จากนั้น Hotelier Tools ใช้ endpoint บนเว็บชุดเดียวกับที่เว็บแอป Little Hotelier ใช้ อ่านและทำได้เท่าที่บัญชีนั้นทำได้ ไม่เกินนั้น
- สคริปต์ของคุณเรียก Hotelier Tools ด้วย API key และ Hotelier Tools คุยกับ Little Hotelier ต่อ

::callout{type="note" title="เป็นระบบอิสระ ไม่ใช่ของทางการ"}
Hotelier Tools ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder หรือ Little Hotelier ไม่ใช่ API อย่างเป็นทางการของ SiteMinder และเชื่อมต่อด้วยบัญชี Little Hotelier ของที่พักคุณเอง แดชบอร์ดใช้ฟรีสำหรับทุกโรงแรมจนถึงวันเริ่มเรียกเก็บเงิน 10 มกราคม 2027
::

## วิธีสร้าง API key และเรียกใช้ครั้งแรก

คุณต้องมีบัญชี Hotelier Tools (สมัครที่ [dashboard.hotelier.tools/register](https://dashboard.hotelier.tools/register)) และเชื่อมต่อ Little Hotelier ที่หน้า **Credentials** แล้ว เจ้าของที่พักมีสิทธิ์ใช้ API โดยค่าเริ่มต้น

1. เปิด **Developer → API & MCP → API Keys** (`/developer/api-keys`)
2. ใต้ "Generate a new key" พิมพ์ชื่อที่คุณจำได้ภายหลัง เช่น `sheets-export` แล้วกด **Generate key**
3. คัดลอกคีย์ทันที หน้าเว็บเตือนว่า "Copy this key now — it will not be shown again." คีย์ขึ้นต้นด้วย `htk_`

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="หน้า API keys ทันทีหลังสร้างคีย์: กล่องสีเขียว Key generated ที่แสดงคีย์แบบปิดบังพร้อมปุ่มคัดลอก คีย์ใหม่ชื่อ Blog integration ใต้ Active keys พร้อมปุ่ม Revoke และข้อความแจ้ง API key created" caption="คัดลอกคีย์จากกล่องสีเขียวทันที เพราะแสดงเพียงครั้งเดียว ตั้งชื่อแต่ละคีย์ตามสิ่งที่จะใช้ เพื่อให้รู้ว่าควรเพิกถอนตัวไหนในภายหลัง" path="/developer/api-keys"}
::

4. ตรวจสอบว่า API ตอบสนอง การเรียกนี้เป็นสาธารณะและไม่ต้องใช้คีย์

```bash
curl https://dashboard.hotelier.tools/api/v1/health
```

5. ต่อไปเป็นการเรียกด้วยคีย์ของคุณ จะคืนค่า property ID ของ Little Hotelier และบัญชีที่ใช้

```bash
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  https://dashboard.hotelier.tools/api/v1/property
```

บน Windows ใน PowerShell ให้พิมพ์ `curl.exe` แทน `curl` หรือใช้คำสั่งของ PowerShell เอง

```powershell
$headers = @{ Authorization = "Bearer htk_YOUR_API_KEY" }
Invoke-RestMethod -Headers $headers -Uri "https://dashboard.hotelier.tools/api/v1/property"
```

คีย์ทำอะไรได้บ้าง: **ไม่มี scope** คีย์ทำงานกับที่พักเดียวที่สร้างคีย์ไว้ ในฐานะผู้ที่สร้างคีย์ และด้วยสิทธิ์ปัจจุบันของผู้นั้น แต่ละคนมีคีย์ได้สูงสุด 10 ตัว และเพิกถอนตัวใดก็ได้ในหน้าเดียวกัน

### ชอบคลิกมากกว่าพิมพ์? ใช้ตัวสำรวจ API

เปิด **REST API & Swagger** (`/developer/rest-api`) ที่ **Quick authorize** วางคีย์ลงในช่อง "Bearer token (API key or session JWT)" แล้วกด **Authorize Swagger** หรือกด **Use my session** เพื่อข้ามการใช้คีย์ จากนั้นลอง endpoint ใดก็ได้ใน "Interactive API explorer" หน้านี้ยังมี **Download spec** และ "Code templates" ใน cURL, JavaScript, Python และ PowerShell

::screenshot{src="/images/blog/demo/en/rest-api-interactive-explorer.webp" alt="ตัวสำรวจ API แบบโต้ตอบ (Swagger) หลังกด Try it out และ Execute ที่ GET /property แสดง URL คำขอ https://demo.hotelier.tools/api/v1/property และเนื้อหาตอบกลับ 200 ที่มี propertyId 90210" caption="อนุญาตสิทธิ์ครั้งเดียว แล้วรัน endpoint ใดก็ได้จากเบราว์เซอร์ และดูคำขอจริงพร้อม JSON ที่ได้กลับมา" path="/developer/rest-api"}
::

## endpoint ไหนที่ใช้ได้บ้าง

Base URL คือ `https://dashboard.hotelier.tools/api/v1` รายการฉบับเต็มล่าสุดอยู่ใน [OpenAPI spec](https://dashboard.hotelier.tools/api/v1/openapi.json) สาธารณะ ต่อไปนี้คือตัวที่คนส่วนใหญ่เริ่มใช้

| Method | Path | ได้อะไร |
|---|---|---|
| GET | `/reservations` | การจองตามวันเช็คอิน เลือกใส่ `status` และ `limit` ได้ |
| GET | `/reservations/{id}` | รายละเอียดเต็มของการจองหนึ่งรายการ (id ตัวเลขหรือรหัสอ้างอิง `LH…`) |
| GET | `/reservations/{id}/invoices` | ใบแจ้งหนี้ของการจอง |
| GET | `/reservations/{id}/invoices/{invoiceId}/download` | ใบแจ้งหนี้หนึ่งใบเป็น PDF |
| POST | `/reservations/{id}/invoices` | สร้างใบแจ้งหนี้ใหม่ใน Little Hotelier (ไม่ส่งอีเมลถึงแขก) |
| GET | `/guests` | ค้นหาแขกด้วยข้อความ ชื่อ อีเมล หรือเบอร์โทร |
| GET | `/prices` | ราคาและห้องว่างตามช่วงวันที่ |
| GET | `/room-types` | ประเภทห้องพร้อมจำนวนห้องของแต่ละประเภท |
| GET | `/methods` | method ดิบของ Little Hotelier ที่เรียกได้ (สาธารณะ) |
| POST | `/methods/{methodName}` | รัน method ใดตัวหนึ่ง เช่น `getReservationsByDateRange` |

ตัวอย่างให้คัดลอกไปวางได้ (วันที่และ ID เป็นข้อมูลสมมติ)

```bash
# Checked-out reservations with check-in in November 2026
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations?startDate=2026-11-01&endDate=2026-11-30&status=checked_out&limit=100"

# Everything about one booking
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/reservations/LH00000000000001"

# Rates and availability for a week
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/prices?startDate=2026-12-01&endDate=2026-12-07"

# Find a guest by surname
curl -H "Authorization: Bearer htk_YOUR_API_KEY" \
  "https://dashboard.hotelier.tools/api/v1/guests?lastName=Garcia&perPage=50"

# Every reservation overlapping a range (raw method, named params)
curl -X POST "https://dashboard.hotelier.tools/api/v1/methods/getReservationsByDateRange" \
  -H "Authorization: Bearer htk_YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"params":{"startDate":"2026-11-01","endDate":"2026-11-30"}}'
```

การเรียกแบบรายการจะคืน JSON หน้าตาประมาณ `{ "success": true, "count": 2, "data": [ … ] }` หากอยากลองเรียก method ดิบโดยไม่เขียนโค้ด เปิด **LH Methods** (`/methods`) ในแดชบอร์ดแล้วรันจากเบราว์เซอร์ได้เลย ประวัติการรันบันทึกไว้ใน **Run History**

::screenshot{src="/images/blog/demo/en/little-hotelier-methods.webp" alt="หน้าทดลอง method ของ Little Hotelier ใน Hotelier Tools แสดงการ์ดหนึ่งใบต่อ method ดิบ เช่น getReservations, getReservationDetails, getReservationsByDateRange, addPaymentRecord, updateReservation และ generateInvoice พร้อมจำนวนพารามิเตอร์ของแต่ละตัว" caption="ลองรัน method ดิบของ Little Hotelier ด้วยตัวเองก่อนนำไปเขียนสคริปต์" path="/methods"}
::

::demo-cta{path="/developer/rest-api"}
::

## ข้อจำกัด ข้อผิดพลาด และสิ่งที่ยังไม่มี

**Rate limit** 100 คำขอต่อนาทีต่อหนึ่งที่อยู่ IP ทุกการตอบกลับมี `X-RateLimit-Limit`, `X-RateLimit-Remaining` และ `X-RateLimit-Reset` หากเกินขีดจำกัดจะได้ `429` พร้อมเฮดเดอร์ `Retry-After`

**การแบ่งหน้า** `/reservations` คืนได้สูงสุด 100 รายการต่อครั้ง (`limit` ค่าเริ่มต้น 50) และกรองตามวันเช็คอิน หากต้องการข้อมูลทั้งปี ให้ขอทีละเดือน และถ้าเดือนใดคืนมาครบ 100 พอดี ให้แบ่งครึ่งเดือนนั้น `/guests` แบ่งหน้าด้วย `page` และ `perPage` (สูงสุด 50) `/prices` จะแบ่งช่วงที่ยาวกว่าสองสัปดาห์เป็นส่วน ๆ ช่วงยาวจึงช้ากว่า

**ข้อผิดพลาด** ส่งกลับเป็น JSON ที่มี `statusCode` และ `statusMessage`

| รหัส | มักหมายถึง |
|---|---|
| 401 | ไม่มีคีย์ คีย์ผิด หรือคีย์ถูกเพิกถอนแล้ว |
| 404 | ไม่มีการจองนั้น หรือไม่ได้อยู่ในที่พักของคุณ |
| 422 | พารามิเตอร์ไม่ถูกต้อง เช่น วันที่ไม่อยู่ในรูปแบบ `YYYY-MM-DD` |
| 429 | คำขอมากเกินไป รอตามเวลาใน `Retry-After` |
| 500 / 502 | Little Hotelier ไม่ตอบสนอง ลองใหม่ภายหลัง |

**ข้อมูลที่ถูกปิดบังก็ยังถูกปิดบัง** API อ่านได้เฉพาะสิ่งที่ Little Hotelier ยังเก็บไว้ Little Hotelier [ปิดบังรายละเอียดแขกหลังเช็คเอาต์ 180 วัน](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation) และไม่มี API ใดเอากลับมาได้ ให้ส่งออกก่อนถึงเวลานั้น

**ยังไม่มี:** webhook ขาออกหรือการแจ้งเตือนแบบเรียลไทม์ คีย์ sandbox สาธารณะ และแพ็กเกจ SDK บน npm หรือ PyPI หากต้องการรันตามกำหนดเวลา ให้ใช้ตัวตั้งเวลาของคุณเอง (cron job, Windows Task Scheduler หรือ trigger ของ Google Sheets)

**การเขียนข้อมูลเป็นของจริง** `POST /reservations/{id}/invoices` จะสร้างเอกสารใบแจ้งหนี้ใหม่ใน Little Hotelier ทุกครั้งที่เรียก ให้เริ่มจากการเรียกแบบอ่านอย่างเดียว และอย่าให้คีย์อยู่ในสเปรดชีตที่แชร์หรือโค้ดสาธารณะ

## สร้างอะไรได้บ้างด้วย API นี้

- **ชีตรายการจองสด** ดึงการเข้าพักของเดือนที่แล้วเข้า Google Sheets หรือ Excel ตามกำหนดเวลา ดู[ส่งออกรายการจองไป Excel และ Google Sheets](/blog/export-little-hotelier-reservations-excel)
- **ชุดเอกสารสำหรับนักบัญชี** ดาวน์โหลด PDF ใบแจ้งหนี้ทีละการจอง หรือข้ามการเขียนโค้ดโดยใช้ ZIP รายไตรมาสใน[ดาวน์โหลดใบแจ้งหนี้ทั้งหมดในครั้งเดียว](/blog/download-all-little-hotelier-invoices)
- **แดชบอร์ด** ส่งอัตราการเข้าพักและรายได้เข้า Looker Studio หรือ Power BI จากชีตที่ API อัปเดตให้
- **ผู้ช่วย AI** คีย์เดียวกันใช้กับ MCP server ของ Hotelier Tools (`https://dashboard.hotelier.tools/api/mcp`) ได้ ซึ่งให้เครื่องมือด้านโรงแรมกว่า 100 รายการแก่ Claude, ChatGPT, Cursor หรือ VS Code เริ่มจาก[MCP server คืออะไร](/blog/what-is-mcp-server-hotels) แล้ว[เชื่อมต่อ Claude](/blog/connect-claude-to-little-hotelier) หรือตั้งค่า [Claude Code, Cursor และ VS Code](/blog/little-hotelier-mcp-claude-code-cursor-vscode)
- **ตัวเชื่อมระหว่างเครื่องมือ** ที่ไหนไม่มีแอปใน App Store สคริปต์เล็ก ๆ ย้ายข้อมูลระหว่าง Little Hotelier กับเครื่องมืออื่นได้ เปรียบเทียบตัวเลือกใน[การเชื่อมต่อ Little Hotelier ที่ดีที่สุด](/blog/little-hotelier-integrations)

## ขั้นตอนถัดไป

- หากคุณสร้างซอฟต์แวร์ให้โรงแรมหลายแห่ง ให้สมัครโครงการพันธมิตรของ SiteMinder และ SMX
- หากต้องการเฉพาะข้อมูลของที่พักตัวเอง ให้สร้างคีย์ Hotelier Tools ที่ `/developer/api-keys` แล้วเรียก `/reservations`
- ส่งออกข้อมูลแขกที่ต้องเก็บไว้ก่อนที่ Little Hotelier จะปิดบังเมื่อครบ 180 วัน
- ทุกอย่างที่ API และ MCP server มีให้อยู่ใน[หน้าฟีเจอร์ API & MCP](/tools/bot/api-mcp)
