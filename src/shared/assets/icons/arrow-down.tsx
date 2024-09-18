import React from 'react';

interface IArrowDownProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const ArrowDownIcon: React.FC<IArrowDownProps> = ({ ...props }) => {
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
      <path d="M6 9L12 15L18 9" />
    </svg>
  );
};
