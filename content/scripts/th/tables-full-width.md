---
title: "ตารางเต็มความกว้าง"
description: "ทำให้ตารางใน extranet Direct Booking ของ Little Hotelier ใช้ความกว้างเต็มจอและเน้นแถวที่เมาส์ชี้อยู่ ทำให้อ่านรายการได้ง่ายขึ้น"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js"
category: "Direct Booking"
images:
  before: "/images/scripts/tables-full-width/from.webp"
  after: "/images/scripts/tables-full-width/to.webp"
  gallery:
    - "/images/scripts/tables-full-width/from.webp"
    - "/images/scripts/tables-full-width/to.webp"
---

สคริปต์นี้ขยายตารางใน extranet Direct Booking ของ Little Hotelier ซึ่งเป็นหลังบ้านของระบบจองบนเว็บไซต์ที่ app.thebookingbutton.com ให้ใช้ความกว้างเต็มหน้าจอของคุณ เหมาะสำหรับเจ้าของและเจ้าหน้าที่ที่ตรวจสอบการจองโดยตรง รายงาน และ inventory ที่นั่นบนแล็ปท็อปหรือมอนิเตอร์ขนาดใหญ่

## ปัญหาที่สคริปต์นี้แก้

Direct Booking วางหน้าไว้ในคอลัมน์ที่มีความกว้างคงที่ รายการการจองและรายงานถูกบีบอยู่ในคอลัมน์นั้น ชื่อแขกถูกตัดสั้น และบนมอนิเตอร์กว้าง ครึ่งหนึ่งของหน้าจอว่างเปล่าขณะที่คุณเลื่อนไปด้านข้างในตาราง ตารางยาวก็ตามอ่านข้ามแถวได้ยากโดยไม่หลงตำแหน่ง

## สิ่งที่เปลี่ยนไป

บนหน้า extranet ของ Direct Booking:

- **พื้นที่เนื้อหาหลัก:** ไม่คงที่ความกว้างอีกต่อไป ตารางจึงขยายเต็มหน้าจอ
- **รายการการจอง:** คอลัมน์ชื่อแขกไม่จำกัดความกว้างอีกต่อไป จึงเห็นชื่อเต็ม
- **คอนเทนเนอร์หลัก:** ใช้ความกว้างเต็มของหน้าต่างได้
- **รายงาน:** ใช้ความกว้างเต็มของหน้า
- **Inventory:** มีความกว้างสูงสุดที่ใหญ่ขึ้นและจัดกึ่งกลาง จึงไม่ยืดไกลเกินไปบนหน้าจอที่กว้างมาก
- **การเน้นแถว:** ในตารางข้อมูล แถวที่ตัวชี้เมาส์อยู่จะมีพื้นหลังสีเทาอ่อน ทำให้อ่านข้ามแถวได้ง่ายขึ้น

## วิธีติดตั้ง

ติดตั้งส่วนขยาย Tampermonkey ซึ่งใช้งานได้ฟรี กด **ติดตั้งบน Tampermonkey** ในหน้านี้ ยืนยัน แล้วโหลด Direct Booking ใหม่ [คู่มือการติดตั้ง](/tools/ui/instructions) มีภาพประกอบทีละขั้นตอน สคริปต์ทำงานเฉพาะหน้า extranet ของ Direct Booking (app.thebookingbutton.com/extranet/...) ดังนั้น Front Desk จึงไม่ได้รับผลกระทบ ใช้งานได้ฟรีและเป็นโอเพนซอร์ส: [ดูโค้ดบน GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/directBooking/fullWidthTablets.user.js)

## ข้อควรรู้

- บนแล็ปท็อปเล็กหรือแท็บเล็ตความแตกต่างมีไม่มาก เพราะหน้าเต็มจออยู่แล้ว
- การเน้นแถวตามตัวชี้เมาส์ จึงมีประโยชน์หลักๆ บนคอมพิวเตอร์
- สคริปต์เพิ่มกฎสไตล์เมื่อโหลดหน้าเท่านั้น ไม่เก็บข้อมูลและไม่ส่งข้อมูลไปที่ใด
- หากต้องการผลแบบเดียวกันบนหน้า Reservations ของ Front Desk ให้ติดตั้ง[ตารางการจองแบบเต็มความกว้าง](/tools/ui/full-width-reservation-table)
- หาก Little Hotelier ออกแบบ Direct Booking ใหม่ การปรับบางส่วนอาจหยุดทำงานจนกว่าจะอัปเดตสคริปต์

## เรื่องที่เกี่ยวข้อง

- [ตารางการจองแบบเต็มความกว้าง](/tools/ui/full-width-reservation-table)
- [เพิ่มปุ่มตรวจสอบ Front Desk จาก Direct Booking](/tools/ui/add-button-check-front-desk)
- [ส่วนขยาย Chrome ฟรีที่ทำให้ Little Hotelier เร็วขึ้น](/blog/little-hotelier-chrome-extensions)
