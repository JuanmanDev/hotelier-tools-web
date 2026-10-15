---
title: "เปลี่ยนชื่อสินค้าคงคลัง"
description: "เปลี่ยนชื่อเมนู Inventory ใน Little Hotelier เป็น Inventory - Prices ทั้งภาษาอังกฤษและสเปน เพื่อให้พนักงานใหม่รู้ว่าแก้ราคาห้องที่ไหน"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js"
category: "General"
images:
  before: "/images/scripts/change-inventory-name/from.png"
  after: "/images/scripts/change-inventory-name/to.png"
  gallery:
    - "/images/scripts/change-inventory-name/from.png"
    - "/images/scripts/change-inventory-name/to.png"
---

สคริปต์ขนาดเล็กนี้เปลี่ยนชื่อรายการ **Inventory** ในเมนูด้านบนของ Little Hotelier เป็น **Inventory - Prices** (หรือ **Inventario - Precios** ในภาษาสเปน) เหมาะสำหรับเจ้าของที่ฝึกพนักงานแผนกต้อนรับใหม่ ป้ายนี้บอกให้รู้ว่าหน้าจอดังกล่าวใช้ตั้งราคา ไม่ใช่แค่จำนวนห้องว่าง

## ปัญหาที่สคริปต์นี้แก้

ใน Little Hotelier การแก้ราคาห้องทำที่หน้าจอ Inventory สำหรับคนที่เพิ่งใช้ระบบ คำว่า "Inventory" ฟังเหมือนสต็อกหรือจำนวนห้อง จึงไปหาเมนู "Prices" หรือ "Rates" ที่ไม่มีอยู่ ป้ายที่ชัดเจนขึ้นช่วยไม่ให้ต้องถามคำถามเดิมซ้ำทุกครั้งที่เปลี่ยนกะ

## สิ่งที่เปลี่ยนไป

- ในเมนูนำทางแนวนอนของหน้าจอรุ่นใหม่ใน Little Hotelier รายการที่ชื่อ "Inventory" จะกลายเป็น "Inventory - Prices"
- หากเมนูเป็นภาษาสเปน "Inventario" จะกลายเป็น "Inventario - Precios"
- ส่วนต่อท้ายเป็นไปตามภาษาของหน้า หน้าภาษาสเปนได้ "Precios" ส่วนภาษาอื่นได้ "Prices"
- เปลี่ยนเฉพาะป้ายที่มองเห็น ลิงก์ยังไปที่หน้าจอ Inventory เดิม
- เนื่องจากเมนูโหลดเป็นช่วงๆ สคริปต์จึงลองสามครั้งในไม่กี่วินาทีแรกหลังโหลดหน้า และจะไม่เพิ่มส่วนต่อท้ายซ้ำสองครั้ง

## วิธีติดตั้ง

คุณต้องมีส่วนขยาย Tampermonkey ซึ่งใช้งานได้ฟรี กด **ติดตั้งบน Tampermonkey** ในหน้านี้ ยืนยัน แล้วโหลด Little Hotelier ใหม่ [คู่มือการติดตั้ง](/tools/ui/instructions) แสดงทุกขั้นตอน สคริปต์ทำงานเฉพาะที่ application.littlehotelier.com ซึ่งเป็นที่อยู่ของหน้าจอรุ่นใหม่ใน Little Hotelier เช่น ปฏิทิน ใช้งานได้ฟรีและเป็นโอเพนซอร์ส: [ดูโค้ดบน GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/changeInventoryName.user.js)

## ข้อควรรู้

- สคริปต์จะจดจำรายการเมนูเมื่ออ่านได้ตรงกับ "Inventory" หรือ "Inventario" เท่านั้น หาก Little Hotelier ตั้งเป็นภาษาอื่น เช่น ฝรั่งเศสหรือเยอรมัน ป้ายจะไม่เปลี่ยน
- เปลี่ยนเฉพาะเมนูนำทางด้านบน หน้าบน app.littlehotelier.com และ Direct Booking ไม่ตรงเงื่อนไข เมนูของหน้าเหล่านั้นจึงไม่เปลี่ยน
- ใช้งานได้เหมือนกันทั้งบนเดสก์ท็อปและหน้าจอสัมผัส
- สคริปต์ไม่เก็บข้อมูลและไม่ส่งข้อมูลไปที่ใด
- หาก Little Hotelier เปลี่ยนชื่อหรือออกแบบเมนูใหม่ ป้ายอาจหยุดเปลี่ยนจนกว่าจะอัปเดตสคริปต์

## เรื่องที่เกี่ยวข้อง

- [การแสดงราคา](/tools/ui/prices-display) แสดงราคาจาก Inventory บนปฏิทิน
- [Dynamic pricing โรงแรมเล็กบน Little Hotelier](/blog/dynamic-pricing-little-hotelier)
- [20 เคล็ดลับ Little Hotelier และฟีเจอร์ลับที่หลายคนไม่รู้](/blog/little-hotelier-tips)
