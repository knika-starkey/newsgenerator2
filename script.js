let when = [
  "Століття тому",
  "Ніччу",
  "Давним давно",
  "В 16:40",
  "Холоднного дня",
  "Сонячної ночі",
];
let where = [
  "у супермаркеті",
  "у бібліотеці",
  "у потязі",
  "у книзі",
  "за кулісами",
  "у далекій далекій галактиці",
  "біля АТБ",
  "у пеклі",
  "на городі",
  "у Гогвартсі",
  "На Бейкер стріт",
  "У ресторані Рітз",
  "у одеському метро",
];
let which = [
  "крутий",
  "золотий",
  "тропічний",
  "барвистий",
  "житель села Мужинівки, Длїцького району, Тернопільсьуої області",
  "зухвалий",
  "химерний",
  "музичний",
  "веселий",
  "страшний",
];
let who = [
  "президент",
  "двоюрідний брат",
  "кошик",
  "Банддера",
  "лосось",
  "хробак",
  "бродяга",
  "сова",
  "Петро Щур",
  "Богарт",
  "ангел Азірафель",
];
let whatDid = [
  "зменшувався",
  "вів переговори з собою",
  "спалював Москву",
  "прочитав казку",
  "грав у монополію",
  "знайшов сходи у небо",
  "використовував білу магію",
  "заспівав пісню Мамина світлиця",
  "перетворив воду на вино",
  "слухав музику",
  "фарбував повітря",
];
let whatHappen = [
  "Убогий Шпигун впав",
  "Усі лягли спати",
  "Усі були шоковані",
  "Маг був здивлваним",
  "Це була дивовижна розповідь",
];
let whatPeopleSaid = [
  "Голови вгору",
  "Стежте за феями",
  "Ідемо пити чай",
  "Вау",
  "Буває",
];

document.write(
  `${when[Math.floor(Math.random() * when.length)]} ${
    where[Math.floor(Math.random() * where.length)]
  } ${which[Math.floor(Math.random() * which.length)]} ${
    who[Math.floor(Math.random() * who.length)]
  } ${whatDid[Math.floor(Math.random() * whatDid.length)]}. ${
    whatHappen[Math.floor(Math.random() * whatHappen.length)]
  }. Люди сказали: "${
    whatPeopleSaid[Math.floor(Math.random() * whatPeopleSaid.length)]
  }"`
);
