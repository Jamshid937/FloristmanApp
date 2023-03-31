import React from 'react'
import { useSelector } from 'react-redux'
import $ from 'jquery'
import CartItem from '../../components/CartItem'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Title from '../../components/Title'
import Container from '../../layout/container'
import classes from './Cart.module.scss'
const Cart = () => {
    const { cart } = useSelector((state)=> state)
    const items =  Object.values(cart)
    const cartEmpty = items.length === 0
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)


    var telegram_bot_id = "6044421804:AAHHoJoX1szgVpwZBVxVxiAH6YKtBHzlL2M"; 
    var chat_id = 602198486; 
    var  message;
     
    var ready = function() {
      const items =  Object.values(cart)
      message = items.reduce((item) =>  "Ismi: " +  item.name + " \quantity: " + item.quantity + " \price: " + total )
  };


    var sendTelegramCard = function(e) {
      ready();
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
          "method": "POST",
          "headers": {
              "Content-Type": "application/json",
              "cache-control": "no-cache"
          },
          "data": JSON.stringify({
              "chat_id": chat_id,
              "text": message
          })
      };
      $.ajax(settings).done(function(response) {
          
      });
  e.preventDefault()
  };
  return (
    <>
    <Header/>
      
      <Container className={classes['cards']}>
        {cartEmpty ? (<Title>Cart is empty 😢</Title>) : <Title className={classes['title']}>Cart</Title>}
       { 
        !cartEmpty &&  ( 
        items.map((card) =>( <CartItem 
           key={card.id} 
          {...card}
           />
       ))
     ) }  
   
    {!cartEmpty && (
    <form onClick={sendTelegramCard}>
      <div className={classes['total']}>
        <p className={classes['total__description']}>Total: </p>
        <p className={classes['total__amount']}>{total}</p>
      </div>
      <button className={classes['order-btn']}>Send</button>
      </form>)}
      </Container>
      <Footer />
    </>
  )
}

export default Cart