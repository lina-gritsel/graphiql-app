import { FC } from 'react'
import { Textarea as ChakraTextArea } from '@chakra-ui/react'

import { useTextarea } from './hook'

import styles from './Textarea.module.scss'

interface TextareaLocalProps {
  numOfLines?: number
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

const Textarea: FC<TextareaLocalProps> = ({
  numOfLines,
  placeholder,
  value,
  onChange,
}) => {
  const { linesArray, lineCounterRef, textareaRef, handleTextAreaScroll } =
    useTextarea({ numOfLines, value })

  return (
    <div className={styles.wrapper}>
      {!!numOfLines && (
        <div className={styles.numberOfLine} ref={lineCounterRef}>
          {linesArray.map((count) => (
            <div key={count}>{count}</div>
          ))}
        </div>
      )}
      <ChakraTextArea
        ref={textareaRef}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        onScroll={handleTextAreaScroll}
        className={styles.textarea}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Textarea
