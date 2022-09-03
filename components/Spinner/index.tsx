import styled, { keyframes } from 'styled-components';
import { themedPalette } from '~/libs/themes';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 3px solid ${themedPalette.gray3};
  border-right: 3px solid ${themedPalette.gray3};
  border-bottom: 3px solid ${themedPalette.gray3};
  border-left: 3px solid transparent;
  background: transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export default Spinner;
