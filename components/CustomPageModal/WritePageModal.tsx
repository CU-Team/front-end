/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '~/assets/icons/CloseIcon';
import PrimaryMarkerIcon from '~/assets/icons/PrimaryMarkerIcon';
import SearchIcon from '~/assets/icons/SearchIcon';
import { themedPalette } from '~/libs/themes';
import SearchMusicBottomSheet from '../CustomBottomSheet/SearchMusicBottomSheet';
import type { PageModalProps } from '../PageModal';
import PageModal from '../PageModal';
import type { SelectedAddDataType } from '@components/Home/types';
import type { TrackType } from '@components/CustomBottomSheet/types';
import SelectedMusicItem from '@components/CustomPageModal/SelectedMusicItem';
import { postArticleAPI } from '~/api/article';
import type { AxiosResponse } from 'axios';
import useUser from '@hooks/useUser';
import type { ArticleType } from '@hooks/useKakaoMap/types';
import { useSetRecoilState } from 'recoil';
import { ArticleArrayAtom } from '@hooks/useArticles/atoms';

interface WritePageModalProps extends PageModalProps {
  selectedAddData: SelectedAddDataType | null;
}

const WritePageModal: React.FC<WritePageModalProps> = ({
  onClose,
  open,
  selectedAddData,
  ...props
}) => {
  const { user } = useUser();
  const [musicOpened, setMusicOpened] = useState(false);
  const [input, setInput] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<TrackType | null>(null);

  const handleSelectedTrack = (track: TrackType) => {
    setSelectedTrack(track);
  };

  const postArticle = async () => {
    if (selectedAddData && selectedTrack && user) {
      const res: AxiosResponse = await postArticleAPI({
        address: selectedAddData.address,
        longitude: selectedAddData.location.longitude,
        latitude: selectedAddData.location.latitude,
        position: selectedAddData.keyword,
        content: input,
        link: selectedTrack.url,
        musicImg: selectedTrack.image[3]['#text'],
        singer: selectedTrack.artist,
        music: selectedTrack.name,
        author: 'temp',
        // author: user.username,
      });
      return res;
    } else {
      return null;
    }
  };

  const setArticles = useSetRecoilState(ArticleArrayAtom);
  const onSubmit = (article: ArticleType) => {
    setArticles(prev => [...prev, article]);
  };

  const handleSubmit = async () => {
    if (!input) return;
    if (!onClose) return;
    if (!selectedTrack) return;
    const res: AxiosResponse | null = await postArticle();

    if (res) {
      const { data }: { data: ArticleType } = res;
      onSubmit(data);
      onClose();
    }
  };

  useEffect(() => {
    if (!open) {
      setInput('');
      setSelectedTrack(null);
      setMusicOpened(false);
    }
  }, [open]);

  return (
    <>
      <PageModal onClose={onClose} direction="bottom" open={open} {...props}>
        <StyledWrapper>
          <div className="header">
            <a className="close-btn" onClick={onClose}>
              <CloseIcon width={24} height={24} />
            </a>
            <div className="body1">기록하기</div>
            <a
              className={`body1 write-btn ${
                input && selectedTrack ? `active` : ``
              }`}
              onClick={handleSubmit}
            >
              완료
            </a>
          </div>
          <div className="title subtitle1">
            <div>
              <PrimaryMarkerIcon width={19} height={22} />
              <span>{selectedAddData?.keyword ?? ''}</span>
              에서 경험한
            </div>
            <div>나의 하이라이트 기억은?</div>
          </div>
          <div className="inputs">
            {selectedTrack ? (
              <SelectedMusicItem
                track={selectedTrack}
                onClickChange={() => setMusicOpened(true)}
              />
            ) : (
              <div
                className="input-wrapper"
                onClick={() => setMusicOpened(true)}
              >
                <SearchIcon width={20} height={20} />
                <div className="body2">어울리는 음악을 선택해주세요</div>
              </div>
            )}
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
      <SearchMusicBottomSheet
        open={musicOpened}
        onClose={() => setMusicOpened(false)}
        handleSelectedTrack={handleSelectedTrack}
      />
    </>
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
`;
