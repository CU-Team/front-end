import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CloseIcon } from '~/assets/icons';
import DislikeIcon from '~/assets/icons/DislikeIcon';
import LikeIcon from '~/assets/icons/LikeIcon';
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
        <div className={`list`} onClick={onClose}>
          <LikeIcon width={140} height={140} />
          <DislikeIcon width={140} height={140} />
        </div>
      </StyledWrapper>
    </BottomSheet>
  );
};

export default EmojiBottomSheet;

const StyledWrapper = styled.div`
  height: 240px;
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
  .list {
    display: flex;
    justify-content: center;
    cursor: pointer;
    gap: 30px;
  }
`;
