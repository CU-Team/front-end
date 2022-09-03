import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const CloseBtn = (props: IconProps) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={10} cy={10} r={10} fill="#AFAEB6" />
    <path
      d="m13.375 6.625-6.75 6.75M13.375 13.375l-6.75-6.75"
      stroke="#fff"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseBtn;
