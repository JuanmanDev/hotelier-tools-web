---
title: "ดาวน์โหลดใบแจ้งหนี้ Little Hotelier ทั้งหมดในครั้งเดียว"
seoTitle: "ดาวน์โหลดใบแจ้งหนี้ Little Hotelier ทั้งหมดพร้อมกัน"
description: "Little Hotelier รวมใบแจ้งหนี้ที่มีอยู่แล้วเป็นไฟล์ ZIP ได้ ดูวิธีทำ วิธีสร้างใบที่ยังขาด และส่ง ZIP กับ CSV ให้นักบัญชีทุกไตรมาส"
date: 2026-10-03
category: invoicing
tags: [invoices, accounting, little hotelier, quarterly tax, zip]
keywords: [ดาวน์โหลดใบแจ้งหนี้ little hotelier, little hotelier invoice, little hotelier invoice report, ส่งออกใบแจ้งหนี้ little hotelier, ใบกำกับภาษี โรงแรม, ใบเสร็จ โรงแรม folio, little hotelier xero]
feature: invoicing
demoPath: /invoices
cover: /images/blog/demo/en/invoices-by-quarter.webp
coverAlt: "หน้า Invoices ใน Hotelier Tools แสดงใบแจ้งหนี้ทั้งหมด 66 ใบ ไตรมาส Q4 และ Q3 2026 แต่ละไตรมาสมีปุ่ม Preview CSV และ ZIP และเปิดตารางของเดือนกันยายน 2026 ที่มีเลขที่ใบแจ้งหนี้ ชื่อแขก เลขประจำตัวผู้เสียภาษี วันเช็คเอาท์ และยอดรวม"
featured: true
faq:
  - q: "Little Hotelier ดาวน์โหลดใบแจ้งหนี้ทั้งหมดเป็น PDF พร้อมกันได้ไหม"
    a: "ได้ สำหรับใบแจ้งหนี้ที่สร้างไว้แล้ว ไปที่ Front Desk > Reports > Invoices กรองช่วงวันที่ กด Download invoice PDFs แล้วกด Download zip โดย Little Hotelier จะให้ยืนยันตัวตนด้วย multi-factor authentication ก่อน"
  - q: "Little Hotelier ซิงก์ใบแจ้งหนี้ไปยัง Xero หรือ QuickBooks อัตโนมัติไหม"
    a: "ไม่ซิงก์อัตโนมัติ Accounting report จะส่งออกใบแจ้งหนี้ที่ทำเครื่องหมายเป็น final เป็นไฟล์ CSV สำหรับนำเข้า Xero และ QuickBooks แล้วคุณนำเข้าไฟล์นั้นเอง โดยมีเฉพาะใบที่ finalise แล้วเท่านั้น"
  - q: "Hotelier Tools จะเปลี่ยนเลขที่ใบแจ้งหนี้หรือรูปแบบใบแจ้งหนี้ของฉันไหม"
    a: "ไม่เปลี่ยน Hotelier Tools สั่งให้ Little Hotelier สร้างใบแจ้งหนี้ทีละใบ จึงเป็นเอกสารของ Little Hotelier เอง ใช้เลขที่ โลโก้ และรูปแบบตามที่คุณตั้งไว้ใน Customise invoices"
  - q: "ใบแจ้งหนี้ที่ยกเลิกแล้วจะเป็นอย่างไรในไฟล์ที่ส่งออก"
    a: "ใน Little Hotelier ใบแจ้งหนี้ final ที่ถูกยกเลิกจะย้ายไปอยู่ใน Older invoices พร้อมสถานะ Cancelled และข้อมูลของใบนั้นยังปรากฏในไฟล์ส่งออก ควรแจ้งนักบัญชีไว้เพื่อไม่ให้นับรายได้ซ้ำ"
  - q: "Hotelier Tools ราคาเท่าไร"
    a: "ฟรีสำหรับทุกโรงแรมจนกว่าจะเริ่มเรียกเก็บเงินวันที่ 10 มกราคม 2027 โรงแรมที่เริ่มใช้ก่อน 31 ธันวาคม 2026 จะชำระ 50 € ต่อโรงแรมต่อเดือนตลอดปี 2027 เริ่มใช้งานได้โดยไม่ต้องใช้บัตร"
---

ได้ Little Hotelier รวมใบแจ้งหนี้ทุกใบที่ **สร้างไว้แล้ว** เป็นไฟล์ ZIP เดียว โดยเปิด **Front Desk > Reports > Invoices** กรองไตรมาสที่ต้องการ แล้วกด **Download invoice PDFs** แต่ระบบจะไม่สร้างใบที่ยังไม่มีใครออก และไม่เตือนว่าใบไหนยังไม่ควรออก ส่วนนี้ Hotelier Tools ช่วยได้ โดยสร้างใบที่ขาดในรอบเดียว ไม่ยอมออกใบที่เสี่ยงผิดพลาด และส่งมอบทั้งไตรมาสเป็นไฟล์ ZIP รวม PDF พร้อมไฟล์สรุป CSV

## Little Hotelier ส่งออกใบแจ้งหนี้ทั้งหมดได้เองไหม

ได้ ณ เดือนตุลาคม 2026 ศูนย์ช่วยเหลือของ Little Hotelier อธิบายวิธีดึงใบแจ้งหนี้ออกมาไว้สามแบบ จะใช้แบบไหนขึ้นอยู่กับว่านักบัญชีของคุณต้องการอะไร

| วิธี | สิ่งที่ได้ | ข้อจำกัด |
|---|---|---|
| Invoice report | ZIP ของ PDF ใบแจ้งหนี้ และรายการ CSV | เฉพาะใบที่สร้างไว้แล้ว |
| Accounting report | CSV สำหรับนำเข้า Xero และ QuickBooks | เฉพาะใบที่ทำเครื่องหมาย final |
| ทีละการจอง | PDF หนึ่งใบ (Print หรือ Save as PDF) | ช้าเกินไปถ้าต้องทำทั้งไตรมาส |

### Invoice report (PDF ใน ZIP)

1. ไปที่ **My Apps > Front Desk > Reports** แล้วคลิก **Invoices**
2. เลือกช่วงวันที่ของไตรมาส จะกรองตาม **Invoice status** และ **Payment status** ด้วยก็ได้ แล้วคลิก **Apply**
3. คลิก **Download invoice PDFs** แล้วคลิก **Download zip**
4. ยืนยันตัวตนแบบหลายขั้นตอน (multi-factor authentication) แล้วไฟล์ ZIP จะดาวน์โหลดลงเครื่อง

ปุ่ม **Export** ในรายงานเดียวกันจะให้ไฟล์ CSV แทน แหล่งข้อมูล: [How to run an Invoice report](https://helpcentre.littlehotelier.com/en/articles/14390555-how-to-run-an-invoice-report)

### Accounting report (CSV สำหรับ Xero หรือ QuickBooks)

ไปที่ **My Apps > Front Desk > Reports > Accounting** เลือก **Yesterday**, **Last 7 days** หรือกำหนดวันที่เอง แล้วคลิก **Export** คุณจะได้ไฟล์ CSV (หรือ ZIP ถ้าข้อมูลมาก) ที่มีข้อมูลผู้ติดต่อ ที่อยู่ เลขที่ใบแจ้งหนี้ วันที่ ยอดเงิน รหัสบัญชี และรหัสภาษี

ข้อจำกัดมีสองข้อ คือจะส่งออกเฉพาะใบที่ **ทำเครื่องหมายเป็น final** และไฟล์นี้ต้องนำเข้าเอง ไม่ใช่การซิงก์แบบเรียลไทม์ ส่วนรหัสบัญชีตั้งครั้งเดียวที่ **Front Desk > Setup > Accounting Integration** แหล่งข้อมูล: [Accounting: export invoices marked as final](https://helpcentre.littlehotelier.com/en/articles/8672956-accounting-export-invoices-marked-as-final) และ [Accounting Integration: setup](https://helpcentre.littlehotelier.com/en/articles/8925025-accounting-integration-setup)

### ทีละใบ

เปิดการจอง คลิก **Print** เลือก **Invoice** แล้วเลือก **Save as PDF** ในหน้าต่างพิมพ์ ([ศูนย์ช่วยเหลือ](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice)) ถ้าทำบ่อย สคริปต์ฟรี [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) จะเพิ่มลิงก์พิมพ์ใบแจ้งหนี้ไว้ในหน้าการจองโดยตรง

## สิ่งที่การส่งออกในตัวของ Little Hotelier ทำไม่ได้

การดาวน์โหลดเป็นส่วนที่ง่าย ปัญหาประจำไตรมาสมักเกิดตั้งแต่ก่อนหน้านั้น

- **ใบที่ขาดหาย** ZIP มีเฉพาะใบที่มีคนสร้างไว้ ศูนย์ช่วยเหลืออธิบายวิธีสร้างทีละการจอง (แท็บ **Invoices** > **Generate invoice**) การเข้าพักที่ไม่มีใครกดสร้างจึงไม่มีใบเลย
- **ใบซ้ำ** การกดสร้างแต่ละครั้งจะได้เอกสารใหม่ใน Little Hotelier ถ้าสร้างซ้ำ การเข้าพักครั้งเดียวอาจมีสองใบ ทั้งที่นักบัญชีคาดว่าจะมีใบเดียว
- **ใบที่ออกเร็วเกินไป** ใบที่ออกก่อนแขกเช็คเอาท์จะไม่ตรงกับยอดจริงทันทีที่มีค่าใช้จ่ายเพิ่มหรือมีการชำระเงิน การแก้ไขต้องออกใบแจ้งหนี้ฉบับแก้ไข ใบลดหนี้ หรือในสเปนต้องออกใบแก้ไข (rectificativa)
- **การ finalise** รายงาน Accounting ต้องให้ทุกใบทำเครื่องหมายเป็น final ก่อน และศูนย์ช่วยเหลืออธิบายวิธีทำทีละการจอง

## วิธีดาวน์โหลดทั้งไตรมาสเป็น ZIP และ CSV (วิธีที่เร็วกว่า)

Hotelier Tools เป็นแดชบอร์ดที่เชื่อมต่อกับ Little Hotelier ด้วยบัญชีของคุณเอง หน้า **Invoice Download** (ดาวน์โหลดใบแจ้งหนี้) จะสร้างใบแจ้งหนี้ของช่วงวันที่ที่เลือกในรอบเดียว และจัดผลลัพธ์ให้เป็นรายไตรมาส

1. สมัครที่ [dashboard.hotelier.tools](https://dashboard.hotelier.tools/register) แล้วเชื่อมต่อ Little Hotelier ที่หน้า **Credentials** ระบบเก็บข้อมูลล็อกอินของคุณแบบเข้ารหัส
2. ในเมนู เปิด **Invoice Download** (`/invoices`)
3. กด **Generate invoices** แล้วเลือกวันที่ เช่น 1 กรกฎาคมถึง 30 กันยายน
4. แอปจะอ่านการจองช่วงนั้นจาก Little Hotelier และสร้างใบแจ้งหนี้ให้การเข้าพักที่เข้าเกณฑ์ รายการที่ออกใบไม่ได้จะไปอยู่ที่ **Errors** (ข้อผิดพลาด) พร้อมเหตุผล ไม่มีรายการไหนถูกข้ามไปโดยไม่แจ้ง
5. ใบแจ้งหนี้จะแสดงเป็นกลุ่มตามไตรมาสและเดือน ที่แถวของไตรมาส กด **ZIP** เพื่อดาวน์โหลด PDF ทั้งหมด หรือกด **Preview CSV** เพื่อดูสรุปก่อน

::screenshot{src="/images/blog/demo/en/invoices-quarter-zip-downloaded.webp" alt="หน้า Invoices จัดกลุ่มตามไตรมาส มีปุ่ม Preview CSV และ ZIP ที่ Q4 และ Q3 2026 เปิดตารางใบแจ้งหนี้เดือนกันยายน 2026 และมีข้อความ Pack downloaded ยืนยันว่าดาวน์โหลดชุดใบแจ้งหนี้ Q3 2026 แล้ว" caption="แต่ละไตรมาสมีไฟล์ ZIP รวม PDF และสรุป CSV ของตัวเอง คลิก ZIP ครั้งเดียวได้ครบทั้งไตรมาส" path="/invoices"}
::

ใบแจ้งหนี้เหล่านี้เป็นเอกสารของ Little Hotelier เอง เพราะ Hotelier Tools สั่งให้ Little Hotelier สร้างทีละใบ เลขที่ โลโก้ และรูปแบบที่ตั้งไว้ใน **Customise invoices** จึงเหมือนเดิมทุกอย่าง

::callout{type="info" title="เครื่องมืออิสระ"}
Hotelier Tools ไม่ได้มีส่วนเกี่ยวข้องกับ SiteMinder หรือ Little Hotelier และไม่ได้รับการรับรองจากทั้งสองบริษัท โดยเชื่อมต่อผ่านบัญชี Little Hotelier ของโรงแรมคุณเอง
::

## ตรวจก่อนออกใบแจ้งหนี้: ไม่มีเลขประจำตัวผู้เสียภาษี ออกก่อนเวลา และใบซ้ำ

ก่อนสั่งให้ Little Hotelier ออกใบแจ้งหนี้ Hotelier Tools จะตรวจเบื้องต้น และจะไม่ออกใบในกรณีต่อไปนี้

- แขก **ยังไม่ได้เช็คเอาท์** เพราะยอดยังไม่ใช่ยอดสุดท้าย
- เป็น **ใบแจ้งหนี้ในนามบริษัทที่ไม่มีเลขประจำตัวผู้เสียภาษี** หรือไม่มีที่อยู่ตามทะเบียนภาษี
- **เลขประจำตัวผู้เสียภาษีผิดรูปแบบ**
- การเข้าพักนั้น **ออกใบไปแล้ว** เพื่อป้องกันใบซ้ำ

แขกบุคคลธรรมดาไม่ต้องมีข้อมูลภาษี สำหรับแขกกลุ่มนี้ การไม่มีเอกสารยืนยันตัวตนจึงเป็นแค่คำเตือน

นี่คือความต่างระหว่าง ZIP ที่นักบัญชีเชื่อถือได้ กับ ZIP ที่ถูกส่งกลับมาพร้อมคำถามเต็มไปหมด

## การจองที่ออกใบแจ้งหนี้ไม่ได้จะเป็นอย่างไร

การจองเหล่านั้นจะไปอยู่ที่หน้า **Errors** (`/invoices/errors`) หนึ่งแถวต่อหนึ่งการจอง พร้อมเหตุผล

1. เลือกช่วงวันที่ด้านบน
2. กรองตามประเภทปัญหา: **Missing DNI**, **Pending payment**, **Not checked out**, **Download failed** และอื่นๆ
3. แก้การจองใน Little Hotelier: เพิ่มเลขประจำตัวผู้เสียภาษี บันทึกการชำระเงิน หรือเช็คเอาท์แขก
4. กลับมาที่ Errors แล้วสั่งตรวจอีกครั้ง หรือทำเครื่องหมายว่าแก้แล้ว กด **Copy CSV** เพื่อคัดลอกรายการไปส่งต่อให้เพื่อนร่วมงาน

::screenshot{src="/images/blog/demo/en/invoice-failures.webp" alt="หน้า Errors and issues ของ 1 กรกฎาคมถึง 30 กันยายน 2026 มีปุ่ม Copy CSV ตัวกรองประเภทปัญหา เช่น Missing DNI, Pending payment, Not checked out และ Download failed และตารางการจองที่แสดงเลขที่ใบแจ้งหนี้ วันเข้าพัก ยอดรวม ป้ายปัญหา เหตุผล (เป็นภาษาสเปน) และปุ่มดำเนินการ" caption="ทุกการจองที่ออกใบไม่ได้ในรอบนั้น พร้อมเหตุผลและปุ่มลองใหม่" path="/invoices/errors"}
::

ถ้าการเข้าพักติดอยู่เพราะมียอดค้างจากการปัดเศษเพียงหนึ่งหรือสองเซนต์ ตัวเลือก cent-fix ใน **Settings > Invoices** ช่วยปิดยอดเล็กๆ เหล่านั้นได้

::demo-cta{path="/invoices"}
::

## ใบแจ้งหนี้จะเป็นภาษาอะไร

เลือกได้ที่ **Settings > Invoices** (`/settings/invoices`)

- **From the guest's country** (ตามประเทศของแขก): ใบแต่ละใบใช้ภาษาของประเทศในที่อยู่ของแขก ถ้าไม่มีประเทศหรือจับคู่ภาษาไม่ได้ จะใช้ภาษาสำรองที่คุณตั้งไว้
- **Always the same language** (ใช้ภาษาเดียวเสมอ): ทุกใบใช้ภาษาเดียวกัน ไม่ว่าแขกจะเป็นใคร

เลือก **Fallback language** (ภาษาสำรอง) แล้วกด **Save changes**

## ควรส่งอะไรให้นักบัญชีในแต่ละไตรมาส

ขั้นตอนสั้นๆ ที่ช่วยลดอีเมลตามถามจากนักบัญชีได้เกือบทั้งหมด

1. **สร้างใบของทั้งไตรมาส** หลังจบไตรมาสสักสองสามวัน เพื่อให้การเข้าพักที่เช็คเอาท์ช้าปิดยอดเรียบร้อย
2. **เคลียร์ Errors** จนเหลือเฉพาะการเข้าพักที่ไม่ต้องออกใบจริงๆ
3. **ดาวน์โหลด ZIP และ CSV** แล้วส่งทั้งสองไฟล์
4. **ไล่ดูเลขที่ใบแจ้งหนี้** ว่ามีเลขข้ามหรือเลขซ้ำไหมก่อนส่ง
5. **แจ้งใบที่ยกเลิก** ใน Little Hotelier ใบ final ที่ถูกยกเลิกจะย้ายไปอยู่ที่ **Older invoices** พร้อมสถานะ Cancelled และข้อมูลยังปรากฏในไฟล์ส่งออก ([ศูนย์ช่วยเหลือ](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)) นักบัญชีต้องรู้เพื่อไม่ให้นับรายได้ซ้ำ

ในสเปน ข้อมูลนี้ใช้ยื่นแบบภาษีมูลค่าเพิ่ม ([modelo 303](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml)) ถ้าคุณใช้ VeriFactu ตัว Little Hotelier จะ finalise ใบแจ้งหนี้ด้วยการส่งไปยัง AEAT เอง ([ศูนย์ช่วยเหลือ](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu)) Hotelier Tools ไม่มีฟีเจอร์ VeriFactu ของตัวเอง จึงควรทำขั้นตอนนั้นใน Little Hotelier ส่วนในประเทศที่บังคับใช้ใบแจ้งหนี้อิเล็กทรอนิกส์ (e-invoicing) ให้ถือว่า ZIP เป็นสำเนาเก็บไว้เป็นหลักฐาน และตรวจสอบกฎกับนักบัญชีของคุณ

นักพัฒนายังดึง PDF ใบแจ้งหนี้ได้ทีละใบผ่าน [Hotelier Tools REST API](/blog/little-hotelier-api) ได้ และถ้านักบัญชีอยากได้ข้อมูลการจองด้วย ดู [วิธีส่งออกการจองเป็น Excel](/blog/export-little-hotelier-reservations-excel)

อ่านเพิ่มเติม: [คู่มือ Little Hotelier](/blog/little-hotelier-tips), [การเชื่อมต่อของ Little Hotelier](/blog/little-hotelier-integrations)

## สรุป

- **Invoice report** ของ Little Hotelier รวม PDF ของใบที่มีอยู่แล้วเป็น ZIP ส่วน **Accounting report** ส่งออกใบ final เป็น CSV สำหรับ Xero หรือ QuickBooks
- ทั้งสองอย่างไม่สร้างใบที่ขาด และไม่กันใบซ้ำหรือใบที่ออกเร็วเกินไป
- Hotelier Tools สร้างใบของทั้งช่วงวันที่ในรอบเดียว ไม่ออกใบที่เสี่ยง แสดงทุกรายการที่ออกใบไม่สำเร็จพร้อมเหตุผล และให้ ZIP กับ CSV แยกรายไตรมาส
- ถ้าไม่อยากให้ใบค้างสะสมตั้งแต่ต้น ให้[ส่งใบแจ้งหนี้อัตโนมัติตอนเช็คเอาท์](/blog/send-invoice-to-guest-at-checkout) ดูทุกอย่างที่ฟีเจอร์ใบแจ้งหนี้ทำได้ที่ [หน้า Invoicing](/tools/bot/invoicing)
