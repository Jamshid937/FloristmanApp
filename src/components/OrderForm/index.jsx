import classNames from 'classnames'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Container from '../../layout/container'
import { validateName, validatePhoneContent, validatePhoneNumber, validateText } from './halper'
import classes from "./OrderForm.module.scss"

const initialData ={
name: '',
tell: '',
text: '',
}



const OrderForm = () => {

  const [fields,setFields] = useState(initialData)
  const [disablad, setDisablad] = useState(true)
  useEffect(() => {
   const isValid =
   validateName(fields.name) &&
    validatePhoneNumber(fields.tell) &&
    validateText(fields.text)
    setDisablad(!isValid)
  },[fields])
  const handleChange = (e) => {
    if (e.target.name === 'tell' && !validatePhoneContent(e.target.value)) return
    setFields((prev) => ({...prev, [e.target.name] : e.target.value}))
  }
const handleSubmit = (e)=>{
 e.preventDefault()
 setFields(initialData)
}
  return (
   <Container className={classes['order-form']}>
    <h2 className={classes['order-form__title']}>Order A Unique Basket!</h2>
    <form className={classes['order-form__form']}>
      <div className={classes['order-form__fields']}>
        <input 
        type="text"
         placeholder='Name*'
          onChange={handleChange}
           value={fields.name}
            name='name' 
            className={classes['order-form__input']} />
        <input 
        type="tell"
         placeholder='Phone Number*'
           onChange={handleChange}
            value={fields.tell}
             name='tell'
             className={classes['order-form__input']}/>
        <textarea
         placeholder='Your Ideas*' 
          onChange={handleChange} 
          value={fields.text} 
          name='text'
           className={classes['order-form__textarea']}></textarea>
                  <button
            onClick={handleSubmit}
            className={classNames(classes['order-form__btn'], {
              [classes['order-form__btn_disabled']]: disablad,
            })}
            disabled={disablad}
          >
            Send
          </button>
      </div>
      <img src='https://www.wenghoa.com/wp-content/uploads/2022/06/jf_fl_1170_designer_vase_in_lavender_love_rose_1.jpg' alt="" className={classes['order-form__image']} />
    </form>
   </Container>
  )
}

export default OrderForm