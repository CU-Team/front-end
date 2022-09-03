import React from 'react';
import styled from 'styled-components';
import EmojiPlusIcon from '~/assets/icons/EmojiPlusIcon';
import { themedPalette } from '~/libs/themes';

interface Props {}

const Memo: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="memo">
        <div className="title">
          <div className="username body2">익명1234</div>
          <div>·</div>
          <div className="time"> 1분전</div>
        </div>
        <div className="body1 content">
          마루 360에서 해커톤 진행함 하하하 마루 360에서 해커톤 진행함
          하하하마루 360에서 해커톤 진행함 하하하마루 360에서 해커톤 진행함
          하하하마루 360에서 해커톤 진행함 하하하마루 360에서 해커톤 진행함
          하하하마루 360에서 해커톤 진행함 하하하마루 360에서 해커톤 진행함
          하하하
        </div>
        <div className="music-player">
          <div className="cover-img"> </div>
          <div className="content">
            <div className="title body2">노래제목 노래제목</div>
            <div className="subtitle caption">가수이름가수이름</div>
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
        <a className="btn">
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
        width: 50px;
        height: 50px;
        background-color: ${themedPalette.gray10};
        border-radius: 6px;
      }
      .content {
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
