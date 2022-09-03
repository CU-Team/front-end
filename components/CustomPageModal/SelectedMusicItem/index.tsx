import React, { useState } from 'react';
import type { TrackType } from '@components/CustomBottomSheet/types';
import styled from 'styled-components';
import { themedPalette } from '~/libs/themes';
import {
  AudioPauseIcon,
  AudioPlayIcon,
  PlayIcon,
  StopIcon,
} from '@assets/icons';

interface Props {
  track: TrackType;
  onClickChange: () => void;
}

const SelectedMusicItem: React.FC<Props> = props => {
  const { track, onClickChange } = props;

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const onClickPlayingMusic = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <StyledWrapper>
      <div className={'item-wrapper'}>
        <div className={'music-img-div'} onClick={onClickPlayingMusic}>
          {isPlaying ? (
            <PlayIcon height={50} width={50} />
          ) : (
            <StopIcon width={50} height={50} />
          )}
        </div>
        <div className={'title'}>
          <div className={'body2'}>{track.name}</div>
          <div className={'caption'}>{track.artist}</div>
        </div>
        <div className={'change-button'} onClick={onClickChange}>
          <div className={'body2'}>변경</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: ${themedPalette.gray0};
  width: 100%;
  padding-bottom: 14px;
  border-bottom: 1px solid ${themedPalette.textbox};
  margin-bottom: 14px;

  :last-child {
    margin-bottom: 0;
  }

  .item-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    .music-img-div {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 6px;
      overflow: hidden;
      position: relative;
      > img {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
    }
    .title {
      height: 37px;
      width: 208px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 10px;
      > .body2 {
        color: ${themedPalette.gray10};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      > .caption {
        color: ${themedPalette.gray4};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .change-button {
      cursor: pointer;
      padding: 7px 16px 8px 15px;
      background-color: ${themedPalette.gray8};
      border-radius: 6px;
      .body2 {
        color: ${themedPalette.gray0};
        white-space: nowrap;
      }
    }
  }
`;

export default SelectedMusicItem;
