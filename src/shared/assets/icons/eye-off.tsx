import React from 'react';

interface IEyeOffProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const EyeOffIcon: React.FC<IEyeOffProps> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.87964 9.87988C9.58489 10.1545 9.34848 10.4857 9.18451 10.8537C9.02055 11.2217 8.93238 11.619 8.92527 12.0218C8.91816 12.4246 8.99226 12.8247 9.14315 13.1983C9.29403 13.5718 9.51861 13.9112 9.80348 14.196C10.0884 14.4809 10.4277 14.7055 10.8012 14.8564C11.1748 15.0073 11.5749 15.0814 11.9777 15.0742C12.3805 15.0671 12.7778 14.979 13.1458 14.815C13.5138 14.651 13.845 14.4146 14.1196 14.1199" />
      <path d="M10.7305 5.08C11.1518 5.02751 11.5759 5.00079 12.0005 5C19.0005 5 22.0005 12 22.0005 12C21.5534 12.9571 20.9927 13.8569 20.3305 14.68" />
      <path d="M6.61 6.61035C4.62125 7.96498 3.02987 9.82561 2 12.0004C2 12.0004 5 19.0004 12 19.0004C13.9159 19.0055 15.7908 18.4455 17.39 17.3904" />
      <path d="M2 2L22 22" />
    </svg>
  );
};
