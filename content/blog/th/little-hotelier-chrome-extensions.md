---
title: "ส่วนขยาย Chrome ฟรีที่ทำให้ Little Hotelier เร็วขึ้น"
seoTitle: "ส่วนขยาย Chrome สำหรับ Little Hotelier (ฟรี)"
description: "สคริปต์ฟรีสำหรับ Little Hotelier: ราคาในปฏิทิน ตารางกว้างขึ้น ประเมินค่าคอมมิชชั่น Booking.com และพิมพ์ใบแจ้งหนี้คลิกเดียว พร้อมวิธีติดตั้งอย่างปลอดภัย"
date: 2026-10-03
category: tips
tags: [chrome extension, tampermonkey, userscripts, little hotelier, productivity]
keywords: [ส่วนขยาย chrome little hotelier, little hotelier chrome extension, tampermonkey scripts, userscript chrome, little hotelier calendar prices, little hotelier booking.com commission]
demoPath: /
cover: /images/scripts/prices-display/to.png
coverAlt: "ปฏิทินของ Little Hotelier (หน้าจอภาษาสเปน) ที่แสดงราคาต่อคืนใต้ประเภทห้องทุกแถว ซึ่งเพิ่มเข้ามาโดยสคริปต์ Prices Display"
faq:
  - q: "สคริปต์เหล่านี้ทำโดย Little Hotelier หรือเปล่า?"
    a: "ไม่ใช่ เป็นสคริปต์อิสระที่ใช้ฟรี เผยแพร่โดย Hotelier Tools ซึ่งไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder หรือ Little Hotelier สคริปต์ทำงานในเบราว์เซอร์ของคุณเอง ภายในเซสชัน Little Hotelier ของคุณเอง"
  - q: "ต้องใช้ Tampermonkey หรือส่วนขยาย Chrome อย่างไหน?"
    a: "จะว่าไปก็ต้องใช้ทั้งคู่ Tampermonkey ก็คือส่วนขยาย Chrome และสคริปต์ทำงานอยู่ข้างใน คุณติดตั้ง Tampermonkey ครั้งเดียว แล้วเพิ่มเฉพาะสคริปต์ที่ต้องการ"
  - q: "สคริปต์ใช้บนแท็บเล็ตได้ไหม?"
    a: "Tampermonkey ทำงานได้ในหลายเบราว์เซอร์ และในเมนูมีเวอร์ชันสำหรับโทรศัพท์และแท็บเล็ต สำหรับหน้าจอสัมผัส ให้ติดตั้ง Improve Style For Touch Screens ซึ่งทำให้ปุ่มและเมนูใหญ่ขึ้น ควรทดลองบนอุปกรณ์ของคุณก่อน"
  - q: "สคริปต์จะพังเมื่อ Little Hotelier อัปเดตหรือเปล่า?"
    a: "อาจพังได้ เพราะสคริปต์ปรับเปลี่ยนหน้าเว็บของ Little Hotelier ถ้าหน้าเว็บถูกออกแบบใหม่ สคริปต์อาจหยุดทำงานจนกว่าจะอัปเดต ให้ปิดสคริปต์ในเมนู Tampermonkey และแจ้งปัญหาบน GitHub"
  - q: "ถอนการติดตั้งสคริปต์อย่างไร?"
    a: "คลิกไอคอน Tampermonkey แล้วปิดสคริปต์ หรือเปิด Dashboard แล้วลบสคริปต์ จากนั้นโหลด Little Hotelier ใหม่ หน้าเว็บก็จะกลับเป็นปกติ"
  - q: "สคริปต์มีค่าใช้จ่ายไหม?"
    a: "ไม่มี สคริปต์สำหรับเบราว์เซอร์ฟรีตลอดไป และไม่ต้องสมัครบัญชี"
---

คุณทำให้ Little Hotelier ใช้งานเร็วขึ้นได้ด้วย userscript ฟรี ซึ่งเป็นโปรแกรมเสริมขนาดเล็กที่ทำงานในเบราว์เซอร์ผ่านส่วนขยาย Tampermonkey สคริปต์เหล่านี้เพิ่มราคาลงในปฏิทิน ขยายตารางที่อัดแน่น ประเมินค่าคอมมิชชั่น Booking.com ของแต่ละการจอง ใส่ปุ่มพิมพ์ใบแจ้งหนี้คลิกเดียวในหน้าการจอง และอื่นๆ อีก ติดตั้ง Tampermonkey ครั้งเดียว เปิด **Allow User Scripts** ใน Chrome แล้วกด **Install on Tampermonkey** ในหน้าของสคริปต์ที่ต้องการ

## Tampermonkey คืออะไร และทำไมใช้สคริปต์แทนการลงส่วนขยายหลายตัว

Tampermonkey เป็นส่วนขยายเบราว์เซอร์ที่รัน **userscript** ซึ่งเป็นไฟล์ JavaScript เล็กๆ ที่ปรับหน้าเว็บหลังโหลดเสร็จ แทนที่จะต้องมีส่วนขยายแยกสำหรับทุกการปรับแต่ง คุณติดตั้ง Tampermonkey ครั้งเดียวแล้วเพิ่มเฉพาะสคริปต์ที่ต้องการ ใช้ได้กับ Chrome, Edge, Firefox, Safari และ Opera

สคริปต์ของ Hotelier Tools แต่ละตัวเป็นไฟล์เดียวที่เปิดอ่านโค้ดได้ใน[repository สาธารณะบน GitHub](https://github.com/JuanmanDev/TampermonkeyLittleHotelier) มีทั้งหมด 16 ตัว: 15 ตัวพร้อมติดตั้ง และอีกหนึ่งตัวตั้งค่าให้ตามคำขอ ทุกตัวฟรีตลอดไป

## Userscript ปลอดภัยไหม เข้าถึงอะไรได้และอะไรไม่ได้

เป็นคำถามที่สมเหตุสมผล เพราะสคริปต์ทำงานอยู่ในหน้าเดียวกับที่เก็บข้อมูลการจองของคุณ นี่คือสิ่งที่สคริปต์เหล่านี้ทำและไม่ทำ

- **ทำงานเฉพาะบน Little Hotelier** แต่ละสคริปต์ระบุเว็บไซต์ที่อนุญาตให้ทำงาน คือที่อยู่ของ Little Hotelier เอง (รวม Direct Booking) และของ Chekin สำหรับสคริปต์ Chekin
- **ข้อมูลของคุณอยู่กับที่เดิม** สคริปต์ติดต่อกับ Little Hotelier เท่านั้น (และ Chekin เฉพาะสคริปต์นั้น) ไม่มีอะไรถูกส่งไปที่ Hotelier Tools
- **ทำงานในนามคุณ** สคริปต์ใช้เซสชันที่คุณเปิดอยู่ จึงทำได้เท่าที่คุณคลิกเองได้ บางตัวปรับแบบฟอร์มก่อนที่คุณกด Save เช่น ตั้งประเทศหรือจำนวนผู้ใหญ่
- **อ่านโค้ดได้** โค้ดเป็นสาธารณะ และ Tampermonkey แสดงโค้ดให้ดูก่อนติดตั้ง
- **อัปเดตตัวเอง** แต่ละสคริปต์ระบุที่อยู่บน GitHub ไว้ Tampermonkey จึงดึงเวอร์ชันใหม่ได้เอง

กฎทั่วไปสำหรับ userscript ทุกตัว: ติดตั้งจากแหล่งที่คุณไว้ใจเท่านั้น และถ้า Little Hotelier เปลี่ยนหน้าเว็บ สคริปต์อาจหยุดทำงานจนกว่าจะอัปเดต ให้ปิดสคริปต์ในเมนู Tampermonkey แล้วแจ้งบน GitHub

::callout{type="info" title="เป็นอิสระและใช้ฟรี"}
สคริปต์เหล่านี้เผยแพร่โดย Hotelier Tools ซึ่งไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder หรือ Little Hotelier ทำงานภายในบัญชี Little Hotelier ของโรงแรมคุณเอง และไม่ต้องสมัครบัญชี
::

## วิธีติดตั้งสคริปต์ (ประมาณ 5 นาทีสำหรับครั้งแรก)

1. **ติดตั้ง Tampermonkey** จาก [tampermonkey.net](https://www.tampermonkey.net/) เลือกเวอร์ชันปกติสำหรับเบราว์เซอร์ของคุณ ไม่ใช่เวอร์ชัน beta
2. **อนุญาตให้รันสคริปต์** ใน Chrome 138 ขึ้นไป คลิกขวาที่ไอคอน Tampermonkey เลือก **Manage extension** แล้วเปิด **Allow User Scripts** ส่วน Chrome เวอร์ชันเก่ากว่าหรือ Edge ให้เปิด `chrome://extensions` (หรือ `edge://extensions`) แล้วเปิด **Developer mode** ([คำถามที่พบบ่อยของ Tampermonkey](https://www.tampermonkey.net/faq.php?q=Q209))
3. **เปิดหน้าของสคริปต์** บนเว็บไซต์นี้ เช่น [Prices Display](/tools/ui/prices-display) แล้วกด **Install on Tampermonkey** Tampermonkey จะเปิดแท็บแสดงโค้ด แล้วกด **Install**
4. **โหลด Little Hotelier ใหม่** (F5) การเปลี่ยนแปลงจะปรากฏทันที

ถ้าปุ่มใช้ไม่ได้ ให้คัดลอกโค้ดจาก GitHub เลือก **Create a new script…** ในเมนู Tampermonkey วางโค้ด แล้วบันทึกด้วย Ctrl+S [คู่มือการติดตั้ง](/tools/ui/instructions)มีรูปประกอบทุกขั้นตอน และ[รายการสคริปต์ทั้งหมดอยู่ที่นี่](/chrome-extensions)

::screenshot{src="/images/ui/tamperMonkeyMenu.png" alt="เมนู Tampermonkey ใน Chrome แสดง Enabled, Create a new script และ Dashboard" caption="เมนู Tampermonkey: เปิดหรือปิดสคริปต์ สร้างสคริปต์เอง หรือเปิด Dashboard เพื่อลบสคริปต์" width="624" height="645"}
::

หากต้องการลบสคริปต์ ให้คลิกไอคอน Tampermonkey แล้วปิดสคริปต์ หรือเปิด **Dashboard** แล้วลบ

## สคริปต์ทั้งหมด แยกตามงาน

ทุกสคริปต์มีหน้าของตัวเอง พร้อมภาพก่อนและหลัง และปุ่มติดตั้ง

### เห็นข้อมูลมากขึ้นในหน้าจอเดียว

- [Full Width Reservation Table](/tools/ui/full-width-reservation-table): รายการจองใช้ความกว้างเต็มหน้าจอ ไม่ต้องเลื่อนไปด้านข้างอีก
- [Tables Full Width](/tools/ui/tables-full-width): แบบเดียวกันสำหรับทุกตารางใน Direct Booking
- [Compact Calendar UI](/tools/ui/compact-calendar-ui): วันและวันที่อยู่บรรทัดเดียวแทนสามบรรทัด และแถวประเภทห้องเตี้ยลง ปฏิทินจึงแสดงห้องได้มากขึ้น
- [Compact UI Reservation Details](/tools/ui/compact-ui-reservation-details): หน้ารายละเอียดการจองกระชับขึ้น พร้อมช่องหมายเหตุที่สูงขึ้น

::screenshot{src="/images/scripts/compact-calendar-ui/to.png" alt="ปฏิทินของ Little Hotelier (หน้าจอภาษาสเปน) หลังใช้ Compact Calendar UI โดยวันในสัปดาห์และวันที่อยู่บรรทัดเดียว และแถวประเภทห้องกระชับขึ้น" caption="Compact Calendar UI ทำให้เห็นห้องและวันได้มากขึ้นในหน้าจอเดียว" width="1187" height="1306"}
::

### ราคาและค่าคอมมิชชั่น Booking.com

- [Prices Display](/tools/ui/prices-display): แสดงราคาห้องของแต่ละคืนในปฏิทิน โดยอ่านจากหน้า Inventory ของคุณ สะดวกตอนแขกโทรมาถามราคาคืนวันศุกร์
- [Show Booking.com Commissions](/tools/ui/show-booking-commissions): เพิ่มรายละเอียดค่าคอมมิชชั่นโดยประมาณและยอดสุทธิโดยประมาณในการจองจาก Booking.com เป็นเพียงค่าประมาณ ตัวเลขจริงให้ดูจากใบแจ้งหนี้ของ Booking.com ดูเพิ่มเติมใน[Booking.com หักค่าคอมมิชชั่นเท่าไร](/blog/booking-com-commission)
- [Change Inventory Name](/tools/ui/change-inventory-name): เปลี่ยนชื่อเมนู **Inventory** เป็น "Inventory - Prices" (ภาษาอังกฤษและสเปน) เพื่อให้พนักงานใหม่หาราคาเจอ

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="การจองจาก Booking.com ใน Little Hotelier (หน้าจอภาษาสเปน) ที่มีบรรทัดสรุปเพิ่มสำหรับค่าธรรมเนียมการโอน ค่าคอมมิชชั่น Booking.com ค่าคอมมิชชั่นรวมพร้อม VAT และยอดสุทธิโดยประมาณ" caption="ประมาณการว่าการจองจาก Booking.com เหลือเข้ากระเป๋าเท่าไรหลังหักค่าคอมมิชชั่น" width="752" height="715"}
::

### ชำระเงินและออกใบแจ้งหนี้ด้วยการคลิกน้อยลง

- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button): ลิงก์พิมพ์ใบแจ้งหนี้โดยตรงในหน้าการจอง ไม่ต้องเปิดเมนู Print
- [Update Payment Link Button](/tools/ui/update-payment-link-button): ปรับข้อความบนปุ่มลิงก์ชำระเงินให้ชัดขึ้น และเพิ่มเบอร์โทรของแขกจากแบบฟอร์มให้อัตโนมัติ
- [Bank Transfer Email Button](/tools/ui/bank-transfer-email-button): ปุ่มที่ส่งอีเมลรายละเอียดบัญชีธนาคารพร้อมข้อความที่กรอกไว้ล่วงหน้า ยังไม่เผยแพร่ทั่วไปและตั้งค่าให้ตามคำขอ

::screenshot{src="/images/scripts/extra-invoice-print-button/to.png" alt="ส่วนท้ายของการจองใน Little Hotelier (หน้าจอภาษาสเปน) ที่มีลิงก์ Imprimir Factura เพิ่มข้างเมนู Print และ Email" caption="คลิกเดียวพิมพ์ใบแจ้งหนี้" width="604" height="265"}
::

อยากให้ใบแจ้งหนี้ส่งถึงแขกเองโดยไม่ต้องคลิกเลย ดู[วิธีส่งใบแจ้งหนี้อัตโนมัติตอนเช็คเอาท์](/blog/send-invoice-to-guest-at-checkout)

### ข้อมูลแขกและการเช็คอิน

- [Chekin Connection](/tools/ui/show-chekin): หากคุณใช้ Chekin ทำเช็คอินออนไลน์ สคริปต์จะแสดงการลงทะเบียน Chekin ของแขกแต่ละคน (ชื่อ เบอร์โทร เลขเอกสาร) ในหน้าการจอง คุณคัดลอกเลขเอกสารไปใส่ในใบแจ้งหนี้ และแชร์แบบฟอร์มลงทะเบียนทางอีเมลหรือ WhatsApp ได้ ใช้บัญชี Chekin ของคุณเอง
- [Easy Save Province and Country](/tools/ui/easy-save-province-country): สำหรับที่พักในสเปน มีรายชื่อจังหวัดของสเปนในช่องจังหวัด เมื่อเลือกแล้วประเทศจะถูกตั้งเป็นสเปน และช่องชื่อกับนามสกุลที่ว่างจะถูกใส่เครื่องหมายขีดล่าง
- [Update Number Adults](/tools/ui/update-number-adults): แบบฟอร์มการจองใหม่เริ่มที่ผู้ใหญ่ 2 คนแทน 0 เพื่อไม่ให้บันทึกการจองที่ไม่มีผู้ใหญ่

::screenshot{src="/images/scripts/show-chekin/to.png" alt="การจองใน Little Hotelier (หน้าจอภาษาสเปน) ที่มีแผง Chekin แสดงแขกที่ลงทะเบียนแล้ว 1 คน เลขเอกสาร และปุ่ม Use document" caption="การลงทะเบียน Chekin ภายในการจองของ Little Hotelier" width="1484" height="831"}
::

### ความสะดวกในแต่ละวัน: รีโหลด แท็บเล็ต และทางลัด

- [Auto Refresh On Inactivity](/tools/ui/auto-refresh-inactivity): โหลดหน้าใหม่หลังไม่มีการคลิก ขยับเมาส์ หรือเลื่อนหน้านาน 10 นาที คุณจะได้ไม่ต้องกลับมาเจอเซสชันที่หมดอายุ และจะไม่รีโหลดขณะที่คุณกำลังทำงาน
- [Improve Style For Touch Screens](/tools/ui/improve-style-touch-screens): ปุ่มและเมนูใหญ่ขึ้นสำหรับแท็บเล็ต และปุ่มลบห้องที่ปกติปรากฏเมื่อเอาเมาส์ไปชี้เท่านั้นจะแสดงตลอดเวลา
- [Add Button Check on Front Desk](/tools/ui/add-button-check-front-desk): จากการจองใน Direct Booking มีปุ่มสำหรับตรวจสอบใน Front Desk และดูการคืนเงิน หากยังไม่ได้เข้าสู่ระบบ Front Desk อาจต้องกดสองครั้ง

## ควรติดตั้งสคริปต์ไหนก่อน

- **แผนกต้อนรับที่ใช้แล็ปท็อป:** Full Width Reservation Table, Auto Refresh On Inactivity, Extra Invoice Print Button
- **เจ้าของหรือฝ่ายรายได้:** Prices Display และ Show Booking.com Commissions
- **ที่พักในสเปน:** Easy Save Province and Country และ Chekin Connection หากใช้ Chekin
- **แท็บเล็ตที่แผนกต้อนรับ:** Improve Style For Touch Screens

## เมื่อต้องการมากกว่าการปรับหน้าจอ

สคริปต์เปลี่ยนสิ่งที่คุณเห็นขณะนั่งอยู่หน้าจอ แต่ทำงานตอนคุณไม่อยู่ไม่ได้ สำหรับงานที่ต้องทำงานเองโดยอัตโนมัติ เช่น ตรวจแขกที่กำลังจะมาถึงทุกคนว่าขาดเอกสารยืนยันตัวตนหรือไม่ หรือส่งใบแจ้งหนี้ตอนเช็คเอาท์ มี[แดชบอร์ด Hotelier Tools](/tools/bot) ซึ่งใช้ฟรีสำหรับทุกโรงแรมจนถึงวันเริ่มเรียกเก็บเงิน 10 มกราคม 2027 ส่วนสคริปต์ฟรีตลอดไป หากอยากได้ทางลัดภายใน Little Hotelier เพิ่มเติม ดู[เคล็ดลับและฟีเจอร์ที่ซ่อนอยู่ของ Little Hotelier](/blog/little-hotelier-tips)

::demo-cta{path="/"}
::

## สรุป

- ติดตั้ง Tampermonkey ครั้งเดียว เปิด **Allow User Scripts** แล้วกด **Install on Tampermonkey** ในแต่ละสคริปต์ที่ต้องการ
- สคริปต์ทำงานเฉพาะบน Little Hotelier (และ Chekin สำหรับหนึ่งตัว) ไม่ส่งอะไรไปที่ Hotelier Tools และอัปเดตตัวเอง
- เริ่มจากตัวที่ตรงกับงานของคุณ: ตารางกว้างขึ้นและรีเฟรชอัตโนมัติสำหรับแผนกต้อนรับ ราคาและค่าคอมมิชชั่นสำหรับเจ้าของ
- หากสคริปต์ใดมีปัญหาหลัง Little Hotelier อัปเดต ให้ปิดในเมนู Tampermonkey
