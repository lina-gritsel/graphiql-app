import { useRef, useState, DragEvent } from "react"

export const useResizableElement = () => {
    const [initialPos, setInitialPos] = useState<number>()
    const [initialSize, setInitialSize] = useState<number>()
  
    const divRef = useRef<HTMLDivElement>(null)
    const neighborRef = useRef<HTMLDivElement>(null)
  
    const initial = (event: DragEvent<HTMLDivElement>) => {
      event.dataTransfer.setDragImage(new Image(), 0, 0)
      setInitialPos(event.clientX)
      setInitialSize(divRef.current?.offsetWidth)
    }
  
    const resize = (event: DragEvent<HTMLDivElement>) => {
      const width =
        Number(initialSize) + Number(event.clientX - Number(initialPos))
  
      if (divRef.current) {
        divRef.current.style.width = `${width}px`
      }
  
      const actualWidth = Number(divRef.current?.getBoundingClientRect().width)
  
      if (neighborRef.current) {
        neighborRef.current.style.width = `calc(100% - ${actualWidth + 26}px)`
      }
    }
  
    return { divRef, neighborRef, initial, resize }
  }
  