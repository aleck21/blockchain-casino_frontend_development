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
