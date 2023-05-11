import { Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

interface Language {
  label: string
  option: string
}

const languages: Record<string, Language> = {
  russian: {
    label: 'Ru',
    option: 'English',
  },
  english: {
    label: 'Eng',
    option: 'Russian',
  },
}

const DEFAULT_LANGUAGE = 'English'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const actualLanguage =
    localStorage.getItem('i18nextLng')?.toLowerCase() || DEFAULT_LANGUAGE

  const currentLanguage = languages[actualLanguage].label

  const changeLanguage = () => {
    const newLanguage = languages[actualLanguage].option
    i18n.changeLanguage(newLanguage)
  }

  return <Button onClick={changeLanguage}>{currentLanguage}</Button>
}

export default LanguageSwitcher
