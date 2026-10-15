---
title: "อัปเดตปุ่มลิงก์ชำระเงิน"
description: "ตั้งป้ายปุ่มลิงก์ชำระเงินของ Little Hotelier ให้ชัดเจนขึ้น และเพิ่มเบอร์โทรของแขกจากการจองลงในลิงก์ ไม่ต้องพิมพ์ซ้ำ"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/update-payment-link-button/from.png"
  after: "/images/scripts/update-payment-link-button/to.png"
  gallery:
    - "/images/scripts/update-payment-link-button/from.png"
    - "/images/scripts/update-payment-link-button/to.png"
---

สคริปต์นี้ปรับปรุงปุ่มลิงก์ชำระเงินบนหน้าจอการจองของ Little Hotelier โดยตั้งป้ายปุ่มให้ชัดเจนขึ้น และเพิ่มเบอร์โทรศัพท์ของแขกจากการจองลงในลิงก์ชำระเงิน เหมาะสำหรับเจ้าหน้าที่แผนกต้อนรับที่ขอให้แขกชำระเงินมัดจำหรือยอดคงเหลือด้วยบัตรผ่านลิงก์ชำระเงิน

## ปัญหาที่สคริปต์นี้แก้

ถ้อยคำมาตรฐานของปุ่มขอชำระเงินไม่ได้ทำให้เจ้าหน้าที่ทุกคนเข้าใจชัดว่านี่คือวิธีขอให้แขกชำระเงินด้วยบัตร และเบอร์โทรของแขกที่บันทึกไว้ในการจองอยู่แล้วก็ไม่ถูกนำไปใส่ในลิงก์ชำระเงิน ต้องกรอกอีกครั้ง ทั้งสองอย่างเสียเวลาขณะที่แขกรออยู่ทางโทรศัพท์

## สิ่งที่เปลี่ยนไป

บนหน้าจอการจองใน Front Desk:

- ปุ่มขอชำระเงินถูกเปลี่ยนชื่อเป็น **Generate Payment Link** หรือ **Cobrar con tarjeta por correo electronico (Email)** เมื่อ Little Hotelier เป็นภาษาสเปน
- เบอร์ในช่องโทรศัพท์ของแขกจะถูกเพิ่มลงในลิงก์ของปุ่มเป็นพารามิเตอร์โทรศัพท์ โดยตัดช่องว่างและเครื่องหมาย "+" ออก
- หาก Little Hotelier สร้างลิงก์ใหม่ สคริปต์จะทำการเปลี่ยนอีกครั้ง
- หากลิงก์มีเบอร์โทรอยู่แล้ว จะไม่แตะต้อง

## วิธีติดตั้ง

ติดตั้งส่วนขยาย Tampermonkey ซึ่งใช้งานได้ฟรี กด **ติดตั้งบน Tampermonkey** ในหน้านี้ ยืนยัน แล้วโหลด Little Hotelier ใหม่ [คู่มือการติดตั้ง](/tools/ui/instructions) แสดงทุกขั้นตอน สคริปต์ทำงานบนหน้า Front Desk ที่ app.littlehotelier.com และทำงานเฉพาะเมื่อการจองมีปุ่มขอชำระเงิน ใช้งานได้ฟรีและเป็นโอเพนซอร์ส: [อ่านโค้ดบน GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/updateGeneratePaymentLinkButton.user.js)

## ข้อควรรู้

- สคริปต์เปลี่ยนเฉพาะข้อความและลิงก์ของปุ่ม การชำระเงินยังจัดการโดย Little Hotelier ตามปกติ และสคริปต์ไม่เห็นรายละเอียดบัตรเลย
- สคริปต์อ่านช่องโทรศัพท์ครั้งเดียว ทันทีที่เพิ่มเบอร์ลงในลิงก์ หากคุณพิมพ์หรือแก้เบอร์ภายหลัง ลิงก์จะยังคงค่าแรกที่อ่านไว้ ดังนั้นให้บันทึกการจองและโหลดใหม่ก่อนใช้ปุ่ม
- เบอร์ถูกเพิ่มเป็นตัวเลขล้วน ดังนั้นควรใส่รหัสประเทศในช่องโทรศัพท์ของการจอง
- ป้ายมีเฉพาะภาษาอังกฤษและสเปน ภาษาอื่นของอินเทอร์เฟซจะแสดงป้ายภาษาอังกฤษ
- สคริปต์ไม่เก็บข้อมูลและไม่ส่งข้อมูลออกนอก Little Hotelier

## เรื่องที่เกี่ยวข้อง

- [ปุ่มอีเมลโอนเงินผ่านธนาคาร](/tools/ui/bank-transfer-email-button)
- [วิธีใช้ WhatsApp กับ Little Hotelier (ปี 2026)](/blog/whatsapp-little-hotelier)
- [ส่วนขยาย Chrome ฟรีที่ทำให้ Little Hotelier เร็วขึ้น](/blog/little-hotelier-chrome-extensions)
