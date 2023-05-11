import * as yup from 'yup'
import { VALIDATION_KEYS } from './constants'

const {EMAIL, PASSWORD} = VALIDATION_KEYS;

export const schema = yup.object({
  email: yup
    .string()
    .email(EMAIL.VALID)
    .required(EMAIL.REQUIRED)
    .min(8, EMAIL.LENGTH)
    .matches(/^(?=.*[a-z])/i, EMAIL.LETTER)
    .matches(/^(?=.*[0-9])/, EMAIL.DIGIT)
    .matches(
      /^(?=.*[!@#$%^&*])/,
      EMAIL.SPECIAL,
    ),
  password: yup
    .string()
    .required(PASSWORD.REQUIRED)
    .min(8, PASSWORD.LENGTH)
    .matches(/^(?=.*[a-z])/i, PASSWORD.LETTER)
    .matches(/^(?=.*[0-9])/, PASSWORD.DIGIT)
    .matches(
      /^(?=.*[!@#$%^&*])/,
      PASSWORD.SPECIAL,
    ),
})

export type FormData = yup.InferType<typeof schema>