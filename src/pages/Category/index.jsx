import React from 'react'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Title from '../../components/Title'
import Container from '../../layout/container'
import categories from '../../routes/categories'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

import classes from './Category.module.scss'
import useGetData from '../../hooks/useGetData'




const CategoryPage = () => {
  const {type} = useParams()
  const {pathname} = useLocation()
 
  const { like, cart} = useSelector((state) => state)
  const [data]= useGetData(`/floristmanItems?category=${type}`)
  const {text: title} = categories.find((item) => item.link === pathname)





  return (
    <>
      <Header/>
      {title && <Title>{title}</Title>}
      <Container className={classes['cards']}>
       {data &&  data.map((card) => 
        <ProductCard key={card.id} data={card} className={classes['card-item']} liked={card.id in like} selected={card.id in cart} />
        )}
    
      </Container>
     </>
  )
}

export default CategoryPage