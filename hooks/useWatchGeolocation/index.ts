import { useState, useEffect, useRef } from 'react';
import type { LocationType } from '@hooks/useGeolocation/types';
import { INIT_LATITUDE, INIT_LONGITUDE } from '@hooks/useGeolocation/constants';

const useWatchLocation = (options = {}) => {
  // 내 위치 정보 저장
  const [location, setLocation] = useState<LocationType>({
    longitude: INIT_LONGITUDE,
    latitude: INIT_LATITUDE,
  });
  // 에러 메세지 저장
  const [error, setError] = useState<string>('');
  // watch 인스턴스를 취소할 수 있도록 Geolocation의 `watchPosition`에서 반환된 ID를 저장합니다.
  const locationWatchId = useRef<number | null>(null);

  // Geolocation의 `watchPosition` 메소드에 대한 성공 callback 핸들러
  const handleSuccess: PositionCallback = pos => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  // Geolocation의 `watchPosition` 메소드에 대한 실패 callback 핸들러
  const handleError: PositionErrorCallback = err => {
    setError(err.message);
  };

  // 저장된 `watchPosition` ID를 기반으로 감시 인스턴스를 지웁니다.
  const cancelLocationWatch = () => {
    const { geolocation } = navigator;

    if (locationWatchId.current && geolocation) {
      geolocation.clearWatch(locationWatchId.current);
    }
  };

  useEffect(() => {
    const { geolocation } = navigator;

    // 사용된 브라우저에서 지리적 위치(Geolocation)가 정의되지 않은 경우 오류로 처리합니다.
    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    // Geolocation API로 위치 감시 시작
    locationWatchId.current = geolocation.watchPosition(
      handleSuccess,
      handleError,
      options,
    );

    // React가 사용된 구성 요소를 마운트 해제할 때 위치 감시 인스턴스를 지웁니다.
    return cancelLocationWatch;
  }, [options]);

  return { location, cancelLocationWatch, error };
};

export default useWatchLocation;
