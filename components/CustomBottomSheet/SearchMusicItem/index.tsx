import React, { useState } from 'react';
import type { TrackType } from '@components/CustomBottomSheet/types';
import styled from 'styled-components';
import { themedPalette } from '~/libs/themes';
import {
  AudioPauseIcon,
  AudioPlayIcon,
  PlayIcon,
  SelectedButton,
  StopIcon,
  UnselectedButton,
} from '@assets/icons';

interface Props {
  track: TrackType;
  isSelected: boolean;
  isPlaying: boolean;
  handleSelectedTrack: (newTrack: TrackType) => void;
  handlePlayingTrack: (newTrack: TrackType) => void;
}

const SearchMusicItem: React.FC<Props> = props => {
  const {
    track,
    handleSelectedTrack,
    isSelected,
    isPlaying,
    handlePlayingTrack,
  } = props;

  const onClickPlayingMusic = () => {
    handlePlayingTrack(track);
  };

  const onClickSelect = () => {
    handleSelectedTrack(track);
  };
  //todo: image temp로 변경
  return (
    <StyledWrapper>
      <div className={'item-wrapper'}>
        <div className={'music-img-div'} onClick={onClickPlayingMusic}>
          {/*<img src={track.image[3]['#text']} width={50} height={50} />*/}
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
        <div className={'select-button'} onClick={onClickSelect}>
          {isSelected ? (
            <SelectedButton width={30} height={30} />
          ) : (
            <UnselectedButton width={30} height={30} />
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
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
      width: 234px;
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
    .select-button {
      cursor: pointer;
    }
  }
`;

export default SearchMusicItem;
