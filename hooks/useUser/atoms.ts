import { atom } from 'recoil';
import type { UserType } from '@hooks/useUser/type';
import { recoilLocalStorageEffect } from '@utils/recoil';

export const UserAtom = atom<UserType | null>({
  default: null,
  key: 'UserAtom',
  effects: [recoilLocalStorageEffect('userValue')],
});
