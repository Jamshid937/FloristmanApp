import React from 'react'
import Badge from '../../components/Badge'
import CategoriesBlock from '../../components/CategoriesBlock'
import DiscountCarousel from '../../components/DiscountsCarusel'
import Header from '../../components/Header'
import OrderForm from '../../components/OrderForm'
import Container from '../../layout/container'


const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Badge/>
      </Container>
      <CategoriesBlock />
      <DiscountCarousel />
      <OrderForm />
    </>
  )
}

export default Home