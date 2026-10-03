---
title: "Booking.com บัตรไม่ถูกต้อง และ no show ทำอย่างไร"
seoTitle: "Booking.com บัตรเครดิตไม่ถูกต้อง / no show ทำอย่างไร"
description: "แจ้งบัตรไม่ถูกต้อง รอแขก 24 ชั่วโมง แล้วยกเลิกโดยไม่เสียคอมมิชชั่น พร้อมกำหนดเวลา no show บัตรเสมือนถูกปฏิเสธ และวิธีรู้ก่อนแขกมาถึง"
date: 2026-10-03
category: operations
tags: [booking.com, no-show, payments, little hotelier, automated checks]
keywords: [no show โรงแรม คือ, ค่า no show คือ, ลด no show คือ, booking.com บัตรเครดิตไม่ถูกต้อง, booking.com ค่า no show, booking.com virtual card ถูกปฏิเสธ, แจ้งบัตรเครดิตไม่ถูกต้อง booking.com]
feature: automated-checks
demoPath: /automated-checks/issues
cover: /images/blog/demo/en/automated-checks-issues.webp
coverAlt: "หน้า Issues ใน Hotelier Tools แสดงปัญหาที่ยังเปิดอยู่ 20 รายการ แก้ไขแล้ว 5 รายการ รวม 25 รายการ พร้อมรายการจองที่มียอดค้างชำระตอนเช็คอินและปุ่ม Verify"
faq:
  - q: "แขกมีเวลานานแค่ไหนในการอัปเดตบัตรที่ไม่ถูกต้องบน Booking.com"
    a: "24 ชั่วโมงนับจากที่คุณแจ้งว่าบัตรไม่ถูกต้อง ถ้าแขกจองภายใน 48 ชั่วโมงก่อนเช็คอิน จะมีเวลา 12 ชั่วโมงหรือจนถึง 15:00 น. ตามเวลาของที่พักในวันเช็คอิน แล้วแต่อย่างใดจะถึงก่อน ส่วนการจองกะทันหันที่พักตั้งแต่ 10 คืนขึ้นไปจะมีเวลา 2 ชั่วโมง"
  - q: "ถ้ายกเลิกเพราะบัตรไม่ถูกต้อง ต้องจ่ายคอมมิชชั่นไหม"
    a: "ไม่ต้อง Booking.com ไม่คิดคอมมิชชั่นจากการจองที่คุณเรียกเก็บเงินแขกไม่ได้ และได้แจ้งบัตรว่าไม่ถูกต้องใน Extranet แล้ว"
  - q: "แจ้งบัตรไม่ถูกต้องจาก Little Hotelier ได้ไหม"
    a: "ได้ เปิดการจองจาก Booking.com ที่ My Apps > Channel Manager > Reservation ไปที่แท็บ Manage Reservation แล้วคลิก Report payment card as invalid to Booking.com แท็บเดียวกันนี้ใช้ขอยกเลิกการจองหรือระบุ no-show ได้ด้วย"
  - q: "ถ้าพลาดช่วง 48 ชั่วโมงสำหรับการระบุ no-show จะเป็นอย่างไร"
    a: "ปุ่ม Mark as a no-show จะหายไปหลังวันเช็คเอาต์ตามแผน 48 ชั่วโมง และ Booking.com จะคิดคอมมิชชั่นเต็มจำนวนจากการจองเดิม หากระบุไม่ทันให้ติดต่อฝ่ายบริการลูกค้าของ Booking.com ผ่าน Extranet"
  - q: "ค่า no show มี VAT ไหม"
    a: "ขึ้นกับกฎภาษีของประเทศคุณ ควรสอบถามนักบัญชี สิ่งที่ Booking.com ระบุไว้คือ จะคิดคอมมิชชั่นจากค่า no show หรือค่ายกเลิกที่คุณเรียกเก็บจากแขก"
  - q: "Hotelier Tools ยกเลิกการจองหรือตัดบัตรแทนฉันได้ไหม"
    a: "ไม่ได้ การตรวจสอบอัตโนมัติแค่รายงานปัญหา เช่น ยอดค้างชำระก่อนเช็คอิน แล้วคุณเป็นคนตัดสินใจเอง Hotelier Tools เป็นอิสระและเชื่อมต่อด้วยบัญชี Little Hotelier ของโรงแรมคุณเอง"
---

ให้แจ้งว่าบัตรไม่ถูกต้องใน Booking.com Extranet, แอป Pulse หรือ Channel Manager ของ Little Hotelier จากนั้นแขกจะมีเวลา 24 ชั่วโมงในการส่งบัตรใบใหม่ (12 ชั่วโมงถ้าจองภายใน 48 ชั่วโมงก่อนเช็คอิน) ถ้าไม่ส่ง คุณยกเลิกได้โดยไม่เสียคอมมิชชั่น ส่วนแขกที่ไม่มาพัก ให้ระบุ no-show ตั้งแต่เที่ยงคืนของวันเช็คอินจนถึง 48 ชั่วโมงหลังวันเช็คเอาต์ตามแผน แล้วเลือกว่าจะเรียกเก็บหรือยกเว้นค่า no show

ขั้นตอนและกำหนดเวลาด้านล่างตรวจสอบกับ Partner Help ของ Booking.com ณ เดือนตุลาคม 2026

## ก่อนอื่น: ใครเป็นผู้เก็บเงิน

สิ่งที่คุณทำได้ขึ้นกับวิธีชำระเงินของแขก

- **คุณถือบัตรของแขก** (คุณเป็นผู้เก็บเงินเอง) ใช้ขั้นตอนในสามหัวข้อถัดไป
- **Booking.com เก็บเงินออนไลน์** แล้วจ่ายให้คุณด้วยบัตรเสมือน (VCC) หรือโอนเงิน กรณีนี้ไม่มีบัตรให้แจ้งว่าไม่ถูกต้อง ถ้าบัตรเสมือนถูกปฏิเสธ ดูหัวข้อบัตรเสมือนด้านล่าง
- **Smart Pay-at-Property** (Payments by Booking.com ใน EEA และบางภูมิภาค สำหรับการจองที่ไม่ได้ชำระล่วงหน้า) Booking.com ตรวจสอบบัตรเอง และให้แขกมี 24 ชั่วโมงในการเปลี่ยนบัตร คุณแจ้งบัตรไม่ถูกต้องเองไม่ได้ Booking.com จะแจ้งเมื่อคุณยกเลิกได้ ([Partner Help: Handling invalid credit cards](https://partner.booking.com/en-us/help/payments-payouts-invoices/guest-payments/handling-invalid-credit-cards))

## วิธีแจ้งว่าบัตร Booking.com ไม่ถูกต้อง

ทำทันทีที่การตัดเงินหรือการตรวจสอบบัตรไม่ผ่าน เวลาของแขกจะเริ่มนับเมื่อคุณแจ้งเท่านั้น

### ใน Extranet

1. เข้าสู่ระบบ Extranet
2. คลิก **Reservations** แล้วคลิกชื่อแขกหรือหมายเลขการจอง
3. เลือก **Mark credit card invalid**

### ในแอป Pulse

1. แตะ **Bookings** แล้วแตะชื่อแขก
2. เลื่อนลงไปที่ **Payment – credit card**
3. แตะ **Mark credit card invalid**

### จาก Little Hotelier

1. ไปที่ **My Apps > Channel Manager > Reservation**
2. เปิดการจองจาก Booking.com แล้วคลิกแท็บ **Manage Reservation**
3. คลิก **Report payment card as invalid to Booking.com** หน้าต่างสีเขียวหมายถึงสำเร็จ หน้าต่างสีแดงหมายถึงควรตรวจสอบใน Extranet ([ศูนย์ช่วยเหลือ Little Hotelier](https://helpcentre.littlehotelier.com/en/articles/9303299-report-a-booking-com-reservation-as-a-no-show-or-payment-invalid))

จากนั้น Booking.com จะส่งอีเมลและข้อความถึงแขกเพื่อขอข้อมูลบัตรใหม่ และส่งอีเมลหาคุณเมื่อแขกอัปเดตแล้ว จดสิ่งที่คุณลองทำไว้ในโน้ตของการจอง (วันที่ จำนวนเงิน เหตุผลที่ถูกปฏิเสธ) จะช่วยคนที่เข้าเวรต่อ

## แขกมีเวลาอัปเดตบัตรนานแค่ไหน

| การจอง | เวลาส่งบัตรที่ถูกต้อง | หลังจากนั้น |
|---|---|---|
| ปกติ | 24 ชั่วโมง | ยกเลิกได้จนถึง 15:00 น. (เวลาของที่พัก) ในวันเช็คอิน |
| จองภายใน 48 ชั่วโมงก่อนเช็คอิน | 12 ชั่วโมง หรือจนถึง 15:00 น. ของวันเช็คอิน แล้วแต่อย่างใดถึงก่อน | ยกเลิกได้ |
| จองภายใน 48 ชั่วโมงก่อนเช็คอิน และพัก 10 คืนขึ้นไป | 2 ชั่วโมง | ยกเลิกได้ |

ถ้าแขกส่งบัตรที่ไม่ถูกต้องอีกใบ คุณก็ยกเลิกได้เช่นกัน Booking.com ไม่คิดคอมมิชชั่นจากการจองที่คุณแจ้งว่าบัตรไม่ถูกต้อง ([Understanding your commission](https://partner.booking.com/en-us/help/commission-invoices-tax/invoices/understanding-your-commission))

## วิธียกเลิกการจองที่บัตรไม่ถูกต้อง

ยกเลิกผ่าน Booking.com เพื่อให้มีการบันทึกเหตุผล

- **Extranet:** เปิดการจองแล้วคลิก **Cancel this reservation** ปุ่มนี้จะปรากฏเมื่อการจองเข้าเงื่อนไขเท่านั้น
- **Pulse:** เปิดการจองแล้วแตะ **Request to cancel reservation**
- **Little Hotelier:** ที่แท็บ **Manage Reservation** คลิก **Request cancellation of reservation to Booking.com due to invalid payment card** แล้วรอการยืนยันการยกเลิกจาก Booking.com

ห้องคืนเหล่านั้นจะกลับมาขายได้อีกครั้ง ถ้าคุณมีรายชื่อแขกที่รอวันที่นั้นอยู่ ตอนนี้คือเวลาโทรหาคนแรก ดู[วิธีทำรายชื่อรอสำหรับวันที่เต็ม](/blog/hotel-waitlist-sold-out-dates)

### หรือขอให้แขกจ่ายด้วยวิธีอื่นก่อน

คุณอาจอยากรักษาการจองไว้ ด้วย Little Hotelier Pay ปุ่ม **Send Payment Request** ในการจองจะสร้างหน้าชำระเงินที่ปลอดภัยสำหรับยอดค้างหรือการชำระที่ล้มเหลว ส่งทางอีเมลหรือแชร์เป็นลิงก์ได้ ใช้ได้กับการจองที่คุณเก็บเงินเอง ไม่ใช้กับการจองที่ช่องทางขายเป็นผู้เก็บเงินหรือบัตรเสมือนของ Booking.com ([Payment requests](https://helpcentre.littlehotelier.com/en/articles/8673558-little-hotelier-pay-payment-requests))

มีสองเรื่องที่ควรตรวจสอบ

- **Allowlist ของ Booking.com** Booking.com บล็อกอีเมลและลิงก์จากระบบที่คุณไม่ได้อนุมัติ เพิ่มโดเมนของ Little Hotelier ที่ **Property > Messaging preferences > Security settings** ใน Extranet ไม่เช่นนั้นคำขอจะไม่ถึงแขก ([วิธีทำ](https://helpcentre.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist))
- **เบอร์โทรศัพท์** ตั้งแต่ 28 กันยายน 2026 Booking.com ไม่ส่งเบอร์โทรของแขกให้ channel manager อีกต่อไป การจองใหม่จาก Booking.com จึงเข้ามาใน Little Hotelier โดยไม่มีเบอร์ ([Booking.com for developers](https://developers.booking.com/connectivity/docs/migration-guides/migrating-to-new-versions)) คัดลอกจาก Extranet ด้วย **Show phone number** ในรายละเอียดการจอง

สคริปต์ฟรี [Update Payment Link Button](/tools/ui/update-payment-link-button) ช่วยให้ปุ่มคำขอชำระเงินมีป้ายชื่อที่ชัดเจนขึ้น และเพิ่มเบอร์โทรจากการจองลงในคำขอ

::screenshot{src="/images/scripts/update-payment-link-button/to.png" alt="สรุปการจองใน Little Hotelier (หน้าจอภาษาสเปน) ที่ปุ่มคำขอชำระเงินเปลี่ยนเป็นข้อความ Cobrar con tarjeta por correo electronico (Email)" caption="สคริปต์ Update Payment Link Button เปลี่ยนชื่อปุ่มคำขอชำระเงิน (Generate Payment Link ในภาษาอังกฤษ) และส่งเบอร์โทรของแขกไปด้วย" width="618" height="484"}
::

## บัตรเสมือน (virtual card) ของ Booking.com ถูกปฏิเสธ: ต้องตรวจอะไร

บัตรเครดิตเสมือนคือบัตร Mastercard ดิจิทัลชั่วคราวที่ Booking.com ใช้จ่ายเงินให้คุณเมื่อรับเงินจากแขกไปแล้ว บัตรของการจองแบบไม่คืนเงินจะใช้ได้ตั้งแต่วันที่จอง ส่วนบัตรอื่นจะเปิดใช้เมื่อการจองไม่คืนเงินอย่างน้อย 90% ประมาณ 30 นาทีหลังการตัดเงินล้มเหลว เหตุผลจะแสดงใน **Reservation details** ([Getting paid with virtual credit cards](https://partner.booking.com/en-us/help/commission-invoices-tax/payment-products/getting-paid-virtual-credit-cards-vccs-when-using))

| ข้อความหรืออาการ | สิ่งที่ควรทำ |
|---|---|
| "Can't be authorized prior to activation date" | บัตรยังไม่เปิดใช้ ตรวจวันเปิดใช้ในหน้า Reservations ของ Extranet |
| "Insufficient funds" | คุณตัดเงินเกินวงเงินในบัตร อาจไม่รวมภาษีต่อหัว ซึ่งต้องเก็บจากแขกเอง |
| CVC หรือวันหมดอายุไม่ถูกต้อง | กรอกใหม่อย่างระมัดระวัง |
| "Invalid merchant" | เครื่องรูดบัตรของคุณต้องลงทะเบียนเป็นผู้ให้บริการที่พัก โทรหาผู้ให้บริการชำระเงินของคุณ |
| ระบบล็อกเพื่อความปลอดภัย | ลองผิดหลายครั้งเกินไป ลองอีกครั้งใน 24-48 ชั่วโมง |

อย่า pre-authorize บัตรเสมือน ถ้าเผลอทำไปแล้ว ให้ชำระยอดด้วยรหัสอนุมัติ (authorization code) หรือยกเลิกการอนุมัติแล้วตัดเงินใหม่ ถ้ายังถูกปฏิเสธ ให้สอบถามรหัสการปฏิเสธจากผู้ให้บริการชำระเงิน แล้วเขียนถึง Booking.com จากกล่องข้อความใน Extranet

## วิธีระบุ no-show และเรียกเก็บ (หรือยกเว้น) ค่า no show

no show คือแขกที่ยังไม่มาถึงภายในเที่ยงคืนของวันเช็คอินตามแผน คุณระบุได้ตั้งแต่เที่ยงคืนของวันเช็คอินจนถึง 48 ชั่วโมงหลังวันเช็คเอาต์ตามแผน ([Marking guest no-shows](https://partner.booking.com/en-us/help/reservations/manage-reservations/marking-guest-no-shows-your-property))

**ใน Extranet:**

1. คลิก **Reservations** แล้วเปิดการจอง
2. ใต้ **Reservation actions** เลือก **Mark as a no-show**
3. ตอบคำถาม "Would you like to waive the no-show fee for this reservation?" ด้วย **Yes, waive fee** หรือ **No, charge fee**
4. คลิก **Mark as a no-show** เพื่อยืนยัน

**ใน Pulse:** **Bookings** > เลือกการจอง > **Mark as a no-show** > **Yes**

**จาก Little Hotelier:** ที่แท็บ **Manage Reservation** ของการจอง คลิก **Request Booking.com to mark reservation as a no-show** ยกเลิกเครื่องหมายห้องที่แขกมาพักจริง เลือก **Yes** หรือ **No** สำหรับค่าธรรมเนียมของแต่ละห้อง แล้วคลิก **Yes, mark as a no-show**

ค่าใช้จ่ายที่เกิดกับคุณ

- **เรียกเก็บค่า no show:** คุณจ่ายคอมมิชชั่นจากค่าธรรมเนียมนั้น
- **ยกเว้นค่า no show และระบุทันเวลา:** ไม่มีคอมมิชชั่น
- **ไม่ระบุภายใน 48 ชั่วโมงหลังเช็คเอาต์:** คอมมิชชั่นเต็มจำนวนจากการจองเดิม
- **ใช้ Payments by Booking.com:** Booking.com พยายามเก็บค่า no show สำหรับการจองที่ไม่ได้ชำระล่วงหน้าแล้วจ่ายให้คุณ ถ้าเก็บไม่ได้ จะยกเว้นคอมมิชชั่น ในกรณีที่ Booking.com เก็บค่า no show ของการจองที่ยกเลิกฟรีได้ ให้ระบุภายในสี่วันตามปฏิทินนับจากวันเช็คอิน ([Payments by Booking.com](https://partner.booking.com/en-us/help/payments-payouts-invoices/payments-bookingcom/joining-payments-bookingcom))

## วิธีรู้ปัญหาการชำระเงินก่อนแขกมาถึง

Booking.com จะส่งอีเมลแจ้งเรื่องบัตรไม่ถูกต้อง และส่วน **Reservations** ใน Extranet จะแสดงรายการจองที่มีปัญหานี้ แอปมือถือของ Little Hotelier ส่งแจ้งเตือนการจองใหม่ การเช็คอิน และการยกเลิกได้ ([notifications](https://helpcentre.littlehotelier.com/en/articles/12055494-notifications-in-the-little-hotelier-mobile-app)) สิ่งที่ยังเหลือคือการไล่เปิดแขกที่ใกล้มาถึงทีละราย เพื่อดูว่าใครยังค้างชำระ

**วิธีที่เร็วกว่า:** การตรวจสอบอัตโนมัติ (beta) ของ Hotelier Tools ทำรอบนี้ให้คุณ

1. เปิด **Automated Checks > Before they arrive** (`/automated-checks/moment/before_arrival`) ระบบอ่านรายการแขกที่มาถึงตั้งแต่วันนี้ถึง 7 วันข้างหน้า (เลือกได้ 1-60 วัน) และตรวจการชำระเงิน การจัดห้อง และรายชื่อห้ามรับกลับ
2. กด **Create the task** หรือ **Use the recommended schedule** ทุกครั้งที่รันจะเข้าสู่ระบบ Little Hotelier จึงรันได้อย่างมากชั่วโมงละหนึ่งครั้ง
3. เปิด **Issues** (`/automated-checks/issues`) ปัญหาถูกจัดกลุ่มตามการจอง เช่น ยอดค้างชำระตอนเช็คอิน
4. แก้ไข: ตัดบัตร ส่งคำขอชำระเงิน หรือแจ้ง Booking.com ว่าบัตรไม่ถูกต้อง แล้วกด **Verify** เพื่อตรวจการจองนั้นอีกครั้ง
5. ทุกครั้งที่รันยังส่งอีเมลรายงานหนึ่งฉบับ คุณจึงไม่ต้องเปิดหน้าเว็บ

::screenshot{src="/images/blog/demo/en/automated-checks-reservation-issues.webp" alt="การจองหนึ่งรายการในหน้า Issues: ชื่อแขก ลิงก์การจองและห้อง วันที่เข้าพัก ลิงก์ Do not rebook และคำเตือน outstanding_balance_check สำหรับยอดค้าง 400.36 ยูโรตอนเช็คอิน (ข้อความเป็นภาษาสเปน) พร้อมโน้ตที่เพิ่มในการจองและปุ่ม Verify" caption="แขกที่มาถึงแล้วยังค้างชำระ จัดกลุ่มตามการจอง แก้ไขใน Little Hotelier แล้วกด Verify" path="/automated-checks/issues" width="1080" height="182"}
::

การตรวจ **When they leave** จะดูยอดคงเหลืออีกครั้งตอนเช็คเอาต์ การตรวจสอบเหล่านี้อ่านข้อมูลจาก Little Hotelier ไม่ใช่ Booking.com จึงแจ้งยอดค้างชำระที่เกิดจากบัตรล้มเหลว ไม่ได้แจ้งสถานะบัตรไม่ถูกต้องของ Booking.com และไม่เคยยกเลิกการจองหรือตัดบัตร

::demo-cta{path="/automated-checks/issues"}
::

กิจวัตรประจำวันฉบับเต็มอยู่ใน[เช็กลิสต์ฟรอนต์เดสก์: 8 ปัญหาที่ควรจับก่อนแขกมาถึง](/blog/hotel-front-desk-checklist-automation) และทุกการตรวจสอบอยู่ในหน้า[Automated checks](/tools/bot/automated-checks) Hotelier Tools ใช้ฟรีสำหรับทุกโรงแรมจนถึงวันที่เริ่มเรียกเก็บเงิน 10 มกราคม 2027

::callout{type="info" title="เครื่องมืออิสระ"}
Hotelier Tools ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก Booking.com, SiteMinder หรือ Little Hotelier โดยเชื่อมต่อด้วยบัญชี Little Hotelier ของโรงแรมคุณเอง
::

### ควรเพิ่มแขกเข้ารายชื่อห้ามรับกลับ (do-not-rebook) ไหม

ถ้าแขกจากไปโดยไม่จ่ายเงิน หรือให้บัตรที่ใช้ไม่ได้ซ้ำแล้วซ้ำอีก คุณอาจไม่อยากรับกลับมาอีก ที่หน้า **Issues** กด **Do not rebook…** ในการจองของเขา เลือกแขก ระดับความรุนแรง (เช่น **Do not accept again**) และเหตุผลที่เป็นข้อเท็จจริง หลังจากนั้นเมื่อมีการจองใหม่ที่ตรงกัน ระบบจะแจ้งเตือน

มันแค่แจ้งเตือน ไม่เคยยกเลิกหรือปฏิเสธการจอง คนเป็นผู้ตัดสินใจ ชื่ออย่างเดียวไม่ถือว่าตรงกัน ต้องเป็นเลขเอกสารเดียวกัน อีเมลตรงทุกตัวอักษร หรือเบอร์โทรที่ตรงกัน 8 หลักสุดท้าย (หรือชื่อบวกสัญชาติหรือวันเกิดเดียวกัน) เขียนเหตุผลเป็นข้อเท็จจริงเท่านั้น อ่านเพิ่มที่[วิธีทำรายชื่อห้ามให้เช่าอย่างถูกกฎหมาย](/blog/hotel-do-not-rent-list)

## สรุป

- บัตรล้มเหลว: แจ้งว่าไม่ถูกต้อง (Extranet, Pulse หรือแท็บ **Manage Reservation** ของ Little Hotelier) แขกมี 24 ชั่วโมง 12 ชั่วโมงสำหรับการจองใกล้วัน และ 2 ชั่วโมงสำหรับการจองกะทันหันตั้งแต่ 10 คืนขึ้นไป
- ไม่มีบัตรที่ใช้ได้: ยกเลิกผ่าน Booking.com โดยไม่เสียคอมมิชชั่น หรือส่งคำขอชำระเงินก่อน
- แขกไม่มา: ระบุ no-show ภายใน 48 ชั่วโมงหลังวันเช็คเอาต์ตามแผน แล้วเลือกเรียกเก็บหรือยกเว้นค่า no show
- รู้ก่อน: ให้การตรวจสอบที่ตั้งเวลาไว้ไล่ดูแขกที่ยังค้างชำระล่วงหน้าหลายวันก่อนมาถึง
