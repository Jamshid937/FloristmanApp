import React from 'react'
import Container from '../../layout/container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link,useLocation } from 'react-router-dom'
import { slide as Menu} from 'react-burger-menu'
// icons
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'
// images
import logo from '../../images/Logo.png'
import categories from '../../routes/categories'
import classNames from 'classnames'
import classes from './Header.module.scss'
import { useSelector } from 'react-redux'
import { getItemsCount } from '../../redux/card'

const Header = () => {
  const  location = useLocation();
  const cartItemsCount = useSelector(getItemsCount)

  return (
    <header className={classes['header']}>
      <Container>
      <div className={classes['header__flex']}>
        <Link to="/"> <img src={logo} alt="" /></Link>
         <div>
          <Link to='/favorite'>
            <FontAwesomeIcon icon={faHeart}  className={classes['header__hard']} />
          </Link>
          <Link to='/cart' className={classes['header__bag-wrapper']}>
            <FontAwesomeIcon icon={faBagShopping}  className={classes['header__bag']} />
            { Boolean(cartItemsCount) && <p className={classes['header__bag-count']}>{cartItemsCount}</p>}
          </Link>
          
        </div>
      </div>
      </Container>

      <Container>
      <ul 
        className={classes['header__list']}>
         {categories.map((link)=>(
        
         <li key={link}>
          
           <Link
            to={link.link} 
            className={classNames(classes['header__link'],
            {
             [classes['header__link_active']]:
               location.pathname === link,
        }
        )}>
          {link.text}
        </Link>
        
          </li>
          ))}
          </ul>
      </Container>
    </header>
  )
}

export default Header