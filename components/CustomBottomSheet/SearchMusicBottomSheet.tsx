import React from 'react';
import styled from 'styled-components';
import type { BottomSheetProps } from '../BottomSheet';
import BottomSheet from '../BottomSheet';

interface SearchMusicBottomSheetProps extends BottomSheetProps {}

const SearchMusicBottomSheet: React.FC<SearchMusicBottomSheetProps> = ({
  ...props
}) => {
  return (
    <BottomSheet {...props}>
      <StyledWrapper>
        <div className="header">
          <input type="text" />
        </div>
      </StyledWrapper>
    </BottomSheet>
  );
};

export default SearchMusicBottomSheet;

const StyledWrapper = styled.div`
  height: 90vh;
`;
