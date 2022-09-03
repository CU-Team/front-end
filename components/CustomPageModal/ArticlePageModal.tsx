import React, { useState } from 'react';
import styled from 'styled-components';
import { BackIcon } from '~/assets/icons';
import MarkerIcon from '~/assets/icons/MarkerIcon';
import { themedPalette } from '~/libs/themes';
import Memo from '../Memo';
import type { PageModalProps } from '../PageModal';
import PageModal from '../PageModal';

interface ArticlePageModalProps extends PageModalProps {
  selectedOpenId: number | null;
}

const ArticlePageModal: React.FC<ArticlePageModalProps> = ({
  onClose,
  ...props
}) => {
  return (
    <PageModal onClose={onClose} {...props}>
      <StyledWrapper>
        <div className="header">
          <a className="btn" onClick={onClose}>
            <BackIcon width={24} height={24} />
          </a>
          <div className="location">
            <MarkerIcon width={13.33} height={16} />{' '}
            <div className="body1">마루 360</div>
          </div>
          <a className={`body1 btn`}> </a>
        </div>
        <div className="body2 count">총 12개</div>
        <div className="memo-list">
          <Memo />
          <Memo />
          <Memo />
          <Memo />
          <Memo />
        </div>
      </StyledWrapper>
    </PageModal>
  );
};

export default ArticlePageModal;

const StyledWrapper = styled.div`
  padding: 0px 20px;
  padding-bottom: 30px;
  & > .header {
    top: 0;
    position: sticky;
    height: 56px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    background-color: white;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
    }
    .location {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  & > .count {
    color: ${themedPalette.gray6};
    margin-bottom: 16px;
  }
  & > .memo-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
