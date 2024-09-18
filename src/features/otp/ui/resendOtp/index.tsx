import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface ResendOTPProps {
  onResend: () => void;
}

/**
 * Renders a component for resending an OTP (One-Time Password) after a specified time interval.
 *
 * @param {ResendOTPProps} props - The component props.
 * @param {function} props.onResend - The callback function to be called when the OTP is resent.
 * @return {JSX.Element} The rendered ResendOTP component.
 */
export const ResendOTP = ({ onResend }: ResendOTPProps) => {
  const [timer, setTimer] = useState(60);

  const handleResend = () => {
    setTimer(60);
    onResend();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer]);

  return (
    <div className={styles.wrapper}>
      <p>Выслать код заново через {timer} секунды</p>
      <button onClick={handleResend} disabled={timer > 0} type="button">
        Выслать заново
      </button>
    </div>
  );
};
