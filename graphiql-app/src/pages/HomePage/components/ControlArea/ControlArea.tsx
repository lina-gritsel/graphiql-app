import { useTranslation } from 'react-i18next'
import { useToast } from '@chakra-ui/react'

import play from '../../../../assets/images/play.png'
import clean from '../../../../assets/images/clean.png'
import clone from '../../../../assets/images/clone.png'
import align from '../../../../assets/images/align.png'
import { TOAST_KEYS } from '../../../../constants/translationKeys'

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
  const toast = useToast()
  const { NS, COPIED_SUCCESS } = TOAST_KEYS
  const { t } = useTranslation(NS)


  const handleCopy = () => {
    onCopy()
    toast({
      title: t(COPIED_SUCCESS.TITLE),
      description: t(COPIED_SUCCESS.DESCRIPTION),
      status: 'success',
      position: 'top',
      duration: 2000,
      isClosable: true,
    })
  }

  return (
    <div className={styles.container}>
      <img className={styles.icon} src={play} alt="play" onClick={onPlay} />
      <img className={styles.icon} src={align} alt="align" onClick={onAlign} />
      <img className={styles.icon} src={clean} alt="clean" onClick={onClean} />
      <img
        className={styles.icon}
        src={clone}
        alt="clean"
        onClick={handleCopy}
      />
    </div>
  )
}

export default ControlArea
