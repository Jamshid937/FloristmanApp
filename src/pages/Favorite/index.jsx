import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import Container from '../../layout/container'
import ProductCard from '../../components/ProductCard'

import Title from '../../components/Title'
import classes from './favorite.module.scss'
const Favorite = () => {
    const { like, cart} = useSelector((state) => state)
    const items = Object.values(like)
    return (
        <>
            <Header />
            {items.length ? (
            <>
            <Title>Favorite Products</Title>
            <Container className={classes['cards']}> 
            
                { items.map((card) =>(
                    <ProductCard 
                    key={card.id} 
                    data={card} 
                    className={classes['card-item']} 
                    liked={card.id in like} 
                    selected={card.id in cart}
                    />
                ))}

            </Container>
          </> 
           ):(
                <Title>You don't have favorite products😢</Title>
             )}
        </>
    )
}

export default Favorite