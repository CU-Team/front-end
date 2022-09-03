import { useEffect } from 'react';
import useScript from '@hooks/useScript';
import type { LocationType } from '@hooks/useGeolocation/types';
import { INIT_LATITUDE, INIT_LONGITUDE } from '@hooks/useGeolocation/constants';

const useKakaoMap = (currentLocation?: LocationType) => {
  const { isLoaded: mapLoaded } = useScript(
    `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      process?.env.NEXT_PUBLIC_KAKAOTOKEN ?? ''
    }&autoload=false`,
  );

  useEffect(() => {
    if (!mapLoaded) {
      return;
    } else {
      const { kakao } = window;
      console.log('kakao:', currentLocation);

      kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(
            currentLocation?.latitude ?? INIT_LATITUDE,
            currentLocation?.longitude ?? INIT_LONGITUDE,
          ),
          level: 2,
        };

        if (container) {
          const map = new kakao.maps.Map(container, options);

          const markerPosition = new kakao.maps.LatLng(
            currentLocation?.latitude ?? INIT_LATITUDE,
            currentLocation?.longitude ?? INIT_LONGITUDE,
          );
          const marker = new kakao.maps.Marker({
            position: markerPosition,
          });
          // const iwContent = '현재위치'; // 인포윈도우에 표시할 내용
          // const iwRemoveable = false;
          // const infowindow = new kakao.maps.InfoWindow({
          //   content: iwContent,
          //   removable: iwRemoveable,
          // });
          //
          // infowindow.open(map, marker);
          marker.setMap(map);
        }
      });
    }
  }, [mapLoaded]);
};

export default useKakaoMap;
