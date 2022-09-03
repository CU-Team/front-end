import React from 'react';
import styled from 'styled-components';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="container">{children}</div>
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
  & > .container {
    max-width: 375px;
    width: 100%;
    margin: 0 auto;
  }
`;
