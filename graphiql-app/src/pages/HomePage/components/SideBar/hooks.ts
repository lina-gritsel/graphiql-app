import { useState } from 'react'

export const useSideBarVisible = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return { onToggleVisible: () => setVisible((prev) => !prev), visible }
}
