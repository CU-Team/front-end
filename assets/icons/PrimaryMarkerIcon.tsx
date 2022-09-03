import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const PrimaryMarkerIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 19 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 9.649C18 15.595 9.5 21 9.5 21S1 15.595 1 9.649C1 4.872 4.806 1 9.5 1S18 4.872 18 9.649Z"
      fill="#8C46FF"
    />
    <path
      d="M5.446 10.031a.566.566 0 0 1 0-1.062l2.33-.857a.566.566 0 0 0 .336-.336l.857-2.33a.566.566 0 0 1 1.062 0l.856 2.33c.058.156.18.28.337.336l2.33.857a.566.566 0 0 1 0 1.062l-2.33.856a.566.566 0 0 0-.337.337l-.856 2.33a.566.566 0 0 1-1.062 0l-.857-2.33a.566.566 0 0 0-.336-.337l-2.33-.856Z"
      fill="#fff"
    />
  </svg>
);

export default PrimaryMarkerIcon;
