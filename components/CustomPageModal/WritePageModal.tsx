import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '~/assets/icons/CloseIcon';
import PrimaryMarkerIcon from '~/assets/icons/PrimaryMarkerIcon';
import SearchIcon from '~/assets/icons/SearchIcon';
import { themedPalette } from '~/libs/themes';
import type { PageModalProps } from '../PageModal';
import PageModal from '../PageModal';

interface WritePageModalProps extends PageModalProps {}

const WritePageModal: React.FC<WritePageModalProps> = ({
  onClose,
  ...props
}) => {
  const [input, setInput] = useState('');
  const handleSubmit = () => {
    if (!input) return;
    if (!onClose) return;
    setInput('');
    onClose();
  };
  return (
    <PageModal onClose={onClose} direction="bottom" {...props}>
      <StyledWrapper>
        <div className="header">
          <a className="close-btn" onClick={onClose}>
            <CloseIcon width={24} height={24} />
          </a>
          <div className="body1">기록하기</div>
          <a
            className={`body1 write-btn ${input ? `active` : ``}`}
            onClick={handleSubmit}
          >
            완료
          </a>
        </div>
        <div className="title subtitle1">
          <div>
            <PrimaryMarkerIcon width={19} height={22} /> <span>마루360</span>
            에서 경험한
          </div>
          <div>나의 하이라이트 기억은?</div>
        </div>
        <div className="inputs">
          <div className="input-wrapper">
            <SearchIcon width={20} height={20} />
            <input type="text" placeholder="어울리는 음악을 선택해주세요" />
          </div>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={'이 장소의 하이라이트를 기록해주세요'}
          />
        </div>
      </StyledWrapper>
    </PageModal>
  );
};

export default WritePageModal;

const StyledWrapper = styled.div`
  padding: 0px 20px;

  &:focus-within {
    .inputs {
      transform: translateY(-70px);
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    height: 56px;
    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
    }
    .write-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      color: ${themedPalette.gray2};
      cursor: default;
      &.active {
        cursor: pointer;
        color: ${themedPalette.primary};
      }
    }
    div {
      display: flex;
      align-items: center;
    }
  }
  & > .title {
    margin-bottom: 20px;
    & > div {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      span {
        color: ${themedPalette.primary};
      }
    }
  }
  .inputs {
    transition: transform 0.1s ease-out;
    .input-wrapper {
      display: flex;
      align-items: center;
      gap: 4px;
      background-color: #f4f3f6;
      border-radius: 8px;
      margin-bottom: 12px;
      padding: 15px 20px;
      input {
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
      }
    }
    textarea {
      font-family: 'Pretendard', sans-serif;
      border: none;
      outline: none;
      background-color: #f4f3f6;
      border-radius: 8px;
      width: 100%;
      height: 335px;
      padding: 20px;
      resize: none;
      margin-bottom: 12px;
      &:focus {
        outline: 1px solid ${themedPalette.primary};
      }
    }
  }

  .location {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
