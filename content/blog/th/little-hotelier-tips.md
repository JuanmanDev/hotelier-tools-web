---
title: "20 เคล็ดลับ Little Hotelier และฟีเจอร์ลับที่หลายคนไม่รู้"
seoTitle: "เคล็ดลับ Little Hotelier และฟีเจอร์ที่ซ่อนอยู่ (2026)"
description: "20 เคล็ดลับ Little Hotelier: ปฏิทินที่เร็วขึ้น passkey ราคาต่ำสุด คืนว่างคั่นกลาง ลิงก์จอง audit log และสคริปต์ฟรีที่แสดงราคาในปฏิทิน"
date: 2026-10-03
category: tips
tags: [tips, how to, calendar, userscripts, little hotelier]
keywords: [little hotelier คือ, little hotelier วิธีใช้, เคล็ดลับ little hotelier, little hotelier tips, little hotelier hidden features, little hotelier calendar, little hotelier tutorial]
feature: dashboard
demoPath: /
cover: /images/scripts/full-width-reservation-table/to.png
coverAlt: "หน้า Reservations ของ Little Hotelier (หน้าจอภาษาสเปน) ที่ขยายเต็มความกว้างหน้าจอด้วยสคริปต์ Full Width Reservation Table: ตัวกรองการค้นหา ปุ่ม Buscar พบ 36 รายการจอง และลิงก์ Exportar"
faq:
  - q: "จะทำอย่างไรไม่ให้ Little Hotelier ขอรหัส MFA บ่อยๆ?"
    a: "Little Hotelier จะขอใหม่ทุก 30 วัน เมื่อคุณเปลี่ยนเบราว์เซอร์หรืออุปกรณ์ และก่อนทำรายการสำคัญ วิธีที่เร็วที่สุดคือใช้ passkey (My account, Passkeys, Create passkey) หรืออนุมัติผ่านแอปมือถือของ Little Hotelier ซึ่งแสดงตัวเลขให้ตรงกันแทนการกรอกรหัส"
  - q: "จะหลีกเลี่ยงเซสชันหมดเวลาใน Little Hotelier ได้อย่างไร?"
    a: "ในบทความศูนย์ช่วยเหลือที่เราตรวจ ไม่มีการตั้งค่าเรื่องนี้ userscript ฟรี Auto Refresh On Inactivity จะโหลดหน้าใหม่หลังไม่มีการใช้งาน 10 นาที คุณจึงกลับมาเจอหน้าที่โหลดใหม่แล้ว แทนหน้าเก่าที่ค้างอยู่"
  - q: "ดูราคาห้องในปฏิทินของ Little Hotelier ได้ไหม?"
    a: "ในตัวระบบทำไม่ได้ ปฏิทินแสดงการจอง ส่วนราคาอยู่ในตาราง inventory userscript ฟรี Prices Display อ่านราคาจากหน้า inventory แล้วแสดงใต้ประเภทห้องแต่ละแถวในปฏิทิน"
  - q: "Little Hotelier มีคีย์ลัดไหม?"
    a: "เราไม่พบคีย์ลัดในศูนย์ช่วยเหลือของ Little Hotelier (ตุลาคม 2026) ปุ่มลูกศรของปฏิทินเลื่อนทีละ 1, 7 หรือ 14 วัน และปุ่ม View today พากลับมาที่วันนี้ ในแดชบอร์ด Hotelier Tools กด Ctrl+K (Cmd+K บน Mac) เพื่อเปิดการค้นหา"
  - q: "คู่มือผู้ใช้ Little Hotelier อยู่ที่ไหน?"
    a: "ไม่มีคู่มือเล่มเดียว Little Hotelier มีศูนย์ช่วยเหลือสองแห่ง แห่งหนึ่งสำหรับเวอร์ชันคลาสสิกและอีกแห่งสำหรับแพลตฟอร์มรุ่นใหม่ และมี Sim แชตบอต AI ที่เปิดได้จากไอคอนแชตหลังล็อกอิน"
---

Little Hotelier ซ่อนฟีเจอร์ที่มีประโยชน์ที่สุดบางอย่างไว้ลึกลงไปหนึ่งหรือสองคลิก ได้แก่ การล็อกอินด้วย passkey ราคาต่ำสุดของที่พัก ลิงก์ booking engine ที่เปิดห้องที่ระบุได้ ปุ่ม flush สำหรับช่องทางที่ไม่ยอมอัปเดต และ audit log ที่บอกว่าใครเปลี่ยนอะไร นี่คือ 20 เคล็ดลับ: 14 ข้อเป็นฟีเจอร์ในตัว Little Hotelier (แต่ละข้อมีลิงก์ไปบทความช่วยเหลืออย่างเป็นทางการ) 4 ข้อเป็นสคริปต์เบราว์เซอร์ฟรีสำหรับสิ่งที่ระบบไม่มี และ 2 ข้อสำหรับเจ้าของที่ใช้แดชบอร์ด Hotelier Tools

::callout{type="info" title="แบบคลาสสิกหรือแพลตฟอร์ม?"}
บัญชีที่สร้างตั้งแต่พฤษภาคม 2025 (หรืออัปเกรดแล้ว) ใช้**แพลตฟอร์ม**ใหม่ของ Little Hotelier ส่วนบัญชีเก่าใช้เวอร์ชัน**คลาสสิก** ซึ่งมี[ศูนย์ช่วยเหลือของตัวเอง](https://helpcentre.littlehotelier.com/en/) ชื่อเมนูต่างกัน แต่ละเคล็ดลับจึงระบุเส้นทางตามเวอร์ชันที่บทความช่วยเหลืออธิบาย
::

## เคล็ดลับปฏิทินและงานแผนกต้อนรับ

### 1. อ่านปฏิทินได้ในพริบตา

เลือกมุมมอง **14 หรือ 28 วัน** จากเมนูแบบเลื่อนลง ในมุมมอง 14 วัน ปุ่ม `<`, `<<` และ `<<<` เลื่อนทีละ 1, 7 และ 14 วัน ส่วน **View today** พากลับมาที่วันนี้ สีบอกสถานะ: ส้มคือยืนยันแล้ว เขียวคือเช็คอินแล้ว เทาคือเช็คเอาท์แล้ว น้ำเงินคือยังไม่จัดห้อง แดงคือปิดห้อง **สามเหลี่ยมสีแดง**ที่มุมหมายความว่ายังมียอดค้างชำระ ([คู่มือปฏิทิน](https://help-platform.littlehotelier.com/en/articles/10397723-getting-started-with-calendar))

### 2. ใช้แถว Unallocated เพื่อรับจองเพิ่มได้อีกหนึ่งรายการ

เมื่อประเภทห้องดูเต็มแต่คืนไม่ต่อกัน ให้ย้ายการจองหนึ่งรายการไปที่ **Unallocated** (ยังไม่จัดห้อง) จัดเรียงการจองอื่นใหม่ แล้วลากกลับเข้าห้อง การจองที่ยังไม่จัดห้องยังถูกหักจากห้องว่าง การพักไว้ตรงนั้นจึงไม่ได้ทำให้ห้องกลับมาเปิดขาย ([คู่มือคลาสสิก](https://helpcentre.littlehotelier.com/en/articles/8673713-overview-of-the-front-desk-calendar))

### 3. พิมพ์แบบฟอร์มลงทะเบียนเป็นใบเช็คอิน

คลิกแว่นขยายบนการจอง แล้วเลือก **Print → Registration form** Little Hotelier แนะนำให้ใช้เป็นแบบฟอร์มเช็คอินสำเร็จรูป

### 4. ให้แม่บ้านมีรายงานของตัวเอง

เปิด **Reservations → Housekeeping** ทำเครื่องหมายแต่ละห้องเป็น **Cleaned**, **Uncleaned** หรือ **Skip cleaning** เพิ่มหมายเหตุห้อง สลับระหว่าง **Today**, **Tomorrow** หรือวันที่เลือก แล้วกด **Print report** สร้างผู้ใช้แยกสำหรับแม่บ้านพร้อมสิทธิ์ Front desk เพื่อให้เห็นสถานะแบบเรียลไทม์ ฟีเจอร์นี้ไม่มีในแอปมือถือ ([คู่มือแม่บ้าน](https://help-platform.littlehotelier.com/en/articles/12105307-how-to-manage-housekeeping-in-little-hotelier))

### 5. อ่านที่มาของการจองจากรหัสอ้างอิง

ตัวอักษรนำหน้ารหัสอ้างอิงการจองบอกแหล่งที่มา: **LH** คือแผนกต้อนรับหรือ booking engine ของคุณ, **BDC** คือ Booking.com, **EXP** คือ Expedia, **ABB** คือ Airbnb, **AGO** คือ Agoda และ **HWL** คือ Hostelworld ([คู่มือรายการจอง](https://help-platform.littlehotelier.com/en/articles/10700151-run-and-export-reservation-data)) มีประโยชน์ตอนกรองไฟล์ส่งออกใน Excel

## ราคา ข้อจำกัด และช่องทางขาย

### 6. ตั้งราคาต่ำสุดเพื่อไม่ให้ขายถูกเกินไป

ราคาต่ำสุดของที่พักป้องกันไม่ให้ราคาห้องใดๆ หรือส่วนลดใดๆ ที่จัดการใน Little Hotelier ต่ำกว่าค่านั้น บนแพลตฟอร์ม: **Setup → Property settings → General information** ไอคอนดินสอข้าง **Inventory** แล้ว **Minimum rate** ([คู่มือ](https://help-platform.littlehotelier.com/en/articles/13681648-set-a-minimum-rate-for-your-property)) บนแบบคลาสสิก: **Channel Manager** คลิกชื่อที่พักของคุณ แล้ว **Property settings → General** ([คู่มือ](https://helpcentre.littlehotelier.com/en/articles/8673933-set-a-minimum-rate-for-all-your-rooms)) แต่โปรโมชันที่คุณสร้างบน Booking.com หรือช่องทางอื่นโดยตรงยังตั้งต่ำกว่านี้ได้

### 7. ขายคืนว่างคั่นกลางที่เกิดจากจำนวนคืนขั้นต่ำ

ถ้าตั้งจำนวนคืนขั้นต่ำ (minimum stay) ไว้ 3 คืน มักเหลือช่องว่าง 2 คืนที่ไม่มีใครจองได้ วิธีแก้ของ Little Hotelier คือสร้างแผนราคาที่สองที่อิงจากแผนราคามาตรฐาน แต่แพงขึ้นเล็กน้อย (ตัวอย่างในคู่มือคือ +5%) กำหนดจำนวนคืนขั้นต่ำให้สั้นลง แล้วจับคู่กับช่องทางขายของคุณ ([คู่มือคืนว่างคั่นกลาง](https://help-platform.littlehotelier.com/en/articles/16780102-manage-gap-nights)) ส่วน CTA, CTD และ stop sell ทำงานอย่างไร ดู [CTA, CTD, จำนวนคืนขั้นต่ำ และ stop sell คืออะไร](/blog/little-hotelier-cta-ctd-stop-sell)

### 8. ส่ง "flush" เมื่อช่องทางไม่อัปเดต

บนแบบคลาสสิก **Setup → Property & Room Settings → Rooms & Rates** เลือกประเภทห้องหรือราคา แล้วกด **Flush** ที่ด้านล่าง ระบบจะส่งราคา ข้อจำกัด และห้องว่างไปยังทุกช่องทางอีกครั้ง หลังแก้ไขเล็กน้อยให้รอ 5 นาทีก่อนกด flush และแก้ข้อผิดพลาดในการจับคู่ (mapping) ให้เรียบร้อยก่อน ([คู่มือ flush](https://helpcentre.littlehotelier.com/en/articles/8947419-send-inventory-updates-to-channel-manager-send-a-flush))

### 9. หาว่าใครเปลี่ยนราคาหรือการจับคู่ช่องทาง

เปิดราคาห้องหรือช่องทาง แล้วเลือก **Audit** Lifecycle audit แสดงเวลาที่การตั้งค่าเปลี่ยนและอีเมลของผู้ใช้ที่เปลี่ยน แต่ไม่บันทึกราคา ค่าข้อจำกัด หรือการเปลี่ยนแปลงการจอง ([คู่มือ audit](https://help-platform.littlehotelier.com/en/articles/10660168-track-configuration-changes-with-the-lifecycle-audit-tool)) หากเจอ stop sell ที่ไม่รู้ว่ามาจากไหน ให้ตรวจ **Release period** ของราคานั้นก่อน ถ้าว่างอยู่ แปลว่า yield rule เป็นตัวปิดการขาย ([คู่มือ](https://help-platform.littlehotelier.com/en/articles/14177576-how-to-check-if-a-stop-sell-is-triggered-by-a-yield-rule))

## Booking engine และ Booking.com

### 10. ลิงก์ตรงไปยังห้อง ราคา หรือรหัสโปรโมชัน

เพิ่มพารามิเตอร์ต่อท้ายที่อยู่ booking engine ของคุณ

- `?room_type=ID` เปิดประเภทห้องหนึ่งประเภท (ID อยู่ใน URL ของประเภทห้องในหน้าตั้งค่า Direct Booking)
- `?promocode=CODE` ใช้รหัสโปรโมชัน
- `?ratePlanId=ID` แสดงแผนราคาหนึ่งแผน (Little Hotelier อธิบายวิธีหา ID ด้วยเครื่องมือนักพัฒนาของเบราว์เซอร์)

ที่อยู่ขึ้นต้นด้วย `direct-book.com/properties/` ในยุโรป แอฟริกา ตะวันออกกลาง และทวีปอเมริกา หรือ `book-directonline.com/properties/` ในเอเชียแปซิฟิก ([ลิงก์ห้องและโปรโมชัน](https://helpcentre.littlehotelier.com/en/articles/9451551-create-unique-links-for-your-booking-engine), [ลิงก์แผนราคา](https://help-platform.littlehotelier.com/en/articles/11935086-create-a-url-that-links-directly-to-a-rate-plan))

### 11. แจ้งบัตรไม่ถูกต้องหรือ no-show ของ Booking.com โดยไม่ต้องเข้า extranet

เปิดการจองจาก Booking.com ใน channel manager แล้วไปที่แท็บ **Manage Reservation** จากหน้านั้นคุณแจ้งว่าบัตรไม่ถูกต้อง ขอให้ Booking.com ยกเลิกการจองเพราะบัตรไม่ถูกต้อง หรือทำเครื่องหมาย no-show และเลือกว่าจะยกเว้นค่าธรรมเนียมหรือไม่ ([คู่มือ](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid)) กำหนดเวลาต่างๆ อยู่ใน [Booking.com บัตรไม่ถูกต้องหรือ no-show: ต้องทำอย่างไร](/blog/booking-com-invalid-card-no-show)

### 12. ทำให้แขกจาก Booking.com ได้รับอีเมลของคุณ

Booking.com บล็อกอีเมลจากระบบที่ไม่รู้จัก หากคุณส่งอีเมลยืนยันหรือคำขอชำระเงินจาก Little Hotelier ให้เพิ่ม `@app.littlehotelier.com` และ `@guestjoy.com` (และลิงก์ `siteminder.com` กับ `guestjoy.com`) ในรายชื่อที่อนุญาตของ extranet ที่ **Property → Messaging preferences → Security settings** ([ขั้นตอน](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist))

## ล็อกอิน ขอความช่วยเหลือ และส่งออกข้อมูล

### 13. ล็อกอินด้วย passkey แทนรหัส

MFA เป็นข้อบังคับ และ Little Hotelier ขอใหม่ทุก 30 วันหรือเมื่อใช้เบราว์เซอร์ใหม่ มีสองวิธีทำให้ไม่ยุ่งยาก ([คู่มือ MFA](https://help-platform.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa))

- **อนุมัติด้วยแอป Little Hotelier** คุณแตะตัวเลขที่ตรงกันแล้วยืนยันด้วยใบหน้าหรือลายนิ้วมือ ไม่รองรับรหัสทาง SMS และอีเมล
- **ใช้ passkey** ไอคอนโปรไฟล์ → **My account** → **Passkeys** → **Create passkey** แล้วล็อกอินด้วย **Continue with a passkey** ใช้ได้ในเว็บเบราว์เซอร์ (Chrome และ Edge 109+, Safari 16+) ไม่รองรับในแอปมือถือ และต้องตั้งค่า MFA ก่อน ([คู่มือ passkey](https://help-platform.littlehotelier.com/en/articles/12039017-how-to-set-up-and-log-in-with-passkeys))

ทุกคนควรมีผู้ใช้ของตัวเอง เพราะรหัส MFA เป็นของคนหนึ่งและอุปกรณ์หนึ่งเครื่อง

### 14. ถาม Sim ก่อนค้นหา และส่งออกก่อนถึงวันที่ 180

เมื่อล็อกอินแล้ว เปิดไอคอนแชตที่มุมขวาล่างแล้วเลือก **Ask a question** Sim แชตบอต AI ของ Little Hotelier ตอบจากศูนย์ช่วยเหลือตลอด 24 ชั่วโมงใน 8 ภาษา และส่งต่อให้เจ้าหน้าที่ได้ ถามทีละเรื่องให้ชัดเจน พร้อมระบุชื่อช่องทางและข้อความแจ้งข้อผิดพลาดแบบคำต่อคำ ([เคล็ดลับ](https://help-platform.littlehotelier.com/en/articles/9452186-tips-on-using-our-help-centre-and-ai-chatbot-for-support))

และนิสัยหนึ่งที่ควรสร้าง: ส่งออกรายการจองทุกเดือน รายละเอียดแขกถูกปิดบัง 180 วันหลังเช็คเอาท์ และไฟล์ส่งออกไม่มีเบอร์โทรศัพท์ ขั้นตอนทีละขั้น: [ส่งออกรายการจองไป Excel หรือ Google Sheets](/blog/export-little-hotelier-reservations-excel)

## ปรับแต่งด้วย userscript ฟรี

[userscript](/tools/ui) ฟรีเหล่านี้ทำงานในเบราว์เซอร์ด้วยส่วนขยาย Tampermonkey และเปลี่ยนเฉพาะสิ่งที่คุณเห็น ฟรีตลอดไป [คู่มือการติดตั้ง](/tools/ui/instructions)ใช้เวลาประมาณ 5 นาทีต่อหนึ่งสคริปต์

### 15. ดูราคาของคุณในปฏิทิน

[Prices Display](/tools/ui/prices-display) อ่านราคาจากหน้า inventory และแสดงใต้ประเภทห้องแต่ละแถวในปฏิทิน คุณจึงบอกราคาทางโทรศัพท์ได้โดยไม่ต้องสลับหน้าจอ

::screenshot{src="/images/scripts/prices-display/to.webp" alt="ปฏิทินของ Little Hotelier ภาษาสเปนมุมมอง 7 วัน การจองสีเขียว ส้ม และเทา และราคาต่อคืนของแต่ละประเภทห้องแสดงเป็นตัวเลขใหญ่ใต้ห้องของประเภทนั้น" caption="ด้วย Prices Display ราคาต่อคืนของแต่ละประเภทห้องอยู่ใต้ห้องของประเภทนั้นพอดี"}
::

### 16. ไม่ต้องกลับมาเจอหน้าที่ค้าง

หากคุณเปิด Little Hotelier ทิ้งไว้ที่แผนกต้อนรับแล้วกลับมาเจอข้อผิดพลาด [Auto Refresh On Inactivity](/tools/ui/auto-refresh-inactivity) จะโหลดหน้าใหม่หลังไม่มีการคลิก เลื่อน หรือขยับเมาส์ 10 นาที และไม่รีโหลดขณะที่คุณกำลังทำงาน

### 17. ดูค่าคอมมิชชั่น Booking.com ภายในรายการจอง

[Show Booking.com Commissions](/tools/ui/show-booking-commissions) เพิ่มรายละเอียดค่าคอมมิชชั่นโดยประมาณและยอดสุทธิโดยประมาณในทุกการจองจาก Booking.com ค่าคอมมิชชั่นจริงคิดอย่างไร ดูได้ใน [Booking.com หักค่าคอมมิชชั่นเท่าไร](/blog/booking-com-commission)

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="สรุปการจองใน Little Hotelier ภาษาสเปนที่มีบรรทัดเพิ่มสำหรับค่าธรรมเนียมการโอน ค่าคอมมิชชั่น Booking.com ค่าคอมมิชชั่นรวมพร้อม VAT และยอดสุทธิโดยประมาณ" caption="ประมาณการว่า Booking.com หักไปเท่าไรและคุณได้สุทธิเท่าไร ภายในรายการจอง"}
::

### 18. เห็นข้อมูลได้มากขึ้นบนหน้าจอ (และบนแท็บเล็ต)

- [Compact Calendar UI](/tools/ui/compact-calendar-ui) ใส่หัวคอลัมน์วันที่ไว้บรรทัดเดียวและย่อชื่อประเภทห้อง
- [Full Width Reservation Table](/tools/ui/full-width-reservation-table) ขยายรายการจองให้กว้างขึ้น คุณจะไม่ต้องเลื่อนไปด้านข้าง
- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens) ทำให้ปุ่มใหญ่ขึ้น และแสดงปุ่ม "remove room" ตลอดเวลา ซึ่งปกติปรากฏเมื่อเอาเมาส์ไปชี้เท่านั้น

สคริปต์ทั้งหมดพร้อมภาพก่อนและหลังอยู่ที่[หน้าส่วนขยายเบราว์เซอร์](/chrome-extensions) และใน[ส่วนขยาย Chrome ฟรีสำหรับ Little Hotelier](/blog/little-hotelier-chrome-extensions)

## สองเคล็ดลับสำหรับผู้ใช้แดชบอร์ด Hotelier Tools

Hotelier Tools เป็นแดชบอร์ดอิสระที่ทำงานเคียงข้าง Little Hotelier โดยใช้บัญชี Little Hotelier ของที่พักคุณเอง ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder หรือ Little Hotelier และใช้ฟรีสำหรับทุกโรงแรมจนถึงวันเริ่มเรียกเก็บเงิน 10 มกราคม 2027

### 19. กด Ctrl+K เพื่อค้นหาทุกอย่าง

**Ctrl+K** (**Cmd+K** บน Mac) ค้นหาได้ทั้งหน้า รายการในรายชื่อรอห้อง งานที่ตั้งเวลา และบทสนทนา ไม่สนเครื่องหมายเน้นเสียง (accent) และเข้าใจคำภาษาอังกฤษกับภาษาสเปนที่หมายถึงสิ่งเดียวกัน: "lista de espera" จะเจอ Availability Queue

::screenshot{src="/images/blog/demo/en/global-search-waitlist.webp" alt="หน้าต่างค้นหาที่เปิดด้วย Ctrl+K เหนือแดชบอร์ด Hotelier Tools ด้วยคำค้น waitlist และหน้าที่ตรงกัน เช่น Public waitlist form, Availability Queue, History, Do-not-rebook list และ Scheduled invoices โดยแต่ละหน้ามีป้ายบอกส่วนของมัน" caption="พิมพ์คำเดียวแล้วข้ามไปยังหน้าที่ต้องการได้ทันที" path="/"}
::

### 20. ให้ระบบตรวจทุกคืนว่าใครยังขาดเอกสารยืนยันตัวตนก่อนแขกมาถึง

**Automated checks** อ่านการจองที่กำลังจะมาถึง และแจ้งสิ่งที่ปกติคุณจะมาเจอตอนแขกยืนอยู่ที่แผนกต้อนรับ: ยังไม่จัดห้อง ขาดเอกสารยืนยันตัวตนหรือที่อยู่ ยอดค้างชำระ หรือแขกที่อยู่ในรายการห้ามรับจองซ้ำ ปัญหาไปรวมที่หน้า Issues หน้าเดียว และทุกครั้งที่รันจะส่งอีเมลรายงาน ดู[เช็คลิสต์ประจำวันของแผนกต้อนรับ](/blog/hotel-front-desk-checklist-automation)

::demo-cta{path="/automated-checks/issues"}
::

อ่านเพิ่มเติม: [MCP server คืออะไร](/blog/what-is-mcp-server-hotels), [การตั้งราคาแบบไดนามิกบน Little Hotelier](/blog/dynamic-pricing-little-hotelier), [ดาวน์โหลดใบแจ้งหนี้ทั้งหมดในครั้งเดียว](/blog/download-all-little-hotelier-invoices), [กฎการลงทะเบียนแขกแยกตามประเทศ](/blog/guest-registration-rules-by-country), [การใช้ WhatsApp กับ Little Hotelier](/blog/whatsapp-little-hotelier), [ทางเลือกอื่นแทน Little Hotelier](/blog/little-hotelier-alternatives), [แดชบอร์ด Hotelier Tools](/tools/bot/dashboard), [ระบบอัตโนมัติของ Hotelier Tools](/tools/bot/automations)

## สรุป

- **ประหยัดเวลาที่สุด:** passkey รายงานแม่บ้าน และลิงก์ตรงของ booking engine
- **ประหยัดเงินที่สุด:** ราคาต่ำสุดของที่พัก และแผนราคาสำหรับคืนว่างคั่นกลาง
- **เมื่อช่องทางขายทำงานผิดปกติ:** flush แล้วตรวจ audit log และ release period
- **สำหรับสิ่งที่ Little Hotelier ไม่มี:** userscript ฟรีสำหรับราคาในปฏิทินและค่าคอมมิชชั่น Booking.com และ[การเชื่อมต่อ](/blog/little-hotelier-integrations)สำหรับที่เหลือ
