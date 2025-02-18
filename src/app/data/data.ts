export type FilmData = {
  name: string
  id: string
  year: number
  description: string
  rateIMDB: number
  rateKinopoisk: number
  actors: Array<string>
  genre: Array<string>
  imageFilm: string
  favorite: boolean
  watchLater: boolean
  yourRate: number | null
}
export const dataSet: FilmData[] = [
  {
    name: "Вернуться в 1988",
    id: "reply_1988",
    year: 2015,
    description: "История пяти семей, живущих в одном районе Сеула в 1988 году, и их повседневной жизни.",
    rateIMDB: 9.2,
    rateKinopoisk: 8.9,
    actors: ["Ли Хе-ри", "Пак Бо-гом", "Рю Джун-ёль"],
    genre: ["Драма", "Комедия", "Романтика"],
    imageFilm: "https://example.com/reply_1988.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Мой мистер",
    id: "my_mister",
    year: 2018,
    description:
      "Инженер среднего возраста и молодая женщина с финансовыми проблемами находят утешение в дружбе друг с другом.",
    rateIMDB: 9.1,
    rateKinopoisk: 8.8,
    actors: ["Ли Сон-гюн", "Ли Джи-ын", "Пак Хо-сан"],
    genre: ["Драма"],
    imageFilm: "https://example.com/my_mister.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Гоблин",
    id: "goblin",
    year: 2016,
    description: "Бессмертный гоблин ищет невесту, которая сможет освободить его от вечной жизни.",
    rateIMDB: 8.6,
    rateKinopoisk: 8.5,
    actors: ["Гон Ю", "Ким Го-ын", "Ли Дон-ук"],
    genre: ["Фэнтези", "Драма", "Романтика"],
    imageFilm: "https://example.com/goblin.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Ответ 1997",
    id: "reply_1997",
    year: 2012,
    description: "История о группе друзей, вспоминающих свои школьные годы в 1997 году.",
    rateIMDB: 8.1,
    rateKinopoisk: 8.0,
    actors: ["Чон Ын-джи", "Со Ин-гук", "Хо Джон-хо"],
    genre: ["Драма", "Комедия", "Романтика"],
    imageFilm: "https://example.com/reply_1997.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Мистер Солнечный Свет",
    id: "mr_sunshine",
    year: 2018,
    description:
      "Кореец, выросший в США, возвращается на родину и влюбляется в аристократку на фоне исторических событий начала 20 века.",
    rateIMDB: 8.7,
    rateKinopoisk: 8.6,
    actors: ["Ли Бён-хон", "Ким Тэ-ри", "Ю Ён-сок"],
    genre: ["Драма", "Исторический", "Романтика"],
    imageFilm: "https://example.com/mr_sunshine.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },

  {
    name: "Потомки солнца",
    id: "descendants_of_the_sun",
    year: 2016,
    description: "История любви между капитаном спецназа и врачом, разворачивающаяся на фоне миротворческой миссии.",
    rateIMDB: 8.3,
    rateKinopoisk: 8.2,
    actors: ["Сон Джун-ки", "Сон Хе-гё", "Чин Гу"],
    genre: ["Драма", "Романтика", "Боевик"],
    imageFilm: "https://example.com/descendants_of_the_sun.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Алое сердце",
    id: "scarlet_heart",
    year: 2016,
    description: "Современная женщина переносится в эпоху династии Корё и оказывается вовлеченной в дворцовые интриги.",
    rateIMDB: 8.6,
    rateKinopoisk: 8.5,
    actors: ["Ли Джун-ги", "Ли Джи-ын", "Кан Ха-ныль"],
    genre: ["Фэнтези", "Драма", "Романтика"],
    imageFilm: "https://example.com/scarlet_heart.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Небесный замок",
    id: "sky_castle",
    year: 2018,
    description:
      "Сатирическая драма о богатых семьях, стремящихся обеспечить своим детям поступление в престижные университеты.",
    rateIMDB: 8.6,
    rateKinopoisk: 8.5,
    actors: ["Ём Джон-а", "Ли Тэ-ран", "Юн Сэ-ри"],
    genre: ["Драма", "Социальный", "Мелодрама"],
    imageFilm: "https://example.com/sky_castle.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Королевский подарок",
    id: "royal_gift",
    year: 2021,
    description: "Путеводитель в истории любви между королевским офицером и молодой девушкой.",
    rateIMDB: 8.4,
    rateKinopoisk: 8.3,
    actors: ["Ким Хи-ю", "Пак Ки-гон", "Ким Со-ми"],
    genre: ["Исторический", "Драма", "Романтика"],
    imageFilm: "https://example.com/royal_gift.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Мой шеф",
    id: "my_boss",
    year: 2020,
    description: "Романтическая комедия, следящая за отношениями нового босса и его подчиненной.",
    rateIMDB: 7.8,
    rateKinopoisk: 7.5,
    actors: ["Пак Мин-ён", "Чо Джон-нам", "Пак Бе-ом"],
    genre: ["Комедия", "Романтика", "Драма"],
    imageFilm: "https://example.com/my_boss.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Легенда о короле",
    id: "legend_of_the_king",
    year: 2021,
    description: "Корейская фэнтези-дорама о политике, истории и любви с большим количеством дворцовых заговоров.",
    rateIMDB: 8.3,
    rateKinopoisk: 8.2,
    actors: ["Пак Чжи-хун", "Ли Сэ-ён", "Ли Кён-джин"],
    genre: ["Фэнтези", "Драма", "Исторический"],
    imageFilm: "https://example.com/legend_of_the_king.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Судьба поцелуя",
    id: "fate_of_the_kiss",
    year: 2019,
    description:
      "Романтическая история о девушке, которая начинает работать с загадочным мужчиной и неожиданно влюбляется в него.",
    rateIMDB: 7.5,
    rateKinopoisk: 7.3,
    actors: ["Ли Хи-джун", "Ким Хе-ха", "Со Джи-су"],
    genre: ["Романтика", "Драма"],
    imageFilm: "https://example.com/fate_of_the_kiss.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Тайный сад",
    id: "secret_garden",
    year: 2010,
    description: "Вдохновляющая история о том, как два человека из разных миров меняют жизни друг друга.",
    rateIMDB: 8.3,
    rateKinopoisk: 8.1,
    actors: ["Ха Джи-уон", "Чан Хи-джин", "Юн Сан"],
    genre: ["Романтика", "Фэнтези", "Драма"],
    imageFilm: "https://example.com/secret_garden.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Школьные годы",
    id: "school_years",
    year: 2017,
    description: "История школьной жизни подростков, их отношений, испытаний и разочарований.",
    rateIMDB: 7.6,
    rateKinopoisk: 7.5,
    actors: ["Пак Су-джин", "Чо Хи", "Хан Чжи"],
    genre: ["Драма", "Подростковая"],
    imageFilm: "https://example.com/school_years.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Доктор Романтика",
    id: "doctor_romantic",
    year: 2016,
    description:
      "Доктор, который живет в уединении, встречает талантливого студента медицинского факультета и помогает ему раскрыть его потенциал.",
    rateIMDB: 8.1,
    rateKinopoisk: 8.2,
    actors: ["Хан Су-джи", "Ли Дон-ук", "Ким Джи-у"],
    genre: ["Драма", "Медицина", "Романтика"],
    imageFilm: "https://example.com/doctor_romantic.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },

  {
    name: "Королева инкомпании",
    id: "queen_of_incompany",
    year: 2019,
    description:
      "Женщина, которая оказалась в мире мужских амбициозных карьер, находит свою силу и стремится к вершинам.",
    rateIMDB: 7.8,
    rateKinopoisk: 7.6,
    actors: ["Чо Ё-джон", "Ли Тон-гун", "Пак Бом"],
    genre: ["Драма", "Комедия", "Бизнес"],
    imageFilm: "https://example.com/queen_of_incompany.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Убежище",
    id: "refuge",
    year: 2020,
    description: "Драма о женщине, которая скрывается от своих преследователей и находит спасение в неожиданном месте.",
    rateIMDB: 8.0,
    rateKinopoisk: 7.9,
    actors: ["Чан На-ра", "Ли Джон-ук", "Ким Чжон-хо"],
    genre: ["Драма", "Мистика", "Триллер"],
    imageFilm: "https://example.com/refuge.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Тайна старого города",
    id: "old_city_secret",
    year: 2018,
    description:
      "История следователя, который расследует странные события в старом городе, сталкиваясь с загадочными происшествиями.",
    rateIMDB: 7.7,
    rateKinopoisk: 7.5,
    actors: ["Ким Су-хо", "Чо Се-ри", "Пак Юнг"],
    genre: ["Триллер", "Мистика", "Драма"],
    imageFilm: "https://example.com/old_city_secret.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Блуждающие огоньки",
    id: "wandering_lights",
    year: 2017,
    description:
      "Молодая женщина расследует таинственные исчезновения, сталкиваясь с ужасами, которые скрывают её родные.",
    rateIMDB: 7.9,
    rateKinopoisk: 7.8,
    actors: ["Пак Ми-джин", "Ли Бён-гон", "Хан Ён"],
    genre: ["Драма", "Триллер", "Мистика"],
    imageFilm: "https://example.com/wandering_lights.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Сонатина любви",
    id: "love_sonatina",
    year: 2018,
    description: "Романтическая драма о любовной истории двух людей с разными целями в жизни.",
    rateIMDB: 8.2,
    rateKinopoisk: 8.0,
    actors: ["Пак Чжи-хун", "Ли Хи-юн", "Юн Хан"],
    genre: ["Романтика", "Драма"],
    imageFilm: "https://example.com/love_sonatina.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Корейский Ромео",
    id: "korean_romeo",
    year: 2019,
    description: "История молодой пары, чьи отношения подвергаются множеству испытаний и сложных выборов.",
    rateIMDB: 8.0,
    rateKinopoisk: 7.8,
    actors: ["Ли Дэ-ми", "Чо Чон-сим", "Ким Хо"],
    genre: ["Романтика", "Драма", "Комедия"],
    imageFilm: "https://example.com/korean_romeo.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Дух во времени",
    id: "spirit_in_time",
    year: 2018,
    description: "Дорама о человеке, который случайно попадает в прошлое и пытается исправить ошибки своей жизни.",
    rateIMDB: 7.5,
    rateKinopoisk: 7.4,
    actors: ["Чо Хе-ги", "Юн Ким", "Пак Ён"],
    genre: ["Фэнтези", "Драма", "Романтика"],
    imageFilm: "https://example.com/spirit_in_time.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "В поисках счастья",
    id: "searching_for_happiness",
    year: 2017,
    description: "История о том, как молодая женщина находит свой путь в жизни после ряда трагичных событий.",
    rateIMDB: 7.8,
    rateKinopoisk: 7.6,
    actors: ["Чо Хи-джи", "Ли Гюн-джун", "Юн Мин-су"],
    genre: ["Драма", "Семейный"],
    imageFilm: "https://example.com/searching_for_happiness.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Шепот ветра",
    id: "whisper_of_the_wind",
    year: 2020,
    description:
      "В центре истории — женщина, которая должна решить, сохранить ли верность семье или найти свою собственную судьбу.",
    rateIMDB: 8.1,
    rateKinopoisk: 8.0,
    actors: ["Ким Чжон-хи", "Пак Джи-кан", "Чо Тэ"],
    genre: ["Драма", "Романтика"],
    imageFilm: "https://example.com/whisper_of_the_wind.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Семейные тайны",
    id: "family_secrets",
    year: 2021,
    description: "История о том, как семья сталкивается с тем, что их тайны начинают раскрывать друг перед другом.",
    rateIMDB: 7.7,
    rateKinopoisk: 7.5,
    actors: ["Юн Хо", "Чо Ги-ту", "Пак Хун-джин"],
    genre: ["Драма", "Семейный", "Триллер"],
    imageFilm: "https://example.com/family_secrets.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },

  {
    name: "Психометрия",
    id: "psychometry",
    year: 2019,
    description:
      "Молодой человек с экстрасенсорными способностями использует свой дар, чтобы расследовать преступления.",
    rateIMDB: 7.6,
    rateKinopoisk: 7.5,
    actors: ["Ким Бом", "Шин Сен-ён", "Пак Чжон-хо"],
    genre: ["Триллер", "Мистика", "Драма"],
    imageFilm: "https://example.com/psychometry.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Герой",
    id: "hero",
    year: 2020,
    description:
      "История о парне, который стал героем, защищая свою страну, и теперь ему предстоит решать важные моральные дилеммы.",
    rateIMDB: 8.0,
    rateKinopoisk: 7.8,
    actors: ["Чо Ён", "Юн Джи-бо", "Пак Су"],
    genre: ["Драма", "Боевик"],
    imageFilm: "https://example.com/hero.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Черный рыцарь",
    id: "black_knight",
    year: 2017,
    description: "В мире будущего один мужчина становится защитником человечества и ведет борьбу с властью.",
    rateIMDB: 7.8,
    rateKinopoisk: 7.7,
    actors: ["Чо Бон", "Ли Су", "Юн Мин"],
    genre: ["Научная фантастика", "Драма"],
    imageFilm: "https://example.com/black_knight.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Счастье на двоих",
    id: "happiness_for_two",
    year: 2021,
    description: "История любви двух людей, чьи судьбы переплетаются после трагической аварии.",
    rateIMDB: 8.3,
    rateKinopoisk: 8.1,
    actors: ["Ким Чжи", "Ли Хён", "Пак Ки-джун"],
    genre: ["Романтика", "Драма"],
    imageFilm: "https://example.com/happiness_for_two.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Первые шаги",
    id: "first_steps",
    year: 2018,
    description: "Молодая женщина решает вернуться к мечте детства и начать все с начала.",
    rateIMDB: 7.5,
    rateKinopoisk: 7.4,
    actors: ["Юн Ки", "Ли Су-хо", "Ким Ён-су"],
    genre: ["Драма", "Романтика"],
    imageFilm: "https://example.com/first_steps.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Звезды на небе",
    id: "stars_in_sky",
    year: 2019,
    description: "Звезды в небе следуют за каждым из нас, и эта дорама — о том, как можно поймать свою собственную.",
    rateIMDB: 7.9,
    rateKinopoisk: 7.8,
    actors: ["Ли Мин", "Ким Тэ-джин", "Пак Джин-хьо"],
    genre: ["Драма", "Романтика"],
    imageFilm: "https://example.com/stars_in_sky.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Больше, чем любовь",
    id: "more_than_love",
    year: 2020,
    description:
      "Мужчина и женщина начинают отношения, но сталкиваются с неразрешимыми проблемами из-за разницы в их желаниях.",
    rateIMDB: 7.8,
    rateKinopoisk: 7.6,
    actors: ["Ким Су-ён", "Ли Чон-гю", "Пак Хи"],
    genre: ["Романтика", "Драма"],
    imageFilm: "https://example.com/more_than_love.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Король и я",
    id: "king_and_i",
    year: 2016,
    description: "Историческая дорама, рассказывающая о женщине, которая становится важной фигурой при дворе короля.",
    rateIMDB: 8.2,
    rateKinopoisk: 8.1,
    actors: ["Чон Хи", "Ли Сун", "Пак Джун"],
    genre: ["Исторический", "Драма"],
    imageFilm: "https://example.com/king_and_i.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Вера в чудо",
    id: "faith_in_miracles",
    year: 2021,
    description:
      "Молодая женщина в поисках смысла жизни находит невероятное чудо и становится частью новой реальности.",
    rateIMDB: 7.7,
    rateKinopoisk: 7.5,
    actors: ["Ли Джи-сан", "Юн Се-ри", "Пак Кён"],
    genre: ["Фэнтези", "Драма"],
    imageFilm: "https://example.com/faith_in_miracles.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Небо в глазах",
    id: "sky_in_eyes",
    year: 2020,
    description: "Дорама о том, как любовь и доверие могут изменить наш взгляд на мир и сделать нас сильнее.",
    rateIMDB: 8.0,
    rateKinopoisk: 7.8,
    actors: ["Чо Ён-ха", "Юн Ми", "Пак Жи"],
    genre: ["Романтика", "Драма"],
    imageFilm: "https://example.com/sky_in_eyes.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },

  {
    name: "Окончание пути",
    id: "end_of_the_road",
    year: 2020,
    description: "Женщина, чья жизнь перевернулась, сталкивается с последствиями трудных решений и борьбы за счастье.",
    rateIMDB: 7.5,
    rateKinopoisk: 7.4,
    actors: ["Ли Хи", "Пак Тэ", "Чо Мин"],
    genre: ["Драма", "Семейный"],
    imageFilm: "https://example.com/end_of_the_road.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Забытые слова",
    id: "forgotten_words",
    year: 2017,
    description: "Драма о женщине, которая теряет память и начинает искать ответы на вопросы о своём прошлом.",
    rateIMDB: 7.6,
    rateKinopoisk: 7.5,
    actors: ["Пак Сон", "Чон Джи", "Юн Тэ"],
    genre: ["Драма", "Мистика"],
    imageFilm: "https://example.com/forgotten_words.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Половина сердца",
    id: "half_heart",
    year: 2019,
    description:
      "Драма о мужчине, который после трагической утраты пытается найти свою половину и восстановить утраченную любовь.",
    rateIMDB: 7.7,
    rateKinopoisk: 7.6,
    actors: ["Чо Мин-джун", "Ким Со-ран", "Пак И"],
    genre: ["Романтика", "Драма"],
    imageFilm: "https://example.com/half_heart.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Тот, кто защитит",
    id: "the_one_who_protects",
    year: 2020,
    description:
      "История о женщине, которая становится мишенью для преследователей, но находит защиту в лице неожиданных союзников.",
    rateIMDB: 7.8,
    rateKinopoisk: 7.7,
    actors: ["Ким Ю", "Чон Хун", "Пак Джи"],
    genre: ["Триллер", "Драма", "Мистика"],
    imageFilm: "https://example.com/the_one_who_protects.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Последняя жизнь",
    id: "last_life",
    year: 2019,
    description:
      "Дорама о человеке, который после смерти возвращается в новый мир, чтобы завершить незаконченные дела.",
    rateIMDB: 7.9,
    rateKinopoisk: 7.8,
    actors: ["Пак Су", "Ли Джи-ван", "Чо Юн"],
    genre: ["Фэнтези", "Драма"],
    imageFilm: "https://example.com/last_life.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Под поверхностью",
    id: "beneath_the_surface",
    year: 2020,
    description: "Драма, в которой главный герой раскрывает тайны, скрытые под поверхностью нормальной жизни.",
    rateIMDB: 7.6,
    rateKinopoisk: 7.5,
    actors: ["Чон Хи-джи", "Ли Чон-ха", "Пак Мин"],
    genre: ["Триллер", "Драма"],
    imageFilm: "https://example.com/beneath_the_surface.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "По ту сторону мечты",
    id: "beyond_the_dream",
    year: 2018,
    description: "Дорама о человеке, который стремится достичь своей мечты, несмотря на все преграды и препятствия.",
    rateIMDB: 7.8,
    rateKinopoisk: 7.7,
    actors: ["Чон Си-ю", "Юн Мин", "Ким Сон"],
    genre: ["Драма", "Романтика"],
    imageFilm: "https://example.com/beyond_the_dream.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Звезда в облаках",
    id: "star_in_the_clouds",
    year: 2019,
    description: "История о том, как любовь и вера могут дать силу, чтобы преодолеть любые трудности.",
    rateIMDB: 8.0,
    rateKinopoisk: 7.9,
    actors: ["Ким Су", "Пак Чжон", "Ли Хун"],
    genre: ["Романтика", "Драма"],
    imageFilm: "https://example.com/star_in_the_clouds.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Светлое будущее",
    id: "bright_future",
    year: 2020,
    description: "Дорама о том, как человек, переживший множество испытаний, стремится построить светлое будущее.",
    rateIMDB: 7.5,
    rateKinopoisk: 7.4,
    actors: ["Пак Юн", "Чон Ки", "Ли Су"],
    genre: ["Драма", "Семейный"],
    imageFilm: "https://example.com/bright_future.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
  {
    name: "Рискованная игра",
    id: "risky_game",
    year: 2020,
    description:
      "Молодая женщина сталкивается с неожиданными опасностями, когда начинает играть в рискованную игру на любовь.",
    rateIMDB: 7.7,
    rateKinopoisk: 7.6,
    actors: ["Ли Чжин", "Пак Чжун-ха", "Чо Ын"],
    genre: ["Романтика", "Драма", "Триллер"],
    imageFilm: "https://example.com/risky_game.jpg",
    favorite: false,
    watchLater: false,
    yourRate: null,
  },
]
