import { FC } from 'react'
import { Textarea as ChacraTextArea } from '@chakra-ui/react'

import { useTextarea } from './hook'

import styles from './Textarea.module.scss'

interface TextareaLocalProps {
  numOfLines?: number
  placeholder: string
}

const Textarea: FC<TextareaLocalProps> = ({
  numOfLines = 5,
  placeholder,
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
      <ChacraTextArea
        ref={textareaRef}
        value={valueTextarea}
        onChange={(event) => setValueTextarea(event.target.value)}
        onScroll={handleTextAreaScroll}
        className={styles.textarea}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Textarea
