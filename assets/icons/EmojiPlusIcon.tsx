import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const EmojiPlusIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 21 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 19.375a7.875 7.875 0 1 0 0-15.75 7.875 7.875 0 0 0 0 15.75Z"
      stroke="#82818D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.91 13.468a3.94 3.94 0 0 1-6.82 0"
      stroke="#82818D"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M7.547 10.844a.984.984 0 1 0 0-1.97.984.984 0 0 0 0 1.97ZM11.453 10.844a.984.984 0 1 0 0-1.97.984.984 0 0 0 0 1.97Z"
      fill="#82818D"
    />
    <mask
      id="emoji-plus-icon_svg__a"
      maskUnits="userSpaceOnUse"
      x={10.049}
      y={0.049}
      width={11}
      height={11}
      fill="#000"
    >
      <path fill="#fff" d="M10.049.049h11v11h-11z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.983 4.983V2.049h-1v2.934h-2.934v1h2.934v2.934h1V5.983h2.934v-1h-2.934Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.983 4.983V2.049h-1v2.934h-2.934v1h2.934v2.934h1V5.983h2.934v-1h-2.934Z"
      fill="#82818D"
    />
    <path
      d="M15.983 2.049h1.5a1.5 1.5 0 0 0-1.5-1.5v1.5Zm0 2.934h-1.5a1.5 1.5 0 0 0 1.5 1.5v-1.5Zm-1-2.934v-1.5a1.5 1.5 0 0 0-1.5 1.5h1.5Zm0 2.934v1.5a1.5 1.5 0 0 0 1.5-1.5h-1.5Zm-2.934 0v-1.5a1.5 1.5 0 0 0-1.5 1.5h1.5Zm0 1h-1.5a1.5 1.5 0 0 0 1.5 1.5v-1.5Zm2.934 0h1.5a1.5 1.5 0 0 0-1.5-1.5v1.5Zm0 2.934h-1.5a1.5 1.5 0 0 0 1.5 1.5v-1.5Zm1 0v1.5a1.5 1.5 0 0 0 1.5-1.5h-1.5Zm0-2.934v-1.5a1.5 1.5 0 0 0-1.5 1.5h1.5Zm2.934 0v1.5a1.5 1.5 0 0 0 1.5-1.5h-1.5Zm0-1h1.5a1.5 1.5 0 0 0-1.5-1.5v1.5Zm-4.434-2.934v2.934h3V2.049h-3Zm.5 1.5h1v-3h-1v3Zm1.5 1.434V2.049h-3v2.934h3Zm-4.434 1.5h2.934v-3h-2.934v3Zm1.5-.5v-1h-3v1h3Zm1.434-1.5h-2.934v3h2.934v-3Zm1.5 4.434V5.983h-3v2.934h3Zm-.5-1.5h-1v3h1v-3Zm-1.5-1.434v2.934h3V5.983h-3Zm4.434-1.5h-2.934v3h2.934v-3Zm-1.5.5v1h3v-1h-3Zm-1.434 1.5h2.934v-3h-2.934v3Z"
      fill="#fff"
      mask="url(#emoji-plus-icon_svg__a)"
    />
  </svg>
);

export default EmojiPlusIcon;
