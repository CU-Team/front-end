/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState } from 'react';
import styled from 'styled-components';
import EmojiPlusIcon from '~/assets/icons/EmojiPlusIcon';
import PlayIcon from '~/assets/icons/PlayIcon';
import StopIcon from '~/assets/icons/StopIcon';
import { themedPalette } from '~/libs/themes';
import { translateTime } from '~/libs/utils';
import type { ArticleType } from '@hooks/useKakaoMap/types';
import useHomeTab from '@hooks/useTab/useHomeTab';
import { HomeTabEnum } from '@components/Home/constants';

interface Props {
  setOpen?: any;
  data?: ArticleType;
  useMine?: boolean;
}

const Memo: React.FC<Props> = ({
  data,
  setOpen = (a: any) => null,
  useMine = false,
}) => {
  const { selected } = useHomeTab();
  const [isPlay, setIsPlay] = useState(false);

  if (!data) return null;
  return (
    <StyledWrapper>
      <div className="memo">
        <div className="title">
          {useMine && selected !== HomeTabEnum.MY_RECORD ? (
            <>
              <div className="username body2">{data.author}</div>
              <div>·</div>
            </>
          ) : (
            <></>
          )}
          <div className="time">{translateTime(data.createdAt)}</div>
        </div>
        <div className="body1 content">{data.content}</div>
        <div className="music-player">
          <div className="cover-img" onClick={() => setIsPlay(!isPlay)}>
            {isPlay ? (
              <StopIcon width={50} height={50} />
            ) : (
              <PlayIcon width={50} height={50} />
            )}
          </div>
          <div className="content">
            <div className="title body2">{data.music}</div>
            <div className="subtitle caption">
              {data.singer || '등록된 가수명이 없습니다.'}
            </div>
          </div>
        </div>
      </div>
      <div className="emoji-list">
        <a className="btn caption">
          <div className="emoji"> </div>
          <div className="count">1</div>
        </a>
        <a className="btn caption">
          <div className="emoji"> </div>
          <div className="count">12</div>
        </a>
        <a className="btn caption">
          <div className="emoji"> </div>
          <div className="count">133</div>
        </a>
        <a className="btn" onClick={() => setOpen(true)}>
          <EmojiPlusIcon width={21} height={21} />
        </a>
      </div>
    </StyledWrapper>
  );
};

export default Memo;

const StyledWrapper = styled.div`
  .memo {
    background-color: #f4f3f6;
    border-radius: 8px;
    width: 100%;
    height: 335px;
    padding: 20px;
    margin-bottom: 8px;
    & > .title {
      display: flex;
      align-items: center;
      gap: 3px;
      color: ${themedPalette.gray5};
      margin-bottom: 16px;
      .username {
        color: ${themedPalette.gray5};
      }
      .time {
        font-size: 12px;
        font-weight: 400;
        color: ${themedPalette.gray4};
      }
    }
    & > .content {
      height: 196px;
      margin-bottom: 16px;
      color: ${themedPalette.gray7};
    }
    & > .music-player {
      display: flex;
      align-items: center;
      gap: 10px;
      .cover-img {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: ${themedPalette.gray10};
        border-radius: 6px;
      }
      .content {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .title {
          color: ${themedPalette.gray6};
          margin-bottom: 6px;
        }
        .subtitle {
          color: ${themedPalette.gray4};
        }
      }
    }
  }
  .emoji-list {
    display: flex;
    align-items: center;
    gap: 8px;
    .btn {
      display: flex;
      align-items: center;
      border: 1px solid ${themedPalette.gray1};
      border-radius: 100px;
      color: ${themedPalette.gray6};
      height: 30px;
      padding: 0 12px;
      gap: 6px;
      .emoji {
        width: 17px;
        height: 17px;
        background-color: ${themedPalette.gray2};
        border-radius: 4px;
      }
    }
  }
`;
