import { SocialLinks } from '../SocialLinks'

import { Slide, Fade } from 'react-awesome-reveal'

import styles from './styles.module.scss'

export const Home = () => {
  return (
    <Fade delay={300} duration={1300}>
      <div className={styles.container}>
        <h1 className={styles.header}>Open Sol Project</h1>
        <div className={styles.links}></div>
        <SocialLinks />
      </div>
    </Fade>
  )
}
