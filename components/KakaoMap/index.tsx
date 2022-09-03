import type { RefObject } from 'react';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import useKakaoMap from '@hooks/useKakaoMap';
import useWatchLocation from '@hooks/useWatchGeolocation';
import useArticles from '@hooks/useArticles';
import type { LocationType } from '@hooks/useGeolocation/types';

interface Props {
  size?: { width: number; height: number };
  openArticle: (body: { articleId: number }) => void;
  handleSelectedAddData: (body: { keyword: string; address: string }) => void;
  currentLocationRef: RefObject<LocationType | null>;
}

const KakaoMap: React.FC<Props> = props => {
  const { size, openArticle, handleSelectedAddData, currentLocationRef } =
    props;

  const onClickOverlay = (id: number) => {
    if (currentAddress && currentKeyword) {
      openArticle({
        articleId: id,
      });
    }
  };

  const { location: currentLocation } = useWatchLocation();

  const { filteredArticles: articles, processArticle } = useArticles();
  const { currentKeyword, currentAddress } = useKakaoMap(
    articles,
    onClickOverlay,
    processArticle,
    currentLocation,
  );

  useEffect(() => {
    if (currentAddress && currentKeyword && currentLocation) {
      handleSelectedAddData({
        keyword: currentKeyword,
        address: currentAddress,
      });
    }
  }, [currentKeyword, currentAddress]);

  useEffect(() => {
    // @ts-ignore
    currentLocationRef.current = currentLocation;
  }, [currentLocation]);

  return <StyledWrapper id={'map'} {...size} />;
};

const StyledWrapper = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => width ?? 500}px;
  height: ${({ height }) => height ?? 500}px;
`;

export default KakaoMap;
