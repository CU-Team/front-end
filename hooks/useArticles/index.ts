import type { OverlayType } from '@hooks/useKakaoMap/types';
import { INIT_LATITUDE, INIT_LONGITUDE } from '@hooks/useGeolocation/constants';
import { useEffect, useState } from 'react';
import useHomeTab from '@hooks/useTab/useHomeTab';
import { HomeTabEnum } from '@components/Home/constants';

const useArticles = () => {
  const { selected } = useHomeTab();

  const temp: Array<OverlayType> = [
    {
      id: 0,
      isMine: true,
      count: 12,
      latitude: INIT_LATITUDE + 0.00024,
      longitude: INIT_LONGITUDE,
    },
    {
      id: 1,
      isMine: false,
      count: 6,
      latitude: INIT_LATITUDE,
      longitude: INIT_LONGITUDE + 0.001,
    },
    {
      id: 2,
      isMine: true,
      count: 1,
      latitude: INIT_LATITUDE + 0.0009,
      longitude: INIT_LONGITUDE,
    },
    {
      id: 3,
      isMine: true,
      count: 1,
      latitude: INIT_LATITUDE,
      longitude: INIT_LONGITUDE + 0.0005,
    },
  ];

  const [articles, setArticles] = useState<Array<OverlayType>>(temp);
  const [filteredArticles, setFilteredArticles] =
    useState<Array<OverlayType>>(temp);

  useEffect(() => {
    if (selected === HomeTabEnum.TOTAL) {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(value => value.isMine));
    }
  }, [selected, articles]);
  return {
    articles,
    filteredArticles,
  };
};

export default useArticles;