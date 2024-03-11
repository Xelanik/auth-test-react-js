const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const emailValidation = (email: string) => email.match(emailRegex) !== null && email.length >= 15;

export const passwordValidation = (password: string) => password.length >= 8;
