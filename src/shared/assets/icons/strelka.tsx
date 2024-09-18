import React from 'react';

interface IStrelkaProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const StrelkaIcon: React.FC<IStrelkaProps> = ({ ...props }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.26102 3.72006C10.2463 4.28892 10.2463 5.71108 9.26103 6.27994L3.16448 9.79979C2.17918 10.3687 0.947549 9.65757 0.947549 8.51984L0.94755 1.48016C0.94755 0.342431 2.17918 -0.368652 3.16448 0.200212L9.26102 3.72006Z"
        fill="#65D6E3"
      />
    </svg>
  );
};
