import React, {useState, useEffect, useRef} from "react";
import axios from 'axios'
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MakeupCard = ({makeup}) => {
    const emailRef = useRef()
    const [email, setEmail] = useState("")
    const MySwal = withReactContent(Swal)
    
  const handlePurchase = () => {
        MySwal.fire({
            title:"Sorry, but there's a waitlist.",
            showCancelButton:true,
            confirmButtonText:"sign me up for waitlist!"
        })
        .then((res) => {
            if(res.isConfirmed){
                MySwal.fire({
                    title: "Enter email",
                    html: <input type="text" />, 
                  })  
                    .then((res) => {
                        const bodyObj = {
                            email: emailRef,
                        }
                        axios
                        .post('/api/createEmail', bodyObj)
                        .then((dbRes) => {
                            console.log("yaaa")
                        })
                        .catch((err) => {
                            console.error(err)
                        })
                    })
               
            } else {
                return
            }
            
        })
        .catch(() => {

        })
    }  
    const primaryPhoto = makeup.photos.filter((img) => {
            return img.primaryPhoto === true
    })

    return (
        <div className='makeup-card'>
            <img src={primaryPhoto[0].url}/>
            <h4 className='card-product'>{makeup.product}</h4>
            <h3 className='card-brand'>{makeup.brand} </h3>  
            <h5 className='card-description'>Description:{makeup.description}</h5>
            
            
            <h4 className = 'card-price'>Price: ${makeup.price}</h4>
            <button onClick={handlePurchase}className = 'card-delete'>buy now</button>
        </div>
    )
 
}
   

export default MakeupCard