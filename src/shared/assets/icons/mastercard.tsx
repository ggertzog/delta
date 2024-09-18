import React from 'react';

interface IMastercardProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const MastercardIcon: React.FC<IMastercardProps> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 3.75879H2C0.895431 3.75879 0 4.65422 0 5.75879V21.8049C0 22.9095 0.89543 23.8049 2 23.8049H22C23.1046 23.8049 24 22.9095 24 21.8049V5.75879C24 4.65422 23.1046 3.75879 22 3.75879Z"
        fill="#202020"
      />
      <ellipse
        cx="8.72701"
        cy="13.782"
        rx="5.45455"
        ry="6.26441"
        fill="#EB001A"
      />
      <ellipse
        cx="15.2729"
        cy="13.782"
        rx="5.45455"
        ry="6.26441"
        fill="#F79E1C"
      />
      <path
        d="M12.0002 18.7935C13.325 17.6506 14.182 15.8311 14.182 13.7815C14.182 11.732 13.325 9.91245 12.0002 8.76953C10.6754 9.91245 9.81836 11.732 9.81836 13.7815C9.81836 15.8311 10.6754 17.6506 12.0002 18.7935Z"
        fill="#FF5F00"
      />
    </svg>
  );
};
