import React from 'react';
import styled from 'styled-components';
import useKakaoMap from '@hooks/useKakaoMap';
import useWatchLocation from '@hooks/useWatchGeolocation';

interface Props {
  size?: { width: number; height: number };
}

const KakaoMap: React.FC<Props> = props => {
  const { size } = props;

  const { location } = useWatchLocation();

  useKakaoMap(location);

  return <StyledWrapper id={'map'} {...size} />;
};
//todo: 필요한 width, height 에 따라 변경
const StyledWrapper = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => width ?? 500}px;
  height: ${({ height }) => height ?? 500}px;
`;

export default KakaoMap;
