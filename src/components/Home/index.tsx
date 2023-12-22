import { SocialLinks } from '../SocialLinks'

import styles from './styles.module.scss'

export const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Open Sol Project</h1>
      <div className={styles.links}></div>
      <SocialLinks />
    </div>
  )
}
