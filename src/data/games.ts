export interface WordOrderGameData {
  id: string;
  difficulty: 'easy' | 'medium' | 'hard';
  russianTarget: string;
  wordsShuffled: string[];
  correctSequence: string[];
  explanationUz: string;
  explanationRu: string;
}

export interface DetectiveGameData {
  id: string;
  difficulty: 'easy' | 'medium' | 'hard';
  sentence: string;
  words: {
    text: string;
    targetRole: 'ega' | 'kesim' | 'toldiruvchi' | 'aniqlovchi' | 'hol';
  }[];
  explanationUz: string;
  explanationRu: string;
}

export interface CaseRouletteData {
  id: string;
  difficulty: 'easy' | 'medium' | 'hard';
  caseNameUz: string;
  caseNameRu: string;
  questionTextUz: string;
  questionTextRu: string;
  baseWord: string;
  options: string[];
  correctAnswer: string;
  explanationUz: string;
  explanationRu: string;
}

export interface MemoryPairData {
  id: string;
  difficulty: 'easy' | 'medium' | 'hard';
  pairs: {
    uz: string;
    ru: string;
  }[];
}

export interface ErrorFixData {
  id: string;
  difficulty: 'easy' | 'medium' | 'hard';
  wrongSentence: string;
  options: string[];
  correctSentence: string;
  mistakeTypeUz: string;
  mistakeTypeRu: string;
  explanationUz: string;
  explanationRu: string;
}

export interface SpeedBridgeData {
  id: string;
  difficulty: 'easy' | 'medium' | 'hard';
  russianSentence: string;
  scrambledWords: string[];
  correctUzbekSentence: string;
  timeLimitSec: number;
  explanationUz: string;
  explanationRu: string;
}

export const GAMES_CONTENT = {
  // 1. Gap konstruktori (SOV)
  wordOrder: [
    {
      id: 'wo_1',
      difficulty: 'easy',
      russianTarget: 'Ребёнок читает книгу.',
      wordsShuffled: ['o‘qiydi.', 'Bola', 'kitobni'],
      correctSequence: ['Bola', 'kitobni', 'o‘qiydi.'],
      explanationUz: 'O‘zbek tilida kesim («o‘qiydi») har doim oxirida bo‘ladi: Bola (E) + kitobni (T) + o‘qiydi (K).',
      explanationRu: 'В узбекском сказуемое всегда в конце (SOV): Bola kitobni o‘qiydi.',
    },
    {
      id: 'wo_2',
      difficulty: 'easy',
      russianTarget: 'Мама печёт горячий хлеб.',
      wordsShuffled: ['yopdi.', 'Onam', 'issiq', 'non'],
      correctSequence: ['Onam', 'issiq', 'non', 'yopdi.'],
      explanationUz: 'Issiq non (tobe so‘z oldinda), yopdi (kesim oxirida).',
      explanationRu: 'Onam issiq non yopdi (сказуемое в конце).',
    },
    {
      id: 'wo_3',
      difficulty: 'medium',
      russianTarget: 'Ученики вчера пошли в музей.',
      wordsShuffled: ['bordilar.', 'kecha', 'O‘quvchilar', 'muzeyga'],
      correctSequence: ['O‘quvchilar', 'kecha', 'muzeyga', 'bordilar.'],
      explanationUz: 'Ega (O‘quvchilar) + hol (kecha) + to‘ldiruvchi (muzeyga) + kesim (bordilar).',
      explanationRu: 'Порядок SOV: O‘quvchilar kecha muzeyga bordilar.',
    },
    {
      id: 'wo_4',
      difficulty: 'medium',
      russianTarget: 'Анвар написал своему другу письмо.',
      wordsShuffled: ['yozdi.', 'xat', 'do‘stiga', 'Anvar'],
      correctSequence: ['Anvar', 'do‘stiga', 'xat', 'yozdi.'],
      explanationUz: 'Anvar do‘stiga xat yozdi: kesim («yozdi») eng oxirida.',
      explanationRu: 'Сказуемое «yozdi» замыкает предложение.',
    },
    {
      id: 'wo_5',
      difficulty: 'hard',
      russianTarget: 'Если завтра будет хорошая погода, мы пойдём на прогулку.',
      wordsShuffled: ['sayrga', 'bo‘lsa,', 'yaxshi', 'chiqamiz.', 'Ertaga', 'havo', 'biz'],
      correctSequence: ['Ertaga', 'havo', 'yaxshi', 'bo‘lsa,', 'biz', 'sayrga', 'chiqamiz.'],
      explanationUz: 'Shart ergash gapda «-sa»li fe’l birinchi qism oxirida, asosiy kesim esa gap oxirida keladi.',
      explanationRu: 'Сложное предложение с условием на -sa и сказуемым в конце.',
    },
  ] as WordOrderGameData[],

  // 2. Bo‘lak detektivi
  detective: [
    {
      id: 'det_1',
      difficulty: 'easy',
      sentence: 'Ali yangi kitobni o‘qidi.',
      words: [
        { text: 'Ali', targetRole: 'ega' },
        { text: 'yangi', targetRole: 'aniqlovchi' },
        { text: 'kitobni', targetRole: 'toldiruvchi' },
        { text: 'o‘qidi.', targetRole: 'kesim' },
      ],
      explanationUz: 'Ali (ega — kim?), yangi (aniqlovchi — qanday?), kitobni (to‘ldiruvchi — nimani?), o‘qidi (kesim — nima qildi?).',
      explanationRu: 'Ali (подлежащее), yangi (определение), kitobni (дополнение), o‘qidi (сказуемое).',
    },
    {
      id: 'det_2',
      difficulty: 'medium',
      sentence: 'Kechqurun mehmonga issiq choy berdilar.',
      words: [
        { text: 'Kechqurun', targetRole: 'hol' },
        { text: 'mehmonga', targetRole: 'toldiruvchi' },
        { text: 'issiq', targetRole: 'aniqlovchi' },
        { text: 'choy', targetRole: 'toldiruvchi' },
        { text: 'berdilar.', targetRole: 'kesim' },
      ],
      explanationUz: 'Kechqurun (payt holi), mehmonga (vositali to‘ldiruvchi), issiq (aniqlovchi), choy (to‘ldiruvchi), berdilar (kesim).',
      explanationRu: 'Kechqurun (обстоятельство), mehmonga (дополнение), issiq (определение), choy (дополнение), berdilar (сказуемое).',
    },
    {
      id: 'det_3',
      difficulty: 'hard',
      sentence: 'Mohir usta Registon maydonida qadimiy naqshlarni chizdi.',
      words: [
        { text: 'Mohir', targetRole: 'aniqlovchi' },
        { text: 'usta', targetRole: 'ega' },
        { text: 'Registon', targetRole: 'aniqlovchi' },
        { text: 'maydonida', targetRole: 'hol' },
        { text: 'qadimiy', targetRole: 'aniqlovchi' },
        { text: 'naqshlarni', targetRole: 'toldiruvchi' },
        { text: 'chizdi.', targetRole: 'kesim' },
      ],
      explanationUz: 'Mohir usta (aniqlovchi + ega), Registon maydonida (o‘rin holi), qadimiy naqshlarni (aniqlovchi + to‘ldiruvchi), chizdi (kesim).',
      explanationRu: 'Полный синтаксический разбор со всеми главными и второстепенными членами.',
    },
  ] as DetectiveGameData[],

  // 3. Kelishik ruleti
  caseRoulette: [
    {
      id: 'cr_1',
      difficulty: 'easy',
      caseNameUz: 'Jo‘nalish kelishigi (Дательный/Направительный)',
      caseNameRu: 'Направительный падеж (-ga / -ka / -qa)',
      questionTextUz: '«Ali maktab... shoshildi» (Али поспешил в школу). Qaysi qo‘shimcha kerak?',
      questionTextRu: '«Ali maktab... shoshildi» (Али поспешил в школу). Какое окончание нужно?',
      baseWord: 'maktab',
      options: ['-ga', '-da', '-dan', '-ni'],
      correctAnswer: '-ga',
      explanationUz: 'Yo‘nalish -ga orqali ko‘rsatiladi: maktabga.',
      explanationRu: 'Направление движения: maktab + ga = в школу.',
    },
    {
      id: 'cr_2',
      difficulty: 'easy',
      caseNameUz: 'Tushum kelishigi (Винительный)',
      caseNameRu: 'Винительный падеж (-ni)',
      questionTextUz: '«Men bu qiziqarli kitob... o‘qidim» (Я прочитал эту книгу).',
      questionTextRu: '«Men bu qiziqarli kitob... o‘qidim» (Я прочитал эту интересную книгу).',
      baseWord: 'kitob',
      options: ['-ni', '-ning', '-ga', '-da'],
      correctAnswer: '-ni',
      explanationUz: 'Vositasiz to‘ldiruvchi tushum kelishigida bo‘ladi: kitobni.',
      explanationRu: 'Прямое дополнение: kitob + ni = книгу.',
    },
    {
      id: 'cr_3',
      difficulty: 'medium',
      caseNameUz: 'Chiqish kelishigi (Исходный: «из, от, с»)',
      caseNameRu: 'Исходный падеж (-dan)',
      questionTextUz: '«Poyezd Samarqand... yetib keldi» (Поезд прибыл из Самарканда).',
      questionTextRu: '«Poyezd Samarqand... yetib keldi» (Поезд прибыл из Самарканда).',
      baseWord: 'Samarqand',
      options: ['-dan', '-da', '-ga', '-ni'],
      correctAnswer: '-dan',
      explanationUz: 'Harakatning chiqish nuqtasi chiqish kelishigi (-dan) bilan ifodalanadi: Samarqanddan.',
      explanationRu: 'Исходный пункт движения оформляется суффиксом -dan: Samarqanddan (из Самарканда).',
    },
    {
      id: 'cr_4',
      difficulty: 'hard',
      caseNameUz: 'Qaratqich kelishigi (Родительный: -ning)',
      caseNameRu: 'Родительный падеж (-ning)',
      questionTextUz: '«Bu maktab... direktori juda talabchan» (Директор этой школы очень требовательный).',
      questionTextRu: '«Bu maktab... direktori juda talabchan» (Директор этой школы очень требовательный).',
      baseWord: 'maktab',
      options: ['-ning', '-ni', '-ga', '-da'],
      correctAnswer: '-ning',
      explanationUz: 'Qaratqich ma’nosi -ning qo‘shimchasi bilan yasaladi: maktabning direktori.',
      explanationRu: 'Принадлежность оформляется окончанием -ning: maktabning direktori.',
    },
  ] as CaseRouletteData[],

  // 4. Juftlik topish (Memory Cards)
  memory: [
    {
      id: 'mem_easy',
      difficulty: 'easy',
      pairs: [
        { uz: 'yangi kitob', ru: 'новая книга' },
        { uz: 'maktabga bormoq', ru: 'идти в школу' },
        { uz: 'issiq non', ru: 'горячий хлеб' },
        { uz: 'kitobni o‘qimoq', ru: 'читать книгу' },
      ],
    },
    {
      id: 'mem_medium',
      difficulty: 'medium',
      pairs: [
        { uz: 'Toshkent shahri', ru: 'город Ташкент' },
        { uz: 'do‘stim bilan gaplashmoq', ru: 'разговаривать с другом' },
        { uz: 'Men talabaman', ru: 'Я студент' },
        { uz: 'Ona uyda', ru: 'Мама дома' },
        { uz: 'yangi kitoblar', ru: 'новые книги' },
        { uz: 'chiroyli qizlar', ru: 'красивые девушки' },
      ],
    },
    {
      id: 'mem_hard',
      difficulty: 'hard',
      pairs: [
        { uz: 'kitob o‘qigan bola', ru: 'ребёнок, читавший книгу' },
        { uz: 'havo yaxshi bo‘lsa', ru: 'если погода хорошая' },
        { uz: 'maktabning bog‘i', ru: 'сад школы' },
        { uz: 'Sen keldingmi?', ru: 'Ты пришёл?' },
        { uz: 'kitoblarimizdan', ru: 'из наших книг' },
        { uz: 'U o‘qidi', ru: 'Он/Она читал(а)' },
      ],
    },
  ] as MemoryPairData[],

  // 5. Xato detektivi (Find and fix typical errors)
  errorFix: [
    {
      id: 'ef_1',
      difficulty: 'easy',
      wrongSentence: 'Men o‘qidim yangi kitobni.',
      options: [
        'Men o‘qidim kitobni yangi.',
        'Men yangi kitobni o‘qidim.',
        'Kitobni men yangi o‘qidim.',
      ],
      correctSentence: 'Men yangi kitobni o‘qidim.',
      mistakeTypeUz: 'So‘z tartibi xatosi (kesim oxirida bo‘lishi shart)',
      mistakeTypeRu: 'Порядок слов (сказуемое в конце)',
      explanationUz: 'O‘zbek tilida kesim («o‘qidim») gap oxirida turishi shart (SOV qoidasi).',
      explanationRu: 'В узбекском языке сказуемое строго завершает предложение.',
    },
    {
      id: 'ef_2',
      difficulty: 'easy',
      wrongSentence: 'Bizlar keldik Toshkent shahar.',
      options: [
        'Biz Toshkent shaharga keldik.',
        'Biz Toshkent shahriga keldik.',
        'Bizlar Toshkent shahar keldik.',
      ],
      correctSentence: 'Biz Toshkent shahriga keldik.',
      mistakeTypeUz: 'Izofada -i egalik qo‘shimchasining tushib qolishi',
      mistakeTypeRu: 'Пропуск аффикса принадлежности в изафете',
      explanationUz: 'Shahar nomi bilan birikmada «Toshkent shahri» shaklida -i qo‘shimchasi bo‘lishi shart.',
      explanationRu: 'В названиях городов обязателен аффикс -i: Toshkent shahri.',
    },
    {
      id: 'ef_3',
      difficulty: 'medium',
      wrongSentence: 'Bog‘da chiroylilar gullar ochildi.',
      options: [
        'Bog‘da chiroyli gullar ochildi.',
        'Bog‘da gullarlar chiroyli ochildi.',
        'Bog‘da chiroylilari gullar ochildi.',
      ],
      correctSentence: 'Bog‘da chiroyli gullar ochildi.',
      mistakeTypeUz: 'Sifatga ko‘plik qo‘shimchasini asossiz qo‘shish',
      mistakeTypeRu: 'Лишнее множественное число у прилагательного',
      explanationUz: 'O‘zbek tilida sifatlar otlar oldida ko‘plikda o‘zgarmaydi («chiroyli gullar»).',
      explanationRu: 'Прилагательные в узбекском не принимают окончание -lar перед существительными.',
    },
    {
      id: 'ef_4',
      difficulty: 'hard',
      wrongSentence: 'Bola, qaysi kitob o‘qidi, darsga tayyor.',
      options: [
        'Bola, kim kitob o‘qidi, darsga tayyor.',
        'Kitob o‘qigan bola darsga tayyor.',
        'Kitob o‘qidi bola, tayyor darsga.',
      ],
      correctSentence: 'Kitob o‘qigan bola darsga tayyor.',
      mistakeTypeUz: 'Ruscha «который»ni noto‘g‘ri so‘zma-so‘z tarjima qilish',
      mistakeTypeRu: 'Буквальная калька союза «который» вместо причастия',
      explanationUz: 'O‘zbek adabiy tilida ruscha «который» o‘rniga sifatdosh qurilmasi (-gan) qo‘llanadi: «Kitob o‘qigan bola».',
      explanationRu: 'Придаточное предложение со словом «который» заменяется причастным оборотом на -gan.',
    },
  ] as ErrorFixData[],

  // 6. Tarjima ko‘prigi (Speed timed bridge)
  speedBridge: [
    {
      id: 'sb_1',
      difficulty: 'easy',
      russianSentence: 'Я ученик.',
      scrambledWords: ['o‘quvchiman.', 'Men'],
      correctUzbekSentence: 'Men o‘quvchiman.',
      timeLimitSec: 25,
      explanationUz: 'Ot-kesimda 1-shaxs qo‘shimchasi: Men o‘quvchiman.',
      explanationRu: 'Именное сказуемое с личным аффиксом -man: Men o‘quvchiman.',
    },
    {
      id: 'sb_2',
      difficulty: 'medium',
      russianSentence: 'Ученик пишет упражнение в тетрадь.',
      scrambledWords: ['yozmoqda.', 'mashqni', 'daftarga', 'O‘quvchi'],
      correctUzbekSentence: 'O‘quvchi daftarga mashqni yozmoqda.',
      timeLimitSec: 30,
      explanationUz: 'Ega (O‘quvchi) + o‘rin (daftarga) + to‘ldiruvchi (mashqni) + kesim (yozmoqda).',
      explanationRu: 'Правильный синтаксический порядок SOV.',
    },
    {
      id: 'sb_3',
      difficulty: 'hard',
      russianSentence: 'Если завтра будет хорошая погода, мы поедем в Самарканд.',
      scrambledWords: ['boramiz.', 'Ertaga', 'Samarqandga', 'bo‘lsa,', 'biz', 'yaxshi', 'havo'],
      correctUzbekSentence: 'Ertaga havo yaxshi bo‘lsa, biz Samarqandga boramiz.',
      timeLimitSec: 35,
      explanationUz: 'Shart mayli (-sa) va kesim oxirida: Samarqandga boramiz.',
      explanationRu: 'Сложное предложение с придаточным условия на -sa.',
    },
  ] as SpeedBridgeData[],
};
