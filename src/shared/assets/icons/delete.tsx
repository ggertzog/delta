import React from 'react';

interface IDeleteProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const DeleteIcon: React.FC<IDeleteProps> = ({ ...props }) => {
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
      fillOpacity="1.000000"
      fillRule="nonzero"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6L18 18" />
    </svg>
  );
};
