import CamelCase from '@utils/camelCase';
import { API } from '~/api/api';

export const postUserAPI = async (body: {
  username: string;
  email: string;
}) => {
  try {
    const res = await API.post('users/', body);
    return CamelCase(res);
  } catch (e: any) {
    return CamelCase(e.response);
  }
};

export const getUserAPI = async (id: number) => {
  try {
    const res = await API.get(`users/${id}/`);
    return CamelCase(res);
  } catch (e: any) {
    return CamelCase(e.response);
  }
};
