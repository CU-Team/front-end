import type { ArticleType } from '@hooks/useKakaoMap/types';
import { useCallback, useEffect, useState } from 'react';
import useHomeTab from '@hooks/useTab/useHomeTab';
import { HomeTabEnum } from '@components/Home/constants';
import { getArticlesAPI } from '~/api/article';
import type { AxiosResponse } from 'axios';
import useUser from '@hooks/useUser';
import { useRecoilState } from 'recoil';
import { ArticleArrayAtom } from '@hooks/useArticles/atoms';

const useArticles = () => {
  const { selected } = useHomeTab();

  const [articles, setArticles] = useRecoilState(ArticleArrayAtom);
  const [filteredArticles, setFilteredArticles] = useState<Array<ArticleType>>(
    [],
  );
  const { user } = useUser();

  const getArticles = useCallback(async () => {
    const res: AxiosResponse = await getArticlesAPI();
    const { status } = res;
    if (status === 200) {
      const { data }: { data: Array<ArticleType> } = res;
      setArticles(data);
    }
  }, []);

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      if (selected === HomeTabEnum.TOTAL) {
        setFilteredArticles(articles);
      } else {
        setFilteredArticles(
          articles.filter(value => value.author === user?.username),
        );
      }
    }
  }, [selected, articles]);
  return {
    articles,
    filteredArticles,
  };
};

export default useArticles;
