import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().min(6).required(),
});

export const registrationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().min(6).required(),
  passwordConfirmation: yup
    .string()
    .test('passwords-match', 'Passwords must match', function passwordValidation(value) {
      return this.parent.password === value;
    })
    .required(),
});
