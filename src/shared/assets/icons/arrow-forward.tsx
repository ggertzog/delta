import React from 'react';

interface IArrowForwardProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const ArrowForwardIcon: React.FC<IArrowForwardProps> = ({
  ...props
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#202020"
      fillOpacity="1.000000"
      fillRule="nonzero"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5.2 13L16.37 13L11.49 17.87C11.1 18.26 11.1 18.91 11.49 19.29C11.88 19.68 12.51 19.68 12.9 19.29L19.49 12.71C19.88 12.31 19.88 11.68 19.49 11.29L12.91 4.7C12.73 4.51 12.47 4.4 12.21 4.4C11.94 4.4 11.69 4.51 11.5 4.7C11.11 5.08 11.11 5.71 11.5 6.1L16.37 11L5.2 11C4.65 11 4.2 11.45 4.2 12C4.2 12.54 4.65 13 5.2 13Z" />
    </svg>
  );
};
