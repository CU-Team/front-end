import CamelCase from '@utils/camelCase';
import { API } from '~/api/api';

export const getArticlesAPI = async () => {
  try {
    const res = await API.get('articles/');
    return CamelCase(res);
  } catch (e: any) {
    return CamelCase(e.response);
  }
};
export const postArticleAPI = async (body: {
  longitude: number;
  latitude: number;
  position: string;
  address: string;
  link: string;
  musicImg: string;
  singer: string;
  content: string;
  music: string;
}) => {
  try {
    const res = await API.post('articles/', body);
    return CamelCase(res);
  } catch (e: any) {
    return CamelCase(e.response);
  }
};
