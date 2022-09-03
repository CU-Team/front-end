import { useCallback, useEffect, useState } from 'react';
import useScript from '@hooks/useScript';
import type { LocationType } from '@hooks/useGeolocation/types';
import { INIT_LATITUDE, INIT_LONGITUDE } from '@hooks/useGeolocation/constants';
import { MINE } from '@components/Home/Article/constants';

const useKakaoMap = (currentLocation?: LocationType) => {
  const { isLoaded: mapLoaded } = useScript(
    `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      process?.env.NEXT_PUBLIC_KAKAOTOKEN ?? ''
    }&autoload=false&libraries=services`,
  );

  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [currentKeyword, setCurrentKeyword] = useState<string | null>(null);

  const searchAddressFromCoords = useCallback(
    (coords: kakao.maps.LatLng) => {
      if (!mapLoaded) {
        return null;
      } else {
        const geocoder = new kakao.maps.services.Geocoder();

        return geocoder.coord2Address(
          coords.getLng(),
          coords.getLat(),
          value => {
            if (value.length > 0) {
              setCurrentAddress(value[0].road_address?.address_name ?? null);
            } else {
              alert('현재 위치의 주소를 가져올 수 없습니다.');
            }
          },
        );
      }
    },
    [mapLoaded],
  );

  const getPlaceName = useCallback(
    (keyword: string) => {
      if (mapLoaded) {
        const ps = new kakao.maps.services.Places();

        // 키워드로 장소를 검색합니다
        ps.keywordSearch(keyword, value => {
          if (value.length > 0) {
            setCurrentKeyword(value[0].place_name ?? null);
          } else {
            setCurrentKeyword('현재 위치를 가져올 수 없습니다.');
          }
        });
      } else {
        return null;
      }
    },
    [mapLoaded, currentAddress],
  );

  useEffect(() => {
    if (!mapLoaded) {
      return;
    } else {
      const { kakao } = window;

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
          const imageSrc = '/images/my_location.png';
          const imageSize = new kakao.maps.Size(24, 29);

          const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          const marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
          });

          searchAddressFromCoords(markerPosition);
          const position = new kakao.maps.LatLng(
            INIT_LATITUDE + 0.002,
            INIT_LONGITUDE,
          );
          // 커스텀 오버레이를 생성합니다
          const customOverlay = new kakao.maps.CustomOverlay({
            position: position,
            content: MINE,
            xAnchor: 0.3,
            yAnchor: 0.91,
          });
          customOverlay.setMap(map);

          marker.setMap(map);
        }
      });
    }
  }, [mapLoaded]);

  useEffect(() => {
    if (currentAddress) {
      getPlaceName(currentAddress);
    }
  }, [currentAddress]);

  useEffect(() => {
    console.log(currentKeyword);
  }, [currentKeyword]);
};

export default useKakaoMap;
