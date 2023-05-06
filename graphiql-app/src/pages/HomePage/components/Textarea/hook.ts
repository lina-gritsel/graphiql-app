import { useMemo, useRef } from 'react'

interface TextAreaProps {
  numOfLines?: number 
  value: string | undefined
}

export const useTextarea = ({ numOfLines = 5, value = '' }: TextAreaProps) => {
  const { lineCounterRef, textareaRef, handleTextAreaScroll } =
    onScrollTextarea()

  const linesCount = useMemo(() => value?.split('\n').length, [value])

  const linesArray = useMemo(
    () =>
      Array.from({ length: Math.max(numOfLines, linesCount) }, (_, i) => i + 1),
    [linesCount, numOfLines],
  )

  return {
    linesArray,
    lineCounterRef,
    textareaRef,
    handleTextAreaScroll,
  }
}

const onScrollTextarea = () => {
  const lineCounterRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleTextAreaScroll = () => {
    if (lineCounterRef.current && textareaRef.current) {
      lineCounterRef.current.scrollTop = textareaRef.current.scrollTop
    }
  }

  return { lineCounterRef, textareaRef, handleTextAreaScroll }
}
