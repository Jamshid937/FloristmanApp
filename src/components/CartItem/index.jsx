import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import { useSelector } from 'react-redux'
import classes from './CartItem.module.scss'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'
import { addOne, removeFromCart, removeOne } from '../../redux/card'
const CartItem = ({images,id,name,quantity,price}) => {
   const dispatch = useDispatch()
    const totalPrice = price * quantity
    const handleRemove = () =>{
     dispatch(removeFromCart(id))
    }
    const handlePlus = () =>{
       dispatch(addOne(id)) 
    }
    const handleMinus = () =>{
      dispatch(removeOne(id)) 
    }
  return (
    <>
    <div className={classes['cart-item']}>
        <img src={images[0]} alt={name} className = {classes['cart-item__image']} />
        <p className={classes['cart-item__name']}>{name}</p>
        <FontAwesomeIcon onClick={handleRemove} icon={faTrashCan} className={classes['cart-item__trash']} />
        <div className={classes['cart-item__controller']}>
            <button onClick={handleMinus}>-</button>
            {quantity}
            <button onClick={handlePlus}>+</button>
        </div>
        <p className={classes['cart-item__total']}>{totalPrice}$</p>
    </div>
    </>
  )
}

export default CartItem