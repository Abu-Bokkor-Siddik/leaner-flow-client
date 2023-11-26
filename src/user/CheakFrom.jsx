import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosP from "../hooks/useAxiosP";
import { AuthContex } from "../auth/AuthProvidev";
import axios from "axios";


const CheakFrom = () => {
    const {user}=useContext(AuthContex)
    const [err,seterr]=useState('')
    // const [handle,sethandle]=useState(false)
    const [clientS,setclientS]=useState('')
    const stripe = useStripe();
  const elements = useElements();
  const axiosP =useAxiosP()

 useEffect(()=>{

    axiosP.post('/create-payment-intent',{price:49})
.then(res=>{
    console.log(res.data.ClientSecret)
    setclientS(res.data.ClientSecret)
})

 },[axiosP])

  const handleSubmit = async(event) => {
    event.preventDefault();

    // 1st
    if(!stripe||!elements){
        return
    }
    const card = elements.getElement(CardElement)

    // null

    if (card == null) {
        return;
      }
    // create payment
    const {error,paymentMethod}=await stripe.createPaymentMethod({
        type:'card',
        card,
    })
    // if any error 
    if(error){
        console.log('payment method ',error)
        seterr(error.message)
    }else{
        console.log('payment',paymentMethod)
        seterr('')
    }
    // final payment
    const{paymentIntent,error:paymentserror}=await stripe.confirmCardPayment(clientS,{
        payment_method:{
            card:card,
            billing_details:{
                email:user?.email || 'annonymouse',
                name:user?.displayName || 'annonymouse',
            }
        }
    })
    if(paymentserror){
        console.log('paymentconfirme error',paymentserror)
    }else{
        console.log('payment indents',paymentIntent)
        console.log('payment indents',paymentIntent.id)
        alert(`${paymentIntent.id}`)
        // update user put method 
        const userinfo ={
            badge:'gold',
            paymentId:paymentIntent.id,
            
        }
        // put method with email
        const res = axios.put(`http://localhost:3005/update?email=${user?.email}`,userinfo)
        .then(datas=>{
            console.log(datas.data)
        })

    }

  }

  return <form className="max-w-[1200px] mx-auto" onSubmit={handleSubmit}>
  <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
/>
<button  type="submit" disabled={!stripe || !clientS}>
  Pay
</button>
<p className="text-red-600">{err}</p>
  
  </form>;
};

export default CheakFrom;
