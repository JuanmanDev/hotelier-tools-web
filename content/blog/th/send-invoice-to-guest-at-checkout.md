---
title: "ส่งใบกำกับภาษี/ใบเสร็จให้แขกตอนเช็คเอาต์"
seoTitle: "ส่งใบกำกับภาษี/ใบเสร็จให้แขกตอนเช็คเอาต์"
description: "Booking.com ไม่ออกใบแจ้งหนี้ให้แขก ที่พักต้องออกเอง ส่งจาก Little Hotelier ด้วยมือ หรือให้ระบบส่งอีเมลให้อัตโนมัติเมื่อแขกเช็คเอาต์"
date: 2026-10-03
category: invoicing
tags: [invoices, checkout, booking.com, little hotelier, automation]
keywords: [ใบเสร็จ โรงแรม, ส่งใบกำกับภาษีให้ลูกค้า, ใบกำกับภาษี โรงแรม, ใบแจ้งหนี้ booking com, ใบเสร็จ โรงแรม folio, send invoice to guest little hotelier, hotel invoice at checkout]
feature: invoicing
demoPath: /invoice-on-leave
cover: /images/blog/demo/en/invoice-at-checkout.webp
coverAlt: "หน้า Invoice on leave ใน Hotelier Tools: งาน Automatic invoicing at check-out ที่รันทุกวันเวลา 12:00 ช่วงวันที่พร้อม Search reservations และตารางการจองที่มีปุ่ม Auto-invoice ของแต่ละการเข้าพัก"
faq:
  - q: "Booking.com ส่งใบแจ้งหนี้ให้แขกหรือไม่?"
    a: "ไม่ Booking.com ระบุว่าการจองเป็นข้อตกลงระหว่างคุณกับแขก ที่พักจึงต้องเป็นผู้ออกใบแจ้งหนี้ แม้ Booking.com จะเป็นผู้เก็บเงินก็ตาม"
  - q: "Little Hotelier ส่งใบแจ้งหนี้ทางอีเมลอัตโนมัติตอนเช็คเอาต์ได้ไหม?"
    a: "ไม่ได้ในตัวเอง อีเมลอัตโนมัติถึงแขกมีเพียงยืนยันการจอง ยกเลิก เตือนก่อนเข้าพัก และขอบคุณหลังออก คุณส่งใบแจ้งหนี้ทางอีเมลจากหน้าการจอง หรือใช้เครื่องมืออย่าง Invoice on Leave ของ Hotelier Tools ให้ทำหลังเช็คเอาต์"
  - q: "ทำไมต้องรอเช็คเอาต์ค่อยออกใบแจ้งหนี้?"
    a: "เพราะตัวเลขจะเป็นยอดสุดท้ายตอนนั้นเท่านั้น ของเสริม การชำระเงิน และการเปลี่ยนวันที่มักเกิดขึ้นระหว่างพัก และใบแจ้งหนี้ที่ออกเร็วเกินไปต้องแก้ด้วยใบลดหนี้หรือออกใบใหม่"
  - q: "แขกจะเห็นชื่อ Hotelier Tools ในอีเมลไหม?"
    a: "ไม่ Hotelier Tools ขอให้ Little Hotelier เป็นผู้ส่งใบแจ้งหนี้ จึงออกจากเทมเพลตอีเมลและผู้ส่งของ Little Hotelier ของคุณเอง เหมือนกับที่คุณกด Email > Invoice เอง"
  - q: "ถ้าการจองไม่มีอีเมลของแขกล่ะ?"
    a: "Little Hotelier ส่งใบแจ้งหนี้ไปยังอีเมลผู้ติดต่อหลักของการจอง ถ้าไม่มีก็ไม่มีที่ให้ส่ง Invoice on Leave จะรายงานการเข้าพักที่ผ่านไปแล้วซึ่งไม่มีอีเมลแขก แทนการลองส่งซ้ำทุกวัน คุณจึงพิมพ์ใบแจ้งหนี้หรือขอที่อยู่อีเมลจากแขกได้"
---

Booking.com ไม่เคยออกใบแจ้งหนี้ให้แขกของคุณ ที่พักเป็นผู้ออก แม้ Booking.com จะเก็บเงินแทนก็ตาม ใน Little Hotelier คุณส่งจากหน้าการจองด้วย **Invoices > Generate invoice** แล้ว **Email > Invoice** หากต้องการให้เป็นอัตโนมัติ ให้ทำเครื่องหมายการเข้าพักใน **Invoice on Leave** ของ Hotelier Tools: เมื่อแขกเช็คเอาต์ งานรายวันจะให้ Little Hotelier สร้างใบแจ้งหนี้และส่งอีเมลให้แขก

หมายเหตุเรื่องคำศัพท์: Little Hotelier เรียกเอกสารนี้ว่า invoice (ใบแจ้งหนี้) ซึ่งในทางปฏิบัติของโรงแรมไทยคือเอกสารที่แขกขอเป็น "ใบเสร็จ" หรือ "ใบกำกับภาษี" หากแขกที่เป็นบริษัทขอใบกำกับภาษีเต็มรูปแบบ ให้ตรวจสอบกฎภาษีของไทยกับนักบัญชีของคุณ เพราะรายละเอียดที่ต้องมีขึ้นกับประเทศและการจดทะเบียนของที่พัก

## Booking.com ส่งใบแจ้งหนี้ให้แขกหรือไม่

ไม่ ศูนย์ช่วยเหลือสำหรับพาร์ตเนอร์ของ Booking.com ระบุชัดเจนว่าแต่ละการจองเป็นข้อตกลงระหว่างคุณกับแขก ดังนั้น "it's your responsibility to provide the guest with an invoice – not Booking.com" ไม่ว่าใครจะเป็นผู้จัดการการชำระเงิน ([Booking.com Partner Hub](https://partner.booking.com/en-gb/help/policies-payments/guest-payments/supplying-guests-invoices))

หน้าเดียวกันเพิ่มกฎใช้งานจริงอีกสามข้อ

- ออกใบแจ้งหนี้ในนามของแขก หรือชื่ออื่นที่ตกลงกับแขก
- อย่าแสดง Booking.com เป็นผู้ขาย คุณคือผู้จัดหา
- หากคุณได้รับเงินผ่านบัตรเสมือน (virtual card) ชื่อเจ้าของบัตรจะแสดงเป็น "Booking.com (Agent)" แต่คุณยังต้องออกใบแจ้งหนี้เต็มมูลค่าการเข้าพัก

นักเดินทางธุรกิจที่จองผ่าน Booking.com for Business กด **Request invoice** ได้ ซึ่งเป็นเพียงการส่งข้อความถึงคุณ ([ศูนย์ช่วยเหลือ Booking.com for Business](https://help.business.booking.com/hc/en-gb/articles/14862570197268-How-can-I-get-my-invoice)) งานก็ยังตกอยู่ที่ฟรอนต์เดสก์ของคุณอยู่ดี

## ใบแจ้งหนี้ของโรงแรมต้องมีอะไรบ้าง

ขึ้นกับประเทศของคุณ แต่ใน EU ใบกำกับภาษี VAT เต็มรูปแบบมีรายการต่อไปนี้ ([คณะกรรมาธิการยุโรป](https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en))

- วันที่ออกและเลขที่เรียงลำดับที่ไม่ซ้ำ
- ชื่อและที่อยู่เต็มของคุณ และของลูกค้า
- เลขประจำตัวผู้เสียภาษี VAT ของลูกค้า เมื่อลูกค้าเป็นผู้มีหน้าที่เสียภาษี (โดยทั่วไปคือบริษัท)
- คำอธิบายการเข้าพัก ราคาต่อหน่วยก่อนภาษี และวันที่ส่งมอบหากต่างกัน
- อัตรา VAT จำนวน VAT และการแยกรายการตามอัตรา

หลายประเทศยังอนุญาตให้ออกใบแจ้งหนี้แบบ "ย่อ" สำหรับการขายบางประเภท เมื่อแขกที่เป็นธุรกิจขอใบแจ้งหนี้ มักต้องการแบบเต็มรูปแบบในนามบริษัทพร้อมเลขประจำตัวผู้เสียภาษี

ตั้งค่ารูปแบบครั้งเดียวใน Little Hotelier ที่ **Front Desk > Setup > Guest Payment Options > Customise invoices**: ชื่อเอกสาร (**Invoice**, **Tax Invoice** หรือชื่อของคุณเอง) คำนำหน้าและคำต่อท้ายเลขที่ โลโก้ และการแสดงภาษีรวมหรือไม่รวมในราคา การเปลี่ยนแปลงมีผลเฉพาะใบแจ้งหนี้ใหม่ ([ศูนย์ช่วยเหลือ](https://helpcentre.littlehotelier.com/en/articles/8910582-customise-guest-invoices))

## วิธีส่งอีเมลใบแจ้งหนี้จาก Little Hotelier (แบบทำเอง)

1. ตรวจว่าการเข้าพักจบแล้ว: ในแท็บ **Details** ของการจอง ตั้งสถานะเป็น **Checked-out** และตรวจยอดคงเหลือ
2. ไปที่แท็บ **Invoices** แล้วคลิก **Generate invoice**
3. คลิก **Email** แล้วเลือก **Invoice** Little Hotelier ส่งไปยังอีเมลผู้ติดต่อหลักของการจอง

คุณยังติ๊ก **Email invoice** ได้ตอน **Record Payment** หากคุณแก้ไขการจองภายหลัง แท็บ Invoices จะแสดง **Invoice is outdated** คลิกเพื่อสร้างใบแจ้งหนี้ฉบับแก้ไขแล้วส่งฉบับนั้น แหล่งที่มา: [Generate, print, and email a guest invoice](https://helpcentre.littlehotelier.com/en/articles/8673812-generate-print-and-email-a-guest-invoice) และ [Record a payment](https://helpcentre.littlehotelier.com/en/articles/9743295-record-a-payment-or-refund-for-a-reservation)

หากต้องการพิมพ์แทน คลิก **Print** แล้วเลือก **Invoice** สคริปต์ฟรี [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button) เพิ่มลิงก์ตรงเพื่อให้ข้ามเมนูได้

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="ส่วนท้ายของการจองใน Little Hotelier (หน้าจอภาษาสเปน) ที่มีลิงก์ Imprimir Factura เพิ่มข้างเมนู Print และ Email" caption="สคริปต์ Extra Invoice Print Button เพิ่มลิงก์ใบแจ้งหนี้แบบคลิกเดียวข้างเมนู Print และ Email" width="604" height="265"}
::

ข้อเสียคือต้องทำเองทุกครั้งสำหรับแขกทุกคน อีเมลอัตโนมัติของ Little Hotelier ถึงแขกมีเพียงยืนยันการจอง ยกเลิก เตือนก่อนเข้าพัก และขอบคุณหลังออก ([ศูนย์ช่วยเหลือ](https://helpcentre.littlehotelier.com/en/articles/8910590-customise-guest-emails)) ไม่มีฉบับใดส่งใบแจ้งหนี้

## วิธีส่งใบแจ้งหนี้อัตโนมัติเมื่อแขกเช็คเอาต์

**Invoice on Leave** ใน Hotelier Tools (beta) ทำขั้นตอนด้วยมือข้างต้นให้คุณหลังเช็คเอาต์ คุณทำเครื่องหมายการจองครั้งเดียว การทำเครื่องหมายไม่ได้ส่งอะไรในตอนนั้น

1. เปิด **Invoice on Leave** (`/invoice-on-leave`) หากแบนเนอร์บอกว่ายังไม่มีงาน ให้กด **Create the daily task (16:00, after check-out)**
2. ใบแจ้งหนี้จะออกเฉพาะการเข้าพักที่ **checked out** ใน Little Hotelier หากทีมของคุณไม่เช็คเอาต์แขกด้วยมือก่อน 16:00 ให้ใช้การ์ด **Automatic check-out** แล้วกด **Create the daily task (15:05)** งานนี้จะปิดรายการแขกที่ออกของวันใน Little Hotelier ซึ่งปิดอยู่จนกว่าคุณจะสร้าง
3. หาการจองแล้วเปิด auto-invoice สำหรับการจองนั้น ตัวกรอง **Enrolled** และ **Not enrolled** แสดงสถานะของแต่ละการเข้าพัก คุณลงทะเบียนแขกที่ยังพักอยู่ได้: ใบแจ้งหนี้จะออกในการรันครั้งแรกหลังจากแขกออกไป
4. หลังเช็คเอาต์ งานรายวันจะขอให้ Little Hotelier สร้างใบแจ้งหนี้ และ Little Hotelier ส่งอีเมลจากเทมเพลตและผู้ส่งของคุณเอง
5. ดู **Pending invoices to send** (`/invoice-on-leave/scheduled`) ว่ามีอะไรอยู่ในคิว ถึงกำหนดวันนี้ เลยกำหนด หรือออกใบแจ้งหนี้แล้ว

::screenshot{src="/images/blog/demo/en/invoice-at-checkout-full.webp" alt="หน้า Invoice on leave แบบเต็ม: ประกาศสีแดงว่าไม่มีอะไรเช็คเอาต์แขกอัตโนมัติ การ์ด Automatic check-out (ยังไม่ได้ตั้งค่า) พร้อม Create the daily task (15:05) งาน Automatic invoicing at check-out ที่กำลังทำงาน ลิงก์ Pending invoices to send และการจอง 9 รายการ แต่ละรายการมีปุ่ม Auto-invoice" caption="สร้างงานเช็คเอาต์หากจำเป็น แล้วทำเครื่องหมายการเข้าพักด้วย Auto-invoice ใบแจ้งหนี้จะถูกสร้างและส่งอีเมลหลังแขกเช็คเอาต์" path="/invoice-on-leave" width="1440" height="1526"}
::

ต้องการตอนนี้เลย? แต่ละแถวมีปุ่ม "process now" เพื่อออกใบแจ้งหนี้นั้นทันที

### อะไรทำให้ปลอดภัย

- **เครื่องหมายอยู่ใน Little Hotelier** การลงทะเบียนถูกบันทึกเป็นแท็กในหมายเหตุของการจองใน Little Hotelier พนักงานของคุณจึงเห็นได้ที่นั่น
- **ไม่ส่งซ้ำ** แท็กที่สองระบุว่า "ส่งใบแจ้งหนี้แล้ว" เขียนเฉพาะหลังจาก Little Hotelier รับอีเมลแล้ว การเข้าพักที่ออกใบแจ้งหนี้แล้วลงทะเบียนซ้ำไม่ได้
- **การตรวจสอบก่อนส่งแบบเดียวกับการออกใบแจ้งหนี้เป็นชุด** ใบแจ้งหนี้บริษัทที่ไม่มีเลขประจำตัวผู้เสียภาษีหรือที่อยู่ทางภาษี หรือเลขประจำตัวผู้เสียภาษีผิดรูปแบบ จะถูกปฏิเสธแทนที่จะส่งออกไปครึ่ง ๆ กลาง ๆ
- **การตามงานย้อนหลังและขีดจำกัด** งานรายวันย้อนดู 8 วันเพื่อตามรอบที่พลาด และอ่านการเช็คเอาต์ได้สูงสุด 100 รายการต่อรอบ การเข้าพักที่ผ่านไปแล้วซึ่งไม่มีอีเมลแขกจะถูกรายงานครั้งเดียว ไม่ลองซ้ำทุกวัน

::callout{type="info" title="เครื่องมืออิสระ"}
Hotelier Tools ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder หรือ Little Hotelier เชื่อมต่อด้วยบัญชี Little Hotelier ของโรงแรมคุณเอง และใบแจ้งหนี้เป็นเอกสารของ Little Hotelier เอง
::

::demo-cta{path="/invoice-on-leave"}
::

## ใบแจ้งหนี้ส่งออกเป็นภาษาอะไร

ตั้งครั้งเดียวที่ **Settings > Invoices** (`/settings/invoices`): **From the guest's country** (ประเทศในที่อยู่ของแขกกำหนดภาษา) หรือ **Always the same language** หากไม่มีประเทศหรือไม่ตรงกับภาษาที่รองรับ จะใช้ **Fallback language** ของคุณ

## แขกต้องการในนามบริษัท หรือต้องการหลังออกไปแล้ว

**ก่อนที่ใบแจ้งหนี้จะถูกสร้าง:** เพิ่มชื่อบริษัท เลขประจำตัวผู้เสียภาษี และที่อยู่ทางภาษีในรายละเอียดแขกของการจองใน Little Hotelier Hotelier Tools จะไม่ออกใบแจ้งหนี้บริษัทหากเลขประจำตัวผู้เสียภาษีหรือที่อยู่ทางภาษีขาดหรือผิดรูปแบบ จึงไม่มีเอกสารที่ทำไม่เสร็จถึงมือแขก

**หลังจากออกไปแล้ว:** แก้รายละเอียดใน Little Hotelier แล้วใช้ **Invoice is outdated** เพื่อสร้างใบแจ้งหนี้ฉบับแก้ไข หากคุณทำเครื่องหมายเป็น final ไปแล้ว ให้คลิก **Cancel invoice** แล้ว **Generate invoice** อีกครั้ง ([ศูนย์ช่วยเหลือ](https://helpcentre.littlehotelier.com/en/articles/8672961-mark-reservation-invoices-as-final)) ในสเปนที่ใช้ VeriFactu ใบแจ้งหนี้ที่สรุปแล้วแก้ผ่าน **Rectify invoice** ([ศูนย์ช่วยเหลือ](https://helpcentre.littlehotelier.com/en/articles/15220249-mark-an-invoice-as-final-spain-with-verifactu))

ลิงก์ส่วนตัวที่แขกกรอกรายละเอียดบริษัทเองอยู่ระหว่างพัฒนา และยังไม่พร้อมใช้งาน

หากคำขอใบแจ้งหนี้เข้ามาทางข้อความของ Booking.com ดู[วิธีจัดการข้อความแขกจาก Booking.com](/blog/booking-com-guest-messages)

## ส่งใบแจ้งหนี้ซ้ำได้อย่างไร

เปิดการจองแล้วใช้ **Email > Invoice** อีกครั้ง เคล็ดลับเรื่องจังหวะเวลา: เมื่อใบแจ้งหนี้ถูก**ทำเครื่องหมายเป็น final** แล้ว Little Hotelier จะไม่เสนอ Print หรือ Email ให้อีก ให้ส่งก่อนแล้วค่อย final ภายหลัง หรือดาวน์โหลด PDF ภายหลังจากรายงาน Invoice

::callout{type="tip" title="แขกที่ชำระด้วยการโอนเงิน"}
สคริปต์ [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button) เพิ่มปุ่มที่ส่งอีเมลรายละเอียดบัญชีธนาคารของคุณจากหน้าการจอง ยังไม่เผยแพร่ทั่วไปและตั้งค่าให้ตามคำขอสำหรับแต่ละที่พัก
::

## สรุป

- ที่พัก ไม่ใช่ Booking.com เป็นผู้ต้องออกใบแจ้งหนี้ให้แขก
- ใน Little Hotelier: **Invoices > Generate invoice** แล้ว **Email > Invoice** โดยควรทำหลังเช็คเอาต์
- **Invoice on Leave** ของ Hotelier Tools ส่งอีเมลอัตโนมัติหลังเช็คเอาต์ จากเทมเพลต Little Hotelier ของคุณเอง พร้อมตรวจรายละเอียดบริษัทและการส่งซ้ำ
- ปลายไตรมาส [ดาวน์โหลดใบแจ้งหนี้ทั้งหมดในครั้งเดียว](/blog/download-all-little-hotelier-invoices) ทุกอย่างที่ฟีเจอร์ออกใบแจ้งหนี้ทำได้อยู่ใน[หน้า Invoicing](/tools/bot/invoicing)
