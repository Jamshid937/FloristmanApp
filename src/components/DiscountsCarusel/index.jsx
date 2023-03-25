import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigation } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react"
import Container from '../../layout/container'
import ProductCard from '../ProductCard'
import 'swiper/css';

import "swiper/css/navigation";
import { useSelector } from 'react-redux';
import classes from './DiscountsCarousel.module.scss'
import useGetData from '../../hooks/useGetData';
const DiscountCarousel = () => {
    // const [data, setData] = useState(null)
    const {like,cart} = useSelector((state)=>state)
    const[data] = useGetData('/floristman_discounts',null)
    // useEffect(()=>{
    //   const fetchData = async () =>{
    //   const res = await fetch(`${process.env.REACT_APP_API_URL}/floristman_discounts`)
    //   const discounts = await res.json()
    //   setData(discounts)
    // }
    // fetchData()
    // }, [])
  return (
    <Container className={classes['discounts']}>
        <h2 className={classes['discounts__title']}>Special Discount</h2>
        {data &&        
 <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={1}
    >
       {data.map((item) => (
       <SwiperSlide key={item.id}>
          <ProductCard  data={item} liked={item.id in like} selected={item.id in cart}/>
        </SwiperSlide>
    )) } 
      
</Swiper>}
    </Container>
  )
}

export default DiscountCarousel