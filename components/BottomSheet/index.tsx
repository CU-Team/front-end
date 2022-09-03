import type { ReactNode } from 'react';
import { useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '~/libs/themes';

export interface BottomSheetProps {
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode[] | ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  children,
  open = false,
  onClose,
}) => {
  return (
    <StyledWrapper
      className={`common-container ${open ? `open` : ``}`}
      onClick={onClose}
    >
      <div className="common-container dimmed"> </div>
      <div
        className={`common-container wrapper`}
        onClick={e => e.stopPropagation()}
      >
        <div className="header">
          <div className="close-btn"> </div>
        </div>
        {children}
      </div>
    </StyledWrapper>
  );
};

export default BottomSheet;

const StyledWrapper = styled.div`
  .dimmed {
    position: fixed;
    opacity: 0;
    background: rgba(0, 0, 0, 0.4);
    transition: opacity 0.15s ease-out;
    z-index: 5;
  }
  .wrapper {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${themedPalette.gray0};
    transform: translateY(100%);
    transition: transform 0.15s ease-out;
    z-index: 5;
  }
  &.open {
    .dimmed {
      opacity: 1;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
    }
    .wrapper {
      transform: translateY(0%);
    }
  }
`;
