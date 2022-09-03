import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const MarkerIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 15 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.167 7.919C14.167 12.676 7.5 17 7.5 17S.833 12.676.833 7.919C.833 4.098 3.818 1 7.5 1s6.667 3.098 6.667 6.919Z"
      fill="#000"
    />
    <circle cx={7.5} cy={7.667} r={2.667} fill="#fff" />
  </svg>
);

export default MarkerIcon;
