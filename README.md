# «Xolida ustoz bilan o‘zbek tilini o‘rganamiz»
### (Изучаем узбекский язык с учителем Холидой)

Ta’lim rus tilida olib boriladigan umumta’lim maktablarining 5–9-sinf o‘quvchilari va o‘qituvchilari uchun mo‘ljallangan o‘zbek va rus tillari qiyosiy sintaksisi (so‘z birikmasi va gap) bo‘yicha interaktiv ta’lim platformasi.

---

## 🌟 Loyiha haqida
Loyiha rusiyzabon o‘quvchilarning o‘zbek tilida gap tuzishda yo‘l qo‘yadigan tipik xatolarini (kalkalash, SOV tartibining buzilishi, sifatlarga asossiz -lar qo‘shish, izofada -i/-si ni tushirib qoldirish) bartaraf etishga qaratilgan.

### Asosiy bo‘limlar va xususiyatlar:
1. **10 ta didaktik dars moduli** (`/darslar`, `/dars/:slug`): Har bir dars maqsad, qisqa ma’ruza (≤200 so‘z), qiyoslash jadvali, interaktiv sintaktik tahlil (SentenceHighlighter), «Bilasizmi?» rukni, mini-mashq va xulosadan iborat.
2. **«Ko‘prik» qiyosiy paneli** (`/qiyoslash`): O‘zbek (SOV) va rus (SVO) tillaridagi gap bo‘laklari bir xil rang va maktab tagchizma uslubida (ega, kesim, to‘ldiruvchi, aniqlovchi, hol) bog‘lanib, tartib farqi ko‘rsatiladi.
3. **6 ta interaktiv o‘yin** (`/oyinlar`):
   - *«Gap konstruktori»* (SOV tartibida gap yig‘ish)
   - *«Bo‘lak detektivi»* (gap bo‘laklarini rangga bo‘yash)
   - *«Kelishik ruleti»* (6 ta kelishik viktorinasi)
   - *«Juftlik topish»* (xotira kartalari)
   - *«Xato detektivi»* (tipik kalkalarni tuzatish)
   - *«Tarjima ko‘prigi»* (vaqtga qarshi tezkor tarjima)
4. **8 xil turdagi 100+ amaliy mashqlar** (`/mashqlar`): Bo‘sh joy to‘ldirish, variant tanlash, moslashtirish, gap tuzish, xato topish, tarjima, bo‘lak ajratish, to‘g‘ri/noto‘g‘ri.
5. **Darajali testlar** (`/test`): Har modul uchun 10 savol, jami 100+ savol. Tasodifiy aralashtirish, ball hisoblash, xatolar tahlili va Xolida ustoz tavsiyalari.
6. **Sintaktik atamalar lug‘ati** (`/lugat`): Qidiruv, toifalar (kelishik, birikma, bo‘lak, soxta do‘stlar, fe’l boshqaruvi, yuklama) va talaffuz audiosi.
7. **20+ tekshirilgan faktlar** (`/faktlar`): Ilmiy manbalari bilan.
8. **Darsliklar va manbalar** (`/darsliklar`): DTS shablonlari va rasmiy portallar (EduPortal, ZiyoNET).
9. **O‘qituvchi xonasi** (`/ustoz`): Dars uchun mustaqil ish varaqasini avtomatik tuzish va printerda yoki PDF formatida toza chop etish (`window.print`).
10. **Gamifikatsiya** (`/profil`): 5 ta daraja («Yangi o‘quvchi» → «Sintaksis ustasi»), 12 ta nishon, kunlik streak va topshiriq.

---

## 🛠 Texnik tarkib
- **Fremvork**: Vite 8 + React 19 + TypeScript (strict mode)
- **Stillar**: Tailwind CSS v4 (yorug‘ va tungi rejim)
- **Routing**: React Router DOM (barcha sahifalar lazy-loaded)
- **Holat**: Statik SPA, barcha ma’lumotlar xavfsiz `localStorage`da (try/catch bilan)
- **Belgilar**: O‘zbek alifbosining standart harflari: `o‘`, `g‘`, `’`

---

## 🚀 O‘rnatish va mahalliy ishga tushirish

### 1. Bog‘liqliklarni o‘rnatish
```bash
npm install
```

### 2. Dasturni ishga tushirish (dev server)
```bash
npm run dev
```
Sayt `http://localhost:3000` manzilida ochiladi.

### 3. Kodni tekshirish va yig‘ish (Production Build)
```bash
npm run lint
npm run build
```
Chiqish papkasi: `dist/`.

---

## 📦 GitHub’ga yuklash (Push qilish)

```bash
git init
git add .
git commit -m "feat: Xolida ustoz bilan o‘zbek tili platformasi"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

---

## ☁️ Vercel’ga deploy qilish

Loyiha ildizida `vercel.json` fayli mavjud bo‘lib, u SPA marshrutlashini (`/index.html` ga rewrite) ta’minlaydi.

1. [Vercel](https://vercel.com) ga kiring va **«Add New Project»** tugmasini bosing.
2. GitHub repozitoriyangizni tanlang.
3. Sozlamalar:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Deploy** tugmasini bosing.

---

## 👩‍🏫 O‘qituvchi uchun eslatma
`/src/data/resources.ts` faylidagi darsliklar ro‘yxati talabga binoan shablon sifatida qoldirilgan. Maktabingizda tasdiqlangan amaldagi darslik mualliflari, yili va nashriyotini ushbu faylda to‘ldirishingiz mumkin.
