import { Outlet } from 'react-router-dom'
import image from '../../images/cover.png'
import styles from './styles.module.scss'

import './snowflake.scss'

const Paralax = () => {
  return (
    <>
      {new Array(49).fill(0).map(() => {
        return <div className='snowflake'></div>
      })}
    </>
  )
}

export const AppContainer = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Outlet />
      <Paralax />
    </div>
  )
}
