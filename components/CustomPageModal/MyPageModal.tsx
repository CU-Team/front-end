import React from 'react';
import styled from 'styled-components';
import PageModal from '../PageModal';
import type { PageModalProps } from '../PageModal';
import { BackIcon } from '~/assets/icons';

interface MyPageModalProps extends PageModalProps {}

const MyPageModal: React.FC<MyPageModalProps> = ({ onClose, ...props }) => {
  return (
    <PageModal onClose={onClose} {...props}>
      <StyledWrapper>
        <div className="header">
          <a className="btn" onClick={onClose}>
            <BackIcon width={24} height={24} />
          </a>
          <div className="location body1">My Page</div>
          <a className={`btn`}> </a>
        </div>
      </StyledWrapper>
    </PageModal>
  );
};

export default MyPageModal;

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
`;
