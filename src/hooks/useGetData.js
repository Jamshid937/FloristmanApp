import { useEffect, useState } from "react";
import axios from 'axios';


const path = process.env.REACT_APP_API_URL

const useGetData =(url, initialState = null)=>{
  const [data, setData] = useState(initialState)
  const [loading,setLoading] = useState(true)

useEffect(() =>{
    const getData = async () => {
        const {data} = await axios.get(`${path}${url}`)
        setData(data)
        setLoading(false)
    }
getData()
},[url])
 
  return[data, loading]
};


export default useGetData