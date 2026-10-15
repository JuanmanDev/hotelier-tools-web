---
title: "CTA, CTD, Min Stay, Stop Sell ของโรงแรมคืออะไร?"
seoTitle: "CTA, CTD, Min Stay, Stop Sell ใน Little Hotelier"
description: "CTA ห้ามเช็คอิน CTD ห้ามเช็คเอาท์ min stay กำหนดจำนวนคืนขั้นต่ำ stop sell ปิดการขาย ดูความหมายของแต่ละคำและวิธีตั้งค่าใน Little Hotelier"
date: 2026-10-03
category: pricing
tags: [restrictions, cta, ctd, stop sell, little hotelier]
keywords: [stop sales hotel คือ, stop sell คืออะไร, cta ctd โรงแรม คือ, closed to arrival คือ, min stay คืออะไร, minimum stay โรงแรม, little hotelier cta ctd, siteminder stop sell]
feature: dynamic-pricing
demoPath: /pricing/settings/restrictions
cover: /images/blog/demo/en/price-recommendations.webp
coverAlt: "หน้าราคาแนะนำใน Hotelier Tools สำหรับห้อง Doble Estándar วันที่ 3 ถึง 16 ตุลาคม 2026 แสดงราคาปัจจุบันและราคาแนะนำต่อคืน คอลัมน์ CTA / CTD ที่มีปุ่มสลับ A และ D จำนวนคืนขั้นต่ำ คอลัมน์ Channel และปุ่ม Apply to Little Hotelier"
faq:
  - q: "Closed to arrival ต่างจาก stop sell อย่างไร?"
    a: "Closed to arrival ปิดรับเฉพาะการเช็คอินใหม่ในวันนั้น แขกที่มาถึงก่อนหน้ายังพักต่อข้ามวันนั้นได้ ส่วน stop sell ปิดขายราคาห้องในวันนั้น การจองใหม่ที่มีคืนนั้นจึงเกิดขึ้นไม่ได้เลย"
  - q: "Stop sell เหมือนกับการตั้งจำนวนห้องว่างเป็น 0 หรือไม่?"
    a: "สำหรับแขก ผลลัพธ์ดูเหมือนกัน คือจองคืนนั้นไม่ได้ แต่ฝั่งคุณต่างกัน stop sell คงจำนวนห้องไว้ การเปิดขายกลับจึงแค่กดสวิตช์เดียว ส่วนการปิดห้อง (room closure) ใน Little Hotelier จะลดจำนวนห้องว่างที่ส่งไปยังช่องทางขาย และไม่ได้ใช้ stop sell"
  - q: "โรงแรมขนาดเล็กควรใช้ closed to arrival เมื่อไร?"
    a: "ใช้เพื่อรักษาการเข้าพักหลายคืน เช่น ตั้งในวันเสาร์ของสุดสัปดาห์ที่คนจองเยอะ เพื่อให้แขกต้องมาถึงตั้งแต่วันศุกร์ หรือในคืนที่มีอีเวนต์เมื่ออยากขายแบบพักเต็มช่วง ควรทบทวนเมื่อใกล้ถึงวัน และยกเลิกถ้าคืนนั้นยังว่างอยู่"
  - q: "ทำไมข้อจำกัดของฉันไม่ขึ้นบน Booking.com หรือ Airbnb?"
    a: "ราคาของแต่ละช่องทางไม่ได้รองรับข้อจำกัดทุกแบบ ในตาราง inventory ของ Little Hotelier เครื่องหมายขีดในช่องของช่องทางใดหมายความว่าช่องทางนั้นไม่รองรับการอัปเดตแบบนั้น และการอัปเดตที่เกินระยะจองล่วงหน้าสูงสุดของช่องทางจะไม่ซิงก์ ตรวจดูการตั้งค่าราคาของช่องทางใน Channel Manager ว่ารองรับการอัปเดตประเภทใดบ้าง"
  - q: "Hotelier Tools เปลี่ยนข้อจำกัดเองหรือไม่?"
    a: "ไม่เปลี่ยนเอง ระบบจะเสนอนโยบายข้อจำกัดเป็นรายคืนในหน้า Recommendations และจะไม่เขียนอะไรลง Little Hotelier จนกว่าคุณจะกดใช้ ระบบอัตโนมัติ (autopilot) จะเขียนจำนวนคืนขั้นต่ำก็ต่อเมื่อคุณอนุญาตแยกต่างหาก และไม่แตะ stop sell ของช่องทางขายเลย Hotelier Tools เป็นเครื่องมืออิสระ ไม่ได้มีส่วนเกี่ยวข้องกับ SiteMinder หรือ Little Hotelier และไม่ได้รับการรับรองจากทั้งสองบริษัท"
---

ใน Little Hotelier **CTA** (closed to arrival) หมายถึงแขกเช็คอินในวันนั้นไม่ได้ และ **CTD** (closed to departure) หมายถึงแขกเช็คเอาท์ในวันนั้นไม่ได้ **จำนวนคืนขั้นต่ำ (minimum stay)** คือจำนวนคืนน้อยที่สุดที่ต้องจอง ส่วน **stop sell** (ปิดการขาย) คือการปิดขายราคาห้องในวันใดวันหนึ่ง โดยห้องยังอยู่ใน inventory เหมือนเดิม คุณตั้งค่าทั้งหมดนี้ได้ทีละราคาห้องใน **Front Desk > Inventory** จะตั้งทีละวันหรือใช้ **Bulk Update** ก็ได้

| คำศัพท์ | ความหมาย | ใช้เมื่อไร |
|---|---|---|
| **CTA** (Closed to Arrival) | "แขกเช็คอินในวันนี้ไม่ได้" แขกที่มาถึงก่อนหน้ายังพักต่อข้ามวันนั้นได้ | ให้แขกมาถึงตั้งแต่วันศุกร์ในสุดสัปดาห์ที่คนจองเยอะ |
| **CTD** (Closed to Departure) | "แขกเช็คเอาท์ในวันนี้ไม่ได้" แขกพักต่อข้ามวันนั้นได้ แต่เช็คเอาท์ในวันนั้นไม่ได้ | ให้แขกพักครบทั้งสุดสัปดาห์ |
| **Min stay** (min LOS) | "จำนวนคืนต่ำสุดหรือสูงสุดที่ต้องจองห้อง" (Min/Max Stay) | 2 คืนในสุดสัปดาห์ที่มีอีเวนต์ |
| **Max stay** | จำนวนคืนมากที่สุดที่รับจอง | โรงแรมขนาดเล็กไม่ค่อยใช้ |
| **Stop sell** | ปิดการขายราคาในวันนั้น ทุกช่องทางหรือบางช่องทาง เรียกว่า **Close Channels** ใน Front Desk และ **Stop Sell** ใน Channel Manager | ปิดขายวันนั้นอย่างรวดเร็ว เช่น ซ่อมบำรุง เจ้าของกันห้องไว้ใช้เอง หรือพักการขายบางช่องทาง |

คำนิยามในเครื่องหมายคำพูดแปลจากศูนย์ช่วยเหลือของ Little Hotelier: [จัดการราคา ห้องว่าง และข้อจำกัดในตาราง inventory](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid) (อัปเดตสิงหาคม 2026)

## CTA ต่างจาก CTD อย่างไร

ข้อจำกัดทั้งสองแบบเกี่ยวกับ **วันเช็คอินหรือวันเช็คเอาท์** ไม่ใช่คืนที่อยู่ระหว่างกลาง

ลองนึกถึงสุดสัปดาห์ที่มีเทศกาล คืนวันศุกร์และวันเสาร์คนจองเยอะ ส่วนวันอาทิตย์เงียบ

- **CTA ในวันเสาร์**: ไม่มีใครเช็คอินวันเสาร์ได้ แขกที่ต้องการพักแค่คืนวันเสาร์จองไม่ได้ แต่แขกที่มาถึงวันศุกร์และพัก 2 คืนจองได้ คุณจึงขายได้ทั้งสุดสัปดาห์ แทนที่จะขายแค่คืนวันเสาร์แล้วปล่อยคืนวันศุกร์ว่าง
- **CTD ในวันเสาร์**: ไม่มีใครเช็คเอาท์วันเสาร์ได้ แขกที่มาถึงวันศุกร์ต้องพักอย่างน้อยถึงวันอาทิตย์

ข้อจำกัดทั้งสองแบบไม่กระทบแขกที่จองไว้แล้ว แค่กำหนดว่าการจองใหม่แบบไหนรับได้ ใน Little Hotelier CTA และ CTD มีผลกับทุกช่องทางขายของคุณ รวมถึง booking engine ของคุณเอง ([วิดีโอแนะนำ CTA และ CTD](https://helpcentre.littlehotelier.com/en/articles/8674081-enable-cta-and-ctd-restrictions-video))

## จำนวนคืนขั้นต่ำ: นับจากวันเช็คอิน หรือนับทุกคืน?

จำนวนคืนขั้นต่ำ (minimum stay, min LOS หรือ minimum length of stay) กำหนดจำนวนคืนน้อยที่สุดของการจองหนึ่งครั้ง ช่องทางขายใช้กฎนี้ได้สองแบบ

- **On arrival (นับจากวันเช็คอิน)**: ดูจากวันที่แขกมาถึง ถ้าตั้งขั้นต่ำ 2 คืนในวันศุกร์ แขกที่มาถึงวันศุกร์ต้องจองอย่างน้อย 2 คืน แต่แขกที่มาถึงวันเสาร์ยังจองคืนเดียวได้
- **Through (นับทุกคืน)**: ดูจากทุกคืนของการเข้าพัก ถ้าตั้งขั้นต่ำ 2 คืนในวันเสาร์ การจองใดก็ตามที่มีคืนวันเสาร์ต้องยาวอย่างน้อย 2 คืน ไม่ว่าจะเริ่มวันไหน

ตารางของ Little Hotelier มีแค่ **Min Stay** และ **Max Stay** ส่วนช่องทางจะตีความอย่างไรเป็นการตั้งค่าของช่องทางนั้น Little Hotelier ส่งจำนวนคืนขั้นต่ำและสูงสุดไปยัง Booking.com แบบ "through" เป็นค่าเริ่มต้น ([เชื่อมต่อกับ Booking.com](https://helpcentre.littlehotelier.com/en/articles/13830297-connect-to-booking-com)) ถ้าบัญชี Booking.com ของคุณใช้ "Min. stay from arrival" ให้ตั้ง **Use Length of Stay on Arrival** เป็น **Yes** ที่ **My Apps > Channel Manager > Channels > Booking.com > Configure** ([ข้อผิดพลาดการจับคู่ช่องทาง](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshoot-channel-mapping-and-disabled-rate-errors)) ถ้าจำนวนคืนขั้นต่ำสูงกว่าจำนวนคืนสูงสุด ราคานั้นจะถูกปิดใช้งานโดยอัตโนมัติ

## Stop sell คืออะไร และต่างจากวิธีอื่นอย่างไร

Stop sell ปิดขายราคาห้องในวันใดวันหนึ่ง โดยจำนวนห้องของคุณไม่เปลี่ยน Little Hotelier ทำงานบน channel manager ของ SiteMinder บางคืนจึงอาจตั้งราคาไว้ถูกต้องทุกอย่าง แต่ไม่มีช่องทางไหนขายได้เลยเพราะติด stop sell อยู่

Little Hotelier ให้ทำได้สองวิธี และใช้ได้ทีละวิธีเท่านั้น

- **Close Channels** ใน **Front Desk > Inventory** หยุดขาย "ในทุกช่องทางที่เชื่อมต่อไว้ (รวมถึง booking engine ของคุณ)" สำหรับราคาห้องและวันที่ที่เลือก
- **Stop Sell** ใน **Channel Manager** ปิดเฉพาะบางช่องทาง ไปที่ **My Apps > Channel Manager > Inventory** กดปุ่ม **Channels** สีน้ำเงินข้างราคา หาราคาของช่องทางนั้นแล้วเลือก **Stop Sell** สำหรับช่วงวันที่ ให้ใช้ **Bulk Update** แล้วตั้ง **Stop Sell** เป็น **On** ([stop sell สำหรับบางช่องทาง](https://helpcentre.littlehotelier.com/en/articles/8673615-add-or-remove-stop-sells-for-specific-channels))

Stop sell ใน Channel Manager จะไม่มีผล ถ้าติ๊ก **Close Channels** ใน Front Desk ไว้ในวันเดียวกัน

| | Stop sell | ปิดห้อง (ลดจำนวนห้องว่าง) | CTA |
|---|---|---|---|
| การจองใหม่ที่มีคืนนั้น | ถูกบล็อก | ถูกบล็อกเมื่อห้องว่างเหลือ 0 | จองได้ถ้ามาถึงก่อนวันนั้น |
| จำนวนห้องของคุณ | ไม่เปลี่ยน | ลดลงสำหรับประเภทห้องนั้น | ไม่เปลี่ยน |
| เหมาะกับ | ปิดขายเร็ว เลือกได้รายช่องทาง | ห้องที่ใช้งานไม่ได้จริง | กำหนดรูปแบบการเข้าพัก |

**Room Closure** (**Front Desk > Calendar**) "ลดจำนวนห้องว่างที่ส่งไปยังช่องทางขายสำหรับประเภทห้องที่ปิด โดยไม่ได้ใช้ stop sell" ([room closures](https://helpcentre.littlehotelier.com/en/articles/8674039-create-and-manage-room-closures))

## วิธีตั้ง CTA, CTD และจำนวนคืนขั้นต่ำใน Little Hotelier

### ทีละวัน

1. ไปที่ **Front Desk > Inventory**
2. เลือกมุมมองที่แสดงช่องที่ต้องการ
3. เลื่อนไปยังวันที่ต้องการ แล้วแก้ช่องของราคาห้องนั้น: Min Stay, Max Stay, CTA, CTD
4. กด **Save**

### ช่วงวันที่ด้วย Bulk Update

1. ใน **Front Desk > Inventory** กด **Bulk Update**
2. **When?**: เลือกช่วงวันที่
3. **Which days?**: เลือกวันในสัปดาห์ เช่น เฉพาะวันเสาร์
4. **Which room rates?**: เลือกราคา
5. **What changes?**: ตั้งข้อจำกัด เช่น จำนวนคืนขั้นต่ำ 2 คืน หรือเปิด CTA
6. กด **Update**

ควรรู้

- ข้อจำกัดตั้งที่ระดับ **ราคาห้อง (room rate)** ไม่ใช่ระดับประเภทห้อง
- ราคาแบบ derived (คำนวณจากราคาอื่น) จะเป็นสีเทาในตาราง ให้แก้ที่ราคาต้นทางแทน
- Front Desk รับการอัปเดตล่วงหน้าได้ประมาณ 716 วันตามค่าเริ่มต้น

## ข้อจำกัดไปถึง Booking.com, Expedia และ Airbnb อย่างไร

Little Hotelier ส่งข้อจำกัดของคุณไปยังแต่ละช่องทางที่เชื่อมต่อไว้ผ่าน channel manager โดยมีเงื่อนไขบางอย่าง ([ตาราง inventory](https://helpcentre.littlehotelier.com/en/articles/8673827-front-desk-manage-rates-availability-and-restrictions-in-the-inventory-grid), [ช่วงเวลาอัปเดตช่องทาง](https://helpcentre.littlehotelier.com/en/articles/8673945-channel-manager-manage-update-period))

- **ราคาของแต่ละช่องทางไม่ได้รองรับข้อจำกัดทุกแบบ** เครื่องหมายขีด (-) ในช่องของช่องทางหมายความว่าช่องทางนั้นไม่รองรับการอัปเดตประเภทนั้น ใน Channel Manager หน้า **Configure** ของราคาช่องทางจะแสดงประเภทการอัปเดตที่รับได้
- **ระยะจองล่วงหน้าต่างกัน** Channel Manager ส่งการอัปเดตล่วงหน้า 400 วันตามค่าเริ่มต้น (สูงสุด 750 วัน) การอัปเดตที่เกินระยะสูงสุดของช่องทางจะไม่ซิงก์ สำหรับ Booking.com ระยะสูงสุดคือ 545 วัน
- **Expedia** รับ stop sell จาก Little Hotelier ที่ระดับราคาเท่านั้น ส่วน stop sell ระดับห้องต้องจัดการใน Expedia Partner Central ([ปัญหา stop sell ของ Expedia](https://helpcentre.littlehotelier.com/en/articles/15201269-troubleshoot-expedia-stop-sell-issues))
- **Airbnb** ที่ใช้ Enhanced Sync รับราคา ห้องว่าง และข้อจำกัด แต่ช่องที่คุณเปลี่ยนใน extranet ของ Airbnb เองจะเป็นสีเทาใน Channel Manager ([จับคู่กับ Airbnb](https://helpcentre.littlehotelier.com/en/articles/8693078-map-to-airbnb))

หลังตั้งข้อจำกัดที่สำคัญ ให้เปิด extranet ของช่องทางนั้นแล้วสุ่มตรวจสักหนึ่งวัน

## โรงแรมขนาดเล็กควรใช้เมื่อไร

- **สุดสัปดาห์ที่คนจองเยอะและช่วงอีเวนต์** ตั้งจำนวนคืนขั้นต่ำ 2 คืนในคืนที่มีอีเวนต์ หรือตั้ง CTA ในคืนที่ขายดีที่สุด เพื่อขายแบบพักเต็มช่วง แทนการขายคืนเดี่ยวที่ทิ้งคืนว่างไว้
- **คืนว่างคั่นกลาง** คืนว่างที่อยู่ระหว่างสองคืนที่เต็มขายได้แค่แบบพักคืนเดียว ถ้าจำนวนคืนขั้นต่ำบล็อกอยู่ ให้ยกเลิกขั้นต่ำของคืนนั้นเมื่อใกล้ถึงวัน
- **ใกล้วันเข้าพัก** ข้อจำกัดที่สมเหตุสมผลตอนเหลืออีกหนึ่งเดือน อาจกลายเป็นตัวขวางการจองที่ได้มาง่ายๆ ในช่วงไม่กี่วันก่อนถึงวัน ควรทบทวนทุกสัปดาห์
- **วันที่ไม่มีใครรับเช็คอินได้** ตั้ง CTA ในวันเหล่านั้น ถ้ากฎของที่พักเปิดให้ทำได้
- **ปิดขายด่วน** ใช้ stop sell แทนการตั้งราคา 999 เมื่ออยากปิดขายวันนั้น

## วิธีที่เร็วกว่า: นโยบายข้อจำกัดและ stop sell ใน Hotelier Tools

Hotelier Tools ทำงานร่วมกับ Little Hotelier โดยใช้บัญชีของคุณเอง แทนที่จะตั้งข้อจำกัดทีละวัน คุณกำหนดนโยบายครั้งเดียว แล้วระบบจะเสนอเป็นรายคืนไว้ข้างราคา ฟีเจอร์ด้านราคายังอยู่ในสถานะ **alpha**

### 1. กำหนดนโยบายครั้งเดียว

เปิด **Pricing settings → Arrivals, departures & stays** (`/pricing/settings/restrictions`) คุณปิดรับเช็คอินหรือเช็คเอาท์ได้

- ในวันประจำสัปดาห์ที่กำหนด หรือในวันที่เจาะจง
- ตามอัตราการเข้าพักหรือจำนวนห้องที่เหลือ
- เฉพาะเมื่อคืนก่อนหน้าและคืนถัดไปยังเปิดขายอยู่

Hotelier Tools ตรวจจับรูปแบบวันในสัปดาห์ที่คุณใช้อยู่แล้วใน Little Hotelier และเสนอให้ใช้ต่อ ส่วน **weekend packages** (แพ็กเกจสุดสัปดาห์) ที่เปิดใช้ได้ตามต้องการจะตั้งจำนวนคืนขั้นต่ำให้ ตัวเลือกนี้ปิดไว้เป็นค่าเริ่มต้น และเมื่อเปิดจะตั้งเป็นวันศุกร์และเสาร์ 2 คืน แพ็กเกจจะไม่ลดจำนวนคืนขั้นต่ำที่ยาวกว่าซึ่งมีคนตั้งไว้เอง และหน้านี้ไม่เขียนอะไรลง Little Hotelier

::screenshot{src="/images/blog/demo/en/pricing-settings-arrivals-departures-stays.webp" alt="หน้า Arrivals, departures & stays ใน Hotelier Tools แสดงกฎ No arrivals กับปุ่มวัน Every week จาก Mon ถึง Sun, On these dates, เงื่อนไข An event fills the town และ The nights either side are still open, Occupancy above และ Rooms left at most แล้วต่อด้วยส่วนต้นของ No departures" caption="ระบุครั้งเดียวว่าคืนไหนไม่รับเช็คอินหรือเช็คเอาท์ หน้านี้ไม่เขียนอะไรลง Little Hotelier" path="/pricing/settings/restrictions"}
::

### 2. ตรวจแล้วกดใช้ทีละคืน

ที่หน้า **Recommendations** (`/price-recommendations`) แต่ละคืนแสดงสถานะเช็คอิน (A) และเช็คเอาท์ (D) ไว้ข้างราคา กดสลับในคืนที่คุณไม่เห็นด้วย ติ๊กคืนที่ต้องการ แล้วกด **Apply to Little Hotelier…** จะไม่มีอะไรเปลี่ยนจนกว่าคุณจะยืนยัน

สำหรับวันพิเศษเฉพาะครั้ง หน้า **Date rules** (`/pricing/settings/dates`) มีกฎแบบ "stay" ที่ตั้งเฉพาะจำนวนคืนขั้นต่ำหรือกฎการเช็คอินในคืนเหล่านั้น

### 3. ตรวจสอบและตั้ง stop sell ของช่องทางขาย

กด **Check channel manager** ในหน้า Recommendations แล้ว Hotelier Tools จะอ่านสถานะ stop sell ของ SiteMinder ผ่านเซสชัน Little Hotelier เดียวกัน (อ่านเฉพาะตอนที่คุณกดเท่านั้น) และคอลัมน์ช่องทางจะแสดงสถานะเปิด ปิด หรือผสมของแต่ละคืน เลือกเป้าหมาย (เปิดทั้งหมด ปิดทั้งหมด หรือคงเดิม) ระบบจะส่งคำสั่งนี้ **หลัง** การเปลี่ยนราคาใน Little Hotelier และเฉพาะคืนที่เปลี่ยนราคาสำเร็จเท่านั้น

::screenshot{src="/images/blog/demo/en/price-recommendations-apply-dialog.webp" alt="กล่องโต้ตอบ Apply to Little Hotelier สำหรับ 3 คืนของ Doble Estándar (เสาร์ 3 ต.ค. อาทิตย์ 4 ต.ค. จันทร์ 5 ต.ค.) พร้อมราคาปัจจุบันและราคาใหม่ และคอลัมน์ Arr กับ Dep คำเตือนว่าราคาและข้อจำกัดเปลี่ยนทันทีโดยไม่มีการยกเลิกอัตโนมัติ ตัวเลือก Send me an email ตัวเลือก Also update sales in the Channel Manager (SiteMinder) และปุ่ม Apply 3 change(s)" caption="ยืนยันการเปลี่ยนราคา เช็คอิน/เช็คเอาท์ และ stop sell ของ SiteMinder ได้ในกล่องเดียว ไม่มีอะไรเปลี่ยนจนกว่าคุณจะกดใช้" path="/price-recommendations"}
::

ระบบอัตโนมัติ (autopilot) ไม่เคยเปลี่ยน stop sell และจะเขียนจำนวนคืนขั้นต่ำก็ต่อเมื่อคุณอนุญาตแยกต่างหาก

::demo-cta{path="/pricing/settings/restrictions"}
::

อ่านเพิ่มเติม: [ค่าคอมมิชชัน Booking.com](/blog/booking-com-commission), [รายการรอสำหรับวันที่เต็ม](/blog/hotel-waitlist-sold-out-dates)

## สรุป

- **CTA** ปิดรับเช็คอินในวันนั้น **CTD** ปิดรับเช็คเอาท์ **จำนวนคืนขั้นต่ำ** กำหนดความยาวการจองที่สั้นที่สุด และ **stop sell** ปิดขายราคาห้องโดยคงจำนวนห้องไว้
- ใน Little Hotelier ให้ตั้งทีละราคาห้องที่ **Front Desk > Inventory** หรือใช้ **Bulk Update** สำหรับช่วงวันที่ ส่วน stop sell รายช่องทางอยู่ใน Channel Manager
- ตรวจดูว่าแต่ละช่องทางรองรับข้อจำกัดใดบ้าง และทบทวนทุกสัปดาห์เมื่อใกล้วัน
- ด้วย [dynamic pricing ของ Hotelier Tools](/tools/bot/dynamic-pricing) คุณกำหนดนโยบายครั้งเดียว เห็นผลข้างราคา และตั้ง stop sell ของ SiteMinder ได้จากหน้าเดียวกัน Hotelier Tools ใช้ฟรีสำหรับทุกโรงแรมจนถึง 10 มกราคม 2027
- อ่านต่อ: [dynamic pricing สำหรับโรงแรมขนาดเล็กบน Little Hotelier](/blog/dynamic-pricing-little-hotelier) และ[เคล็ดลับและฟีเจอร์ที่ซ่อนอยู่ของ Little Hotelier](/blog/little-hotelier-tips)
