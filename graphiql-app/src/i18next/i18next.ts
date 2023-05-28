import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { SIGNOUT_KEYS } from '../components/SignOutButton/constants'
import { FIELD_KEYS } from '../components/SignForm/PasswordFormField/constants'
import { TOAST_KEYS } from '../constants/translationKeys'
import { SIGNIN_KEYS } from '../pages/LoginPage/components/SignIn/constants'
import { SIGNUP_KEYS } from '../pages/RegistrationPage/components/SignUp/constants'
import { SING_FORM_KEYS, VALIDATION_KEYS } from '../components/SignForm/constants'

const ns = [
  'translation',
  VALIDATION_KEYS.NS,
  SING_FORM_KEYS.NS,
  SIGNUP_KEYS.NS,
  SIGNIN_KEYS.NS,
  TOAST_KEYS.NS,
  FIELD_KEYS.NS,
  SIGNOUT_KEYS.NS
]

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    ns,
    debug: true,
    fallbackLng: 'english',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
