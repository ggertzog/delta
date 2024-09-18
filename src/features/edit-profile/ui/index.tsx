import React, { useState } from 'react';
import { Popup } from '@/shared/ui/popup';
import { PopupSuccess } from '@/shared/ui/popup-success';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { useProfileData } from '../hooks';
import { inputLegends } from '../utils';
import { inputTypeFromKey } from '../utils';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

/**
 * Renders the EditProfile component.
 *
 * @return {JSX.Element} The rendered EditProfile component.
 */
export const EditProfile = () => {
  const {
    formData,
    setFormData,
    formChanged,
    setFormChanged,
    saveProfileData,
  } = useProfileData();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // implement validation of form fields
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handles the form submission event.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   * @return {void} This function does not return anything.
   */
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveProfileData();
    setFormChanged(false);
    setIsOpen(true);
  };

  // implement a return to the main page after configuring the routing
  const onReturnToSearchClick = () => {};

  const cx = classNames.bind(styles);

  const inputFields = Object.keys(formData).map((key) => (
    <fieldset key={key} className={styles.fieldset}>
      <legend className={styles.legend}>
        {inputLegends[key as keyof typeof inputLegends]}
      </legend>
      <Input
        type={inputTypeFromKey(key as keyof typeof formData)}
        onChange={onInputChange}
        name={key}
        value={formData[key as keyof typeof formData]}
        autoComplete={key}
      />
    </fieldset>
  ));

  return (
    <>
      <form className={styles.form} onSubmit={onSubmitForm}>
        {inputFields}
        <fieldset className={cx(styles.fieldset, styles.buttons)}>
          <Button size="large" type="submit" disabled={!formChanged}>
            Сохранить изменения
          </Button>
          <Button
            size="large"
            type="button"
            theme="transparent"
            onClick={onReturnToSearchClick}
          >
            Вернуться к поиску
          </Button>
        </fieldset>
      </form>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
        <PopupSuccess text="Изменения сохранены" />
      </Popup>
    </>
  );
};
