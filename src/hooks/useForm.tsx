import { useState } from "react";
import { emailValidation, passwordValidation } from "../helpers/validations";
import { AxiosResponse } from "axios";

const useForm = (fields: { [key: string]: string }) => {
  const [inputFields, changeInputFields] = useState<{ [key: string]: string }>(fields);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const onSubmit = (callback: () => Promise<void | AxiosResponse>) => {
    const errors: { [key: string]: string } = {};

    for (const keys in inputFields) {
      if (keys === "email" && !emailValidation(inputFields[keys])) errors.email = "Wrong email type";
      if (keys === "password" && !passwordValidation(inputFields[keys])) errors.password = "Wrong password type";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) callback();
    else return;
  };

  return { inputFields, errors, handleChangeInputs, onSubmit };
};

export default useForm;
