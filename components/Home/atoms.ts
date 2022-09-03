import { atomFamily } from 'recoil';
import { recoilLocalStorageEffect } from '@utils/recoil';
import type { HomeTabEnum } from '@components/Home/constants';

export const SelectedHomeTabAtom = atomFamily<HomeTabEnum, HomeTabEnum>({
  default: initialValue => initialValue,
  key: 'SelectedHomeTabAtom',
  effects: [recoilLocalStorageEffect('SelectedHomeTab')],
});
