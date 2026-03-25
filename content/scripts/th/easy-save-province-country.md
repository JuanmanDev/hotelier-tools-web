---
title: "บันทึกจังหวัดและประเทศอย่างง่าย"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/easySaveProvinceCountry.user.js"
category: "Reservation Details"
images:
  before: "/images/scripts/easy-save-province-country/from.png"
  after: "/images/scripts/easy-save-province-country/to.png"
  gallery:
    - "/images/scripts/easy-save-province-country/from.png"
    - "/images/scripts/easy-save-province-country/to.png"
    - "/images/scripts/easy-save-province-country/three.png"
---

## สคริปต์นี้ทำอะไร?

สคริปต์นี้ช่วยปรับปรุงกระบวนการกรอกรายละเอียดของผู้เข้าพัก โดยมีรายการตัวเลือกจังหวัดของสเปนและกรอกประเทศให้อัตโนมัติ

**คุณสมบัติ:**
- แสดงรายการจังหวัดของสเปนให้เลือกเมื่อโฟกัสที่ช่องจังหวัด
- ตั้งค่าประเทศเป็น "Spain" โดยอัตโนมัติเมื่อเลือกจังหวัด
- กำหนดเครื่องหมายขีดล่าง `_` สำหรับชื่อและนามสกุลที่ว่างเปล่า เพื่อรองรับการรวมระบบ INE ที่กำลังจะมาถึง
