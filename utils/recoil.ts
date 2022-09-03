export const recoilLocalStorageEffect =
  (key: string) =>
  ({
    setSelf,
    onSet,
  }: {
    setSelf: (any: any) => any;
    onSet: (any: any) => any;
  }) => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        if (savedValue != 'undefined' && savedValue.length > 0) {
          setSelf(JSON.parse(savedValue));
        }
      }
      onSet((newValue: any, _: any, isReset: any) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };
