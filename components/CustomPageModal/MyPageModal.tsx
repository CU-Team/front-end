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
import useUser from '~/hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import { getUserArticles } from '~/api/article';

interface MyPageModalProps extends PageModalProps {}

const username = 'sion';
const MyPageModal: React.FC<MyPageModalProps> = ({ onClose, ...props }) => {
  // const user = useUser();
  // console.log(user.user?.username);
  const [tab, setTab] = useState('feed');
  const [open, setOpen] = useState(false);

  const { data, isLoading, error } = useQuery(['user'], () =>
    getUserArticles(username),
  );
  console.log(data, isLoading, error);
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
            <div className="user-img"> </div>
            <div>
              {username}의 <br />
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
              {data?.data.map((memoItem: any, idx: any) => (
                <Memo key={idx} data={memoItem} />
              ))}
            </div>
          )}
          {tab === `location` && (
            <div className="location-list">
              <div className="location">
                <div>
                  <LocationStarActive width={15} height={15} />
                  <div className="Body1">마루 360</div>
                </div>
                <div className="back">
                  <div>4개</div>
                  <BackIcon width={20} height={20} />
                </div>
              </div>
              <div className="location">
                <div>
                  <LocationStarActive width={15} height={15} />
                  <div className="Body1">마루 360</div>
                </div>
                <div className="back">
                  <div>4개</div>
                  <BackIcon width={20} height={20} />
                </div>
              </div>
              <div className="location">
                <div>
                  <LocationStarActive width={15} height={15} />
                  <div className="Body1">마루 360</div>
                </div>
                <div className="back">
                  <div>4개</div>
                  <BackIcon width={20} height={20} />
                </div>
              </div>
              <div className="location">
                <div>
                  <LocationStarActive width={15} height={15} />
                  <div className="Body1">마루 360</div>
                </div>
                <div className="back">
                  <div>4개</div>
                  <BackIcon width={20} height={20} />
                </div>
              </div>
              <div className="location">
                <div>
                  <LocationStarActive width={15} height={15} />
                  <div className="Body1">마루 360</div>
                </div>
                <div className="back">
                  <div>4개</div>
                  <BackIcon width={20} height={20} />
                </div>
              </div>
              <div className="location">
                <div>
                  <LocationStarActive width={15} height={15} />
                  <div className="Body1">마루 360</div>
                </div>
                <div className="back">
                  <div>4개</div>
                  <BackIcon width={20} height={20} />
                </div>
              </div>
              <div className="location">
                <div>
                  <LocationStarActive width={15} height={15} />
                  <div className="Body1">마루 360</div>
                </div>
                <div className="back">
                  <div>4개</div>
                  <BackIcon width={20} height={20} />
                </div>
              </div>
              <div className="location">
                <div>
                  <LocationStarActive width={15} height={15} />
                  <div className="Body1">마루 360</div>
                </div>
                <div className="back">
                  <div>4개</div>
                  <BackIcon width={20} height={20} />
                </div>
              </div>
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
  }
  .location-list {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
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
