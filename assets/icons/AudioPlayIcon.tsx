import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const AudioPlayIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 19 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.429 8.938c1.587.916 1.587 3.207 0 4.124l-13.858 8C1.984 21.98 0 20.833 0 19V3C0 1.167 1.984.02 3.571.938l13.858 8Z"
      fill="#fff"
    />
  </svg>
);

export default AudioPlayIcon;
