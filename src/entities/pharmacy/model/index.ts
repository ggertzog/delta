// Mocking data for the application

export type TPharmacy = {
  id: number;
  photo: string;
  name: string;
  address: string;
  phone: string;
  workTime: string;
  productsPrice: number;
};

export const pharmacies: Array<TPharmacy> = [
  {
    id: 0,
    photo: 'src/entities/pharmacy/assets/zdravcity.png',
    name: 'ЗдравСити',
    address: 'пр. Испытателей, 36',
    phone: '983-49-59',
    workTime: 'ПН-ПТ с 8 до 23, СБ-ВС с 10 до 22',
    productsPrice: 812,
  },
  {
    id: 1,
    photo: 'src/entities/pharmacy/assets/vita.png',
    name: 'Вита-Экспресс',
    address: 'Байконурская 23А',
    phone: '388-28-15',
    workTime: 'с 8 до 21 ежедневно',
    productsPrice: 834,
  },
  {
    id: 2,
    photo: 'src/entities/pharmacy/assets/planet.png',
    name: 'Планета Здоровья',
    address: 'Невский пр., 123',
    phone: '267-38-45',
    workTime: 'круглосуточно',
    productsPrice: 880,
  },
];
