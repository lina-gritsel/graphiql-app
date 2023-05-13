export const SING_FORM_KEYS = {
  NS: 'signForm',
  EMAIL: 'email',
  PASSWORD: 'password',
} as const

export const VALIDATION_KEYS = {
  NS: 'validation',
  EMAIL: {
    VALID: 'email.valid',
    REQUIRED: 'email.required',
    LENGTH: 'email.length',
    LETTER: 'email.letter',
    DIGIT: 'email.digit',
    SPECIAL: 'email.special'
  },
  PASSWORD: {
    REQUIRED: 'password.required',
    LENGTH: 'password.length',
    LETTER: 'password.letter',
    DIGIT: 'password.digit',
    SPECIAL: 'password.special'
  },
} as const
