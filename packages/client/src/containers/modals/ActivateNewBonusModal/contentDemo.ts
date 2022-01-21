type Bonuses = {
  id: string;
  type: string;
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

export const sizeBonus: Record<string, string> = {
  b100: '+100%',
  b1000: '+150%',
};

export const quanityDeposit: Record<string, string> = {
  b100: '100−200',
  b1000: '1000−2000',
};
