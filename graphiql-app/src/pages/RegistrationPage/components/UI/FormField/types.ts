import { FormControlProps } from "@chakra-ui/react"
import { HTMLInputTypeAttribute } from "react"
import { FieldError, UseFormRegister } from "react-hook-form"
import { Inputs } from "../../index.types"

interface ControlProps extends FormControlProps {
  type: HTMLInputTypeAttribute
  label: string
  errorName?: FieldError
  errorMessage?: string
}

export type FieldProps = ControlProps & ReturnType<UseFormRegister<Inputs>>