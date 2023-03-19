import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons'
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import {useDispatch} from 'react-redux'
import { handleLike } from '../../redux/likeSlice'
import { addToCart, removeFromCart } from '../../redux/card'
import classes from "./ProductCard.module.scss"
const ProductCard = ({className,data,liked,selected}) => {
const dispatch = useDispatch()
const selectItem = () => {
  dispatch(selected ? removeFromCart(data.id) : addToCart(data))
}
const  handleLikeButton = () => dispatch(handleLike(data))
  


  return (
    <div className={classNames(classes['card'],className)}>
        <img src={data.images} alt={data.name} className={classes['card__image']} />
        <h3 className={classes['card__title']}>{data.name}</h3>
        <p className={classes['card__price']}>{data.price} USD, <span className={classes['card__discount']}>{data.discount} USD</span></p>
        <button onClick={selectItem}
         className={classNames( classes['card__btn'], selected && classes['card__btn__selected'])}>{selected ? 'Added':'Added to card'}</button>
        <button className={classes['card__like']} onClick={handleLikeButton}>
          <FontAwesomeIcon icon={liked ? faHeartSolid : faHeartRegular}  className={classes['header__hard']} />
        </button>
    </div>
  )
}

export default ProductCard