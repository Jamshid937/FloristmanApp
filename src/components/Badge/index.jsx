import React from 'react'
import classes from './Badge.module.scss'

// import bacBadge from '../../images/background.jpg'
const Badge = () => {
  return (
    <div className={classes['badge']}>
    <div className={classes['badge__content']}>
      <h1 className={classes['badge__content__title']}>Fruit compositions</h1>
      <p className={classes['badge__content__text']}>You can choose any products from our catalog or order</p>
    </div>
  </div>
  )
}

export default Badge