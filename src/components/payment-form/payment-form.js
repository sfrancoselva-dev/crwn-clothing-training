import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {BTN_TYPES} from '../button/button';
import { PaymentFormContainer, FormContainer, PayNowButton } from "./payment-form.styles";

import { useSelector } from "react-redux";
import {overallTotalPriceSelector} from '../../store/cart/cart.selectors';
import {currentUserState} from '../../store/user/user.selector';

const PaymentForm = () => {
    const stripe = useStripe(),
          elements = useElements();
    
    const amount = useSelector(overallTotalPriceSelector);
    const currentUser = useSelector(currentUserState);
    const [isLoading, setIsLoading]= useState(false);

    const onSubmitForm = async (e) => {

        e.preventDefault();

        if(!stripe || !elements)
            return;

        setIsLoading(true); 

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({amount:  amount * 100})
        }).then(res => res.json())

        if(response) {

            const clientSecret = response.paymentIntent.client_secret;
            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name: currentUser ? currentUser.displayName : 'Guest',
              },
            },
          });

          setIsLoading(false);

          if (paymentResult.error) {
            alert(paymentResult.error.message);
          } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
              alert('Payment Successful!');
            }
          }
        };
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={onSubmitForm}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <PayNowButton btnType={BTN_TYPES.inverted} loading={isLoading}>Pay now</PayNowButton>
            </FormContainer>
        </PaymentFormContainer>
    )

};


export default PaymentForm;