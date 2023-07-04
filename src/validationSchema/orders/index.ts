import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  customer_name: yup.string().required(),
  delivery_address: yup.string().required(),
  bookseller_id: yup.string().nullable(),
});
