import React from 'react'
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//COMPONENTS
import CheckoutForm from "../components/CheckoutForm";
//PUBLIC KEY
const stripePromise=loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}><CheckoutForm/></Elements>
            
        </div>
    )
}

export default Payment
