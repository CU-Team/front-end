import { useEffect } from 'react';

const useKakaoSignIn = () => {
  const init = () => {
    const { Kakao }: any = window;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (typeof Kakao !== 'undefined' && !Kakao.isInitialized()) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      Kakao.init(process.env.NEXT_PUBLIC_KAKAOTOKEN);
    }
  };

  const signIn = () => {
    const { Kakao }: any = window;
    const redirectDomain: string = process.env.NEXT_PUBLIC_DOMAIN ?? '';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    Kakao.Auth.authorize({
      redirectUri: `${redirectDomain}/auth/auth/kakao/callback`,
      state: `{"redirect": "${window.location.href}"}`,
      throughTalk: true,
    });
  };

  useEffect(() => {
    init();
  }, []);

  return {
    signIn,
  };
};

export default useKakaoSignIn;
