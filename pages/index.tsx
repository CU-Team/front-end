import React from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import HomeComponent from '@components/Home';
import useUser from '@hooks/useUser';

const Home: NextPage = () => {
  useUser();
  return (
    <StyledWrapper>
      <HomeComponent />
    </StyledWrapper>
  );
};

export default Home;

const StyledWrapper = styled.div``;
