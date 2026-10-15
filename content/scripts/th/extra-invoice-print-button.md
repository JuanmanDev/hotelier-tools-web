---
title: "ปุ่มพิมพ์ใบแจ้งหนี้เพิ่มเติม"
description: "เพิ่มปุ่ม Print Invoice ในทุกการจองของ Little Hotelier ข้างเมนู Print แผนกต้อนรับพิมพ์ใบแจ้งหนี้ได้ในคลิกเดียวแทนที่จะเป็นสองคลิก"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/extra-invoice-print-button/from.png"
  after: "/images/scripts/extra-invoice-print-button/to.png"
  gallery:
    - "/images/scripts/extra-invoice-print-button/from.png"
    - "/images/scripts/extra-invoice-print-button/to.png"
---

สคริปต์นี้วางปุ่ม **Print Invoice** ไว้บนหน้าจอการจองของ Little Hotelier ข้างเมนู **Print** เดิม คลิกเดียวก็เปิดใบแจ้งหนี้ได้เลย ไม่ต้องเปิดเมนูก่อน เหมาะสำหรับเจ้าหน้าที่แผนกต้อนรับที่พิมพ์หรือดาวน์โหลดใบแจ้งหนี้เกือบทุกครั้งที่แขกเช็คเอาต์

## ปัญหาที่สคริปต์นี้แก้

ใน Front Desk ใบแจ้งหนี้อยู่ในเมนู Print ของการจอง คุณต้องเปิดเมนู แล้วเลือกใบแจ้งหนี้ สองคลิกไม่ได้มากเมื่อทำครั้งเดียว แต่ในช่วงเช็คเอาต์ที่มีแขกรออยู่ก็สะสมได้ และบนแท็บเล็ต เมนูขนาดเล็กก็พลาดได้ง่าย พนักงานใหม่ก็ไม่ได้รู้เสมอไปว่าใบแจ้งหนี้อยู่ในเมนูนั้น

## สิ่งที่เปลี่ยนไป

- ปุ่มใหม่ที่มีไอคอนเอกสารปรากฏในส่วนท้ายของการจอง ถัดจากปุ่มเมนู **Print**
- ป้ายของปุ่มคือ **Print Invoice** หรือ **Imprimir Factura** เมื่อ Little Hotelier เป็นภาษาสเปน
- เมื่อคลิก สคริปต์จะเรียกลิงก์พิมพ์ใบแจ้งหนี้ของ Little Hotelier เอง ซึ่งเป็นลิงก์เดียวกับที่คุณเลือกจากเมนู Print ผลลัพธ์จึงเป็นใบแจ้งหนี้ที่ Little Hotelier สร้างขึ้นทุกประการ สคริปต์ไม่สร้างหรือแก้ไขใบแจ้งหนี้
- เมนู Print เดิมยังอยู่เหมือนเดิม พร้อมตัวเลือกอื่นทั้งหมด

## วิธีติดตั้ง

คุณต้องมีส่วนขยาย Tampermonkey ซึ่งใช้งานได้ฟรี กด **ติดตั้งบน Tampermonkey** ในหน้านี้ ยืนยัน แล้วโหลด Little Hotelier ใหม่ [คู่มือการติดตั้ง](/tools/ui/instructions) มีภาพประกอบทุกขั้นตอน สคริปต์ทำงานบนหน้า Front Desk ที่ app.littlehotelier.com และเพิ่มปุ่มเฉพาะที่มีปุ่ม Print ของการจองอยู่ ใช้งานได้ฟรีและเป็นโอเพนซอร์ส: [ดูโค้ดบน GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showExtraButtonPrintInvoice.user.js)

## ข้อควรรู้

- สคริปต์มองหาปุ่ม Print หลายครั้งในห้าวินาทีแรกหลังโหลดหน้า หากไม่มีปุ่มเพราะการจองเปิดทีหลัง ให้โหลดหน้าใหม่
- สคริปต์ตรวจสอบก่อนว่ามีปุ่มของตัวเองอยู่แล้วหรือไม่ คุณจึงไม่มีทางได้ปุ่มสองปุ่ม
- ป้ายมีเฉพาะภาษาอังกฤษและสเปน ภาษาอื่นของอินเทอร์เฟซจะแสดงป้ายภาษาอังกฤษ
- ใช้งานได้ทั้งบนเดสก์ท็อปและหน้าจอสัมผัส เมื่อใช้ร่วมกับ[ปรับปรุงสไตล์สำหรับหน้าจอสัมผัส](/tools/ui/improve-style-touch-screens) ปุ่มในส่วนท้ายจะมีพื้นหลังเน้นด้วย
- สคริปต์ไม่เก็บข้อมูลและไม่ส่งข้อมูลออกนอก Little Hotelier

## เรื่องที่เกี่ยวข้อง

- [ส่งใบแจ้งหนี้/ใบเสร็จให้แขกอัตโนมัติตอนเช็คเอาท์](/blog/send-invoice-to-guest-at-checkout)
- [ดาวน์โหลดใบแจ้งหนี้ Little Hotelier ทั้งหมดในครั้งเดียว](/blog/download-all-little-hotelier-invoices)
- [ปุ่มอีเมลโอนเงินผ่านธนาคาร](/tools/ui/bank-transfer-email-button)
