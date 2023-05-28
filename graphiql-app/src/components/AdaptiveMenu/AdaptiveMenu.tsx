import { Box } from '@chakra-ui/layout'
import { HamburgerIcon } from '@chakra-ui/icons'
import styles from './AdaptiveMenu.module.scss'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/hooks'
import { useRef } from 'react'
import { Button } from '@chakra-ui/button'
import Menu from '../Menu'
import { useMediaQuery } from '@chakra-ui/media-query'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const AdaptiveMenu = () => {
  const [isTablet] = useMediaQuery(MEDIA_QUERIES.TABLET)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return isTablet ? (
    <Box
      className={styles.mobileMenu}
      onClick={(e) => {
        if (e.target instanceof HTMLAnchorElement) {
          onClose()
        }
      }}
    >
      <Button variant="ghost" onClick={onOpen} p={1}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent py={8}>
          <DrawerCloseButton />
          <DrawerBody display="flex" alignItems="center">
            <Menu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  ) : (
    <Box className={styles.desktopMenu}>
      <Menu />
    </Box>
  )
}

export default AdaptiveMenu
