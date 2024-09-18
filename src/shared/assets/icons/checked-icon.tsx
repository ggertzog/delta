import React from 'react';

interface ICheckedProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const CheckedIcon: React.FC<ICheckedProps> = ({ ...props }) => {
  return (
    <svg
      width="16"
      height="11"
      viewBox="0 0 15 11"
      fill="none"
      fillOpacity="1.000000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Shape"
        d="M14.27 0.25C14.58 0.59 14.57 1.11 14.24 1.43L4.61 10.6C4.44 10.75 4.22 10.84
        3.99 10.83C3.77 10.82 3.55 10.71 3.41 10.54L-0.3 6.31C-0.6 5.97 -0.57 5.44 -0.22
        5.14C0.13 4.83 0.65 4.87 0.95 5.22L4.09 8.79L13.09 0.22C13.42 -0.09 13.95 -0.08 14.27 0.25Z"
        fill="#FFFFFF"
        fillRule="evenodd"
      />
    </svg>
  );
};
