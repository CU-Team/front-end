import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BackIcon } from '~/assets/icons';
import MarkerIcon from '~/assets/icons/MarkerIcon';
import { themedPalette } from '~/libs/themes';
import EmojiBottomSheet from '../CustomBottomSheet/EmojiBottomSheet';
import Memo from '../Memo';
import type { PageModalProps } from '../PageModal';
import PageModal from '../PageModal';
import { getArticlesByPositionAPI } from '~/api/article';
import type { ArticleType } from '@hooks/useKakaoMap/types';
import type { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import useHomeTab from '@hooks/useTab/useHomeTab';
import useUser from '@hooks/useUser';
import { HomeTabEnum } from '@components/Home/constants';

interface ArticlePageModalProps extends PageModalProps {
  selectedOpenPosition: string | null;
  filterYoursOnOpen: boolean;
}

const ArticlePageModal: React.FC<ArticlePageModalProps> = ({
  onClose,
  selectedOpenPosition,
  filterYoursOnOpen,
  open: bottomSheetOpen,
  ...props
}) => {
  const { selected } = useHomeTab();
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState<Array<ArticleType>>([]);

  const {
    data: articleData,
    isLoading,
    error,
    refetch,
  } = useQuery(['articles'], () => getArticles());

  const getArticles = useCallback(async () => {
    if (bottomSheetOpen && selectedOpenPosition) {
      const res: AxiosResponse = await getArticlesByPositionAPI(
        selectedOpenPosition,
      );
      const { data }: { data: Array<ArticleType> } = res;
      return data;
    }
  }, [bottomSheetOpen, selectedOpenPosition]);

  useEffect(() => {
    if (bottomSheetOpen && selectedOpenPosition) {
      refetch();
    }
  }, [bottomSheetOpen, selectedOpenPosition]);

  useEffect(() => {
    if (articleData) {
      if (selected === HomeTabEnum.TOTAL) {
        if (filterYoursOnOpen) {
          setFiltered(
            articleData.filter(value => value.author !== user?.username),
          );
        } else {
          setFiltered(articleData);
        }
      } else {
        setFiltered(
          articleData.filter(value => value.author === user?.username),
        );
      }
    }
  }, [articleData, selected, filterYoursOnOpen]);

  return (
    <>
      <PageModal onClose={onClose} open={bottomSheetOpen} {...props}>
        <StyledWrapper>
          <div className="header">
            <a className="btn" onClick={onClose}>
              <BackIcon width={24} height={24} />
            </a>
            <div className="location">
              <MarkerIcon width={13.33} height={16} />{' '}
              <div className="body1">{selectedOpenPosition ?? ''}</div>
            </div>
            <a className={`body1 btn`}> </a>
          </div>
          <div className="body2 count">총 {filtered.length}개</div>
          <div className="memo-list">
            {filtered?.map(value => (
              <Memo key={value.no} data={value} setOpen={setOpen} />
            ))}
          </div>
        </StyledWrapper>
      </PageModal>
      <EmojiBottomSheet open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default ArticlePageModal;

const StyledWrapper = styled.div`
  padding: 0px 20px 30px 20px;
  & > .header {
    top: 0;
    position: sticky;
    height: 56px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
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
