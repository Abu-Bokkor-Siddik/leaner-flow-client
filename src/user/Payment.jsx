import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheakFrom from './CheakFrom';
// todo 
// console.log(import.meta.env.VITE_KEY_PAYMENT)
const stripePromist =loadStripe(import.meta.env.VITE_KEY_PAYMENT)
const Payment = () => {
  return (
    <div className="min-h-[800px]">
    <p className="text-center text-4xl mt-11">Please Payment</p>



    <div>
    <Elements stripe={stripePromist}>

    <CheakFrom></CheakFrom>
    
    </Elements>
    
    </div>


    </div>
  )
}

export default Payment