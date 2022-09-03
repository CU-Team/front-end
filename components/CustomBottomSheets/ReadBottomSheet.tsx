import React from 'react';
import styled from 'styled-components';
import BottomSheet from '../BottomSheet';
import type { BottomSheetProps } from '../BottomSheet';

interface ReadBottomSheetProps extends BottomSheetProps {}

const ReadBottomSheet: React.FC<ReadBottomSheetProps> = ({ ...props }) => {
  return (
    <BottomSheet {...props}>
      <StyledWrapper>ReadBottomSheet</StyledWrapper>
    </BottomSheet>
  );
};

export default ReadBottomSheet;

const StyledWrapper = styled.div`
  height: 80vh;
`;
