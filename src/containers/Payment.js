import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, Redirect } from "react-router-dom";
//COMPONENTS
import CheckoutForm from "../components/CheckoutForm";
//PUBLIC KEY -- Reacteurs, as it's not my backend yet
const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
  const location = useLocation();
  //const { product_name, product_price } = location;
  //if not logged in, redirect to login page
  return location.state ? (
    <div className="container">
      <div className="payment-container">
        <span>Payment page</span>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            name={location.state.name}
            price={location.state.price}
            buyer_protection={0.4}
            shipping={5}
          />
        </Elements>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Payment;
