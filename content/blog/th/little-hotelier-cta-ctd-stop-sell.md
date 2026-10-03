---
title: "CTA, CTD, Min Stay, Stop Sell คืออะไร?"
seoTitle: "CTA, CTD, Min Stay, Stop Sell คืออะไร?"
description: "CTA ห้ามเช็คอิน CTD ห้ามเช็คเอาต์ Min stay กำหนดจำนวนคืนขั้นต่ำ Stop sell ปิดการขาย ความหมายของแต่ละคำและวิธีตั้งค่าใน Little Hotelier"
date: 2026-10-03
category: pricing
tags: [restrictions, cta, ctd, stop sell, little hotelier]
keywords: [stop sales hotel คือ, stop sell คืออะไร, cta ctd โรงแรม คือ, closed to arrival คือ, little hotelier cta ctd, siteminder stop sell, minimum stay โรงแรม]
feature: dynamic-pricing
demoPath: /pricing/settings/restrictions
cover: /images/blog/demo/en/price-recommendations.webp
coverAlt: "หน้าราคาแนะนำใน Hotelier Tools สำหรับห้อง Doble Estándar วันที่ 3 ถึง 16 ตุลาคม 2026 แสดงราคาปัจจุบันและราคาแนะนำต่อคืน คอลัมน์ CTA / CTD ที่มีปุ่มสลับ A และ D จำนวนคืนขั้นต่ำ คอลัมน์ Channel และปุ่ม Apply to Little Hotelier"
faq:
  - q: "Closed to arrival ต่างจาก stop sell อย่างไร?"
    a: "Closed to arrival หยุดเฉพาะการเช็คอินใหม่ในวันนั้น แขกที่มาถึงก่อนหน้ายังพักผ่านวันนั้นได้ ส่วน stop sell ปิดการขายราคาในวันนั้น จึงไม่มีการจองใหม่ที่รวมคืนนั้นได้เลย"
  - q: "Stop sell เหมือนกับการตั้งจำนวนห้องว่างเป็น 0 หรือไม่?"
    a: "สำหรับแขก ผลลัพธ์ดูเหมือนกัน คือจองคืนนั้นไม่ได้ แต่ฝั่งคุณต่างกัน stop sell คงจำนวนห้องไว้ การเปิดขายกลับจึงทำได้ด้วยสวิตช์เดียว ส่วนการปิดห้อง (room closure) ใน Little Hotelier จะลดจำนวนห้องว่างที่ส่งไปยังช่องทางขาย และไม่ได้ใช้ stop sell"
  - q: "โรงแรมขนาดเล็กควรใช้ closed to arrival เมื่อไร?"
    a: "ใช้เพื่อปกป้องการเข้าพักที่ยาวขึ้น เช่น ในวันเสาร์ของสุดสัปดาห์ที่แน่น เพื่อให้แขกต้องมาถึงวันศุกร์ หรือในคืนที่มีอีเวนต์เมื่ออยากขายแบบเข้าพักเต็มช่วง ควรทบทวนเมื่อใกล้วันจริง และยกเลิกหากคืนนั้นยังว่างอยู่"
  - q: "ทำไมข้อจำกัดของฉันไม่ขึ้นบน Booking.com หรือ Airbnb?"
    a: "ราคาของแต่ละช่องทางไม่ได้รองรับทุกข้อจำกัด ในตารางสต็อกของ Little Hotelier เครื่องหมายขีดในช่องของช่องทางหมายความว่าช่องทางนั้นไม่รองรับการอัปเดตดังกล่าว และการอัปเดตที่เกินช่วงเวลาจองสูงสุดของช่องทางจะไม่ซิงก์ ตรวจสอบการตั้งค่าของราคาช่องทางใน Channel Manager เพื่อดูว่ารองรับการอัปเดตประเภทใดบ้าง"
  - q: "Hotelier Tools เปลี่ยนข้อจำกัดเองหรือไม่?"
    a: "ไม่ นโยบายข้อจำกัดจะถูกเสนอเป็นรายคืนในหน้า Recommendations และจะไม่มีการเขียนข้อมูลจนกว่าคุณจะกดใช้ ระบบอัตโนมัติ (autopilot) จะเขียนจำนวนคืนขั้นต่ำก็ต่อเมื่อคุณอนุญาตแยกต่างหาก และไม่แตะ stop sell ของช่องทางขายเลย Hotelier Tools เป็นระบบอิสระ ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder หรือ Little Hotelier"
---

ใน Little Hotelier **CTA** (closed to arrival) หมายถึงแขกเช็คอินในวันนั้นไม่ได้ และ **CTD** (closed to departure) หมายถึงเช็คเอาต์ในวันนั้นไม่ได้ **Minimum stay** คือจำนวนคืนขั้นต่ำที่ต้องจองห้อง ส่วน **stop sell** คือการปิดการขายราคาในวันหนึ่ง ๆ โดยห้องยังอยู่ในสต็อก คุณตั้งค่าทั้งหมดนี้ได้ต่อราคาห้องใน **Front Desk > Inventory** ทีละวัน หรือใช้ **Bulk Update**

| คำศัพท์ | ความหมาย | ใช้เมื่อไร |
|---|---|---|
| **CTA** (Closed to Arrival) | "Guests cannot check in on this date." แขกที่มาถึงก่อนหน้ายังพักผ่านวันนั้นได้ | ให้แขกมาถึงวันศุกร์ในสุดสัปดาห์ที่แน่น |
| **CTD** (Closed to Departure) | "Guests cannot check out on this date." แขกพักผ่านวันนั้นได้ แต่ออกในวันนั้นไม่ได้ | รักษาช่วงสุดสัปดาห์ให้พักต่อเนื่อง |
| **Min stay** (min LOS) | "Minimum or maximum nights a room must be booked for" (Min/Max Stay) | 2 คืนในสุดสัปดาห์ที่มีอีเวนต์ |
| **Max stay** | การจองที่ยาวที่สุดที่รับ | พบได้น้อยในโรงแรมขนาดเล็ก |
| **Stop sell** | ปิดการขายราคาในวันนั้น ทุกช่องทางหรือบางช่องทาง เรียกว่า **Close Channels** ใน Front Desk และ **Stop Sell** ใน Channel Manager | ปิดวันอย่างรวดเร็ว: ซ่อมบำรุง เจ้าของบล็อกห้อง หรือช่องทางที่อยากหยุดขายชั่วคราว |

คำนิยามที่อ้างอิงมาจากศูนย์ช่วยเหลือของ Little Hotelier: [จัดการราคา ห้องว่าง และข้อจำกัดในตาราง inventory](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid) (อัปเดตสิงหาคม 2026)

## CTA ต่างจาก CTD อย่างไร

ทั้งสองข้อจำกัดเกี่ยวกับ**วันที่มาถึงหรือวันที่ออก** ไม่เกี่ยวกับคืนที่อยู่ระหว่างกลาง

ลองนึกถึงสุดสัปดาห์เทศกาล: คืนวันศุกร์และเสาร์มีความต้องการสูง ส่วนวันอาทิตย์เงียบ

- **CTA ในวันเสาร์**: ไม่มีใครเช็คอินวันเสาร์ได้ แขกที่ต้องการพักแค่คืนวันเสาร์จองไม่ได้ แต่แขกที่มาถึงวันศุกร์และพัก 2 คืนจองได้ คุณขายได้ทั้งสุดสัปดาห์ แทนที่จะขายคืนวันเสาร์เดี่ยว ๆ ทิ้งคืนวันศุกร์ให้ว่าง
- **CTD ในวันเสาร์**: ไม่มีใครเช็คเอาต์วันเสาร์ได้ แขกที่มาถึงวันศุกร์ต้องพักอย่างน้อยถึงวันอาทิตย์

ทั้งสองข้อจำกัดไม่กระทบแขกที่จองไว้แล้ว เพียงกรองว่าการจองใหม่แบบไหนรับได้ ใน Little Hotelier CTA และ CTD มีผลกับทุกช่องทางขายของคุณ รวมถึง booking engine ของคุณเอง ([วิดีโอแนะนำ CTA และ CTD](https://helpcentre.littlehotelier.com/en/articles/8674081-enable-cta-and-ctd-restrictions-video))

## Minimum stay: นับจากวันมาถึง หรือนับทุกคืน?

Minimum stay (min LOS, minimum length of stay) กำหนดจำนวนคืนน้อยที่สุดของการจอง ช่องทางขายใช้กฎนี้สองแบบ

- **On arrival (นับจากวันมาถึง)**: ตรวจกับวันที่มาถึง ขั้นต่ำ 2 คืนในวันศุกร์หมายถึงผู้มาถึงวันศุกร์ต้องจองอย่างน้อย 2 คืน ส่วนผู้มาถึงวันเสาร์ยังจองคืนเดียวได้
- **Through (นับทุกคืน)**: ตรวจกับทุกคืนของการพัก ขั้นต่ำ 2 คืนในวันเสาร์หมายถึงการจองใดที่รวมคืนวันเสาร์ต้องมีอย่างน้อย 2 คืน ไม่ว่าจะเริ่มวันไหน

ตารางของ Little Hotelier มีแค่ **Min Stay** และ **Max Stay** ส่วนช่องทางจะตีความอย่างไรเป็นการตั้งค่าของช่องทางนั้น Little Hotelier ส่ง minimum และ maximum stay ไปยัง Booking.com แบบ "through" เป็นค่าเริ่มต้น ([เชื่อมต่อกับ Booking.com](https://helpcentre.littlehotelier.com/en/articles/13830297-connect-to-booking-com)) หากบัญชี Booking.com ของคุณใช้ "Min. stay from arrival" ให้ตั้ง **Use Length of Stay on Arrival** เป็น **Yes** ที่ **My Apps > Channel Manager > Channels > Booking.com > Configure** ([ข้อผิดพลาดการจับคู่ช่องทาง](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshoot-channel-mapping-and-disabled-rate-errors)) หาก minimum stay สูงกว่า maximum stay ราคานั้นจะถูกปิดใช้งานโดยอัตโนมัติ

## Stop sell คืออะไร และต่างอย่างไร

Stop sell ปิดการขายราคาในวันหนึ่ง ๆ โดยจำนวนห้องของคุณไม่เปลี่ยน Little Hotelier ทำงานบน channel manager ของ SiteMinder และคืนหนึ่งอาจมีราคาปกติแต่ขายไม่ได้เลยในทุกที่ เพราะติด stop sell

Little Hotelier ให้ทำได้สองวิธี และใช้ได้ทีละวิธีเท่านั้น

- **Close Channels** ใน **Front Desk > Inventory** หยุดขาย "on all connected channels (including your booking engine)" สำหรับราคาห้องและวันที่ที่เลือก
- **Stop Sell** ใน **Channel Manager** ปิดเฉพาะบางช่องทาง ไปที่ **My Apps > Channel Manager > Inventory** กดปุ่ม **Channels** สีน้ำเงินข้างราคา หาราคาของช่องทางนั้นแล้วเลือก **Stop Sell** สำหรับช่วงวันที่ ให้ใช้ **Bulk Update** แล้วตั้ง **Stop Sell** เป็น **On** ([stop sell สำหรับบางช่องทาง](https://helpcentre.littlehotelier.com/en/articles/8673615-add-or-remove-stop-sells-for-specific-channels))

stop sell ใน Channel Manager ใช้ไม่ได้ขณะที่ติ๊ก **Close Channels** ใน Front Desk สำหรับวันเดียวกัน

| | Stop sell | ปิดห้อง (ลดจำนวนห้องว่าง) | CTA |
|---|---|---|---|
| การจองใหม่ที่รวมคืนนั้น | ถูกบล็อก | ถูกบล็อกเมื่อห้องว่างถึง 0 | ทำได้หากมาถึงก่อนหน้า |
| จำนวนห้องของคุณ | ไม่เปลี่ยน | ลดลงสำหรับประเภทห้องนั้น | ไม่เปลี่ยน |
| เหมาะกับ | ปิดเร็ว แยกตามช่องทาง | ห้องที่ใช้งานไม่ได้จริง | จัดรูปแบบการเข้าพัก |

**Room Closure** (**Front Desk > Calendar**) "reduces the availability sent to the channels for the closed room type. It does not apply a stop sell" ([room closures](https://helpcentre.littlehotelier.com/en/articles/8674039-create-and-manage-room-closures))

## วิธีตั้ง CTA, CTD และ minimum stay ใน Little Hotelier

### ทีละวัน

1. ไปที่ **Front Desk > Inventory**
2. เลือกมุมมองที่แสดงช่องที่ต้องการ
3. เลื่อนไปยังวันที่ แล้วแก้ไขช่องของราคาห้อง: Min Stay, Max Stay, CTA, CTD
4. กด **Save**

### ช่วงวันที่ด้วย Bulk Update

1. ใน **Front Desk > Inventory** กด **Bulk Update**
2. **When?**: เลือกช่วงวันที่
3. **Which days?**: เลือกวันในสัปดาห์ เช่น เฉพาะวันเสาร์
4. **Which room rates?**: เลือกราคา
5. **What changes?**: ตั้งข้อจำกัด เช่น minimum stay 2 คืน หรือเปิด CTA
6. กด **Update**

ควรรู้

- ข้อจำกัดตั้งที่ระดับ**ราคาห้อง (room rate)** ไม่ใช่ระดับประเภทห้อง
- ราคาที่คำนวณต่อจากราคาอื่นจะเป็นสีเทาในตาราง ให้แก้ที่ราคาต้นทางแทน
- Front Desk รับการอัปเดตล่วงหน้าประมาณ 716 วันตามค่าเริ่มต้น

## ข้อจำกัดไปถึง Booking.com, Expedia และ Airbnb อย่างไร

Little Hotelier ส่งข้อจำกัดของคุณไปยังแต่ละช่องทางที่เชื่อมไว้ผ่าน channel manager โดยมีข้อจำกัดบางอย่าง ([ตาราง inventory](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), [ช่วงเวลาอัปเดตช่องทาง](https://helpcentre.littlehotelier.com/en/articles/8673945-channel-manager-manage-update-period))

- **ไม่ใช่ทุกราคาของช่องทางที่รองรับทุกข้อจำกัด** เครื่องหมายขีด (-) ในช่องของช่องทางหมายความว่าช่องทางนั้นไม่รองรับการอัปเดตประเภทนั้น ใน Channel Manager หน้า **Configure** ของราคาช่องทางจะแสดงประเภทการอัปเดตที่รับได้
- **ช่วงเวลาจองต่างกัน** Channel Manager ส่งการอัปเดตล่วงหน้า 400 วันตามค่าเริ่มต้น (สูงสุด 750) การอัปเดตที่เกินช่วงสูงสุดของช่องทางจะไม่ซิงก์ สำหรับ Booking.com ช่วงสูงสุดคือ 545 วัน
- **Expedia** รับ stop sell จาก Little Hotelier ที่ระดับราคาเท่านั้น stop sell ระดับห้องจัดการใน Expedia Partner Central ([ปัญหา stop sell ของ Expedia](https://helpcentre.littlehotelier.com/en/articles/15201269-troubleshoot-expedia-stop-sell-issues))
- **Airbnb** ที่ใช้ Enhanced Sync รับราคา ห้องว่าง และข้อจำกัด แต่ช่องที่คุณเปลี่ยนใน extranet ของ Airbnb เองจะเป็นสีเทาใน Channel Manager ([จับคู่กับ Airbnb](https://helpcentre.littlehotelier.com/en/articles/8693078-map-to-airbnb))

หลังตั้งข้อจำกัดสำคัญ ให้เปิด extranet ของช่องทางนั้นแล้วตรวจสักหนึ่งวัน

## โรงแรมขนาดเล็กควรใช้เมื่อไร

- **สุดสัปดาห์ที่แน่นและช่วงอีเวนต์** minimum stay 2 คืนในคืนอีเวนต์ หรือ CTA ในคืนที่แน่นที่สุด ช่วยขายแบบเข้าพักเต็มช่วงแทนคืนเดี่ยวที่ทิ้งช่องว่าง
- **คืนว่างเดี่ยว ๆ** คืนว่างที่คั่นระหว่างคืนที่เต็มสองคืนขายได้เฉพาะแบบพักคืนเดียว หาก minimum stay บล็อกอยู่ ให้ยกเลิกขั้นต่ำของคืนนั้นเมื่อใกล้วัน
- **ใกล้วันเข้าพัก** ข้อจำกัดที่เหมาะเมื่อเหลืออีกเดือนหนึ่งอาจบล็อกการจองง่าย ๆ ก่อนวันจริงไม่กี่วัน ควรทบทวนทุกสัปดาห์
- **วันที่ไม่มีใครรับเช็คอินได้** ใช้ CTA ในวันเหล่านั้น หากกฎของที่พักอนุญาต
- **ปิดเร็ว** ใช้ stop sell แทนการตั้งราคา 999 เมื่ออยากเอาวันนั้นออกจากการขาย

## วิธีที่เร็วกว่า: นโยบายข้อจำกัดและ stop sell ใน Hotelier Tools

Hotelier Tools ทำงานบน Little Hotelier ด้วยบัญชีของคุณเอง แทนที่จะตั้งข้อจำกัดทีละวัน คุณเขียนนโยบายครั้งเดียว แล้วระบบจะเสนอเป็นรายคืนข้างราคา ฟีเจอร์ด้านการตั้งราคาอยู่ในสถานะ **alpha**

### 1. เขียนนโยบายครั้งเดียว

เปิด **Pricing settings → Arrivals, departures & stays** (`/pricing/settings/restrictions`) คุณปิดการมาถึงหรือการออกได้

- ในวันธรรมดาที่กำหนดหรือวันที่เฉพาะ
- ตามอัตราการเข้าพักหรือจำนวนห้องที่เหลือ
- เฉพาะเมื่อคืนก่อนหน้าและคืนถัดไปยังเปิดขายอยู่

Hotelier Tools ตรวจพบรูปแบบวันในสัปดาห์ที่คุณใช้อยู่แล้วใน Little Hotelier และเสนอให้ใช้ต่อ **weekend packages** ที่เลือกได้ จะตั้ง minimum stay ปิดไว้เป็นค่าเริ่มต้น และเมื่อเปิดจะเป็นวันศุกร์และเสาร์ 2 คืน แพ็กเกจจะไม่ลดขั้นต่ำที่ยาวกว่าซึ่งใครตั้งไว้ด้วยมือ หน้านี้ไม่เขียนอะไรลง Little Hotelier

::screenshot{src="/images/blog/demo/en/pricing-settings-arrivals-departures-stays.webp" alt="หน้า Arrivals, departures & stays ใน Hotelier Tools แสดงกฎ No arrivals กับปุ่มวัน Every week จาก Mon ถึง Sun, On these dates, เงื่อนไข An event fills the town และ The nights either side are still open, Occupancy above และ Rooms left at most แล้วต่อด้วยส่วนต้นของ No departures" caption="ระบุครั้งเดียวว่าคืนไหนไม่รับเช็คอินหรือเช็คเอาต์ หน้านี้ไม่เขียนอะไรลง Little Hotelier" path="/pricing/settings/restrictions"}
::

### 2. ตรวจสอบและใช้เป็นรายคืน

ที่หน้า **Recommendations** (`/price-recommendations`) แต่ละคืนแสดงสถานะการมาถึง (A) และการออก (D) ข้างราคา สลับตรงที่คุณไม่เห็นด้วย ติ๊กคืนที่ต้องการ แล้วกด **Apply to Little Hotelier…** ไม่มีอะไรเปลี่ยนจนกว่าคุณจะยืนยัน

สำหรับวันที่เฉพาะกิจ **Date rules** (`/pricing/settings/dates`) มีกฎ "stay" ที่ตั้งเฉพาะ minimum stay หรือกฎการมาถึงในคืนเหล่านั้น

### 3. ตรวจสอบและตั้ง stop sell ของช่องทางขาย

กด **Check channel manager** ในหน้า Recommendations Hotelier Tools อ่านสถานะ stop sell ของ SiteMinder ด้วยเซสชัน Little Hotelier เดียวกัน เฉพาะเมื่อคุณกด และคอลัมน์ช่องทางจะแสดงเปิด ปิด หรือผสมสำหรับแต่ละคืน เลือกเป้าหมาย (เปิดทั้งหมด ปิดทั้งหมด คงเดิม) ระบบจะส่ง**หลัง**การเปลี่ยนราคาใน Little Hotelier และเฉพาะคืนที่การเปลี่ยนนั้นสำเร็จ

::screenshot{src="/images/blog/demo/en/price-recommendations-apply-dialog.webp" alt="กล่องโต้ตอบ Apply to Little Hotelier สำหรับ 3 คืนของ Doble Estándar (เสาร์ 3 ต.ค. อาทิตย์ 4 ต.ค. จันทร์ 5 ต.ค.) พร้อมราคาปัจจุบันและราคาใหม่ และคอลัมน์ Arr กับ Dep คำเตือนว่าราคาและข้อจำกัดเปลี่ยนทันทีโดยไม่มีการยกเลิกอัตโนมัติ ตัวเลือก Send me an email ตัวเลือก Also update sales in the Channel Manager (SiteMinder) และปุ่ม Apply 3 change(s)" caption="การเปลี่ยนราคา การมาถึงและการออก และ stop sell ของ SiteMinder ยืนยันในกล่องเดียว ไม่มีอะไรเปลี่ยนจนกว่าคุณจะกดใช้" path="/price-recommendations"}
::

ระบบอัตโนมัติ (autopilot) ไม่เปลี่ยน stop sell และเขียน minimum stay เฉพาะเมื่อคุณอนุญาตแยกต่างหาก

::demo-cta{path="/pricing/settings/restrictions"}
::

## สรุป

- **CTA** หยุดการเช็คอินในวันหนึ่ง **CTD** หยุดการเช็คเอาต์ **minimum stay** กำหนดการจองสั้นที่สุด และ **stop sell** ปิดการขายราคาโดยคงจำนวนห้องไว้
- ใน Little Hotelier ตั้งต่อราคาห้องที่ **Front Desk > Inventory** หรือใช้ **Bulk Update** สำหรับช่วงวันที่ ส่วน stop sell รายช่องทางอยู่ใน Channel Manager
- ตรวจดูว่าแต่ละช่องทางรองรับข้อจำกัดใดบ้าง และทบทวนทุกสัปดาห์เมื่อใกล้วัน
- ด้วย[การตั้งราคาแบบไดนามิกของ Hotelier Tools](/tools/bot/dynamic-pricing) คุณเขียนนโยบายครั้งเดียว เห็นข้างราคา และตั้ง stop sell ของ SiteMinder จากหน้าเดียวกัน ใช้ฟรีสำหรับทุกโรงแรมจนถึง 10 มกราคม 2027
- อ่านต่อ: [การตั้งราคาแบบไดนามิกสำหรับโรงแรมขนาดเล็กบน Little Hotelier](/blog/dynamic-pricing-little-hotelier) และ[เคล็ดลับและฟีเจอร์ที่ซ่อนอยู่ของ Little Hotelier](/blog/little-hotelier-tips)
