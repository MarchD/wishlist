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

export const newGiftSchema = yup.object({
  title: yup.string().required(),
  link: yup.string(),
  price: yup.number().required(),
  image: yup.mixed(),
});

export const choosingGiftSchema = yup.object({
  email: yup.string().required(),
});
