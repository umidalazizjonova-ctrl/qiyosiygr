import { TextbookResource } from '../types';

/**
 * Rasmiy darsliklar shabloni.
 * TALABGA BINOAN: Darslik nomlari, mualliflari va yillar to‘qib chiqarilmadi.
 * Quyidagi maydonlar o‘qituvchi tomonidan tasdiqlangan davlat ta’lim standarti (DTS)
 * ma’lumotlari asosida to‘ldirilishi uchun shablon holida tayyorlandi.
 * // TODO: o‘qituvchi tasdiqlangan ma’lumot bilan to‘ldirsin
 */
export const OFFICIAL_TEXTBOOKS: TextbookResource[] = [
  {
    id: 'tb_grade5',
    grade: '5-sinf (5 класс)',
    title: '«O‘zbek tili» (ta’lim rus tilida olib boriladigan sinflar uchun)',
    authors: '// TODO: o‘qituvchi tasdiqlangan mualliflar bilan to‘ldirsin',
    year: '// TODO: o‘qituvchi amaldagi nashr yilini kiritsin',
    publisher: '// TODO: o‘qituvchi nashriyot nomini kiritsin',
    approvedBy: 'O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi',
    noteUz: '5-sinf rusiyzabon o‘quvchilari uchun boshlang‘ich sintaktik tushunchalar: so‘z birikmasi va oddiy gaplar.',
    noteRu: 'Базовые синтаксические понятия для 5 класса школ с русским языком обучения: словосочетание и простое предложение.',
  },
  {
    id: 'tb_grade6',
    grade: '6-sinf (6 класс)',
    title: '«O‘zbek tili» (rus guruhlari uchun)',
    authors: '// TODO: o‘qituvchi tasdiqlangan mualliflar bilan to‘ldirsin',
    year: '// TODO: o‘qituvchi amaldagi nashr yilini kiritsin',
    publisher: '// TODO: o‘qituvchi nashriyot nomini kiritsin',
    approvedBy: 'O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi',
    noteUz: '6 ta kelishik va ularning otlar bilan boshqarilishi, gapning bosh bo‘laklari.',
    noteRu: '6 падежей узбекского языка, глагольное управление и главные члены предложения.',
  },
  {
    id: 'tb_grade7',
    grade: '7-sinf (7 класс)',
    title: '«O‘zbek tili» (rus guruhlari uchun)',
    authors: '// TODO: o‘qituvchi tasdiqlangan mualliflar bilan to‘ldirsin',
    year: '// TODO: o‘qituvchi amaldagi nashr yilini kiritsin',
    publisher: '// TODO: o‘qituvchi nashriyot nomini kiritsin',
    approvedBy: 'O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi',
    noteUz: 'Ikkinchi darajali bo‘laklar (aniqlovchi, to‘ldiruvchi, hol) va izofa konstruksiyalari.',
    noteRu: 'Второстепенные члены (определение, дополнение, обстоятельство) и изафет.',
  },
  {
    id: 'tb_grade8',
    grade: '8-sinf (8 класс)',
    title: '«O‘zbek tili» (rus guruhlari uchun)',
    authors: '// TODO: o‘qituvchi tasdiqlangan mualliflar bilan to‘ldirsin',
    year: '// TODO: o‘qituvchi amaldagi nashr yilini kiritsin',
    publisher: '// TODO: o‘qituvchi nashriyot nomini kiritsin',
    approvedBy: 'O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi',
    noteUz: 'SOV so‘z tartibi, mantiqiy urg‘u va uyushiq bo‘lakli gaplar.',
    noteRu: 'Порядок слов SOV, логическое ударение и однородные члены предложения.',
  },
  {
    id: 'tb_grade9',
    grade: '9-sinf (9 класс)',
    title: '«O‘zbek tili» (rus guruhlari uchun)',
    authors: '// TODO: o‘qituvchi tasdiqlangan mualliflar bilan to‘ldirsin',
    year: '// TODO: o‘qituvchi amaldagi nashr yilini kiritsin',
    publisher: '// TODO: o‘qituvchi nashriyot nomini kiritsin',
    approvedBy: 'O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi',
    noteUz: 'Qo‘shma gaplar, sifatdosh va ravishdoshli ixcham sintaktik konstruksiyalar.',
    noteRu: 'Сложные предложения, причастные и деепричастные обороты.',
  },
];

export interface EducationalPortal {
  title: string;
  url: string;
  descUz: string;
  descRu: string;
  badge: string;
}

export const EDUCATIONAL_PORTALS: EducationalPortal[] = [
  {
    title: 'EduPortal (Maktab ta’limi axborot portali)',
    url: 'https://eduportal.uz',
    descUz: 'Darsliklarning elektron nusxalari, multimedia darslari va o‘qituvchilar uchun metodik qo‘llanmalar.',
    descRu: 'Электронные версии школьных учебников, мультимедийные уроки и методические рекомендации.',
    badge: 'Rasmiy portal',
  },
  {
    title: 'ZiyoNET Ta’lim Axborot Tarmog‘i',
    url: 'https://ziyonet.uz',
    descUz: 'O‘zbekiston ta’lim resurslari, elektron kutubxona, lug‘atlar va fan bo‘yicha qo‘shimcha materiallar.',
    descRu: 'Образовательная сеть Узбекистана: электронная библиотека, словари и интерактивные материалы.',
    badge: 'Axborot tarmog‘i',
  },
  {
    title: '«O‘zbek tilining izohli lug‘ati» portali',
    url: 'https://izoh.uz',
    descUz: '80 000 dan ziyod so‘z va birikmalarning rasmiy akademik izohlari va qidiruv tizimi.',
    descRu: 'Официальный поиск по 80 000+ словам и фразеологизмам академического толкового словаря.',
    badge: 'Akademik lug‘at',
  },
  {
    title: 'Maktabgacha va maktab ta’limi vazirligi',
    url: 'https://uzedu.uz',
    descUz: 'Umumta’lim maktablari o‘quv dasturlari va ta’lim standartlari bo‘yicha rasmiy yangiliklar.',
    descRu: 'Официальный сайт Министерства дошкольного и школьного образования Республики Узбекистан.',
    badge: 'Vazirlik',
  },
];
