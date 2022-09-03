import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const FeedActive = (props: IconProps) => (
  <svg
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={22} height={22} rx={4} fill="#302E35" />
    <path
      d="M4.118 7.41a.438.438 0 0 1 0-.82l1.617-.595a.438.438 0 0 0 .26-.26l.594-1.617a.438.438 0 0 1 .822 0l.594 1.617c.044.12.14.216.26.26l1.617.594c.383.14.383.681 0 .822l-1.617.594a.438.438 0 0 0-.26.26l-.594 1.617a.438.438 0 0 1-.822 0l-.594-1.617a.438.438 0 0 0-.26-.26l-1.617-.594Z"
      fill="#fff"
    />
    <rect
      opacity={0.3}
      x={4}
      y={12.5}
      width={9}
      height={2}
      rx={0.438}
      fill="#fff"
    />
    <rect
      opacity={0.3}
      x={4}
      y={16.5}
      width={13}
      height={2}
      rx={0.438}
      fill="#fff"
    />
  </svg>
);

export default FeedActive;
