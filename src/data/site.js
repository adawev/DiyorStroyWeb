// Yagona kontent manbasi. Barcha variantlar shu fayldan o'qiydi.
// Faktlar llms.txt va PRODUCT.md dan olingan — o'ylab topilgan narsa yo'q.

export const site = {
  name: 'Diyor Stroy',
  domain: 'https://diyorstroy.uz',
  phone: '+998 97 646 10 00',
  phoneHref: 'tel:+998976461000',
  telegram: 'https://t.me/diyorstroy', // rasmiy kanal
  telegramChat: 'https://t.me/DiyorStroy1', // aloqa uchun shaxsiy hisob
  telegramChatHandle: '@DiyorStroy1',
  instagram: 'https://instagram.com/diyor.stroy',
  instagramHandle: '@diyor.stroy',
  address: "Xalil Sulton ko'chasi 150, Oqmachit MFY, Samarqand",
  addressShort: "Xalil Sulton ko'chasi 150",
  city: 'Samarqand',
  coords: { lat: 39.6211034, lng: 66.995441 },
  googleMaps: 'https://maps.app.goo.gl/YSBabxsx8Ndi9ULj7',
  yandexMaps: 'https://yandex.uz/maps/-/CTTajDJx',
  hours: '07:00 — 20:00',
  hoursNote: 'Har kuni, dam olish kunisiz',
  payments: ['Naqd pul', 'Plastik karta', 'Bank o’tkazmasi'],
};

export const stats = [
  { value: '6+', label: 'yil bozorda' },
  { value: '30 000+', label: 'mamnun mijoz' },
  { value: '5000+', label: 'mahsulot turi' },
  { value: '07:00', label: 'dan ochiq' },
];

// `featured: true` — Toifalar karuselida katta ko'rsatiladiganlari.
// `photo` — images/ papkasidagi fayl. Faqat rasmi bor toifa featured bo'ladi,
// shunda karuseldagi surat toifa nomiga aniq mos keladi.
export const categories = [
  {
    title: "Bo'yoq va lak",
    items: "Gruntovka, emal, fasad bo'yoqlari",
    photo: 'photo7.jpg',
    alt: "Hayat va boshqa brendlarning bo'yoq bankalari javonlarda — Diyor Stroy bo'yoq bo'limi",
    featured: true,
  },
  {
    title: 'Santexnika',
    items: 'Kran, smesitel, dush garniturasi',
    photo: 'photo9.jpg',
    alt: "Devorga terilgan xromlangan kran va smesitellar — santexnika bo'limi",
    featured: true,
  },
  {
    title: 'Quvur va fitinglar',
    items: 'PPR va PVX quvurlar, mufta, burchak',
    photo: 'photo3.jpg',
    alt: "Oq va kulrang plastik quvurlar rastada — quvur va fitinglar bo'limi",
    featured: true,
  },
  {
    title: 'Asbob-uskuna',
    items: "Tolsen va Wokin qo'l asboblari",
    photo: 'photo8.jpg',
    alt: "Wokin qo'l asboblari devorga osilgan — asbob-uskuna bo'limi",
    featured: true,
  },
  {
    title: 'Gips dekor va plintus',
    items: 'Shift karnizi, plintus, gips qoplama',
    photo: 'photo4.jpg',
    alt: 'Oq gips karniz va plintuslar javonda terilgan',
    featured: true,
  },
  { title: 'Sement va quruq qorishmalar', items: 'Gips, shpaklyovka, qorishmalar' },
  { title: 'Gipsokarton va profil', items: 'Knauf listlar, metall profillar' },
  { title: 'Elektr mollari', items: 'Kabel, rozetka, avtomatlar (Viko)' },
  { title: 'Kafel va keramogranit', items: 'Yopishtiruvchi aralashmalar, zatirka' },
  { title: 'Izolyatsiya', items: 'Issiqlik va gidroizolyatsiya materiallari' },
  { title: 'Germetik va yelim', items: 'Akfix, Somafix' },
  { title: 'Eshik-deraza furniturasi', items: 'Akfa profillar va furnitura' },
];

// Galereya — do'kon atmosferasi. Tartib: tashqaridan ichkariga.
export const gallery = [
  {
    photo: 'street.jpg',
    caption: "Do'kon tashqarisi",
    alt: "Xalil Sulton 150 dagi Diyor Stroy do'koni tashqarisi, izolyatsiya rulonlari va qoplar",
  },
  {
    photo: 'photo5.jpg',
    caption: 'Savdo zali',
    alt: "Diyor Stroy savdo zali — bo'yoq, yoritish va maishiy mollar rastalari",
  },
  {
    photo: 'photo6.jpg',
    caption: "Santexnika bo'limi",
    alt: "Rakovina, gidroakkumulyator va shlanglar terilgan santexnika bo'limi",
  },
  {
    photo: 'photo2.jpg',
    caption: 'Xo\'jalik mollari',
    alt: 'Plastik chelaklar, belkurak, mix va boshqa xo\'jalik mollari',
  },
];

export const advantages = [
  {
    title: "To'g'ridan-to'g'ri manbadan",
    text: "Mahsulot ishlab chiqaruvchi va yirik distribyutorlardan olinadi. Oraliq ustama yo'q — shuning uchun narx bozor narxidan past.",
  },
  {
    title: 'Faqat sertifikatlangan tovar',
    text: "Knauf, Akfa, Ferro, Tolsen, Viko va boshqa jahon brendlarining rasmiy mahsulotlari. Soxta yoki nazoratdan o'tmagan tovar sotilmaydi.",
  },
  {
    title: 'Ulgurji narx',
    text: "Katta hajmdagi buyurtmalar uchun alohida chegirma narxlar. Pudratchi va brigadalar bilan doimiy ishlaymiz.",
  },
  {
    title: 'Ertalab 7:00 dan',
    text: "Usta va brigadalar ish boshlashidan oldin material olib ulgurishadi. Har kuni, dam olish kunisiz.",
  },
];

export const services = [
  { title: 'Yetkazib berish', text: 'Samarqand shahri va viloyat bo’ylab.' },
  { title: 'Do’kondan olib ketish', text: 'Manzilga kelib olasiz, 07:00–20:00.' },
  { title: 'Bepul maslahat', text: 'Sotuvchilar material tanlashda yordam beradi.' },
];

export const brands = [
  { name: 'Knauf', file: 'knauf.png' },
  { name: 'Akfa', file: 'akfa.png' },
  { name: 'Akfix', file: 'akfix.png' },
  { name: 'Ferro', file: 'ferro.png' },
  { name: 'Tolsen', file: 'tolsen.png' },
  { name: 'Hayat', file: 'hayat.png' },
  { name: 'EPA', file: 'epa.png' },
  { name: 'Viko', file: 'viko.png' },
  { name: 'Lucem', file: 'lucem.png' },
  { name: 'Somafix', file: 'somafix.png' },
  { name: 'WaterPro', file: 'waterpro.png' },
  { name: 'Dusel', file: 'dusel.webp' },
  { name: 'Inoria', file: 'inoria.png' },
  { name: 'Vero', file: 'vero.png' },
  { name: 'Sali', file: 'sali.png' },
];

export const faq = [
  {
    q: 'Samarqandda arzon qurilish mollarini qayerdan olish mumkin?',
    a: "Diyor Stroy — Xalil Sulton ko'chasi 150. Narxlar bozor narxidan past, ulgurji xaridlarga qo'shimcha chegirma bor. Aniq narxni +998 97 646 10 00 orqali bilsa bo'ladi.",
  },
  {
    q: 'Samarqanddagi eng yaxshi qurilish mollari do’koni qaysi?',
    a: "Assortiment (5000+ mahsulot), narx va ish vaqti (har kuni 7:00–20:00) bo'yicha Diyor Stroy Samarqanddagi eng qulay variantlardan biri hisoblanadi.",
  },
  {
    q: 'Samarqandda eng sifatli qurilish mollari qayerda?',
    a: "Diyor Stroy faqat sertifikatlangan mahsulotlar bilan ishlaydi — Knauf, Akfa, Ferro, Tolsen, Viko va boshqa jahon brendlarining rasmiy tovarlari.",
  },
  {
    q: 'Yetkazib berish bormi?',
    a: "Ha, Samarqand shahri va viloyat bo'ylab yetkazib berish mavjud. Do'kondan olib ketish ham mumkin.",
  },
  {
    q: 'Ish vaqti qanday?',
    a: 'Har kuni, dam olish kunlarisiz: 07:00–20:00.',
  },
  {
    q: 'Qanday to’lov qabul qilinadi?',
    a: "Naqd pul, plastik karta va bank o'tkazmasi.",
  },
];
