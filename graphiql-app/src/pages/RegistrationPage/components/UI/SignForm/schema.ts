import * as yup from 'yup'

export const schema = yup.object({
  email: yup
    .string()
    .email('must be a valid email')
    .required('email is required')
    .min(8, 'email must contain at least 8 characters')
    .matches(/^(?=.*[a-z])/i, 'email must contain at least one letter')
    .matches(/^(?=.*[0-9])/, 'email must contain at least one digit')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      'email must contain at least one special character !, @, #, $, %, ^, &, *',
    ),
  password: yup
    .string()
    .required('password is required')
    .min(8, 'password must contain at least 8 characters')
    .matches(/^(?=.*[a-z])/i, 'password must contain at least one letter')
    .matches(/^(?=.*[0-9])/, 'password must contain at least one digit')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      'password must contain at least one special character !, @, #, $, %, ^, &, *',
    ),
})

export type FormData = yup.InferType<typeof schema>