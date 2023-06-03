import Copyright from '../../assets/icons/Copyright'
import LogoRs from '../../assets/icons/LogoRs'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.yearWrapper}>
        <Copyright className={styles.copyright} />
        <p className={styles.year}>2023</p>
      </div>
      <div className={styles.github}>
        <a
          href="https://github.com/alin-a7"
          target="blank"
          className={styles.githubName}
        >
          Alin-a7
        </a>
        <div className={styles.line}></div>
        <a
          href="https://github.com/Nozeil"
          target="blank"
          className={styles.githubName}
        >
          Nozeil
        </a>
        <div className={styles.line}></div>
        <a
          href="https://github.com/lina_gritsel"
          target="blank"
          className={styles.githubName}
        >
          Lina
        </a>
      </div>
      <a href="https://rs.school/" target="blank">
        <LogoRs className={styles.logo} />
      </a>
    </div>
  )
}

export default Footer
