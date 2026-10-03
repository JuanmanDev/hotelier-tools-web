---
title: "ดาวน์โหลดใบแจ้งหนี้ Little Hotelier ทั้งหมดในครั้งเดียว"
seoTitle: "ดาวน์โหลดใบแจ้งหนี้ Little Hotelier ทั้งหมดพร้อมกัน"
description: "Little Hotelier รวมใบแจ้งหนี้ที่มีอยู่แล้วเป็น ZIP ได้ ดูวิธีทำ พร้อมวิธีสร้างใบที่ขาดและส่ง ZIP กับ CSV รายไตรมาสให้นักบัญชี"
date: 2026-10-03
category: invoicing
tags: [invoices, accounting, little hotelier, quarterly tax, zip]
keywords: [ดาวน์โหลดใบแจ้งหนี้ little hotelier, little hotelier invoice, ใบกำกับภาษี โรงแรม, ใบเสร็จ โรงแรม folio, little hotelier xero, ใบแจ้งหนี้ โรงแรม รายไตรมาส]
feature: invoicing
demoPath: /invoices
cover: /images/blog/demo/en/invoices-by-quarter.webp
coverAlt: "หน้า Invoices ใน Hotelier Tools แสดงใบแจ้งหนี้ทั้งหมด 66 ใบ ไตรมาส Q4 และ Q3 2026 มีปุ่ม Preview CSV และ ZIP และเปิดตารางเดือนกันยายน 2026 ที่มีเลขที่ใบแจ้งหนี้ ชื่อแขก เลขประจำตัวผู้เสียภาษี วันเช็กเอาต์ และยอดรวม"
featured: true
faq:
  - q: "Little Hotelier ดาวน์โหลดใบแจ้งหนี้ทั้งหมดเป็น PDF พร้อมกันได้ไหม"
    a: "ได้ สำหรับใบแจ้งหนี้ที่สร้างไว้แล้ว ไปที่ Front Desk > Reports > Invoices กรองช่วงวันที่ กด Download invoice PDFs แล้วกด Download zip โดย Little Hotelier จะให้ยืนยันตัวตนด้วย multi-factor authentication ก่อน"
  - q: "Little Hotelier ซิงก์ใบแจ้งหนี้ไปยัง Xero หรือ QuickBooks อัตโนมัติไหม"
    a: "ไม่ Accounting report จะส่งออกใบแจ้งหนี้ที่ทำเครื่องหมายว่า final เป็นไฟล์ CSV สำหรับนำเข้า Xero และ QuickBooks และคุณต้องนำเข้าไฟล์นั้นเอง เฉพาะใบที่ finalise แล้วเท่านั้น"
  - q: "Hotelier Tools เปลี่ยนเลขที่ใบแจ้งหนี้หรือแม่แบบของฉันไหม"
    a: "ไม่ Hotelier Tools ขอให้ Little Hotelier สร้างใบแจ้งหนี้แต่ละใบ จึงเป็นเอกสารของ Little Hotelier เอง ใช้เลขที่ โลโก้ และหน้าตาจาก Customise invoices ของคุณ"
  - q: "ใบแจ้งหนี้ที่ยกเลิกแล้วจะเป็นอย่างไรในไฟล์ที่ส่งออก"
    a: "ใน Little Hotelier ใบแจ้งหนี้ final ที่ยกเลิกจะย้ายไปอยู่ใน Older invoices พร้อมสถานะ Cancelled และข้อมูลยังปรากฏในไฟล์ส่งออก ควรแจ้งนักบัญชีเพื่อไม่ให้นับรายได้ซ้ำ"
  - q: "Hotelier Tools ราคาเท่าไร"
    a: "ฟรีสำหรับทุกโรงแรมจนกว่าจะเริ่มเรียกเก็บเงินวันที่ 10 มกราคม 2027 โรงแรมที่เริ่มใช้ก่อน 31 ธันวาคม 2026 จะชำระ 50 € ต่อโรงแรมต่อเดือนตลอดปี 2027 ไม่ต้องใช้บัตรเพื่อเริ่มต้น"
---

ได้ Little Hotelier รวมใบแจ้งหนี้ทุกใบที่ **สร้างไว้แล้ว** เป็นไฟล์ ZIP เดียวได้ โดยเปิด **Front Desk > Reports > Invoices** กรองไตรมาสที่ต้องการ แล้วกด **Download invoice PDFs** สิ่งที่ระบบไม่ทำคือสร้างใบที่ไม่มีใครออกไว้ หรือเตือนว่าใบไหนยังไม่ควรออก ส่วน Hotelier Tools จะสร้างใบที่ขาดให้ในรอบเดียว ปฏิเสธใบที่เสี่ยงผิดพลาด และให้ไตรมาสของคุณเป็น ZIP ของ PDF พร้อมไฟล์สรุป CSV

## Little Hotelier ส่งออกใบแจ้งหนี้ทั้งหมดได้เองไหม

ได้ ณ ตุลาคม 2026 ศูนย์ช่วยเหลือของ Little Hotelier อธิบายวิธีดึงใบแจ้งหนี้ไว้สามแบบ ว่าจะใช้แบบไหนขึ้นกับสิ่งที่นักบัญชีของคุณขอ

| วิธี | สิ่งที่ได้ | ข้อจำกัด |
|---|---|---|
| Invoice report | ZIP ของ PDF ใบแจ้งหนี้ และรายการ CSV | เฉพาะใบที่สร้างไว้แล้ว |
| Accounting report | CSV สำหรับนำเข้า Xero และ QuickBooks | เฉพาะใบที่ทำเครื่องหมาย final |
| ทีละการจอง | PDF หนึ่งใบ (Print หรือ Save as PDF) | ช้าเกินไปถ้าต้องทำทั้งไตรมาส |

### Invoice report (PDF ใน ZIP)

1. ไปที่ **My Apps > Front Desk > Reports** แล้วคลิก **Invoices**
2. เลือกช่วงวันที่ของไตรมาส จะกรองตาม **Invoice status** และ **Payment status** ด้วยก็ได้ แล้วคลิก **Apply**
3. คลิก **Download invoice PDFs** แล้วคลิก **Download zip**
4. ยืนยัน multi-factor authentication แล้ว ZIP จะถูกดาวน์โหลด

ปุ่ม **Export** ในรายงานเดียวกันจะให้ไฟล์ CSV แทน แหล่งข้อมูล: [How to run an Invoice report](https://helpcentre.littlehotelier.com/en/articles/14390555-how-to-run-an-invoice-report)

### Accounting report (CSV สำหรับ Xero หรือ QuickBooks)

ไปที่ **My Apps > Front Desk > Reports > Accounting** เลือก **Yesterday**, **Last 7 days** หรือกำหนดวันที่เอง แล้วคลิก **Export** คุณจะได้ไฟล์ CSV (หรือ ZIP ถ้าข้อมูลมาก) ที่มีข้อมูลผู้ติดต่อ ที่อยู่ เลขที่ใบแจ้งหนี้ วันที่ ยอดเงิน บัญชี และรหัสภาษี

ข้อจำกัดมีสองข้อ คือจะส่งออกเฉพาะใบที่ **ทำเครื่องหมายเป็น final** และไฟล์นี้ใช้นำเข้าด้วยมือ ไม่ใช่การซิงก์สด คุณตั้งรหัสบัญชีครั้งเดียวที่ **Front Desk > Setup > Accounting Integration** แหล่งข้อมูล: [Accounting: export invoices marked as final](https://helpcentre.littlehotelier.com/en/articles/8672956-accounting-export-invoices-marked-as-final) และ [Accounting Integration: setup](https://helpcentre.littlehotelier.com/en/articles/8925025-accounting-integration-setup)

### ทีละใบ

เปิดการจอง คลิก **Print** เลือก **Invoice** แล้วเลือก **Save as PDF** ในหน้าต่างพิมพ์ ([ศูนย์ช่วยเหลือ](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice)) ถ้าทำบ่อย สคริปต์ฟรี [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) จะเพิ่มลิงก์พิมพ์ตรงๆ ในหน้าการจอง

## สิ่งที่การส่งออกแบบเดิมทำไม่ได้

การดาวน์โหลดเป็นส่วนที่ง่าย ปัญหาของไตรมาสมักเกิดก่อนหน้านั้น

- **ใบที่ขาดหาย** ZIP มีเฉพาะใบที่มีคนสร้างไว้ ศูนย์ช่วยเหลือบอกให้สร้างทีละการจอง (แท็บ **Invoices** > **Generate invoice**) ดังนั้นการเข้าพักที่ไม่มีใครคลิกก็จะไม่มีใบ
- **ใบซ้ำ** การสั่งสร้างแต่ละครั้งจะได้เอกสารใหม่ใน Little Hotelier การสร้างซ้ำอาจทำให้การเข้าพักหนึ่งครั้งมีสองใบ ทั้งที่นักบัญชีคาดว่าจะมีใบเดียว
- **ใบที่ออกเร็วเกินไป** ใบที่ออกก่อนแขกเช็กเอาต์จะใช้ไม่ได้ทันทีที่มีรายการเพิ่มหรือการชำระเงินใหม่ และการแก้ต้องออกใบแก้ไข ใบลดหนี้ หรือในสเปนคือการแก้ไขใบกำกับ (rectification)
- **การ finalise** การส่งออกบัญชีต้องให้ทำเครื่องหมาย final ที่แต่ละใบ และศูนย์ช่วยเหลืออธิบายว่าทำทีละการจอง

## วิธีดาวน์โหลดทั้งไตรมาสเป็น ZIP และ CSV (วิธีที่เร็วกว่า)

Hotelier Tools เป็นแดชบอร์ดที่เชื่อมต่อกับ Little Hotelier ด้วยบัญชีของคุณเอง หน้า **Invoice Download** จะสร้างใบแจ้งหนี้ของช่วงวันที่ที่เลือกในรอบเดียว และแยกผลเป็นรายไตรมาส

1. สมัครที่ [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) แล้วเชื่อมต่อ Little Hotelier ที่หน้า **Credentials** ข้อมูลล็อกอินของคุณถูกเก็บแบบเข้ารหัส
2. ในเมนู เปิด **Invoice Download** (`/invoices`)
3. กด **Generate invoices** แล้วเลือกวันที่ เช่น 1 กรกฎาคมถึง 30 กันยายน
4. แอปจะอ่านการจองช่วงนั้นจาก Little Hotelier และสร้างใบแจ้งหนี้ให้การเข้าพักที่เข้าเกณฑ์ รายการที่ออกใบไม่ได้จะไปอยู่ที่ **Errors** พร้อมเหตุผล ไม่มีรายการไหนถูกข้ามเงียบๆ
5. ใบแจ้งหนี้จะแสดงจัดกลุ่มตามไตรมาสและเดือน ที่ไตรมาสให้กด **ZIP** เพื่อดาวน์โหลด PDF ทั้งหมด หรือ **Preview CSV** เพื่อดูสรุปก่อน

::screenshot{src="/images/blog/demo/en/invoices-quarter-zip-downloaded.webp" alt="หน้า Invoices จัดกลุ่มตามไตรมาส มีปุ่ม Preview CSV และ ZIP ที่ Q4 และ Q3 2026 เปิดตารางใบแจ้งหนี้เดือนกันยายน 2026 และมีข้อความ Pack downloaded ยืนยันว่าดาวน์โหลดชุดใบแจ้งหนี้ Q3 2026 แล้ว" caption="แต่ละไตรมาสมี ZIP ของ PDF และสรุป CSV ของตัวเอง คลิก ZIP ครั้งเดียวได้ทั้งไตรมาส" path="/invoices"}
::

ใบแจ้งหนี้เป็นเอกสารของ Little Hotelier เอง Hotelier Tools ขอให้ Little Hotelier สร้างทีละใบ เลขที่ โลโก้ และหน้าตาจาก **Customise invoices** จึงเหมือนเดิมทุกอย่าง

::callout{type="info" title="เครื่องมืออิสระ"}
Hotelier Tools ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder หรือ Little Hotelier และเชื่อมต่อด้วยบัญชี Little Hotelier ของโรงแรมคุณเอง
::

## ตรวจก่อนออกใบ: ไม่มีเลขผู้เสียภาษี ออกเร็วเกินไป และใบซ้ำ

ก่อนขอใบแจ้งหนี้จาก Little Hotelier Hotelier Tools จะตรวจเบื้องต้น และปฏิเสธการออกใบเมื่อ

- แขก **ยังไม่ได้เช็กเอาต์** เพราะตัวเลขยังไม่สิ้นสุด
- เป็น **ใบแจ้งหนี้นิติบุคคลที่ไม่มีเลขผู้เสียภาษี** หรือที่อยู่ตามกฎหมาย
- **เลขผู้เสียภาษีผิดรูปแบบ**
- การเข้าพักนั้น **ออกใบแล้ว** เพื่อป้องกันใบซ้ำ

แขกบุคคลธรรมดาไม่ต้องมีข้อมูลภาษี การขาดเอกสารยืนยันตัวตนจึงเป็นแค่คำเตือน

นี่คือความต่างระหว่าง ZIP ที่นักบัญชีไว้ใจได้ กับ ZIP ที่ถูกส่งกลับมาพร้อมคำถาม

## การจองที่ออกใบแจ้งหนี้ไม่ได้จะเป็นอย่างไร

จะไปอยู่ที่ **Errors** (`/invoices/errors`) หนึ่งแถวต่อหนึ่งการจอง พร้อมเหตุผล

1. เลือกช่วงวันที่ด้านบน
2. กรองตามประเภทปัญหา: **Missing DNI**, **Pending payment**, **Not checked out**, **Download failed** และอื่นๆ
3. แก้การจองใน Little Hotelier: เพิ่มเลขผู้เสียภาษี บันทึกการชำระเงิน หรือเช็กเอาต์แขก
4. กลับมาที่ Errors แล้วตรวจอีกครั้งหรือทำเครื่องหมายว่าแก้แล้ว **Copy CSV** จะให้รายการไปส่งต่อเพื่อนร่วมงาน

::screenshot{src="/images/blog/demo/en/invoice-failures.webp" alt="หน้า Errors and issues ของ 1 กรกฎาคมถึง 30 กันยายน 2026 มีปุ่ม Copy CSV ตัวกรองประเภทปัญหา เช่น Missing DNI, Pending payment, Not checked out และ Download failed และตารางการจองที่แสดงเลขที่ใบแจ้งหนี้ วันเข้าพัก ยอดรวม ป้ายปัญหา เหตุผล (เป็นภาษาสเปน) และปุ่มดำเนินการ" caption="ทุกการจองที่รอบนั้นออกใบไม่ได้ พร้อมเหตุผลและวิธีลองใหม่" path="/invoices/errors"}
::

ถ้าการเข้าพักค้างเพราะยอดเศษปัดเพียงหนึ่งหรือสองเซนต์ ตัวเลือก cent-fix ใน **Settings > Invoices** ช่วยปิดยอดเล็กน้อยเหล่านั้นได้

::demo-cta{path="/invoices"}
::

## ใบแจ้งหนี้จะเป็นภาษาอะไร

เลือกได้ที่ **Settings > Invoices** (`/settings/invoices`)

- **ตามประเทศของแขก**: ใบแต่ละใบใช้ภาษาของประเทศในที่อยู่แขก ถ้าไม่มีประเทศหรือไม่ตรงกับภาษาที่รองรับ จะใช้ภาษาสำรองของคุณ
- **ใช้ภาษาเดียวเสมอ**: ทุกใบใช้ภาษาเดียว ไม่ว่าแขกจะเป็นใคร

เลือก **Fallback language** แล้วกด **Save changes**

## ควรส่งอะไรให้นักบัญชีในแต่ละไตรมาส

ขั้นตอนสั้นๆ ที่ช่วยลดอีเมลถามกลับ

1. **รันไตรมาส** หลังจบไตรมาสไม่กี่วัน เพื่อให้เช็กเอาต์ที่ล่าช้าปิดเรียบร้อย
2. **เคลียร์ Errors** จนเหลือเฉพาะการเข้าพักที่ไม่ต้องออกใบจริงๆ
3. **ดาวน์โหลด ZIP และ CSV** แล้วส่งทั้งสองไฟล์
4. **ไล่ดูเลขที่ใบแจ้งหนี้** ว่ามีช่องว่างหรือซ้ำก่อนส่ง
5. **แจ้งใบที่ยกเลิก** ใน Little Hotelier การยกเลิกใบ final จะย้ายไปที่ **Older invoices** พร้อมสถานะ Cancelled และข้อมูลยังปรากฏในไฟล์ส่งออก ([ศูนย์ช่วยเหลือ](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)) นักบัญชีต้องรู้เพื่อไม่ให้นับรายได้ซ้ำ

ในสเปน ข้อมูลนี้ใช้ทำแบบแสดงภาษีมูลค่าเพิ่ม ([modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml)) ถ้าใช้ VeriFactu Little Hotelier จะ finalise ใบโดยส่งไปยัง AEAT เอง ([ศูนย์ช่วยเหลือ](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)) Hotelier Tools ไม่มีฟีเจอร์ VeriFactu ของตัวเอง จึงควรทำขั้นตอนนั้นใน Little Hotelier ส่วนในประเทศที่บังคับใช้ e-invoicing ให้ถือว่า ZIP เป็นสำเนาเก็บไว้เป็นหลักฐาน และตรวจกฎกับนักบัญชีของคุณ

นักพัฒนายังดึง PDF ใบแจ้งหนี้ทีละใบผ่าน [Hotelier Tools REST API](/blog/little-hotelier-api) ได้ และถ้านักบัญชีอยากได้ข้อมูลการจองด้วย ดู [วิธีส่งออกการจองเป็น Excel](/blog/export-little-hotelier-reservations-excel)

## สรุป

- **Invoice report** ของ Little Hotelier รวม PDF ของใบที่มีอยู่แล้วเป็น ZIP ส่วน **Accounting report** ส่งออกใบ final เป็น CSV สำหรับ Xero หรือ QuickBooks
- ทั้งสองอย่างไม่สร้างใบที่ขาด และไม่กันใบซ้ำหรือใบที่ออกเร็วเกินไป
- Hotelier Tools สร้างใบทั้งช่วงวันที่ในรอบเดียว ปฏิเสธใบที่เสี่ยง แสดงทุกความล้มเหลวพร้อมเหตุผล และให้ ZIP กับ CSV รายไตรมาส
- ถ้าอยากแก้ที่ต้นเหตุ ให้ [ส่งใบแจ้งหนี้อัตโนมัติตอนเช็กเอาต์](/blog/send-invoice-to-guest-at-checkout) ดูทุกอย่างที่ฟีเจอร์ใบแจ้งหนี้ทำได้ที่ [หน้า Invoicing](/tools/bot/invoicing)
