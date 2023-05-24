import { Spinner } from '@chakra-ui/react'

import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <Spinner
      className={styles.loader}
      emptyColor="gray.200"
      thickness="3px"
    />
  )
}

export default Loader
