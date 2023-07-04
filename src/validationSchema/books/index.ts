import * as yup from 'yup';

export const bookValidationSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  price: yup.number().integer().required(),
  bookseller_id: yup.string().nullable(),
});
