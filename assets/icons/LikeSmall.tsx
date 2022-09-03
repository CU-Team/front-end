import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const LikeSmall = (props: IconProps) => (
  <svg
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.5 16a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" fill="#EADDFF" />
    <path
      d="M11.335 10.586c-.37.1-.772.17-1.188.205-1.071.101-2.17.101-3.242 0a6.688 6.688 0 0 1-1.188-.205"
      stroke="#8C46FF"
      strokeWidth={0.944}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M6.29 8.313a1.124 1.124 0 1 0 0-2.247 1.124 1.124 0 0 0 0 2.247ZM9.298 7.226a.188.188 0 0 1 0-.354l.773-.28a.186.186 0 0 0 .112-.113l.281-.772a.188.188 0 0 1 .354 0l.28.772a.185.185 0 0 0 .113.112l.773.281a.189.189 0 0 1 .09.285.189.189 0 0 1-.09.07l-.773.28a.185.185 0 0 0-.112.112l-.281.773a.188.188 0 0 1-.354 0l-.28-.773a.185.185 0 0 0-.113-.112l-.773-.28Z"
      fill="#8C46FF"
    />
  </svg>
);

export default LikeSmall;
