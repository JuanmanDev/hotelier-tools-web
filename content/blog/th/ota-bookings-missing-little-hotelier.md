---
title: "การจอง Booking.com หรือ Expedia ไม่เข้า Little Hotelier: สาเหตุ วิธีตรวจ และวิธีป้องกันโอเวอร์บุ๊ก"
seoTitle: "การจอง Booking.com หรือ Expedia ไม่เข้า Little Hotelier"
description: "ทำไมการจองจาก OTA ไม่เข้า Little Hotelier ตรวจสถานะการส่งได้ที่ไหน ปกป้องห้องอย่างไร และรับการแจ้งเตือนเมื่อมีการจองหายไป"
date: 2026-10-29
updated: 2026-11-05
category: operations
tags: [booking.com, expedia, channel manager, โอเวอร์บุ๊ก, little hotelier, siteminder]
keywords: [การจอง booking.com ไม่เข้า little hotelier, การจอง expedia ไม่เข้า channel manager, little hotelier การจองหาย, siteminder reservation delivery failed, booking.com การจองไม่เข้า pms, channel manager โอเวอร์บุ๊ก, resend pms message little hotelier, การจองหายจาก channel manager, ห้องโอเวอร์บุ๊ก booking.com]
feature: automated-checks
demoPath: /reservations/calendar
cover: /images/blog/demo/en/ota-missing-calendar-double-booked.webp
coverAlt: "ปฏิทินการจองของ Hotelier Tools ระหว่างวันที่ 4 ถึง 17 พฤศจิกายน 2026: ห้องจัดกลุ่มตามประเภท การจองที่ยืนยันแล้วและเช็คอินแล้วแสดงเป็นแถบ แถว No room yet ห้อง 104 ปิดซ่อมบำรุง และคำอธิบายสัญลักษณ์ Checked in, Checked out, Confirmed, Double booked และ Room closed"
faq:
  - q: "ทำไมการจอง Booking.com ไม่แสดงใน Little Hotelier"
    a: "ส่วนใหญ่เป็นเพราะห้องหรือเรตที่แขกจองยังไม่ได้แมป (map) หรือถูกปิดใช้งานใน Channel Manager ของ Little Hotelier การจองถูกทำภายใต้รหัสที่พักอื่น หรือการส่งล้มเหลว ตรวจสถานะการส่งได้ที่ My apps > Channel Manager > Reservations"
  - q: "ส่งการจองที่ล้มเหลวเข้า Little Hotelier ใหม่ได้อย่างไร"
    a: "ที่ My apps > Channel Manager > Reservations คลิกรหัสการจอง เปิดแท็บ Little Hotelier ในหน้าต่าง Booking summary แล้วคลิก Resend PMS message การจองที่ไม่มีสถานะการส่งจะส่งใหม่ไม่ได้ ต้องกรอกเอง"
  - q: "เมื่อการจองหายไป ควรทำอะไรก่อน"
    a: "ปกป้องห้องก่อน สร้างการจองเองใน Front Desk > Calendar ด้วยรายละเอียดจาก Extranet ซึ่งจะลดห้องว่างในทุกช่องทาง แล้วค่อยหาว่าทำไมการจองไม่เข้ามา"
  - q: "Booking.com แจ้งไหมเมื่อการจองส่งไปไม่ถึง channel manager"
    a: "แจ้ง Booking.com ส่งอีเมลหาที่พักเมื่อมีปัญหาในการเพิ่มการจองเข้าระบบของผู้ให้บริการเชื่อมต่อ จึงควรอัปเดตข้อมูลติดต่อใน Extranet ให้เป็นปัจจุบัน ส่วนตัวการจองเองจะอยู่ใน Extranet เสมอ"
  - q: "Hotelier Tools แจ้งเตือนการจองที่หายไปเร็วแค่ไหน"
    a: "สำหรับ Expedia การตรวจรันทุก 15 นาที และแจ้งเตือนการจองที่ยังหายอยู่หลัง 30 นาที โดยเห็นว่าหายในการอ่านอย่างน้อยสองครั้ง: ประมาณ 30 ถึง 45 นาทีหลังมีการจอง ระบบแจ้งแต่ละการจองครั้งเดียว และแจ้งอีกครั้งเมื่อการจองเข้ามาแล้ว สำหรับ Booking.com ตอนนี้แจ้งเฉพาะเหตุขัดข้องด้านการจองเท่านั้น"
  - q: "Hotelier Tools เป็นส่วนหนึ่งของ Little Hotelier, SiteMinder, Booking.com หรือ Expedia หรือไม่"
    a: "ไม่ใช่ Hotelier Tools เป็นอิสระ ไม่มีความเกี่ยวข้องหรือได้รับการรับรองจากรายใดเลย อ่าน Extranet และ Little Hotelier ด้วยบัญชีของคุณเอง และไม่สร้าง เปลี่ยน หรือยกเลิกการจองเด็ดขาด"
---

เมื่อการจองจาก Booking.com หรือ Expedia ไม่มีใน Little Hotelier เกือบทุกครั้งจะติดอยู่ที่หนึ่งในสามจุด: ห้องหรือเรตยังไม่ได้แมป (หรือถูกปิดใช้งาน) ใน Channel Manager การจองไปเข้ารหัสที่พักอื่น หรือการส่งล้มเหลว ตรวจสถานะได้ที่ **My apps > Channel Manager > Reservations** และส่งใหม่ถ้าล้มเหลว ไม่ว่าสาเหตุคืออะไร ให้สร้างการจองเองก่อน เพื่อไม่ให้ห้องถูกขายซ้ำ

หน้าจอของ Little Hotelier, Booking.com และ Expedia ด้านล่างตรวจสอบ ณ เดือนพฤศจิกายน 2026

## ทำไมการจองไม่เข้า Little Hotelier

การจองเดินทางจาก OTA ไปยัง channel manager ของ SiteMinder และจากที่นั่นเข้าสู่ Front Desk ของ Little Hotelier และอาจติดที่ขั้นไหนก็ได้ สาเหตุที่พบบ่อยตาม[คู่มือการจองที่หายไป](https://helpcentre.littlehotelier.com/en/articles/12391160-troubleshooting-missing-reservations-and-overbookings)ของ Little Hotelier และ[คู่มือการซิงค์](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager)ของ Booking.com:

| สาเหตุ | อาการ |
|---|---|
| **ยังไม่ได้แมปแผนราคาหรือห้อง** | แขกจองเรตที่ยังไม่ได้เชื่อมใน Channel Manager การจองไม่มีสถานะการส่งเลย |
| **เรตหรือช่องทางถูกปิดใช้งาน** | รายการที่ปิดอยู่ไม่ส่งการอัปเดต แต่ OTA ยังขายต่อตามห้องว่างชุดเก่า |
| **จองก่อนแมปเรต** | การจองที่เกิดก่อนคุณเปิดใช้หรือแมปเรตของช่องทางจะไม่ซิงค์เอง |
| **รหัสที่พักผิด** | บัญชี Extranet อีกบัญชีภายใต้รหัสอื่น การจองของบัญชีนั้นไม่มีวันถึง Little Hotelier |
| **การส่งล้มเหลว** | channel manager ได้รับการจองแล้ว แต่ Little Hotelier ปฏิเสธหรือยืนยันไม่ได้ |
| **เหตุขัดข้องฝั่ง OTA** | API การจองของ OTA ล่ม การจองใหม่ การแก้ไข และการยกเลิกหยุดเข้ามาชั่วคราว |

อย่าลืมการแก้ไขและการยกเลิก ทั้งสองเดินทางผ่านเส้นทางเดียวกัน การยกเลิกที่หายไปทำให้ห้องที่ขายได้ยังถูกบล็อกอยู่ การเปลี่ยนวันที่ที่หายไปทำให้แขกอยู่ผิดคืน ทั้งสองแก้แบบเดียวกัน: เทียบการจองใน Extranet กับใน Little Hotelier

การจองที่ถูกรับทั้งที่ห้องว่างเป็นศูนย์เป็นอีกปัญหาหนึ่ง Little Hotelier แนะนำให้ถาม OTA ว่าทำไมจึงรับการจองนั้น และขอบันทึกการอัปเดตห้องว่างที่ส่งไปยังช่องทางนั้นจากฝ่ายซัพพอร์ตไว้เป็นหลักฐาน

## วิธีตรวจสถานะการส่งใน Little Hotelier

1. ไปที่ **My apps > Channel Manager > Reservations** ใช้ตัวกรอง **All PMS status** เพื่อดูสถานะการส่งของแต่ละการจอง
2. อ่านสถานะ ([ศูนย์ช่วยเหลือ](https://helpcentre.littlehotelier.com/en/articles/8673803-check-little-hotelier-s-reservation-delivery-statuses)):
   - **DELIVERED**: Little Hotelier รับแล้ว ถ้ายังหาไม่เจอ ให้ค้นใน Front Desk ด้วยชื่อแขกและปีที่ถูกต้อง แล้วติดต่อฝ่ายซัพพอร์ต
   - **PENDING**: ยังไม่ได้รับ ปกติจะเคลียร์เองในไม่กี่นาที
   - **FAILED**: ถูกปฏิเสธหรือไม่ได้รับการยืนยัน ข้อผิดพลาดจะถูกส่งทางอีเมลถึงคุณด้วย
   - **No status** (ไม่มีสถานะ): เรตยังไม่ได้แมป ส่งใหม่ไม่ได้ จึงต้องกรอกเอง
3. ถ้าจะส่งการจองที่ล้มเหลวใหม่ ให้คลิกรหัสการจอง ในหน้าต่าง **Booking summary** เปิดแท็บ **Little Hotelier** แล้วคลิก **Resend PMS message**

การส่งที่ล้มเหลวยังแสดงใต้ไอคอนกระดิ่ง ใน **Reservation delivery failures** จากนั้นแก้สาเหตุที่ **My apps > Channel Manager > Channels > Configure**: แมปเรตที่ยังไม่ได้แมป เปิดเรตที่ถูกปิดใช้งาน และตรวจว่า **Rates Mapped** แสดงตัวเลขสองตัวเท่ากัน (เช่น 44/44) เรตที่ล้มเหลวซ้ำๆ ด้วยข้อความ "Unable to locate" ถูกลบหรือเปลี่ยนที่ฝั่ง OTA และต้องแมปใหม่ ([ข้อผิดพลาดในการแมป](https://helpcentre.littlehotelier.com/en/articles/12687511-troubleshooting-channel-mapping-errors))

## วิธีตรวจบน Booking.com และ Expedia

**Booking.com** ทุกการจองอยู่ในรายการ **Reservations** ของ Extranet ไม่ว่าปลายทางจะเกิดอะไรขึ้น Booking.com ระบุว่าการจองอาจไม่มีในระบบของผู้ให้บริการ เมื่อห้องหรือเรตยังไม่ได้เชื่อมที่นั่น หรือหลังเกิดปัญหาทางเทคนิค และจะส่งอีเมลหาคุณทุกครั้งที่เพิ่มการจองเข้าระบบของผู้ให้บริการไม่ได้ จึงควรอัปเดตข้อมูลติดต่อใน Extranet ให้เป็นปัจจุบัน ([Booking.com Partner Help](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-extranet-and-your-channel-manager)) ถ้าการจองหายไปหลายรายการพร้อมกัน ให้ดู[หน้าสถานะการเชื่อมต่อ](https://connect.booking.com/status)สาธารณะของ Booking.com ว่ามีเหตุขัดข้องด้านการจองหรือไม่

**Expedia** เปิดหน้าการจองใน Partner Central ค้นด้วยหมายเลขยืนยันหรือวันที่ และจดห้องกับเรตที่แขกจองไว้ ถ้ามีใน Partner Central แต่ไม่มีใน Little Hotelier ช่องว่างอยู่ระหว่าง Expedia กับ SiteMinder: ตรวจว่า SiteMinder ยังเป็นผู้ให้บริการเชื่อมต่อของคุณทั้งสำหรับเรตและการจอง และเรตนั้นแมปไว้แล้ว

ทั้งสองกรณี Little Hotelier ติดต่อ OTA แทนคุณไม่ได้ ถ้าการแมปถูกต้องและ OTA บอกว่าส่งการจองแล้ว ให้ขอบันทึกการส่ง XML ของการจองนั้นจาก OTA แล้วส่งให้ฝ่ายซัพพอร์ตของ Little Hotelier

## วิธีป้องกันโอเวอร์บุ๊กระหว่างตรวจสอบ

1. **สร้างการจองเอง** ใน **Front Desk > Calendar** คลิกวันเช็คอิน เลือก **Add Reservation** แล้วคัดลอกรายละเอียดจาก Extranet การสร้างการจองจะลดห้องว่างของคุณในทุกช่องทาง
2. **จำไว้ว่าเป็นการจองที่สร้างเอง** การแก้ไขหรือยกเลิกการจองนั้นภายหลังต้องทำเองใน Front Desk ด้วย ถ้าการจองต้นฉบับเข้ามาทีหลัง ตรวจให้แน่ใจว่าไม่ได้เก็บไว้ทั้งสองรายการ
3. **ห้องเต็มแล้ว?** ขอให้ OTA ย้ายแขกไปที่พักอื่น
4. **อย่าให้สาเหตุกลับมาอีก** แมปทุกเรตที่คุณขาย คอยดูช่องทางที่ถูกปิดใช้งาน และพิจารณาปิดการขาย (stop sell) ในช่องทางที่ขายได้น้อยเมื่อเหลือห้องสุดท้าย

## วิธีที่เร็วกว่า: รับการแจ้งเตือนเมื่อการจองจาก OTA หายไป

การตรวจเองใช้ได้เมื่อคุณรู้แล้วว่ามีการจองหาย ส่วนที่ยากคือการรู้ Hotelier Tools เทียบรายการจองของ Expedia เองกับ Little Hotelier ทุก 15 นาที และส่งอีเมลแจ้งคุณเมื่อมีการจองที่ไม่เข้ามา สำหรับ Booking.com ตอนนี้แจ้งเหตุขัดข้องด้านการจอง ส่วนการตรวจทีละการจองยังไม่เสร็จ (รายละเอียดด้านล่าง)

1. เชื่อมต่อ Extranet ที่ **Credentials**: **Expedia Partner Central** (`/credentials/expedia-extranet`) หรือ **Booking.com extranet** (`/credentials/booking-extranet`)
2. รักษาเซสชันให้ใช้งานได้ด้วย **Keep Expedia signed in** (หรือ **Keep the session signed in** สำหรับ Booking.com) ในหน้าเดียวกัน การตรวจอ่านเซสชันที่หมดอายุแล้วไม่ได้
3. ตั้งเวลา **Check Expedia reservations are in Little Hotelier** (หรือของ Booking.com) จากการ์ดของงานนั้น ด้วยค่าที่แนะนำ: **Every 15 minutes** เมื่อเชื่อมต่อ Extranet และคงการเข้าสู่ระบบไว้แล้ว Hotelier Tools จะสร้างงานนี้ให้คุณ
4. ตรวจว่าคนที่ควรได้รับอีเมลได้รับจริง: **Settings > Notifications** (`/settings/notifications`) ถ้าไม่มีที่อยู่อีเมลในนั้น อีเมลจะส่งไปที่อีเมลติดต่อของเจ้าของ
5. เมื่อได้รับอีเมล ให้หาการจองใน Extranet สร้างการจองใน Little Hotelier หรือปิดห้องในคืนนั้น แล้วแก้สาเหตุตามด้านบน

แต่ละรอบอ่านการจองที่เกิดวันนี้และแขกที่จะมาถึงใน 14 วันข้างหน้า รวมถึงการจองใน Little Hotelier การจอง Expedia ถูกจับคู่ด้วยรหัสยืนยัน (`EXP-` ตามด้วยหมายเลข) ซึ่งเป็นรหัสเดียวกับที่ Little Hotelier เก็บไว้

::screenshot{src="/images/blog/demo/en/ota-missing-expedia-alert-run.webp" alt="รายละเอียดรอบการทำงานของ checkExpediaReservationsInLh วันที่ 1 พ.ย. 2026 เวลา 11:30 สถานะ Success พร้อมสรุปผล: Expedia → Little Hotelier: 1 of 6 bookings in scope are NOT in Little Hotelier: 2570106574. Alert emailed for 1 booking missing for over 30 minutes: 2570106574" caption="แต่ละรอบบอกว่าเทียบการจองไปกี่รายการ และรายการไหนหายไป การแจ้งเตือนส่งเพียงครั้งเดียว" path="/cron-logs"}
::

### แจ้งครั้งเดียวต่อการจอง ไม่ใช่ทุก 15 นาที

การส่งการจองมักใช้เวลาไม่กี่นาที การอ่านครั้งเดียวจึงไม่พอ ทุกการจองที่หายไปจะถูกบันทึกลงสมุดบันทึก:

- **แจ้งหลัง 30 นาที โดยเห็นว่าหายในการอ่านอย่างน้อยสองครั้ง** คือประมาณ 30 ถึง 45 นาทีหลังมีการจอง
- **แจ้งครั้งเดียว** อีเมลถูกจองสิทธิ์ไว้ก่อนส่ง สองรอบจึงส่งซ้ำกันไม่ได้ ถ้าอีเมลไม่ถึงใครเลย สิทธิ์จะถูกปล่อยและรอบถัดไปจะลองใหม่
- **แจ้งอีกครั้งเมื่อแก้แล้ว** เมื่อการจองปรากฏใน Little Hotelier หรือ OTA ยกเลิก หรือการเข้าพักสิ้นสุดแล้ว คุณจะได้อีเมล "no longer missing" (ไม่หายแล้ว) หนึ่งฉบับ
- **ไม่บอกว่าปกติทั้งที่ไม่รู้** ถ้าอ่านรายการได้ไม่ครบ รอบนั้นจะล้มเหลวและแจ้งให้ทราบ ไม่มีอะไรถูกนับว่าตรวจแล้ว

เดโมแสดงเหตุการณ์ครบหนึ่งรอบในประวัติการทำงานของการตรวจ Expedia: การจองที่เห็นว่าหายไปครั้งแรก การแจ้งเตือน 30 นาทีต่อมา และเมื่อการจองเข้า Little Hotelier แล้ว ก็มีบันทึก "no longer missing" (ไม่หายแล้ว)

::screenshot{src="/images/blog/demo/en/ota-missing-expedia-check-runs.webp" alt="ประวัติการทำงานที่กรองเฉพาะงาน Check Expedia reservations are in Little Hotelier มีสามรอบที่สำเร็จในวันที่ 1 พ.ย. 2026: เวลา 10:59 การจอง 2570106574 เป็นหนึ่งใน 6 รายการในขอบเขตที่ไม่อยู่ใน Little Hotelier เวลา 11:29 การจองเดิมพร้อม Alert emailed และเวลา 12:44 การจองทั้ง 6 รายการอยู่ใน Little Hotelier และ 1 การจองจากการแจ้งเตือนก่อนหน้าไม่หายแล้ว" caption="เหตุการณ์เดียวในสามรอบ: เห็นว่าหายไป แจ้งเตือนครั้งเดียวหลัง 30 นาที แล้วรายงานว่าแก้แล้ว" path="/cron-logs"}
::

การตรวจ Expedia ยังบันทึกสถานะและวันที่ที่ไม่ตรงกัน (เช่น ยกเลิกใน Expedia แต่ยังใช้งานอยู่ใน Little Hotelier) และการจองที่ไม่มีห้อง รายการเหล่านี้แสดงในสรุปของรอบนั้นใต้ **Run History** (`/cron-logs`)

::screenshot{src="/images/blog/demo/en/ota-missing-calendar-double-booked.webp" alt="ปฏิทินการจองของ Hotelier Tools ระหว่างวันที่ 4 ถึง 17 พฤศจิกายน 2026: ห้องจัดกลุ่มตามประเภท การจองที่ยืนยันแล้วและเช็คอินแล้วแสดงเป็นแถบ แถว No room yet ห้อง 104 ปิดซ่อมบำรุง และคำอธิบายสัญลักษณ์ Checked in, Checked out, Confirmed, Double booked และ Room closed" caption="ปฏิทินทำเครื่องหมายการจองสองรายการในห้องเดียวกันว่า Double booked จึงเห็นโอเวอร์บุ๊กที่เกิดขึ้นแล้วได้ง่าย" path="/reservations/calendar"}
::

### Booking.com: การแจ้งเหตุขัดข้องใช้ได้ ส่วนการตรวจทีละการจองยังไม่เสร็จ

ก่อนอ่าน Extranet การตรวจ Booking.com จะอ่านหน้าสถานะสาธารณะของ Booking.com เหตุขัดข้องของ API การจองจะถูกแจ้งทางอีเมลครั้งเดียวเมื่อเริ่ม และอีกครั้งเมื่อแก้ไขแล้ว แม้เซสชัน Extranet ของคุณจะใช้ไม่ได้ ซึ่งเป็นช่วงที่ไม่มีใครสังเกตเห็นพอดี

การเทียบทีละการจองสำหรับ Booking.com **ยังใช้งานไม่ได้** Extranet สร้างรายการจองด้วยสคริปต์ หน้าที่ Hotelier Tools ได้รับจึงมีตารางที่ไม่มีแถว แทนที่จะรายงานว่า "ปกติทั้งหมด" เกี่ยวกับการจองที่ไม่มีใครเห็น การตรวจจะล้มเหลวอย่างชัดเจนทุกรอบจนกว่าจะอ่านรายการนั้นได้ ตอนนี้การแจ้งเตือนทีละการจองใช้ได้กับ Expedia และ Booking.com ให้การแจ้งเหตุขัดข้อง

### สิ่งที่ระบบไม่ทำเด็ดขาด

- **อ่านอย่างเดียว** ในทุกฝั่ง ไม่สร้าง เปลี่ยน หรือปิดการจอง และไม่ปิดห้องแทนคุณ
- **แค่สอง OTA** Airbnb, Hostelworld และอื่นๆ ไม่ถูกตรวจ
- **ไม่ได้แทนการแมป** ถ้าเรตยังไม่ได้แมป คุณยังต้องแก้ใน Little Hotelier

## อีเมลน้อยลงแต่ตรงประเด็นขึ้นจากการตรวจอื่นๆ

หลักเดียวกันนี้ใช้กับการแจ้งเตือนอื่นของ Hotelier Tools ที่ **Automated Checks** (`/automated-checks`) ตั้ง **Send email on** ของงานเป็น **Only with new or changed issues** (เฉพาะเมื่อมีปัญหาใหม่หรือเปลี่ยนแปลง): รายงานจะมีเฉพาะปัญหาที่รายงานก่อนหน้าไม่เคยพูดถึง หรือที่เปลี่ยนไป และเมื่อมีคนทำเครื่องหมายปัญหาว่าแก้แล้วที่ **Issues** (`/automated-checks/issues`) ปัญหานั้นจะคงสถานะแก้แล้วไว้ แม้การตรวจยังพบสิ่งเดิม ปัญหาที่ต่างออกไปจะเปิดเป็นปัญหาใหม่

::screenshot{src="/images/blog/demo/en/ota-missing-checks-issues.webp" alt="หน้า Issues ใน Hotelier Tools: คำแนะนำสี่ขั้นตอน (การตรวจพบปัญหา แสดงรายการตามการจอง คุณแก้ใน Little Hotelier และ Verify ตรวจซ้ำ) ตัวนับเปิดอยู่ 21 แก้แล้ว 5 รวม 26 ตัวกรอง และข้อผิดพลาด do-not-rebook ในการจองหนึ่งรายการพร้อมปุ่ม Verify" caption="ปัญหาที่การตรวจตามเวลาพบ จัดกลุ่มตามการจอง สถานะ Resolved ที่คนกำหนดจะคงอยู่จนกว่าจะมีอะไรเปลี่ยน" path="/automated-checks/issues"}
::

::demo-cta{path="/reservations/calendar"}
::

แดชบอร์ดใช้ฟรีสำหรับทุกโรงแรมจนกว่าจะเริ่มเรียกเก็บเงินในวันที่ 10 มกราคม 2027 ทุกการตรวจอยู่ใน[หน้า Automated checks](/tools/bot/automated-checks)

::callout{type="info" title="เครื่องมืออิสระ"}
Hotelier Tools ไม่มีความเกี่ยวข้องหรือได้รับการรับรองจาก Booking.com, Expedia, SiteMinder หรือ Little Hotelier เชื่อมต่อด้วยบัญชี Little Hotelier ของโรงแรมคุณเอง และบัญชี Extranet ของคุณเอง
::

อ่านเพิ่มเติม: [เช็คลิสต์ประจำวันของแผนกต้อนรับ](/blog/hotel-front-desk-checklist-automation), [ปฏิทินการจองสำหรับ Little Hotelier](/blog/little-hotelier-reservation-calendar), [ลิงก์ชำระเงินใน Little Hotelier](/blog/little-hotelier-payment-links)

## สรุป

- การจองจาก OTA ที่หายไปมักหมายถึงเรตที่ยังไม่ได้แมปหรือถูกปิดใช้งาน รหัสที่พักผิด หรือการส่งที่ล้มเหลว
- ตรวจ **My apps > Channel Manager > Reservations**: **FAILED** ส่งใหม่ได้ด้วย **Resend PMS message** ส่วน **no status** หมายความว่าเรตยังไม่ได้แมป
- ปกป้องห้องก่อน: เพิ่มการจองเองใน **Front Desk > Calendar** แล้วค่อยแก้สาเหตุ
- Hotelier Tools เทียบ Expedia กับ Little Hotelier ทุก 15 นาที และส่งอีเมลแจ้งแต่ละการจองที่หายไปครั้งเดียว รวมถึงเหตุขัดข้องด้านการจองของ Booking.com ส่วนการตรวจทีละการจองของ Booking.com ยังไม่เสร็จ
