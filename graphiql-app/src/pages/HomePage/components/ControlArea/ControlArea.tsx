import { useState } from 'react'

import play from '../../../../assets/images/play.png'
import clean from '../../../../assets/images/clean.png'
import clone from '../../../../assets/images/clone.png'
import align from '../../../../assets/images/align.png'
import ok from '../../../../assets/images/ok.png'

import styles from './ControlArea.module.scss'

interface ControlAreaProps {
  onPlay: () => void
  onClean: () => void
  onAlign: () => void
  onCopy: () => void
}

const ControlArea = ({
  onPlay,
  onClean,
  onAlign,
  onCopy,
}: ControlAreaProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    onCopy()
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1500)
  }

  return (
    <div className={styles.container}>
      <img className={styles.icon} src={play} alt="play" onClick={onPlay} />
      <img className={styles.icon} src={align} alt="align" onClick={onAlign} />
      <img className={styles.icon} src={clean} alt="clean" onClick={onClean} />
      {isCopied ? (
        <img className={styles.icon} src={ok} alt="ok" />
      ) : (
        <img
          className={styles.icon}
          src={clone}
          alt="clean"
          onClick={handleCopy}
        />
      )}
    </div>
  )
}

export default ControlArea
