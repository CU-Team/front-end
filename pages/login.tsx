import React from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import Login from '@components/Login';

const LoginPage: NextPage = () => {
  return (
    <StyledWrapper>
      <Login />
    </StyledWrapper>
  );
};

export default LoginPage;

const StyledWrapper = styled.div``;
