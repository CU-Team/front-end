import React, { useEffect } from 'react';
import styled from 'styled-components';
import useKakaoMap from '@hooks/useKakaoMap';
import useWatchLocation from '@hooks/useWatchGeolocation';
import useArticles from '@hooks/useArticles';
import type { LocationType } from '@hooks/useGeolocation/types';

interface Props {
  size?: { width: number; height: number };
  openArticle: (body: { articleId: number }) => void;
  handleSelectedAddData: (body: {
    keyword: string;
    address: string;
    location: LocationType;
  }) => void;
}

const KakaoMap: React.FC<Props> = props => {
  const { size, openArticle, handleSelectedAddData } = props;

  const onClickOverlay = (id: number) => {
    if (currentAddress && currentKeyword) {
      openArticle({
        articleId: id,
      });
    }
  };

  const { location: currentLocation } = useWatchLocation();

  const { filteredArticles: articles } = useArticles();
  const { currentKeyword, currentAddress } = useKakaoMap(
    articles,
    onClickOverlay,
    currentLocation,
  );

  useEffect(() => {
    if (currentAddress && currentKeyword && currentLocation) {
      handleSelectedAddData({
        keyword: currentKeyword,
        location: currentLocation,
        address: currentAddress,
      });
    }
  }, [currentKeyword, currentAddress, currentLocation]);

  return <StyledWrapper id={'map'} {...size} />;
};

const StyledWrapper = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => width ?? 500}px;
  height: ${({ height }) => height ?? 500}px;
`;

export default KakaoMap;
