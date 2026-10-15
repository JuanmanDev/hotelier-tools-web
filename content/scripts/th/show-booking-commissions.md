---
title: "แสดงค่าคอมมิชชั่น Booking.com"
description: "แสดงค่าคอมมิชชั่น Booking.com โดยประมาณและยอดสุทธิในการจอง Little Hotelier ด้วยคอมมิชชั่นคงที่ 17% และค่าธรรมเนียม 1.3%"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/show-booking-commissions/from.png"
  after: "/images/scripts/show-booking-commissions/to.png"
  gallery:
    - "/images/scripts/show-booking-commissions/from.png"
    - "/images/scripts/show-booking-commissions/to.png"
---

สคริปต์นี้เพิ่มค่าประมาณว่า Booking.com หักเท่าไรจากแต่ละการจองบนหน้าจอการจองใน Little Hotelier สำหรับการจองจาก Booking.com สคริปต์จะแสดงค่าธรรมเนียมการโอน ค่าคอมมิชชั่น ยอดรวมที่ถูกหักรวมภาษี และยอดสุทธิโดยประมาณ เหมาะสำหรับเจ้าของและผู้จัดการที่อยากรู้คร่าวๆ ว่าการจองจาก Booking.com ทำรายได้จริงเท่าไร

## ปัญหาที่สคริปต์นี้แก้

ยอดรวมของการจองใน Little Hotelier คือสิ่งที่แขกจ่าย ไม่ใช่สิ่งที่เข้าบัญชีธนาคารของคุณ กับ Booking.com ค่าคอมมิชชั่นและค่าธรรมเนียมการชำระเงินจะถูกหักภายหลังในใบแจ้งหนี้แยกต่างหาก หากไม่มีตัวเลขคร่าวๆ อยู่ในมือ ก็ยากที่จะเทียบการจองจากช่องทางขายกับการจองตรง หรือดูว่าส่วนลดยังเหลือกำไรอยู่หรือไม่

## สิ่งที่เปลี่ยนไป

เมื่อแหล่งที่มาของการจองคือ **Booking.com** จะมีการเพิ่มสี่บรรทัดในสรุปการจอง เหนือเส้นคั่นพอดี ป้ายเป็นภาษาสเปน:

- **Cargo por transferencia (1.3%)**: ค่าธรรมเนียมการโอน 1.3% ของยอดรวมการจอง
- **Comisiones Booking (17%)**: ค่าคอมมิชชั่นของ Booking.com 17% ของยอดรวมการจอง
- **Total comisiones con IVA**: ค่าธรรมเนียมการโอน บวกค่าคอมมิชชั่น บวกจำนวนภาษีที่แสดงในการจอง
- **Neto Bruto (Aprox.)**: ยอดสุทธิโดยประมาณ คือยอดรวมการจองหักด้วยผลรวมดังกล่าว

การจองจากแหล่งอื่นไม่เปลี่ยนแปลง

## วิธีติดตั้ง

ติดตั้งส่วนขยาย Tampermonkey ซึ่งใช้งานได้ฟรี กด **ติดตั้งบน Tampermonkey** ในหน้านี้ ยืนยัน แล้วโหลด Little Hotelier ใหม่ [คู่มือการติดตั้ง](/tools/ui/instructions) แสดงทุกขั้นตอน สคริปต์ทำงานบนหน้า Front Desk ที่ app.littlehotelier.com และเพิ่มบรรทัดเฉพาะในการจองจาก Booking.com ใช้งานได้ฟรีและเป็นโอเพนซอร์ส: [ดูโค้ดบน GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showComissions.user.js)

## ข้อควรรู้

- อัตราถูกกำหนดคงที่ในโค้ด คือคอมมิชชั่น 17% และค่าธรรมเนียมการโอน 1.3% หากสัญญา Booking.com ของคุณใช้อัตราอื่น ให้แก้ตัวเลขเหล่านั้นในตัวแก้ไขของ Tampermonkey
- ป้ายยังเป็นภาษาสเปนและยอดเงินแสดงเป็นยูโร ไม่ว่าอินเทอร์เฟซของคุณจะเป็นภาษาใด
- นี่เป็นเพียงค่าประมาณ ใบแจ้งหนี้จาก Booking.com คือตัวเลขสุดท้าย
- บรรทัดเหล่านี้คำนวณครั้งเดียว ไม่กี่วินาทีหลังจากโหลดการจอง หากคุณเปลี่ยนยอดรวม ให้โหลดหน้าใหม่เพื่อคำนวณอีกครั้ง
- สคริปต์อ่านเฉพาะแหล่งที่มาของการจอง ยอดรวม และภาษีที่แสดงอยู่บนหน้าจอแล้ว ไม่เก็บข้อมูลและไม่ส่งข้อมูลไปที่ใด

## เรื่องที่เกี่ยวข้อง

- [ค่าคอมมิชชั่น Booking.com กี่ %? ดูยอดสุทธิที่ได้จริง](/blog/booking-com-commission)
- [ส่วนขยาย Chrome ฟรีที่ทำให้ Little Hotelier เร็วขึ้น](/blog/little-hotelier-chrome-extensions)
