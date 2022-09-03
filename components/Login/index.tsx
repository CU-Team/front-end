import React from 'react';
import styled from 'styled-components';
import KakaoIcon from '~/assets/icons/KakaoIcon';

const Login: React.FC = () => {
  return (
    <StyledWrapper>
      <div> </div>
      <button>
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
