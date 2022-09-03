import { useState } from 'react';

const useTab = <T>(initialValue: T) => {
  const [selected, setSelected] = useState<T>(initialValue);

  const handleSelected = (newSelected: T) => {
    setSelected(newSelected);
  };

  return {
    selected,
    handleSelected,
  };
};

export default useTab;
