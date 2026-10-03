---
title: "การเชื่อมต่อ Little Hotelier ที่ดีที่สุดปี 2026"
seoTitle: "การเชื่อมต่อ Little Hotelier ที่ดีที่สุดปี 2026"
description: "อะไรเชื่อมต่อกับ Little Hotelier ได้ในปี 2026: ส่งออกไป Xero และ QuickBooks เช็คอิน Chekin และ Duve เครื่องมือตั้งราคา ข้อความถึงแขก AI และส่วนเสริมฟรี"
date: 2026-10-03
category: api
tags: [integrations, app store, xero, chekin, little hotelier]
keywords: [การเชื่อมต่อ Little Hotelier, little hotelier integrations, little hotelier xero integration, little hotelier app store, little hotelier booking widget, little hotelier chekin, little hotelier zapier]
feature: api-mcp
demoPath: /developer/rest-api
cover: /images/blog/demo/en/developer-portal.webp
coverAlt: "พอร์ทัลนักพัฒนาใน Hotelier Tools มีการ์ด REST API & Swagger, MCP setup, API keys และ LH methods พร้อมกล่อง Authentication ที่มีตัวอย่าง cURL โดยใช้ API key จำลอง"
faq:
  - q: "Little Hotelier เชื่อมต่อกับ Xero หรือ QuickBooks ได้ไหม?"
    a: "ได้ผ่านไฟล์ ไม่ใช่การซิงก์สด คุณจับคู่รหัสบัญชีและรหัสภาษีใน Little Hotelier แล้วส่งออกใบแจ้งหนี้ที่สรุปแล้วเป็น CSV ที่ออกแบบมาสำหรับนำเข้า Xero และ QuickBooks ณ เดือนตุลาคม 2026 App Store ไม่มีแอปบัญชีให้เลือก"
  - q: "Little Hotelier ใช้กับ Zapier ได้ไหม?"
    a: "เมื่อตรวจสอบวันที่ 3 ตุลาคม 2026 เราไม่พบแอป Little Hotelier บน Zapier หน้าการเชื่อมต่อของ Little Hotelier แสดงว่าไม่พบ หากต้องการเชื่อม Little Hotelier กับเครื่องมืออื่น ให้ใช้แอปจาก App Store หรือสคริปต์ที่อ่านข้อมูลของคุณผ่าน API"
  - q: "แอปใน Little Hotelier App Store ราคาเท่าไร?"
    a: "Little Hotelier ไม่คิดค่าเชื่อมต่อ แต่ละแอปกำหนดราคาเอง และหน้า App Store ของ Little Hotelier ระบุว่าส่วนใหญ่ราคาไม่เกิน 50 ดอลลาร์สหรัฐต่อเดือน หลายแอปมีให้ทดลองใช้ฟรี"
  - q: "จะเพิ่มวิดเจ็ตจองของ Little Hotelier ลงใน WordPress อย่างไร?"
    a: "ใน Direct Booking เปิดตัวช่วยสร้างวิดเจ็ต เลือกปุ่ม Book now วิดเจ็ตเลือกวันที่ หรือวิดเจ็ตกำหนดเอง แล้วคัดลอกโค้ดที่แสดง วางลงในบล็อก Custom HTML บนหน้า WordPress ของคุณ Little Hotelier แนะนำให้คัดลอกโค้ด ไม่ใช่พิมพ์ใหม่"
  - q: "แอปบริหารรายได้เปลี่ยน minimum stay ของฉันได้ไหม?"
    a: "โดยปกติไม่ได้ ศูนย์ช่วยเหลือของ Little Hotelier ระบุว่าแอป RMS ที่เชื่อมต่อควบคุมการอัปเดตราคา ส่วน minimum stay และ stop sell ยังจัดการใน Little Hotelier"
  - q: "Hotelier Tools อยู่ใน Little Hotelier App Store หรือไม่?"
    a: "ไม่ Hotelier Tools เป็นระบบอิสระ ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก SiteMinder หรือ Little Hotelier เชื่อมต่อด้วยบัญชี Little Hotelier ของที่พักคุณเอง คุณจึงตั้งค่าเองแทนการผ่าน App Store"
---

Little Hotelier เชื่อมต่อกับซอฟต์แวร์ภายนอกใน 3 ที่ คือ **Little Hotelier App Store** (แอปพันธมิตรราว 30 รายการสำหรับเช็คอิน ส่งข้อความ ขายเสริม รีวิว กุญแจไร้สัมผัส และตั้งราคา ณ เดือนตุลาคม 2026) **ปลั๊กอินของ booking engine** และ **ส่วนเสริม** ของ Little Hotelier เองอย่าง Guest Engagement และ Dynamic Revenue Plus ส่วนระบบบัญชีเป็นการส่งออก CSV ที่ออกแบบมาสำหรับ Xero และ QuickBooks ไม่ใช่การซิงก์สด หากขาดอะไร คุณเพิ่มชั้นที่อ่านข้อมูลของคุณผ่าน API หรือใช้สคริปต์เบราว์เซอร์ฟรีได้

## การเชื่อมต่อของ Little Hotelier อยู่ที่ไหนบ้าง

| ประเภท | หาได้ที่ไหน | เชื่อมต่ออย่างไร |
|---|---|---|
| แอปใน App Store | [littlehotelier.com/app-store](https://www.littlehotelier.com/app-store/) | คุณติดต่อผู้ให้บริการแอป แล้วเขาตั้งค่าให้ |
| ปลั๊กอินของ booking engine | **Direct booking → Configuration → Plug-in apps** | วางข้อมูลรับรองของแอปแล้วคลิก **Enable** |
| ส่วนเสริมของ Little Hotelier | แพ็กเกจของคุณ ([หน้าราคา](https://www.littlehotelier.com/pricing/)) | Little Hotelier เปิดให้ |
| ช่องทางขาย (OTA) | **Distribution → Channels** | จับคู่ใน channel manager |

กฎบางข้อจาก[บทความช่วยเหลือเรื่อง App Store](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store)

- แอป "not set up inside your platform" คุณใช้แบบฟอร์มติดต่อในหน้าของแอป แล้วผู้ให้บริการเป็นผู้เชื่อมต่อให้
- Little Hotelier ไม่คิดค่าเชื่อมต่อ แต่ละแอปมีราคาของตัวเอง [หน้า App Store](https://www.littlehotelier.com/app-store/) ระบุว่าส่วนใหญ่ไม่เกิน 50 ดอลลาร์สหรัฐต่อเดือน
- การตั้งค่าใช้เวลาไม่กี่นาที หรือสูงสุด 48 ชั่วโมงสำหรับบางแอป การสนับสนุนแอปมาจากผู้ให้บริการแอปนั้น

ปลั๊กอินมีผลเฉพาะ booking engine ของคุณ ณ เดือนตุลาคม 2026 [รายการ](https://help-platform.littlehotelier.com/en/articles/10440176-plug-in-apps-in-for-your-booking-engine)ครอบคลุม Google Analytics 4 และ Meta Pixel เปรียบเทียบราคา (123compare.me, TripTease) แชตบอต (HiJiffy, Book Me Bob) Tripadvisor Review Express โปรแกรมสะสมแต้ม (The Guestbook, Laasie) และเครื่องมือโฆษณา (Google Ads, Sojern, The Hotels Network, Flip.to และอื่น ๆ)

## ระบบบัญชี: Xero, QuickBooks และอื่น ๆ

ในรายการ App Store ที่เราตรวจเมื่อเดือนตุลาคม 2026 ไม่มีแอปซิงก์บัญชีแบบสด สิ่งที่ Little Hotelier มีให้คือ **การส่งออกบัญชี (accounting export)**

1. ตั้งผังบัญชีและรหัสภาษีใน Xero, QuickBooks หรือซอฟต์แวร์ของคุณก่อน
2. ใน Little Hotelier เปิด **Setup → Accounting exports** (แบบคลาสสิก: **Front Desk → Setup → Accounting Integration**) แล้วกรอกรหัสบัญชีและรหัสภาษีเริ่มต้นสำหรับรายได้ห้องพัก ของเสริม ภาษี ค่าธรรมเนียมบัตร และค่าบริการ
3. ในแต่ละรอบ เปิด **Reports → Operational → Accounting** เลือกวันที่ แล้วคลิก **Export**

ระบบส่งออกเฉพาะใบแจ้งหนี้ที่ทำเครื่องหมาย **final** เป็น CSV (หรือ ZIP ของ CSV สำหรับช่วงเวลายาว) ที่ "designed for Xero and QuickBooks" import ([คู่มือตั้งค่า](https://help-platform.littlehotelier.com/en/articles/10397752-accounting-exports-setup-guide), [คู่มือส่งออก](https://help-platform.littlehotelier.com/en/articles/10472787-export-invoices-marked-as-final)) ในสเปน e-invoicing VeriFactu อยู่ในรายการฟีเจอร์ของแพ็กเกจบน[หน้าราคา](https://www.littlehotelier.com/pricing/)

นี่คือจุดที่ผู้รีวิวติมากที่สุด บน [Capterra](https://www.capterra.com/p/144307/Little-Hotelier/reviews/) ผู้ใช้เขียนว่า "the reports and syncing to accounting software can be improved" หากสิ่งที่นักบัญชีของคุณต้องการจริง ๆ คือ PDF ใบแจ้งหนี้ทุกใบของไตรมาส ดู[ดาวน์โหลดใบแจ้งหนี้ Little Hotelier ทั้งหมดในครั้งเดียว](/blog/download-all-little-hotelier-invoices)

## เช็คอินออนไลน์และการลงทะเบียนแขก

App Store มีแอปเช็คอินหลายตัว พร้อมช่วงราคาที่หน้าเว็บแสดง (ตุลาคม 2026)

- **Chekin** (0–50 ดอลลาร์สหรัฐ/เดือน): ตรวจสอบบัตรประจำตัวด้วยการเทียบใบหน้า แบบฟอร์มลงทะเบียนดิจิทัล รายงานให้ตำรวจและสถิติ และภาษีท่องเที่ยวใน 18 ประเทศและภูมิภาค รวมสเปน อิตาลี โปรตุเกส ฝรั่งเศส เยอรมนี และไทย ([บทความช่วยเหลือ](https://help-platform.littlehotelier.com/en/articles/10390472-connect-to-chekin))
- **Duve** (0–50 ดอลลาร์สหรัฐ): เช็คอินออนไลน์ แอปสำหรับแขก และการขอรีวิว
- **Vikey** (0–50 ดอลลาร์สหรัฐ): เช็คอินด้วยตนเองและกุญแจอัจฉริยะ
- **Abitari Kiosk**, **OpenKey** และ **Akia**: ตู้คีออสก์ กุญแจบนมือถือ และเช็คอินแบบไร้สัมผัส

Little Hotelier ยังมีตัวเลือกในตัว ด้วยส่วนเสริม **Guest Engagement** แบบฟอร์มเช็คอินเพื่อปฏิบัติตามกฎหมายสามารถส่งข้อมูลแขกให้หน่วยงานรัฐใน อิตาลี สเปน โปรตุเกส เยอรมนี สวิตเซอร์แลนด์ ออสเตรีย โครเอเชีย สาธารณรัฐเช็ก และโคลอมเบีย ([แหล่งที่มา](https://help-platform.littlehotelier.com/en/articles/10066500-automated-compliance-reporting)) ที่พักในสเปนดูว่าเรื่องนี้เข้ากับ SES Hospedajes อย่างไรได้ใน [SES Hospedajes กับ Little Hotelier](/blog/ses-hospedajes-little-hotelier) และกฎของแต่ละประเทศอยู่ใน[กฎการลงทะเบียนแขกตามประเทศ](/blog/guest-registration-rules-by-country)

หากคุณใช้ Chekin userscript ฟรี **Chekin Connection** จะแสดงสถานะเช็คอินของ Chekin ภายในรายการจองของ Little Hotelier: พบแขกกี่คน เบอร์โทร และเลขบัตร พร้อมปุ่มคัดลอกเอกสารเข้าไปในการจองเพื่อใช้ในใบแจ้งหนี้

::screenshot{src="/images/scripts/show-chekin/to.png" alt="การจองใน Little Hotelier ภาษาสเปนที่มีแผง Chekin: สถานะพบแขก 1 คน ตารางชื่อ เบอร์โทร และเอกสารประจำตัว และปุ่ม Use document กับ View in Chekin" caption="สคริปต์ Chekin Connection ฟรี แสดงข้อมูลเช็คอินโดยไม่ต้องออกจากหน้าการจอง"}
::

ติดตั้งได้จาก [Chekin Connection](/tools/ui/show-chekin) และ[คู่มือการติดตั้ง](/tools/ui/instructions)ใช้เวลาไม่กี่นาที

## การตั้งราคาและการบริหารรายได้

แอปบริหารรายได้ใน App Store ได้แก่ **RoomPriceGenie**, **Smartpricing**, **Happyhotel** และ **Pricepoint** ศูนย์ช่วยเหลือยังระบุ **Aiosell** และ **Right Revenue** ([แหล่งที่มา](https://help-platform.littlehotelier.com/en/articles/15813810-little-hotelier-app-store))

ข้อจำกัดข้อหนึ่งที่ควรรู้ก่อนสมัคร: ศูนย์ช่วยเหลือแบบคลาสสิกระบุว่า RMS ที่เชื่อมต่อ "can control rate updates, not restrictions" Minimum stay และ stop sell ยังอยู่ใน Little Hotelier ([แหล่งที่มา](https://helpcentre.littlehotelier.com/en/articles/15165178-little-hotelier-app-store))

ตัวเลือกของ Little Hotelier เองคือ **Dynamic Revenue Plus** ส่วนเสริมบนแพ็กเกจ Pro ที่ให้คำแนะนำราคาจากข้อมูล ตัวแพ็กเกจ Pro เองรวมรายงานราคาคู่แข่งและ rate parity อยู่แล้ว

Hotelier Tools เพิ่มราคาคู่แข่งจาก Booking.com และ Google (beta) และคำแนะนำราคาพร้อมคำอธิบาย "Why?" ทีละขั้น (alpha) ไม่มีอะไรเปลี่ยนใน Little Hotelier จนกว่าคุณจะยืนยัน ดู[การตั้งราคาแบบไดนามิกสำหรับโรงแรมขนาดเล็กบน Little Hotelier](/blog/dynamic-pricing-little-hotelier)

## ข้อความถึงแขกและ WhatsApp

ในตัวระบบ **Messaging hub** ใน Guest Engagement รวม WhatsApp, Airbnb, SMS (ผ่าน Twilio), Booking.com และประวัติอีเมลไว้ในกล่องข้อความเดียว WhatsApp ทำงานบน WhatsApp Business API: การตอบกลับภายในหน้าต่าง 24 ชั่วโมงไม่มีค่าใช้จ่าย ส่วนข้อความเทมเพลต WhatsApp เป็นผู้คิดค่าบริการ ([แหล่งที่มา](https://help-platform.littlehotelier.com/en/articles/9525840-messaging-hub-frequently-asked-questions))

ทางเลือกใน App Store ได้แก่ **GuestTouch**, **Akia**, **Guest Talk**, **Bookboost**, **HelloShift**, **Hinstant** และ **Zingle**

::callout{type="tip" title="แขกจาก Booking.com ไม่ได้รับอีเมลของคุณ?"}
Booking.com บล็อกอีเมลและลิงก์จากระบบที่ไม่รู้จัก Little Hotelier ให้คุณเพิ่ม `@app.littlehotelier.com` และ `@guestjoy.com` เป็นที่อยู่อีเมล และ `siteminder.com` กับ `guestjoy.com` เป็นลิงก์ใน extranet ที่ **Property → Messaging preferences → Security settings** ([ขั้นตอน](https://help-platform.littlehotelier.com/en/articles/12046627-add-little-hotelier-to-your-booking-com-e-mail-allowlist))
::

Hotelier Tools ก็มีกล่องข้อความแขกเช่นกัน (alpha): WhatsApp, Gmail, Outlook หรือกล่องจดหมาย IMAP ใดก็ได้ และข้อความจาก Booking.com ในรายการเดียว พร้อมคำตอบที่ AI ร่างให้และคนเป็นผู้อนุมัติ การเชื่อมต่อ WhatsApp ใช้เซสชัน WhatsApp Web (WAHA) ไม่ใช่ Business API อย่างเป็นทางการ เปรียบเทียบตัวเลือกใน [WhatsApp กับ Little Hotelier](/blog/whatsapp-little-hotelier)

## AI และการเชื่อมต่อผ่าน API

"การเชื่อมต่อ AI" มีความหมายสองอย่างสำหรับที่พักที่ใช้ Little Hotelier

**AI ที่ช่วยขายห้องของคุณ** Demand Plus มี **AI bookings**: ที่พักของคุณปรากฏใน ChatGPT และ Claude ผ่านพันธมิตร DirectBooker โดยใช้ราคาสด และแขกจองให้เสร็จที่ booking engine ของคุณ ขณะนี้อยู่ในสถานะ beta ค่าคอมมิชชัน 0% จนถึง 30 พฤศจิกายน 2026 ตั้งแต่ 1 ธันวาคม 2026 จะคิด 6% บวกภาษีสำหรับ AI booking ที่เสร็จสมบูรณ์ และคุณเลือกไม่เข้าร่วมไม่ได้ ([แหล่งที่มา](https://help-platform.littlehotelier.com/en/articles/16654506-ai-bookings-in-demand-plus)) แชตบอตอย่าง HiJiffy และ Book Me Bob เสียบเข้ากับ booking engine

**AI ที่ทำงานกับข้อมูลของคุณเอง** ตรงนี้ไม่มีตัวเลือกอย่างเป็นทางการ Little Hotelier ไม่ให้ API key สำหรับการจองหรือข้อมูลแขกแก่ที่พัก (คำตอบเต็มอยู่ใน [Little Hotelier มี API ไหม?](/blog/little-hotelier-api))

Hotelier Tools เติมช่องว่างนี้ด้วย REST API และ MCP server (ทั้งคู่ beta) เป็นผลิตภัณฑ์อิสระที่เชื่อมต่อด้วยบัญชี Little Hotelier ของคุณเองซึ่งเก็บแบบเข้ารหัส คุณทำสิ่งเหล่านี้ได้

- ถาม Claude หรือ ChatGPT เรื่องแขกที่จะมาถึง ยอดค้างชำระ หรือใบแจ้งหนี้ที่ขาด ([MCP server คืออะไร](/blog/what-is-mcp-server-hotels), [เชื่อมต่อ ChatGPT](/blog/connect-chatgpt-to-little-hotelier))
- เติม Google Sheet ทุกเดือน ([ส่งออกรายการจองไป Excel](/blog/export-little-hotelier-reservations-excel))
- เชื่อมเครื่องมือที่ไม่มีแอปใน App Store ด้วยสคริปต์เล็ก ๆ

::demo-cta{path="/developer/rest-api"}
::

## userscript ฟรีที่เติมช่องว่างเล็ก ๆ

ช่องว่างบางอย่างไม่ต้องใช้การเชื่อมต่อ แค่ต้องการหน้าจอที่ดีกว่า [userscript](/tools/ui) ฟรีทำงานในเบราว์เซอร์ผ่าน Tampermonkey เปลี่ยนเฉพาะหน้าตาของ Little Hotelier สำหรับคุณ และฟรีตลอดไป ตัวที่มีประโยชน์ควบคู่กับการเชื่อมต่อข้างต้น

- [Show Booking.com Commissions](/tools/ui/show-booking-commissions): ประมาณการค่าคอมมิชชัน Booking.com และยอดสุทธิของคุณภายในรายการจอง
- [Prices Display](/tools/ui/prices-display): ราคาของคุณในมุมมองปฏิทิน
- [Easy Save Province and Country](/tools/ui/easy-save-province-country): รายการเลือกจังหวัดของสเปนที่กรอกประเทศให้ด้วย
- [Extra Invoice Print Button](/tools/ui/extra-invoice-print-button): พิมพ์ใบแจ้งหนี้โดยไม่ต้องเปิดเมนู

::screenshot{src="/images/scripts/show-booking-commissions/to.png" alt="สรุปการจองใน Little Hotelier ภาษาสเปนที่มีบรรทัดเพิ่มสำหรับค่าธรรมเนียมการโอน ค่าคอมมิชชัน Booking.com ค่าคอมมิชชันรวมพร้อม VAT และยอดสุทธิโดยประมาณ" caption="Show Booking.com Commissions เพิ่มค่าคอมมิชชันและยอดสุทธิโดยประมาณให้ทุกการจองจาก Booking.com"}
::

ชุดสคริปต์ทั้งหมดอยู่ที่[หน้าส่วนขยายเบราว์เซอร์](/chrome-extensions) และ[ส่วนขยาย Chrome ฟรีสำหรับ Little Hotelier](/blog/little-hotelier-chrome-extensions)อธิบายแต่ละตัว

## ขั้นตอนถัดไป

- ต้องการเช็คอิน ขายเสริม หรือรีวิว? เริ่มที่ App Store แล้วขอทดลองใช้ฟรี
- ต้องการระบบบัญชี? จับคู่รหัสของคุณครั้งเดียวที่ **Setup → Accounting exports** แล้วส่งออกใบแจ้งหนี้ที่สรุปแล้วทุกเดือน
- ต้องการข้อมูลของคุณเองในชีต สคริปต์ หรือผู้ช่วย AI? ใช้ชั้น API เช่น [API & MCP ของ Hotelier Tools](/tools/bot/api-mcp) ซึ่งใช้ฟรีสำหรับทุกโรงแรมจนถึงวันเริ่มเรียกเก็บเงิน 10 มกราคม 2027
