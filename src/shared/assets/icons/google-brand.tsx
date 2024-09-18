import React from 'react';

interface IGoogleBrandProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const GoogleBrandIcon: React.FC<IGoogleBrandProps> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#202020"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.9557 10.3557V13.8067H16.7477C16.3017 15.9997 14.4347 17.2597 11.9557 17.2597C9.06826 17.22 6.74838 14.868 6.74838 11.9802C6.74838 9.09251 9.06826 6.74047 11.9557 6.70073C13.1559 6.6993 14.3192 7.11581 15.2457 7.87873L17.8457 5.27873C14.8633 2.6568 10.5077 2.31957 7.15727 4.45118C3.80683 6.58279 2.26674 10.6709 3.37797 14.4834C4.48919 18.2958 7.98466 20.9162 11.9557 20.9137C16.4227 20.9137 20.4847 17.6647 20.4847 11.9797C20.4778 11.4324 20.4108 10.8874 20.2847 10.3547L11.9557 10.3557Z" />
    </svg>
  );
};
