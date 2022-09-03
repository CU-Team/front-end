import React from 'react';
import styled from 'styled-components';
import type { ReactNode } from 'react';
import { themedPalette } from '~/libs/themes';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="common-container layout-container">{children}</div>
    </StyledWrapper>
  );
};

export default Layout;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #fafafa;
  & > .layout-container {
    min-height: 100%;
    height: fit-content;
    background-color: ${themedPalette.gray0};
  }
`;
