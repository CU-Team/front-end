import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const PauseIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={7} height={20} rx={2} fill="#fff" />
    <rect x={11} width={7} height={20} rx={2} fill="#fff" />
  </svg>
);

export default PauseIcon;
