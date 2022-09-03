import { atom } from 'recoil';
import { recoilLocalStorageEffect } from '@utils/recoil';
import { HomeTabEnum } from '@components/Home/constants';

export const SelectedHomeTabAtom = atom<HomeTabEnum>({
  default: HomeTabEnum.TOTAL,
  key: 'SelectedHomeTabAtom',
  effects: [recoilLocalStorageEffect('SelectedHomeTab')],
});
