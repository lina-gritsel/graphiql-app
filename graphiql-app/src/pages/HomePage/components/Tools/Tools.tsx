import classname from 'classnames'

import down from '../../../../assets/images/back.png'
import Textarea from '../Textarea'
import { useTools } from './hooks'

import styles from './Tools.module.scss'

const Tools = () => {
  const {
    MENU,
    activeTab,
    value,
    setValue,
    isOpen,
    toggleHeight,
    menuItemOnclick,
  } = useTools()

  return (
    <div className={classname(styles.tools, isOpen && styles.openTools)}>
      <div className={styles.header}>
        <div className={styles.menu}>
          {MENU.map(({ label, value }) => (
            <div
              key={label}
              className={classname(
                styles.menuItem,
                activeTab === value && isOpen && styles.active,
              )}
              onClick={() => menuItemOnclick(value)}
            >
              {label}
            </div>
          ))}
        </div>
        <img
          src={down}
          alt="down"
          onClick={toggleHeight}
          className={classname(styles.upArrow, isOpen && styles.downArrow)}
        />
      </div>
      {isOpen && <Textarea numOfLines={1} value={value} onChange={setValue} />}
    </div>
  )
}

export default Tools
