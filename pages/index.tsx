import type { NextPage } from 'next';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { routePath } from '@assets/routePath';

const Home: NextPage = () => {
  const router = useRouter();

  const onClick = () => {
    router.push(routePath.login);
  };

  return <StyledWrapper>home</StyledWrapper>;
};

export default Home;

const StyledWrapper = styled.div``;
