import { FactItem } from '../types';

export const FACTS_DATA: FactItem[] = [
  {
    id: 'fact_1',
    category: 'Agglyutinatsiya',
    titleUz: 'Agglyutinativ tabiat: qatorlashgan qo‘shimchalar',
    titleRu: 'Агглютинативность: бусины окончаний',
    contentUz:
      'O‘zbek tili agglyutinativ (lotincha «agglutinare» — yopishtirish) til hisoblanadi. Unda har bir qo‘shimcha bitta aniq grammatik ma’noga ega va o‘zakka ketma-ket birikadi: kitob + lar (ko‘plik) + imiz (egalik) + dan (chiqish kelishigi) = kitoblarimizdan («из наших книг»).',
    contentRu:
      'Узбекский язык — агглютинативный. В отличие от русского с его сложными окончаниями (флексиями), в узбекском каждое окончание имеет строго одно грамматическое значение: kitob + lar (мн. число) + imiz (наш) + dan (из) = kitoblarimizdan («из наших книг»).',
    source: 'G‘. Abdurahmonov, Sh. Shukurov. «O‘zbek tilining tarixiy grammatikasi», Toshkent.',
    imageKey: 'non',
  },
  {
    id: 'fact_2',
    category: 'Grammatik rod',
    titleUz: 'O‘zbek tilida grammatik rod mutlaqo yo‘q',
    titleRu: 'Полное отсутствие грамматического рода',
    contentUz:
      'O‘zbek tilida erkak, ayol yoki o‘rta jins farqlanmaydi. «U» olmoshi «он», «она» va «оно» uchun birdek qo‘llanadi. Fe’llar ham jins bo‘yicha o‘zgarmaydi: «U o‘qidi» — o‘g‘il bolaga ham, qiz bolaga ham tegishlidir.',
    contentRu:
      'В узбекском языке нет категории рода ни у существительных, ни у прилагательных, ни у глаголов. Местоимение «U» переводится и как «он», и как «она», и как «оно». Глагольная форма «U keldi» универсальна для всех полов.',
    source: 'O‘zbekiston Milliy Ensiklopediyasi, 6-jild, «O‘zbek tili» maqolasi.',
    imageKey: 'atlas',
  },
  {
    id: 'fact_3',
    category: 'So‘z tartibi',
    titleUz: 'Qat’iy SOV tartibi',
    titleRu: 'Строгая типология SOV',
    contentUz:
      'O‘zbek tilida gap qurilishi SOV (Subject — Object — Verb) tamoyiliga bo‘ysunadi. Kesim gapning langari bo‘lib, deyarli barcha nutqiy vaziyatlarda gapni yakunlab keladi: «Bola (S) kitobni (O) o‘qidi (V)».',
    contentRu:
      'Базовый порядок слов в узбекском предложении — SOV (Подлежащее — Дополнение — Сказуемое). Сказуемое замыкает мысль, тогда как в русском господствует порядок SVO («Ребёнок читает книгу»).',
    source: 'A. Hojiyev. «O‘zbek tili sintaksisi asoslari», Toshkent.',
    imageKey: 'dutor',
  },
  {
    id: 'fact_4',
    category: 'Turkiy so‘zlar',
    titleUz: 'Rus tilidagi turkiy so‘zlar: «сундук», «караван», «деньги»',
    titleRu: 'Тюркизмы в русском языке: «сундук», «деньги», «утюг»',
    contentUz:
      'Rus tilida kundalik hayotda ishlatiladigan yuzlab so‘zlar turkiy (shu jumladan o‘zbek) tillardan kirgan: sandiq (сундук), karvon (караван), tanga (деньги), o‘tiq (утюг), qalam (карандаш), qalpog‘ (колпак), o‘rtoq (артель).',
    contentRu:
      'Многие привычные русские слова имеют тюркские корни: деньга/деньги (от tanga — монета), карандаш (kara taş — чёрный камень), сундук (sandiq), утюг (ütüg), караван (karvon), туман (tuman).',
    source: 'M. Fasmer. «Etimologik lug‘at» (Этимологический словарь русского языка).',
    imageKey: 'anor',
  },
  {
    id: 'fact_5',
    category: 'Sifatlar',
    titleUz: 'Sifatlarning absolyut o‘zgarmasligi',
    titleRu: 'Абсолютная статичность определений',
    contentUz:
      'O‘zbek tilida sifatlar otlar oldida qat’iy o‘zgarmaydi. Rus tilidagi «новый дом, новая книга, новые тетради» kabi o‘zgarishlar o‘zbek tilida mavjud emas: «yangi uy, yangi kitob, yangi daftarlar». Sifatga ko‘plik qo‘shilmaydi!',
    contentRu:
      'В узбекском языке прилагательное не согласуется с существительным ни в роде, ни в числе, ни в падеже: yangi uy (новый дом), yangi kitob (новая книга), yangi uylar (новые дома).',
    source: 'H. Jamolxonov. «Hozirgi o‘zbek adabiy tili», Toshkent, «Talqin».',
    imageKey: 'registon',
  },
  {
    id: 'fact_6',
    category: 'Predloglar',
    titleUz: 'Predloglar o‘rnida ko‘makchilar va kelishiklar',
    titleRu: 'Отсутствие предлогов: роль послелогов',
    contentUz:
      'O‘zbek tilida so‘z oldidan keluvchi predloglar yo‘q. Buning o‘rniga so‘zdan keyin qo‘shiluvchi 6 ta kelishik qo‘shimchasi yoki alohida ko‘makchilar («bilan», «uchun», «haqida», «kabi») ishlatiladi.',
    contentRu:
      'В узбекском нет предлогов («в», «на», «из», «о»). Вместо них используются падежные аффиксы и послелоги, стоящие ПОСЛЕ слова: maktabga (в школу), do‘stim bilan (с другом), kitob haqida (о книге).',
    source: 'Sh. Rahmatullayev. «Hozirgi o‘zbek adabiy tili», Toshkent.',
    imageKey: 'buxoro',
  },
  {
    id: 'fact_7',
    category: 'Sifatdoshlar',
    titleUz: 'Ruscha «который» o‘rnida sifatdoshlar',
    titleRu: 'Элегантные причастия вместо союза «который»',
    contentUz:
      'O‘zbek tilida ruscha «который»li ergash gaplar o‘rniga ixcham sifatdosh birikmalari qo‘llanadi: «Toshkentdan kelgan mehmon» = «Гость, который приехал из Ташкента». Bu uslub nutqni yengil va ixcham qiladi.',
    contentRu:
      'Вместо громоздких придаточных определительных предложений со словом «который» узбекский язык использует элегантные причастные обороты: «kitob o‘qigan bola» (ребёнок, который читал книгу).',
    source: 'M. Asqarova. «O‘zbek tilida ergashgan qo‘shma gaplar», Fan nashriyoti.',
    imageKey: 'xiva',
  },
  {
    id: 'fact_8',
    category: 'Alifbo',
    titleUz: 'Lotin va kirill imlosi',
    titleRu: 'Графика узбекского языка',
    contentUz:
      'O‘zbek tili tarixi davomida arab, lotin va kirill yozuvlaridan foydalangan. 1993-yildan beri rasmiy davlat tili lotin yozuviga asoslangan alifboga tayanadi. Unda o‘ va g‘ harflari teskari apostrof (o‘, g‘) bilan yoziladi.',
    contentRu:
      'Узбекская письменность сменила арабскую графику, латиницу (1929) и кириллицу (1940). С 1993 года официальным государственным алфавитом является латиница со специфическими буквами O‘, G‘, Sh, Ch.',
    source: '«Lotin yozuviga asoslangan o‘zbek alifbosini joriy etish to‘g‘risida»gi Qonun.',
    imageKey: 'non',
  },
  {
    id: 'fact_9',
    category: 'Egalik tizimi',
    titleUz: 'Bitta so‘z bilan butun ibora: «kitobim»',
    titleRu: 'Категория принадлежности: «kitobim»',
    contentUz:
      'O‘zbek tilida «mening» deb aytmasdan, so‘zga egalik qo‘shimchasini ulash kifoya: kitob-im (моя книга), kitob-ing (твоя книга), kitob-i (его/её книга). Bu tildagi ixchamlikning yorqin belgisidir.',
    contentRu:
      'В узбекском принадлежность выражается специальным суффиксом на самом слове: kitobim (моя книга), maktabingiz (ваша школа). Притяжательные местоимения «mening», «sizning» при этом часто опускаются.',
    source: 'N. Mahmudov. «O‘zbek tili ma’rifati», Toshkent.',
    imageKey: 'dutor',
  },
  {
    id: 'fact_10',
    category: 'Sintaksis',
    titleUz: 'Mantiqiy urg‘uning kesim oldi qoidasi',
    titleRu: 'Позиция логического ударения',
    contentUz:
      'O‘zbek tilida gapdagi eng muhim yangilik (rema) kesimning bevosita oldida aytiladi: «Ali kecha KINOGA bordi» (aynan kinoga) va «Kinoga kecha ALI bordi» (aynan Ali).',
    contentRu:
      'В узбекском языке смысловой центр высказывания (актуальное членение предложения) строго привязан к позиции непосредственно перед сказуемым.',
    source: 'E. Begmatov. «Hozirgi o‘zbek adabiy tilining leksik qatlamlari», Fan.',
    imageKey: 'registon',
  },
  {
    id: 'fact_11',
    category: 'Meros',
    titleUz: 'Alisher Navoiy va o‘zbek tili qudrati',
    titleRu: 'Алишер Навои и богатство узбекского языка',
    contentUz:
      'Buyuk mutafakkir Alisher Navoiy 1499-yilda yozilgan «Muhokamat ul-lug‘atayn» («Ikki til muhokamasi») asarida eski o‘zbek (turkiy) tilining sintaktik va leksik boyligini ilmiy asoslab bergan.',
    contentRu:
      'Алишер Навои в труде «Суждение о двух языках» (1499 г.) научно доказал исключительную выразительность, синтаксическую гибкость и богатство староузбекского языка.',
    source: 'Alisher Navoiy. «Muhokamat ul-lug‘atayn», Toshkent, G‘afur G‘ulom nomidagi nashriyot.',
    imageKey: 'buxoro',
  },
  {
    id: 'fact_12',
    category: 'Lug‘at boyligi',
    titleUz: '«O‘zbek tilining izohli lug‘ati» — 80 000 dan ziyod so‘z',
    titleRu: '«Толковый словарь узбекского языка» — более 80 000 слов',
    contentUz:
      'O‘zbekiston Fanlar akademiyasi tomonidan nashr etilgan 5 jildlik «O‘zbek tilining izohli lug‘ati»da 80 mingdan ortiq so‘z va birikmalar, ularning boy sintaktik qo‘llanish namunalari jamlangan.',
    contentRu:
      '5-томный академический «Толковый словарь узбекского языка» содержит свыше 80 000 слов и фразеологизмов с подробным описанием их синтаксической сочетаемости.',
    source: 'O‘zbek tilining izohli lug‘ati, 5 jildlik, O‘zbekiston Milliy Ensiklopediyasi davlat ilmiy nashriyoti.',
    imageKey: 'xiva',
  },
  {
    id: 'fact_13',
    category: 'Singarmonizm',
    titleUz: 'Singarmonizm (tovushlar ohangdoshligi) qoldiqlari',
    titleRu: 'Сингармонизм и благозвучие аффиксов',
    contentUz:
      'Qadimgi turkiy tilda qattiq va yumshoq unlilar ohangdoshligi (singarmonizm) qat’iy bo‘lgan. Hozirgi zamonaviy o‘zbek tilida bu qoida soddalashgan bo‘lsa-da, fonetik uyg‘unlik saqlanib qolgan.',
    contentRu:
      'В древнетюркском действовал строгий закон сингармонизма (ряд гласных в корне определял гласные в суффиксах). В современном узбекском система стала более унифицированной.',
    source: 'A. Nurmonov. «O‘zbek tilshunosligi tarixi», Toshkent.',
    imageKey: 'atlas',
  },
  {
    id: 'fact_14',
    category: 'Izofa',
    titleUz: 'Forscha va turkiy izofa uyg‘unligi',
    titleRu: 'Слияние изафетных конструкций',
    contentUz:
      'O‘zbek tilida ikki xil izofa uchraydi: turkiy izofa («maktab bog‘i») va klassik adabiyotdan meros bo‘lib o‘tgan forscha izofa («dardi bedavo», «fasli navbahor»). Bu tilimizning boy tarixidan dalolatdir.',
    contentRu:
      'В узбекском языке гармонично сосуществуют исконно тюркский изафет (maktab bog‘i) и поэтический персидский изафет (dardi bedavo — неизлечимая боль).',
    source: 'F. Abdullayev. «O‘zbek tilining tarixiy sintaksisi», Toshkent.',
    imageKey: 'navroz',
  },
  {
    id: 'fact_15',
    category: 'Nol bog‘lama',
    titleUz: 'Hozirgi zamonda nol bog‘lama: «Men talabaman»',
    titleRu: 'Нулевая связка в настоящем времени',
    contentUz:
      'Rus tilidagi kabi («Я студент»), o‘zbek tilida ham hozirgi zamonda «bo‘lmoq» fe’li tushirib qoldiriladi: «Men talabaman». Biroq o‘tgan zamonda bog‘lama fe’l albatta paydo bo‘ladi: «Men talaba edim».',
    contentRu:
      'Как и в русском («Я студент»), в узбекском в настоящем времени связка отсутствует: «Men talabaman». Однако в прошедшем времени связка обязательна: «Men talaba edim» (Я был студентом).',
    source: 'Sh. Shoabdurahmonov va boshq. «Hozirgi o‘zbek adabiy tili», O‘qituvchi nashriyoti.',
    imageKey: 'anor',
  },
  {
    id: 'fact_16',
    category: 'Xushmuomalalik',
    titleUz: 'Hurmat ma’nosini ifodalovchi sintaktik shakllar',
    titleRu: 'Грамматика вежливости и уважения',
    contentUz:
      'O‘zbek tilida kattalarga yoki mehmonga nisbatan kesim ko‘plik shaklida qo‘llanadi: «Otam keldilar» (birlikdagi odamga nisbatan -lar qo‘shimchasi hurmat ifodalaydi).',
    contentRu:
      'Категория уважения ярко выражена в синтаксисе: к старшим форма сказуемого ставится во множественное число: «Dadam keldilar» (Отец пришёл / с почтением).',
    source: 'N. Mahmudov. «Til madaniyati va nutq odobi», Toshkent.',
    imageKey: 'dutor',
  },
  {
    id: 'fact_17',
    category: 'So‘roq yuklamasi',
    titleUz: '-mi yuklamasi faqat so‘z oxiriga ulanadi',
    titleRu: 'Слитное написание частицы -mi',
    contentUz:
      'O‘zbek tili orfografiyasiga ko‘ra -mi hech qachon alohida yoki chiziqcha bilan yozilmaydi. U fe’l yoki otning ajralmas qismiga aylanadi: «keldingmi», «tayyormisiz».',
    contentRu:
      'По официальным орфографическим правилам узбекского языка вопросительная частица -mi пишется строго слитно со словом.',
    source: 'O‘zbek tilining asosiy imlo qoidalari, O‘zbekiston Respublikasi Vazirlar Mahkamasi qarori.',
    imageKey: 'non',
  },
  {
    id: 'fact_18',
    category: 'Dunyo tillari',
    titleUz: 'O‘zbek tili dunyoda 50 milliondan ortiq inson uchun ona tili',
    titleRu: 'Более 50 миллионов носителей в мире',
    contentUz:
      'O‘zbek tili nafaqat O‘zbekistonda, balki Afg‘oniston, Tojikiston, Qirg‘iziston, Qozog‘iston, Turkmaniston va dunyoning ko‘plab mamlakatlarida keng qo‘llaniladi.',
    contentRu:
      'Узбекский язык является родным более чем для 50 миллионов человек по всему миру, занимая одно из ведущих мест среди тюркских языков.',
    source: 'Ethnologue: Languages of the World, Uzbek Language profile.',
    imageKey: 'registon',
  },
  {
    id: 'fact_19',
    category: 'Harakat nomlari',
    titleUz: 'Harakat nomi (-ish, -moq, -v): gapda har qanday bo‘lak bo‘la oladi',
    titleRu: 'Имена действия: гибкость инфинитива',
    contentUz:
      'O‘zbek tilida «o‘qish», «yozish» kabi harakat nomlari gapda ega («O‘qish — hayot chirog‘i»), to‘ldiruvchi («O‘qishni sevadilar») va hatto hol bo‘lib kela oladi.',
    contentRu:
      'Имена действия на -ish / -moq обладают уникальной синтаксической гибкостью, выступая и подлежащим («O‘qish — hayot chirog‘i»), и дополнением, и обстоятельством.',
    source: 'R. Sayfullayeva va boshq. «Hozirgi o‘zbek tili», O‘qituvchi.',
    imageKey: 'buxoro',
  },
  {
    id: 'fact_20',
    category: 'Davlat tili',
    titleUz: '21-oktabr — O‘zbek tili bayrami kuni',
    titleRu: '21 октября — День праздника узбекского языка',
    contentUz:
      '1989-yil 21-oktabrda «Davlat tili haqida»gi qonun qabul qilingan bo‘lib, bu sana har yili mamlakatimizda O‘zbek tili bayrami kuni sifatida keng nishonlanadi.',
    contentRu:
      '21 октября 1989 года узбекскому языку был придан статус государственного языка Республики Узбекистан. Этот день ежегодно отмечается как всенародный праздник.',
    source: '«O‘zbek tili bayrami kunini belgilash to‘g‘risida»gi O‘zbekiston Respublikasi Qonuni.',
    imageKey: 'navroz',
  },
];
