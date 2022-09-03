import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const UnselectedButton = (props: IconProps) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={15} cy={15} r={14.5} fill="#fff" stroke="#AFAEB6" />
    <path d="M9 14.625 13.615 19 21 12" stroke="#AFAEB6" />
  </svg>
);

export default UnselectedButton;
