---
title: "วิธีอ่านและตอบข้อความแขกจาก Expedia (Partner Central แอป และอีเมล)"
seoTitle: "วิธีตอบข้อความแขก Expedia ใน Partner Central"
description: "ข้อความแขก Expedia อยู่ที่ไหน วิธีตอบจาก Partner Central แอป หรืออีเมลของคุณเอง เทมเพลตตั้งเวลา และกล่องข้อความเดียวคู่กับ WhatsApp"
date: 2026-11-03
updated: 2026-11-05
category: guests
tags: [expedia, ข้อความแขก, partner central, กล่องข้อความ, เทมเพลต, little hotelier]
keywords: [ข้อความ expedia partner central, ตอบข้อความแขก expedia, expedia guest email alias, expedia message center, ข้อความตั้งเวลา expedia, เบอร์โทรแขก expedia ไม่แสดง, รวมข้อความ expedia ในกล่องเดียว, แอป expedia partner central ข้อความ]
feature: guest-inbox
demoPath: /messaging/channels
cover: /images/blog/demo/en/expedia-guest-messages-channels.webp
coverAlt: "หน้า Channels ใน Hotelier Tools: การเชื่อมต่อข้อความ Booking.com ที่เก็บข้อความในโหมด Draft (I approve everything) และด้านล่างคือข้อความ Expedia Partner Central ที่ยังไม่เชื่อมต่อ พร้อมปุ่ม Switch on Expedia messages และลิงก์เข้าสู่ระบบ Partner Central"
faq:
  - q: "ข้อความแขกจาก Expedia อยู่ที่ไหน"
    a: "ใน Expedia Group Partner Central ใต้ Guest relations > Messages ค้นหาด้วยชื่อแขกหรือรหัสการจอง หรือใช้ตัวกรองเพื่อหาบทสนทนา ทั้งคุณและแขกจะได้รับอีเมลแจ้งเตือนเมื่อมีข้อความใหม่"
  - q: "ตอบแขก Expedia จากอีเมลของฉันเองได้ไหม"
    a: "ได้ แต่ละการจองมี guest email alias ซึ่งเป็นที่อยู่อีเมลเฉพาะที่คัดลอกได้จากการจองหรือจาก Messages อีเมลต้องส่งจากที่อยู่ที่ผูกกับผู้ใช้ Partner Central ที่ยืนยันแล้ว และคำตอบของแขกจะเข้ามาทั้งในกล่องอีเมลของคุณและใน Partner Central"
  - q: "ทำไมฉันไม่เห็นเบอร์โทรของแขกในการจอง Expedia"
    a: "Expedia ปิดการดูและส่งออกเบอร์โทรของนักเดินทางใน Partner Central ชั่วคราว เพราะมีการหลอกลวง (ฟิชชิง) ที่มุ่งเป้าไปที่นักเดินทาง การจองที่รับผ่าน API จะได้เบอร์กลาง Expedia ขอให้ที่พักใช้ระบบข้อความของ Expedia แทน"
  - q: "ส่งข้อความตั้งเวลาถึงแขก Expedia ได้ไหม"
    a: "ได้ ใน Messages เปิด Manage templates สร้างเทมเพลต เปิด Send on a schedule แล้วเลือกเวลาส่ง Expedia ส่งข้อความตั้งเวลาตอน 22:00 น. ตามเวลาท้องถิ่น"
  - q: "Hotelier Tools ตอบแขก Expedia ได้ไหม"
    a: "ไม่ได้ Hotelier Tools ไม่ส่งข้อความถึงแขก Expedia เด็ดขาด กล่องข้อความแสดงรายการบทสนทนา Expedia ได้แล้ว (เบต้า ใช้งานได้ตั้งแต่รุ่น 1.71 เดือนพฤศจิกายน 2026) คำตอบที่คุณเขียนในนั้นจะเก็บเป็นร่างให้คุณไปส่งใน Partner Central"
  - q: "Hotelier Tools เป็นส่วนหนึ่งของ Expedia หรือ Little Hotelier หรือไม่"
    a: "ไม่ใช่ Hotelier Tools เป็นอิสระ ไม่มีความเกี่ยวข้องหรือได้รับการรับรองจาก Expedia Group, SiteMinder หรือ Little Hotelier เชื่อมต่อด้วยบัญชี Little Hotelier ของโรงแรมคุณเอง และบัญชี Partner Central ของคุณเอง"
---

ข้อความแขกจาก Expedia อยู่ใน Partner Central ใต้ **Guest relations > Messages** ซึ่งคุณค้นหาด้วยชื่อแขกหรือรหัสการจองแล้วตอบในเธรดได้ คุณยังตอบจากแอป Partner Central หรือจากกล่องอีเมลของคุณเองผ่าน guest email alias ของแต่ละการจองได้ด้วย เทมเพลตและข้อความตั้งเวลาช่วยตอบคำถามซ้ำๆ หากต้องการเห็น Expedia คู่กับ WhatsApp, Booking.com และอีเมล กล่องข้อความของ Hotelier Tools แสดงบทสนทนา Expedia ได้ (เบต้า) แต่คำตอบต้องส่งจาก Partner Central เสมอ

ฟีเจอร์ของ Expedia ด้านล่างตรวจสอบกับศูนย์ช่วยเหลือ Partner Central ของ Expedia Group ณ เดือนพฤศจิกายน 2026

## ข้อความแขกจาก Expedia อยู่ที่ไหน

เปิด Partner Central เลือก **Guest relations** แล้วเลือก **Messages** ([Partner Central help: About messages](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-the-partner-central-message-center)) จากตรงนั้นคุณสามารถ:

- **ค้นหา** แขกด้วยชื่อหรือรหัสการจองเพื่อส่งข้อความใหม่
- **กรอง** รายการเพื่อหาบทสนทนาที่มีอยู่
- **ตอบ** ในเธรด และแนบคำแนะนำการเช็คอินหรือรูปภาพ

ทั้งคุณและแขกได้รับอีเมลแจ้งเตือนเมื่อมีข้อความใหม่ และแขกเริ่มบทสนทนาได้จากแผนการเดินทาง (itinerary) หรืออีเมลยืนยันการจอง Expedia เรียก Message Center ว่าเป็น "ทางเลือกที่แนะนำ": ผูกกับการจอง เก็บประวัติที่ตรวจสอบย้อนหลังได้ และไม่เปิดเผยข้อมูลติดต่อของแขก ([Contact a guest](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/reservations/about-contacting-guests))

สองเรื่องที่พาร์ตเนอร์ใหม่มักแปลกใจ:

- **บางการจองไม่มี Message Center** การจองจำนวนมากจากพาร์ตเนอร์ B2B ของ Expedia เช่น บริษัทนำเที่ยว ส่งข้อความหาไม่ได้ ให้ติดต่อพาร์ตเนอร์ B2B รายนั้นแทน หรือขอให้ Expedia ส่งต่อข้อความด่วนให้
- **เบอร์โทรถูกซ่อน** Expedia ปิดการดูและส่งออกเบอร์โทรของนักเดินทางใน Partner Central ชั่วคราว และการจองผ่าน API จะได้เบอร์กลาง สาเหตุคือการหลอกลวง: มิจฉาชีพแอบอ้างเป็นโรงแรมทาง WhatsApp โดยใช้เบอร์ที่รั่วไหล ([ประกาศเรื่องฟิชชิง](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-off-platform-phishing-attempts-targeting-travelers)) channel manager ของคุณก็จะไม่มีเบอร์จริงเช่นกัน

### บนมือถือ: แอป Partner Central

แอป Expedia Group Partner Central ให้คุณเริ่มบทสนทนาและตอบแขกได้ พร้อมการแจ้งเตือนการจอง รีวิว และการยกเลิก Expedia บอกว่าผู้ใช้แอปที่ใช้งานอยู่ตอบเร็วกว่าผู้ที่ไม่ได้ใช้ 20% (ค่าเฉลี่ยของ Expedia เองปี 2021, [หน้าแอป](https://partner.expediagroup.com/en-us/landing-pages/manage-your-property-from-the-palm-of-your-hand))

## วิธีตอบจากอีเมลของคุณเอง: guest email alias

ทุกการจองมี **guest email alias** ซึ่งเป็นที่อยู่อีเมลเฉพาะที่ส่งต่ออีเมลของคุณถึงแขกผ่าน Expedia ([About the guest email alias](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/about-the-guest-email-alias)) วิธีคัดลอก:

1. **จากการจอง:** เลือก **Reservations** หาการจอง เลือกชื่อแขก แล้วเลือก **Copy email to clipboard**
2. **จาก Messages:** เลือก **Guest relations > Messages** เปิดแขกคนนั้น เลือก **Show contact details** แล้วเลือก **Copy email to clipboard**

กฎที่สำคัญ:

- alias ใช้ได้กับการจองจาก Expedia, Hotels.com, Travelocity, Orbitz และ Wotif ณ เดือนพฤศจิกายน 2026 ยังใช้ไม่ได้กับการจอง B2B หรือ Egencia
- ที่อยู่ที่ใช้ส่ง**ต้องเป็นของผู้ใช้ Partner Central ที่ยืนยันแล้ว** อีเมลจากที่อยู่อื่นจะส่งไม่ถึง หากต้องการตอบจากกล่องอีเมลของแผนกต้อนรับ ให้เพิ่มที่อยู่นั้นเป็นผู้ใช้ Partner Central
- คำตอบของแขกจะเข้ามาในกล่องอีเมลของคุณและใน Message Center
- อีเมลที่มีเลขบัตรเครดิตจะถูกบล็อก แต่เลขบัตรเสมือนของ Expedia ส่งได้
- แนบไฟล์ PDF หรือ Word ได้ เช่น แบบฟอร์มก่อนเข้าพัก

## ควรตอบแขก Expedia เร็วแค่ไหน

ศูนย์ช่วยเหลือของ Expedia ขอให้คุณ "ตอบแขกทุกคนในเวลาที่เหมาะสม" และ "ตอบโดยเร็วเพื่อหลีกเลี่ยงความล่าช้า การยกเลิก หรือการร้องเรียน" ไม่ได้ระบุกำหนดเวลาตายตัวสำหรับข้อความทั่วไป ในทางปฏิบัติให้ถือว่าภายในวันเดียวกันเป็นขีดจำกัด และตอบภายในไม่กี่นาทีสำหรับเรื่องการมาถึง การมาถึงช้า รหัสประตู และที่จอดรถ คือสิ่งที่แขกถามในวันเดินทาง

Expedia ยังระบุสิ่งที่ไม่ควรทำไว้ด้วย ([Contact a guest](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/reservations/about-contacting-guests)):

- **ห้ามทำการตลาด** ห้ามขายเพิ่ม (upsell) หรือโปรโมชันผ่านข้อความ Expedia
- **ไม่ต้องส่งยืนยันการจองซ้ำ** แขกได้รับจาก Expedia แล้ว
- **ห้ามเปลี่ยนเงื่อนไขการจองนอก Expedia** วันที่และราคาต้องเปลี่ยนใน Partner Central
- **หลีกเลี่ยงลิงก์ภายนอกและไฟล์แนบ** เท่าที่ทำได้ แขกอาจมองว่าน่าสงสัย

เมื่อตกลงอะไรกันต่อหน้าระหว่างการเข้าพัก Expedia แนะนำให้ยืนยันเป็นลายลักษณ์อักษรใน Message Center ข้อความนั้นจะเป็นหลักฐานของคุณหากมีข้อพิพาทภายหลัง

## วิธีตั้งเทมเพลตและข้อความตั้งเวลา

ใน **Guest relations > Messages** เลือก **Manage templates** ([Send scheduled messages](https://apps.expediapartnercentral.com/lodging/help/help-article/guests/messaging-guests/send-scheduled-messages-to-guests)):

1. เลือก **Create new template** ตั้งชื่อ แล้วเขียนข้อความ
2. ใต้ **Insert custom information** เพิ่มข้อมูลแบบตัวแปร เช่น ชื่อแขก
3. แนบไฟล์หากต้องการ เช่น แผนที่หรือคำแนะนำการเช็คอิน
4. เปิด **Send on a schedule** แล้วเลือกเวลาส่ง แบบไม่มีวันสิ้นสุดหรือเฉพาะช่วงวันที่
5. เลือก **Save**

ข้อความตั้งเวลาทั้งหมดส่งตอน 22:00 น. ตามเวลาท้องถิ่น **smart template** ตอบหัวข้อหนึ่งได้อัตโนมัติ ณ เดือนพฤศจิกายน 2026 มีเพียงแบบเดียวคือการขอรีวิวหลังเข้าพัก **Send bulk message** ส่งเทมเพลตเดียวถึงแขกหลายคนพร้อมกัน

ตัวอย่างเทมเพลตก่อนเข้าพักที่ปรับใช้ได้:

```text [expedia-pre-arrival.txt]
สวัสดีค่ะ/ครับ คุณ [guest name] เรารอต้อนรับคุณที่ [property name]

เช็คอินได้ตั้งแต่ [time] หากจะมาถึงหลัง 22:00 น. กรุณาตอบกลับที่นี่พร้อมเวลาที่คาดว่าจะถึง แล้วเราจะทิ้งคำแนะนำไว้ให้
ที่จอดรถ: [your parking info] อาหารเช้า: [times and price]

เราจะติดต่อคุณผ่านบทสนทนา Expedia นี้เท่านั้น และจะไม่ขอรายละเอียดบัตรทาง WhatsApp หรือ SMS เด็ดขาด
```

บรรทัดสุดท้ายสำคัญยิ่งขึ้นตอนนี้ที่มิจฉาชีพส่งข้อความหาแขก Expedia ทาง WhatsApp อ่านเพิ่มเติมได้ที่[วิธีสังเกตข้อความหลอกลวงที่โรงแรม](/blog/hotel-scam-messages)

## วิธีที่เร็วกว่า: บทสนทนา Expedia ในกล่องข้อความของ Hotelier Tools (เบต้า)

Hotelier Tools แสดงบทสนทนา Expedia ใน **Inbox** (กล่องข้อความ) (`/messaging`) ได้ คู่กับ WhatsApp, Booking.com และอีเมล โดยแต่ละบทสนทนาอยู่ข้างการจองใน Little Hotelier คำตอบเขียนใน Partner Central วิธีตั้งค่า:

1. **เชื่อมต่อ Partner Central** ที่ **Credentials > Expedia Partner Central** (`/credentials/expedia-extranet`) Hotelier Tools เข้าสู่ระบบให้คุณในเบราว์เซอร์บนเซิร์ฟเวอร์ คุณตอบสิ่งที่ Expedia ถาม เช่น รหัสที่ส่งทางอีเมลเมื่อใช้อุปกรณ์ใหม่ เซสชันถูกเก็บแบบเข้ารหัส และ **Keep Expedia signed in** ช่วยไม่ให้หมดอายุเพราะไม่มีการใช้งาน การตั้งค่าเหมือนกับ[คำขอชำระเงิน Expedia Collect](/blog/expedia-collect-payment-requests)
2. ในการ์ด **Guest messages** ของหน้าเดียวกัน เปิด **Read Expedia guest messages** หรือเปิด **Channels** (`/messaging/channels`) แล้วกด **Switch on Expedia messages**
3. เลือกโหมดที่ **Channels** Expedia มีให้แค่สองโหมด: **Off (collect only)** แสดงข้อความโดยไม่วิเคราะห์อะไร และ **Draft** ให้ AI เตรียมคำตอบให้คุณตรวจ ช่อง Expedia ใหม่เริ่มต้นในโหมดเก็บอย่างเดียว
4. เปิด **Inbox** แล้วกรองด้วย **Expedia** แต่ละบทสนทนามีลิงก์ **Conversation on Expedia** ที่เปิดเธรดใน Partner Central

::screenshot{src="/images/blog/demo/en/expedia-guest-messages-card.webp" alt="การ์ด Guest messages ในหน้า Expedia Partner Central: สวิตช์ปิดอยู่ ข้อความบอกว่า Sign in to Partner Central first กล่อง Replies stay in Partner Central บอกว่า Hotelier Tools ไม่ส่งข้อความถึงแขก Expedia เด็ดขาดและเก็บคำตอบของคุณเป็นร่าง และลิงก์ Mode and timing ด้านล่างคือการ์ด Expedia Collect payments" caption="สวิตช์อยู่ข้างการเข้าสู่ระบบ Partner Central คำตอบถึงแขก Expedia อยู่ใน Partner Central เสมอ" path="/credentials/expedia-extranet"}
::

::screenshot{src="/images/blog/demo/en/expedia-guest-messages-channels.webp" alt="หน้า Channels: ข้อความ Booking.com ที่เก็บในโหมด Draft (I approve everything) โดยเปิด Collect messages ไว้ และข้อความ Expedia Partner Central ที่ระบุว่ายังไม่เชื่อมต่อ พร้อม Switch on Expedia messages และการเข้าสู่ระบบ Partner Central" caption="Expedia อยู่ในหน้า Channels ร่วมกับบัญชีอื่นของคุณ ในเดโมยังไม่ได้เปิด" path="/messaging/channels"}
::

### สิ่งที่กล่องข้อความอ่าน และสิ่งที่ไม่ทำเด็ดขาด

- **อ่านรายการบทสนทนา ไม่ใช่ทุกข้อความ** แต่ละเธรดจะอ่านชื่อแขก การเข้าพัก และข้อความล่าสุด ตามที่รายการข้อความของ Partner Central แสดงตัวอย่างไว้ เธรดทั้งหมดยังอยู่ใน Partner Central
- **ไม่ส่งข้อความถึงแขก Expedia เด็ดขาด** ทั้งแบบอัตโนมัติและตอนคุณกดปุ่ม สิ่งที่คุณพิมพ์จะเก็บเป็นร่างของบทสนทนา (**Save as a draft: Expedia replies are sent from Partner Central**) ให้คัดลอกไปวางใน Partner Central หรือแอป
- **จับคู่การจองด้วยรหัสยืนยันเท่านั้น** Little Hotelier เก็บการจอง Expedia เป็น `EXP-` ตามด้วยรหัสยืนยันของ Expedia เธรดที่ระบุรหัสนั้นจะผูกกับการจองและนับว่ายืนยันแล้ว ชื่อแขกไม่เคยถูกใช้เป็นหลักฐาน: เธรดที่ไม่มีรหัสจะไม่ถูกจับคู่ และ AI จะไม่เห็นข้อมูลการจองของเธรดนั้น

ในโหมด **Draft** AI เขียนคำแนะนำจากการจองที่ยืนยันแล้ว และจากสิ่งที่คุณสอนไว้ใน **FAQ & knowledge** (`/messaging/faq`): หน้า FAQ บันทึกของที่พัก (house notes) และการ์ดข้อมูลที่พัก บริการที่คุณไม่ได้ระบุไว้จะตอบว่า "รอยืนยัน" ไม่ใช่ "มี" ร่างเหล่านี้ทำงานอย่างไร อ่านได้ที่[คำตอบ AI สำหรับข้อความแขก](/blog/ai-replies-guest-messages)

::callout{type="warning" title="สถานะ ณ เดือนพฤศจิกายน 2026"}
บทสนทนา Expedia ยังเป็นเบต้า จนถึงวันที่ 5 พฤศจิกายน 2026 Partner Central ปฏิเสธคำขอที่อ่านรายการข้อความ (HTTP 403) จึงไม่มีบทสนทนา Expedia เข้ามาในกล่องข้อความ รุ่น 1.71 (พฤศจิกายน 2026) แก้ไขแล้ว: ตอนนี้ Hotelier Tools ส่งคำขอแบบเดียวกับหน้ากล่องข้อความของ Partner Central เอง และบทสนทนา Expedia เข้ามาพร้อมชื่อแขก การเข้าพัก และข้อความล่าสุด หาก Expedia เปลี่ยนคำขอนี้อีก หน้า Expedia จะแสดงข้อผิดพลาดแทนกล่องข้อความว่างเปล่าจนกว่าจะอัปเดต คำตอบยังต้องส่งจาก Partner Central หรือแอป
::

ข้อจำกัดอีกสองข้อที่ควรบอกตรงๆ:

- **ใช้เซสชัน Partner Central ของคุณเอง** ข้อกำหนดพาร์ตเนอร์ของ Expedia จำกัดการเข้าถึง Partner Central แบบอัตโนมัติ เส้นทางเชื่อมต่อที่ Expedia รองรับคือ Messaging API ซึ่งเปิดให้ผ่านผู้ให้บริการเชื่อมต่อระบบ (connectivity provider)
- **Expedia อ่านได้อย่างเดียวที่นี่** เธรด WhatsApp และอีเมลตอบจากกล่องข้อความได้ แต่เธรด Expedia ตอบไม่ได้

::demo-cta{path="/messaging/channels"}
::

ทุกสิ่งที่กล่องข้อความทำได้อยู่ใน[หน้า Guest inbox](/tools/bot/guest-inbox) แดชบอร์ดใช้ฟรีสำหรับทุกโรงแรมจนกว่าจะเริ่มเรียกเก็บเงินในวันที่ 10 มกราคม 2027

::callout{type="info" title="เครื่องมืออิสระ"}
Hotelier Tools ไม่มีความเกี่ยวข้องหรือได้รับการรับรองจาก Expedia Group, SiteMinder หรือ Little Hotelier เชื่อมต่อด้วยบัญชี Little Hotelier ของโรงแรมคุณเอง และบัญชี Expedia Partner Central ของคุณเอง
::

อ่านเพิ่มเติม: [ข้อความ Booking.com โดยไม่ต้องเฝ้า Extranet](/blog/booking-com-guest-messages), [WhatsApp กับ Little Hotelier](/blog/whatsapp-little-hotelier), [คำตอบ AI สำหรับข้อความแขก](/blog/ai-replies-guest-messages)

## สรุป

- ข้อความ Expedia อยู่ใน Partner Central ใต้ **Guest relations > Messages** และในแอป Partner Central
- หากต้องการตอบจากกล่องอีเมลของคุณเอง ให้คัดลอก guest email alias ของการจอง แล้วส่งจากที่อยู่ที่เป็นผู้ใช้ Partner Central ที่ยืนยันแล้ว
- ตอนนี้เบอร์โทรของแขกถูกซ่อน: ติดต่อกันในระบบข้อความของ Expedia และบอกแขกว่าคุณจะไม่ขอรายละเอียดบัตรผ่านช่องทางอื่น
- เทมเพลตที่เปิด **Send on a schedule** ช่วยส่งคำแนะนำการเช็คอิน ข้อความตั้งเวลาส่งตอน 22:00 น. ตามเวลาท้องถิ่น
- กล่องข้อความของ Hotelier Tools แสดงบทสนทนา Expedia คู่กับ WhatsApp และ Booking.com ได้ (เบต้า ใช้งานได้ตั้งแต่รุ่น 1.71 เดือนพฤศจิกายน 2026) แต่ทุกคำตอบถึงแขก Expedia ต้องส่งจาก Partner Central
