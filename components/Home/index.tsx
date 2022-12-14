import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import KakaoMap from '@components/KakaoMap';
import { SERVICE_NAME } from '~/constants';
import { themedPalette } from '~/libs/themes';
import { LogoStarIcon, WritingIcon } from '@assets/icons';
import Tab from '@components/Home/Tab';
import type { LocationType } from '@hooks/useGeolocation/types';
import useHomeRoute from '@hooks/useHomeRoute';
import { HomeRouteEnum } from '@hooks/useHomeRoute/constatns';
import WritePageModal from '@components/CustomPageModal/WritePageModal';
import ArticlePageModal from '@components/CustomPageModal/ArticlePageModal';
import MyPageModal from '@components/CustomPageModal/MyPageModal';
import type { SelectedAddDataType } from '@components/Home/types';
import { INIT_LATITUDE, INIT_LONGITUDE } from '@hooks/useGeolocation/constants';
import DefaultIcon from '~/assets/icons/DefaultIcon';

interface Props {}

const HomeComponent: React.FC<Props> = props => {
  const {} = props;

  const { openedRoute, open, close } = useHomeRoute();

  const [selectedAddData, setSelectedAddData] =
    useState<SelectedAddDataType | null>(null);
  const currentLocationRef = useRef<LocationType | null>(null);
  const [selectedOpenPosition, setSelectedOpenPosition] = useState<
    string | null
  >(null);
  const [filterYoursOnOpen, setFilterYoursOnOpen] = useState<boolean>(false);

  const handleSelectedAddData = (body: {
    keyword: string;
    address: string;
  }) => {
    setSelectedAddData({
      ...body,
      location: currentLocationRef.current ?? {
        latitude: INIT_LATITUDE,
        longitude: INIT_LONGITUDE,
      },
    });
  };

  const onClickAddArticle = () => {
    open(HomeRouteEnum.WRITE_ARTICLE);
  };
  const onClickOverlayItem = (body: {
    position: string;
    filterYours: boolean;
  }) => {
    setSelectedOpenPosition(body.position);
    setFilterYoursOnOpen(body.filterYours);
    open(HomeRouteEnum.ARTICLE);
  };
  const onCloseOpenArticle = () => {
    setSelectedOpenPosition(null);
    close();
  };
  const onClickMyPage = () => {
    open(HomeRouteEnum.MY_PAGE);
  };

  return (
    <>
      <StyledWrapper>
        <div className={'header'}>
          <div className={'top'}>
            <div className={'title'}>
              <LogoStarIcon width={18} height={18} />
              <h1>{SERVICE_NAME}</h1>
            </div>
            <div className={'my-page-item'} onClick={onClickMyPage}>
              <DefaultIcon width={36} height={36} />
            </div>
          </div>
          <div className={'bottom'}>
            <Tab />
          </div>
        </div>
        <div className={'map-div'}>
          <KakaoMap
            openArticle={onClickOverlayItem}
            handleSelectedAddData={handleSelectedAddData}
            currentLocationRef={currentLocationRef}
          />
        </div>
        <div className={'add-article'} onClick={onClickAddArticle}>
          <WritingIcon width={20} height={20} />
          <div className={'body1'}>????????????</div>
        </div>
      </StyledWrapper>
      <WritePageModal
        open={openedRoute === HomeRouteEnum.WRITE_ARTICLE}
        onClose={close}
        selectedAddData={selectedAddData}
      />
      <ArticlePageModal
        open={openedRoute === HomeRouteEnum.ARTICLE}
        onClose={onCloseOpenArticle}
        selectedOpenPosition={selectedOpenPosition}
        filterYoursOnOpen={filterYoursOnOpen}
      />
      <MyPageModal
        open={openedRoute === HomeRouteEnum.MY_PAGE}
        onClose={close}
      />
    </>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  > div.add-article {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60px;
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
      padding: 11px 0;
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
      margin-top: 10px;
      width: 100%;
    }
  }
`;
export default HomeComponent;
