import { useEffect } from 'react';
import useTab from '@hooks/useTab';
import { useRecoilState } from 'recoil';
import { SelectedHomeTabAtom } from '@components/Home/atom';
import type { HomeTabEnum } from '@components/Home/constants';

const useHomeTab = (initialValue: HomeTabEnum) => {
  const [recoilValue, setRecoilValue] = useRecoilState(
    SelectedHomeTabAtom(initialValue),
  );
  const { selected: localState, handleSelected } = useTab(initialValue);

  useEffect(() => {
    setRecoilValue(localState);
  }, [localState]);

  return {
    selected: recoilValue,
    handleSelected,
  };
};

export default useHomeTab;
