import { BridgeItem } from '../types';

export const COMPARISONS_DATA: BridgeItem[] = [
  {
    id: 'bridge_sov_1',
    category: 'word_order',
    categoryUz: 'So‘z tartibi (SOV vs SVO)',
    categoryRu: 'Порядок слов (SOV vs SVO)',
    uzbekSentence: {
      words: [
        { id: 'u_1', text: 'Bola', role: 'ega', roleLabelUz: 'Ega (kim?)', roleLabelRu: 'Подлежащее (кто?)' },
        { id: 'u_2', text: 'kitobni', role: 'toldiruvchi', roleLabelUz: 'To‘ldiruvchi (nimani?)', roleLabelRu: 'Дополнение (что?)' },
        { id: 'u_3', text: 'o‘qiydi.', role: 'kesim', roleLabelUz: 'Kesim (nima qilyapti?)', roleLabelRu: 'Сказуемое (что делает?)' },
      ],
    },
    russianSentence: {
      words: [
        { id: 'r_1', text: 'Ребёнок', role: 'ega', roleLabelUz: 'Ega (кто?)', roleLabelRu: 'Подлежащее (кто?)' },
        { id: 'r_2', text: 'читает', role: 'kesim', roleLabelUz: 'Kesim (что делает?)', roleLabelRu: 'Сказуемое (что делает?)' },
        { id: 'r_3', text: 'книгу.', role: 'toldiruvchi', roleLabelUz: 'To‘ldiruvchi (что?)', roleLabelRu: 'Дополнение (что?)' },
      ],
    },
    connections: [
      { uzWordId: 'u_1', ruWordId: 'r_1', relationNameUz: 'Ega — Ega', relationNameRu: 'Подлежащее' },
      { uzWordId: 'u_2', ruWordId: 'r_3', relationNameUz: 'To‘ldiruvchi — To‘ldiruvchi', relationNameRu: 'Дополнение' },
      { uzWordId: 'u_3', ruWordId: 'r_2', relationNameUz: 'Kesim — Kesim', relationNameRu: 'Сказуемое' },
    ],
    ruleTipUz:
      'O‘zbek tilida kesim har doim gap oxiriga intiladi (SOV). Rus tilida esa kesim o‘rtada keladi (SVO).',
    ruleTipRu:
      'В русском сказуемое стоит в центре (SVO: Ребёнок читает книгу), а в узбекском — строго замыкает предложение (SOV: Bola kitobni o‘qiydi).',
    commonErrorUz: 'Xato: «Bola o‘qiydi kitobni». To‘g‘ri: «Bola kitobni o‘qiydi».',
    commonErrorRu: 'Ошибка: «Bola o‘qiydi kitobni». Правильно: «Bola kitobni o‘qiydi».',
  },

  {
    id: 'bridge_obj_prep',
    category: 'case_direction',
    categoryUz: 'Harakat yo‘nalishi va tobe so‘z o‘rni',
    categoryRu: 'Направление движения и позиция зависимого слова',
    uzbekSentence: {
      words: [
        { id: 'u_1', text: 'O‘quvchi', role: 'ega', roleLabelUz: 'Ega', roleLabelRu: 'Подлежащее' },
        { id: 'u_2', text: 'maktabga', role: 'toldiruvchi', roleLabelUz: 'To‘ldiruvchi (jo‘nalish)', roleLabelRu: 'Дополнение/обстоятельство' },
        { id: 'u_3', text: 'boradi.', role: 'kesim', roleLabelUz: 'Kesim (fe’l)', roleLabelRu: 'Сказуемое' },
      ],
    },
    russianSentence: {
      words: [
        { id: 'r_1', text: 'Ученик', role: 'ega', roleLabelUz: 'Ega', roleLabelRu: 'Подлежащее' },
        { id: 'r_2', text: 'идёт', role: 'kesim', roleLabelUz: 'Kesim', roleLabelRu: 'Сказуемое' },
        { id: 'r_3', text: 'в школу.', role: 'toldiruvchi', roleLabelUz: 'To‘ldiruvchi', roleLabelRu: 'Обстоятельство с предлогом' },
      ],
    },
    connections: [
      { uzWordId: 'u_1', ruWordId: 'r_1', relationNameUz: 'Ega', relationNameRu: 'Подлежащее' },
      { uzWordId: 'u_2', ruWordId: 'r_3', relationNameUz: 'Yo‘nalish', relationNameRu: 'Направление' },
      { uzWordId: 'u_3', ruWordId: 'r_2', relationNameUz: 'Fe’l', relationNameRu: 'Глагол' },
    ],
    ruleTipUz: 'Ruscha «в школу» predlogli birikmasi o‘zbek tilida -ga kelishik qo‘shimchasi bilan beriladi: «maktabga».',
    ruleTipRu: 'Русскому предлогу «в» соответствует окончание направительного падежа «-ga»: maktab + ga = в школу.',
    commonErrorUz: 'Xato: «boradi maktabga». To‘g‘ri: «maktabga boradi».',
    commonErrorRu: 'Ошибка: калькировать порядок «идёт в школу» как «boradi maktabga».',
  },

  {
    id: 'bridge_adj_num',
    category: 'adjective_agreement',
    categoryUz: 'Sifatning sonda o‘zgarmasligi',
    categoryRu: 'Неизменяемость прилагательных по числам',
    uzbekSentence: {
      words: [
        { id: 'u_1', text: 'Kutubxonada', role: 'hol', roleLabelUz: 'O‘rin holi', roleLabelRu: 'Обстоятельство места' },
        { id: 'u_2', text: 'yangi', role: 'aniqlovchi', roleLabelUz: 'Aniqlovchi (o‘zgarmaydi)', roleLabelRu: 'Определение (неизменяемое)' },
        { id: 'u_3', text: 'kitoblar', role: 'ega', roleLabelUz: 'Ega (ko‘plik)', roleLabelRu: 'Подлежащее (множественное)' },
        { id: 'u_4', text: 'ko‘p.', role: 'kesim', roleLabelUz: 'Kesim', roleLabelRu: 'Сказуемое' },
      ],
    },
    russianSentence: {
      words: [
        { id: 'r_1', text: 'В библиотеке', role: 'hol', roleLabelUz: 'O‘rin holi', roleLabelRu: 'Обстоятельство места' },
        { id: 'r_2', text: 'много', role: 'kesim', roleLabelUz: 'Kesim', roleLabelRu: 'Сказуемое' },
        { id: 'r_3', text: 'новых', role: 'aniqlovchi', roleLabelUz: 'Aniqlovchi (ko‘plik)', roleLabelRu: 'Определение (во множ. ч.)' },
        { id: 'r_4', text: 'книг.', role: 'toldiruvchi', roleLabelUz: 'To‘ldiruvchi', roleLabelRu: 'Существительное' },
      ],
    },
    connections: [
      { uzWordId: 'u_1', ruWordId: 'r_1', relationNameUz: 'O‘rin', relationNameRu: 'Место' },
      { uzWordId: 'u_2', ruWordId: 'r_3', relationNameUz: 'Aniqlovchi', relationNameRu: 'Определение' },
      { uzWordId: 'u_3', ruWordId: 'r_4', relationNameUz: 'Kitoblar', relationNameRu: 'Книги' },
      { uzWordId: 'u_4', ruWordId: 'r_2', relationNameUz: 'Miqdor kesimi', relationNameRu: 'Сказуемое' },
    ],
    ruleTipUz: 'O‘zbek tilida sifatlar hech qachon ko‘plik qo‘shimchasini olmaydi: «yangi kitob» -> «yangi kitoblar».',
    ruleTipRu: 'В русском: новая -> новые. В узбекском определение неизменно: yangi kitob -> yangi kitoblar (не «yangilar»!).',
    commonErrorUz: 'Xato: «yangilar kitoblar». To‘g‘ri: «yangi kitoblar».',
    commonErrorRu: 'Ошибка: добавлять -lar к прилагательному: «yangilar kitoblar».',
  },

  {
    id: 'bridge_izofa_city',
    category: 'izofa',
    categoryUz: 'Izofa va shahar nomlari',
    categoryRu: 'Изафет и географические названия',
    uzbekSentence: {
      words: [
        { id: 'u_1', text: 'Biz', role: 'ega', roleLabelUz: 'Ega', roleLabelRu: 'Подлежащее' },
        { id: 'u_2', text: 'Toshkent', role: 'aniqlovchi', roleLabelUz: 'Shahar nomi', roleLabelRu: 'Определение' },
        { id: 'u_3', text: 'shahrida', role: 'hol', roleLabelUz: 'Izofa (-i) + o‘rin (-da)', roleLabelRu: 'Изафет (-i) + местный падеж' },
        { id: 'u_4', text: 'yashaymiz.', role: 'kesim', roleLabelUz: 'Kesim', roleLabelRu: 'Сказуемое' },
      ],
    },
    russianSentence: {
      words: [
        { id: 'r_1', text: 'Мы', role: 'ega', roleLabelUz: 'Ega', roleLabelRu: 'Подлежащее' },
        { id: 'r_2', text: 'живём', role: 'kesim', roleLabelUz: 'Kesim', roleLabelRu: 'Сказуемое' },
        { id: 'r_3', text: 'в городе', role: 'hol', roleLabelUz: 'Hol', roleLabelRu: 'Обстоятельство' },
        { id: 'r_4', text: 'Ташкенте.', role: 'aniqlovchi', roleLabelUz: 'Nomi', roleLabelRu: 'Определение' },
      ],
    },
    connections: [
      { uzWordId: 'u_1', ruWordId: 'r_1', relationNameUz: 'Ega', relationNameRu: 'Подлежащее' },
      { uzWordId: 'u_2', ruWordId: 'r_4', relationNameUz: 'Toshkent', relationNameRu: 'Ташкент' },
      { uzWordId: 'u_3', ruWordId: 'r_3', relationNameUz: 'Shahrida', relationNameRu: 'В городе' },
      { uzWordId: 'u_4', ruWordId: 'r_2', relationNameUz: 'Kesim', relationNameRu: 'Сказуемое' },
    ],
    ruleTipUz: '«Shahar» so‘zi nomdan keyin kelsa, albatta egalik qo‘shimchasini oladi: «Toshkent shahri».',
    ruleTipRu: 'Слово «shahar» после названия обязательно принимает суффикс -i: «Toshkent shahri», «Samarqand shahri».',
    commonErrorUz: 'Xato: «Toshkent shaharda». To‘g‘ri: «Toshkent shahrida».',
    commonErrorRu: 'Ошибка: терять аффикс -i: говорить «Toshkent shaharda» вместо «Toshkent shahrida».',
  },

  {
    id: 'bridge_copula_student',
    category: 'predicate_copula',
    categoryUz: 'Ot-kesim va shaxs bog‘lamasi',
    categoryRu: 'Именное сказуемое и личные аффиксы',
    uzbekSentence: {
      words: [
        { id: 'u_1', text: 'Men', role: 'ega', roleLabelUz: 'Ega (1-shaxs)', roleLabelRu: 'Подлежащее (я)' },
        { id: 'u_2', text: 'talabaman.', role: 'kesim', roleLabelUz: 'Ot-kesim (talaba + man)', roleLabelRu: 'Именное сказуемое (-man)' },
      ],
    },
    russianSentence: {
      words: [
        { id: 'r_1', text: 'Я', role: 'ega', roleLabelUz: 'Ega', roleLabelRu: 'Подлежащее' },
        { id: 'r_2', text: 'студент.', role: 'kesim', roleLabelUz: 'Ot-kesim (bog‘lamasiz)', roleLabelRu: 'Именное сказуемое' },
      ],
    },
    connections: [
      { uzWordId: 'u_1', ruWordId: 'r_1', relationNameUz: 'Ega', relationNameRu: 'Подлежащее' },
      { uzWordId: 'u_2', ruWordId: 'r_2', relationNameUz: 'Kesim', relationNameRu: 'Сказуемое' },
    ],
    ruleTipUz: 'O‘zbek tilida ot kesim vazifasida kelganda 1-shaxs uchun «-man» shaxs-son qo‘shimchasini oladi: talabaman.',
    ruleTipRu: 'К существительному в роли сказуемого присоединяется личный аффикс: «Men talabaman» (Я студент / Я студентка).',
    commonErrorUz: 'Xato: «Men talaba» (bajarilmagan gapdek yangraydi). To‘g‘ri: «Men talabaman».',
    commonErrorRu: 'Ошибка: опускать аффикс -man в речи: «Men talaba». Правильно: «Men talabaman».',
  },

  {
    id: 'bridge_gender_absence',
    category: 'no_gender',
    categoryUz: 'O‘zbek tilida rod (jins)ning yo‘qligi',
    categoryRu: 'Отсутствие грамматического рода',
    uzbekSentence: {
      words: [
        { id: 'u_1', text: 'U', role: 'ega', roleLabelUz: 'Ega (u = он yoki она)', roleLabelRu: 'Подлежащее (он или она)' },
        { id: 'u_2', text: 'kecha', role: 'hol', roleLabelUz: 'Payt holi', roleLabelRu: 'Обстоятельство времени' },
        { id: 'u_3', text: 'o‘qidi.', role: 'kesim', roleLabelUz: 'Kesim (barchaga bir xil)', roleLabelRu: 'Сказуемое (единая форма)' },
      ],
    },
    russianSentence: {
      words: [
        { id: 'r_1', text: 'Он / Она', role: 'ega', roleLabelUz: 'Ega (rodga bog‘liq)', roleLabelRu: 'Подлежащее (он/она)' },
        { id: 'r_2', text: 'вчера', role: 'hol', roleLabelUz: 'Hol', roleLabelRu: 'Обстоятельство' },
        { id: 'r_3', text: 'читал(а).', role: 'kesim', roleLabelUz: 'Kesim (o‘tgan zamonda rod bor)', roleLabelRu: 'Сказуемое (с окончанием рода)' },
      ],
    },
    connections: [
      { uzWordId: 'u_1', ruWordId: 'r_1', relationNameUz: 'Ega', relationNameRu: 'Подлежащее' },
      { uzWordId: 'u_2', ruWordId: 'r_2', relationNameUz: 'Payt', relationNameRu: 'Время' },
      { uzWordId: 'u_3', ruWordId: 'r_3', relationNameUz: 'Kesim', relationNameRu: 'Сказуемое' },
    ],
    ruleTipUz: 'O‘zbek tilida «u o‘qidi» jumlasi «он читал» ham, «она читала» ham bo‘laveradi. Fe’lda rod belgisi yo‘q.',
    ruleTipRu: 'В узбекском нет категории рода. «U o‘qidi» в равной степени означает «Он читал» и «Она читала».',
    commonErrorUz: 'O‘zbek tilida fe’llarga ayol yoki erkak jinsi bo‘yicha farqli qo‘shimcha qidirish xatodir.',
    commonErrorRu: 'Частая ошибка: пытаться выразить род в глаголе. В узбекском род отсутствует принципиально.',
  },

  {
    id: 'bridge_participle_clause',
    category: 'relative_clause',
    categoryUz: 'Sifatdosh vs ruscha «который»',
    categoryRu: 'Причастный оборот вместо «который»',
    uzbekSentence: {
      words: [
        { id: 'u_1', text: 'Kitob', role: 'toldiruvchi', roleLabelUz: 'To‘ldiruvchi', roleLabelRu: 'Дополнение' },
        { id: 'u_2', text: 'o‘qigan', role: 'aniqlovchi', roleLabelUz: 'Sifatdosh (-gan)', roleLabelRu: 'Причастие (-gan)' },
        { id: 'u_3', text: 'bola', role: 'ega', roleLabelUz: 'Ega', roleLabelRu: 'Подлежащее' },
        { id: 'u_4', text: 'bilimli bo‘ladi.', role: 'kesim', roleLabelUz: 'Kesim', roleLabelRu: 'Сказуемое' },
      ],
    },
    russianSentence: {
      words: [
        { id: 'r_1', text: 'Ребёнок,', role: 'ega', roleLabelUz: 'Ega', roleLabelRu: 'Подлежащее' },
        { id: 'r_2', text: 'который читал книгу,', role: 'aniqlovchi', roleLabelUz: 'Ergash gap («который»)', roleLabelRu: 'Придаточное определение' },
        { id: 'r_3', text: 'будет грамотным.', role: 'kesim', roleLabelUz: 'Kesim', roleLabelRu: 'Сказуемое' },
      ],
    },
    connections: [
      { uzWordId: 'u_2', ruWordId: 'r_2', relationNameUz: 'Qurilma', relationNameRu: 'Конструкция' },
      { uzWordId: 'u_3', ruWordId: 'r_1', relationNameUz: 'Ega', relationNameRu: 'Подлежащее' },
      { uzWordId: 'u_4', ruWordId: 'r_3', relationNameUz: 'Kesim', relationNameRu: 'Сказуемое' },
    ],
    ruleTipUz: 'O‘zbek tilida ruscha «который читал книгу» o‘rniga ixcham «kitob o‘qigan» birikmasi qo‘llanadi.',
    ruleTipRu: 'Вместо сложного оборота со словом «который» в узбекском используется элегантное причастие на -gan.',
    commonErrorUz: 'Xato kalka: «Bola qaysi kitob o‘qidi...». To‘g‘ri: «Kitob o‘qigan bola».',
    commonErrorRu: 'Грубая калька: «Bola qaysi o‘qidi kitob». Правильно: «Kitob o‘qigan bola».',
  },
];
