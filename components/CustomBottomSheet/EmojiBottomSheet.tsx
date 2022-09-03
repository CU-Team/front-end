import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CloseIcon } from '~/assets/icons';
import type { BottomSheetProps } from '../BottomSheet';
import BottomSheet from '../BottomSheet';

interface EmojiBottomSheetProps extends BottomSheetProps {}

const EmojiBottomSheet: React.FC<EmojiBottomSheetProps> = ({
  open,
  onClose,
  ...props
}) => {
  return (
    <BottomSheet open={open} onClose={onClose} {...props}>
      <StyledWrapper>
        <div className="header">
          <div> </div>
          <a className="close-btn" onClick={onClose}>
            <CloseIcon width={24} height={24} />
          </a>
        </div>
        <div className={`list`}> </div>
      </StyledWrapper>
    </BottomSheet>
  );
};

export default EmojiBottomSheet;

const StyledWrapper = styled.div`
  height: 40vh;
  position: relative;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    gap: 16px;
    .close-btn {
    }
  }
`;
