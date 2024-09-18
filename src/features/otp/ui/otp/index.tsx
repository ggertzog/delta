import React, {
  ChangeEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Button } from '@/shared/ui/button';

const cx = classNames.bind(styles);

interface OTPProps {
  onSubmit: (opt: number) => void;
  length?: number;
  error?: boolean;
  success?: boolean;
}

/**
 * Renders an OTP (One-Time Password) input form with the specified length and callback for submission.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onSubmit - The callback function to be called when the form is submitted.
 * @param {number} [props.length=4] - The length of the OTP.
 * @param {boolean} [props.error=false] - Indicates if there is an error in the OTP input.
 * @param {boolean} [props.success=false] - Indicates if the OTP input is valid.
 * @return {JSX.Element} The rendered OTP form.
 */
export const OTP = ({
  onSubmit,
  length = 4,
  error = false,
  success = false,
}: OTPProps) => {
  const [inputs, setInputs] = useState<string[]>(new Array(length).fill(''));
  const inputsRef = useRef<HTMLInputElement[]>(new Array(length).fill(null));

  /**
   * Updates the input values based on the user's input and handles focus on the next input field.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The event object representing the input change.
   * @param {number} index - The index of the input field being updated.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;
    const newInputs = [...inputs];
    newInputs[index] = value.slice(-1);
    setInputs(newInputs);

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  /**
   * Handles the keydown event for the input field.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e - The keyboard event.
   * @param {number} index - The index of the input field.
   */
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace' && !inputs[index]) {
      inputsRef.current[index - 1].focus();
    }
  };

  /**
   * Handles the form submission event for the OTP input form.
   *
   * @param {FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const isValidOTP = inputs.every((input) => input !== '');
    if (isValidOTP) {
      const otp = parseInt(inputs.join(''));
      onSubmit(otp);
    }
  };

  /**
   * Handles the paste event for the input field.
   *
   * @param {React.ClipboardEvent} e - The paste event.
   */
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const values = e.clipboardData?.getData('text').split('') || [];
    const isValid = values.every((value) => !isNaN(Number(value)));

    if (isValid) {
      const newInputs = [...inputs];
      for (let i = 0; i < values.length; i++) {
        newInputs[i] = values[i];
      }
      setInputs(newInputs);
      inputsRef.current[length - 1].focus();
    }
  };

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.container}>
        <div className={styles.otp}>
          {inputs.map((input, index) => (
            <input
              key={index}
              value={input}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={(e) => handlePaste(e)}
              ref={(refs) =>
                (inputsRef.current[index] = refs as HTMLInputElement)
              }
              type="text"
              placeholder="0"
              className={cx(
                'input',
                error && 'input_error',
                success && 'input_success',
              )}
            />
          ))}
        </div>
        {error && <span className={styles.error}>Код введен неверно</span>}
      </div>
      <Button theme="blue" type="submit">
        Подтвердить
      </Button>
    </form>
  );
};
