/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState } from 'react';
import styled from 'styled-components';
import PageModal from '../PageModal';
import type { PageModalProps } from '../PageModal';
import { BackIcon } from '~/assets/icons';
import { themedPalette } from '~/libs/themes';
import Feed from '~/assets/icons/Feed';
import LocationStar from '~/assets/icons/LocationStar';
import FeedActive from '~/assets/icons/FeedActive';
import LocationStarActive from '~/assets/icons/\blocationStarActive';
import Memo from '../Memo';
import Setting from '~/assets/icons/Setting';
import SettingPageModal from './SettingPageModal';
import { useQuery } from '@tanstack/react-query';
import { getUserArticles } from '~/api/article';
import DefaultIcon from '~/assets/icons/DefaultIcon';
import useUser from '@hooks/useUser';
import NoItemIcon from '@assets/icons/NoItemIcon';
import { processArticle } from '@utils/article';

interface MyPageModalProps extends PageModalProps {}

const MyPageModal: React.FC<MyPageModalProps> = ({ onClose, ...props }) => {
  const { user } = useUser();
  const [tab, setTab] = useState('feed');
  const [open, setOpen] = useState(false);

  const { data, isLoading, error } = useQuery(['user'], () =>
    user ? getUserArticles(user?.username) : () => {},
  );

  if (!data?.data) return null;
  return (
    <>
      <PageModal onClose={onClose} {...props}>
        <StyledWrapper>
          <div className="header">
            <a className="btn" onClick={onClose}>
              <BackIcon width={24} height={24} />
            </a>
            <div className="location body1">마이페이지</div>
            <a className={`btn`} onClick={() => setOpen(true)}>
              <Setting width={24} height={24} />
            </a>
          </div>
          <div className="profile-header">
            <div className="user-img">
              <DefaultIcon width={60} height={60} />
            </div>
            <div>
              {user?.username ?? '회원'}의 <br />
              하이라이트 <span>{data?.data.length}개</span>
            </div>
          </div>
          <div className="tabs-wrapper">
            <div className="tabs">
              <a
                className={`tab ${tab === `feed` ? `active` : ``}`}
                onClick={() => setTab('feed')}
              >
                {tab === `feed` ? (
                  <FeedActive width={22} height={22} />
                ) : (
                  <Feed width={22} height={22} />
                )}
              </a>
              <a
                className={`tab ${tab === `location` ? `active` : ``}`}
                onClick={() => setTab('location')}
              >
                {tab === `location` ? (
                  <LocationStarActive width={22} height={22} />
                ) : (
                  <LocationStar width={22} height={22} />
                )}
              </a>
            </div>
          </div>
          {tab === `feed` && (
            <div className="memo-list">
              {data && data.length > 0 ? (
                <>
                  {data.data.map((memoItem: any, idx: any) => (
                    <Memo key={idx} data={memoItem} />
                  ))}
                </>
              ) : (
                <div className={'no-item-wrapper'}>
                  <NoItemIcon height={100} width={100} />
                  <div className={'body1'}>아직 기록한 하이라이트가 없어요</div>
                </div>
              )}
            </div>
          )}
          {tab === `location` && (
            <div className="location-list">
              {data && data.length > 0 ? (
                <>
                  {processArticle(data).map(value => (
                    <>
                      <div className="location" key={value.position}>
                        <div>
                          <LocationStarActive width={15} height={15} />
                          <div className="Body1">{value.position}</div>
                        </div>
                        <div className="back">
                          <div>{value.data.length}개</div>
                          <BackIcon width={20} height={20} />
                        </div>
                      </div>
                    </>
                  ))}
                </>
              ) : (
                <div className={'no-item-wrapper'}>
                  <NoItemIcon width={100} height={100} />
                  <div className={'body1'}>아직 기록한 하이라이트가 없어요</div>
                </div>
              )}
            </div>
          )}
        </StyledWrapper>
      </PageModal>
      <SettingPageModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default MyPageModal;

const StyledWrapper = styled.div`
  padding-bottom: 30px;
  & > .header {
    padding: 0px 20px;
    top: 0;
    position: sticky;
    height: 56px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    background-color: white;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
    }
    .location {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  .profile-header {
    padding: 0px 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    .user-img {
      width: 60px;
      height: 60px;
      background-color: ${themedPalette.gray1};
      border-radius: 50%;
    }
  }
  .tabs-wrapper {
    padding: 0 20px;
    border-bottom: 1px solid #f4f3f6;
    .tabs {
      display: flex;
      .tab {
        display: flex;
        justify-content: center;
        width: 50%;
        padding: 12px;
        &.active {
          border-bottom: 1px solid ${themedPalette.gray10};
        }
      }
    }
  }
  .memo-list {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .no-item-wrapper {
      flex-direction: column;
      margin-top: 100px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      > div {
        margin-top: 16px;
        color: ${themedPalette.gray3};
      }
    }
  }
  .location-list {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    .no-item-wrapper {
      flex-direction: column;
      margin-top: 100px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      > div {
        margin-top: 16px;
        color: ${themedPalette.gray3};
      }
    }
    .location {
      display: flex;
      justify-content: space-between;
      background-color: #f4f3f6;
      font-weight: 400;

      padding: 15px;
      border-radius: 8px;
      cursor: pointer;
      & > div {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .back {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
`;
