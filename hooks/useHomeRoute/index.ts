import { useState } from 'react';
import type { HomeRouteEnum } from '@hooks/useHomeRoute/constatns';

const useHomeRoute = () => {
  const [openedRoute, setOpenedRoute] = useState<HomeRouteEnum | null>(null);

  const open = (route: HomeRouteEnum) => {
    setOpenedRoute(route);
  };
  const close = () => {
    setOpenedRoute(null);
  };

  return {
    openedRoute,
    open,
    close,
  };
};

export default useHomeRoute;
