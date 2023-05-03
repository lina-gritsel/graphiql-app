import { Input } from "@chakra-ui/input"

import styles from './WelcomePage.module.scss'
import { Button } from "@chakra-ui/button"


const WelcomePage = () => {
  return (
    <div>
      <div>WelcomePage</div>
      <Input className={styles.input}/>
      <Button variant='solid' colorScheme='teal'>
        Нажми
      </Button>
    </div>
  )
}

export default WelcomePage
