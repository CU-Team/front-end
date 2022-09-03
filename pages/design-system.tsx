import type { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';
import BottomSheet from '~/components/BottomSheet';
import ArticlePageModal from '~/components/CustomPageModal/ArticlePageModal';
import WritePageModal from '~/components/CustomPageModal/WritePageModal';
import Spinner from '~/components/Spinner';
import { themedPalette } from '~/libs/themes';

const DesignSystem: NextPage = () => {
  const [readOpen, setReadOpen] = useState(false);
  const [writePageModalOpen, setWritePageModalOpen] = useState(false);
  const [articleModalOpen, setArticleModalOpen] = useState(false);
  return (
    <StyledWrapper>
      <button onClick={() => setReadOpen(true)}>BottomSheet</button>
      <button onClick={() => setWritePageModalOpen(true)}>
        WritePageModal
      </button>
      <button onClick={() => setArticleModalOpen(true)}>articleModal</button>
      <Spinner />
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <div className="subtitle1">subtitle1</div>
      <div className="subtitle2">subtitle2</div>
      <div className="body1">body1</div>
      <div className="body2">body2</div>
      <div className="caption">caption</div>
      <div className="color-system">
        <div className="gray0"> </div>
        <div className="gray1"> </div>
        <div className="gray2"> </div>
        <div className="gray3"> </div>
        <div className="gray4"> </div>
        <div className="gray5"> </div>
        <div className="gray6"> </div>
        <div className="gray7"> </div>
        <div className="gray8"> </div>
        <div className="gray9"> </div>
        <div className="gray10"> </div>
      </div>
      <BottomSheet open={readOpen} onClose={() => setReadOpen(false)}>
        dd
      </BottomSheet>
      <WritePageModal
        open={writePageModalOpen}
        onClose={() => setWritePageModalOpen(false)}
      />
      <ArticlePageModal
        open={articleModalOpen}
        onClose={() => setArticleModalOpen(false)}
      />
    </StyledWrapper>
  );
};

export default DesignSystem;

const StyledWrapper = styled.div`
  height: 100vh;
  button {
    background-color: aliceblue;
    margin: 10px;
    padding: 10px;
  }
  .color-system {
    div {
      width: 100px;
      height: 100px;
      display: flex;
      gap: 30px;
    }
  }
  .gray0 {
    background-color: ${themedPalette.gray0};
  }
  .gray1 {
    background-color: ${themedPalette.gray1};
  }
  .gray2 {
    background-color: ${themedPalette.gray2};
  }
  .gray3 {
    background-color: ${themedPalette.gray3};
  }
  .gray4 {
    background-color: ${themedPalette.gray4};
  }
  .gray5 {
    background-color: ${themedPalette.gray5};
  }
  .gray6 {
    background-color: ${themedPalette.gray6};
  }
  .gray7 {
    background-color: ${themedPalette.gray7};
  }
  .gray8 {
    background-color: ${themedPalette.gray8};
  }
  .gray9 {
    background-color: ${themedPalette.gray9};
  }
  .gray10 {
    background-color: ${themedPalette.gray10};
  }
`;
