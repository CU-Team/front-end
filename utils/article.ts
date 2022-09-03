import type {
  ArticleType,
  ProcessedArticleType,
} from '@hooks/useKakaoMap/types';

export const processArticle: (
  articles: Array<ArticleType>,
) => Array<ProcessedArticleType> = articleArray => {
  const keywords = [
    // @ts-ignore
    ...new Set(
      articleArray.map((article: ArticleType) => {
        return article.position;
      }),
    ),
  ];
  const arr: Array<ProcessedArticleType> = [];
  keywords.forEach(value => {
    arr.push({
      data: articleArray.filter(article => article.position === value),
      position: value,
    });
  });
  return arr;
};
