import { FC } from 'react'
import { Textarea as ChakraTextArea } from '@chakra-ui/react'

import { useTextarea } from './hook'

import styles from './Textarea.module.scss'

interface TextareaLocalProps {
  numOfLines?: number
  placeholder?: string
  data?: any
}

const Textarea: FC<TextareaLocalProps> = ({
  numOfLines = 5,
  placeholder,
  data,
}) => {
  const {
    valueTextarea,
    setValueTextarea,
    linesArray,
    lineCounterRef,
    textareaRef,
    handleTextAreaScroll,
  } = useTextarea(numOfLines)

  return (
    <div className={styles.wrapper}>
      <div className={styles.numberOfLine} ref={lineCounterRef}>
        {linesArray.map((count) => (
          <div key={count}>{count}</div>
        ))}
      </div>
      <ChakraTextArea
        ref={textareaRef}
        value={valueTextarea || data }
        onChange={(event) => setValueTextarea(event.target.value)}
        onScroll={handleTextAreaScroll}
        className={styles.textarea}
        placeholder={placeholder}
        focusBorderColor="white"
      />
    </div>
  )
}

export default Textarea
