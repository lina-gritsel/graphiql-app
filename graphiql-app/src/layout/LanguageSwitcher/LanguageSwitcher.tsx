import {
  Box,
  HStack,
  UseRadioProps,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './LanguageSwitcher.module.scss'

interface RadioCardProps extends UseRadioProps {
  children: ReactNode
}

const RadioCard = (props: RadioCardProps) => {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        className={styles.radioCard}
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
      >
        {props.children}
      </Box>
    </Box>
  )
}

const LanguageSwitcher = () => {
  const options = ['English', 'Russian']
  const { i18n } = useTranslation()
  const actualLanguage = localStorage.getItem('i18nextLng')

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'language',
    defaultValue: actualLanguage || 'English',
    onChange: i18n.changeLanguage,
  })

  const group = getRootProps()

  return (
    <HStack {...group} className={styles.container}>
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
}

export default LanguageSwitcher
