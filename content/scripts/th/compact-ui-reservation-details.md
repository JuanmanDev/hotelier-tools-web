---
title: "อินเทอร์เฟซกะทัดรัดสำหรับรายละเอียดการจอง"
description: "ลดระยะห่างส่วนเกินในหน้าต่างการจองของ Little Hotelier และทำช่องความคิดเห็นของแขกให้สูงขึ้น อ่านบันทึกได้โดยไม่ต้องเลื่อนในช่อง"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/compact-ui-reservation-details/from.png"
  after: "/images/scripts/compact-ui-reservation-details/to.png"
  gallery:
    - "/images/scripts/compact-ui-reservation-details/from.png"
    - "/images/scripts/compact-ui-reservation-details/to.png"
---

สคริปต์นี้ปรับเลย์เอาต์ของหน้าต่างการจองใน Little Hotelier Front Desk ให้กระชับขึ้น และเพิ่มความสูงให้ช่องความคิดเห็นของแขก เหมาะสำหรับเจ้าหน้าที่แผนกต้อนรับที่เปิดการจองจำนวนมากในแต่ละวัน และต้องการอ่านบันทึกที่แขกหรือเพื่อนร่วมงานทิ้งไว้ โดยไม่ต้องเลื่อนในกล่องเล็กๆ

## ปัญหาที่สคริปต์นี้แก้

ความคิดเห็นของแขกมักมีข้อมูลสำคัญตอนเช็คอิน เช่น มาถึงดึก เตียงเด็ก ขอที่จอดรถ หรือโอกาสพิเศษ ในหน้าต่างการจองมาตรฐาน ช่องความคิดเห็นสั้น บันทึกที่ยาวจึงถูกตัด และต้องเลื่อนในช่อง ขณะเดียวกัน ระยะห่างด้านบนของแท็บ และระยะห่างรอบพื้นที่แจ้งเตือนและเส้นคั่น ก็ดันช่องที่มีประโยชน์ลงไปด้านล่าง

## สิ่งที่เปลี่ยนไป

บนหน้าจอการจองใน Front Desk:

- กล่องข้อความ**ความคิดเห็นของแขก** (guest comments) สูงอย่างน้อย 126 พิกเซล เห็นบันทึกได้หลายบรรทัดพร้อมกัน
- ลบระยะห่างด้านบนของเนื้อหาในแท็บของการจองออก
- พื้นที่แจ้งเตือนที่ว่างเปล่าไม่เพิ่มระยะห่างอีกต่อไป
- เส้นคั่นแนวนอนไม่มีระยะห่างส่วนเกิน

ช่อง ปุ่ม และแท็บยังอยู่ที่เดิม เปลี่ยนเฉพาะระยะห่างและความสูงของช่องความคิดเห็น

## วิธีติดตั้ง

ติดตั้งส่วนขยาย Tampermonkey ซึ่งใช้งานได้ฟรี กด **ติดตั้งบน Tampermonkey** ในหน้านี้ ยืนยัน แล้วโหลด Little Hotelier ใหม่ [คู่มือการติดตั้ง](/tools/ui/instructions) มีภาพประกอบทุกขั้นตอน สคริปต์ทำงานบนหน้า Front Desk ที่ app.littlehotelier.com และสไตล์มีผลเฉพาะหน้าต่างการจอง ใช้งานได้ฟรีและเป็นโอเพนซอร์ส: [โค้ดอยู่บน GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/compactUIReservationDetails.user.js)

## ข้อควรรู้

- สคริปต์ทำงานโดยเพิ่มสไตล์ไม่กี่รายการเมื่อโหลดหน้า ไม่อ่าน ไม่แก้ไข และไม่เก็บข้อมูลการจอง
- บันทึกที่ยาวกว่าความสูงใหม่ยังเลื่อนในกล่องได้ตามปกติ
- ใช้งานได้เหมือนกันทั้งบนเดสก์ท็อปและหน้าจอสัมผัส สำหรับแท็บเล็ต ให้ใช้ร่วมกับ[ปรับปรุงสไตล์สำหรับหน้าจอสัมผัส](/tools/ui/improve-style-touch-screens) ซึ่งขยายเมนู Print และ Email ให้ใหญ่ขึ้น
- ใช้ร่วมกับ[บันทึกจังหวัดและประเทศอย่างง่าย](/tools/ui/easy-save-province-country)ได้ดี ซึ่งทำงานกับแบบฟอร์มแขกในหน้าต่างเดียวกัน
- หาก Little Hotelier เปลี่ยนหน้าต่างการจอง การปรับระยะห่างบางส่วนอาจหยุดทำงานจนกว่าจะอัปเดตสคริปต์

## เรื่องที่เกี่ยวข้อง

- [ปรับปรุงสไตล์สำหรับหน้าจอสัมผัส](/tools/ui/improve-style-touch-screens)
- [เช็คลิสต์ front office โรงแรม: 8 ข้อก่อนแขกมาถึง](/blog/hotel-front-desk-checklist-automation)
- [ส่วนขยาย Chrome ฟรีที่ทำให้ Little Hotelier เร็วขึ้น](/blog/little-hotelier-chrome-extensions)
