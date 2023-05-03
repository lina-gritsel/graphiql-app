import { useMemo, useRef, useState } from 'react'

export const useTextarea = (numOfLines: number) => {
  const { lineCounterRef, textareaRef, handleTextAreaScroll } =
    onScrollTextarea()
    
  const [valueTextarea, setValueTextarea] = useState<string>('')

  const lineCount: number = useMemo(
    () => valueTextarea.split('\n').length,
    [valueTextarea],
  )

  const linesArr = useMemo(
    () =>
      Array.from({ length: Math.max(numOfLines, lineCount) }, (_, i) => i + 1),
    [lineCount, numOfLines],
  )

  return {
    valueTextarea,
    setValueTextarea,
    linesArr,
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
