import React from 'react';
import styled from 'styled-components';
import useTab from '@hooks/useTab';
import { HomeTabEnum } from '@components/Home/constants';
import Item from '@components/Home/Tab/Item';
import { themedPalette } from '~/libs/themes';
import useHomeTab from '@hooks/useTab/useHomeTab';

interface Props {}

const Tab: React.FC<Props> = props => {
  const {} = props;

  const { selected, handleSelected } = useHomeTab(HomeTabEnum.TOTAL);

  return (
    <StyledWrapper>
      {Object.values(HomeTabEnum).map(tab => (
        <Item
          key={tab}
          isSelected={selected === tab}
          handleSelected={handleSelected}
          value={tab}
          selectedColor={
            tab === HomeTabEnum.TOTAL
              ? themedPalette.gray8
              : themedPalette.primary
          }
        />
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export default Tab;
