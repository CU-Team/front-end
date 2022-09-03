import { atom } from 'recoil';
import type { ArticleType } from '@hooks/useKakaoMap/types';

export const ArticleArrayAtom = atom<Array<ArticleType>>({
  default: [],
  key: 'ArticleArray',
});
