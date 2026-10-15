---
title: "เพิ่มปุ่มตรวจสอบ Front Desk จาก Direct Booking"
description: "เพิ่มปุ่มในการจอง Direct Booking บน Little Hotelier เพื่อเปิดการจองเดียวกันใน Front Desk ดูรายละเอียดและตรวจสอบการคืนเงินได้ทันที"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/add-button-check-front-desk/from.webp"
  after: "/images/scripts/add-button-check-front-desk/to.webp"
  gallery:
    - "/images/scripts/add-button-check-front-desk/from.webp"
    - "/images/scripts/add-button-check-front-desk/to.webp"
    - "/images/scripts/add-button-check-front-desk/from2.webp"
    - "/images/scripts/add-button-check-front-desk/to2.webp"
---

สคริปต์นี้เพิ่มปุ่มให้ทุกการจองใน extranet Direct Booking ของ Little Hotelier เมื่อกดแล้วจะเปิดการจองเดียวกันใน Front Desk ในแท็บใหม่ เหมาะสำหรับเจ้าหน้าที่แผนกต้อนรับและเจ้าของที่พักที่ดูแลการจองโดยตรง และต้องการตรวจสอบรายละเอียดการจองทั้งหมดหรือดูการคืนเงินโดยไม่ต้องค้นหาเอง

## ปัญหาที่สคริปต์นี้แก้

Direct Booking (หลังบ้านของระบบจองบนเว็บไซต์ ที่ app.thebookingbutton.com) และ Front Desk เป็นคนละหน้าจอกัน เมื่อแขกที่จองผ่านเว็บไซต์ของคุณโทรมาขอเปลี่ยนแปลงหรือขอคืนเงิน คุณจะพบการจองใน Direct Booking แต่ข้อมูลห้อง การชำระเงิน และรายละเอียดผู้เข้าพักอยู่ใน Front Desk หากไม่มีสคริปต์ คุณต้องคัดลอกรหัสอ้างอิง สลับไปที่ Front Desk แล้วค้นหาด้วยตัวเอง

## สิ่งที่เปลี่ยนไป

- ในแท็บ **Guest** ของการจอง Direct Booking จะมีปุ่มใหม่ในรายการการดำเนินการ: "View reservation data in Front Desk and check refunds" (หรือข้อความภาษาสเปน)
- ปุ่มจะเปิดรายการ **Reservations** ของ Front Desk ในแท็บใหม่ โดยกรองด้วยรหัสอ้างอิงการจองนั้นไว้ให้แล้ว
- การค้นหาครอบคลุมวันเช็คอินตั้งแต่สองเดือนที่แล้วจนถึงหนึ่งปีข้างหน้า จึงพบทั้งการเข้าพักที่ผ่านมาไม่นานและที่กำลังจะมาถึง
- สคริปต์อ่านรหัสที่พัก (property ID) จากลิงก์ Front Desk บนหน้า ผลการค้นหาจึงเปิดในที่พักของคุณเอง
- สคริปต์ตรวจสอบหน้าทุกสองวินาที เมื่อคุณเปลี่ยนไปดูการจองอื่น ปุ่มจะอัปเดตให้ชี้ไปที่รหัสอ้างอิงของการจองใหม่

## วิธีติดตั้ง

คุณต้องมีส่วนขยาย Tampermonkey ซึ่งใช้งานได้ฟรี กด **ติดตั้งบน Tampermonkey** ในหน้านี้ ยืนยัน แล้วโหลด Direct Booking ใหม่ [คู่มือการติดตั้ง](/tools/ui/instructions) แสดงทุกขั้นตอน สคริปต์ทำงานเฉพาะหน้าการจองของ Direct Booking (app.thebookingbutton.com/extranet/properties/.../reservations) ใช้งานได้ฟรีและเป็นโอเพนซอร์ส คุณ[อ่านโค้ดบน GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/addButtonCheckOnFrontDesk.user.js)ได้

## ข้อควรรู้

- สคริปต์ไม่ตรวจสอบว่าคุณเข้าสู่ระบบ Front Desk อยู่หรือไม่ หากยังไม่ได้เข้าสู่ระบบ ให้เข้าสู่ระบบแล้วกดปุ่มอีกครั้ง
- การจองที่มีวันเช็คอินย้อนหลังเกินสองเดือน หรือล่วงหน้าเกินหนึ่งปี อยู่นอกช่วงการค้นหาและจะไม่ปรากฏในผลลัพธ์
- หากไม่มีลิงก์ Front Desk บนหน้า สคริปต์จะใช้รหัสที่พักคงที่ที่เขียนไว้ในโค้ดแทน และผลการค้นหาจะไม่เปิดในที่พักของคุณ หากเกิดกรณีนี้ ให้แก้ค่านั้นในสคริปต์
- ข้อความบนปุ่มมีเฉพาะภาษาอังกฤษและภาษาสเปน
- สคริปต์ไม่เก็บข้อมูลใดๆ และไม่ส่งข้อมูลออกนอก Little Hotelier

## เรื่องที่เกี่ยวข้อง

- [ตารางเต็มความกว้าง](/tools/ui/tables-full-width) ทำให้ตารางใน Direct Booking กว้างขึ้น
- [ส่วนขยาย Chrome ฟรีที่ทำให้ Little Hotelier เร็วขึ้น](/blog/little-hotelier-chrome-extensions)
