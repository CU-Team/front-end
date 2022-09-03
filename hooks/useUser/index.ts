import { useEffect } from 'react';
import { getUserAPI } from '~/api/user';
import { useRecoilState } from 'recoil';
import { UserAtom } from '@hooks/useUser/atoms';
import type { AxiosResponse } from 'axios';
import type { UserType } from '@hooks/useUser/type';

//todo: userId 받아서 넣기
const useUser = () => {
  const [user, setUser] = useRecoilState(UserAtom);
  useEffect(() => {
    const get = async () => {
      const res: AxiosResponse = await getUserAPI(1);
      const { data }: { data: UserType } = res;
      setUser(data);
      return res;
    };
    get();
  }, []);

  return {
    user,
  };
};

export default useUser;
