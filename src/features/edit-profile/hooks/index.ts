import { useState, useEffect } from 'react';
import { TProfileData } from '../model';

// Emulation of the store, delete after the implementation of the entity profile
let mockStore: TProfileData = {
  name: 'Анна',
  surname: '',
  email: 'anna_ana@gmail.com',
  password: '123456password',
};

/**
 * Custom hook that provides the profile data and related state and functions.
 *
 * @return {Object} An object containing the following properties:
 *   - formData: The current profile data.
 *   - setFormData: A function to update the profile data.
 *   - formChanged: A boolean indicating whether the form has been changed.
 *   - setFormChanged: A function to update the form changed state.
 *   - saveProfileData: A function to save the edited profile data.
 */
export const useProfileData = () => {
  // replace with a request to the entity of the profile for data
  const [formData, setFormData] = useState<TProfileData>(mockStore);
  const [formChanged, setFormChanged] = useState<boolean>(false);

  const saveProfileData = () => {
    /**
     * Replaces the mockStore with the edited profile data.
     *
     * This function is called when the user wants to save the edited profile data.
     * It creates a new object by spreading the properties of the formData object
     * and assigns it to the mockStore variable.
     *
     * This function should be replaced with the actual implementation of sending
     * the edited profile data to the server after the feature is implemented.
     */
    mockStore = { ...formData };
  };

  // After changing the form field, we check whether the values of the form fields match
  // with profile data from the store
  useEffect(() => {
    let key: keyof TProfileData;
    for (key in formData) {
      // replace by referring to the entity of the profile
      if (formData[key] !== mockStore[key]) {
        setFormChanged(true);
        return;
      }
    }
    setFormChanged(false);
  }, [formData]);

  return {
    formData,
    setFormData,
    formChanged,
    setFormChanged,
    saveProfileData,
  };
};
