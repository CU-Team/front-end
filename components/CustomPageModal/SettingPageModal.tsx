import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '~/assets/icons/CloseIcon';
import { themedPalette } from '~/libs/themes';
import type { PageModalProps } from '../PageModal';
import PageModal from '../PageModal';

interface SettingPageModalProps extends PageModalProps {}

const SettingPageModal: React.FC<SettingPageModalProps> = ({
  onClose,
  ...props
}) => {
  return (
    <PageModal onClose={onClose} {...props}>
      <StyledWrapper>
        <div className="header">
          <a className="close-btn" onClick={onClose}>
            <CloseIcon width={24} height={24} />
          </a>
          <div className="body1">설정</div>
          <a className={`write-btn`}> </a>
        </div>
        <a className="body1 row">계정</a>
        <a className="body2 email"> gd0541234@gmail.com</a>
        <div className="hr"> </div>
        <a className="body1 row">계정 삭제</a>
        <div className="hr"> </div>
        <a className="body1 logout">로그아웃</a>
      </StyledWrapper>
    </PageModal>
  );
};

export default SettingPageModal;

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
      gap: 4px;
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
      & > div {
        color: ${themedPalette.gray3} !important;
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
      &::placeholder {
        color: ${themedPalette.gray3};
      }
    }
  }

  .location {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .row,
  .logout {
    display: block;
  }
  .email {
    margin-top: 6px;
    color: ${themedPalette.gray3};
  }
  .hr {
    margin: 20px 0;
    height: 1px;
    background-color: #f4f3f6;
  }
  .logout {
    color: #ff4646;
  }
`;
