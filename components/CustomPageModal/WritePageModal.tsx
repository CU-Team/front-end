import React, { useState } from 'react';
import styled from 'styled-components';
import { BackIcon } from '~/assets/icons';
import MarkerIcon from '~/assets/icons/MarkerIcon';
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
    <PageModal onClose={onClose} {...props}>
      <StyledWrapper>
        <div className="header">
          <a className="close-btn" onClick={onClose}>
            <BackIcon width={24} height={24} />
          </a>
          <div className="body1">글작성</div>
          <a
            className={`body1 write-btn ${input ? `active` : ``}`}
            onClick={handleSubmit}
          >
            완료
          </a>
        </div>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <div className="location">
          <MarkerIcon width={13.33} height={16} />{' '}
          <div className="body1">마루 360</div>
        </div>
      </StyledWrapper>
    </PageModal>
  );
};

export default WritePageModal;

const StyledWrapper = styled.div`
  padding: 0px 20px;
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
  }
  .location {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
