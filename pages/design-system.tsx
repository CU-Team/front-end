import type { NextPage } from 'next';
import styled from 'styled-components';

const DesignSystem: NextPage = () => {
  return (
    <StyledWrapper>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <div className="subtitle1">subtitle1</div>
      <div className="subtitle2">subtitle2</div>
      <div className="body1">body1</div>
      <div className="body2">body2</div>
      <div className="caption">caption</div>
    </StyledWrapper>
  );
};

export default DesignSystem;

const StyledWrapper = styled.div``;
