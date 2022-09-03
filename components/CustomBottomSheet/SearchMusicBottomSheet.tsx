import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CloseBtn, CloseIcon } from '~/assets/icons';
import type { BottomSheetProps } from '../BottomSheet';
import BottomSheet from '../BottomSheet';

interface SearchMusicBottomSheetProps extends BottomSheetProps {}

const SearchMusicBottomSheet: React.FC<SearchMusicBottomSheetProps> = ({
  open,
  onClose,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!open) return;
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, [open]);

  return (
    <BottomSheet open={open} onClose={onClose} {...props}>
      <StyledWrapper>
        <div className="header">
          <div className="input-wrapper">
            <input
              ref={inputRef}
              type="text"
              placeholder="검색어를 입력해주세요"
            />
            <CloseBtn width={20} height={20} />
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
    }
    .close-btn {
      color: black;
      flex-shrink: 0;
    }
  }
`;
