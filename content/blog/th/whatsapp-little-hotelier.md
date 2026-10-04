---
title: "วิธีใช้ WhatsApp กับ Little Hotelier (ปี 2026)"
seoTitle: "WhatsApp กับ Little Hotelier: มีทางเลือกอะไรบ้าง (2026)"
description: "Messaging hub ของ Little Hotelier ใช้ WhatsApp Business API อย่างเป็นทางการ เทียบกับแอป WhatsApp Business ฟรีและกล่องข้อความรวม พร้อมตัวอย่างเทมเพลต"
date: 2026-10-03
category: guests
tags: [whatsapp, messaging, little hotelier, guest engagement, inbox]
keywords: [whatsapp โรงแรม, line oa โรงแรม, little hotelier whatsapp, whatsapp business api สำหรับโรงแรม, whatsapp business app hotel, whatsapp templates hotel check-in, little hotelier messaging hub]
feature: guest-inbox
demoPath: /messaging
cover: /images/blog/demo/en/guest-inbox-ai-plan-late-arrival.webp
coverAlt: "กล่องข้อความแขกของ Hotelier Tools ที่มีบทสนทนา WhatsApp จาก Ingrid Kowalski เรื่องการมาถึงช้า (ยืนยันตัวตนแล้ว เชื่อมกับการจองแล้ว) แผนของ AI ในสถานะฉบับร่างพร้อมคำตอบที่แก้ไขได้ และแผง Assistant ส่วนตัว"
faq:
  - q: "Little Hotelier มี WhatsApp หรือไม่?"
    a: "มี ผ่าน Messaging hub ในส่วนเสริม Guest Engagement ซึ่งเชื่อมต่อกับ WhatsApp Business API อย่างเป็นทางการ ผูกบทสนทนาเข้ากับการจองของแขก และให้ผู้ใช้หลายคนตอบจากหมายเลขเดียวกันได้"
  - q: "ใช้หมายเลขเดิมจากแอป WhatsApp Business ต่อได้ไหมเมื่อเชื่อม Messaging hub?"
    a: "ใช้พร้อมกันทั้งสองที่ไม่ได้ หมายเลขที่เชื่อมกับ WhatsApp Business API จะใช้ในแอป WhatsApp Business อีกไม่ได้ คุณต้องลบหมายเลขออกจากแอปก่อน และกู้ประวัติแชตในแอปคืนไม่ได้ Little Hotelier จึงแนะนำให้ทดสอบด้วยหมายเลขอื่นก่อน"
  - q: "WhatsApp มีค่าใช้จ่ายเท่าไรสำหรับโรงแรมขนาดเล็ก?"
    a: "แอป WhatsApp Business ฟรี บน WhatsApp Business Platform (API ที่อยู่เบื้องหลัง Messaging hub) Meta คิดค่าบริการตามจำนวนข้อความเทมเพลตที่ส่งถึงผู้รับ ส่วนการตอบกลับภายในหน้าต่างบริการลูกค้า 24 ชั่วโมงไม่มีค่าใช้จ่าย Little Hotelier ไม่คิดค่า WhatsApp เพิ่ม แต่ Guest Engagement เองเป็นส่วนเสริมที่มีค่าใช้จ่าย"
  - q: "ส่งข้อความอัตโนมัติก่อนเข้าพักทาง WhatsApp ได้ไหม?"
    a: "ใน Messaging hub คุณเริ่มบทสนทนา WhatsApp ด้วยเทมเพลตที่ WhatsApp อนุมัติแล้ว เช่น ข้อมูลการเช็คอิน ส่วนแอป WhatsApp Business ฟรีตั้งอัตโนมัติได้เพียงข้อความทักทายและข้อความแจ้งว่าไม่อยู่"
  - q: "การเชื่อมต่อ WhatsApp ของ Hotelier Tools คือ WhatsApp Business API อย่างเป็นทางการหรือไม่?"
    a: "ไม่ใช่ ระบบใช้ WAHA ซึ่งรันเซสชัน WhatsApp Web จึงไม่ต้องผ่านการยืนยันของ Meta หรือการอนุมัติเทมเพลต แต่ WhatsApp ไม่อนุญาตไคลเอนต์ที่ไม่เป็นทางการ หมายเลขที่ใช้วิธีนี้อาจถูกบล็อก ควรใช้เพื่อตอบแขกที่ส่งข้อความมาหาคุณเป็นหลัก"
  - q: "AI จะตอบแขกทาง WhatsApp เองหรือไม่?"
    a: "เฉพาะเมื่อคุณเลือก Automatic reply หรือ Autonomous สำหรับบัญชีนั้น ค่าเริ่มต้นคือ Draft ซึ่งเตรียมคำตอบแล้วรอให้คนอนุมัติ การตอบอัตโนมัติยังต้องเป็นแขกที่ยืนยันตัวตนแล้ว เป็นคำขอที่อยู่ในรายการที่อนุญาต และ AI ต้องมั่นใจมากพอ ทั้งยังจำกัดจำนวนต่อชั่วโมงและต่อวัน"
---

ได้ Little Hotelier เชื่อมต่อกับ WhatsApp ได้ในตัวผ่าน **Messaging hub** ซึ่งเป็นส่วนหนึ่งของส่วนเสริม **Guest Engagement** (เสียค่าใช้จ่าย) โดยใช้ WhatsApp Business API อย่างเป็นทางการ การตอบแขกที่ส่งข้อความมาภายใน 24 ชั่วโมงที่ผ่านมาไม่มีค่าใช้จ่าย ส่วนการทักแขกก่อนต้องใช้เทมเพลตที่ได้รับอนุมัติ ซึ่ง Meta คิดค่าบริการ อีกทางที่นิยมคือแอป WhatsApp Business ฟรีบนมือถือ ซึ่งไม่เชื่อมกับการจองของคุณเลย ส่วน Hotelier Tools เพิ่มทางเลือกที่สาม คือรวม WhatsApp ไว้ในกล่องข้อความเดียวกับอีเมลและ Booking.com ผ่านเซสชัน WhatsApp Web (WAHA) ไม่ใช่ API อย่างเป็นทางการ

ข้อมูลของ Little Hotelier และ WhatsApp ด้านล่างตรวจสอบกับหน้าช่วยเหลือของทั้งสองแห่ง ณ เดือนตุลาคม 2026

::callout{type="note" title="สำหรับที่พักในไทย: LINE OA"}
ในไทย แขกจำนวนมากทักที่พักผ่าน LINE Official Account (LINE OA) มากกว่า WhatsApp บทความนี้พูดถึง WhatsApp เป็นหลัก และต้องบอกตามตรงว่ากล่องข้อความของ Hotelier Tools รองรับ WhatsApp, Gmail, Outlook และ Booking.com เท่านั้น ยังไม่รองรับ LINE ถ้าแขกของคุณใช้ LINE เป็นหลัก ให้ตอบใน LINE OA ต่อไปตามเดิม และใช้ WhatsApp หรืออีเมลกับแขกต่างชาติที่เลือกช่องทางเหล่านั้น
::

## Little Hotelier รองรับ WhatsApp หรือไม่

รองรับ **Messaging hub** ในส่วนเสริม Guest Engagement รวมบทสนทนาจาก WhatsApp, Booking.com, Airbnb, SMS และอีเมลไว้ในกล่องข้อความเดียว โดยเชื่อมโปรไฟล์แขกและการจองกับแต่ละแชต ([Messaging hub FAQ](https://helpcentre.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions)) Guest Engagement เป็นส่วนเสริมที่หน้า[ราคา](https://www.littlehotelier.com/pricing/)ของ Little Hotelier ระบุไว้สำหรับแพ็กเกจ Pro

วิธีเชื่อมต่อ WhatsApp ([Connect WhatsApp in Guest Engagement](https://helpcentre.littlehotelier.com/en/articles/9525852-connect-whatsapp-in-guest-engagement))

1. ไปที่ **Guest Engagement > Communication > Settings** แล้วคลิก **Configure** ที่ WhatsApp
2. ยืนยันธุรกิจของคุณด้วยโปรไฟล์ Facebook (WhatsApp และ Facebook เป็นของ Meta ทั้งคู่)
3. สร้างหรือเชื่อมบัญชี WhatsApp Business และโปรไฟล์ของคุณ
4. เพิ่มข้อมูลการชำระเงิน WhatsApp จะเรียกเก็บเงินจากคุณโดยตรง และ Little Hotelier ไม่คิดค่า WhatsApp เพิ่ม

::callout{type="warning" title="หมายเลขปัจจุบันของคุณ"}
หมายเลขเดียวกันใช้ในแอป WhatsApp Business และ Messaging hub พร้อมกันไม่ได้ ถ้าจะย้าย ให้สำรองแชตแล้วลบหมายเลขออกจากแอปก่อน หลังจากนั้นจะกู้แชตเก่าคืนในแอปไม่ได้อีก Little Hotelier แนะนำให้ทดสอบ Messaging hub กับหมายเลขอื่นก่อน
::

## แอป WhatsApp Business หรือ WhatsApp Business API?

| | แอป WhatsApp Business | WhatsApp Business Platform (API) |
|---|---|---|
| ค่าใช้จ่าย | ดาวน์โหลดฟรี | คิดต่อข้อความที่ Meta ส่งถึง การตอบภายในหน้าต่าง 24 ชั่วโมงฟรี |
| ใช้ที่ไหน | บนโทรศัพท์ และอุปกรณ์ที่เชื่อมอย่าง WhatsApp Web | ผ่านซอฟต์แวร์อย่าง Messaging hub |
| เริ่มคุยก่อน | ได้ทุกเมื่อ กับแขกที่ยินยอม | เฉพาะเมื่อใช้เทมเพลตที่ WhatsApp อนุมัติ |
| การเชื่อมกับการจอง | ไม่มี | ขึ้นกับซอฟต์แวร์ |

**แอป** มีโปรไฟล์ธุรกิจ **quick replies** (ข้อความตอบกลับด่วน) สำหรับคำตอบที่ใช้บ่อย **ข้อความทักทาย** และ **ข้อความแจ้งว่าไม่อยู่** แบบอัตโนมัติ **ป้ายกำกับ** สำหรับจัดกลุ่มแชต และแคตตาล็อก ([ฟีเจอร์แอป WhatsApp Business](https://whatsappbusiness.com/products/business-app-features/)) เหมาะกับ B&B เล็กๆ ที่มีคนตอบข้อความเพียงคนเดียว

**Platform** คิดค่าบริการ "on a per-message basis for each message we deliver to users" (คิดตามจำนวนข้อความที่ส่งถึงผู้ใช้) เมื่อแขกส่งข้อความมา หน้าต่างบริการลูกค้า (customer service window) 24 ชั่วโมงจะเปิดขึ้น คำตอบของคุณในช่วงนี้ไม่มีค่าใช้จ่าย และหน้าต่างจะเริ่มนับใหม่ทุกครั้งที่แขกส่งข้อความ ([ราคา WhatsApp Business Platform](https://whatsappbusiness.com/products/platform-pricing/)) นอกช่วงนั้นต้องใช้เทมเพลต และการอนุมัติเทมเพลตอาจใช้เวลาถึง 24 ชั่วโมง

## เทมเพลต WhatsApp สำหรับยืนยันการจองและแจ้งข้อมูลเช็คอิน

ใน Messaging hub ให้สร้างเทมเพลตที่ **Guest Engagement > Communication > Settings > WhatsApp > Templates** ([Create and manage WhatsApp templates](https://helpcentre.littlehotelier.com/en/articles/9525848-create-and-manage-whatsapp-templates))

- **ชื่อเทมเพลต (Template name):** ตัวพิมพ์เล็กคั่นด้วยขีดล่าง เช่น `checkin_instructions` แขกไม่เห็นชื่อนี้
- **หมวดหมู่ (Category):** **Utility** สำหรับยืนยันการจอง ข้อมูลการเช็คอิน และเตือนการชำระเงิน **Marketing** สำหรับข้อเสนอพิเศษและการอัปเซล (upsell) พร้อมปุ่ม Unsubscribe ถ้าส่งโปรโมชันในหมวด Utility เทมเพลตจะถูกปฏิเสธ
- **ตัวแปร (Variables):** ใช้ **Add variable** สำหรับชื่อแขก วันที่ ชื่อที่พัก และที่อยู่

ตัวอย่างสามแบบที่นำไปปรับใช้ได้ (ข้อความในวงเล็บเหลี่ยมแต่ละจุดคือตัวแปร)

```text [whatsapp-templates.txt]
booking_confirmation (Utility)
สวัสดีค่ะ/ครับ คุณ [guest name] การจองของคุณที่ [property name] ได้รับการยืนยันแล้ว: [arrival date] ถึง [departure date] หากมีคำถามตอบกลับข้อความนี้ได้เลย

checkin_instructions (Utility)
สวัสดีค่ะ/ครับ คุณ [guest name] แล้วพบกันวันที่ [arrival date] เช็คอินได้ตั้งแต่ [check-in time] ที่ [address] ตอบกลับเวลาที่คุณจะมาถึง เราจะเตรียมทุกอย่างให้พร้อม

payment_reminder (Utility)
สวัสดีค่ะ/ครับ คุณ [guest name] มียอดค้างชำระ [amount] สำหรับการเข้าพักวันที่ [arrival date] ชำระอย่างปลอดภัยได้ที่นี่: [payment link] เราไม่เคยขอรายละเอียดบัตรในแชตนี้
```

WhatsApp จะปฏิเสธเทมเพลตที่ขอข้อมูลส่วนบุคคลที่อ่อนไหว จึงไม่ควรขอเลขเอกสารยืนยันตัวตนหรือเลขบัตรเครดิตในเทมเพลต

## พนักงานหลายคนใช้หมายเลข WhatsApp เดียวกันได้ไหม

- **Messaging hub:** ได้ เพราะ API ออกแบบมาเพื่อการนี้ ผู้ใช้หลายคนตอบจากกล่องข้อความร่วมกันได้ และเห็นการจองอยู่ข้างแต่ละแชต
- **แอป WhatsApp Business:** แชตเดียวกันจะขึ้นทั้งบนมือถือและอุปกรณ์ที่เชื่อมไว้ เช่น WhatsApp Web ที่แผนกต้อนรับ แต่มอบหมายแชตให้ใครดูแลไม่ได้ และแชตไม่ได้เชื่อมกับการจอง ถ้าสมัคร Meta Verified ทาง WhatsApp ระบุว่าเชื่อมอุปกรณ์และเจ้าหน้าที่ได้สูงสุด 10 ราย
- **Hotelier Tools:** กล่องข้อความเป็นหน้าเว็บ ทุกคนที่เข้าสู่ระบบแดชบอร์ดจะเห็นบทสนทนาชุดเดียวกัน พร้อมการจองข้างแต่ละบทสนทนา

มีการเปลี่ยนแปลงหนึ่งที่กระทบทุกตัวเลือก ตั้งแต่วันที่ 28 กันยายน 2026 Booking.com ไม่ส่งเบอร์โทรของแขกให้ channel manager อีก การจองใหม่จาก Booking.com จึงเข้ามาใน Little Hotelier โดยไม่มีเบอร์ ([Booking.com for developers](https://developers.booking.com/connectivity/docs/migration-guides/migrating-to-new-versions)) ให้คัดลอกเบอร์จาก Extranet (**Show phone number**) เมื่ออยากส่งข้อความหาแขกรายนั้นทาง WhatsApp

## WhatsApp อีเมล และ Booking.com ในกล่องข้อความเดียวด้วย Hotelier Tools

**Inbox** (กล่องข้อความ) ของ Hotelier Tools (`/messaging`, alpha) แสดงข้อความ WhatsApp อีเมล และ Booking.com ในรายการเดียว แต่ละบทสนทนาจะแสดงการจอง และคำตอบที่ AI ร่างไว้ให้ ซึ่งต้องมีคนอนุมัติก่อนส่ง

### "WAHA ไม่ใช่ API อย่างเป็นทางการ" หมายความว่าอย่างไรสำหรับคุณ

WhatsApp เชื่อมเข้ากับ Hotelier Tools ผ่าน [WAHA](https://waha.devlike.pro/docs/overview/introduction/) ซึ่งเป็นเซิร์ฟเวอร์ที่รันเซสชัน WhatsApp Web ก่อนเลือกใช้ ควรรู้สิ่งเหล่านี้

- **หมายเลขของคุณยังอยู่บนมือถือ** ระบบทำงานเหมือนเปิด WhatsApp Web ไว้บนคอมพิวเตอร์ คุณจึงใช้แอป WhatsApp หรือ WhatsApp Business ได้ตามปกติ
- **ไม่ต้องยืนยันธุรกิจกับ Meta และไม่ต้องรออนุมัติเทมเพลต** เพราะไม่ผ่าน WhatsApp Business Platform
- **ไม่ได้รับอนุญาตอย่างเป็นทางการ** เอกสารของ WAHA เองระบุว่า "WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe." (WhatsApp ไม่อนุญาตบอตหรือไคลเอนต์ที่ไม่เป็นทางการ จึงไม่ควรถือว่าปลอดภัยทั้งหมด) หมายเลขที่ใช้วิธีนี้อาจถูกบล็อก WAHA แนะนำให้ตอบคนที่ทักมาหาคุณ ไม่ใช่เริ่มบทสนทนาเอง และห้ามส่งข้อความจำนวนมากพร้อมกัน ([How to avoid blocking](https://waha.devlike.pro/docs/overview/how-to-avoid-blocking/))
- **คุณต้องมีเซิร์ฟเวอร์ WAHA** แดชบอร์ดจะขอที่อยู่เซิร์ฟเวอร์ ชื่อเซสชัน และ API key ลองสอบถาม Hotelier Tools ว่าจัดเซิร์ฟเวอร์ให้ที่พักของคุณได้ไหม ถ้าไม่ได้ คุณต้องติดตั้งเอง
- **ระบบไม่อ่านแชตกลุ่ม**

ถ้าต้องการ API อย่างเป็นทางการ ให้เลือก Messaging hub แต่ถ้าส่วนใหญ่คุณแค่ตอบแขกที่ทักมา และอยากเห็น WhatsApp รวมกับอีเมลและ Booking.com กล่องข้อความของ Hotelier Tools จะเหมาะกว่า

### วิธีเชื่อมต่อ

1. เปิด **Credentials > WhatsApp (WAHA)** (`/credentials/messaging-whatsapp`) กรอก **WAHA base URL**, **Session name** และ **WAHA API key** แล้วบันทึก
2. คลิก **Copy webhook URL** แล้ววางลงใน webhook ของเซสชัน WAHA สำหรับเหตุการณ์ "message" เก็บ URL นี้เป็นความลับเหมือนรหัสผ่าน
3. กด **Test connection**
4. เปิด **Inbox** แล้วกรองด้วย **WhatsApp** ข้อความจะเข้ามาทันทีที่แขกส่ง
5. ที่ **Channels** (`/messaging/channels`) เลือกโหมดตอบกลับของหมายเลขนี้ ค่าเริ่มต้นคือ **Draft** (ฉบับร่าง) AI จะเตรียมคำตอบไว้ และไม่มีข้อความใดถูกส่งจนกว่าคุณจะอนุมัติ

::screenshot{src="/images/blog/demo/en/guest-inbox.webp" alt="กล่องข้อความแขกของ Hotelier Tools ที่มีตัวกรอง All, WhatsApp, Email และ Booking.com บทสนทนา WhatsApp และอีเมล 4 รายการที่แต่ละรายการติดป้าย draft และข้อความแจ้งสีเหลืองว่า WhatsApp เข้ามาทาง webhook และต้องวาง URL ที่สร้างไว้ในเซสชัน WAHA สำหรับเหตุการณ์ message" caption="WhatsApp อีเมล และ Booking.com ในรายการเดียว แต่ละรายการมีร่างจาก AI ถ้าไม่มีข้อความเข้ามา ให้ตรวจ webhook URL ในเซสชัน WAHA ของคุณ" path="/messaging"}
::

### AI ทำอะไรได้บ้างบน WhatsApp

- **AI เห็นการจองก็ต่อเมื่อยืนยันตัวผู้ส่งได้แล้ว** บน WhatsApp เบอร์ของผู้ส่งต้องตรงกับเบอร์โทรในการจองอย่างน้อย 8 หลักสุดท้าย ถ้าตรงกับแขกสองคน AI จะไม่เห็นการจองของใครเลย สำหรับแขกจาก Booking.com ให้เพิ่มเบอร์โทรในการจองของ Little Hotelier เพื่อให้จับคู่แชตได้
- **ตอบจากข้อมูลที่คุณให้ไว้** ใช้ FAQ บันทึกของที่พัก (house notes) และการ์ดที่พัก (`/messaging/faq`) ส่วนเรื่องที่คุณไม่ได้ใส่ไว้ AI จะตอบว่า "to confirm" (รอยืนยัน)
- **ไม่มีเครื่องมือใดๆ** AI ส่งกลับได้เพียงแผนจากรายการที่กำหนดไว้ตายตัว (ส่งข้อความ แจ้งพนักงาน เพิ่มหมายเหตุในการจอง ตั้งเวลาที่แขกจะมาถึง) ยกเลิกการจอง เปลี่ยนวันที่ หรือแตะต้องการชำระเงินไม่ได้
- **การตอบอัตโนมัติมีเงื่อนไข** ต้องเป็นแขกที่ยืนยันตัวตนแล้ว เป็นคำขอที่อนุญาต และ AI ต้องมั่นใจมากพอ และจะหยุดเมื่อถึง 4 คำตอบต่อชั่วโมง 12 คำตอบต่อวัน หรือตอบติดกัน 3 ครั้งโดยแขกไม่ตอบกลับ
- **ให้คุณตอบก่อน** AI จะวิเคราะห์ข้อความ WhatsApp หลังผ่านไป 5 นาที ถ้าคนในทีมตอบไปแล้ว จะไม่มีการวิเคราะห์และไม่เสียค่าใช้จ่าย การวิเคราะห์แต่ละครั้งใช้เครดิต AI

พนักงานของคุณยังถาม AI เรื่องการจองได้ด้วยการส่งข้อความไปที่หมายเลขเดียวกันที่เชื่อมไว้ ผ่าน **Staff assistant** (ผู้ช่วยสำหรับพนักงาน, `/staff`, alpha) ข้อความของพนักงานจะไม่ปนอยู่ในกล่องข้อความแขก และทุกการเปลี่ยนแปลงที่พนักงานขอต้องรอเจ้าของอนุมัติ

::screenshot{src="/images/blog/demo/en/guest-messaging-reply-modes-menu.webp" alt="หน้า Channels ที่เปิดเมนู When a guest writes ของการเชื่อมต่อ WhatsApp (WAHA): Off, collect only; Draft, I approve everything (เลือกอยู่); Automatic reply, no reservation changes; Autonomous, replies and changes reservations" caption="หนึ่งโหมดตอบกลับต่อหนึ่งหมายเลข Draft รอให้คนอนุมัติ" path="/messaging/channels"}
::

::demo-cta{path="/messaging"}
::

ดูว่ากล่องข้อความจัดการบทสนทนาจาก Booking.com อย่างไรได้ใน[วิธีจัดการข้อความแขกจาก Booking.com](/blog/booking-com-guest-messages) และดูฟีเจอร์ทั้งหมดได้ที่[หน้า Guest inbox](/tools/bot/guest-inbox) แดชบอร์ดใช้ฟรีสำหรับทุกโรงแรมจนถึงวันเริ่มเรียกเก็บเงิน 10 มกราคม 2027

::callout{type="info" title="เครื่องมืออิสระ"}
Hotelier Tools ไม่ได้มีส่วนเกี่ยวข้องกับ SiteMinder, Little Hotelier, WhatsApp หรือ Meta และไม่ได้รับการรับรองจากบริษัทเหล่านี้ โดยเชื่อมต่อผ่านบัญชี Little Hotelier ของโรงแรมคุณเอง
::

## การยินยอมและความเป็นส่วนตัวบน WhatsApp

นโยบายธุรกิจของ WhatsApp ระบุว่าคุณติดต่อได้เฉพาะคนที่ให้หมายเลขแก่คุณและให้ "opt-in permission ... confirming that they wish to receive subsequent messages or calls from you" (ความยินยอมที่ยืนยันว่าต้องการรับข้อความหรือการโทรจากคุณในภายหลัง) ([WhatsApp Business Policy](https://business.whatsapp.com/policy)) ในทางปฏิบัติ

- ถามตอนจองหรือเช็คอินว่าแขกต้องการรับข้อมูลอัปเดตทาง WhatsApp หรือไม่ แล้วบันทึกไว้ในการจอง
- ใช้หมายเลขเฉพาะเรื่องการเข้าพักของแขก การตลาดต้องขออนุญาตแยกต่างหาก
- แจ้งในนโยบายความเป็นส่วนตัวว่าคุณใช้ WhatsApp และหยุดส่งเมื่อแขกขอ

## สรุป

- **Messaging hub** (ส่วนเสริม Guest Engagement) คือตัวเลือกในตัวของ Little Hotelier ที่ใช้ API อย่างเป็นทางการ ได้แก่ กล่องข้อความร่วม เชื่อมกับการจอง มีเทมเพลต และเสียค่าบริการให้ Meta สำหรับข้อความที่คุณเริ่มก่อน
- **แอป WhatsApp Business** ฟรีและใช้ได้ดีถ้ามีคนตอบคนเดียว แต่ไม่รู้ข้อมูลการจองของคุณเลย
- **กล่องข้อความของ Hotelier Tools** รวม WhatsApp กับอีเมลและ Booking.com พร้อมร่างจาก AI ที่คนอนุมัติ ใช้เซสชัน WhatsApp Web (WAHA) ไม่ใช่ API อย่างเป็นทางการ จึงควรใช้กับบทสนทนาที่แขกเริ่มก่อน
- สำหรับที่พักในไทย LINE OA ยังเป็นช่องทางหลักของแขกจำนวนมาก และกล่องข้อความของ Hotelier Tools ยังไม่รองรับ LINE
- ตั้งแต่ 28 กันยายน 2026 การจองจาก Booking.com เข้ามาโดยไม่มีเบอร์โทร ให้คัดลอกจาก Extranet เมื่อต้องใช้
