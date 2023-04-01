import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import Container from '../../layout/container'
import ProductCard from '../ProductCard'
import {EffectFlip, Pagination, Navigation  } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";



import { useSelector } from 'react-redux'

import classes from './DiscountsCarousel.module.scss'
import useGetData from '../../hooks/useGetData';
import classNames from 'classnames';


const DiscountCarousel = () => {
    
    const {like,cart} = useSelector((state)=>state)
    const[data] = useGetData('/floristman_discounts',null)

  return (
    <Container className={classes['discounts']}>
        <h2 className={classes['discounts__title']}>Special Discount</h2>
        {data &&        
 <Swiper
 effect={"flip"}
 grabCursor={true}
 pagination={true}
 navigation={true}
 modules={[EffectFlip, Pagination, Navigation]}
 className="mySwiper"
    >
       {data.map((item) => (
       <SwiperSlide key={item.id}>
          <ProductCard  data={item} liked={item.id in like} selected={item.id in cart}className={classNames(classes['swiperProduct'])}/>
        </SwiperSlide>
    )) } 
      
</Swiper>}
    </Container>
  )
}

export default DiscountCarousel