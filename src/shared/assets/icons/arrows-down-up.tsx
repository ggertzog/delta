import React from 'react';

interface IArrowsDownUpProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const ArrowsDownUpIcon: React.FC<IArrowsDownUpProps> = ({
  ...props
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      stroke="#202020"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.5 16.5L7.5 19.5L4.5 16.5" />
      <path d="M7.5 4.5V19.5" />
      <path d="M13.5 7.5L16.5 4.5L19.5 7.5" />
      <path d="M16.5 19.5V4.5" />
    </svg>
  );
};
