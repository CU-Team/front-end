import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CloseBtn } from '~/assets/icons';
import type { BottomSheetProps } from '../BottomSheet';
import BottomSheet from '../BottomSheet';
import { searchTrackAPI } from '~/api/lastFM';
import { useQuery } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import type { TrackType } from '@components/CustomBottomSheet/types';
import { themedPalette } from '~/libs/themes';
import Spinner from '@components/Spinner';
import SearchMusicItem from '@components/CustomBottomSheet/SearchMusicItem';

interface SearchMusicBottomSheetProps extends BottomSheetProps {
  handleSelectedTrack: (track: TrackType) => void;
}

const SearchMusicBottomSheet: React.FC<SearchMusicBottomSheetProps> = ({
  open,
  onClose,
  handleSelectedTrack: handleSubmitTrack,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!open) {
      setInput('');
      setSelectedTrack(null);
      setPlayingTrack(null);
      return;
    }
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, [open]);

  const [input, setInput] = useState('');
  const search = useCallback(async () => {
    if (input.length > 0) {
      const res: AxiosResponse = await searchTrackAPI(input);
      const {
        results,
      }: { results: { trackmatches: { track: Array<TrackType> } } } = res.data;
      return results.trackmatches.track;
    } else {
      return [];
    }
  }, [input]);

  const { data, isLoading, error, refetch } = useQuery(
    ['music'],
    () => search(),
    {
      enabled: false,
    },
  );
  useEffect(() => {
    refetch();
  }, [input]);

  const [selectedTrack, setSelectedTrack] = useState<TrackType | null>(null);
  const [playingTrack, setPlayingTrack] = useState<TrackType | null>(null);

  const handleSelectedTrack = (track: TrackType) => {
    setSelectedTrack((prev: TrackType | null) => {
      if (prev) {
        if (prev.url === track.url) {
          return null;
        } else {
          return track;
        }
      } else {
        return track;
      }
    });
  };

  const handlePlayingTrack = (track: TrackType) => {
    setPlayingTrack((prev: TrackType | null) => {
      if (prev) {
        if (prev.url === track.url) {
          return null;
        } else {
          return track;
        }
      } else {
        return track;
      }
    });
  };

  const onClickSubmit = useCallback(() => {
    selectedTrack && handleSubmitTrack(selectedTrack);
    setSelectedTrack(null);
    onClose && onClose();
  }, [selectedTrack]);

  return (
    <BottomSheet open={open} onClose={onClose} {...props}>
      <StyledWrapper>
        <div className="header">
          <div className="input-wrapper">
            <input
              ref={inputRef}
              type="text"
              placeholder="검색어를 입력해주세요"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <a
              onClick={e => {
                e.stopPropagation();
                setInput('');
              }}
            >
              <CloseBtn width={20} height={20} />
            </a>
          </div>
          <a className="close-btn body2" onClick={onClose}>
            닫기
          </a>
        </div>
        <div className={`list ${isLoading ? 'loading' : ''}`}>
          {isLoading ? (
            <Spinner />
          ) : data && data.length > 0 ? (
            <>
              {data?.map((value: TrackType) => (
                <SearchMusicItem
                  key={value.url}
                  track={value}
                  handlePlayingTrack={handlePlayingTrack}
                  handleSelectedTrack={handleSelectedTrack}
                  isSelected={
                    selectedTrack ? value.url === selectedTrack.url : false
                  }
                  isPlaying={
                    playingTrack ? value.url === playingTrack.url : false
                  }
                />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className={'bottom'}>
          <div className={'temp-linear-gradient'} />
          <div className={'button-area'}>
            <div
              className={`submit ${selectedTrack ? '' : 'off'}`}
              onClick={onClickSubmit}
            >
              <div className={'body1'}>선택 완료</div>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </BottomSheet>
  );
};

export default SearchMusicBottomSheet;

const StyledWrapper = styled.div`
  height: 90vh;
  position: relative;
  .header {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 16px;
    .input-wrapper {
      height: 40px;
      background-color: ${themedPalette.textbox};
      display: flex;
      align-items: center;
      border-radius: 6px;
      width: 100%;
      padding: 16px 10px;
      input {
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        font-family: 'Pretendard', sans-serif;
        font-size: 14px;

        ::placeholder {
          color: ${themedPalette.gray2};
        }
      }
      a {
        display: flex;
        align-items: center;
      }
    }
    .close-btn {
      color: black;
      flex-shrink: 0;
    }
  }

  .list {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 0 20px 240px 20px;
    display: flex;
    flex-direction: column;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none !important;
    }
  }
  .loading {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > .bottom {
    width: 100%;
    position: absolute;
    bottom: 0;
    > .temp-linear-gradient {
      height: 94px;
      width: 100%;
      background: linear-gradient(
        180deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: matrix(1, 0, 0, -1, 0, 0);
    }
    > .button-area {
      width: 100%;
      padding: 0 20px 20px 20px;
      background-color: ${themedPalette.gray0};
      > .submit {
        cursor: pointer;
        width: 100%;
        padding: 16px;
        background-color: ${themedPalette.primary};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        .body1 {
          color: ${themedPalette.gray0};
        }
        &.off {
          cursor: unset;
          background-color: #f2ebff;
          .body1 {
            color: #e2d0ff;
          }
        }
      }
    }
  }
`;
