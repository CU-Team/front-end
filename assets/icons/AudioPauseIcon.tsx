import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const AudioPauseIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={5} y={4} width={7} height={20} rx={2} fill="#fff" />
    <rect x={16} y={4} width={7} height={20} rx={2} fill="#fff" />
  </svg>
);

export default AudioPauseIcon;
