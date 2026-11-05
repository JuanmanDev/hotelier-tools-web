---
title: "Expedia Collect: รับเงินด้วยบัตรเสมือนหรือคำขอชำระเงิน (และไม่พลาดสักรายการ)"
seoTitle: "รับเงิน Expedia Collect: บัตรเสมือนหรือคำขอชำระเงิน"
description: "แขก Expedia Collect จ่ายเงินให้ Expedia ล่วงหน้า แต่คุณจะได้เงินก็ต่อเมื่อรูดบัตรเสมือนหรือส่งคำขอชำระเงิน กำหนดเวลา ขั้นตอน และวิธีทำให้อัตโนมัติ"
date: 2026-11-04
updated: 2026-11-05
category: invoicing
tags: [expedia, expedia collect, การชำระเงิน, บัตรเสมือน, partner central, ระบบอัตโนมัติ]
keywords: [expedia collect payment request, expedia collect รับเงินยังไง, ขอเงินจาก expedia, บัตรเสมือน expedia รูดเมื่อไหร่, expedia collect ไม่ได้รับเงิน, expedia partner central payments, expedia collect กับ hotel collect ต่างกันยังไง, expedia virtual card หมดอายุ, expedia automatic payouts]
feature: automated-checks
demoPath: /credentials/expedia-extranet
cover: /images/blog/demo/en/expedia-collect-checkout-check.webp
coverAlt: "การตรวจตอนแขกออกใน Hotelier Tools พร้อมการตรวจ Expedia Collect payment ที่ปิดอยู่ ซึ่งตรวจใน Partner Central ว่าขอเงินแล้วหรือยังตอนแขกออก มีลิงก์ไปประวัติการชำระเงินของ Expedia และระบุว่าจะไม่ขอซ้ำสำหรับการเข้าพักที่ Expedia ปฏิเสธ และไม่รูดบัตรเสมือน"
featured: true
faq:
  - q: "ฉันมีเวลานานแค่ไหนในการขอเงินสำหรับการจอง Expedia Collect"
    a: "365 วันนับจากวันเช็คเอาท์ของแขก หลังจากนั้น Partner Central จะไม่ให้ส่งคำขอชำระเงินสำหรับการเข้าพักนั้นอีก การจองที่ลืมไปจึงอาจเป็นเงินที่คุณไม่มีวันได้รับ"
  - q: "รูดบัตรเสมือนของ Expedia ได้เมื่อไหร่"
    a: "ตั้งแต่วันเช็คอิน Expedia แนะนำให้รูดตอนเช็คอิน และถ้าไม่ผ่านให้ลองอีกครั้งตอนสิ้นวัน เพราะเรื่องเขตเวลา รูดตามยอดที่แสดงพอดี บัตรจะถูกปิดใช้งานหกเดือนหลังเช็คเอาท์"
  - q: "Expedia ใช้เวลานานแค่ไหนในการจ่ายเงินตามคำขอ"
    a: "Expedia ส่งเงินเข้าธนาคารของคุณตามเงื่อนไขการชำระเงิน โดยทั่วไปคือ 30 วันหลังส่งคำขอ ธนาคารอาจใช้เวลาอีก 2 ถึง 8 วัน"
  - q: "ต้องขอเงิน Expedia Collect ทีละรายการเองทุกครั้งไหม"
    a: "ไม่ต้อง หากคุณใช้บัตรเสมือนซึ่งรูดเอง หรือใช้ automatic payouts ในตลาดที่ Expedia เปิดให้ (บางตลาด หัก 2%) นอกจากนั้นทุกการเข้าพักต้องส่งคำขอชำระเงินใน Partner Central หรือใช้เครื่องมือที่ส่งให้แทน"
  - q: "Hotelier Tools ขอเงิน Expedia Collect อัตโนมัติได้ไหม"
    a: "ได้ ในเวอร์ชันเบต้า งานตั้งเวลาจะขอให้ Expedia จ่ายเงินการเข้าพักหลังเช็คเอาท์ เริ่มต้นในโหมดพรีวิว ไม่ขอซ้ำสำหรับการเข้าพักเดียวกัน ไม่เข้าสู่ระบบเอง และไม่รูดบัตรเสมือน"
  - q: "Hotelier Tools เป็นส่วนหนึ่งของ Expedia หรือ Little Hotelier หรือไม่"
    a: "ไม่ใช่ Hotelier Tools เป็นอิสระ ไม่มีความเกี่ยวข้องหรือได้รับการรับรองจาก Expedia Group, SiteMinder หรือ Little Hotelier เชื่อมต่อด้วยบัญชี Little Hotelier ของโรงแรมคุณเอง และบัญชี Partner Central ของคุณเอง"
---

กับ Expedia Collect แขกจ่ายเงินให้ Expedia ตอนจอง และ Expedia ติดเงินคุณอยู่หลังการเข้าพัก คุณรับเงินนั้นได้สามทาง: รูดบัตรเสมือนของ Expedia ตั้งแต่วันเช็คอิน ส่งคำขอชำระเงินใน Partner Central (**Payments > Request a payment from Expedia Group**) ภายใน 365 วันหลังเช็คเอาท์ หรือให้ Expedia จ่ายผ่าน automatic payouts ในตลาดที่มีบริการนี้ ถ้าไม่ทำสักทาง เงินนั้นจะไม่มีวันถูกเก็บ Hotelier Tools (เบต้า) แสดงสถานะการชำระเงินของทุกการเข้าพักจาก Expedia และส่งคำขอให้คุณตามเวลาที่ตั้งไว้ได้

กฎของ Expedia ด้านล่างตรวจสอบกับศูนย์ช่วยเหลือ Partner Central ของ Expedia Group ณ เดือนพฤศจิกายน 2026

## รับเงินจากการจอง Expedia Collect ได้อย่างไร

ภายใต้ **Expedia Collect (EC)** นักเดินทางจ่ายเงินล่วงหน้าให้ Expedia หรือพาร์ตเนอร์ B2B ของ Expedia และการแจ้งเตือนการจองจะแสดงราคาสุทธิ คือยอดที่ Expedia จ่ายคุณหลังหักค่าตอบแทนของ Expedia แล้ว ([About Expedia Collect](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-expedia-collect)) หลังการเข้าพัก คุณเก็บเงินได้ด้วยวิธีใดวิธีหนึ่งต่อไปนี้:

| วิธีรับเงิน | สิ่งที่คุณทำ | เงินเข้าเมื่อไหร่ | ค่าใช้จ่าย |
|---|---|---|---|
| **บัตรเสมือน** | รูดที่เครื่องรูดบัตร ตั้งแต่วันเช็คอิน | ตามรอบปกติของผู้ให้บริการรับบัตร | Expedia ไม่เก็บค่าธรรมเนียม มีแค่ค่าธรรมเนียมของผู้ให้บริการรับบัตร |
| **คำขอชำระเงิน** (โอนเข้าบัญชี) | ส่งคำขอใน Partner Central ภายใน 365 วันหลังเช็คเอาท์ | โดยทั่วไป 30 วันหลังขอ บวกวันทำการธนาคารอีก 2 ถึง 8 วัน | ฟรี |
| **Automatic payouts** (บางตลาด) | ไม่ต้องทำอะไรต่อการเข้าพัก | วันสุดท้ายของเดือนถัดจากเดือนที่เช็คเอาท์ | หัก 2% |

มีอีกสองโมเดลที่ดูคล้ายกันแต่ทำงานต่างกัน **Hotel Collect** แขกจ่ายเงินให้คุณที่โรงแรม จึงไม่มีอะไรต้องขอจาก Expedia ส่วน **Expedia Traveler Preference** ให้แขกแต่ละคนเลือกแบบใดแบบหนึ่งตอนจอง

ในบางตลาด Expedia แทนที่ EC ด้วย **Updated Expedia Collect (EC+)** แล้ว ในโมเดลสุทธิ (net) บัตรเสมือนจะมียอดเท่ากับยอดจองหักค่าตอบแทนของ Expedia และภาษี ในโมเดลรวม (gross) บัตรมียอดเต็ม และ Expedia จะเรียกเก็บค่าตอบแทนจากคุณแยกต่างหาก ([About virtual cards](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/about-the-expedia-virtual-card))

## วิธีรูดบัตรเสมือนของ Expedia

**Expedia Virtual Card (EVC)** ซึ่งตอนนี้ใน Partner Central เรียกแค่ "virtual card" เป็นบัตรใช้ครั้งเดียวที่ Expedia ออกให้สำหรับแต่ละการจอง Expedia Collect เมื่อคุณสมัครใช้แล้ว ([Charge the virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/charge-the-expedia-virtual-card-for-expedia-collect-bookings))

1. หาข้อมูลบัตร: ในการแจ้งเตือนการจอง (หากคุณมี channel manager) ในการจองบน Partner Central ใต้ **Payment method** หรือในหน้าค้นหา **Virtual cards** ด้วยรหัสการจองและวันเช็คอิน ([Find a virtual card](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-virtual-card/find-the-expedia-virtual-card-information))
2. รูด**ตั้งแต่วันเช็คอิน** ตามยอดรวมที่แสดงพอดี ในสกุลเงินตามสัญญา
3. ถ้ารูดไม่ผ่านตอนเช้า ให้ลองอีกครั้งตอนสิ้นวัน Expedia บอกว่าบัตรอาจยังไม่เปิดใช้งานเพราะเรื่องเขตเวลา
4. ค่าใช้จ่ายเพิ่มเติมและภาษีท้องถิ่น ให้เรียกเก็บจากบัตรของแขกเอง ห้ามรูดจากบัตรเสมือน

ระวังกำหนดเวลา บทความเรื่องการรูดบัตรบอกว่าบัตรใช้ได้ 180 วันหลังเช็คเอาท์ ส่วนบทความเรื่องการค้นหาบัตรบอกว่าบัตรจะถูกปิดหกเดือนหลังเช็คเอาท์ ถ้ารูดในสกุลเงินอื่น ให้ใช้อัตราแลกเปลี่ยนของวันนั้น ไม่เช่นนั้นอาจถูกปฏิเสธหรือโดนเรียกเงินคืน (chargeback)

## วิธีขอเงินจาก Expedia Group ใน Partner Central

หากคุณไม่ใช้บัตรเสมือน ทุกการเข้าพักแบบ Expedia Collect ต้องส่งคำขอชำระเงิน ([Request payment from Expedia Group](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/request-payment-from-expedia-group)):

1. เลือก **Payments** ในเมนู
2. ใต้ **Quick tasks** เลือก **Request a payment from Expedia Group**
3. ค้นหา **By Date Range** (ครั้งละไม่เกิน 31 วัน) หรือ **By Reservation ID** (สูงสุด 200 รหัส)
4. ติ๊กเลือกการจอง ตรวจยอดการจองและภาษี แล้วเลือก **Create Invoice**
5. เก็บ **Transmission Queue ID** ที่แสดงในหน้ายืนยันไว้ เป็นเลขอ้างอิงของคำขอนั้น

หาก Partner Central ไม่มีรายละเอียดของการจองใด ให้อัปโหลดไฟล์คำขอชำระเงินแทน หากข้อมูลบัญชีธนาคารของคุณไม่ครบ จะมีป๊อปอัปแจ้งในหน้าคำขอ ให้แก้ไขก่อน ไม่เช่นนั้นการจ่ายเงินจะล่าช้า

## Expedia จ่ายเงินเมื่อไหร่ และถ้าลืมจะเกิดอะไรขึ้น

Expedia ส่งเงินตามเงื่อนไขการชำระเงินของคุณ โดยทั่วไป 30 วันหลังส่งคำขอ และธนาคารอาจใช้เวลาอีก 2 ถึง 8 วัน การจองที่ออกใบแจ้งหนี้ไปเพียงบางส่วนต้องส่งคำขอใหม่สำหรับส่วนที่เหลือ กรณีแขกไม่มา (no-show) หรือเช็คเอาท์ก่อนกำหนด ให้ติดต่อ Expedia เพื่อขอคืนเงินแทน

ถ้าไม่มีใครส่งคำขอสำหรับการเข้าพักใด **Expedia จะไม่จ่ายเงินนั้น** เมื่อครบ 365 วันหลังเช็คเอาท์ ตัวเลือกนี้จะหายไปจาก Partner Central ช่วงไฮซีซันที่ลืมไปสิบการเข้าพัก ก็คือเงินก้อนจริงที่ค้างอยู่กับ Expedia

Automatic payouts ตัดขั้นตอนต่อการเข้าพักออกไป แต่มีเฉพาะบางตลาด และหัก 2% ([About automatic payouts](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/about-automatic-payouts)) ตรวจดูที่ **Payments > Payment Settings** ว่าที่พักของคุณมีบริการนี้หรือไม่

## วิธีกระทบยอดการชำระเงิน Expedia Collect

ทุกเดือน ให้จับคู่สามรายการนี้:

- **การเช็คเอาท์ของคุณ:** ทุกการเข้าพัก Expedia Collect ที่สิ้นสุดแล้ว
- **คำขอของคุณ:** ใน Partner Central ไปที่ **Payments > See all invoices** เลือกช่วงวันที่ แล้วดูคอลัมน์ **Status** ระบบเก็บประวัติไว้สองปี พร้อมยอดโอนและวันที่จ่าย ([Check the status of an invoice](https://apps.expediapartnercentral.com/lodging/help/help-article/billing/expedia-collects/research-an-invoice-status))
- **บัญชีธนาคารของคุณ:** ยอดโอนที่ได้รับ พร้อม queue ID

การเช็คเอาท์ที่ไม่มีคำขอ คือเงินที่ต้องขอ คำขอที่ผ่านไป 40 วันแล้วยังไม่มีเงินโอนเข้า ควรสอบถาม Expedia เมื่อการเข้าพักได้รับเงินแล้ว ให้บันทึกการชำระเงินในระบบบริหารโรงแรม (PMS) ของคุณ เพื่อไม่ให้ Little Hotelier แสดงยอดค้างที่แขกไม่ได้ติดอยู่

## วิธีที่เร็วกว่า: ขอเงิน Expedia Collect จาก Hotelier Tools (เบต้า)

Hotelier Tools เชื่อมต่อกับบัญชี Partner Central ของคุณและทำขั้นตอนข้างบนแทนคุณ อ่านทุกการเข้าพักจาก Expedia แสดงสถานะเงินของแต่ละรายการ และขอให้ Expedia จ่าย ทั้งแบบกดเองหรือตามเวลาที่ตั้งไว้

### 1. เชื่อมต่อ Partner Central

เปิด **Credentials > Expedia Partner Central** (ข้อมูลเข้าสู่ระบบ) (`/credentials/expedia-extranet`) การเข้าสู่ระบบทำงานในเบราว์เซอร์บนเซิร์ฟเวอร์: Hotelier Tools พิมพ์อีเมลและรหัสผ่านให้ คุณแค่ตอบสิ่งที่ Expedia ถาม

- **I have a login** (มีบัญชีแล้ว): ใส่อีเมลและรหัสผ่านที่ใช้เข้าสู่ระบบ บนอุปกรณ์ใหม่ Expedia จะส่งรหัสทางอีเมล ให้พิมพ์ในช่อง **Code from Expedia** การเข้าสู่ระบบครั้งต่อไปจะใช้อุปกรณ์ที่บันทึกไว้และปกติไม่ต้องใช้รหัส
- **I have an invitation link** (มีลิงก์คำเชิญ): ทางที่เรียบร้อยกว่าคือสร้างผู้ใช้ Partner Central แยกสำหรับ Hotelier Tools เชิญจากบัญชีของคุณ แล้ววางลิงก์จากอีเมลคำเชิญของ Expedia ตามที่ได้รับมา ตัวช่วยตั้งค่า (wizard) จะสร้างรหัสผ่าน (12 ถึง 64 ตัวอักษร มีตัวพิมพ์ใหญ่และเล็ก ตัวเลข และสัญลักษณ์) และโปรไฟล์ที่ Expedia กำหนด ซึ่งรวมเบอร์โทรด้วย

ขั้นตอนใดที่ wizard ไม่รู้จัก เช่น การตั้งค่า SMS หรือการตรวจความปลอดภัย จะแสดงเป็นภาพของหน้านั้น ให้คุณคลิกบนภาพและพิมพ์ในช่อง **Keep me signed in** ถูกติ๊กไว้เสมอ และเซสชันถูกเก็บแบบเข้ารหัส งาน **Keep Expedia signed in** (ทุก 20 นาที) ใช้เซสชันนี้เพื่อไม่ให้หมดอายุเพราะไม่มีการใช้งาน และจะไม่เข้าสู่ระบบเองเด็ดขาด หากเซสชันหมดอายุ ต้องให้คนเข้าสู่ระบบใหม่

### 2. ดูสถานะการชำระเงินของทุกการเข้าพัก

การ์ด **Expedia Collect payments** ในหน้าเดียวกันแสดงทุกการเข้าพักจาก Expedia ที่เช็คเอาท์ในช่วงวันที่คุณเลือก เลือก **Last 30 days**, **This month**, **Last month**, **Last 3 months**, **This year** หรือ **Last year** หรือช่วงใดก็ได้ไม่เกิน 366 วัน ระบบอ่าน Expedia ครั้งละ 31 วัน เหมือนแบบฟอร์มของ Partner Central เอง

แต่ละการเข้าพักมีสถานะเดียว พร้อมชิปสำหรับกรองรายการ:

| สถานะ | ความหมาย |
|---|---|
| **To request** | เช็คเอาท์แล้ว ยังไม่ได้รับเงิน ยังไม่เคยขอ: ขอได้เลย |
| **Not yet** | ยังไม่เช็คเอาท์ หรือไม่มีอะไรต้องขอ |
| **Requested** | ขอจาก Hotelier Tools แล้ว Expedia รับคำขอและให้ queue ID |
| **Refused by Expedia** | Expedia ตอบกลับเป็นข้อผิดพลาด คนสามารถขอใหม่ได้ |
| **Check in Partner Central** | ไม่มีคำตอบที่อ่านได้: ตรวจใน Partner Central ก่อนขอใหม่ |
| **Reconciled by Expedia** | ขอจากที่นี่ รายการเดินบัญชีของ Expedia ระบุว่ารับยอดแล้วและการชำระเงินยังรออยู่ |
| **Paid by Expedia** | ขอจากที่นี่ รายการเดินบัญชีของ Expedia ระบุวันที่และยอดที่จ่ายแล้ว |
| **Paid** / **Invoiced** | ข้อมูลของ Expedia เองระบุว่าจ่ายเงินแล้ว หรือการเข้าพักออกใบแจ้งหนี้แล้ว |
| **Not in Expedia's list** | ขอด้วยมือใน Partner Central แล้ว หรือจ่ายผ่าน automatic payouts |
| **Virtual card** | รูดบัตรเสมือน: ไม่มีอะไรต้องขอ |
| **Hotel Collect** | แขกจ่ายให้คุณโดยตรง |

ติ๊กเลือกการเข้าพัก หรือใช้ช่องเลือกทั้งหมด แล้วกด **Request payment for N stays** หลังคุณยืนยัน Hotelier Tools จะส่งคำขอเดียวสำหรับทุกรายการ ซึ่งเป็นคำขอ **Create Invoice** แบบเดียวกับใน Partner Central แต่ละการเข้าพักจะถูกจองสิทธิ์ (claim) ก่อน จึงไม่มีทางส่งซ้ำ **Details** แสดงสิ่งที่ Expedia บอกเกี่ยวกับการเข้าพักนั้นและประวัติของคำขอ

::screenshot{src="/images/blog/demo/en/expedia-collect-payments-card.webp" alt="หน้า Expedia Partner Central ใน Hotelier Tools: การ์ด Expedia Collect payments พร้อมลิงก์ Payments history และข้อความ Connect Expedia above to see them การ์ด Request Expedia Collect payments automatically ที่ระบุว่า Not configured yet พร้อมปุ่ม Every day at 09:30, Choose และ Run now และรายการ How it works" caption="ในเดโมไม่ได้เชื่อมต่อ Expedia การ์ดการชำระเงินจึงว่าง เมื่อเชื่อมต่อแล้วจะแสดงทุกการเข้าพักและสถานะ การ์ดด้านล่างใช้ตั้งเวลาส่งคำขอ" path="/credentials/expedia-extranet"}
::

### 3. ให้ทำงานตามเวลาที่ตั้งไว้

ที่ **Automatic Expedia payment requests** (`/credentials/expedia-extranet/automatic-requests`) กด **Every day at 09:30** (เวลาที่แนะนำ) หรือ **Choose** เพื่อเลือกเวลาเอง ระบบจะสร้างงาน **Request Expedia Collect payments** ซึ่งเริ่มต้นในโหมด **Preview** (พรีวิว): แต่ละรอบจะเขียนในบันทึกว่าจะขอเงินการเข้าพักใดบ้างโดยไม่ส่งอะไร เมื่อรายการดูถูกต้องแล้ว ให้เปลี่ยน **What a run does** เป็น **Request: ask Expedia to pay**

| การตั้งค่า | ค่าเริ่มต้น | หน้าที่ |
|---|---|---|
| **Days after check-out** | 1 | ขอเงินเมื่อเช็คเอาท์ผ่านไปครบจำนวนวันนี้ |
| **Look back (days)** | 30 | ย้อนหาการเช็คเอาท์ไปไกลแค่ไหน |
| **Most per stay** | ไม่จำกัด | การเข้าพักที่ขอยอดมากกว่านี้จะเหลือไว้ให้คนตัดสินใจ |
| **Most stays per run** | 20 | ที่เหลือรอรอบถัดไป |

สิ่งที่ไม่ทำเด็ดขาด: เข้าสู่ระบบ Partner Central เอง ขอซ้ำสำหรับการเข้าพักเดียวกัน ขอเงินการเข้าพักที่จ่ายด้วยบัตรเสมือนหรือยังไม่เช็คเอาท์ หรือขอใหม่สำหรับการเข้าพักที่ Expedia ปฏิเสธหรือไม่ตอบ รายการเหล่านี้เหลือไว้ให้คน และบันทึกของรอบนั้นจะระบุชื่อไว้

ใช้การตรวจ **When they leave** (ตอนแขกออก) อยู่แล้ว? การตรวจ **Expedia Collect payment** ในนั้นจะเตือนเมื่อมียอดที่ยังไม่ได้ขอ หากเปิดการแก้ไข **Request the payment from Expedia (asks Expedia for money)** ไว้ ระบบจะส่งคำขอตอนแขกออก เปิดทั้งสองอย่างพร้อมกันได้: แต่ละการเข้าพักถูก claim เพียงครั้งเดียว

::screenshot{src="/images/blog/demo/en/expedia-collect-checkout-check.webp" alt="หน้าการตรวจ When they leave: การตรวจ Address and origin validation และ Automatic check-out ตามด้วยการตรวจ Expedia Collect payment ที่ปิดอยู่ พร้อมสิ่งที่ทำได้ (เตือนยอดที่ยังไม่ได้ขอ และเมื่อเปิดการแก้ไข จะขอ Expedia ครั้งเดียวต่อการเข้าพัก) และสิ่งที่ไม่ทำ (ขอใหม่สำหรับการเข้าพักที่ถูกปฏิเสธ รูดบัตรเสมือน)" caption="ช่วงเช็คเอาท์สามารถขอเงินจาก Expedia ให้แต่ละการเข้าพักตอนแขกออก ครั้งเดียวต่อการเข้าพัก" path="/automated-checks/moment/at_checkout"}
::

### 4. ติดตามประวัติ

**Expedia payments** (`/automated-checks/expedia-payments`) คือสมุดบันทึกของทุกคำขอที่ส่งจาก Hotelier Tools: โดยคน งานตั้งเวลา การตรวจตอนเช็คเอาท์ ผู้ช่วย AI หรือ API กรองตามสถานะ **Who asked** และวันเช็คเอาท์ แล้วเปิดแถวเพื่อดูแต่ละการ claim และแต่ละคำตอบของ Expedia **Ask again** ส่งใหม่สำหรับการเข้าพักที่ Expedia ปฏิเสธ สำหรับการเข้าพักที่ไม่มีคำตอบ คุณต้องติ๊ก **I checked Partner Central and these stays are not there** ก่อน เพราะการขอสองครั้งอาจหมายถึงได้เงินซ้ำสองครั้ง

ในการจองของ Expedia (`EXP-` ตามด้วยรหัสยืนยัน) ส่วน **Payments** ของการจองจะมีแผง **Expedia payment** พร้อมปุ่ม **Check with Expedia** และลิงก์ที่เปิดการ์ดการชำระเงินโดยติ๊กการเข้าพักนั้นไว้ให้

คุณยังถามผู้ช่วย AI ของแดชบอร์ด หรือ Claude และ ChatGPT ผ่าน [MCP server](/blog/what-is-mcp-server-hotels) ได้ด้วย "เดือนนี้ Expedia ปฏิเสธการชำระเงินรายการไหนบ้าง" จะเรียก `list_expedia_payment_requests` "ขอ Expedia ใหม่สำหรับ EXP-2570237397" จะเรียก `request_expedia_payments` ซึ่งเป็นเครื่องมือที่ต้องให้คุณอนุมัติ: ในแชตของแดชบอร์ดจะแสดงการ์ด และไม่มีอะไรถูกส่งจนกว่าคุณจะยืนยัน การอ่านและการขอแบบเดียวกันมีใน REST API ด้วย

### ข้อจำกัดที่ควรบอกตรงๆ

- **เบต้า และยังใหม่** ฟีเจอร์คำขอชำระเงินเปิดตัวเดือนพฤศจิกายน 2026
- **ติดตามการจ่ายเงินเฉพาะคำขอที่ส่งจากที่นี่** ตั้งแต่รุ่น 1.71 (พฤศจิกายน 2026) Hotelier Tools อ่านหน้า **Statements and invoices** ใน Partner Central (12 เดือนล่าสุด) และแสดงคำขอเป็น **Reconciled by Expedia** (รับแล้ว รอจ่ายเงิน) หรือ **Paid by Expedia** (พร้อมวันที่และยอดเงิน) รวมถึงในแผง Expedia ของการจอง คำขอที่ยังไม่อยู่ในหน้านั้นจะยังเป็น **Requested**
- **ไม่รูดบัตรเสมือนเด็ดขาด** การเข้าพักเหล่านั้นแสดงเป็น **Virtual card**: ให้รูดที่เครื่องรูดบัตรของคุณ
- **ใช้เซสชัน Partner Central ของคุณเอง** ข้อกำหนดพาร์ตเนอร์ของ Expedia จำกัดการเข้าถึง Partner Central แบบอัตโนมัติ Hotelier Tools เข้าสู่ระบบในนามผู้ใช้ของคุณ ไม่เคยเข้าเอง และไม่มีอะไรแชร์ข้ามที่พัก
- **ในเดโมไม่ได้เชื่อมต่อ Expedia** เดโมจึงแสดงการ์ดแต่ไม่มีการเข้าพักจาก Expedia

::demo-cta{path="/credentials/expedia-extranet"}
::

การตรวจทั้งหมดอยู่ใน[หน้า Automated checks](/tools/bot/automated-checks) แดชบอร์ดใช้ฟรีสำหรับทุกโรงแรมจนกว่าจะเริ่มเรียกเก็บเงินในวันที่ 10 มกราคม 2027

::callout{type="info" title="เครื่องมืออิสระ"}
Hotelier Tools ไม่มีความเกี่ยวข้องหรือได้รับการรับรองจาก Expedia Group, SiteMinder หรือ Little Hotelier เชื่อมต่อด้วยบัญชี Little Hotelier ของโรงแรมคุณเอง และบัญชี Expedia Partner Central ของคุณเอง
::

อ่านเพิ่มเติม: [ข้อความแขกจาก Expedia](/blog/expedia-guest-messages), [การจองจาก OTA ที่ไม่เข้า Little Hotelier](/blog/ota-bookings-missing-little-hotelier), [บัตร Booking.com ใช้ไม่ได้หรือแขกไม่มา](/blog/booking-com-invalid-card-no-show)

## สรุป

- Expedia Collect หมายความว่า Expedia ถือเงินของแขกไว้จนกว่าคุณจะขอ
- บัตรเสมือน: รูดตั้งแต่วันเช็คอิน ตามยอดพอดี ก่อนบัตรถูกปิดหกเดือนหลังเช็คเอาท์
- คำขอชำระเงิน: **Payments > Request a payment from Expedia Group** ภายใน 365 วันหลังเช็คเอาท์ โดยทั่วไปได้เงินใน 30 วัน
- กระทบยอดทุกเดือน: การเช็คเอาท์ เทียบกับ **See all invoices** เทียบกับบัญชีธนาคาร
- Hotelier Tools (เบต้า) แสดงสถานะของแต่ละการเข้าพักและขอเงินตามเวลาที่ตั้งไว้ได้ เริ่มต้นในโหมดพรีวิวและไม่ขอซ้ำ
