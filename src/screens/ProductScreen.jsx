import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MakeupCard from '../components/MakeupCard'  
import { useParams } from 'react-router-dom'


const ProductScreen = () => {
  const [makeup, setMakeup] = useState([])
  const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  }
  
  

  const getData = () => {
    axios
    .get('/api/allMakeup')
    .then((res) => {
      console.log(res.data)
      setMakeup(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
  }
  useEffect(() => {
    getData()
  }, [])
    
  const makeupDisplay = makeup.map((makeup,index) => {
    return <MakeupCard makeup={makeup} />
  })

  return (
    <div className='main-page'>
        <h1>Shop here</h1>
      <div className= "makeup-container">
        {makeupDisplay}

      </div>
      
    </div>
  )
}

export default ProductScreen