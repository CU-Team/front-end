import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const Setting = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.724 1.78A1 1 0 0 1 10.7 1h2.6a1 1 0 0 1 .976.78L15 5H9l.724-3.22ZM9.724 22.22a1 1 0 0 0 .976.78h2.6a1 1 0 0 0 .976-.78L15 19H9l.724 3.22ZM22.22 9.724a1 1 0 0 1 .78.976v2.6a1 1 0 0 1-.78.976L19 15V9l3.22.724ZM1.78 9.724A1 1 0 0 0 1 10.7v2.6a1 1 0 0 0 .78.976L5 15V9l-3.22.724Z"
      fill="#302E35"
    />
    <path
      d="M20.835 17.617a1 1 0 0 1-.137 1.242l-1.839 1.838a1 1 0 0 1-1.242.138l-2.789-1.764 4.243-4.243 1.764 2.79ZM6.383 3.165a1 1 0 0 0-1.242.138L3.303 5.14a1 1 0 0 0-.138 1.242l1.764 2.789 4.243-4.243-2.79-1.764ZM6.383 20.835a1 1 0 0 1-1.242-.138L3.303 18.86a1 1 0 0 1-.138-1.242l1.764-2.789 4.243 4.243-2.79 1.764ZM20.835 6.382a1 1 0 0 0-.138-1.241L18.86 3.302a1 1 0 0 0-1.242-.138L14.828 4.93l4.243 4.242 1.764-2.789Z"
      fill="#302E35"
    />
    <circle cx={12} cy={12} r={8.5} fill="#fff" stroke="#302E35" />
  </svg>
);

export default Setting;
