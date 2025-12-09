---
title: "การเชื่อมต่อกับ Chekin"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js"
category: "รายละเอียดการจอง"
images:
  before: "/images/scripts/show-chekin/from.png"
  after: "/images/scripts/show-chekin/to.png"
  gallery:
    - "/images/scripts/show-chekin/from.png"
    - "/images/scripts/show-chekin/to.png"
    - "/images/scripts/show-chekin/login-required.png"
    - "/images/scripts/show-chekin/login-on-chekin.png"
    - "/images/scripts/show-chekin/url-to-share.png"
    - "/images/scripts/show-chekin/loading.png"
---

## สคริปต์นี้ทำอะไร?

เชื่อมต่อข้อมูลการเช็คอินโดยตรงกับรายละเอียดการจอง
ดูได้อย่างรวดเร็วว่าแขกได้เช็คอินแล้วหรือไม่ในขณะที่ตรวจสอบว่าห้องใดได้รับมอบหมาย รวมถึงข้อมูลการลงทะเบียนและจำนวนเงินที่รอการชำระ

**คุณสมบัติ:**
- ปรับปรุงการตรวจสอบข้อมูลการเช็คอิน
- หลีกเลี่ยงการสลับระหว่างแท็บหรือแอปพลิเคชัน
- ลดเวลารอของแขกเมื่อมาถึง
- คัดลอก ID จาก Chekin โดยตรงเพื่อใช้ในใบแจ้งหนี้
- รับหมายเลขโทรศัพท์ของแขกเพิ่มเติมเพื่อติดต่อในกรณีที่มีปัญหา

Automatically retrieves and displays guest registration data from Chekin.com, including guest names, phone numbers, and document IDs, with options to share registration forms via email or WhatsApp.
