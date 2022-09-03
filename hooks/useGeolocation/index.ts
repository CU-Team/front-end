import { useEffect, useState } from 'react';
import type { LocationType } from '@hooks/useGeolocation/types';
import { INIT_LATITUDE, INIT_LONGITUDE } from '@hooks/useGeolocation/constants';

const useGeolocation = () => {
  const [location, setLocation] = useState<LocationType>({
    longitude: INIT_LONGITUDE,
    latitude: INIT_LATITUDE,
  });

  const currentLocation = () => {
    let tempLocation: LocationType = {
      longitude: INIT_LONGITUDE,
      latitude: INIT_LATITUDE,
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        tempLocation = { longitude: lon, latitude: lat };
      });
    } else {
      tempLocation = { longitude: INIT_LONGITUDE, latitude: INIT_LATITUDE };
    }
    return tempLocation;
  };

  useEffect(() => {
    setLocation(currentLocation());
  }, []);

  return { location, currentLocation };
};

export default useGeolocation;
