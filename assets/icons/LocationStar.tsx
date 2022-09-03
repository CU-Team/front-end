import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const LocationStar = (props: IconProps) => (
  <svg
    viewBox="0 0 22 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.947 10.49c0 6.258-8.947 11.948-8.947 11.948s-8.948-5.69-8.948-11.948c0-5.028 4.006-9.104 8.948-9.104 4.941 0 8.947 4.076 8.947 9.104Z"
      stroke="#AFAEB6"
    />
    <path
      d="M6.733 10.893a.596.596 0 0 1 0-1.119l2.453-.901a.596.596 0 0 0 .353-.354l.902-2.452a.596.596 0 0 1 1.118 0l.902 2.452c.06.164.19.294.353.354l2.453.901c.52.191.52.928 0 1.119l-2.453.901a.596.596 0 0 0-.354.354l-.9 2.453a.596.596 0 0 1-1.12 0l-.9-2.453a.596.596 0 0 0-.354-.354l-2.453-.901Z"
      fill="#AFAEB6"
    />
  </svg>
);

export default LocationStar;
