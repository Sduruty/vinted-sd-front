import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";
//COMPONENTS
import Recap from "../components/Recap";

const CheckoutForm = ({ name, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [succeed, setSucceed] = useState(false);

  const handleSubmit = async (event) => {
    //avoid refresh
    event.preventDefault();
    //Stripes get bank data
    const cardElement = elements.getElement(CardElement);
    //Sending data to Stripe
    const stripeResponse = await stripe.createToken(cardElement);
    const stripeToken = stripeResponse.token.id;
    //make request
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        token: stripeToken,
        title: name,
        amount: price,
      }
    );

    //console.log(response.data);
    if (response.data.status === "succeeded") {
      setSucceed(true);
    }
  };
  return (
    <div>
      {/*if everything is ok*/}
      {!succeed ? (
        <div className="payment">
          {/*check back for CSS $$$$$$$ */}
          <form onSubmit={handleSubmit}>
            <h2>Félicitations, vous vous êtes délesté de {price} euros</h2>
            <CardElement />
            <button type="submit">Payer et pleurer</button>
          </form>
        </div>
      ) : (
        <Recap />
      )}
    </div>
  );
};

export default CheckoutForm;
