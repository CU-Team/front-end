import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const LogoStarIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.555 8.939c-.874-.321-.874-1.557 0-1.878l3.592-1.32a1 1 0 0 0 .594-.594l1.32-3.592c.321-.874 1.557-.874 1.878 0l1.32 3.592a1 1 0 0 0 .593.594l3.593 1.32c.874.321.874 1.557 0 1.878l-3.593 1.32a1 1 0 0 0-.593.593l-1.32 3.593c-.321.874-1.557.874-1.878 0l-1.32-3.593a1 1 0 0 0-.594-.593l-3.592-1.32Z"
      fill="#8C46FF"
    />
  </svg>
);

export default LogoStarIcon;
