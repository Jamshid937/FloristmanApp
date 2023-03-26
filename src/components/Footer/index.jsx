import React from 'react'
import classes from './Footer.module.scss'
import Container from '../.././layout/container'
import telegram from '../../images/telegram.png'
import youtube from '../../images/youtube.png'
import instagram from '../../images/instagram.png'
const Footer = () => {
  return (

   
        <div className={classes['footer']}>
            <div className={classes['footer__icons']}>
              <img src={telegram} alt="telegram" />
              <img src={youtube} alt="youtube" />
              <img src={instagram} alt="instagram" />
            </div>
            <div className={classes['footer__tell']}>
                <p>+998 99 999 99 99</p>
            </div>
        </div>
   

  )
}

export default Footer