import * as Yup from 'yup';

import * as Message from './messages';

const title = Yup.string()
  .min(10, Message.TEXT_TOO_SHORT)
  .max(50, Message.TEXT_TOO_LONG)
  .required(Message.TEXT_REQUIRED);

const description = Yup.string()
  .min(60, Message.TEXT_TOO_SHORT)
  .required(Message.TEXT_REQUIRED);

export const currentFields = ['title', 'description', 'tags'];

export const newsFormValidationSchema = Yup.object().shape({
  title,
  description,
  tags: Yup.string(),
});
