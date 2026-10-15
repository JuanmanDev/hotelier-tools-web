---
title: "ปรับปรุงสไตล์สำหรับหน้าจอสัมผัส"
description: "ทำให้ Little Hotelier ใช้บนแท็บเล็ตง่ายขึ้น เมนู Print และ Email ใหญ่ขึ้น ปุ่มส่วนท้ายเด่นขึ้น และปุ่มลบห้องแสดงตลอดในการจอง"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/improve-style-touch-screens/from.png"
  after: "/images/scripts/improve-style-touch-screens/to.png"
  gallery:
    - "/images/scripts/improve-style-touch-screens/from.png"
    - "/images/scripts/improve-style-touch-screens/to.png"
---

สคริปต์นี้ปรับหน้าจอการจองของ Little Hotelier ให้เหมาะกับหน้าจอสัมผัส เช่น แท็บเล็ตที่แผนกต้อนรับ ทำให้เมนู Print และ Email ใหญ่ขึ้น เน้นปุ่มของเมนู และแสดงปุ่มลบห้องที่ปกติจะปรากฏเมื่อเอาเมาส์ไปวางเท่านั้น เหมาะสำหรับทีมแผนกต้อนรับที่ทำงานบนแท็บเล็ตหรือมอนิเตอร์แบบสัมผัส

## ปัญหาที่สคริปต์นี้แก้

หน้าจอการจองของ Little Hotelier ออกแบบมาสำหรับเมาส์ ตัวเลือก Print และ Email เปิดในเมนูป๊อปโอเวอร์ขนาดเล็กที่ตัวอักษรเล็ก ใช้นิ้วจิ้มให้ตรงได้ยาก ปุ่มลบห้องออกจากการจองถูกซ่อนไว้จนกว่าคุณจะเอาเมาส์ไปวางเหนือห้อง แต่หน้าจอสัมผัสไม่มีการวางเมาส์ ดังนั้นบนแท็บเล็ตจึงเข้าถึงปุ่มนั้นได้ยาก

## สิ่งที่เปลี่ยนไป

บนหน้าจอการจองใน Front Desk:

- **ปุ่มลบห้อง:** ปุ่มกลมสำหรับลบห้องออกจากการจองแสดงตลอดเวลา
- **เมนู Print และ Email:** รายการในเมนูป๊อปโอเวอร์เหล่านี้ใช้ตัวอักษรใหญ่ขึ้นมาก (30 พิกเซล) และเมนูกว้างขึ้นเพื่อให้พอดี
- **ปุ่มในส่วนท้าย:** ปุ่ม Print และ Email ในส่วนท้ายของการจองมีพื้นหลังสีฟ้าอ่อนและระยะห่างเพิ่มขึ้น หาและแตะได้ง่าย
- **เมนู Email invoice:** ซ่อนไอคอนข้อมูลเล็กๆ ข้างตัวเลือกใบแจ้งหนี้

## วิธีติดตั้ง

ติดตั้งส่วนขยาย Tampermonkey ซึ่งใช้งานได้ฟรี ในเบราว์เซอร์ของแท็บเล็ตหรือคอมพิวเตอร์ กด **ติดตั้งบน Tampermonkey** ในหน้านี้ ยืนยัน แล้วโหลด Little Hotelier ใหม่ [คู่มือการติดตั้ง](/tools/ui/instructions) แสดงทุกขั้นตอน สคริปต์ทำงานบนหน้า Front Desk ที่ app.littlehotelier.com ใช้งานได้ฟรีและเป็นโอเพนซอร์ส: [อ่านโค้ดบน GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/improveStyleForTouchScreens.user.js)

## ข้อควรรู้

- ต้องมี Tampermonkey ในเบราว์เซอร์ของแท็บเล็ต ทดสอบการตั้งค่าบนอุปกรณ์ของคุณเองก่อนนำไปใช้จริงที่เคาน์เตอร์
- การเปลี่ยนแปลงมีผลบนคอมพิวเตอร์เดสก์ท็อปด้วย ปุ่มลบห้องแสดงบนหน้าจอตลอดเวลาแล้ว จึงควรระวังอย่าคลิกโดยไม่ตั้งใจ
- สคริปต์เปลี่ยนเฉพาะสไตล์ ไม่เปลี่ยนสิ่งที่ปุ่มใดทำ และไม่เก็บข้อมูล
- หน้าจอรุ่นใหม่ที่ application.littlehotelier.com เช่น ปฏิทิน ไม่ได้รับผลกระทบ
- หากต้องการแบบฟอร์มแขกที่ใช้กับหน้าจอสัมผัสได้ดียิ่งขึ้น [บันทึกจังหวัดและประเทศอย่างง่าย](/tools/ui/easy-save-province-country) ก็ขยายปุ่มเพิ่มแขกและปุ่มขยายให้ใหญ่ขึ้นเช่นกัน

## เรื่องที่เกี่ยวข้อง

- [อินเทอร์เฟซกะทัดรัดสำหรับรายละเอียดการจอง](/tools/ui/compact-ui-reservation-details)
- [บันทึกจังหวัดและประเทศอย่างง่าย](/tools/ui/easy-save-province-country)
- [ส่วนขยาย Chrome ฟรีที่ทำให้ Little Hotelier เร็วขึ้น](/blog/little-hotelier-chrome-extensions)
