// Mocking data for the application

const content = `На 1 пастилку:
Активные вещества:
сухие экстракты, выделенные из:
Солодки голой корней (Glycyrrhiza glabra)...........................................15,0 мг
Имбиря лекарственного корневищ (Zingiber officinale) ………….....10,0 мг
Эмблики лекарственной плодов (Emblica officinalis) ….…................10,0мг
Левоментол…………………………………………………………….7,0 мг
вспомогательные вещества: сахароза 1618,0 мг, декстроза жидкая 1037,0 мг, глицерол 1,5 мг, лимонной
кислоты моногидрат 2,0 мг, метилпарагидроксибензоат 5,0 мг, пропилпарагидроксибензоат 0,5 мг,
ароматизатор мятный (мятная эссенция) 0,1 мг, ароматизатор ананасовый 6, 25 мг, краситель BQ Supra
(смесь красителей бриллиантового голубого 0,0134 мг и хинолина желтого 0,0491 мг) 0,0625 мг.`;

export const products = [
  {
    name: 'Доктор Мом растительные пастилки от кашля',
    quantity: 'Ананас. 20 шт',
    id: 0,
    infoDetails: [
      {
        title: 'Бренд',
        text: 'Доктор Мом',
      },
      {
        title: 'Производитель',
        text: 'Юник Фармасьютикал Лаборатория, Индия',
      },
      {
        title: 'Действующее вещество',
        text: 'Имбирь, Солодки голой, Эмблики лек., Рацементол',
      },
    ],
    instruction: {
      title: 'Инструкция по применению',
      items: [
        {
          title: 'Состав',
          content,
        },
        {
          title: 'Фармакологическое действие',
          content,
        },
        {
          title: 'Применение при беременности и кормлении грудью',
          content,
        },
      ],
    },
  },
  {
    name: 'Доктор Мом растительные пастилки от кашля',
    quantity: 'Ананас. 20 шт',
    id: 1,
    infoDetails: [
      {
        title: 'Бренд',
        text: 'Доктор Мом',
      },
      {
        title: 'Производитель',
        text: 'Юник Фармасьютикал Лаборатория, Индия',
      },
      {
        title: 'Действующее вещество',
        text: 'Имбирь, Солодки голой, Эмблики лек., Рацементол',
      },
    ],
    instruction: {
      title: 'Инструкция по применению',
      items: [
        {
          title: 'Состав',
          content,
        },
        {
          title: 'Фармакологическое действие',
          content,
        },
        {
          title: 'Применение при беременности и кормлении грудью',
          content,
        },
      ],
    },
  },
  {
    name: 'Доктор Мом растительные пастилки от кашля',
    quantity: 'Ананас. 20 шт',
    id: 2,
    infoDetails: [
      {
        title: 'Бренд',
        text: 'Доктор Мом',
      },
      {
        title: 'Производитель',
        text: 'Юник Фармасьютикал Лаборатория, Индия',
      },
      {
        title: 'Действующее вещество',
        text: 'Имбирь, Солодки голой, Эмблики лек., Рацементол',
      },
    ],
    instruction: {
      title: 'Инструкция по применению',
      items: [
        {
          title: 'Состав',
          content,
        },
        {
          title: 'Фармакологическое действие',
          content,
        },
        {
          title: 'Применение при беременности и кормлении грудью',
          content,
        },
      ],
    },
  },
];
