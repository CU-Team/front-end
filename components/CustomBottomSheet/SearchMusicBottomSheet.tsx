import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CloseBtn } from '~/assets/icons';
import type { BottomSheetProps } from '../BottomSheet';
import BottomSheet from '../BottomSheet';
import { searchTrackAPI } from '~/api/lastFM';
import { useQuery } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import type { TrackType } from '@components/CustomBottomSheet/types';

interface SearchMusicBottomSheetProps extends BottomSheetProps {}

const SearchMusicBottomSheet: React.FC<SearchMusicBottomSheetProps> = ({
  open,
  onClose,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!open) return setInput('');
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
            <a>
              <CloseBtn width={20} height={20} />
            </a>
          </div>
          <a className="close-btn body2" onClick={onClose}>
            닫기
          </a>
        </div>
      </StyledWrapper>
    </BottomSheet>
  );
};

export default SearchMusicBottomSheet;

const StyledWrapper = styled.div`
  height: 90vh;
  .header {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 16px;
    .input-wrapper {
      height: 40px;
      background-color: #f4f3f6;
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
`;
