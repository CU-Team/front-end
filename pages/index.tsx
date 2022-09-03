import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import HomeComponent from '@components/Home';
import { getUserAPI, postUserAPI } from '~/api/user';

const Home: NextPage = () => {
  useEffect(() => {
    const post = async () => {
      await postUserAPI({ username: 'jiwoo', email: 'jw6343@unithon.com' });
    };
    // post();
  }, []);
  useEffect(() => {
    const get = async () => {
      const res = await getUserAPI(9);
      console.log(res);
      return res;
    };
    get();
  }, []);

  return (
    <StyledWrapper>
      <HomeComponent />
    </StyledWrapper>
  );
};

export default Home;

const StyledWrapper = styled.div``;
