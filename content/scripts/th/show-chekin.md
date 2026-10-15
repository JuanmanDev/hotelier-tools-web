---
title: "การเชื่อมต่อกับ Chekin"
description: "แสดงข้อมูลเช็คอินออนไลน์ Chekin ของแขกแต่ละคนในการจอง Little Hotelier กรอกแบบฟอร์มแขกในคลิกเดียว และแชร์ลิงก์แบบฟอร์มลงทะเบียน"
github: "https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js"
category: "รายละเอียดการจอง"
images:
  before: "/images/scripts/show-chekin/from.webp"
  after: "/images/scripts/show-chekin/to.webp"
  gallery:
    - "/images/scripts/show-chekin/from.webp"
    - "/images/scripts/show-chekin/to.webp"
    - "/images/scripts/show-chekin/login-required.webp"
    - "/images/scripts/show-chekin/login-on-chekin.webp"
    - "/images/scripts/show-chekin/url-to-share.webp"
    - "/images/scripts/show-chekin/loading.webp"
---

สคริปต์นี้เชื่อม Chekin บริการเช็คอินออนไลน์ เข้ากับ Little Hotelier เมื่อคุณเปิดการจอง แผง Chekin จะแสดงแขกที่ลงทะเบียนแล้ว และให้คุณคัดลอกรายละเอียดของพวกเขาลงในแบบฟอร์มแขกของ Little Hotelier เหมาะสำหรับทีมแผนกต้อนรับที่ใช้ Chekin เก็บเอกสารประจำตัวของแขก

## ปัญหาที่สคริปต์นี้แก้

หากไม่มีสคริปต์ ทุกครั้งที่แขกมาถึงต้องหาการจองใน Chekin ตรวจดูว่าใครลงทะเบียนแล้ว และคัดลอกเลขเอกสารกับที่อยู่ด้วยมือ ซึ่งช้า และเลขเอกสารที่คัดลอกก็พิมพ์ผิดได้ง่าย

## สิ่งที่เปลี่ยนไป

บนหน้าจอแก้ไขการจองใน Front Desk จะมีแผง Chekin เพิ่มเข้าไปในส่วนผู้ติดต่อหลัก:

- **สถานะ:** พบการจองใน Chekin หรือไม่ และมีแขกลงทะเบียนกี่คน พร้อมลิงก์ **View in Chekin**
- **ตารางแขก:** ชื่อ โทรศัพท์ เลขเอกสาร เมือง จังหวัด และประเทศของแขกที่ลงทะเบียนแต่ละคน
- **Use as Primary:** คัดลอกเลขเอกสารของแขกคนนั้นไปยังช่องเลขประจำตัวของแขกหลัก พร้อมสำหรับใบแจ้งหนี้
- **Save Guest** และ **Save All Guests:** เติมแบบฟอร์มแขกเพิ่มเติมของ Little Hotelier ด้วยข้อมูลจาก Chekin จากนั้นคุณกดปุ่ม Save ของ Little Hotelier เพื่อยืนยัน
- **ลิงก์แบบฟอร์มลงทะเบียน:** เมื่อยังไม่มีใครลงทะเบียน จะแสดงลิงก์แบบฟอร์มของแขกพร้อมปุ่ม Open, Copy, Email และ WhatsApp โดยใช้อีเมลและโทรศัพท์ของแขกจากการจอง
- **Create Checkin Reservation:** หากไม่พบรายการที่ตรงกัน จะสร้างการจองใน Chekin จากวันที่ ห้อง จำนวนแขก และรายละเอียดติดต่อของ Little Hotelier

บนปฏิทิน สคริปต์ยังโหลดข้อมูล Chekin ของการจองที่มองเห็นอยู่ในเบื้องหลัง การจองจึงเปิดได้เร็วขึ้น

## วิธีติดตั้ง

คุณต้องมีส่วนขยาย Tampermonkey ซึ่งใช้งานได้ฟรี และบัญชี Chekin กด **ติดตั้งบน Tampermonkey** ยืนยัน แล้วเข้าสู่ระบบ dashboard.chekin.com ในเบราว์เซอร์เดียวกัน [คู่มือการติดตั้ง](/tools/ui/instructions) แสดงขั้นตอนทั้งหมด สคริปต์ทำงานบนหน้าแก้ไขการจองของ Little Hotelier ปฏิทิน และหน้าแดชบอร์ดของ Chekin ที่สคริปต์เปิดเอง ใช้งานได้ฟรีและเป็นโอเพนซอร์ส: [อ่านโค้ดบน GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier/blob/main/frontdesk/reservationDetails/showChekin.user.js)

## ข้อควรรู้

- สคริปต์ใช้การเข้าสู่ระบบ Chekin ของคุณเอง หากคุณออกจากระบบอยู่ แผงจะแสดงปุ่ม **Login Required on Chekin**
- ในการค้นหา สคริปต์เปิดแท็บ Chekin ในเบื้องหลัง
- การจองต้องมีวันเช็คอินและห้องที่กำหนดแล้ว สคริปต์จับคู่ด้วยรหัสอ้างอิงการจองก่อน แล้วจึงใช้เลขห้อง
- ผลลัพธ์ถูกเก็บไว้ในเบราว์เซอร์ของคุณนานสูงสุด 24 ชั่วโมง และข้อมูลที่โหลดล่วงหน้าบนปฏิทินนานสูงสุด 4 ชั่วโมง
- แผงใช้ภาษาตามเบราว์เซอร์ของคุณ (อังกฤษหรือสเปน) ข้อความที่แชร์ลงท้ายด้วยลายเซ็นที่พักของผู้เขียน ให้แก้ไขในสคริปต์

## เรื่องที่เกี่ยวข้อง

- [SES Hospedajes กับ Little Hotelier: ลงทะเบียนแขก (partes de viajeros) โดยไม่ต้องทำงานซ้ำ](/blog/ses-hospedajes-little-hotelier)
- [แจ้งที่พักคนต่างด้าว ตม.30 และกฎลงทะเบียนแขก 8 ประเทศ](/blog/guest-registration-rules-by-country)
- [บันทึกจังหวัดและประเทศอย่างง่าย](/tools/ui/easy-save-province-country)
