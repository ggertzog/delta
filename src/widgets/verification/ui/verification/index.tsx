import React from 'react';
import styles from './styles.module.scss';
import { OTP, ResendOTP } from '@/features/otp';
import { VerificationHeader } from '@/widgets/verification/ui/verification-header';
import { Popup } from '@/shared/ui/popup';

interface IVerificationModalProps {
  isOpen: boolean;
  onOpen: () => void;
  length?: number;
}

/**
 * Renders a Verification modal component with a given length, isOpen status, and onOpen callback.
 *
 * @param {IVerificationModalProps} props - The props for the Verification modal.
 * @param {number} [props.length = 4] - The length of the verification code (default is 4).
 * @param {boolean} props.isOpen - The status of the modal (whether it is open or not).
 * @param {() => void} props.onOpen - The callback function to be called when the modal is opened.
 * @return {JSX.Element} The rendered Verification modal component.
 */
export const Verification = ({
  length = 4,
  isOpen,
  onOpen,
}: IVerificationModalProps): JSX.Element => {
  return (
    <Popup isOpen={isOpen} setIsOpen={onOpen}>
      <div className={styles.wrapper}>
        <VerificationHeader length={length} />

        <div className={styles.body}>
          <OTP onSubmit={() => {}} />

          <ResendOTP onResend={() => {}} />
        </div>
      </div>
    </Popup>
  );
};
