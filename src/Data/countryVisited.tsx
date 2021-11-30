type countryType = {
  id: number,
  country: string,
  description: string,
  countryUrl: string,
}

const countryList:countryType [] = [
  {
    id: 1,
    country: 'Lavia',
    description: 'woompa lumpa',
    countryUrl: 'https://picsum.photos/200/300?random=1',

  },
  {
    id: 2,
    country: 'Usa',
    description: 'lumpa woompa ',
    countryUrl: 'https://picsum.photos/200/300?random=2',

  },
  {
    id: 3,
    country: 'Estonia',
    description: 'Urrrrrrrrrrrrmassss',
    countryUrl: 'https://picsum.photos/200/300?random=9',

  },
];

export default countryList;
