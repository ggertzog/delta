import React from 'react';

interface ISeparatorProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const SeparatorIcon: React.FC<ISeparatorProps> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#202020"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 4V20" />
    </svg>
  );
};
