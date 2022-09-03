import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const NoItemIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={100} height={100} rx={18.182} fill="#E2E1E6" />
    <path
      d="M18.717 33.685c-1.737-.638-1.737-3.095 0-3.733l7.352-2.702c.548-.201.98-.633 1.181-1.18l2.701-7.353c.639-1.737 3.096-1.737 3.734 0l2.701 7.352c.202.548.633.98 1.181 1.181l7.353 2.702c1.737.638 1.737 3.095 0 3.733l-7.353 2.701c-.548.202-.98.633-1.18 1.181l-2.702 7.353c-.638 1.737-3.095 1.737-3.734 0l-2.701-7.353a1.989 1.989 0 0 0-1.18-1.18l-7.353-2.702Z"
      fill="#fff"
    />
    <rect
      opacity={0.3}
      x={18.182}
      y={56.818}
      width={40.909}
      height={9.091}
      rx={1.989}
      fill="#fff"
    />
    <rect
      opacity={0.3}
      x={18.182}
      y={75}
      width={59.091}
      height={9.091}
      rx={1.989}
      fill="#fff"
    />
  </svg>
);

export default NoItemIcon;
