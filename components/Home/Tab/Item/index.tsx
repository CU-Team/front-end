import React from 'react';
import type { HomeTabEnum } from '@components/Home/constants';
import styled from 'styled-components';
import { themedPalette } from '~/libs/themes';

interface Props {
  value: HomeTabEnum;
  isSelected: boolean;
  selectedColor: string;
  handleSelected: (newSelected: HomeTabEnum) => void;
}

const Item: React.FC<Props> = props => {
  const { value, handleSelected } = props;

  const onClick = () => {
    handleSelected(value);
  };

  return (
    <StyledWrapper {...props} onClick={onClick}>
      <div className="body1">{value}</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{
  isSelected: boolean;
  selectedColor: string;
}>`
  cursor: pointer;
  padding: 9px 16px;
  border-radius: 20.5px;
  background-color: ${({ isSelected, selectedColor }) =>
    isSelected ? selectedColor : themedPalette.gray0};
  border: 0.5px solid
    ${({ isSelected }) => (isSelected ? 'rgba(0,0,0,0)' : themedPalette.gray2)};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-right: 8px;
  :last-child {
    margin-right: 0;
  }

  > div {
    color: ${({ isSelected }) =>
      isSelected ? themedPalette.gray0 : themedPalette.gray4};
  }
`;

export default Item;
