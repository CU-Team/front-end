import { useCallback, useEffect, useRef, useState } from 'react';
import useScript from '@hooks/useScript';
import type { LocationType } from '@hooks/useGeolocation/types';
import { INIT_LATITUDE, INIT_LONGITUDE } from '@hooks/useGeolocation/constants';
import { MINE, YOURS } from '@components/Home/Article/constants';
import type {
  ArticleType,
  ProcessedArticleType,
} from '@hooks/useKakaoMap/types';
import useUser from '@hooks/useUser';

const useKakaoMap = (
  articles: Array<ArticleType>,
  onClickOverlay: (id: number) => void,
  processArticles: (
    articles: Array<ArticleType>,
  ) => Array<ProcessedArticleType>,
  currentLocation?: LocationType,
) => {
  const { isLoaded: mapLoaded } = useScript(
    `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      process?.env.NEXT_PUBLIC_KAKAOTOKEN ?? ''
    }&autoload=false&libraries=services`,
  );
  /**현재 주소*/
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  /**현재 키워드*/
  const [currentKeyword, setCurrentKeyword] = useState<string | null>(null);

  const changedLocation = useRef<LocationType | null>(null);

  const [clickedId, setClickedId] = useState<number | null>(null);

  const { user } = useUser();

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
              setCurrentAddress(null);
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
            setCurrentKeyword(null);
          }
        });
      } else {
        return null;
      }
    },
    [mapLoaded, currentAddress],
  );

  useEffect(() => {
    if (!mapLoaded || !user) {
      return;
    } else {
      const { kakao } = window;

      kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(
            changedLocation.current?.latitude ??
              currentLocation?.latitude ??
              INIT_LATITUDE,
            changedLocation.current?.longitude ??
              currentLocation?.longitude ??
              INIT_LONGITUDE,
          ),
          level: 2,
        };

        if (container) {
          const map = new kakao.maps.Map(container, options);
          kakao.maps.event.addListener(map, 'dragend', () => {
            const center = map.getCenter();
            changedLocation.current = {
              longitude: center.getLng(),
              latitude: center.getLat(),
            };
          });
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

          const processed = processArticles(articles);

          processed.forEach((article: ProcessedArticleType) => {
            const firstItem = article.data[0];
            const position = new kakao.maps.LatLng(
              firstItem.latitude,
              firstItem.longitude,
            );
            const customOverlay = new kakao.maps.CustomOverlay({
              position: position,
              content: firstItem.author === user.username ? MINE : YOURS,
              xAnchor: 0.3,
              yAnchor: 0.91,
            });
            customOverlay.setMap(map);
            const overLays = document.getElementsByClassName('article');
            for (let i = 0; i < overLays.length; i++) {
              overLays[overLays.length - 1].setAttribute(
                'id',
                String(firstItem.no),
              );
              const numberWrapper =
                overLays[overLays.length - 1].getElementsByClassName(
                  'number-wrapper',
                );
              for (let j = 0; j < numberWrapper.length; j++) {
                if (article.data.length <= 1) {
                  //@ts-ignore
                  numberWrapper[j].style.display = 'none';
                } else {
                  const body = numberWrapper[j].getElementsByClassName('body2');
                  for (let k = 0; k < body.length; k++) {
                    body[k].innerHTML = String(article.data.length);
                  }
                }
              }
            }
          });
          const overLays = document.getElementsByClassName('article');
          for (let i = 0; i < overLays.length; i++) {
            //@ts-ignore
            overLays[i].onclick = () => {
              setClickedId(Number(overLays[i].id));
            };
          }
          marker.setMap(map);
        }
      });
    }
  }, [mapLoaded, articles, user]);

  useEffect(() => {
    if (currentAddress) {
      getPlaceName(currentAddress);
    }
  }, [currentAddress]);

  useEffect(() => {
    if (currentAddress && currentKeyword && clickedId !== null) {
      onClickOverlay(clickedId);
      setClickedId(null);
    }
  }, [currentAddress, currentKeyword, clickedId]);

  return {
    currentKeyword,
    currentAddress,
  };
};

export default useKakaoMap;
