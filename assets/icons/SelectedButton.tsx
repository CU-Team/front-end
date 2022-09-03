import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const SelectedButton = (props: IconProps) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={15} cy={15} r={15} fill="#8C46FF" />
    <path d="M9 14.625 13.615 19 21 12" stroke="#fff" />
  </svg>
);

export default SelectedButton;
