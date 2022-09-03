import React from 'react';
import styled from 'styled-components';
import BottomSheet from '../BottomSheet';
import type { BottomSheetProps } from '../BottomSheet';

interface WriteBottomSheetProps extends BottomSheetProps {}

const WriteBottomSheet: React.FC<WriteBottomSheetProps> = ({ ...props }) => {
  return (
    <BottomSheet {...props}>
      <StyledWrapper>WriteBottomSheet</StyledWrapper>
    </BottomSheet>
  );
};

export default WriteBottomSheet;

const StyledWrapper = styled.div`
  height: 80vh;
`;
