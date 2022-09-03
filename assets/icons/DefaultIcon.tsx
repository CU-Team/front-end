import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const DefaultIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={30} cy={30} r={30} fill="#F6F1FF" />
    <path
      d="M40 36c-1.014.608-2.472 1.113-4.227 1.464-1.756.351-3.747.536-5.773.536s-4.017-.185-5.772-.536c-1.756-.35-3.214-.856-4.228-1.464"
      stroke="#8C46FF"
      strokeWidth={3.362}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M22 30a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM32.706 26.127a.668.668 0 0 1 0-1.254l2.758-1.013a.668.668 0 0 0 .396-.396l1.013-2.758a.668.668 0 0 1 1.254 0l1.013 2.758a.668.668 0 0 0 .396.396l2.758 1.013a.668.668 0 0 1 0 1.254l-2.758 1.013a.668.668 0 0 0-.396.396l-1.013 2.758a.668.668 0 0 1-1.254 0l-1.013-2.758a.668.668 0 0 0-.396-.396l-2.758-1.013Z"
      fill="#8C46FF"
    />
  </svg>
);

export default DefaultIcon;
