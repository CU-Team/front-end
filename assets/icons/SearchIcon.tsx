import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const SearchIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={8.591}
      cy={8.591}
      r={6.025}
      stroke="#302E35"
      strokeWidth={1.133}
    />
    <path stroke="#302E35" strokeWidth={1.133} d="m12.481 12.455 3.877 3.877" />
  </svg>
);

export default SearchIcon;
