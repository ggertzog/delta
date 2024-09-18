import React from 'react';

interface IErrorPopup extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const ErrorPopupIcon: React.FC<IErrorPopup> = ({ ...props }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Vector"
        d="M40 0C17.91 0 0 17.91 0 40C0 62.08 17.91 80 40 80C62.08 80 80 62.08 80 40C80 17.91 62.08 0 40
            0ZM40 44C37.79 44 36 42.2 36 40L36 24C36 21.79 37.79 20 40 20C42.2 20 44 21.79 44 24L44 40C44 42.2
            42.2 44 40 44ZM40 60C37.79 60 36 58.2 36 56C36 53.79 37.79 52 40 52C42.2 52 44 53.79 44 56C44 58.2
            42.2 60 40 60Z"
        fill="#CE2727"
        fillOpacity="1"
        fillRule="evenodd"
      />
    </svg>
  );
};
