import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const LocationStarActive = (props: IconProps) => (
  <svg
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.947 9.49c0 6.258-8.947 11.948-8.947 11.948S2.052 15.748 2.052 9.49C2.052 4.462 6.058.386 11 .386c4.941 0 8.947 4.076 8.947 9.104Z"
      fill="#302E35"
    />
    <path
      d="M6.733 9.893a.596.596 0 0 1 0-1.119l2.453-.901a.596.596 0 0 0 .353-.354l.902-2.452a.596.596 0 0 1 1.118 0l.902 2.452c.06.164.19.294.353.354l2.453.901c.52.191.52.928 0 1.119l-2.453.901a.596.596 0 0 0-.354.354l-.9 2.453a.596.596 0 0 1-1.12 0l-.9-2.453a.596.596 0 0 0-.354-.354l-2.453-.901Z"
      fill="#fff"
    />
  </svg>
);

export default LocationStarActive;
