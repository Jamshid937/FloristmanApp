import flowers from '../images/categories/flowers.png'
import accessories from '../images/categories/aksesuars.png' 
import bear from '../images/categories/bear.png' 
import fruits from '../images/categories/fruits.png' 
import prx from '../images/categories/prx.png' 
import sweets from '../images/categories/sweets.png' 
import plants  from '../images/categories/tuvak.png' 
import baloons from '../images/categories/shar.png'  

const categories = [
    {
      text:'Flowers',
      link: '/category/flowers',
      image: flowers
    },
    {
      text:'Gifts',
      link: '/category/gifts',
      image:bear
    },
    {
      text:'FruitCarts',
      link: '/category/fruits',
      image:fruits
    },
    {
      text:'Air Balloons',
      link: '/category/balloons',
      image:baloons
    },
    {
      text:'Indoor Plants',
      link: '/category/plants',
      image:plants
    },
    {
      text:'Sweets',
      link: '/category/sweets',
      image:sweets
    },
    {
      text:'Services',
      link: '/category/services',
      image:prx
    },
    {
      text:'Accessories',
      link: '/category/accessories',
      image: accessories
    },
    ]

    export default categories