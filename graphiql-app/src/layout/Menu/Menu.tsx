import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { MENU_ITEMS } from './constants'

import styles from './Menu.module.scss'

const Menu: FC = () => {
  return (
    <div className={styles.container}>
      {MENU_ITEMS.map(({ to, label }, index) => (
        <NavLink className={styles.menuItem} key={index} to={to}>
          {label}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu
