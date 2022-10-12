import * as Yup from 'yup';
import * as Message from './messages';

const username = Yup.string()
  .min(2, Message.TEXT_TOO_SHORT)
  .max(20, Message.TEXT_TOO_LONG)
  .required(Message.TEXT_REQUIRED);

const password = Yup.string().required(Message.TEXT_PASSWORD_REQUIRED);

const signUpValidationSchema = Yup.object().shape({
  username,
  password,
  email: Yup.string().email(Message.TEXT_INVALID_EMAIL).required(Message.TEXT_PASSWORD_REQUIRED),
});

const loginValidationSchema = Yup.object().shape({
  username,
  password,
});

const signupFields = ['username', 'password', 'email'];
const loginFields = ['username', 'password'];

export {
  loginValidationSchema,
  signUpValidationSchema,
  loginFields,
  signupFields,
};
