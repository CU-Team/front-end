import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const Logo = (props: IconProps) => (
  <svg
    viewBox="0 0 133 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M37.95 14.117V31.8h-3.547v-7.524h-7.575V31.8h-3.547V14.117h3.547v7.271h7.575v-7.27h3.546Zm4.529 1.976c-.625 0-1.149-.194-1.57-.582a2.032 2.032 0 0 1-.609-1.495c0-.591.203-1.08.608-1.47.422-.405.946-.607 1.57-.607.626 0 1.14.202 1.546.608.422.388.633.878.633 1.469 0 .591-.21 1.09-.633 1.495-.405.388-.92.582-1.545.582Zm1.748 1.672V31.8H40.68V17.765h3.547Zm8.241-.228c1.047 0 1.968.211 2.762.634.793.405 1.418.937 1.874 1.596v-2.002h3.572v14.136c0 1.3-.262 2.458-.785 3.471-.524 1.03-1.309 1.84-2.356 2.432-1.047.608-2.314.912-3.8.912-1.993 0-3.631-.465-4.915-1.393-1.266-.93-1.984-2.196-2.153-3.8h3.521c.186.641.583 1.148 1.191 1.52.625.388 1.376.582 2.255.582 1.03 0 1.866-.312 2.508-.937.641-.608.962-1.537.962-2.787v-2.178c-.456.658-1.089 1.207-1.9 1.646-.794.44-1.706.659-2.736.659a6.028 6.028 0 0 1-3.242-.912c-.98-.608-1.757-1.46-2.331-2.559-.557-1.114-.836-2.39-.836-3.825 0-1.419.279-2.677.836-3.775.574-1.098 1.343-1.942 2.305-2.533.98-.591 2.07-.887 3.268-.887Zm4.636 7.246c0-.862-.169-1.596-.506-2.204-.338-.625-.794-1.098-1.368-1.419a3.586 3.586 0 0 0-1.85-.507c-.658 0-1.266.16-1.824.482-.557.32-1.013.793-1.368 1.418-.338.608-.506 1.334-.506 2.179 0 .844.168 1.588.506 2.23.355.624.811 1.105 1.368 1.443a3.541 3.541 0 0 0 1.824.507c.659 0 1.275-.16 1.85-.481a3.686 3.686 0 0 0 1.368-1.419c.337-.625.506-1.368.506-2.23Zm14.18-7.22c1.064 0 2.01.236 2.838.709.827.456 1.469 1.14 1.925 2.052.473.895.71 1.976.71 3.243V31.8H73.21v-7.752c0-1.115-.28-1.968-.836-2.559-.558-.608-1.318-.912-2.28-.912-.98 0-1.757.304-2.331.912-.557.591-.836 1.444-.836 2.559V31.8H63.38V13.053h3.547v6.46c.456-.608 1.064-1.08 1.824-1.418.76-.355 1.604-.532 2.533-.532Zm11.632-4.51V31.8h-3.547V13.053h3.547Zm4.542 3.04c-.624 0-1.148-.194-1.57-.582a2.032 2.032 0 0 1-.608-1.495c0-.591.202-1.08.608-1.47.422-.405.945-.607 1.57-.607.625 0 1.14.202 1.546.608.422.388.633.878.633 1.469 0 .591-.211 1.09-.633 1.495-.406.388-.92.582-1.546.582Zm1.748 1.672V31.8H85.66V17.765h3.546Zm8.242-.228c1.047 0 1.967.211 2.761.634.794.405 1.419.937 1.875 1.596v-2.002h3.572v14.136c0 1.3-.262 2.458-.786 3.471-.523 1.03-1.308 1.84-2.356 2.432-1.047.608-2.313.912-3.8.912-1.992 0-3.63-.465-4.914-1.393-1.267-.93-1.985-2.196-2.153-3.8h3.52c.187.641.584 1.148 1.192 1.52.624.388 1.376.582 2.254.582 1.03 0 1.866-.312 2.508-.937.642-.608.963-1.537.963-2.787v-2.178c-.456.658-1.09 1.207-1.9 1.646-.794.44-1.706.659-2.736.659a6.028 6.028 0 0 1-3.243-.912c-.98-.608-1.756-1.46-2.33-2.559-.558-1.114-.837-2.39-.837-3.825 0-1.419.28-2.677.837-3.775.574-1.098 1.342-1.942 2.305-2.533.98-.591 2.069-.887 3.268-.887Zm4.636 7.246c0-.862-.169-1.596-.507-2.204-.338-.625-.794-1.098-1.368-1.419a3.585 3.585 0 0 0-1.85-.507c-.658 0-1.266.16-1.823.482-.558.32-1.014.793-1.368 1.418-.338.608-.507 1.334-.507 2.179 0 .844.169 1.588.507 2.23.354.624.81 1.105 1.368 1.443a3.541 3.541 0 0 0 1.824.507 3.73 3.73 0 0 0 1.849-.481 3.689 3.689 0 0 0 1.368-1.419c.338-.625.507-1.368.507-2.23Zm14.18-7.22c1.064 0 2.01.236 2.837.709.828.456 1.469 1.14 1.925 2.052.473.895.71 1.976.71 3.243V31.8h-3.547v-7.752c0-1.115-.279-1.968-.836-2.559-.557-.608-1.317-.912-2.28-.912-.979 0-1.756.304-2.331.912-.557.591-.836 1.444-.836 2.559V31.8h-3.546V13.053h3.546v6.46c.456-.608 1.064-1.08 1.824-1.418.76-.355 1.605-.532 2.534-.532Zm12.214 3.116v6.789c0 .473.11.82.329 1.039.237.202.625.304 1.165.304h1.647V31.8h-2.229c-2.99 0-4.484-1.453-4.484-4.357v-6.764h-1.672v-2.914h1.672v-3.47h3.572v3.47h3.141v2.914h-3.141Z"
      fill="#000"
    />
    <path
      d="M3.236 23.989c-1.107-.407-1.107-1.971 0-2.378l4.55-1.672c.35-.128.625-.403.753-.752l1.672-4.551c.407-1.106 1.971-1.106 2.378 0l1.672 4.55c.128.35.403.625.752.753l4.551 1.672c1.107.407 1.107 1.971 0 2.378l-4.55 1.672a1.267 1.267 0 0 0-.753.752l-1.672 4.551c-.407 1.107-1.971 1.107-2.378 0l-1.672-4.55a1.267 1.267 0 0 0-.752-.753L3.236 23.99Z"
      fill="#8C46FF"
    />
  </svg>
);

export default Logo;
