---
title: "ส่งออกข้อมูลการจอง Little Hotelier เป็น Excel"
seoTitle: "ส่งออกการจอง Little Hotelier เป็น Excel หรือ Sheets"
description: "Little Hotelier ปิดบังข้อมูลแขก 180 วันหลังเช็คเอาท์ ส่งออกการจองและรายชื่อแขกเป็น Excel หรือ Google Sheets ไว้ตั้งแต่ตอนนี้ ทำเองหรือตั้งให้อัตโนมัติก็ได้"
date: 2026-10-03
category: api
tags: [export, excel, google sheets, reports, little hotelier]
keywords: [ส่งออกข้อมูลการจอง little hotelier เป็น excel, โปรแกรม โรงแรม excel ฟรี, little hotelier reports, little hotelier csv, รายชื่อแขกโรงแรม excel, little hotelier export excel, ข้อมูลแขกถูกปิดบัง little hotelier]
feature: api-mcp
demoPath: /methods
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "พอร์ทัลนักพัฒนาของ Hotelier Tools มีการ์ด REST API และ Swagger, MCP setup, API keys และ LH methods เหนือตัวอย่างการยืนยันตัวตนด้วย API key"
faq:
  - q: "หลัง 180 วันอะไรจะถูกปิดบังบ้าง"
    a: "Little Hotelier ระบุว่าข้อมูลส่วนบุคคลของแขก (PII) จะถูกปิดบังหลังวันเช็คเอาท์ของการจอง 180 วัน การจองยังอยู่ แต่รายงานและการค้นหาจะไม่แสดงรายละเอียดส่วนตัวของแขกอีก ควรส่งออกสิ่งที่ต้องการก่อนถึงวันนั้น"
  - q: "ทำไมไฟล์ส่งออกจาก Little Hotelier ไม่มีเบอร์โทรศัพท์"
    a: "Little Hotelier ไม่ใส่เบอร์โทรของแขกในไฟล์ CSV ของการจองเพื่อเหตุผลด้านความปลอดภัย คุณยังเห็นเบอร์ได้ในหน้าการจองหรือโปรไฟล์แขก และการค้นหาแขกใน Hotelier Tools API จะคืนฟิลด์ phone_number เมื่อ Little Hotelier มีข้อมูล"
  - q: "ตั้งเวลาส่งออกอัตโนมัติใน Little Hotelier ได้ไหม"
    a: "บทความในศูนย์ช่วยเหลือที่เราตรวจเมื่อเดือนตุลาคม 2026 อธิบายเฉพาะการรันและส่งออกรายงานด้วยตัวเอง ไม่มีการตั้งเวลาส่งออก ถ้าต้องการให้อัตโนมัติ ให้ใช้สคริปต์หรือ trigger ของ Google Sheets ที่ดึงข้อมูลผ่าน API"
  - q: "ส่งออกข้อมูลย้อนหลังเกินหนึ่งปีในครั้งเดียวได้ไหม"
    a: "Little Hotelier จำกัดการส่งออกยอดรวมแขกที่ 365 วัน และการค้นหาการจองของ channel manager ย้อนหลังได้เพียง 548 วัน ควรส่งออกทีละปี (หรือทีละเดือน) แล้วเก็บไฟล์ไว้"
  - q: "ส่งออกเฉพาะการจองจาก Booking.com ได้อย่างไร"
    a: "กรองตามช่องทางในรายงานของ Channel Manager หรือส่งออกทั้งหมดแล้วกรองรหัสการจองใน Excel รหัสที่ขึ้นต้นด้วย BDC คือ Booking.com, EXP คือ Expedia, ABB คือ Airbnb, AGO คือ Agoda, HWL คือ Hostelworld และ LH คือการจองผ่านแผนกต้อนรับหรือ booking engine ของคุณเอง"
---

เปิด **Reservations** ตั้งวันที่ กด **Search** แล้วกด **Export** Little Hotelier จะดาวน์โหลดไฟล์ CSV ที่เปิดใน Excel หรือ Google Sheets ได้ ควรทำเป็นประจำ เพราะ Little Hotelier ปิดบังข้อมูลส่วนตัวของแขก **180 วันหลังเช็คเอาท์** และไฟล์ส่งออกไม่มีเบอร์โทรศัพท์ ถ้าอยากได้สำเนาที่สร้างขึ้นเองอัตโนมัติทุกเดือน ให้ดึงข้อมูลชุดเดียวกันผ่าน API

## ทำไมต้องส่งออกก่อนข้อมูลแขกถูกปิดบัง

ศูนย์ช่วยเหลือของ Little Hotelier ระบุชัดเจนว่า "Guest Personally Identifiable Information (PII) is masked 180 days after the reservation check out date" (ข้อมูลที่ระบุตัวตนของแขกจะถูกปิดบัง 180 วันหลังวันเช็คเอาท์ของการจอง) ([channel manager search](https://helpcentre.littlehotelier.com/en/articles/8673959-search-and-view-a-reservation), [channel manager reports](https://helpcentre.littlehotelier.com/en/articles/8673872-channel-manager-run-and-export-reports), [booking engine reports](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports))

ข้อจำกัดอีกสองข้อที่ควรรู้

- การค้นหาการจองของ channel manager หาได้เฉพาะการจองที่ "created or checked out within the last 548 days" (สร้างหรือเช็คเอาท์ภายใน 548 วันที่ผ่านมา)
- เมื่อข้อมูลถูกปิดบังแล้ว ไม่มีการส่งออกหรือ API ใดนำกลับมาได้

ดังนั้นถ้าคุณต้องใช้ข้อมูลแขกสำหรับใบแจ้งหนี้ รายชื่อแขกที่กลับมาพักซ้ำ ข้อพิพาท หรือสถิติของคุณเอง ให้ส่งออกตอนที่ข้อมูลยังอยู่ เก็บเฉพาะข้อมูลที่มีเหตุผลต้องเก็บ และเก็บไฟล์ไว้ในที่ที่จำกัดสิทธิ์การเข้าถึงได้ เพราะเป็นข้อมูลส่วนบุคคล

::callout{type="info" title="Little Hotelier สองเวอร์ชัน"}
บัญชีที่สร้างตั้งแต่พฤษภาคม 2025 (หรืออัปเกรดแล้ว) ใช้ **platform** ใหม่ ซึ่งมี[ศูนย์ช่วยเหลือแยกต่างหาก](https://help-platform.littlehotelier.com/en/) ส่วนบัญชีเก่าใช้เวอร์ชัน **classic** ขั้นตอนด้านล่างระบุเส้นทางเมนูของทั้งสองแบบ
::

## วิธีส่งออกการจองจาก Little Hotelier เป็น Excel

1. เปิด **Reservations** ในเวอร์ชัน classic: **My Apps → Front Desk → Reservations**
2. ตั้ง **Date type** (**Check-in date**, **Check-out date** หรือ **Booked on date**) แล้วตั้ง **Date from** และ **Date to** ทำทีละเดือนปฏิทินจะสะดวกที่สุด
3. เลือก **Status** ถ้าต้องการ: **All**, **Confirmed**, **Checked-in**, **Checked-out** หรือ **Cancelled**
4. คลิก **Search**
5. คลิก **Export** ไฟล์จะดาวน์โหลดเป็น `.csv` บน platform ใหม่ Little Hotelier จะขอรหัส MFA หรือ passkey ก่อนส่งออกการจอง แขก การชำระเงิน รายได้ และใบแจ้งหนี้

::screenshot{src="/images/scripts/full-width-reservation-table/to.png" alt="หน้า Reservations ของ Little Hotelier classic ในภาษาสเปน: ตัวกรองนามสกุลแขก รหัสการจอง เลขที่ใบแจ้งหนี้ ประเภทวันที่ สถานะ วันที่ และแหล่งที่มา ปุ่ม Search พบการจอง 36 รายการ และลิงก์ Export" caption="หน้า Reservations แบบ classic (หน้าจอภาษาสเปน) ค้นหาก่อน แล้ว Export จะดาวน์โหลดผลลัพธ์ทั้งหมดเป็น CSV"}
::

รายละเอียดสองข้อจาก[ศูนย์ช่วยเหลือ](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data) ช่วยลดความสับสน

- ถ้าผลการค้นหามีมาก หน้าจอจะแสดงเฉพาะ **31 วันแรก** แต่ไฟล์ส่งออกมีครบทั้งหมด
- ถ้าจะนับแขกในช่วงหนึ่ง ให้ตั้ง Date type และ Status ให้สอดคล้องกัน (วันเช็คอินคู่กับ **Checked-in** วันเช็คเอาท์คู่กับ **Checked-out**) [คู่มือ classic](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information) จำกัดการส่งออกนี้ที่ **365 วัน**

### ข้อมูลในไฟล์ CSV (และสิ่งที่ไม่มี)

ไฟล์ส่งออกมีคอลัมน์มากกว่าที่แสดงบนหน้าจอ ตามข้อมูลของ [Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/8673668-run-and-export-reservations-information) คุณจะได้ข้อมูลต่อไปนี้

- **การจอง:** รหัสอ้างอิง วันที่จอง ช่องทาง สถานะ วันที่ยกเลิก
- **แขก:** ชื่อและนามสกุล อีเมล องค์กร ที่อยู่เต็ม
- **การเข้าพัก:** เช็คอิน เช็คเอาท์ จำนวนคืน เวลาที่จะมาถึง ความคิดเห็นของแขก ประเภทห้อง ห้อง แผนราคา
- **เงิน:** ยอดรวมย่อย รายการเสริม (extras) ค่าธรรมเนียมเพิ่มเติม ภาษี ยอดที่ชำระแล้ว ยอดค้างชำระ
- **จำนวนแขก:** ผู้ใหญ่ เด็ก ทารก และคำตอบของคำถามเพิ่มเติมที่คุณตั้งไว้ในการจอง

สิ่งที่ไม่มี: **เบอร์โทรศัพท์** (Little Hotelier ให้เหตุผลว่า "for security reasons" หรือเพื่อความปลอดภัย) และประวัติการเปลี่ยนแปลง เช่น เวลาที่แขกถูกเช็คอินจริง

## Little Hotelier ส่งออกรายงานอะไรได้อีก

รายงานส่วนใหญ่มีปุ่ม **Export** ที่ให้ไฟล์ CSV เส้นทางที่ระบุเป็นของ platform ใหม่ ยกเว้นแถว channel manager และ booking engine ที่มาจากเวอร์ชัน classic (ใต้ **My Apps**) บัญชี classic จะพบรายงานอื่นส่วนใหญ่ที่ **My Apps → Front Desk → Reports**

| รายงาน | อยู่ที่ไหน | สิ่งที่ได้ |
|---|---|---|
| Guests | Reports → Operational → Guests | แขกที่เข้าพัก ตามช่วงวันที่ |
| Invoices | Reports → Operational → Invoices | รายการใบแจ้งหนี้เป็น CSV และ PDF เป็น ZIP |
| Accounting | Reports → Operational → Accounting | ใบแจ้งหนี้ที่ finalise แล้ว จัดรูปแบบสำหรับ Xero และ QuickBooks |
| Revenue (7 มุมมอง) | Reports → Strategic → Revenue | สรุป ประเภทห้อง ห้อง แผนราคา ช่องทาง ภาษี ของเสริม |
| Channel manager | Channel Manager → Reports | สรุปการจอง การเข้าพักรายห้อง เช็คอิน yield ของช่องทาง |
| Booking engine | Direct Booking → Reports | การจองพร้อมอุปกรณ์ที่ใช้และความยินยอม GDPR |
| Spanish police | Reports → Operational → Police report | เฉพาะสเปน: ข้อมูลแขกสำหรับทะเบียนของตำรวจ |

แหล่งข้อมูล: [Getting started with Reports](https://help-platform.littlehotelier.com/en/articles/10813931-getting-started-with-reports), [Invoice report](https://help-platform.littlehotelier.com/en/articles/14390737-how-to-run-an-invoice-report), [Accounting export](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final), [Revenue reports](https://helpcentre.littlehotelier.com/en/articles/8884214-revenue-reports)

เคล็ดลับ: ไฟล์ส่งออก **Summary** ของรายงาน Revenue มีคอลัมน์ "Rate per night" แยกหนึ่งแถวต่อคืน เป็นวิธีที่เร็วที่สุดในการดูว่าแต่ละคืนของการเข้าพักยาวขายไปในราคาเท่าไร

## วิธีเปิด CSV ใน Excel โดยไม่ให้ตัวอักษรเพี้ยน

ถ้าชื่ออย่าง "José" กลายเป็น "JosÃ©" (หรือภาษาไทยกลายเป็นตัวอักษรอ่านไม่ออก) แสดงว่า Excel เดาการเข้ารหัสอักขระ (encoding) ผิด ให้นำเข้าไฟล์แทนการดับเบิลคลิกเปิด

1. ใน Excel ไปที่ **Data → From Text/CSV** แล้วเลือกไฟล์ ([ขั้นตอนของ Microsoft](https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba))
2. ตั้ง **File Origin** เป็น **65001: Unicode (UTF-8)** และ **Delimiter** เป็น **Comma**
3. คลิก **Load**

ใน Google Sheets ใช้ **File → Import → Upload** และปล่อยตัวคั่นไว้ที่อัตโนมัติ ซึ่ง Sheets อ่าน UTF-8 ได้ถูกต้องอยู่แล้ว

## รายชื่อแขกที่กลับมาพักซ้ำ: ส่งออกอะไรได้ และต้องมีความยินยอมแบบไหน

CSV ของการจองมีชื่อ อีเมล และที่อยู่ ซึ่งพอสำหรับอีเมลขอบคุณหรืออีเมลชวนกลับมาพักอีก ก่อนส่งอะไรออกไป ให้ตรวจก่อนว่าแขกคนไหนยินยอมรับข่าวสารจากคุณ

- ไฟล์ส่งออกของ **booking engine report** มีคอลัมน์ **GDPR consent** ซึ่ง Little Hotelier ระบุว่าจะมีค่าเมื่อแขกให้ความยินยอม และว่างเมื่อไม่ได้ยินยอม ([แหล่งข้อมูล](https://helpcentre.littlehotelier.com/en/articles/8673818-run-and-export-reports))
- ถ้าคุณใช้ Guest Engagement เมนู **Guest engagement → Guests → Mailchimp export** จะส่งรายชื่อแขกไปยังลิสต์ Mailchimp โดยส่งแขกทุกคน "regardless of GDPR consent status" (ไม่ว่าจะยินยอมตาม GDPR หรือไม่) และระบุสถานะ opt-in ไว้ จึงต้องกรองตามสถานะนั้นก่อนส่ง ([แหล่งข้อมูล](https://help-platform.littlehotelier.com/en/articles/8051434-connect-guest-engagement-to-mailchimp))

กฎการทำการตลาดต่างกันในแต่ละประเทศ ในไทยต้องคำนึงถึงพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA) ด้วย ควรส่งอีเมลเฉพาะแขกที่ยินยอมแล้ว เว้นแต่คุณยืนยันกับที่ปรึกษาแล้วว่ามีฐานทางกฎหมายอื่นรองรับ

## วิธีที่เร็วกว่า: ส่งออกอัตโนมัติด้วย API

Little Hotelier ไม่มี API key สำหรับการจองของคุณ (รายละเอียดอยู่ใน [Little Hotelier มี API ไหม](/blog/little-hotelier-api)) Hotelier Tools เป็นแดชบอร์ดอิสระที่เชื่อมต่อด้วยบัญชี Little Hotelier ของคุณเอง และให้ทั้ง REST API และ MCP server สำหรับผู้ช่วย AI Hotelier Tools ไม่ได้มีส่วนเกี่ยวข้องกับ SiteMinder หรือ Little Hotelier และไม่ได้รับการรับรองจากทั้งสองบริษัท ใช้ได้ฟรีทุกโรงแรมจนกว่าจะเริ่มเรียกเก็บเงินในวันที่ 10 มกราคม 2027

::callout{type="warning" title="API กู้ข้อมูลที่ถูกปิดบังคืนไม่ได้"}
Hotelier Tools อ่านได้เฉพาะสิ่งที่ Little Hotelier ยังเก็บอยู่ การจองที่เกิน 180 วันหลังเช็คเอาท์จะถูกปิดบังเมื่อดึงผ่าน API เช่นกัน จึงควรตั้งการส่งออกอัตโนมัติตั้งแต่ตอนนี้ เพื่อเก็บข้อมูลแต่ละเดือนไว้ขณะที่รายละเอียดยังครบ
::

เริ่มด้วยการสร้างคีย์: **Developer → API & MCP → API Keys** (`/developer/api-keys`) พิมพ์ชื่อ กด **Generate key** แล้วคัดลอก หน้านี้แสดงคีย์ครั้งเดียวเท่านั้น

::screenshot{src="/images/blog/demo/en/api-key-generated-masked.webp" alt="หน้า API keys หลังสร้างคีย์ชื่อ Blog integration: ฟอร์ม Generate a new key กล่องสีเขียว Key generated ที่บอกว่า Copy this key now, it will not be shown again พร้อมคีย์ที่ถูกปิดบังและปุ่มคัดลอก และคีย์ใหม่ในรายการ Active keys พร้อมปุ่ม Revoke" caption="ใช้หนึ่งคีย์ต่อหนึ่งงาน ตั้งชื่อตามชีตหรือสคริปต์ที่จะใช้คีย์นั้น และคัดลอกไว้ขณะที่ยังแสดงอยู่" path="/developer/api-keys"}
::

### ไม่ต้องเขียนโค้ด: รันการส่งออกจากแดชบอร์ด

1. เปิด **LH Methods** (`/methods`) แล้วเลือก `fetchReservationsCSV`
2. กรอก `dateFrom` และ `dateTo` (เช่น `2026-09-01` และ `2026-09-30`)
3. กดรัน เมธอดจะดึงการจองของคุณออกมาเป็น CSV ที่วางลงในชีตได้ทันที

::screenshot{src="/images/blog/demo/en/little-hotelier-methods.webp" alt="หน้า Little Hotelier methods ใน Hotelier Tools มีหนึ่งการ์ดต่อหนึ่งเมธอด เช่น getReservations, updateReservation, fetchReservationsCSV (Fetches reservations as a CSV file, 3 parameters), generateInvoice และ getInvoices" caption="เลือก fetchReservationsCSV ใน LH Methods เพื่อรันการส่งออก CSV ของการจองจากเบราว์เซอร์ ไม่ต้องเขียนโค้ด" path="/methods"}
::

### Google Sheets ที่รีเฟรชทุกเดือน

Apps Script นี้เพิ่มแท็บที่มีการจองของเดือนที่แล้ว (ตามวันเช็คอิน) ทุกครั้งที่รัน

1. ใน Google Sheet ใหม่ เปิด **Extensions → Apps Script**
2. ใน **Project Settings** เพิ่ม script property ชื่อ `HT_API_KEY` โดยใส่ค่าเป็นคีย์ `htk_…` ของคุณ วิธีนี้ทำให้คีย์ไม่ต้องอยู่ในโค้ด
3. วางโค้ดนี้แล้วบันทึก

```js [Code.gs]
function importLastMonth() {
  const key = PropertiesService.getScriptProperties().getProperty('HT_API_KEY');
  const tz = Session.getScriptTimeZone();
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const end = new Date(now.getFullYear(), now.getMonth(), 0);
  const day = d => Utilities.formatDate(d, tz, 'yyyy-MM-dd');

  const url = 'https://dashboard.hotelier.tools/api/v1/reservations'
    + '?startDate=' + day(start) + '&endDate=' + day(end) + '&limit=100';
  const res = UrlFetchApp.fetch(url, { headers: { Authorization: 'Bearer ' + key } });
  const rows = JSON.parse(res.getContentText()).data || [];
  if (!rows.length) return;

  const headers = Object.keys(rows[0]);
  const values = rows.map(r => headers.map(h =>
    r[h] !== null && typeof r[h] === 'object' ? JSON.stringify(r[h]) : r[h]));

  const ss = SpreadsheetApp.getActive();
  const name = Utilities.formatDate(start, tz, 'yyyy-MM');
  const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
}
```

4. คลิก **Run** หนึ่งครั้งและอนุญาตการเข้าถึงเมื่อ Google ถาม
5. ถ้าจะตั้งเวลา เปิด **Triggers → Add Trigger** เลือก `importLastMonth` ตั้ง event source เป็น **Time-driven** แล้วเลือก **Month timer** วันที่ 1 ([คู่มือของ Google](https://developers.google.com/apps-script/guides/triggers/installable))

API คืนการจองได้สูงสุด 100 รายการต่อการเรียก ถ้าเดือนไหนได้ครบ 100 แถวพอดี ให้แบ่งดึงเป็นสองครึ่งเดือน ใครที่แก้สคริปต์ได้ก็อ่านคีย์ได้ จึงควรแชร์ชีตอย่างระมัดระวัง และเพิกถอนคีย์ที่ `/developer/api-keys` หากรั่วไหล

### ให้ผู้ช่วย AI สร้างตารางให้

ถ้าคุณเชื่อมต่อ Claude หรือ ChatGPT กับ Hotelier Tools แล้ว (ดู [เชื่อมต่อ Claude กับ Little Hotelier](/blog/connect-claude-to-little-hotelier)) ถามเป็นภาษาพูดธรรมดาได้เลย

::prompt{label="Claude"}
ใช้ Hotelier Tools แสดงการจองทั้งหมดที่เช็คเอาท์ในเดือนกันยายน 2026 เป็นตาราง: รหัสการจอง ชื่อแขก อีเมล เช็คอิน เช็คเอาท์ จำนวนคืน ช่องทาง และยอดรวม จากนั้นให้ตารางเดียวกันในรูปแบบ CSV
::

ผู้ช่วยจะอ่านการจองของคุณผ่าน MCP server แล้วสร้างตารางให้ โปรดจำไว้ว่าสิ่งที่ผู้ช่วยอ่าน (ชื่อ อีเมล ยอดเงิน) จะกลายเป็นส่วนหนึ่งของแชตของคุณกับผู้ให้บริการ AI รายนั้น

::demo-cta{path="/methods"}
::

## สรุป

- **ด้วยมือ:** **Reservations → Search → Export** ได้ CSV ที่มีชื่อ อีเมล และที่อยู่ของแขก แต่ไม่มีเบอร์โทรศัพท์
- **เส้นตาย:** ข้อมูลแขกถูกปิดบังหลังเช็คเอาท์ 180 วัน จึงควรส่งออกทุกเดือน
- **ตัวอักษรเพี้ยน:** นำเข้าด้วย **Data → From Text/CSV** และ UTF-8 ใน Excel
- **อัตโนมัติ:** trigger ของ Google Sheets ร่วมกับ Hotelier Tools API หรือสั่งผู้ช่วย AI ของคุณ ดูเพิ่มที่[หน้าฟีเจอร์ API & MCP](/tools/bot/api-mcp)
