import { LessonModule } from '../types';

export const LESSONS_DATA: LessonModule[] = [
  {
    id: 1,
    slug: 'sintaksis-asoslari',
    titleUz: '1-dars: Sintaksis nima? So‘z, birikma va gap',
    titleRu: 'Урок 1: Что такое синтаксис? Слово, сочетание и предложение',
    subtitleUz: 'Nutqimizning g‘ishtchalari qanday qilib butun imoratga aylanadi?',
    subtitleRu: 'Как кирпичики языка складываются в осмысленную связную речь?',
    grade: '5–6-sinf',
    estimatedMinutes: 8,
    goals: [
      {
        uz: 'Sintaksis so‘z birikmasi va gapni o‘rganishini tushunish',
        ru: 'Понять, что синтаксис изучает словосочетания и предложения',
      },
      {
        uz: 'So‘z, so‘z birikmasi va gap o‘rtasidagi asosiy farqlarni ajrata olish',
        ru: 'Научиться отличать отдельное слово от словосочетания и предложения',
      },
    ],
    lectureUz:
      'Sintaksis — grammatikaning eng qiziqarli bo‘limi. U so‘zlarni bir-biriga bog‘lab, fikr ifodalash qoidalarini o‘rgatadi. So‘z shunchaki nom bildiradi (masalan, «kitob»). So‘z birikmasi esa tushunchani aniqlashtiradi («qiziqarli kitob»). Gap esa tugallangan fikrni anglatadi va intonatsiya bilan aytiladi («Men qiziqarli kitob o‘qidim»). O‘zbek tilida gap qurish rus tilidan tartibi va qo‘shimchalari bilan farq qiladi.',
    lectureRu:
      'Синтаксис — это раздел грамматики, изучающий правила соединения слов в словосочетания и предложения для выражения мыслей. Отдельное слово лишь называет предмет («kitob» — книга). Словосочетание уточняет предмет («qiziqarli kitob» — интересная книга). А предложение выражает законченную мысль («Men qiziqarli kitob o‘qidim» — Я прочитал интересную книгу). Главное отличие узбекского синтаксиса — строгий порядок слов и агглютинативные окончания.',
    comparisonTable: [
      {
        uzbek: 'kitob (so‘z)',
        russian: 'книга (слово)',
        noteUz: 'Faqat predmet nomi',
        noteRu: 'Просто называет предмет',
      },
      {
        uzbek: 'yangi kitob (so‘z birikmasi)',
        russian: 'новая книга (словосочетание)',
        noteUz: 'Predmet belgisini aniqlaydi, tugallangan fikr yo‘q',
        noteRu: 'Уточняет признак, нет законченной мысли',
      },
      {
        uzbek: 'Men yangi kitob o‘qidim. (gap)',
        russian: 'Я прочитал новую книгу. (предложение)',
        noteUz: 'Tugallangan fikr, ega va kesim mavjud',
        noteRu: 'Законченная мысль с грамматической основой',
      },
    ],
    keyExamples: [
      {
        uz: 'O‘quvchi qiziqarli kitobni o‘qidi.',
        ru: 'Ученик прочитал интересную книгу.',
        tokensUz: [
          { text: 'O‘quvchi', part: 'ega', explanationUz: 'Ega: kim? o‘quvchi' },
          { text: 'qiziqarli', part: 'aniqlovchi', explanationUz: 'Aniqlovchi: qanday kitob?' },
          { text: 'kitobni', part: 'toldiruvchi', explanationUz: 'Vositasiz to‘ldiruvchi: nimani?' },
          { text: 'o‘qidi.', part: 'kesim', explanationUz: 'Kesim: nima qildi?' },
        ],
        tokensRu: [
          { text: 'Ученик', part: 'ega', explanationRu: 'Подлежащее: кто?' },
          { text: 'прочитал', part: 'kesim', explanationRu: 'Сказуемое: что сделал?' },
          { text: 'интересную', part: 'aniqlovchi', explanationRu: 'Определение: какую?' },
          { text: 'книгу.', part: 'toldiruvchi', explanationRu: 'Дополнение: что?' },
        ],
        highlightNoteUz: 'E’tibor bering: o‘zbek tilida kesim («o‘qidi») gapning eng oxirida turadi!',
        highlightNoteRu: 'Обратите внимание: в узбекском сказуемое («o‘qidi») всегда стоит в конце!',
      },
    ],
    didYouKnowUz:
      '«Sintaksis» so‘zi qadimgi yunoncha «syntaxis» so‘zidan olingan bo‘lib, «tuzish», «tartibga solish» degan ma’noni bildiradi.',
    didYouKnowRu:
      'Слово «синтаксис» происходит от древнегреческого «syntaxis», что означает «составление», «построение» или «порядок».',
    miniPractice: [
      {
        id: 'mp1_1',
        questionUz: 'Qaysi qatorda so‘z birikmasi berilgan?',
        questionRu: 'В какой строке приведено словосочетание?',
        options: [
          { textUz: 'daftar', textRu: 'тетрадь', isCorrect: false },
          { textUz: 'katta daftar', textRu: 'большая тетрадь', isCorrect: true },
          { textUz: 'Daftar partada yotibdi.', textRu: 'Тетрадь лежит на парте.', isCorrect: false },
        ],
        explanationUz: '«Katta daftar» — so‘z birikmasi, chunki unda hokim va tobe so‘z mavjud, ammo tugallangan fikr (kesim) yo‘q.',
        explanationRu: '«Katta daftar» — словосочетание: есть зависимое и главное слово, но нет законченной мысли и сказуемого.',
      },
    ],
    summaryUz: [
      'Sintaksis so‘z birikmasi va gap tuzilishini o‘rganadi.',
      'So‘z nomlaydi, birikma aniqlashtiradi, gap fikr bildiradi.',
      'O‘zbek tilida kesim odatda eng oxirida keladi.',
    ],
    summaryRu: [
      'Синтаксис изучает правила построения словосочетаний и предложений.',
      'Слово называет, словосочетание уточняет, предложение выражает мысль.',
      'В узбекском языке сказуемое всегда стремится к концу предложения.',
    ],
    culturalTopic: {
      imageKey: 'non',
      titleUz: 'O‘zbek tandir noni',
      titleRu: 'Узбекская лепёшка из тандыра',
      captionUz: '«Issiq non» — so‘z birikmasi. «Ona issiq non yopdi» — to‘liq gap.',
      captionRu: '«Issiq non» (горячая лепёшка) — словосочетание. «Ona issiq non yopdi» — законченное предложение.',
    },
  },

  {
    id: 2,
    slug: 'soz-birikmasi-hokim-va-tobe',
    titleUz: '2-dars: So‘z birikmasi: hokim va tobe so‘z',
    titleRu: 'Урок 2: Словосочетание: главное и зависимое слово',
    subtitleUz: 'Kim kimga bo‘ysunadi? O‘zbek tilida tobe so‘z doim oldinda!',
    subtitleRu: 'Кто кому подчиняется? В узбекском зависимое слово ВСЕГДА впереди!',
    grade: '5–6-sinf',
    estimatedMinutes: 9,
    goals: [
      {
        uz: 'Hokim (asosiy) va tobe (ergashuvchi) so‘zlarni to‘g‘ri topish',
        ru: 'Научиться безошибочно находить главное и зависимое слово',
      },
      {
        uz: 'O‘zbek tilida tobe so‘z doimo hokim so‘zdan oldin kelishini yodda saqlash',
        ru: 'Запомнить строгое правило: в узбекском зависимое слово предшествует главному',
      },
    ],
    lectureUz:
      'So‘z birikmasi kamida ikkita mustaqil so‘zdan tuziladi. Ulardan biri hokim (bosh), ikkinchisi tobe (ergashuvchi) so‘z bo‘ladi. Rus tilida so‘z tartibi erkinroq bo‘lishi mumkin («читать книгу» yoki «книгу читать»). Ammo o‘zbek tilida qat’iy temir qoida bor: TOBE SO‘Z HAR DOIM HOKIM SO‘ZDAN OLDIN KELADI! Masalan: «kitob o‘qimoq» (ruscha: «читать книгу»), «maktabga bormoq» (ruscha: «идти в школу»).',
    lectureRu:
      'Словосочетание состоит минимум из двух самостоятельных слов: главного (hokim so‘z) и зависимого (tobe so‘z). Вопрос всегда задаётся от главного к зависимому. В русском языке зависимое слово часто стоит ПОСЛЕ главного («читать [что?] книгу»). Но в узбекском действует золотое правило: ЗАВИСИМОЕ СЛОВО ВСЕГДА СТОИТ ПЕРЕД ГЛАВНЫМ! «kitobni o‘qimoq» (книгу читать), «maktabga bormoq» (в школу идти).',
    comparisonTable: [
      {
        uzbek: 'kitobni o‘qimoq',
        russian: 'читать книгу',
        noteUz: 'kitobni (tobe) + o‘qimoq (hokim)',
        noteRu: 'В узбекском: «книгу читать» (наоборот)',
      },
      {
        uzbek: 'maktabga bormoq',
        russian: 'идти в школу',
        noteUz: 'maktabga (tobe) + bormoq (hokim)',
        noteRu: 'В узбекском: «в школу идти»',
      },
      {
        uzbek: 'yangi kitob',
        russian: 'новая книга',
        noteUz: 'Sifat bilan birikmada tartib bir xil',
        noteRu: 'С прилагательными порядок совпадает',
      },
    ],
    keyExamples: [
      {
        uz: 'do‘stim bilan gaplashmoq',
        ru: 'разговаривать с другом',
        tokensUz: [
          { text: 'do‘stim bilan', part: 'toldiruvchi', explanationUz: 'Tobe so‘z (kim bilan?)' },
          { text: 'gaplashmoq', part: 'kesim', explanationUz: 'Hokim so‘z (asosiy harakat)' },
        ],
        tokensRu: [
          { text: 'разговаривать', part: 'kesim', explanationRu: 'Главное слово' },
          { text: 'с другом', part: 'toldiruvchi', explanationRu: 'Зависимое слово' },
        ],
        highlightNoteUz: 'Rusiyzabon o‘quvchilar ko‘pincha «gaplashmoq do‘stim bilan» deb xato qiladilar. Bu xato!',
        highlightNoteRu: 'Типичная ошибка: калькировать порядок слов из русского языка. Правильно: «do‘stim bilan gaplashmoq».',
      },
    ],
    didYouKnowUz:
      'O‘zbek tilida so‘z birikmasining bu xususiyati «prepozitsiya» (oldinda turish) qonuni deb ataladi.',
    didYouKnowRu:
      'Принцип расположения зависимого слова перед главным называют контактной препозицией определителя.',
    miniPractice: [
      {
        id: 'mp2_1',
        questionUz: '«Писать письмо» birikmasining o‘zbekcha to‘g‘ri shaklini toping:',
        questionRu: 'Выберите верный перевод словосочетания «писать письмо»:',
        options: [
          { textUz: 'yozmoq xat', textRu: 'yozmoq xat', isCorrect: false },
          { textUz: 'xat yozmoq', textRu: 'xat yozmoq', isCorrect: true },
          { textUz: 'xatda yozmoq', textRu: 'xatda yozmoq', isCorrect: false },
        ],
        explanationUz: 'Tobe so‘z («xat») hokim so‘z («yozmoq»)dan oldin turishi shart: «xat yozmoq».',
        explanationRu: 'Зависимое слово «xat» обязательно стоит перед главным «yozmoq»: «xat yozmoq».',
      },
    ],
    summaryUz: [
      'Hokim so‘zdan tobe so‘zga savol beriladi.',
      'O‘zbek tilida tobe so‘z doim hokim so‘zdan OLDIN keladi.',
      'Ruscha «читать книгу» → o‘zbekcha «kitob o‘qimoq».',
    ],
    summaryRu: [
      'Вопрос задаётся от главного слова к зависимому.',
      'В узбекском языке зависимое слово ВСЕГДА стоит ПЕРЕД главным.',
      'Русское «читать книгу» по-узбекски строго «kitob o‘qimoq».',
    ],
    culturalTopic: {
      imageKey: 'dutor',
      titleUz: 'Milliy cholg‘u: dutor',
      titleRu: 'Узбекский дутар',
      captionUz: '«Dutorni chalmoq» (dutor chalmoq) — tobe so‘z oldinda!',
      captionRu: '«Dutor chalmoq» (играть на дутаре) — зависимое слово перед главным!',
    },
  },

  {
    id: 3,
    slug: 'tobelanish-usullari-va-kelishiklar',
    titleUz: '3-dars: Tobelanish usullari va 6 ta kelishik',
    titleRu: 'Урок 3: Способы подчинения и 6 падежей в сравнении',
    subtitleUz: 'O‘zbek kelishiklari rus падежlari bilan qanday tutashadi?',
    subtitleRu: 'Как 6 падежей узбекского языка соотносятся с падежами русского?',
    grade: '6–7-sinf',
    estimatedMinutes: 10,
    goals: [
      {
        uz: 'Moslashuv, boshqaruv va bitishuvni farqlash',
        ru: 'Различать согласование, управление и примыкание',
      },
      {
        uz: '6 ta kelishik qo‘shimchasini ruscha predloglar va rodlarsiz qo‘llash',
        ru: 'Усвоить 6 падежей узбекского языка без путаницы с родами и предлогами',
      },
    ],
    lectureUz:
      'O‘zbek tilida so‘zlar uch xil usulda tobelanadi: 1) Moslashuv (qaratqich-qaralmish: mening kitobim); 2) Boshqaruv (kelishik qo‘shimchalari orqali: uyga bormoq); 3) Bitishuv (hech qanday qo‘shimchasiz, faqat ma’no va o‘rin bilan: yangi kitob). O‘zbek tilida 6 ta kelishik bor. Eng muhim qulaylik: o‘zbek tilida jins (rod) yo‘q! Qo‘shimchalar erkak, ayol yoki jonsiz narsalar uchun mutlaqo bir xil qo‘shiladi.',
    lectureRu:
      'Слова связываются 3 способами: 1) Согласование (Moslashuv: mening kitobim — моя книга); 2) Управление (Boshqaruv: с помощью падежей — uyga bormoq); 3) Примыкание (Bitishuv: без окончаний, по смыслу — yangi kitob). В узбекском 6 падежей. И главное облегчение для ученика: В УЗБЕКСКОМ ЯЗЫКЕ НЕТ РОДА! Одно и то же окончание подходит и мужскому, и женскому, и среднему роду.',
    comparisonTable: [
      {
        uzbek: 'Bosh kelishik (kim? nima?) — qo‘shimchasiz',
        russian: 'Именительный (кто? что?)',
        noteUz: 'maktab, o‘quvchi',
        noteRu: 'школа, ученик',
      },
      {
        uzbek: 'Qaratqich kelishigi (-ning) (kimning? nimaning?)',
        russian: 'Родительный (кого? чего? чей?)',
        noteUz: 'maktabning bog‘i',
        noteRu: 'сад школы / школьный сад',
      },
      {
        uzbek: 'Tushum kelishigi (-ni) (kimni? nimani?)',
        russian: 'Винительный (кого? что?)',
        noteUz: 'kitobni o‘qimoq',
        noteRu: 'читать (что?) книгу',
      },
      {
        uzbek: 'Jo‘nalish kelishigi (-ga/-ka/-qa) (kimga? nimaga? qayerga?)',
        russian: 'Дательный / направление («в, к, на»)',
        noteUz: 'maktabga, bozorga',
        noteRu: 'в школу, на базар',
      },
      {
        uzbek: 'O‘rin-payt kelishigi (-da) (kimda? nimada? qayerda?)',
        russian: 'Предложный («в, на, у»)',
        noteUz: 'uyda, darsda',
        noteRu: 'дома, на уроке',
      },
      {
        uzbek: 'Chiqish kelishigi (-dan) (kimdan? nimadan? qayerdan?)',
        russian: 'Родительный с предлогами «из, от, с»',
        noteUz: 'Toshkentdan, do‘stimdan',
        noteRu: 'из Ташкента, от друга',
      },
    ],
    keyExamples: [
      {
        uz: 'Ali do‘stidan qiziqarli kitobni oldi.',
        ru: 'Али взял у друга интересную книгу.',
        tokensUz: [
          { text: 'Ali', part: 'ega', explanationUz: 'Bosh kelishik (kim?)' },
          { text: 'do‘stidan', part: 'toldiruvchi', explanationUz: 'Chiqish kelishigi (-dan: kimdan?)' },
          { text: 'qiziqarli', part: 'aniqlovchi', explanationUz: 'Bitishuv (qanday?)' },
          { text: 'kitobni', part: 'toldiruvchi', explanationUz: 'Tushum kelishigi (-ni: nimani?)' },
          { text: 'oldi.', part: 'kesim', explanationUz: 'Kesim (nima qildi?)' },
        ],
        tokensRu: [
          { text: 'Али', part: 'ega', explanationRu: 'Именительный падеж' },
          { text: 'взял', part: 'kesim', explanationRu: 'Сказуемое' },
          { text: 'у друга', part: 'toldiruvchi', explanationRu: 'Родительный с предлогом' },
          { text: 'интересную', part: 'aniqlovchi', explanationRu: 'Прилагательное' },
          { text: 'книгу.', part: 'toldiruvchi', explanationRu: 'Винительный падеж' },
        ],
        highlightNoteUz: 'Rus tilidagi predloglar («у», «из», «в») o‘rniga o‘zbek tilida orqadan qo‘shiluvchi qo‘shimchalar keladi.',
        highlightNoteRu: 'Вместо русских предлогов («у друга», «в школу») в узбекском используются суффиксы («do‘stidan», «maktabga»).',
      },
    ],
    didYouKnowUz:
      'O‘zbek tili agglyutinativ (yopishtiruvchi) til bo‘lgani uchun bitta so‘zga bir nechta qo‘shimcha ketma-ket ulanadi: kitob + lar + imiz + dan (из наших книг)!',
    didYouKnowRu:
      'Узбекский — агглютинативный язык. Окончания нанизываются как бусины: kitob + lar (множ.) + imiz (наши) + dan (из) = «из наших книг»!',
    miniPractice: [
      {
        id: 'mp3_1',
        questionUz: '«Идти в школу» birikmasida qaysi kelishik qo‘shimchasi ishlatiladi?',
        questionRu: 'Какой падеж используется в словосочетании «идти в школу»?',
        options: [
          { textUz: 'maktabda bormoq (-da)', textRu: 'maktabda bormoq (-da)', isCorrect: false },
          { textUz: 'maktabga bormoq (-ga)', textRu: 'maktabga bormoq (-ga)', isCorrect: true },
          { textUz: 'maktabdan bormoq (-dan)', textRu: 'maktabdan bormoq (-dan)', isCorrect: false },
        ],
        explanationUz: 'Harakat yo‘nalishi jo‘nalish kelishigi (-ga) bilan ko‘rsatiladi: maktabga bormoq.',
        explanationRu: 'Направление движения выражается дательно-направительным падежом (-ga): maktabga bormoq.',
      },
    ],
    summaryUz: [
      'O‘zbek tilida 6 ta kelishik bor: bosh, qaratqich, tushum, jo‘nalish, o‘rin-payt, chiqish.',
      'Predloglar yo‘q, ularning o‘rnini so‘z oxiriga qo‘shiluvchi kelishik qo‘shimchalari bajaradi.',
      'Grammatik rod yo‘q, barcha so‘zlarga qo‘shimcha bir xil qo‘shiladi.',
    ],
    summaryRu: [
      'В узбекском языке 6 падежей: именительный, родительный, винительный, направительный, местно-временной, исходный.',
      'Вместо предлогов работают падежные аффиксы на конце слова.',
      'Грамматического рода нет, окончания универсальны для всех слов.',
    ],
    culturalTopic: {
      imageKey: 'registon',
      titleUz: 'Samarqand: Registon maydoni',
      titleRu: 'Самарканд: Площадь Регистан',
      captionUz: '«Registonga bormoq» (-ga: jo‘nalish), «Registonda uchrashmoq» (-da: o‘rin-payt).',
      captionRu: '«Registonga bormoq» (идти на Регистан), «Registonda uchrashmoq» (встретиться на Регистане).',
    },
  },

  {
    id: 4,
    slug: 'izofa-qaratqich-va-qaralmish',
    titleUz: '4-dars: Izofa: qaratqich va qaralmish birikmasi',
    titleRu: 'Урок 4: Изафет: определение принадлежности',
    subtitleUz: '«Maktabning bog‘i» va «Toshkent shahri» sirlari',
    subtitleRu: 'Секреты сочетаний «maktabning bog‘i» и «Toshkent shahri»',
    grade: '6–7-sinf',
    estimatedMinutes: 9,
    goals: [
      {
        uz: 'Qaratqich (-ning) va qaralmish (-i, -si) bog‘lanishini tushunish',
        ru: 'Понять связь определяющего слова (-ning) и определяемого (-i, -si)',
      },
      {
        uz: 'Aniq va noaniq izofani (Toshkent shahri, oltin soat) farqlash',
        ru: 'Различать точный и относительный изафет (maktabning bog‘i vs Toshkent shahri)',
      },
    ],
    lectureUz:
      'Izofa — narsa-buyumning kimga yoki nimaga qarashli ekanini bildiradi. 1-turdagi izofada: birinchi so‘zga -ning (qaratqich), ikkinchi so‘zga esa egalik qo‘shimchasi (-i / -si) qo‘shiladi: «maktabning bog‘i», «Ali-ning kitob-i». 2-turdagi izofada esa birinchi so‘zda -ning tushib qoladi, lekin ikkinchi so‘zda egalik saqlanadi: «maktab bog‘i», «Toshkent shahri», «o‘zbek tili». Rusiyzabon o‘quvchilar ko‘pincha ikkinchi so‘zdagi -i/-si qo‘shimchasini unutib qo‘yadilar. Bu qoidani eslab qoling!',
    lectureRu:
      'Изафет выражает отношение принадлежности или уточнения. В полном изафете первое слово принимает аффикс -ning (чей?), а второе — аффикс принадлежности -i / -si: «maktabning bog‘i» (сад школы). В относительном изафете первое слово стоит без аффикса, но второе ОБЯЗАТЕЛЬНО сохраняет аффикс -i / -si: «Toshkent shahri» (город Ташкент), «o‘zbek tili» (узбекский язык). Русскоязычные часто ошибочно говорят «Toshkent shahar» — это грубая ошибка!',
    comparisonTable: [
      {
        uzbek: 'maktabning bog‘i',
        russian: 'сад школы (чей сад?)',
        noteUz: 'To‘liq izofa: -ning va -i',
        noteRu: 'Полный изафет с обоими аффиксами',
      },
      {
        uzbek: 'Toshkent shahri',
        russian: 'город Ташкент',
        noteUz: 'shahar emas, shahri!',
        noteRu: 'Обязательно окончание -i на втором слове!',
      },
      {
        uzbek: 'o‘zbek tili darsi',
        russian: 'урок узбекского языка',
        noteUz: 'Zanjirli izofa',
        noteRu: 'Цепочка изафетов',
      },
    ],
    keyExamples: [
      {
        uz: 'Biz Toshkent shahrida yashaymiz.',
        ru: 'Мы живём в городе Ташкенте.',
        tokensUz: [
          { text: 'Biz', part: 'ega', explanationUz: 'Ega (biz)' },
          { text: 'Toshkent', part: 'aniqlovchi', explanationUz: 'Birinchi tobe so‘z' },
          { text: 'shahrida', part: 'hol', explanationUz: 'Qaralmish + o‘rin-payt (-i + -da)' },
          { text: 'yashaymiz.', part: 'kesim', explanationUz: 'Kesim' },
        ],
        tokensRu: [
          { text: 'Мы', part: 'ega', explanationRu: 'Подлежащее' },
          { text: 'живём', part: 'kesim', explanationRu: 'Сказуемое' },
          { text: 'в городе', part: 'hol', explanationRu: 'Обстоятельство' },
          { text: 'Ташкенте.', part: 'aniqlovchi', explanationRu: 'Определение' },
        ],
        highlightNoteUz: '«Toshkent shahar-da» deb bo‘lmaydi. Faqat «Toshkent shahr-i-da» to‘g‘ri!',
        highlightNoteRu: 'Нельзя говорить «Toshkent shaharda». Правильно только с аффиксом -i-: «Toshkent shahrida».',
      },
    ],
    didYouKnowUz:
      'Agar so‘z unli bilan tugasa, egalik qo‘shimchasi «-si» bo‘ladi: «bola-si», «daraxt-i».',
    didYouKnowRu:
      'После гласных добавляется -si (ona -> onasi), а после согласных — -i (kitob -> kitobi).',
    miniPractice: [
      {
        id: 'mp4_1',
        questionUz: '«Учитель узбекского языка» birikmasining to‘g‘ri shaklini tanlang:',
        questionRu: 'Выберите правильную форму сочетания «учитель узбекского языка»:',
        options: [
          { textUz: 'o‘zbek tili o‘qituvchi', textRu: 'o‘zbek tili o‘qituvchi', isCorrect: false },
          { textUz: 'o‘zbek tili o‘qituvchisi', textRu: 'o‘zbek tili o‘qituvchisi', isCorrect: true },
          { textUz: 'o‘zbek tilining o‘qituvchi', textRu: 'o‘zbek tilining o‘qituvchi', isCorrect: false },
        ],
        explanationUz: 'Ikkinchi so‘z unli bilan tugaganligi sababli -si qo‘shiladi: o‘qituvchisi.',
        explanationRu: 'Так как слово «o‘qituvchi» оканчивается на гласную, добавляется -si: o‘qituvchisi.',
      },
    ],
    summaryUz: [
      'Izofada ikkinchi so‘zga albatta egalik qo‘shimchasi (-i/-si) qo‘shiladi.',
      '«Toshkent shahri», «maktab bog‘i», «ona tili» kabi birikmalarda bu qat’iy talabdir.',
      'To‘liq izofada esa -ning va -i/-si birga keladi: «do‘stimning daftari».',
    ],
    summaryRu: [
      'В изафете второе слово обязательно получает аффикс принадлежности (-i/-si).',
      'В названиях и типах («Toshkent shahri», «ona tili») этот аффикс нельзя пропускать.',
      'В полном изафете сочетаются -ning и -i/-si: «do‘stimning daftari».',
    ],
    culturalTopic: {
      imageKey: 'buxoro',
      titleUz: 'Qadimiy Buxoro shahri',
      titleRu: 'Древний город Бухара',
      captionUz: '«Buxoro shahri» (город Бухара) — izofaning klassik namunasi.',
      captionRu: '«Buxoro shahri» — классический пример относительного изафета с окончанием -i.',
    },
  },

  {
    id: 5,
    slug: 'gap-tushunchasi-va-maqsadga-kora-turlari',
    titleUz: '5-dars: Gap tushunchasi va maqsadga ko‘ra turlari',
    titleRu: 'Урок 5: Понятие о предложении и его виды по цели высказывания',
    subtitleUz: 'Darak, so‘roq, buyruq va undov gaplar. -mi yuklamasi',
    subtitleRu: 'Повествовательные, вопросительные, побудительные. Частица -mi',
    grade: '6–7-sinf',
    estimatedMinutes: 8,
    goals: [
      {
        uz: 'Maqsadga ko‘ra 4 xil gap turini intonatsiyasi bilan ajratish',
        ru: 'Различать 4 типа предложений по цели высказывания и интонации',
      },
      {
        uz: '-mi so‘roq yuklamasini so‘zga qo‘shib to‘g‘ri yozish',
        ru: 'Правильно использовать и писать вопросительную частицу -mi',
      },
    ],
    lectureUz:
      'Gap — tugallangan fikr bildiruvchi eng muhim sintaktik birlik. Maqsadga ko‘ra gaplar to‘rt turga bo‘linadi: 1) Darak gap (axborot beradi: «Bugun havo quyoshli.»); 2) So‘roq gap (savol bildiradi: «Sen darsga bordingmi?»); 3) Buyruq gap (iltimos, talab, buyruq: «Kitobni oching!»); 4) Undov gap (kuchli his-tuyg‘u: «Qanday go‘zal shahar!»). Rus tilida so‘roq gaplar ko‘pincha faqat intonatsiya bilan yasaladi («Ты пришёл?»). O‘zbek tilida esa odatda fe’l oxiriga «-mi» yuklamasi qo‘shiladi («Sen keldingmi?»). -mi har doim so‘zga qo‘shib yoziladi!',
    lectureRu:
      'Предложение выражает законченную мысль. По цели высказывания бывает 4 вида: повествовательное (darak), вопросительное (so‘roq), побудительное (buyruq) и восклицательное (undov). В русском языке вопрос часто задаётся только повышением голоса («Ты пойдёшь?»). В узбекском языке для вопроса почти всегда нужна вопросительная частица «-mi» («Borasanmi?»). Обратите внимание: частица «-mi» в узбекском пишется СЛИТНО со словом!',
    comparisonTable: [
      {
        uzbek: 'Men bormayman. (darak)',
        russian: 'Я не пойду. (повествовательное)',
        noteUz: 'Inkor shakli -ma qo‘shimchasi bilan yasaladi',
        noteRu: 'Отрицание выражается аффиксом -ma',
      },
      {
        uzbek: 'Sen keldingmi? (so‘roq)',
        russian: 'Ты пришёл? (вопросительное)',
        noteUz: '-mi qo‘shib yoziladi',
        noteRu: 'Частица -mi пишется слитно!',
      },
      {
        uzbek: 'Darsni yaxshi o‘qing! (buyruq)',
        russian: 'Учите урок хорошо! (побудительное)',
        noteUz: 'Harakatga undash',
        noteRu: 'Призыв к действию',
      },
    ],
    keyExamples: [
      {
        uz: 'Siz bu qiziqarli kitobni o‘qidingizmi?',
        ru: 'Вы прочитали эту интересную книгу?',
        tokensUz: [
          { text: 'Siz', part: 'ega', explanationUz: 'Ega (siz)' },
          { text: 'bu', part: 'aniqlovchi', explanationUz: 'Ko‘rsatish aniqlovchisi' },
          { text: 'qiziqarli', part: 'aniqlovchi', explanationUz: 'Sifatlovchi aniqlovchi' },
          { text: 'kitobni', part: 'toldiruvchi', explanationUz: 'Vositasiz to‘ldiruvchi' },
          { text: 'o‘qidingizmi?', part: 'kesim', explanationUz: 'Kesim + -mi so‘roq yuklamasi' },
        ],
        tokensRu: [
          { text: 'Вы', part: 'ega', explanationRu: 'Подлежащее' },
          { text: 'прочитали', part: 'kesim', explanationRu: 'Сказуемое' },
          { text: 'эту', part: 'aniqlovchi', explanationRu: 'Определение' },
          { text: 'интересную', part: 'aniqlovchi', explanationRu: 'Определение' },
          { text: 'книгу?', part: 'toldiruvchi', explanationRu: 'Дополнение' },
        ],
        highlightNoteUz: '-mi yuklamasi kesimga bevosita qo‘shiladi va urg‘u olmaydi.',
        highlightNoteRu: 'Частица -mi присоединяется прямо к глаголу, на неё не падает ударение.',
      },
    ],
    didYouKnowUz:
      'Rus tilidagi «ли» yuklamasi alohida yoziladi («Читал ли ты?»), lekin o‘zbek tilidagi «-mi» har doim qo‘shib yoziladi («O‘qidingmi?»).',
    didYouKnowRu:
      'В русском языке частица «ли» пишется раздельно («знаешь ли ты»), а узбекская «-mi» — ВСЕГДА слитно («bilasanmi»).',
    miniPractice: [
      {
        id: 'mp5_1',
        questionUz: 'Qaysi javobda -mi yuklamasi to‘g‘ri yozilgan?',
        questionRu: 'В каком варианте частица -mi написана грамматически верно?',
        options: [
          { textUz: 'Dars tamom bo‘ldimi?', textRu: 'Dars tamom bo‘ldimi?', isCorrect: true },
          { textUz: 'Dars tamom bo‘ldi mi?', textRu: 'Dars tamom bo‘ldi mi?', isCorrect: false },
          { textUz: 'Dars tamom bo‘ldi-mi?', textRu: 'Dars tamom bo‘ldi-mi?', isCorrect: false },
        ],
        explanationUz: 'O‘zbek adabiy tilida -mi yuklamasi so‘zga ajratilmasdan, chiziqchasiz, qo‘shib yoziladi.',
        explanationRu: 'В узбекском языке вопросительная частица -mi пишется слитно, без дефиса и без пробела.',
      },
    ],
    summaryUz: [
      'Gap maqsadga ko‘ra: darak, so‘roq, buyruq, undov bo‘ladi.',
      'So‘roq gaplarda -mi yuklamasi muhim rol o‘ynaydi va qo‘shib yoziladi.',
      'Inkor -ma qo‘shimchasi yoki «emas», «yo‘q» so‘zlari bilan ifodalanadi.',
    ],
    summaryRu: [
      'Предложения делятся на повествовательные, вопросительные, побудительные и восклицательные.',
      'Вопросительная частица -mi обязательна и пишется строго слитно.',
      'Отрицание строится через суффикс -ma или слова «emas», «yo‘q».',
    ],
    culturalTopic: {
      imageKey: 'anor',
      titleUz: 'O‘zbek anori — saxovat ramzi',
      titleRu: 'Узбекский гранат',
      captionUz: '«Bu shirin anormi?» — so‘roq gapi.',
      captionRu: '«Bu shirin anormi?» (Это сладкий гранат?) — вопросительное предложение с частицей -mi.',
    },
  },

  {
    id: 6,
    slug: 'bosh-bolaklar-ega-va-kesim',
    titleUz: '6-dars: Bosh bo‘laklar: ega va kesim. Bog‘lama sirlari',
    titleRu: 'Урок 6: Главные члены: подлежащее и сказуемое. Нулевая связка',
    subtitleUz: '«Men talabaman» — nega fe’l yo‘q? Shaxs-son moslashuvi',
    subtitleRu: '«Men talabaman» — почему нет глагола? Согласование в лице и числе',
    grade: '6–8-sinf',
    estimatedMinutes: 10,
    goals: [
      {
        uz: 'Ega va kesim o‘rtasidagi shaxs-son moslashuvini tushunish',
        ru: 'Усвоить согласование подлежащего и сказуемого в лице и числе',
      },
      {
        uz: 'Ot-kesimli gaplarda bog‘lama qo‘shimchalarini (-man, -san, -dir) to‘g‘ri qo‘llash',
        ru: 'Правильно использовать личные аффиксы сказуемости в именных предложениях',
      },
    ],
    lectureUz:
      'Ega va kesim — gapning grammatik markazi (bosh bo‘laklari). Ega kim? yoki nima? so‘rog‘iga javob beradi. Kesim esa ega haqida axborot beradi. O‘zbek tilida kesim fe’ldan ham, otdan ham bo‘lishi mumkin. Masalan: «Men talabaman» (Я студент). Rus tilida ham hozirgi zamonda bog‘lama yo‘q, lekin o‘zbek tilida ot oxiriga shaxs qo‘shimchasi ulanadi: Men talaba-MAN, Sen talaba-SAN, U talaba. Ega va kesim shaxs va sonda bir-biriga moslashadi.',
    lectureRu:
      'Подлежащее (ega) и сказуемое (kesim) образуют грамматическую основу. В узбекском сказуемое бывает глагольным («Ali kitob o‘qidi») и именным («Men o‘quvchiman» — Я ученик). В именном сказуемом к существительному или прилагательному присоединяются личные окончания: Men...-man, Sen...-san, Biz...-miz, Siz...-siz. Рода в узбекском нет, поэтому: «U o‘qidi» — одинаково означает и «Он читал», и «Она читала»!',
    comparisonTable: [
      {
        uzbek: 'Men talabaman.',
        russian: 'Я студент / Я студентка.',
        noteUz: 'Ot-kesimda -man shaxs qo‘shimchasi',
        noteRu: 'Нет различия по роду: и студент, и студентка',
      },
      {
        uzbek: 'Ona uyda.',
        russian: 'Мама дома.',
        noteUz: 'O‘rin bildiruvchi ot-kesim',
        noteRu: 'В обоих языках нулевая связка в наст. времени',
      },
      {
        uzbek: 'U kitob o‘qidi.',
        russian: 'Он читал. / Она читала.',
        noteUz: 'Rod yo‘q: u = он/она',
        noteRu: 'В узбекском форма глагола не меняется по родам!',
      },
    ],
    keyExamples: [
      {
        uz: 'Biz bugun muzeyga bordik.',
        ru: 'Мы сегодня пошли в музей.',
        tokensUz: [
          { text: 'Biz', part: 'ega', explanationUz: 'Ega (1-shaxs ko‘plik)' },
          { text: 'bugun', part: 'hol', explanationUz: 'Payt holi' },
          { text: 'muzeyga', part: 'toldiruvchi', explanationUz: 'Jo‘nalish kelishigi' },
          { text: 'bordik.', part: 'kesim', explanationUz: 'Kesim (-dik: 1-shaxs ko‘plik moslashuvi)' },
        ],
        tokensRu: [
          { text: 'Мы', part: 'ega', explanationRu: 'Подлежащее' },
          { text: 'сегодня', part: 'hol', explanationRu: 'Обстоятельство времени' },
          { text: 'пошли', part: 'kesim', explanationRu: 'Сказуемое' },
          { text: 'в музей.', part: 'toldiruvchi', explanationRu: 'Обстоятельство/дополнение' },
        ],
        highlightNoteUz: 'Ega ko‘plikda («Biz») bo‘lsa, kesim ham ko‘plik qo‘shimchasini oladi («bordik»).',
        highlightNoteRu: 'Подлежащее и сказуемое согласуются в лице и числе: Biz ... bordik.',
      },
    ],
    didYouKnowUz:
      'O‘zbek tilida kesimning o‘zidan shaxs aniq ko‘rinib tursa, egani tushirib qoldirish mumkin: «Talabaman» = «Men talabaman».',
    didYouKnowRu:
      'Благодаря личным окончаниям подлежащее часто можно опускать: фраза «Talabaman» понятна без местоимения «men».',
    miniPractice: [
      {
        id: 'mp6_1',
        questionUz: '«Sen maktabda a’lochi...» jumlasini to‘g‘ri yakunlang:',
        questionRu: 'Вставьте верное окончание сказуемого: «Sen maktabda a’lochi...»',
        options: [
          { textUz: 'a’lochiman (-man)', textRu: 'a’lochiman (-man)', isCorrect: false },
          { textUz: 'a’lochisan (-san)', textRu: 'a’lochisan (-san)', isCorrect: true },
          { textUz: 'a’lochimiz (-miz)', textRu: 'a’lochimiz (-miz)', isCorrect: false },
        ],
        explanationUz: '«Sen» olmoshi 2-shaxs birlik bo‘lgani uchun kesimga «-san» qo‘shimchasi qo‘shiladi: a’lochisan.',
        explanationRu: 'Местоимение «Sen» (ты) требует аффикса 2-го лица единственного числа «-san»: a’lochisan.',
      },
    ],
    summaryUz: [
      'Ega (kim? nima?) va kesim (nima qildi? nima?) — gapning bosh bo‘laklari.',
      'O‘zbek tilida grammatik rod yo‘q (u o‘qidi = он читал / она читала).',
      'Ot-kesimlarda shaxs qo‘shimchalari (-man, -san, -miz, -siz) qo‘llanadi.',
    ],
    summaryRu: [
      'Подлежащее и сказуемое — грамматическая основа предложения.',
      'Отсутствие рода: одна форма для «он» и «она» (U o‘qidi).',
      'Именное сказуемое согласуется с помощью личных аффиксов (-man, -san, -miz, -siz).',
    ],
    culturalTopic: {
      imageKey: 'atlas',
      titleUz: 'O‘zbek xonatlasi',
      titleRu: 'Узбекский хан-атлас',
      captionUz: '«Bu ko‘ylak atlasdan tikilgan.» — ega va kesim moslashuvi.',
      captionRu: '«Bu ko‘ylak atlasdan tikilgan» (Это платье сшито из атласа).',
    },
  },

  {
    id: 7,
    slug: 'ikkinchi-darajali-bolaklar',
    titleUz: '7-dars: Ikkinchi darajali bo‘laklar: to‘ldiruvchi, aniqlovchi, hol',
    titleRu: 'Урок 7: Второстепенные члены: дополнение, определение, обстоятельство',
    subtitleUz: 'Gapni boyituvchi va ma’nosini aniqlashtiruvchi bo‘laklar',
    subtitleRu: 'Члены предложения, делающие нашу речь образной и точной',
    grade: '7–8-sinf',
    estimatedMinutes: 10,
    goals: [
      {
        uz: 'To‘ldiruvchi, aniqlovchi va hol turlarini savollari bilan farqlash',
        ru: 'Безошибочно определять дополнение, определение и обстоятельство по вопросам',
      },
      {
        uz: 'Sifat aniqlovchilarining rod va sonda o‘zgarmaslik qoidasini qo‘llash',
        ru: 'Запомнить неизменяемость узбекских определений по родам и числам',
      },
    ],
    lectureUz:
      'Ikkinchi darajali bo‘laklar bosh bo‘laklarni yoki bir-birini aniqlab keladi: 1) Aniqlovchi — buyum belgisini bildiradi (qanday? qaysi? kimning?). Oltin qoida: o‘zbek tilida sifat aniqlovchilar otning soniga qarab O‘ZGARMAYDI! Masalan: «yangi kitob» — «yangi kitoblar» (ruscha: «новая книга» — «новые книги»). 2) To‘ldiruvchi — vositasiz (-ni qo‘shimchali) va vositali (-ga, -da, -dan, bilan) bo‘ladi. 3) Hol — harakat belgisi, payti, o‘rni, sababi va maqsadini bildiradi.',
    lectureRu:
      'Второстепенные члены поясняют главные: 1) Определение (aniqlovchi: какой? чей?). В узбекском определение НЕ СОГЛАСУЕТСЯ с существительным в числе и падеже: «yangi kitob» (новая книга) -> «yangi kitoblar» (новые книги, слово «yangi» не меняется!). 2) Дополнение (to‘ldiruvchi: кого? что? кому? чем?). Прямое дополнение оформляется аффиксом -ni. 3) Обстоятельство (hol: где? когда? как? почему? зачем?).',
    comparisonTable: [
      {
        uzbek: 'yangi kitob / yangi kitoblar',
        russian: 'новая книга / новые книги',
        noteUz: 'O‘zbek tilida sifat o‘zgarmaydi!',
        noteRu: 'В узбекском определение неизменяемо!',
      },
      {
        uzbek: 'chiroyli qiz / chiroyli qizlar',
        russian: 'красивая девушка / красивые девушки',
        noteUz: 'Ko‘plik qo‘shimchasi faqat otga qo‘shiladi',
        noteRu: 'Окончание -lar принимает только существительное',
      },
      {
        uzbek: 'kecha maktabda do‘stimni ko‘rdim',
        russian: 'вчера в школе я видел друга',
        noteUz: 'kecha (hol), maktabda (hol), do‘stimni (to‘ldiruvchi)',
        noteRu: 'Чёткое разграничение обстоятельств и дополнения',
      },
    ],
    keyExamples: [
      {
        uz: 'Mohir usta chiroyli so‘zani tikdi.',
        ru: 'Искусный мастер сшил красивую сюзане.',
        tokensUz: [
          { text: 'Mohir', part: 'aniqlovchi', explanationUz: 'Aniqlovchi: qanday usta?' },
          { text: 'usta', part: 'ega', explanationUz: 'Ega: kim?' },
          { text: 'chiroyli', part: 'aniqlovchi', explanationUz: 'Aniqlovchi: qanday so‘zani?' },
          { text: 'so‘zani', part: 'toldiruvchi', explanationUz: 'To‘ldiruvchi: nimani?' },
          { text: 'tikdi.', part: 'kesim', explanationUz: 'Kesim: nima qildi?' },
        ],
        tokensRu: [
          { text: 'Искусный', part: 'aniqlovchi', explanationRu: 'Определение' },
          { text: 'мастер', part: 'ega', explanationRu: 'Подлежащее' },
          { text: 'сшил', part: 'kesim', explanationRu: 'Сказуемое' },
          { text: 'красивую', part: 'aniqlovchi', explanationRu: 'Определение' },
          { text: 'сюзане.', part: 'toldiruvchi', explanationRu: 'Дополнение' },
        ],
        highlightNoteUz: 'Sifatlar otlar oldida hech qachon rod yoki kelishik qo‘shimchalarini olmaydi.',
        highlightNoteRu: 'Прилагательные перед существительными абсолютно статичны и неизменяемы.',
      },
    ],
    didYouKnowUz:
      'Hol harakatning 6 xil belgisini ko‘rsatadi: o‘rin holi (qayerda?), payt holi (qachon?), tarz holi (qanday?), sabab holi (nega?), maqsad holi (nima maqsadda?), miqdor-daraja holi (qancha?).',
    didYouKnowRu:
      'Обстоятельства в узбекском делятся на обстоятельства места, времени, образа действия, причины, цели и меры/степени.',
    miniPractice: [
      {
        id: 'mp7_1',
        questionUz: '«Qiziqarli ertaklar» birikmasida «qiziqarli» so‘zi qaysi gap bo‘lagi?',
        questionRu: 'Каким членом предложения является слово «qiziqarli» в сочетании «qiziqarli ertaklar»?',
        options: [
          { textUz: 'Ega', textRu: 'Подлежащее', isCorrect: false },
          { textUz: 'Aniqlovchi', textRu: 'Определение', isCorrect: true },
          { textUz: 'Hol', textRu: 'Обстоятельство', isCorrect: false },
        ],
        explanationUz: 'Qanday? so‘rog‘iga javob bo‘lib, otning belgisini aniqlab kelayotgani uchun — aniqlovchi.',
        explanationRu: 'Отвечает на вопрос «какой?» (qanday?) и определяет признак предмета, значит, это определение (aniqlovchi).',
      },
    ],
    summaryUz: [
      'Aniqlovchi (qanday? kimning?), to‘ldiruvchi (kimni? kimga?), hol (qayerda? qachon?).',
      'O‘zbek tilida sifatlar jins va sonda turlanmaydi («katta uy» — «katta uylar»).',
      'Ikkinchi darajali bo‘laklar fikrni to‘liq va aniq ifodalashga xizmat qiladi.',
    ],
    summaryRu: [
      'Определение (aniqlovchi), дополнение (to‘ldiruvchi), обстоятельство (hol).',
      'Прилагательные в узбекском не согласуются в роде и числе («yangi kitoblar»).',
      'Второстепенные члены распространяют и обогащают грамматическую основу.',
    ],
    culturalTopic: {
      imageKey: 'xiva',
      titleUz: 'Xiva: Ichan qal’a',
      titleRu: 'Хива: Ичан-Кала',
      captionUz: '«Biz qadimiy Xiva shahrida ajoyib obidalarni ko‘rdik.»',
      captionRu: 'Пример предложения со всеми второстепенными членами.',
    },
  },

  {
    id: 8,
    slug: 'soz-tartibi-sov-va-svo',
    titleUz: '8-dars: So‘z tartibi: SOV va SVO qonuniyatlari',
    titleRu: 'Урок 8: Порядок слов: типологии SOV и SVO в сравнении',
    subtitleUz: 'Nega o‘zbek tilida fe’l gap oxirida turadi? Mantiqiy urg‘u',
    subtitleRu: 'Почему в узбекском глагол всегда в конце? Логическое ударение',
    grade: '7–8-sinf',
    estimatedMinutes: 9,
    goals: [
      {
        uz: 'SOV (Ega — To‘ldiruvchi — Kesim) tartibini mukammal o‘zlashtirish',
        ru: 'Освоить базовый порядок слов SOV (Подлежащее — Дополнение — Сказуемое)',
      },
      {
        uz: 'Mantiqiy urg‘u tushgan so‘z kesim oldiga ko‘chishini bilish',
        ru: 'Понять закон логического ударения: самое важное слово ставится прямо перед сказуемым',
      },
    ],
    lectureUz:
      'Dunyo tillarida gap qurilishining ikki katta turi bor: SVO va SOV. Rus tili — SVO tilidir: Subject (подлежащее) + Verb (глагол) + Object (дополнение): «Ребёнок читает книгу». O‘zbek tili esa qat’iy SOV tilidir: Subject (ega) + Object (to‘ldiruvchi) + Verb (kesim): «Bola kitobni o‘qiydi». Kesim (fe’l) har doim gap oxiriga intiladi. Agar siz biron so‘zga alohida mantiqiy urg‘u bermoqchi bo‘lsangiz, uni bevosita KESIMNING OLDIGA qo‘yasiz. Masalan: «Kitobni BOLA o‘qidi» (aynan bola o‘qidi, boshqa emas).',
    lectureRu:
      'В типологии языков русский относится к типу SVO (Subject — Verb — Object: «Ученик читает книгу»). Узбекский язык — типичный представитель порядка SOV (Subject — Object — Verb: «O‘quvchi kitobni o‘qiydi»). Сказуемое замыкает предложение, являясь его смысловым якорем. Ещё один важнейший закон: слово, на которое падает логическое ударение (самая важная новая мысль), ставится НЕПОСРЕДСТВЕННО ПЕРЕД СКАЗУЕМЫМ.',
    comparisonTable: [
      {
        uzbek: 'Bola kitobni o‘qiydi. (SOV)',
        russian: 'Ребёнок читает книгу. (SVO)',
        noteUz: 'O‘zbekcha: Ega + To‘ldiruvchi + Kesim',
        noteRu: 'В узбекском сказуемое строго замыкает предложение',
      },
      {
        uzbek: 'Dadam kecha Samarqanddan keldilar.',
        russian: 'Папа приехал вчера из Самарканда.',
        noteUz: 'Hol va to‘ldiruvchilar kesimdan oldin',
        noteRu: 'Все второстепенные члены стоят перед глаголом',
      },
      {
        uzbek: 'Men Samarqandga POYEZDA bordim.',
        russian: 'Я поехал в Самарканд НА ПОЕЗДЕ.',
        noteUz: 'Mantiqiy urg‘u kesim oldida («poyezdda»)',
        noteRu: 'Логическое ударение перед сказуемым',
      },
    ],
    keyExamples: [
      {
        uz: 'Anvar do‘stiga qiziqarli xat yozdi.',
        ru: 'Анвар написал другу интересное письмо.',
        tokensUz: [
          { text: 'Anvar', part: 'ega', explanationUz: 'Ega (Subject)' },
          { text: 'do‘stiga', part: 'toldiruvchi', explanationUz: 'Vositali to‘ldiruvchi' },
          { text: 'qiziqarli', part: 'aniqlovchi', explanationUz: 'Aniqlovchi' },
          { text: 'xat', part: 'toldiruvchi', explanationUz: 'Vositasiz to‘ldiruvchi (Object)' },
          { text: 'yozdi.', part: 'kesim', explanationUz: 'Kesim (Verb - oxirida!)' },
        ],
        tokensRu: [
          { text: 'Анвар', part: 'ega', explanationRu: 'Подлежащее (Subject)' },
          { text: 'написал', part: 'kesim', explanationRu: 'Сказуемое (Verb - в середине!)' },
          { text: 'другу', part: 'toldiruvchi', explanationRu: 'Дополнение' },
          { text: 'интересное', part: 'aniqlovchi', explanationRu: 'Определение' },
          { text: 'письмо.', part: 'toldiruvchi', explanationRu: 'Дополнение (Object)' },
        ],
        highlightNoteUz: 'Rus tilida fe’l o‘rtada («написал другу»), o‘zbek tilida esa eng oxirida («yozdi») keladi.',
        highlightNoteRu: 'Классическое различие: русский SVO («написал другу письмо») vs узбекский SOV («do‘stiga xat yozdi»).',
      },
    ],
    didYouKnowUz:
      'Turkiy tillar, yapon va koreys tillari ham SOV tartibiga ega, slavyan va roman tillari esa SVO tizimiga kiradi.',
    didYouKnowRu:
      'К типу SOV также относятся японский, корейский и турецкий языки, а к типу SVO — русский, английский и французский.',
    miniPractice: [
      {
        id: 'mp8_1',
        questionUz: '«Я вчера посмотрел фильм» jumlasining to‘g‘ri SOV tartibini toping:',
        questionRu: 'Соберите предложение «Я вчера посмотрел фильм» в правильном порядке SOV:',
        options: [
          { textUz: 'Men ko‘rdim kecha filmni.', textRu: 'Men ko‘rdim kecha filmni.', isCorrect: false },
          { textUz: 'Men kecha filmni ko‘rdim.', textRu: 'Men kecha filmni ko‘rdim.', isCorrect: true },
          { textUz: 'Filmni men ko‘rdim kecha.', textRu: 'Filmni men ko‘rdim kecha.', isCorrect: false },
        ],
        explanationUz: 'O‘zbek tilida kesim («ko‘rdim») oxirida turadi: Men kecha filmni ko‘rdim.',
        explanationRu: 'В узбекском сказуемое «ko‘rdim» должно стоять на последнем месте: Men kecha filmni ko‘rdim.',
      },
    ],
    summaryUz: [
      'Rus tili: SVO (Ega — Kesim — To‘ldiruvchi).',
      'O‘zbek tili: SOV (Ega — To‘ldiruvchi — Kesim).',
      'Mantiqiy urg‘u olgan so‘z kesimning to‘g‘ridan-to‘g‘ri oldiga qo‘yiladi.',
    ],
    summaryRu: [
      'Русский язык — SVO (Подлежащее — Сказуемое — Дополнение).',
      'Узбекский язык — SOV (Подлежащее — Дополнение — Сказуемое).',
      'Слово с логическим ударением всегда занимает позицию перед сказуемым.',
    ],
    culturalTopic: {
      imageKey: 'navroz',
      titleUz: 'Navro‘z bayrami va sumalak',
      titleRu: 'Праздник Навруз и сумаляк',
      captionUz: '«Ayollar Navro‘zda sumalak pishiradilar.» (SOV tartibi).',
      captionRu: '«Ayollar Navro‘zda sumalak pishiradilar» — образец порядка SOV.',
    },
  },

  {
    id: 9,
    slug: 'sodda-va-qoshma-gaplar-konstruksiyalar',
    titleUz: '9-dars: Sodda va qo‘shma gap. Sifatdosh va -sa qurilmalari',
    titleRu: 'Урок 9: Простые и сложные предложения. Причастные обороты и форма на -sa',
    subtitleUz: '«Kitob o‘qigan bola» = «Ребёнок, который читал книгу»',
    subtitleRu: 'Как узбекские обороты заменяют длинные придаточные предложения',
    grade: '8–9-sinf',
    estimatedMinutes: 10,
    goals: [
      {
        uz: 'Bog‘langan va ergashgan qo‘shma gaplarni tushunish',
        ru: 'Понять структуру сложносочинённых и сложноподчинённых предложений',
      },
      {
        uz: 'Ruscha «который» o‘rniga o‘zbek sifatdosh konstruksiyasini (-gan) qo‘llash',
        ru: 'Научиться заменять придаточные со словом «который» узбекскими причастиями на -gan',
      },
    ],
    lectureUz:
      'Qo‘shma gap ikki yoki undan ortiq sodda gapning mazmun va grammatik jihatdan birlashuvidir. O‘zbek tilida shart ergash gaplar ko‘pincha «-sa» shart mayli qo‘shimchasi bilan yasaladi: «Havo yaxshi bo‘lsa, sayrga chiqamiz» (Если погода будет хорошей, мы пойдём гулять). Rus tilida juda ko‘p ishlatiladigan «который» so‘zli gaplar o‘rniga o‘zbek tilida ko‘pincha sifatdosh qurilmalari qo‘llanadi: «Kitob o‘qigan bola» = «Ребёнок, который читал книгу». Bu sintaksisni nihoyatda ixcham va ravon qiladi.',
    lectureRu:
      'Сложные предложения объединяют несколько грамматических основ. В узбекском придаточные условия образуются с помощью аффикса «-sa»: «Havo yaxshi bo‘lsa, sayrga chiqamiz» (Если погода будет хорошей, мы пойдем гулять). Другая яркая особенность: вместо русских придаточных с союзным словом «который» узбекский язык предпочитает компактные причастные обороты на «-gan»: «Kitob o‘qigan bola» вместо громоздкого «Ребёнок, который читал книгу».',
    comparisonTable: [
      {
        uzbek: 'Havo yaxshi bo‘lsa, sayrga chiqamiz.',
        russian: 'Если погода хорошая, мы пойдём гулять.',
        noteUz: 'bo‘lsa (-sa shart qo‘shimchasi)',
        noteRu: 'Аффикс -sa заменяет русский союз «если»',
      },
      {
        uzbek: 'kitob o‘qigan bola',
        russian: 'ребёнок, который читал книгу',
        noteUz: '-gan sifatdosh qurilmasi',
        noteRu: 'Причастный оборот заменяет союз «который»',
      },
      {
        uzbek: 'Bilamanki, sen a’lochi o‘quvchisan.',
        russian: 'Я знаю, что ты отличник.',
        noteUz: '-ki yuklamasi ergash gapni bog‘laydi',
        noteRu: 'Союзная частица -ki присоединяет придаточное',
      },
    ],
    keyExamples: [
      {
        uz: 'Kechagi darsda qatnashgan o‘quvchilar javob berdilar.',
        ru: 'Ученики, которые участвовали во вчерашнем уроке, ответили.',
        tokensUz: [
          { text: 'Kechagi darsda qatnashgan', part: 'aniqlovchi', explanationUz: 'Sifatdosh qurilmasi (qaysi o‘quvchilar?)' },
          { text: 'o‘quvchilar', part: 'ega', explanationUz: 'Ega' },
          { text: 'javob berdilar.', part: 'kesim', explanationUz: 'Kesim' },
        ],
        tokensRu: [
          { text: 'Ученики,', part: 'ega', explanationRu: 'Подлежащее' },
          { text: 'которые участвовали во вчерашнем уроке,', part: 'aniqlovchi', explanationRu: 'Придаточное определительное' },
          { text: 'ответили.', part: 'kesim', explanationRu: 'Сказуемое' },
        ],
        highlightNoteUz: 'O‘zbek tilida butun boshli ergash gap bitta ixcham sifatdosh birikmaga aylanadi.',
        highlightNoteRu: 'Узбекский язык заменяет целое русское придаточное предложение компактным оборотом с аффиксом -gan.',
      },
    ],
    didYouKnowUz:
      '«-sa» qo‘shimchasi orqali nafaqat shart, balki istak ham bildiriladi: «Qaniydi, tezroq yoz kelsa!» (Вот бы скорее пришло лето!).',
    didYouKnowRu:
      'Аффикс «-sa» выражает не только условие («agar»), но и пожелание («Qaniydi, yoz kelsa!» — Хоть бы наступило лето!).',
    miniPractice: [
      {
        id: 'mp9_1',
        questionUz: '«Человек, который пришёл вчера» birikmasining o‘zbekcha eng to‘g‘ri shakli qaysi?',
        questionRu: 'Как наиболее естественно перевести «Человек, который пришёл вчера»?',
        options: [
          { textUz: 'Odam, qaysiki kecha keldi', textRu: 'Odam, qaysiki kecha keldi', isCorrect: false },
          { textUz: 'Kecha kelgan odam', textRu: 'Kecha kelgan odam', isCorrect: true },
          { textUz: 'Kecha keldi odam', textRu: 'Kecha keldi odam', isCorrect: false },
        ],
        explanationUz: 'O‘zbek adabiy tilida ruscha «который» o‘rniga -gan sifatdoshi ishlatiladi: «Kecha kelgan odam».',
        explanationRu: 'В узбекском языке естественная конструкция со словом «который» заменяется причастием на -gan: «Kecha kelgan odam».',
      },
    ],
    summaryUz: [
      'Qo‘shma gaplar bir necha sodda gapdan tashkil topadi.',
      'Shart ergash gaplar ko‘pincha «-sa» qo‘shimchasi bilan yasaladi.',
      'Ruscha «который»li gaplar o‘rniga o‘zbek sifatdoshlari (-gan, -yotgan) afzal ko‘riladi.',
    ],
    summaryRu: [
      'Сложные предложения объединяют несколько основ.',
      'Придаточные условия строятся с помощью аффикса «-sa».',
      'Придаточные со словом «который» заменяются оборотами на «-gan».',
    ],
    culturalTopic: {
      imageKey: 'registon',
      titleUz: 'Me’moriy meros',
      titleRu: 'Архитектурное наследие',
      captionUz: '«Ulug‘bek qurdirgan madrasa» = «Медресе, которое построил Улугбек».',
      captionRu: 'Пример причастного оборота на -gan.',
    },
  },

  {
    id: 10,
    slug: 'takrorlash-va-tipik-xatolar',
    titleUz: '10-dars: Takrorlash: rusiyzabonlarning tipik xatolari va ularni tuzatish',
    titleRu: 'Урок 10: Повторение: типичные ошибки русскоязычных и их исправление',
    subtitleUz: 'Sintaksisni mukammal bilish uchun eng muhim 5 ta qoida',
    subtitleRu: 'Топ-5 золотых правил для безупречной речи на узбекском языке',
    grade: '5–9-sinf',
    estimatedMinutes: 10,
    goals: [
      {
        uz: 'Rusiyzabon o‘quvchilarga xos eng ko‘p uchraydigan sintaktik xatolarni aniqlash',
        ru: 'Выявлять и мгновенно исправлять типичные синтаксические ошибки',
      },
      {
        uz: 'Barcha 9 modulda o‘rganilgan qoidalarni tizimlashtirish',
        ru: 'Систематизировать все изученные правила и закрепить навык грамотного построения речи',
      },
    ],
    lectureUz:
      'Rus sinflari o‘quvchilari o‘zbekcha gap tuzishda ko‘pincha rus tili qoidalarini to‘g‘ridan-to‘g‘ri ko‘chiradilar (kalka qiladilar). Keling, eng mashhur 5 ta xatoni eslab qolamiz: 1) So‘z tartibi xatosi: «Men ko‘rdim kinoni» emas, «Men kinoni ko‘rdim» (SOV). 2) Sifatni ko‘plikda ishlatish: «yangi kitoblar» o‘rniga «yangilar kitoblar» deyish xato! 3) Izofada -i/-si ni tushirib qoldirish: «Toshkent shahar» emas, «Toshkent shahri». 4) Predloglar kalkasi: «v maktab» emas, «maktabga». 5) Grammatik rod izlash: o‘zbek tilida rod yo‘q, barchaga «u» va bir xil qo‘shimcha ishlatiladi!',
    lectureRu:
      'Ученики русских классов часто буквально калькируют русскую грамматику. Вот 5 главных ошибок, о которых нужно забыть навсегда: 1) Порядок слов: не «Men ko‘rdim kinoni», а строго «Men kinoni ko‘rdim» (сказуемое в конце). 2) Избыточное множественное число у прилагательных: нельзя говорить «yangilar kitoblar», правильно «yangi kitoblar». 3) Потеря аффикса в изафете: не «Toshkent shahar», а строго «Toshkent shahri». 4) Попытка вставить предлоги: падежи крепятся сзади («maktabga»). 5) Поиск рода: в узбекском нет мужского и женского рода («U o‘qidi» подходит для всех).',
    comparisonTable: [
      {
        uzbek: 'NOTO‘G‘RI: Men o‘qidim yangi kitobni.',
        russian: 'TO‘G‘RI: Men yangi kitobni o‘qidim.',
        noteUz: 'Kesim oxirida bo‘lishi shart',
        noteRu: 'Сказуемое обязательно на конце',
      },
      {
        uzbek: 'NOTO‘G‘RI: Toshkent shahar',
        russian: 'TO‘G‘RI: Toshkent shahri',
        noteUz: 'Egalik qo‘shimchasi -i majburiy',
        noteRu: 'Аффикс -i обязателен',
      },
      {
        uzbek: 'NOTO‘G‘RI: qizillar gullar',
        russian: 'TO‘G‘RI: qizil gullar',
        noteUz: 'Sifatga -lar qo‘shilmaydi',
        noteRu: 'Прилагательное не принимает -lar',
      },
    ],
    keyExamples: [
      {
        uz: 'Xolida ustoz bizga o‘zbek tilini mehr bilan o‘rgatadi.',
        ru: 'Учитель Холида с любовью учит нас узбекскому языку.',
        tokensUz: [
          { text: 'Xolida ustoz', part: 'ega', explanationUz: 'Ega' },
          { text: 'bizga', part: 'toldiruvchi', explanationUz: 'Vositali to‘ldiruvchi' },
          { text: 'o‘zbek tilini', part: 'toldiruvchi', explanationUz: 'Izofa + tushum kelishigi' },
          { text: 'mehr bilan', part: 'hol', explanationUz: 'Tarz holi' },
          { text: 'o‘rgatadi.', part: 'kesim', explanationUz: 'Kesim (oxirida)' },
        ],
        tokensRu: [
          { text: 'Учитель Холида', part: 'ega', explanationRu: 'Подлежащее' },
          { text: 'с любовью', part: 'hol', explanationRu: 'Обстоятельство' },
          { text: 'учит', part: 'kesim', explanationRu: 'Сказуемое' },
          { text: 'нас', part: 'toldiruvchi', explanationRu: 'Дополнение' },
          { text: 'узбекскому языку.', part: 'toldiruvchi', explanationRu: 'Дополнение' },
        ],
        highlightNoteUz: 'Barcha qoidalar mujassamlashgan go‘zal namunaviy o‘zbekcha gap.',
        highlightNoteRu: 'Образцовое предложение, объединяющее все изученные синтаксические принципы.',
      },
    ],
    didYouKnowUz:
      'O‘zbek tili nutqining ohangi mayin va qat’iy sintaktik mantiqqa asoslangan bo‘lib, qoidalarni o‘rgangach, unda fikrlash juda osonlashadi.',
    didYouKnowRu:
      'Освоив логику SOV и принципы агглютинации, ученик начинает думать напрямую на узбекском языке без подстрочного перевода.',
    miniPractice: [
      {
        id: 'mp10_1',
        questionUz: 'Qaysi jumla mutlaqo to‘g‘ri tuzilgan?',
        questionRu: 'Какое предложение построено абсолютно грамматически верно?',
        options: [
          { textUz: 'Biz keldik Toshkent shahar kecha.', textRu: 'Biz keldik Toshkent shahar kecha.', isCorrect: false },
          { textUz: 'Biz kecha Toshkent shahriga keldik.', textRu: 'Biz kecha Toshkent shahriga keldik.', isCorrect: true },
          { textUz: 'Biz Toshkent shahriga keldik kecha.', textRu: 'Biz Toshkent shahriga keldik kecha.', isCorrect: false },
        ],
        explanationUz: 'Kesim («keldik») gap oxirida, izofada esa -i qo‘shimchasi bor: «Toshkent shahriga keldik».',
        explanationRu: 'Сказуемое «keldik» строго в конце, в изафете есть аффикс -i: «Biz kecha Toshkent shahriga keldik».',
      },
    ],
    summaryUz: [
      'Kesimni har doim gap oxiriga qo‘ying (SOV).',
      'Sifat aniqlovchilariga ko‘plik qo‘shimchasini qo‘shmang («yangi kitoblar»).',
      'Izofa birikmalarida -i/-si egalik qo‘shimchasini unutmang («Toshkent shahri»).',
      'O‘zbek tilida grammatik rod yo‘qligini doim yodda tuting.',
    ],
    summaryRu: [
      'Всегда ставьте сказуемое в конец предложения (SOV).',
      'Не добавляйте множественное число к прилагательным («yangi kitoblar»).',
      'Не забывайте суффикс принадлежности в изафете («Toshkent shahri»).',
      'Помните, что в узбекском языке отсутствует категория грамматического рода.',
    ],
    culturalTopic: {
      imageKey: 'dutor',
      titleUz: 'O‘zbek tili — boy va musiqiy til',
      titleRu: 'Узбекский язык — богатый и мелодичный',
      captionUz: 'Dutor kabi har bir so‘z o‘z pardasi va o‘rniga ega!',
      captionRu: 'Как и в игре на дутаре, в узбекском синтаксисе каждое слово знает своё точное место!',
    },
  },
];
