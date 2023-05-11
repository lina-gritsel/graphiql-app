import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  forwardRef,
  useBoolean,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { FieldProps } from '../EmailFormField/types'
import { FIELD_KEYS } from './constants'
import { useTranslation } from 'react-i18next'

const PasswordFormField = forwardRef<FieldProps, 'div'>(
  ({ name, label, errorName, errorMessage, onChange, onBlur }, ref) => {
    const { NS, SHOW, HIDE } = FIELD_KEYS
    const { t } = useTranslation(NS)
    const [isShown, setIsShown] = useBoolean(false)

    return (
      <FormControl isInvalid={!!errorName}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <InputGroup>
          <Input
            name={name}
            ref={ref}
            type={isShown ? 'text' : 'password'}
            variant="filled"
            onChange={onChange}
            onBlur={onBlur}
            pr="6rem"
          />
          <InputRightElement width="6rem">
            <Button
              h="1.75rem"
              size="sm"
              colorScheme="teal"
              onClick={setIsShown.toggle}
            >
              {isShown ? t(HIDE) : t(SHOW)}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage as={FormErrorMessage}>
          {errorMessage}
        </FormErrorMessage>
      </FormControl>
    )
  },
)

export default PasswordFormField
