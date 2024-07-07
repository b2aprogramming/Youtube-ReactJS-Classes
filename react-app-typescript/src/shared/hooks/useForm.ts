import { useState } from 'react';

// Custom hook for managing form fields
function useForm (initialValues: any, validationSchema: any = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<any>({});
  const [fieldValidity, setFieldValidity] = useState<any>({});
  const [isValid, setValid] = useState<any>(true);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });

    // Validate the field based on validation schema
    if (validationSchema[name]) {
      const errorMessage = validationSchema[name](value);
      const errorObj = {
        ...errors,
        [name]: errorMessage
      }
      setErrors(errorObj);
        setFieldValidity({
            ...fieldValidity,
            [name]: errorMessage === '' ? true : false
        });

        const valid = checkValidInvalid(errorObj);
        setValid(valid);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate all fields before submitting
    const newErrors: any = {};
    const validity: any = {};
    Object.keys(validationSchema).forEach((name) => {
      const errorMessage = validationSchema[name](values[name]);
      if (errorMessage) {
        newErrors[name] = errorMessage;
        validity[name] = false;
      }else {
        validity[name] = true;
      }
    });

    setFieldValidity(validity);
    const valid = checkValidInvalid(newErrors);
    setValid(valid);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission logic here, e.g., API call
      console.log("Form submitted with values:", values);
    }

   
  };

  const checkValidInvalid = (errs: any) => {
    let isValid = true;
    for(let key in errs) {
        if(errs[key]) {
           return false
        }
    }
    return isValid;
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isValid,
    fieldValidity
  };
};

export default useForm;