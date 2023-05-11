import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  forwardRef,
} from '@chakra-ui/react'
import { FieldProps } from './types'

const EmailFormField = forwardRef<FieldProps, 'div'>(
  ({ name, type, label, errorName, errorMessage, onChange, onBlur }, ref) => (
    <FormControl isInvalid={!!errorName} >
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        name={name}
        ref={ref}
        type={type}
        variant="filled"
        onChange={onChange}
        onBlur={onBlur}
      />
      <FormErrorMessage as={FormErrorMessage}>{errorMessage}</FormErrorMessage>
    </FormControl>
  ),
)

export default EmailFormField
