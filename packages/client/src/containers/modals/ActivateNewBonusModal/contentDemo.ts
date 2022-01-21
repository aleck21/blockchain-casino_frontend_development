export type Bonuses = {
  id: string;
  sizeBonus: string;
  deposit: string;
  isNew: boolean;
}[];

export const bonuses: Bonuses = [
  {
    id: 'aaaa',
    sizeBonus: '+100%',
    deposit: '100−200',
    isNew: true,
  },
  {
    id: 'bbbbb',
    sizeBonus: '+150%',
    deposit: '1000−2000',
    isNew: true,
  },
  {
    id: 'ccccc',
    sizeBonus: '+100%',
    deposit: '100−200',
    isNew: false,
  },
];
