import React from 'react';
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {useLocation, Redirect} from "react-router-dom";
//COMPONENTS
import CheckoutForm from "../components/CheckoutForm";
//PUBLIC KEY -- Reacteurs, as it's not my backend yet
const stripePromise=loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({token}) => {
    const location=useLocation();
    const {name, price}=location.state;
    //if not logged in, redirect to login page
    return token?(
        <div className="container">
            <div className="payment-container">
            <span>Payment page</span>
            <Elements stripe={stripePromise}>
                <CheckoutForm name={name} price={price}/></Elements>
            </div>
        </div>
    ):(<Redirect to="/login"/>)
}

export default Payment
