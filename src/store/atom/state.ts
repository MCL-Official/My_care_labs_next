import { atom, selector } from 'recoil';


export const cardTitleState = atom<string>({
  key: 'cardTitleState',
  default: 'sdkhvbvbsshjv', 
});

export const cardData = selector<string>({
  key: 'cardData', 
  get: ({ get }) => {
    const cardTitle = get(cardTitleState); 
    return `Derived Data: ${cardTitle}`; 
  },
});
