import { SubmitHandler } from 'react-hook-form'
import { Inputs } from '../../index.types'

export interface Props {
  heading: string
  btnContent: string
  onSubmit: SubmitHandler<Inputs>
}
