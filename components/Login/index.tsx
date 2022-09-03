import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import KakaoIcon from '~/assets/icons/KakaoIcon';
import LoginImg from '~/assets/icons/LoginImg';
import Logo from '~/assets/icons/Logo';
import { themedPalette } from '~/libs/themes';

const Login: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  return (
    <StyledWrapper>
      <div className="header">
        <Logo width={133} height={45} />
        <h2 className="h2">
          나만의 장소를 <br />
          특별하게 기억해보세요
        </h2>
        <LoginImg width={335} height={300} />
      </div>
      <button onClick={handleClick}>
        <div>
          <KakaoIcon width={20} height={18} /> 카카오톡으로 로그인
        </div>
      </button>
    </StyledWrapper>
  );
};

export default Login;

const StyledWrapper = styled.div`
  margin: 0 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .header {
    margin-top: 100px;
    .h2 {
      margin-top: 20px;
      color: ${themedPalette.gray6};
      margin-bottom: 80px;
    }
  }
  button {
    width: 100%;
    background-color: #fdd902;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
    cursor: pointer;
    border-radius: 8px;
    div {
      display: flex;
      align-items: center;
      gap: 5px;
      /* font-size: 15px; */
    }
  }
`;
