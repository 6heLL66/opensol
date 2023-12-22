import styles from './styles.module.scss'

import birdEye from '../../images/birdeye.jpg'

export const SocialLinks = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.share}>
        <a
          href='https://twitter.com/OpenSolToken'
          className={styles.container + ' ' + styles.twitter}
        >
          <svg
            preserveAspectRatio='xMinYMin meet'
            viewBox='0 0 200 200'
            className={styles.circle}
          >
            <circle cx='100' cy='100' r='50' />
          </svg>
          <div className={styles.social}>
            <i className='fa fa-twitter'></i>
          </div>
        </a>
        <a
          href='https://t.me/+6eTvzoBgz6NlOWUy'
          className={styles.container + ' ' + styles.telegram}
        >
          <svg
            preserveAspectRatio='xMinYMin meet'
            viewBox='0 0 200 200'
            className={styles.circle}
          >
            <circle cx='100' cy='100' r='50' />
          </svg>
          <div className={styles.social}>
            <i className='fa-brands fa-telegram'></i>
          </div>
        </a>
        <a
          href='https://birdeye.so/token/96aXAtmKQDdH2HvQT1Mzbb4ccVLVsh9MaLmKeehxc2fe?chain=solana'
          className={styles.container + ' ' + styles.telegram}
        >
          <svg
            preserveAspectRatio='xMinYMin meet'
            viewBox='0 0 200 200'
            className={styles.circle}
          >
            <circle cx='100' cy='100' r='50' />
          </svg>
          <div className={styles.social}>
            <img
              src={birdEye}
              className={styles.bird}
              width='32px'
              height='32px'
            />
          </div>
        </a>
      </div>
    </div>
  )
}
