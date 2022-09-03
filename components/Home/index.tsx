import React from 'react';
import styled from 'styled-components';
import KakaoMap from '@components/KakaoMap';
import { SERVICE_NAME } from '~/constants';
import { themedPalette } from '~/libs/themes';
import { LogoStarIcon, WritingIcon } from '@assets/icons';
import Tab from '@components/Home/Tab';

interface Props {}

const HomeComponent: React.FC<Props> = props => {
  const {} = props;

  const onClickAddArticle = () => {
    //todo : bottomsheet open
  };

  return (
    <StyledWrapper>
      <div className={'header'}>
        <div className={'top'}>
          <div className={'title'}>
            <LogoStarIcon width={18} height={18} />
            <h1>{SERVICE_NAME}</h1>
          </div>
          <div className={'my-page-item'} />
        </div>
        <div className={'bottom'}>
          <Tab />
        </div>
      </div>
      <div className={'map-div'}>
        <KakaoMap />
      </div>
      <div className={'add-article'} onClick={onClickAddArticle}>
        <WritingIcon width={20} height={20} />
        <div className={'body1'}>기록하기</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;

  > div.add-article {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 80px;
    padding: 15px 31px 17px 27px;
    background-color: ${themedPalette.gray10};
    z-index: 1;
    border-radius: 100px;

    > path {
      fill: ${themedPalette.gray0};
    }
    > .body1 {
      margin-left: 6px;
      color: ${themedPalette.gray0};
    }
  }

  > div.map-div {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 0;

    > div#map {
      width: 100%;
      height: 100%;
    }
  }
  > .header {
    width: 100%;
    height: 125px;
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 0 20px 16px 20px;

    > .top {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
      > .title {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      > .my-page-item {
        width: 36px;
        height: 36px;
        border-radius: 100%;
        background-color: ${themedPalette.gray1};
        cursor: pointer;
      }
    }
    > .bottom {
      margin-top: 15px;
      width: 100%;
    }
  }
`;
export default HomeComponent;
