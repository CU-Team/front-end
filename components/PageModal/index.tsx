import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '~/libs/themes';

export interface PageModalProps {
  open?: boolean;
  onClose?: () => void;
  direction?: 'right' | 'bottom';
  children?: ReactNode[] | ReactNode;
}

const PageModal: React.FC<PageModalProps> = ({
  children,
  onClose,
  direction = 'right',
  open = false,
}) => {
  return (
    <StyledWrapper
      className={`common-container ${open ? `open` : ``}`}
      onClick={onClose}
    >
      <div className="common-container dimmed"> </div>
      <div
        className={`common-container wrapper ${direction}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </StyledWrapper>
  );
};

export default PageModal;

const StyledWrapper = styled.div`
  .dimmed {
    position: absolute;
    opacity: 0;
    background: rgba(0, 0, 0, 0.4);
    transition: opacity 0.15s ease-out;
    z-index: 3;
  }
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${themedPalette.gray0};
    transition: transform 0.15s ease-out;
    overflow-y: scroll;
    z-index: 3;
    &.right {
      transform: translateX(100%);
    }
    &.bottom {
      transform: translateY(100%);
    }
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
      &.right {
        transform: translateX(0%);
      }
      &.bottom {
        transform: translateY(0%);
      }
    }
  }
`;
