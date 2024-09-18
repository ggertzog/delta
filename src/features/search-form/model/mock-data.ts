// Mock-Data `content` constant is an array of objects that adhere to the `Content` interface.
// Used to define the structure and initial data for a list of content items in search-form

export interface IContent {
  id: number;
  link: string;
  name: string;
  subname: string;
}

export const content: IContent[] = [
  {
    id: 1,
    link: '#',
    name: 'Доктор Мом',
    subname: '',
  },
  {
    id: 2,
    link: '#',
    name: 'Доктор Мом',
    subname: 'Таблетки',
  },
  {
    id: 3,
    link: '#',
    name: 'Доктор Мом',
    subname: 'Мазь',
  },
  {
    id: 4,
    link: '#',
    name: 'Доктор Мом',
    subname: 'Спрей',
  },
  {
    id: 5,
    link: '#',
    name: 'Доктор Мом',
    subname: 'Порошок',
  },
  {
    id: 6,
    link: '#',
    name: 'Анвимакс',
    subname: 'Таблетки',
  },
  {
    id: 7,
    link: '#',
    name: 'Анвимакс',
    subname: 'Капли',
  },
  {
    id: 8,
    link: '#',
    name: 'Анвимакс',
    subname: 'Пастилки',
  },
];
