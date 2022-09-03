import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const CloseIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m18.75 5.25-13.5 13.5M18.75 18.75 5.25 5.25"
      stroke="#121212"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
