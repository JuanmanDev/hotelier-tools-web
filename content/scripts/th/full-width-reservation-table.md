---
title: "ตารางการจองแบบเต็มความกว้าง"
description: "ขยายรายการ Reservations ใน Front Desk ของ Little Hotelier ให้ใช้เต็มหน้าจอ สูงสุด 2000 พิกเซล คอลัมน์พอดีโดยไม่ต้องเลื่อนไปด้านข้าง"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js"
category: "Front Desk"
images:
  before: "/images/scripts/full-width-reservation-table/from.png"
  after: "/images/scripts/full-width-reservation-table/to.png"
  gallery:
    - "/images/scripts/full-width-reservation-table/from.png"
    - "/images/scripts/full-width-reservation-table/to.png"
---

สคริปต์นี้ทำให้รายการ Reservations ใน Little Hotelier Front Desk ใช้ความกว้างเต็มจอมอนิเตอร์ของคุณ เหมาะสำหรับเจ้าหน้าที่แผนกต้อนรับและเจ้าของที่ค้นหาและตรวจสอบการจองบนหน้าจอกว้าง และเบื่อตารางแคบๆ ตรงกลางที่เว้นที่ว่างไว้สองข้าง

## ปัญหาที่สคริปต์นี้แก้

หน้า Reservations ของ Front Desk วางเนื้อหาไว้ในคอลัมน์ที่มีความกว้างคงที่ บนมอนิเตอร์ขนาดใหญ่ ตารางการจองถูกบีบอยู่ในคอลัมน์นั้น ชื่อแขกที่ยาวจึงขึ้นบรรทัดใหม่หลายบรรทัด และบางคอลัมน์ต้องเลื่อนแนวนอน คุณต้องเลื่อนไปด้านข้างและลงล่างเพื่อตรวจการจองเพียงรายการเดียว ขณะที่ครึ่งหนึ่งของหน้าจอว่างเปล่า

## สิ่งที่เปลี่ยนไป

- บนหน้า Reservations หัวข้อหน้า พื้นที่เนื้อหา และคอนเทนเนอร์หลักขยายได้สูงสุด 2000 พิกเซล แทนที่จะเป็นความกว้างคงที่มาตรฐาน
- ตารางขยายเต็มหน้าจอ คอลัมน์จึงมีพื้นที่มากขึ้น และชื่อแขกที่ยาวขึ้นบรรทัดใหม่น้อยลง
- ไม่มีอะไรถูกลบหรือสลับลำดับ ยังคงมีคอลัมน์ ตัวกรอง และลิงก์เหมือนเดิม

## วิธีติดตั้ง

ติดตั้งส่วนขยาย Tampermonkey ซึ่งใช้งานได้ฟรี กด **ติดตั้งบน Tampermonkey** ในหน้านี้ ยืนยัน แล้วโหลดหน้า Reservations ใหม่ [คู่มือการติดตั้ง](/tools/ui/instructions) แสดงทุกขั้นตอนพร้อมภาพประกอบ สคริปต์ทำงานเฉพาะหน้า Front Desk ที่ที่อยู่มี /reservations (app.littlehotelier.com/extranet/properties/.../reservations) ใช้งานได้ฟรีและเป็นโอเพนซอร์ส: [โค้ดอยู่บน GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/fullWidthReservationTable.user.js)

## ข้อควรรู้

- บนหน้าจอที่กว้างกว่า 2000 พิกเซล เนื้อหาจะหยุดขยายที่ความกว้างนั้น
- บนแล็ปท็อปเล็กหรือแท็บเล็ตแทบไม่ต่างหรือไม่ต่างเลย เพราะหน้าเต็มจออยู่แล้ว
- เนื่องจากสคริปต์ตรงกับทุกที่อยู่ภายใต้ /reservations เลย์เอาต์ที่กว้างขึ้นจึงมีผลกับหน้าอื่นในส่วนนั้นด้วย เช่น การจองที่เปิดจากรายการ
- สคริปต์เพิ่มกฎสไตล์เมื่อโหลดหน้าเท่านั้น ไม่เก็บข้อมูลและไม่ส่งข้อมูลไปที่ใด
- หากต้องการผลแบบเดียวกันกับตารางใน Direct Booking ให้ติดตั้ง[ตารางเต็มความกว้าง](/tools/ui/tables-full-width)
- หาก Little Hotelier ออกแบบหน้า Reservations ใหม่ เลย์เอาต์ที่กว้างขึ้นอาจหยุดทำงานจนกว่าจะอัปเดตสคริปต์

## เรื่องที่เกี่ยวข้อง

- [ตารางเต็มความกว้าง](/tools/ui/tables-full-width)
- [ส่งออกข้อมูลการจอง Little Hotelier เป็น Excel](/blog/export-little-hotelier-reservations-excel)
- [เช็คลิสต์ front office โรงแรม: 8 ข้อก่อนแขกมาถึง](/blog/hotel-front-desk-checklist-automation)
