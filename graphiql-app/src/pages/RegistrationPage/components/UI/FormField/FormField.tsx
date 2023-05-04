import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  forwardRef,
} from '@chakra-ui/react'
import { FieldProps } from './types'

const FormField = forwardRef<FieldProps, 'div'>(
  ({ name, type, label, errorName, errorMessage }, ref) => {
    const labelComponent = errorName ? <FormLabel as={FormErrorMessage} mt={0}>
    {errorName && errorMessage}
  </FormLabel> : <FormLabel htmlFor={name}>{label}</FormLabel>

    return <FormControl isInvalid={!!errorName}>
      {labelComponent}
      <Input ref={ref} type={type} variant="filled" />
    </FormControl>
  },
)

export default FormField
