import React, {useState} from 'react';
import {useStripe, useElements, CardElement} from 
"@stripe/react-stripe-js";

import axios from "axios";

const CheckoutForm = () => {
const [succeed, setSucceed]= useState(false);
const stripe = useStripe();
const elements = useElements();

//avoid refresh
const handleSubmit=async(event)=>{
    event.preventDefault();

    try{//Stripe catches user bank data
const cardElement=elements.getElement(CardElement);

//ask for creating token through Stripes API
const stripeResponse=await stripe.createToken(cardElement,{
    name:"username",
});
//console.log(stripeResponse);
const stripeToken=stripeResponse.token.id;
//request
const response=await axios.post("https://lereacteur-vinted-api.herokuapp.com/payment",{stripeToken : stripeToken,});

//checks if token matches and sets state
if(response.data.status === "succeeded"){
    setSucceed(true);
}

    }catch(error)
    {console.log(error.message);}
};


    return (
        <div>
            {/*if everything is ok*/}
            {succeed ?(
                <p>Bravo, vous êtes délesté de votre richesse !</p>
            ):(
<form onSubmit={handleSubmit}>
    <CardElement/>
    <button type="submit">Valider et Pleurer</button>
</form>


            )}
        </div>
    )
}

export default CheckoutForm
