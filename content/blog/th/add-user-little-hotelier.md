---
title: "วิธีเพิ่มผู้ใช้ใน Little Hotelier (และให้เครื่องมือมีล็อกอินของตัวเองแทนรหัสผ่านของคุณ)"
seoTitle: "วิธีเพิ่มผู้ใช้ใน Little Hotelier ทีละขั้นตอน"
description: "เพิ่มพนักงานหรือผู้ใช้สำหรับระบบเชื่อมต่อใน Little Hotelier ตั้งสิทธิ์และ MFA และเชื่อมต่อเครื่องมือด้วยผู้ใช้เฉพาะแทนรหัสผ่านของคุณ"
date: 2026-11-05
updated: 2026-11-05
category: tips
tags: [little hotelier, ผู้ใช้, สิทธิ์การใช้งาน, mfa, passkey, ความปลอดภัย]
keywords: [วิธีเพิ่มผู้ใช้ little hotelier, little hotelier add user, ตั้งสิทธิ์ผู้ใช้ little hotelier, little hotelier manage users, ตั้งค่า mfa little hotelier, อีเมลเปิดใช้งาน little hotelier หมดอายุ, ผู้ใช้สำหรับระบบเชื่อมต่อ little hotelier, ให้พนักงานเข้า little hotelier, little hotelier passkey]
feature: dashboard
demoPath: /credentials/hotelier-advanced
cover: /images/blog/demo/en/lh-advanced-user-invite.webp
coverAlt: "หน้าบัญชี Advanced: Use an alias of your own email พร้อมที่อยู่ที่แนะนำ demo+hoteliertools@hotelier.tools และปุ่ม Copy ตามด้วย The invite email: copy the link, do not open it พร้อมคำเตือนไม่ให้คลิกปุ่มในอีเมล และสามขั้นตอนที่จบที่ช่อง Activation link"
faq:
  - q: "เพิ่มผู้ใช้ใหม่ใน Little Hotelier อย่างไร"
    a: "บนอุปกรณ์ที่เชื่อถือได้ คลิกชื่อที่พักที่มุมขวาบนแล้วเลือก Manage users จากนั้น Add user ใส่อีเมล ชื่อ และภาษา เลือกแอปและระดับผู้ใช้ แล้วคลิก Save ผู้ใช้จะได้รับอีเมลเปิดใช้งานที่ใช้ได้ 24 ชั่วโมง"
  - q: "ผู้ใช้ Little Hotelier มีสิทธิ์อะไรได้บ้าง"
    a: "ผู้ใช้ Admin มีสิทธิ์ทั้งหมด ผู้ใช้ General ได้เฉพาะที่คุณติ๊กในแต่ละแอป: Front Desk มี Calendar, Reservations, Inventory, Guests, Reports, Housekeeping และ Setup ส่วน Channel Manager มี Config, Inventory, Reservations และ Payments"
  - q: "ต้องมี MFA เพื่อเพิ่มผู้ใช้ใน Little Hotelier ไหม"
    a: "ต้องมี การจัดการผู้ใช้ต้องทำบนอุปกรณ์ที่เชื่อถือได้ และคุณต้องตั้งค่าการยืนยันตัวตนหลายขั้นตอน (MFA) ก่อนจึงจะเพิ่มผู้ใช้ได้ MFA ใช้ได้กับแอป Little Hotelier แอป authenticator หรือส่วนขยายเบราว์เซอร์ ไม่รองรับ SMS และอีเมล"
  - q: "ควรให้รหัสผ่าน Little Hotelier ของฉันเองกับระบบเชื่อมต่อไหม"
    a: "ไม่ควร ผู้ใช้เฉพาะสำหรับเครื่องมือช่วยเก็บล็อกอินของคุณไว้เป็นส่วนตัว แสดงการกระทำของเครื่องมือแยกในบันทึก และปิดใช้งานได้โดยไม่กระทบใคร Hotelier Tools เรียกสิ่งนี้ว่าบัญชี Advanced"
  - q: "ถ้าลิงก์เปิดใช้งานถูกเปิดไปแล้วจะเป็นอย่างไร"
    a: "โทเค็นเปิดใช้งานใช้ได้ครั้งเดียว หากมีคนคลิกปุ่มในอีเมลก่อนวางลิงก์ใน Hotelier Tools ให้ Little Hotelier ส่งคำเชิญใหม่ แล้วคัดลอกลิงก์ใหม่โดยไม่เปิด"
  - q: "Hotelier Tools เป็นส่วนหนึ่งของ Little Hotelier หรือไม่"
    a: "ไม่ใช่ Hotelier Tools เป็นอิสระ ไม่มีความเกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder หรือ Little Hotelier เชื่อมต่อด้วยผู้ใช้ Little Hotelier ที่โรงแรมของคุณสร้างและควบคุมเอง"
---

หากต้องการเพิ่มผู้ใช้ใน Little Hotelier ให้เข้าสู่ระบบบนอุปกรณ์ที่เชื่อถือได้ คลิกชื่อที่พักที่มุมขวาบน เลือก **Manage users** แล้วกด **Add user** ใส่อีเมล ชื่อ และภาษาของผู้ใช้ เลือกแอปที่ต้องใช้ เลือก **Admin** หรือ **General** (และติ๊กสิทธิ์) แล้ว **Save** ผู้ใช้จะได้รับอีเมลเปิดใช้งานที่ใช้ได้ 24 ชั่วโมง สำหรับซอฟต์แวร์ ให้ทำแบบเดียวกันกับผู้ใช้แยกต่างหาก: อย่าให้รหัสผ่านของเจ้าของกับเครื่องมือใดเด็ดขาด

ขั้นตอนของ Little Hotelier ด้านล่างตรวจสอบกับศูนย์ช่วยเหลือ ณ เดือนพฤศจิกายน 2026

## วิธีเพิ่มผู้ใช้ใน Little Hotelier

ก่อนเริ่ม มีสองเงื่อนไข ([Create and manage users](https://helpcentre.littlehotelier.com/en/articles/8673881-create-and-manage-user-accounts-and-permissions)):

- คุณต้องมีสิทธิ์ **Manage users**
- คุณต้องอยู่บน**อุปกรณ์ที่เชื่อถือได้ (trusted device)** ในเบราว์เซอร์บนคอมพิวเตอร์หรือมือถือ การจัดการผู้ใช้ทำในแอปมือถือไม่ได้ และคุณเพิ่มอุปกรณ์ที่เชื่อถือได้ได้หลังตั้งค่า MFA แล้วเท่านั้น

จากนั้น:

1. คลิกชื่อที่พักที่มุมขวาบนแล้วเลือก **Manage users**
2. คลิก **Add user**
3. ใส่อีเมล ชื่อ และภาษาที่ต้องการของผู้ใช้
4. เลือกแอปที่ผู้ใช้ต้องใช้ (Front Desk, Channel Manager, Direct Booking, Payments)
5. เลือกระดับผู้ใช้ของแต่ละแอปแล้วติ๊กสิทธิ์
6. คลิก **Save**

ผู้ใช้ใหม่จะได้รับอีเมลเปิดใช้งานที่ใช้ได้ 24 ชั่วโมง เพื่อตั้งรหัสผ่าน หากอีเมลนั้นมีผู้ใช้ Little Hotelier อยู่แล้ว จะไม่มีอีเมลเปิดใช้งานส่งไป ผู้ใช้เข้าสู่ระบบด้วยรหัสผ่านเดิมหรือใช้ **Reset password**

แพลตฟอร์มใหม่ของ Little Hotelier อธิบายขั้นตอนเดียวกันไว้ใต้ **User management** ([บทความ help-platform](https://help-platform.littlehotelier.com/en/articles/10700088-create-and-manage-little-hotelier-users)) ให้ใช้บทความที่ตรงกับหน้าจอที่คุณเห็น

### ควรให้สิทธิ์อะไร

- **Admin**: สิทธิ์ทั้งหมด
- **General**: เฉพาะที่คุณติ๊ก สำหรับ **Front Desk**: Calendar, Reservations, Inventory, Guests, Reports, Housekeeping และ Setup สำหรับ **Channel Manager**: Config, Inventory, Reservations และ Payments

พนักงานต้อนรับมักต้องการ Front Desk พร้อม Calendar, Reservations และ Guests ให้สิทธิ์ **Manage users** กับคนให้น้อยที่สุดเท่าที่ทำได้

::screenshot{src="/images/config/permissions.webp" alt="หน้าแก้ไขผู้ใช้ Little Hotelier ภาษาสเปนของผู้ใช้ชื่อ Bot Facturas 2: ไม่ได้ติ๊กสิทธิ์จัดการผู้ใช้ Channel Manager และ Insights ปิดอยู่ Direct Booking เปิดเป็น General และ Front Desk เปิดเป็น General โดยติ๊กแค่ Calendar และ Reservations" caption="ผู้ใช้ General ที่มีแค่ Calendar และ Reservations ของ Front Desk: การตั้งค่าแบบจำกัดของการเชื่อมต่อแบบง่าย" width="1639" height="1742"}
::

### เปลี่ยน ปิดใช้งาน หรือลบผู้ใช้

- **แก้ไขสิทธิ์**ได้ทุกเมื่อจากรายชื่อผู้ใช้
- **Disable** เป็นวิธีที่แนะนำในการตัดสิทธิ์เข้าถึง: เปิดใช้งานใหม่ได้ภายหลัง **Delete** เป็นการลบถาวร
- **แก้ไขอีเมลไม่ได้** ให้สร้างผู้ใช้ใหม่ด้วยที่อยู่ที่ถูกต้อง แล้วลบผู้ใช้เก่า
- ผู้ใช้จะถูกล็อกหลังเข้าสู่ระบบผิด 6 ครั้งขึ้นไป และปลดล็อกได้ด้วย **Forgot password**

## การยืนยันตัวตนสองขั้นตอน (MFA) และ passkey

Little Hotelier บังคับใช้ MFA ภายใน 30 วันหลังผู้ใช้เข้าสู่ระบบครั้งแรก ([Set up MFA](https://helpcentre.littlehotelier.com/en/articles/9007761-set-up-multi-factor-authentication-mfa)) ผู้ใช้แต่ละคนเลือกหนึ่งวิธี:

- **แอปมือถือ Little Hotelier** (แนะนำ): ยืนยันตัวเลขที่ตรงกันด้วยใบหน้าหรือลายนิ้วมือ
- **แอป authenticator** เช่น Google Authenticator, Microsoft Authenticator หรือ Authy (รหัส 6 หลัก)
- **ส่วนขยายเบราว์เซอร์ authenticator** ใน Chrome, Edge หรือ Firefox

ไม่รองรับรหัสทางโทรศัพท์ SMS และอีเมล ผู้ใช้ที่มีสิทธิ์ **Manage users** รีเซ็ต MFA ของผู้ใช้อื่นได้ ([วิธีทำ](https://helpcentre.littlehotelier.com/en/articles/13364672-how-to-reset-mfa-for-another-user)) แล้วผู้ใช้นั้นจะตั้งวิธีใหม่เมื่อเข้าสู่ระบบครั้งถัดไป

หน้าเข้าสู่ระบบซึ่งดูแลโดย SiteMinder อาจเสนอ **Continue with a passkey** ให้ผู้ใช้ที่สร้าง passkey ไว้แล้ว ณ เดือนพฤศจิกายน 2026 ศูนย์ช่วยเหลือของ Little Hotelier ยังไม่มีเอกสารเรื่อง passkey จึงถือว่าเป็นทางเลือก และให้ตั้ง MFA ไว้ต่อไป

มีผลอย่างหนึ่งที่สำคัญกับเครื่องมือ: **ผู้ใช้ที่มี MFA จะถูกถามรหัสตอนเข้าสู่ระบบ** เครื่องมือที่เก็บแค่รหัสผ่านจะติดอยู่ที่หน้าจอนั้น เพราะไม่มีใครอยู่ตอบ

## ทำไมเครื่องมือควรมีผู้ใช้ของตัวเอง

ระบบเชื่อมต่อหลายตัวขอ "อีเมลและรหัสผ่าน Little Hotelier ของคุณ" การแชร์ล็อกอินของเจ้าของมีต้นทุนจริง:

- **รหัสผ่านหมดอายุ** ประมาณทุกสามเดือน และเครื่องมือจะหยุดทำงานจนกว่าจะมีคนพิมพ์รหัสใหม่
- **บันทึกแยกไม่ออกว่าใครทำ** การเปลี่ยนแปลงที่เครื่องมือทำจะดูเหมือนคุณทำ
- **เซสชันชนกัน** ผู้ใช้เดียวกันที่เข้าสู่ระบบสองที่อาจทำให้เซสชันหนึ่งถูกออกจากระบบ
- **เมื่อคนนั้นลาออก** การเชื่อมต่อก็หายไปด้วย
- **MFA บนล็อกอินของคุณเอง** เป็นหน้าจอที่เครื่องมือตอบไม่ได้

ผู้ใช้เฉพาะสำหรับเครื่องมือแก้ได้ทุกข้อ: มีที่อยู่ของตัวเอง สิทธิ์ของตัวเอง ปัจจัยที่สองของตัวเอง และคุณปิดใช้งานได้โดยไม่กระทบใคร

## วิธีที่เร็วกว่า: บัญชี Advanced ของ Hotelier Tools

Hotelier Tools มีการเชื่อมต่อสองแบบที่ **Credentials** (ข้อมูลเข้าสู่ระบบ) (`/credentials`):

| | **Simple** (`/credentials/hotelier-simple`) | **Advanced** (`/credentials/hotelier-advanced`) |
|---|---|---|
| ล็อกอิน | อีเมลและรหัสผ่าน Little Hotelier ของคุณเอง | ผู้ใช้ Little Hotelier ใหม่ สำหรับ Hotelier Tools เท่านั้น |
| รหัสผ่าน | หมดอายุประมาณทุก 3 เดือน คุณต้องวางรหัสใหม่ | รหัสสุ่มที่แข็งแรง ตั้งโดย Hotelier Tools ไม่ต้องมีใครจำ |
| การยืนยันสองขั้นตอน | ไม่รองรับ: หน้าจอถามรหัสจะทำให้หยุด | เก็บ secret ของ authenticator เอง และเก็บ passkey ได้ |
| สิทธิ์ | Front Desk (Calendar, Reservations) และ Direct Booking | สิทธิ์ทั้งหมด: ทุกฟีเจอร์ทำงานได้ |

หน้า Simple ขึ้นต้นด้วยข้อจำกัดของมันโดยตั้งใจ: เขียนราคาและจำนวนห้องว่างไม่ได้ และรหัสผ่านที่หมดอายุจะหยุดระบบอัตโนมัติไปเงียบๆ ในอีกหลายวันต่อมา

::screenshot{src="/images/blog/demo/en/lh-simple-account-limits.webp" alt="หน้าบัญชี Simple ที่มีส่วน Before you use this: the limits ระบุว่ารหัสผ่านหมดอายุประมาณทุก 3 เดือน ไม่รองรับการยืนยันสองขั้นตอน สิทธิ์จำกัดพร้อมรายการที่ใช้ได้และที่ถูกจำกัดหรือปิด และล็อกอินส่วนตัวที่ใช้ร่วมกับบอท พร้อมปุ่ม Use the Advanced way" caption="บัญชี Simple ตั้งค่าเร็ว แต่ข้อจำกัดของมันจะหยุดระบบอัตโนมัติในอีกหลายสัปดาห์ต่อมา อ่านก่อนเลือก" path="/credentials/hotelier-simple"}
::

### ตั้งค่าบัญชี Advanced (สิ่งที่คุณทำในวันนี้)

1. เปิด **Credentials > Advanced** (`/credentials/hotelier-advanced`) ใต้ **Use an alias of your own email** คัดลอก **Suggested address for the new user** เช่น `you+hoteliertools@yourhotel.com` Little Hotelier ต้องการที่อยู่ใหม่ และแท็กเครื่องหมายบวกจะส่งถึงกล่องอีเมลของคุณเองกับผู้ให้บริการส่วนใหญ่ (Gmail, Outlook / Microsoft 365, iCloud, Fastmail)
2. ใน Little Hotelier เพิ่มผู้ใช้ด้วยที่อยู่นั้นและ**เปิดสิทธิ์ทั้งหมด** ตามขั้นตอนข้างบน
3. เปิดอีเมลคำเชิญและ**อย่าคลิกปุ่ม** คลิกขวาที่ปุ่มแล้วเลือก **Copy link address** (บนมือถือ: กดค้าง แล้ว **Copy link**) โทเค็นเปิดใช้งานใช้ได้ครั้งเดียว: การเปิดลิงก์จะใช้โทเค็นไปกับหน้าตั้งรหัสผ่านของ Little Hotelier เอง
4. กลับมาที่หน้า Advanced เลือก **Use an activation link** วางลิงก์ใน **Activation link** แล้วบันทึก
5. Hotelier Tools เปิดใช้งานผู้ใช้: ตั้งรหัสผ่านสุ่มที่แข็งแรง เก็บแบบเข้ารหัส และเข้าสู่ระบบหนึ่งครั้งเพื่อยืนยัน

สร้างผู้ใช้ไว้แล้วและรู้รหัสผ่าน? เลือก **Enter the credentials** แทน แล้วเพิ่ม secret ของ authenticator (OTP) หรือ passkey

::screenshot{src="/images/blog/demo/en/lh-advanced-user-invite.webp" alt="หน้าบัญชี Advanced: Use an alias of your own email พร้อมที่อยู่ที่แนะนำ demo+hoteliertools@hotelier.tools และปุ่ม Copy ตามด้วย The invite email: copy the link, do not open it พร้อมคำเตือนไม่ให้คลิกปุ่มในอีเมล และสามขั้นตอนที่จบที่ช่อง Activation link" caption="สร้างผู้ใช้ด้วยอีเมลของคุณเองบวกแท็ก แล้ววางลิงก์คำเชิญแทนการเปิด" path="/credentials/hotelier-advanced"}
::

คุณให้สิทธิ์ผู้ใช้นี้น้อยกว่านี้ได้ แต่ Hotelier Tools บอกไว้ชัดว่าบางฟีเจอร์จะใช้ไม่ได้ และไม่รองรับการตั้งค่าแบบนั้น เช่น การเขียนราคาต้องมีบทบาท Rates & Inventory

### MFA และ passkey บนผู้ใช้ Advanced

- **เมื่อ Little Hotelier เริ่มบังคับ MFA** Hotelier Tools จะลงทะเบียน authenticator ให้ผู้ใช้ Advanced เอง เก็บ secret แบบเข้ารหัส และตอบรหัสต่อจากนั้น ระบบไม่ทำแบบนี้กับล็อกอิน Simple ของคุณเด็ดขาด เพราะ secret ที่มีแค่แอปถือไว้จะทำให้คุณเข้าบัญชีตัวเองไม่ได้ หากต้องทำด้วยมือ แผงบัญชีมี **Set up two-step verification**
- **passkey ที่เก็บบนเซิร์ฟเวอร์ (เบต้า)** **Passkeys and two-step verification** (`/credentials/passkeys`) เพิ่ม passkey ให้ผู้ใช้ Advanced ได้ (**Add passkey** แล้ว **Test passkey**) การเข้าสู่ระบบตามเวลาจะลองใช้ passkey ก่อน: ใช้ได้แม้รหัสผ่านหมดอายุแล้ว และข้ามขั้นตอนรหัสไป เมื่อเก็บ passkey ไว้แล้ว ปุ่มจะเปลี่ยนเป็น **Replace passkey** (แทนที่ passkey) เจ้าของ **Download passkey** เก็บสำเนาไว้ได้ การเพิ่มหรือทดสอบคือการเข้าสู่ระบบ Little Hotelier หนึ่งครั้ง

::screenshot{src="/images/blog/demo/en/add-user-lh-passkeys.webp" alt="หน้า Passkeys and two-step verification (เบต้า): การ์ด Little Hotelier passkey (advanced login) สถานะ Stored และ On ของ bot-demo-sol@example.com พร้อมวันที่สร้าง อัลกอริทึม ES256 ไซต์ auth0.siteminder.com รหัส credential และ passkey และการเข้าสู่ระบบครั้งล่าสุด และปุ่ม Replace passkey, Test passkey และ Download passkey ด้านล่างคือ Authenticator codes (TOTP) ที่ Advanced login เป็น Stored และ Simple login เป็น None" caption="ผู้ใช้ Advanced มีทั้ง passkey และ secret ของ authenticator การเข้าสู่ระบบตามเวลาจึงไม่ติดที่หน้าถามรหัส" path="/credentials/passkeys"}
::

### หากต้องการลบออก

ปิดใช้งานหรือลบผู้ใช้ใน Little Hotelier สิทธิ์เข้าถึงของ Hotelier Tools จะสิ้นสุดไปด้วย และล็อกอินของคุณเองไม่ได้รับผลกระทบ

## ที่กำลังจะมา: Hotelier Tools เป็นผู้ใช้ผ่านคำเชิญ

หน้า Advanced ยังมีการ์ด **Hotelier Tools as a user in Little Hotelier** แนวคิดคือ: Hotelier Tools ให้ที่อยู่ล็อกอินส่วนตัวแก่ที่พักของคุณบนโดเมนของตัวเอง (`lh-…@in.hotelier.tools`) คุณเชิญที่อยู่นั้นใน Little Hotelier ด้วยสิทธิ์ที่คุณเลือก แล้ว Hotelier Tools ตอบรับคำเชิญ ตั้งรหัสผ่านและการยืนยันสองขั้นตอน และรักษาเซสชันไว้ ไม่มีอะไรแชร์กับโรงแรมอื่น และโดเมนนี้จะไม่กลายเป็นล็อกอินหลักหรืออีเมลกู้คืนบัญชีของคุณ ([ที่อยู่เหล่านี้ทำงานอย่างไร](/blog/hotel-email-address))

สถานะที่แน่ชัด ณ วันที่ 5 พฤศจิกายน 2026:

- **ทำเสร็จแล้ว:** ที่อยู่ (**Get the login address** หลังคุณใส่หมายเลขที่พักใน Little Hotelier) สถานะของล็อกอิน (**Waiting for the invitation**, **Active**, **Paused**, **Retired**) **Retire this login** และกฎความปลอดภัย การแจ้งเตือนความปลอดภัยจะถูกส่งต่อให้เจ้าของและไม่ถูกคลิกเด็ดขาด
- **ยังไม่เสร็จ:** การอ่านและตอบรับคำเชิญของ Little Hotelier ยังไม่เคยจับคำเชิญจริงได้ **ทุกข้อความที่ส่งถึงที่อยู่ล็อกอินจึงถูกพักไว้ให้คนจัดการ** และไม่มีอะไรในนั้นถูกเปิด การ์ดเองก็บอกไว้เช่นนี้
- **สิ่งที่คนทำในวันนี้:** ใช้ขั้นตอนลิงก์เปิดใช้งานข้างบน

::screenshot{src="/images/blog/demo/en/add-user-lh-login-address.webp" alt="หน้าบัญชี Advanced ที่มีการ์ด Hotelier Tools as a user in Little Hotelier สถานะ Waiting for the invitation: คำเตือนว่ายังอ่านคำเชิญของ Little Hotelier โดยอัตโนมัติไม่ได้ ที่อยู่ล็อกอิน lh-dwfenz3etz@in.hotel-demo.invalid (in.hotel-demo.invalid คือโดเมนสมมติของเดโม) พร้อมปุ่ม Copy หมายเลขที่พักใน Little Hotelier 90210 ตัวเลือก Read sign-in codes ที่ปิดอยู่ ปุ่ม Retire this login และใต้ Mail to this login มีคำเชิญ You have been invited to Hotel Demo Sol on Little Hotelier ที่ถูกพักไว้ให้ตรวจ" caption="คำเชิญมาถึงที่อยู่ล็อกอินและรอให้คนจัดการ ยังไม่มีอะไรในนั้นถูกเปิด" path="/credentials/hotelier-advanced"}
::

## เพื่อนร่วมงานของคุณ: บัญชีทีมใน Hotelier Tools

สมาชิกทีมไม่ต้องใช้ผู้ใช้สำหรับระบบเชื่อมต่อ ที่ **Settings > Team & roles** (`/settings/team`) กด **Invite someone** ใส่อีเมล แล้วเลือกบทบาท: **Administrator**, **Manager**, **Front desk**, **Revenue manager**, **Accountant**, **Read-only** หรือบทบาทที่กำหนดเอง ผู้รับตอบรับจากลิงก์ในอีเมล (ใช้ได้ 7 วัน) และเข้าสู่ระบบด้วยล็อกอิน Hotelier Tools ของตัวเอง

นี่คือล็อกอินของ Hotelier Tools ไม่ใช่ผู้ใช้ Little Hotelier Hotelier Tools ทำงานใน Little Hotelier ผ่านการเชื่อมต่อเดียวของที่พัก และไม่มีใครในทีมเห็นรหัสผ่านนั้น มีแค่เจ้าของที่เห็นได้ การเปลี่ยนแปลงที่เพื่อนร่วมงานทำจะแสดงใน Little Hotelier ว่าเป็นผู้ใช้ที่เชื่อมต่อไว้ ขณะที่ Hotelier Tools บันทึกว่าใครเป็นคนทำจริง คนที่ทำงานใน Extranet ของ Little Hotelier โดยตรงยังต้องมีผู้ใช้ Little Hotelier ของตัวเอง

::screenshot{src="/images/blog/demo/en/team-hotelier-tools-logins.webp" alt="การตั้งค่า Team พร้อมปุ่ม Roles และ Invite someone กล่องอธิบายว่าล็อกอินเหล่านี้ใช้กับ Hotelier Tools เท่านั้น ไม่ใช่ Little Hotelier ใช้ไป 1 ที่นั่ง และตารางทีมที่มี Demo Manager เป็น Owner สถานะ Active" caption="เพื่อนร่วมงานแต่ละคนได้ล็อกอินและบทบาทใน Hotelier Tools ของตัวเอง รหัสผ่าน Little Hotelier อยู่กับเจ้าของ" path="/settings/team"}
::

::demo-cta{path="/credentials/hotelier-advanced"}
::

แดชบอร์ดใช้ฟรีสำหรับทุกโรงแรมจนกว่าจะเริ่มเรียกเก็บเงินในวันที่ 10 มกราคม 2027

::callout{type="info" title="เครื่องมืออิสระ"}
Hotelier Tools ไม่มีความเกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder หรือ Little Hotelier เชื่อมต่อด้วยผู้ใช้ Little Hotelier ที่โรงแรมของคุณสร้าง ควบคุม และปิดใช้งานได้ทุกเมื่อ
::

อ่านเพิ่มเติม: [Little Hotelier API](/blog/little-hotelier-api), [การเชื่อมต่อ Claude กับ Little Hotelier](/blog/connect-claude-to-little-hotelier), [อีเมลโรงแรมสำหรับล็อกอินและใบแจ้งหนี้](/blog/hotel-email-address)

## สรุป

- ใน Little Hotelier: ชื่อที่พัก > **Manage users** > **Add user** บนอุปกรณ์ที่เชื่อถือได้ อีเมลเปิดใช้งานใช้ได้ 24 ชั่วโมง
- **Admin** มีทุกอย่าง **General** ได้เฉพาะสิทธิ์ที่คุณติ๊กในแต่ละแอป
- MFA บังคับภายใน 30 วัน ไม่รองรับรหัสทาง SMS และอีเมล
- ให้เครื่องมือมีผู้ใช้ของตัวเอง ไม่ใช่รหัสผ่านของคุณ ใน Hotelier Tools นั่นคือบัญชี **Advanced**: วางลิงก์คำเชิญแล้วระบบจะตั้งรหัสผ่านและการยืนยันสองขั้นตอนเอง
- การเชิญที่อยู่ส่วนตัว `lh-…` กำลังจะมา วันนี้ข้อความเหล่านั้นถูกพักไว้ให้คนจัดการ
- เพื่อนร่วมงานได้ล็อกอินทีมของ Hotelier Tools พร้อมบทบาท ไม่ใช่รหัสผ่าน Little Hotelier ของคุณ
