import { TProfileData } from '../model';

export const inputLegends: TProfileData = {
  name: 'Имя',
  surname: 'Фамилия',
  email: 'Email адрес',
  password: 'Пароль',
};

/**
 * Returns the corresponding input type based on the provided key.
 *
 * @param {keyof TProfileData} key - The key to determine the input type.
 * @return {'text' | 'email' | 'password'} The corresponding input type.
 */
export const inputTypeFromKey = (
  key: keyof TProfileData,
): 'text' | 'email' | 'password' => {
  switch (key) {
    case 'email':
      return 'email';
    case 'password':
      return 'password';
    default:
      return 'text';
  }
};
