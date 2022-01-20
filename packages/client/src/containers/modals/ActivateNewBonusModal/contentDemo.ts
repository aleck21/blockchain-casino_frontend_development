type Bonuses = {
  id: string;
  type: 'b100' | 'b1000';
  isNew: boolean;
}[];

export const bonuses: Bonuses = [
  {
    id: 'aaaa',
    type: 'b100',
    isNew: true,
  },
  {
    id: 'bbbbb',
    type: 'b1000',
    isNew: true,
  },
  {
    id: 'ccccc',
    type: 'b100',
    isNew: false,
  },
];

export const sizeBonus = {
  b100: '+100%',
  b1000: '+150%',
};

export const quanityDeposit = {
  b100: '100−200',
  b1000: '1000−2000',
};
