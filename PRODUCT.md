# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + Tailwind CSS, statik build. Hozirgi `index.html` (bitta fayl) va uni servis qiluvchi Express `service.js` o'rnini bosadi. Sayt noldan qayta quriladi. Deploy: Netlify (statik).

## Users

- **Asosiy:** Samarqand shahri va viloyatidagi uy ta'mirlayotgan xususiy xaridor — telefonda qidiradi, narx va mavjudlikni tez bilmoqchi, do'kon qayerdaligini va nechada ochilishini bilishi kerak.
- **Ikkinchi:** usta va qurilish brigadalari — ertalab erta (7:00) material olishadi, takroriy xaridorlar.
- **Uchinchi:** ulgurji xaridorlar / pudratchilar — katta hajm uchun alohida chegirma narx so'rashadi.

## Product Purpose

Diyor Stroy — Samarqanddagi qurilish mollari va ta'mirlash materiallari do'koni. Sayt do'konni sotmaydi, balki **ishonch hosil qiladi va aloqaga olib keladi**. Muvaffaqiyat = tashrifchi qo'ng'iroq qiladi yoki Telegram'ga yozadi, ulgurji so'rov qoldiradi, yoki do'konga qanday borishni aniq biladi.

Saytning uchta tasdiqlangan vazifasi:
1. Qo'ng'iroq / Telegram orqali aloqa.
2. Do'konni topish — manzil, xarita, ish vaqti, yo'l.
3. Ulgurji buyurtma va usta/brigadalar uchun alohida yo'nalish (chegirma so'rovi).

Onlayn katalog va narx ko'rsatish **maqsad emas** — narx telefon orqali aytiladi.

## Positioning

To'g'ridan-to'g'ri ishlab chiqaruvchi va yirik distribyutorlardan olinadi — oraliq ustama yo'q, shuning uchun narx bozordan past. Shu bilan birga faqat sertifikatlangan, jahon brendlarining rasmiy mahsulotlari sotiladi. "Arzon" va "sifatli" odatda bir-birini istisno qiladi; bu yerda ikkalasi bitta manba tufayli birga keladi. Ertalab 7:00 dan ochilishi — usta va brigadalar ish boshlashidan oldin ulgurishi uchun.

## Operating Context

- Tashrifchilarning katta qismi **telefonda**, ko'chada yoki ob'ektda turib qidiradi. Mobil birinchi o'rinda.
- Qidiruv so'rovlari asosan lokal: "Samarqandda qurilish mollari", "arzon sement Samarqand".
- Aloqa kanali — telefon va **Telegram** (bir xil raqam). Email deyarli ishlatilmaydi.
- Xarid jarayoni: qidiradi → qo'ng'iroq qiladi / yozadi → narxni bilib do'konga boradi yoki yetkazib berishni so'raydi.
- Ish vaqti: har kuni, dam olishsiz, 07:00–20:00.

## Capabilities and Constraints

- **Tillar:** o'zbek + rus. Ikkalasi ham to'liq, til almashtirgich bilan. (Ingliz yo'q.)
- **Sayt turi:** statik, backend yo'q. Forma yuborilsa — Telegram bot yoki Netlify Forms orqali (aniq usul hali hal qilinmagan).
- **To'lov:** naqd, plastik karta, bank o'tkazmasi. Onlayn to'lov yo'q.
- **Xizmatlar:** Samarqand shahri va viloyat bo'ylab yetkazib berish; do'kondan olib ketish; material tanlashda bepul maslahat.
- **Assortiment:** 5000+ mahsulot turi.
- **Aniqlanmagan:** narxlar saytda ko'rsatilmaydi; onlayn buyurtma/savat yo'q; mahsulot bazasi (CMS) hozircha yo'q.

## Brand Commitments

- Nomi: **Diyor Stroy** (DIYOR STROY).
- Logotiplar mavjud: `images/logo.png`, `images/logoWhite.png`.
- Domen: https://diyorstroy.uz/
- Ovoz: sodda, aniq, ortiqcha va'dasiz. Xaridor usta yoki uy egasi — jargon yo'q, raqam va fakt bor.
- Foydalanuvchi tomonidan majburiy qilingan vizual referenslar: `references/1–4.jpg` (qorong'i, katta tipografika, foto-hero) va ulardan chiqarilgan `DESIGN_SYSTEM.md`. Dizayn yo'nalishi shu asosda hal qilinadi.

## Evidence on Hand

- **Real raqamlar (tasdiqlangan, `llms.txt` dan):** 6 yildan ortiq tajriba, 30 000+ mamnun mijoz, 5000+ mahsulot turi.
- **Real brendlar:** Knauf, Akfa, Akfix, Ferro, Tolsen, Hayat, EPA, Viko, Lucem, Somafix, WaterPro, Dusel, Inoria, Vero, Sali. Logotiplar: `images/brands/`.
- **Real fotolar:** `images/street.jpg` (do'kon tashqarisi), `images/photo1–9.jpg` (do'kon ichi va mahsulotlar).
- **Real kontakt:** +998 97 646 10 00 (tel + Telegram), Xalil Sulton ko'chasi 150, Oqmachit MFY, Samarqand. Koordinatalar: 39.6211034, 66.995441. Instagram: @diyor.stroy.
- **Mahsulot toifalari** `llms.txt` da ro'yxatlangan — o'ylab topilmaydi, shundan olinadi.
- **YO'Q:** yozma otzivlar/testimoniallar, keys-steydilar, sertifikat skanlari, jamoa fotolari, matbuot. Bularni **to'qib chiqarish mumkin emas** — kerak bo'lsa foydalanuvchidan so'raladi.

## Product Principles

1. **Aloqa — bitta bosishda.** Har bir ekranda telefon/Telegram qo'lga yaqin. Sayt maqsadi — qo'ng'iroq.
2. **Raqam va'dadan kuchli.** 6 yil, 30 000+ mijoz, 5000+ mahsulot, 7:00–20:00 — umumiy "sifatli xizmat" gaplari o'rniga faktlar.
3. **Mobil — asosiy, desktop — ikkilamchi.** Tashrifchi ob'ektda, telefonda, quyoshda turibdi.
4. **Faqat haqiqiy kontent.** Soxta otziv, o'ylab topilgan mijoz yoki mavjud bo'lmagan xizmat yozilmaydi.
5. **Uch yo'nalish aralashmaydi:** oddiy xaridor, usta/brigada, ulgurji — har biri o'z yo'lini tez topadi.

## Accessibility & Inclusion

- Ikki til (uz/ru) — kontent tengligi shart, biri to'liq biri chala bo'lmaydi.
- Tashqarida, kunduzi telefonda o'qiladi: matn kontrasti yuqori, tugmalar katta (min 44×44px).
- Telefon raqami va manzil matn sifatida tanlanadigan bo'lishi kerak (rasm emas).
