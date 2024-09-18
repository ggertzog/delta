import React from 'react';

interface IAppleProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const AppleIcon: React.FC<IAppleProps> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#none"
      fillOpacity="1.000000"
      fillRule="nonzero"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.9402 5.19C15.3182 4.75428 15.6065 4.24817 15.7884 3.70074C15.9703 3.1533 16.0422 2.57533 16.0002 2C14.8395 2.09369 13.7622 2.63956 13.0002 3.52C12.6353 3.94198 12.3587 4.43288 12.187 4.96364C12.0152 5.49441 11.9517 6.05424 12.0002 6.61C12.5663 6.61472 13.1259 6.4891 13.6358 6.24286C14.1456 5.99662 14.5919 5.63637 14.9402 5.19ZM17.4602 12.63C17.4669 11.8637 17.6687 11.1118 18.0466 10.4452C18.4245 9.77859 18.9661 9.21926 19.6202 8.82C19.2074 8.22524 18.6617 7.73483 18.0264 7.38767C17.3911 7.04052 16.6836 6.84615 15.9602 6.82C14.4002 6.66 12.9602 7.73 12.1302 7.73C11.3002 7.73 10.1302 6.84 8.83016 6.86C7.98028 6.888 7.15218 7.13578 6.4266 7.57919C5.70103 8.02259 5.10276 8.64648 4.69016 9.39C2.93016 12.45 4.24016 17 6.00016 19.47C6.80016 20.68 7.80016 22.05 9.12016 22C10.4402 21.95 10.8702 21.18 12.4002 21.18C13.9302 21.18 14.4002 22 15.7002 21.97C17.0002 21.94 17.9202 20.73 18.7602 19.52C19.3552 18.6415 19.82 17.6816 20.1402 16.67C19.3476 16.332 18.6715 15.7693 18.1952 15.0513C17.7189 14.3333 17.4634 13.4916 17.4602 12.63Z" />
    </svg>
  );
};
