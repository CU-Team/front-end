import { useEffect, useState } from 'react';

const useScript = (url: string) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.addEventListener('load', () => setIsLoaded(true));

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [url]);

  return {
    isLoaded,
  };
};

export default useScript;
